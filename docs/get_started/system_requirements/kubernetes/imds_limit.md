# Configuring the IMDS hop limit

This topic provides the steps to configure the Instance Metadata Service (IMDS) hop limit to `2` after installing the Amazon Elastic Kubernetes Service (Amazon EKS) v1.30. Setting the hop limit limit to `2` is important in a containerized environment to prevent pods from getting stuck in a `Pending` state due to IMDSv2 access issues, especially when using the Amazon Elastic Block Store (Amazon EBS) Container Storage Interface (CSI) driver.

## Background

After upgrading to EKS v1.30, you may encounter issues where most of the pods remain in `Pending` state. This could be due to Kubernetes dynamically provisioning EBS volumes through the EBS CSI driver. The EBS CSI driver relies on the IMDS to fetch Amazon Elastic Compute Cloud (EC2) instance metadata. When the hop limit is not properly configured, it can cause the following error:

```
Retrieving IMDS metadata failed, falling back to Kubernetes metadata" err="could not get EC2 instance identity metadata: operation error ec2imds: GetInstanceIdentityDocument, canceled, context deadline exceeded.
```

To resolve this error, you must set the IMDS `http-put-response-hop-limit` to `2` in the launch template.

## Setting the IMDS hop limit in the launch template

To configure the IMDS `http-put-response-hop-limit`, refer to the following steps:

1. [Update the IMDS hop limit on EKS instances.](#updating-the-imds-hop-limit-on-eks-instances)
2. [Validate the IMDS hop limit configuration.](#validating-the-imds-hop-limit-configuration)
3. [Test and monitor the EBS CSI driver.](#testing-and-monitoring-the-ebs-csi-driver)

### Updating the IMDS hop limit on EKS instances

When running EKS worker nodes in a containerized environment, IMDS calls can fail because of additional network hops introduced by containers. To fix this, update the IMDS `http-put-response-hop-limit` to `2`.

1.	Update the EKS worker node launch template.
    1. Navigate to the AWS EC2 console.
    2. Select the launch template associated with your EKS worker nodes.
    3. Under **Advanced details**, locate **Metadata response hop limit**.
    4. Set the **Metadata response hop limit** to 2.

2.	Apply the updated template to your EKS instances. Update the Auto Scaling Group (ASG) for your EKS worker nodes to use the new launch template version.
    This applies the updated hop limit configuration to all new nodes in your EKS cluster.

3.	(Optional) Terminate existing nodes.
    
    After applying the new launch template, you can manually terminate the old instances to allow the Auto Scaling Group to replace them with new instances configured with the correct hop limit.

### Validating the IMDS hop limit configuration

Verify that the http-put-response-hop-limit is set to 2 using the following AWS CLI command:

```bash
aws ec2 describe-instances --instance-ids <instance-id> --query "Reservations[*].Instances[*].MetadataOptions"
```

### Testing and monitoring the EBS CSI Driver

1.	After setting the hop limit, monitor the EBS CSI driver logs using the following command:

    ```bash
    kubectl logs -n kube-system daemonset/ebs-csi-node
    ```

2.	Confirm that the error messages related to retrieving IMDS metadata no longer appear and that your pods are transitioning from `Pending` state to the `Running` state.

3.	Ensure that Persistent Volume (PV) and Persistent Volume Claims (PVCs) are dynamically provisioned as expected.

## Security considerations

According to the [Aqua Security recommendation KHV053](https://avd.aquasec.com/misconfig/kubernetes/khv053/){target="_blank"}, the IMDS service can expose sensitive metadata about EC2 instances. See the following security best practices:

- Monitor and restrict access to the IMDS using proper security controls such as IAM roles and network policies.
- If using IMDS for your application is not required, either disable IMDS or limit access using iptables rules.

## Conclusion

It is recommended to set the `IMDS http-put-response-hop-limit` to `2` when running containerized workloads in Amazon EKS. This configuration ensures that metadata retrieval through IMDSv2 works as expected, reducing delays and improving pod startup times. Following the steps outlined in this document helps you configure your EKS v1.30 cluster to avoid the common `Pending` state issue with pods and to ensure that EBS volumes are dynamically provisioned without errors.

For more information, see the following external documentation:

- [Aqua Security KHV053 Misconfiguration Documentation](https://avd.aquasec.com/misconfig/kubernetes/khv053/){target="_blank"}
- [AWS EC2 Instance Metadata Service (IMDS) Configuration](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-service.html){target="_blank"}
