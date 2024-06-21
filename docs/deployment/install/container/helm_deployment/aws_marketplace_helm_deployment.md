---
title: AWS Marketplace Helm Deployment
---

# AWS Marketplace Helm deployment 

This topic provides information on how to deploy HCL Digital Experience (DX) acquired from the AWS Marketplace on both Amazon-managed Kubernetes and self-managed Kubernetes for on-premise deployments. 

The latest DX 9.5 container images and Helm charts available for HCL DX 9.5 will be available shortly through the [AWS Marketplace](https://aws.amazon.com/marketplace/pp/prodview-xxxuhyr7adj3a) for customers who purchase through the Marketplace as a containerized product offering. Upon subscription, you can utilize the Helm-based fulfillment option presented for selection, enabling the deployment of DX on a Kubernetes cluster of their preference.

## Prerequisites

### Configuring TLS certificate

The default setting for HAProxy is SSL enabled. Make sure that the secret containing the certificate is correctly created within the cluster. Refer to [Use certificate](../preparation/mandatory_tasks/prepare_configure_networking/#use-certificate) for more information.

### Configuring volumes

Currently, the Helm chart is configured with the `gp3` storage class, which is the default storage class provided by AWS. 

However, to use the full functionality and to scale all Pods, it is recommended to specify a different value for `ReadWriteMany` volumes. For self-managed clusters, you must specify all volumes according to the storage in your cluster in the `custom-values.yaml` file. See [Prepare persistent volume](../preparation/mandatory_tasks/prepare_persistent_volume_claims/) for more information.

## Launching with Helm Deployment

Following your subscription, you are now entitled to a HCL DX Cloud Native license and are eligible to configure the `Helm chart fulfillment option` within your preferred Kubernetes environment. Initially, there are only two options: Amazon-managed Kubernetes and self-managed Kubernetes for on-premise deployments.

Refer to the `Launch Instructions` found in the configuration section of the HCL DX Cloud Native Product page in AWS. The `Launch Instructions` include the necessary instructions and commands for launching DX on an Amazon-managed Kubernetes or self-managed Kubernetes. The following steps are intended solely as launch guidelines.

### Deploying in Amazon-managed Kubernetes

If your cluster is prepared and your AWS CLI is configured, see [Set up the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html). To deploy HCL DX 9.5 on an Amazon-managed Kubernetes cluster, refer to the following steps:

1. [Create an AWS IAM role and Kubernetes service account.](#creating-an-aws-iam-role-and-kubernetes-service-account)
2. [Launch the software.](#launching-the-software-on-an-amazon-managed-kubernetes-cluster)

#### Creating an AWS IAM role and Kubernetes service account

Applications within containers of a Pod can employ an AWS SDK or the AWS CLI to dispatch API requests to AWS services, utilizing AWS Identity and Access Management (IAM) permissions. These applications must authenticate their AWS API requests with AWS credentials. IAM roles for service accounts provide the capability to manage credentials for your applications. Additionally, they authenticate the cluster for pulling images from the ECR.

It is crucial to ensure that the service account is configured with appropriate IAM roles because the DX License Manager utilizes it to verify entitlements.

-  For information about IAM roles for service accounts, see [IAM roles for service accounts](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html).
-  For information about assuming IAM roles to service accounts, see [Configure a Kubernetes service account to assume an IAM role](https://docs.aws.amazon.com/eks/latest/userguide/associate-service-account-role.html#irsa-create-role).

The following is an example of creating a service account and associating IAM roles with it:

```bash
kubectl create namespace <namespace>
            
eksctl create iamserviceaccount \
    --name hcl-digital-experience-service-account \
    --namespace <namespace> \
    --cluster <ENTER_YOUR_CLUSTER_NAME_HERE> \
    --attach-policy-arn arn:aws:iam::aws:policy/AWSMarketplaceMeteringFullAccess \
    --attach-policy-arn arn:aws:iam::aws:policy/AWSMarketplaceMeteringRegisterUsage \
    --attach-policy-arn arn:aws:iam::aws:policy/service-role/AWSLicenseManagerConsumptionPolicy \
    --approve \
    --override-existing-serviceaccounts
```

#### Launching the software on an Amazon-managed Kubernetes cluster

After configuring the service account and assuming IAM roles to the service account, pull the Helm chart from the Elastic Container Registry (ECR) and launch the application using the Helm CLI.

1. Establish the connection with ECR.

       ```bash
       export HELM_EXPERIMENTAL_OCI=1

       aws ecr get-login-password \
           --region us-east-1 | helm registry login \
           --username AWS \
           --password-stdin 709825985650.dkr.ecr.us-east-1.amazonaws.com
       ```

2. Pull the chart.

       ```bash
       export DX_CHART_VERSION=<helm-chart-version>
       mkdir hcl-dx-deployment && cd hcl-dx-deployment
       helm pull oci://709825985650.dkr.ecr.us-east-1.amazonaws.com/hcl-america/hcl-dx-deployment --version $DX_CHART_VERSION
       tar xf "hcl-dx-deployment-$DX_CHART_VERSION.tgz"
       ```

3. Install the Helm chart using Helm CLI.

       ```bash
       helm install <release-name> \
           --namespace <namespace> ./hcl-dx-deployment \
           --set configuration.licenseManager.serviceAccountName=hcl-digital-experience-service-account 
       ```

       
      - Explicitly set `configuration.licenseManager.serviceAccountName` with the service account previously set for entitlement checking.
      - For any `helm upgrade`, make sure to either keep the `--set` parameters from the `helm install` command or create and reuse a custom values file using `helm get values`.


### Deploying in self-managed Kubernetes

To launch on an on-premise cluster that is outside of Amazon, refer to the following steps:

1. [Create a license token and IAM role.](#creating-a-license-token-and-iam-role)
2. [Save the token and IAM role as a Kubernetes secret.](#saving-the-token-and-iam-role-as-a-kubernetes-secret)
3. [Launch the software.](#launching-the-software-an-on-premise-cluster-outside-of-amazon)

#### Creating a license token and IAM role

When operating with a self-managed cluster, it is required to establish a method for the service account to authenticate with AWS services. A license token is employed to authenticate the cluster for accessing AWS services. 

To generate a license token, click **Create token** on the launch page. This action generates a token alongside an IAM role, which you can can then save into a CSV file. Subsequently, this CSV file is used to create a "license token secret" within the cluster.

#### Saving the token and IAM role as a Kubernetes secret

1. Create a service account that will use the license token.

       ```bash
       kubectl create namespace <namespace>
       kubectl create serviceaccount hcl-digital-experience-service-account --namespace <namespace>
       ```

2. For the cluster to use the generated license token, you must save it as a secret inside the cluster. You can use the token defined in this secret throughout the launch steps.

       ```bash
       AWSMP_TOKEN=<CREATE_TOKEN_ABOVE>
       AWSMP_ROLE_ARN=<CREATE_ROLE_ABOVE>

       kubectl create secret generic awsmp-license-token-secret \
       --from-literal=license_token=$AWSMP_TOKEN \
       --from-literal=iam_role=$AWSMP_ROLE_ARN \
       --namespace <namespace>
       ```

    The token is then used to define other environment variables needed for access and authentication.

       ```bash
       AWSMP_ACCESS_TOKEN=$(aws license-manager get-access-token \
           --output text --query '*' --token $AWSMP_TOKEN --region us-east-1)

       AWSMP_ROLE_CREDENTIALS=$(aws sts assume-role-with-web-identity \
                       --region 'us-east-1' \
                       --role-arn $AWSMP_ROLE_ARN \
                       --role-session-name 'AWSMP-guided-deployment-session' \
                       --web-identity-token $AWSMP_ACCESS_TOKEN \
                       --query 'Credentials' \
                       --output text)   

       export AWS_ACCESS_KEY_ID=$(echo $AWSMP_ROLE_CREDENTIALS | awk '{print $1}' | xargs)
       export AWS_SECRET_ACCESS_KEY=$(echo $AWSMP_ROLE_CREDENTIALS | awk '{print $3}' | xargs)
       export AWS_SESSION_TOKEN=$(echo $AWSMP_ROLE_CREDENTIALS | awk '{print $4}' | xargs)
       ```

3. Create an image pull secret and patch it to the service account to validate the image pull from the ECR.

       ```bash
       kubectl create secret docker-registry awsmp-image-pull-secret \
       --docker-server=709825985650.dkr.ecr.us-east-1.amazonaws.com \
       --docker-username=AWS \
       --docker-password=$(aws ecr get-login-password --region us-east-1) \
       --namespace <namespace>

       kubectl patch serviceaccount hcl-digital-experience-service-account \
       --namespace <namespace> \
       -p '{"imagePullSecrets": [{"name": "awsmp-image-pull-secret"}]}'
       ```

#### Launching the software an on-premise cluster outside of Amazon

After configuring the service account and defining the ENVs and pull secrets, pull the Helm chart from the ECR and launch the application using the Helm CLI.

1. Establish connection with ECR.

       ```bash
       export HELM_EXPERIMENTAL_OCI=1

       aws ecr get-login-password \
           --region us-east-1 | helm registry login \
           --username AWS \
           --password-stdin 709825985650.dkr.ecr.us-east-1.amazonaws.com
       ```

2. Pull the Helm chart.

       ```bash
       export DX_CHART_VERSION=<helm-chart-version>
       mkdir hcl-dx-deployment && cd hcl-dx-deployment
       helm pull oci://709825985650.dkr.ecr.us-east-1.amazonaws.com/hcl-america/hcl-dx-deployment --version $DX_CHART_VERSION
       tar xf "hcl-dx-deployment-$DX_CHART_VERSION.tgz"
       ```

3. Install the Helm chart using Helm CLI.

       ```bash
       helm install <release-name> \
           --namespace <namespace> ./hcl-dx-deployment \
           --set configuration.licenseManager.serviceAccountName=hcl-digital-experience-service-account \
           --set configuration.licenseManager.licenseConfigSecret=awsmp-license-token-secret  
       ```

      - Explicitly set `configuration.licenseManager.serviceAccountName` and `configuration.licenseManager.licenseConfigSecret=awsmp-license-token-secret` with the service account previously set for entitlement checking.
      - For any `helm upgrade`, make sure to either keep the `--set` parameters from the `helm install` command or create and reuse a custom values file using `helm get values`.


## Additional configurations

### Updating the initial randomized password

In accordance with AWS Marketplace requirements, container-based products are required to utilize an initial randomized password. These products should refrain from using initial fixed or blank passwords for external administrative access. To adhere to this guideline, initial randomized passwords for the application credentials within custom secrets are integrated. See [Configure credentials](../preparation/optional_tasks/optional_configure_credentials/) for more information.

### Patching Runtime Controller service account

!!! note
       Manually patching the Runtime Controller Service Account using the `custom-values` defined in this section is only necessary when there are image pull errors in the Runtime Controller pod. Otherwise, it is automatically executed upon deployment.

After deploying HCL DX Kubernetes 9.5 from AWS Marketplace onto either an Amazon Elastic Kubernetes (EKS) cluster or a self-managed cluster, a service account is utilized to ensure that all container resources are correctly authenticated with the AWS Marketplace ECR. Each container is configured with the service account created within the cluster.

In self-managed cluster deployments, the service account retains the imagePullSecret, which contains the license token created for authenticating image pulls from the ECR. However, the Runtime Controller Pod already employs its own service account to validate cluster resources. In the chart provided, the imagePullSecret of the newly created service account is integrated which is utilized for authentication from AWS Marketplace ECR, and patched to the Runtime Controller Service account. This enables authentication when pulling the Runtime Controller image from the AWS Marketplace ECR. This is achieved by referencing the name of the imagePullSecret of the HCL service account used for AWS Marketplace.

If the Runtime Controller service account fails to patch with the `imagePullSecret`, you can manually override it by explicitly specifying the `imagePullSecret` name in the Helm deploy-values before issuing a Helm upgrade command. Subsequently, this information is read, and the Runtime Controller is patched with the appropriate `imagePullSecret`, enabling the RTC Container to pull the image from the ECR.

```yaml
configurations:
    licenseManager:
        # AWS Service Account Name for Amazon managed Kubernetes deployments
        serviceAccountName: hcl-digital-experience-service-account
        # AWS License Config Secret for Self Managed Clusters
        licenseConfigSecret: awsmp-license-token-secret 
    runtimeController:
        # For AWS Marketplace deployments Runtime Controller will try to lookup the pull secret from the ServiceAccount specified in configuration.licenseManager.serviceAccountName.
        # The awsMpPullSecret can be used to override the pull secret and not use the lookup. 
        awsMpPullSecret: awsmp-image-pull-secret
```

### Usage tracking and reporting

To monitor current user session tracking in DX production deployments on Kubernetes platforms, a manual tracking method is implemented in the deployments. See [Tracking user session consumption and exporting usage reports](../../../../../get_started/download/software_licensing_portal/configure_entitlement_checks/export_usage_report/) for more information.
