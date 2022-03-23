# Planning your container deployment using Helm

Helm is a software package manager that simplifies deployment of applications and services to Red Hat OpenShift and Kubernetes container platforms.

1.  **Before proceeding with your HCL DX 9.5 deployment using Helm, review the following Help Center topics:**
    -   [Deploying HCL DX CF196 to container platforms using Helm](helm_cf192andlater.md) for an understanding of the capabilities, deployment structures, configuration and scaling options available for HCL DX 9.5 CF196 and later deployments.
    -   [Containerization requirements and limitations](limitations_requirements.md) for an understanding of the requirements, including capacity planning, and current limitations for an HCL Digital Experience 9.5 Container Update CF196 and later deployment using [Helm](helm.md).
2.  **Prepare your HCL DX 9.5 target environment.**

    This section outlines mandatory and optional tasks that need to be done before installation of the HCL Digital Experience 9.5 Container Update CF196 to Google Kubernetes Engine using Helm. Support to deploy to Red Hat OpenShift, Amazon Elastic Kubernetes Service \(Amazon EKS\), and Microsoft Azure Kubernetes Service \(AKS\) using Helm is added in Container Update CF197.

    This includes preparing your cluster to have proper access to application container images, creating a custom configuration file that fits your deployment needs and configuring network and application settings to allow your HCL Digital Experience 9.5 CF196 and later deployment to work properly.

