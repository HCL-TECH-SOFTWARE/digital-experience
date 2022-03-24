# Troubleshooting cloud container Containers

This section lists the basics of troubleshooting the containerized image or your deployment.

If the issue is suspected to be specific to the containerized image or deployment, please collect the following information. Otherwise, please follow the standard Mustgather for the reported problem.

**General**

-   Provide the proper context regarding the issue.
    -   What is failing?
    -   What events occurred leading up to the failure?
    -   What are the expected results if unclear?
-   Include error messages, logs, screen captures, and other information that may help describe the problem.
-   Include the results of '`docker inspect *IMAGEID*`'.

**Kubernetes**

-   Include the following information:
    -   ```
kubectl version
```

    -   ```
kubectl get nodes
```

    -   ```
kubectl describe customresourcedefinitions
```

    -   ```
kubectl describe DxDeployment -n <your_namespace>
```

    -   ```
kubectl api-resources
```

    -   ```
kubectl api-versions
```

    -   Command or procedure used for deployment.

        **Note:** See the section for the recommended deployment method, [Deploy HCL Digital Experience 9.5 Container to Amazon EKS](kubernetes_eks.md).

    -   The files generated at the time of the deployment and documented at the end of the section on [Understanding the HCL 9.5 Container deployment on Amazon Elastic Kubernetes Service](understanding_kubernetes_eks_deployment.md).

**OpenShift**

-   Include the following information:
    -   ```
oc version
```

    -   ```
oc get nodes
```

    -   ```
oc describe customresourcedefinitions
```

    -   ```
oc describe DxDeployment -n <your_namespace>
```

        -   To set project:

            ```
            oc project <your_namespace>
            ```

    -   ```
oc api-resources
```

    -   ```
oc api-versions
```

    -   Command or procedure used for deployment.

        **Note:** See the section for the recommended deployment method, [Red Hat OpenShift](openshift.md).

    -   The files generated at the time of the deployment and documented at the end of the section on [Understanding the OpenShift deployment](understanding_openshift_deployment.md).

**Docker**

-   What is the version of the Docker engine?
-   What is the operating system?
-   What is the exact command used to start \(or attempt to start\) the container?
-   Include results of `docker images`.
-   Include results of `docker ps -a`

|Issue|Solution|
|-----|--------|
|-   Out of memory

|Ensure that the memory request and the limit defined in the custom resource are high enough for the specified heap size in the Portal configuration|
|-   DX pod will not start
-   Unschedulable pods
-   Pod has unbound immediate `PersistentVolumeClaims`

|Ensure that the specified volume exists, and meets the deployment requirements. To reuse a volume, see the [Delete](openshift.md#uicontrol_t1m_t4m_yjb) topic.|

[Logging and tracing for HCL Digital Experience Containers and services](../trouble/logging_tracing_containers_and_new_services.md) - Access the tracing options that can be used to capture logging and tracing for HCL Digital Experience \(DX\) 9.5 container based services with container update CF181 and higher releases.

**Parent topic:**[Operator-based deployment](../containerization/deploy_container_platforms.md)