3.  **Mandatory tasks:**

    The following tasks are mandatory for HCL Digital Experience 9.5 Container deployment to operate in your Kubernetes cluster using Helm.

    1.  **Prepare a namespace.**

        Before you can deploy HCL Digital Experience, it is recommended that you create a namespace inside your Kubernetes Cluster.

        You need to create a namespace in your Kubernetes cluster that contains all the resources related to your HCL DX 9.5 Container deployment. It is recommended that this is created before deployment as you may need to add an ImagePullSecret or configure the TLS certificate for the Ambassador Ingress before deployment.

        Identify a name for your namespace and create it using the following syntax:

        -   **On Kubernetes platforms**

            **Kubectl**

            ```
            # Command to create a namespace using kubectl
            # This example creates a namespace called "my-namespace"
            kubectl create ns my-namespace
            ```

        -   **OpenShift**

            For OpenShift, you must create a namespace with specific settings.

            Use the following namespace definition and save it as namespace.yaml. You must replace `my-namespace` in the template with the name of the namespace you are using.

            ```
            apiVersion: v1
            kind: Namespace
            metadata:
              name: my-namespace
              annotations:
                openshift.io/sa.scc.mcs: "s0:c24,c4"
                openshift.io/sa.scc.supplemental-groups: "1001/10000"
                openshift.io/sa.scc.uid-range: "1000/10000"
            ```

            **OpenShift client**

            ```
            # Command to create namespace from template file
            oc apply -f namespace.yaml
            ```

    2.  **Prepare the Helm deployment configuration file.**

        Create a configuration file that fits the needs of your target HCL DX 9.5 Container deployment. The configuration file is the heart of your deployment using Helm. It defines how HCL Digital Experience 9.5 is deployed to supported platforms, and how it behaves during runtime operations. This section explains how to create your own configuration file and how to leverage the existing `values.yaml` inside the Helm Chart. It also explains how to optionally overwrite settings in case the default set may not be sufficient.

        **Important:** Modification to any files \(chart.yaml, templates, crds\) in hcl-dx-deployment-vX.X.X\_XXXXXXXX-XXXX.tar.gz, except custom-values.yaml or values.yaml, is not supported.

        -   **The configuration flow**

            Helm provides multiple ways to define values that can be processed to run an installation. Processing involves a three-step approach, that is ordered sequentially within a hierarchy.

        -   **Helm Chart `values.yaml`**

            Every Helm Chart contains a `values.yaml` file. It defines all configurable parameters that a Helm Chart accepts and the default values that are used during an installation. If you do not provide any other configuration during an installation, Helm extracts all deployment information from the `values.yaml` file inside the Helm Chart.

            All parameters that were not overwritten using any other configuration methods return to their default values from the `values.yaml` file inside the Helm Chart.

        -   **Custom value files**

            Helm provides you with a way to maintain your own custom values files. You can specify a custom values file you want to use when running an installation.

            This custom values file only needs to contain the parameters that you want to overwrite with your preferred settings.

            **Note:** There is no need to have the same complete set of parameters inside your custom values file, as there are available by default in the Helm Chart `values.yaml`. As outlined previously in this section, everything that is not defined in your custom values file are applied using the defaults from `values.yaml` inside the Helm Charts.

            Please be aware that the parameters you can configure using your custom values file need to exactly align with those provided by the Helm Charts own values.yaml. You cannot configure anything that is not exposed in the values.yaml definition.

        -   **Override parameters**

            It is possible to define values using a --set parameter in the Helm CLI during the installation of a Helm Chart.

            Since there are many values that can be configured in the HCL Digital Experience deployment, we do not recommend this technique, since it makes installation commands very large and confusing.

        -   **The default HCL DX 9.5 Container `values.yaml` file**

            HCL DX 9.5 Helm Chart provides a default values.yaml, which contains all possible configuration parameters.

            To access this file, you may use the following command when you have the HCL DX 9.5 CF196 or later [Helm Chart tar.gz](docker.md) file on hand:

            ```
            # Command to extract values.ymal from Helm Chart
            helm show values hcl-dx-deployment.tar.gz > values.yaml
            ```

            The file contains all configurable parameters and their default values. You may use this file as a blueprint to create your own `custom-values.yaml`. You may also just rename the extracted `values.yaml` to `custom-values.yaml`.

            **Note:** Having a complete copy of the default `values.yaml` is not necessary and may bloat your configuration file with values that are already present in the DX Helm Chart.

        -   **A custom configuration file**

            Helm allows you to provide a custom configuration file during the installation or upgrade process.

            That file only overwrites settings that are defined within it. For parts of the configuration that are not defined in your custom configuration file, Helm returns to the default values in the `values.yaml` file inside the DX Helm Chart.

            This allows you to create a file that only overwrites settings that are required, keeping the overall size of your configuration file small and the maintainability high.

            This Help Center documentation refers to the custom configuration file as `custom-values.yaml`. You may name your custom configuration file as preferred.

    3.  **Load container images.**

        This section presents how to load the DX 9.5 Container Update CF196 or later images into your container image repository, tag them to fit your repository structure, and push them to your repository, so that all Nodes in your Kubernetes or OpenShift cluster can deploy HCL Digital Experience 9.5 Pods.

        To use HCL Digital Experience 9.5 in your Kubernetes or OpenShift cluster, you have to make the container images available to all nodes of your cluster. Usually this is done by providing them through a container image repository.

        Depending on your cloud provider, there may be different types of default container image repositories already configured. Refer to the documentation of your cloud provider for setup and use of such platform container image repository.

        It is assumed that you have a repository configured and running, and is technically reachable from all your Kubernetes or OpenShift cluster nodes.

        In the following guidance, the docker CLI is used as a command reference. Tools like Podman may also be used, but are not described in this documentation. The procedure for the use of such tools are the same.

    4.  **Extract HCL Digital Experience 9.5 package.**

        The HCL Digital Experience 9.5 Container Update packages are provided in a compressed .zip file, that can easily be unzipped using a utility of your choice. Refer to the latest [HCL DX 9.5 Container Update Release CF196 and later file listings in the Docker deployment](docker.md) topic:

        **Note:** The following are examples using Container Update CF196 files. Replace those references with the HCL DX 9.5 Container Update CFxxx release files you are deploying.

        ```
        # Unzip of HCL Digital Experience 9.5 CFxxx package
        unzip hcl-dx-kubernetes-v95-CF196.zip
        ```

        The package includes all DX 9.5 container images, and Helm Charts as tar.gz files.

        The content of the package looks similar to the following structure:

        ```
        hcl-dx-kubernetes-v95-CF196.zip
        
          HCL DX notices V9.5 CF196.txt                                                                
        # Notices file
        
          dx-dx-ambassador-image-154.tar.gz
        # Image for the Ambassador Ingress
        
          hcl-dx-cloud-operator-image-v95_CFXXX_XXXXXXXX-XXXX.tar.gz
        # Image for the Core Operator (not needed for Helm deployments)
        
          hcl-dx-cloud-scripts-v95_CFXXX_XXXXXXXX-XXXX.zip
        # Cloud deployment scripts incl. dxctl (not needed for Helm deployments)
        
          hcl-dx-content-composer-image-vX.X.X_XXXXXXXX-XXXX.tar.gz
        # Image for Content Composer
        
          hcl-dx-core-image-v95_CFXXX_XXXXXXXX-XXXX.tar.gz
        # Image for Core
        
          hcl-dx-digital-asset-management-operator-image-v95_CFXXX_XXXXXXXX-XXXX.tar.gz
        # Image for the Digital Asset Management Operator (not needed for Helm deployments)
        
          hcl-dx-digital-asset-manager-image-vX.X.X_XXXXXXXX-XXXX.tar.gz
        # Image for Digital Asset Management
        
          hcl-dx-experience-api-sample-ui-vX.X.X.XXXXXXXX-XXXX.zip
        # Sample UI for Experience API
        
          hcl-dx-image-processor-image-vX.X.X_XXXXXXXX-XXXX.tar.gz
        # Image for Image Processor
        
          hcl-dx-openldap-image-v1.1.0-master_XXXXXXXX_XXXXXXXXXX.tar.gz
        # Image for OpenLDAP
        
          hcl-dx-postgres-image-vX.X.X_XXXXXXXX-XXXX.tar.gz
        # Image for Digital Asset Management Persistence
        
          hcl-dx-redis-image-X.X.X.tar.gz
        # Image for Ambassador Ingress Redis
        
          hcl-dx-remote-search-image-v95_CFXXX_XXXXXXXX-XXXX.tar.gz
        # Image for Remote Search
        
          hcl-dx-ringapi-image-vX.X.X_XXXXXXXX-XXXX.tar.gz
        # Image for Ring API
        
          hcl-dx-runtime-controller-image-vX.X.X_XXXXXXXX-XXX.tar.gz
        # Image for Runtime Controller
        
          hcl-dx-deployment-vX.X.X_XXXXXXXX-XXX.tar.gz
        # Helm Charts
        ```

    5.  **Load images locally.**

        To load the individual image files, you may use the following command:

        ```
        # Command to load container image into local repository
        # docker load < image-file-name.tar.gz
        docker load < hcl-dx-core-image-v95_CFXXX_XXXXXXXX-XXXX.tar.gz
        ```

        If you want to load all DX 9.5 CFxxx image files via one command, you may use the following command:

        ```
        # Command to load all images at once
        # Since HCL Digital Experience images are all containing the word "images", 
        # we can filter for fitting tar.gz files
        ls -f | grep image | xargs -L 1 docker load -i
        ```

        This loads all images to your local repository, ready for further usage.

        You may verify if the loading is successful with the following command:

        ```
        # List all images
        docker images
        
        # Command output (minified, example)
        REPOSITORY                                    TAG                                   IMAGE ID       CREATED         SIZE
        hcl/dx/remote-search                          v95_CF195_20210514-1708               e4c46618f404   4 weeks ago     2.25GB
        hcl/dx/cloud-operator                         v95_CF195_20210515-0201               62cc304706a3   4 weeks ago     220MB
        hcl/dx/core                                   v95_CF195_20210514-1708               36e30c620cdd   4 weeks ago     6.29GB
        hcl/dx/openldap                               v1.1.0-master_20210514_1621013302     a5519e06dd17   4 weeks ago     772MB
        hcl/dx/image-processor                        v1.8.0_20210514-1712                  d5d99d86f81a   4 weeks ago     507MB
        hcl/dx/digital-asset-manager                  v1.8.0_20210514-1711                  19c8b76b1cad   4 weeks ago     547MB
        hcl/dx/digital-asset-management-operator      v95_CF195_20210514-1714               bc0f5638817a   4 weeks ago     218MB
        hcl/dx/content-composer                       v1.8.0_20210514-1707                  62b7b54d3895   4 weeks ago     427MB
        hcl/dx/postgres                               v1.8.0_20210514-1708                  d94672f395ad   4 weeks ago     498MB
        hcl/dx/ringapi                                v1.8.0_20210514-1709                  505eebb52ebf   4 weeks ago     397MB
        ```

    6.  **Re-tag images.**

        If you are using a Kubernetes cluster that is not configured to operate on your local machine, you may need to push the HCL Digital Experience 9.5 container images to a remote repository.

        To do so, you need to re-tag the images to point to your remote repository.

        **Important Note:** Do not change the version tags of the DX 9.5 images, as they are used for uniquely identifying which versions of DX applications are running in your cluster.

        You may re-tag any image using the following command:

        ```
        # Re-tag an existing loaded image
        # docker tag OLD_IMAGE_PATH:VERSION NEW_IMAGE_TAG:VERSION
        
        # Example command for DX Core:
        docker tag hcl/dx/core:v95_CF195_20210514-1708 my/test/repository/hcl/dx/core:v95_CF195_20210514-1708
        ```

        If you want to prefix all HCL Digital Experience 9.5 container images with your repository structure, you may use the following command:

        ```
        # Command to prefix all HCL Digital Experience container images
        # export the prefix for the repository structure, without tailing slash
        export REMOTE_REPO_PREFIX="my/test/repository"
        
        # First we list all HCL Digital Experience 9.5 Images, then we remove the first line containing the header
        # Then we execute the docker tag command, prefixing each image with the $REMOTE_REPO_PREFIX
        docker images hcl/dx/* | tail -n +2 | awk -F ' ' '{system("docker tag " $1 ":" $2 " $REMOTE_REPO_PREFIX/" $1 ":" $2) }'
        ```

        The output may be verified by using the following command:

        ```
        # List all images
        docker images
        
        # Command output (minified, example)
        
        REPOSITORY                                                    TAG                                  IMAGE ID       CREATED         SIZE
        hcl/dx/remote-search                                          v95_CF195_20210514-1708              e4c46618f404   4 weeks ago     2.25GB
        my/test/repository/hcl/dx/remote-search                       v95_CF195_20210514-1708              e4c46618f404   4 weeks ago     2.25
        hcl/dx/cloud-operator                                         v95_CF195_20210515-0201              62cc304706a3   4 weeks ago     220MB
        my/test/repository/hcl/dx/cloud-operator                      v95_CF195_20210515-0201              62cc304706a3   4 weeks ago     220MB
        hcl/dx/core                                                   v95_CF195_20210514-1708              36e30c620cdd   4 weeks ago     6.29GB
        my/test/repository/hcl/dx/core                                v95_CF195_20210514-1708              6e30c620cdd    4 weeks ago     6.29GB
        hcl/dx/openldap                                               v1.1.0-master_20210514_1621013302    a5519e06dd17   4 weeks ago     772MB
        my/test/repository/hcl/dx/openldap                            v1.1.0-master_20210514_1621013302    a5519e06dd17   4 weeks ago     772MB
        hcl/dx/image-processor                                        v1.8.0_20210514-1712                 d5d99d86f81a   4 weeks ago     507MB
        my/test/repository/hcl/dx/image-processor                     v1.8.0_20210514-1712                 d5d99d86f81a   4 weeks ago     507MB
        hcl/dx/digital-asset-manager                                  v1.8.0_20210514-1711                 19c8b76b1cad   4 weeks ago     547MB
        my/test/repository/hcl/dx/digital-asset-manager               v1.8.0_20210514-1711                 19c8b76b1cad   4 weeks ago     547MB
        hcl/dx/digital-asset-management-operator                      v95_CF195_20210514-1714              bc0f5638817a   4 weeks ago     218MB
        my/test/repository/hcl/dx/digital-asset-management-operator   v95_CF195_20210514-1714              bc0f5638817a   4 weeks ago     218MB
        my/test/repository/hcl/dx/content-composer                    v1.8.0_20210514-1707                 62b7b54d3895   4 weeks ago     427MB
        hcl/dx/content-composer                                       v1.8.0_20210514-1707                 62b7b54d3895   4 weeks ago     427MB 
        hcl/dx/postgres                                               v1.8.0_20210514-1708                 d94672f395ad   4 weeks ago     498MB
        my/test/repository/hcl/dx/postgres                            v1.8.0_20210514-1708                 d94672f395ad   4 weeks ago     498MB
        hcl/dx/ringapi                                                v1.8.0_20210514-1709                 505eebb52ebf   4 weeks ago     397MB
        my/test/repository/hcl/dx/ringapi                             v1.8.0_20210514-1709                 505eebb52ebf   4 weeks ago     397MB
        
        ```

    7.  **Push to repository.**

        You may use the following command to push the container images to your repository:

        ```
        # Push the new tagged images
        # docker push NEW_IMAGE_TAG:VERSION
        # Example command for core:
        docker push my/test/repository/hcl/dx/core:v95_CF195_20210514-1708
        ```

        If you want to push all your locally processed images, you may use the following command:

        ```
        # Command to push all HCL Digital Experience images to a remote repository
        # export the prefix for the repository structure, without tailing slash
        export REMOTE_REPO_PREFIX="my/test/repository"
        
        # Push the images, first we filter for the ones necessary
        # Second we execute a docker push for each image
        docker images $REMOTE_REPO_PREFIX/hcl/dx/* | awk -F ' ' '{system("docker push " $1 ":" $2)}'
        ```

        After running this command, Docker goes ahead and pushes the images to your remote repository. After the push, the container images are now ready for use by your Kubernetes or OpenShift cluster.

    8.  **Adjust deployment configuration.**

        After you have successfully prepared all DX 9.5 images, you need to configure the images inside your custom-values.yaml.

        The following syntax may be used to define the correct image configuration for your environment:

        **Note:** If deploying to a [Hybrid](hybrid_deployment_helm.md) environment, with DX 9.5 Container Update CF198 or later, the Core needs to be set as false, since Core is already installed to an On-premise Server.

        ```
        # Fill in the values fitting to your configuration
        # Ensure to use the correct image version tags
        images:
          repository: "my/test/repository"
          # Image tag for each application
          tags:
            contentComposer: "v95_CFXXX_XXXXXXXX-XXXX"
            core: "v95_CFXXX_XXXXXXXX-XXXX"
            designStudio: "vX.X.X_XXXXXXXX-XXXX"
            digitalAssetManagement: "vX.X.X_XXXXXXXX-XXXX"
            imageProcessor: "vX.X.X_XXXXXXXX-XXXX"
            openLdap: "vX.X.X_XXXXXXXX-XXXX"
            persistence: "vX.X.X_XXXXXXXX-XXXX"
            remoteSearch: "v95_CFXXX_XXXXXXXX-XXXX"
            ringApi: "vX.X.X_XXXXXXXX-XXXX"
            ambassadorIngress: "vX.X.X_XXXXXXXX-XXXX"
            ambassadorRedis: "vX.X.X_XXXXXXXX-XXXX"
            runtimeController: "vX.X.X_XXXXXXXX-XXXX"
          # Image name for each application
          names:
            contentComposer: "hcl/dx/content-composer"
            core: "hcl/dx/core"
            designStudio: "hcl/dx/design-studio"
            digitalAssetManagement: "hcl/dx/digital-asset-manager"
            imageProcessor: "hcl/dx/image-processor"
            openLdap: "hcl/dx/openldap"
            persistence: "hcl/dx/postgres"
            remoteSearch: "hcl/dx/remote-search"
            ringApi: "hcl/dx/ringapi"
            ambassadorIngress: "hcl/dx/ambassador"
            ambassadorRedis: "hcl/dx/redis"
            runtimeController: "hcl/dx/runtime-controller"
        ```

    9.  **Additional tasks:**

        If your remote repository requires access credentials, it is necessary to configure an `ImagePullSecret` to allow your cluster nodes to have proper access to the HCL DX 9.5 container images.

        Please refer to [Configure Networking](helm_configure_networking.md) topic for instructions on how to configure this.


Refer to **[PersistentVolumeClaims \(PVCs\)](helm_persistent_volume_claims.md)** for the next steps.

