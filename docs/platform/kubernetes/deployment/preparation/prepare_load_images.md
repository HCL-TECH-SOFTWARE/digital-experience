# Load images

This section presents how to load the DX 9.5 Container Update CF196 or later images into your container image repository, tag them to fit your repository structure, and push them to your repository, so that all Nodes in your Kubernetes or OpenShift cluster can deploy HCL Digital Experience 9.5 Pods.

To use HCL Digital Experience 9.5 in your Kubernetes or OpenShift cluster, you have to make the container images available to all nodes of your cluster. Usually this is done by providing them through a container image repository.

Depending on your cloud provider, there may be different types of default container image repositories already configured. Refer to the documentation of your cloud provider for setup and use of such platform container image repository.

It is assumed that you have a repository configured and running, and is technically reachable from all your Kubernetes or OpenShift cluster nodes.

In the following guidance, the docker CLI is used as a command reference. Tools like Podman may also be used, but are not described in this documentation. The procedure for the use of such tools are the same.

!!!note
    From CF205 on it is also possible to have your Kubernetes deployment pull images directly from the Harbor container registry. This requires all of your cluster nodes to be able to reach the Harbor container registry.  
    This is very handy for quick deployments or if you do not have a local container image registry.
    If you want to use the container images directly from Harbor, you do not need to retrieve, re-tag and push the images manually.

    Ensure that you have configured your deployment to authenticate to the Harbor container registry, as described in [Using ImagePullSecrets](./optional_imagepullsecrets.md) and that the repository is configured to [HCL Harbor](#)

## Retrieving container images

From CF205 on there are two ways to retrieve the container images for your deployment.  
You can either download the HCL Digital Experience 9.5 package, unpack it locally and load the images into your container registry, or you can directly pull them from the Harbor container image registry provided by HCL.

### From HCL Digital Experience 9.5 package

The HCL Digital Experience 9.5 Container Update packages are provided in a compressed .zip file, that can easily be unzipped using a utility of your choice. Refer to the latest [HCL DX 9.5 Container Update Release CF196 and later file listings in the Docker deployment](../../docker.md) topic:

!!! note

    The following are examples using Container Update CF196 files. Replace those references with the HCL DX 9.5 Container Update CFxxx release files you are deploying.

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

    hcl-dx-remote-search-image-v95_CFXXX_XXXXXXXX-XXXX.tar.gz
    # Image for Remote Search

    hcl-dx-ringapi-image-vX.X.X_XXXXXXXX-XXXX.tar.gz
    # Image for Ring API

    hcl-dx-runtime-controller-image-vX.X.X_XXXXXXXX-XXX.tar.gz
    # Image for Runtime Controller

    hcl-dx-deployment-vX.X.X_XXXXXXXX-XXX.tar.gz
    # Helm Charts
    ```

To load the individual image files, you may use the following command:

```sh
# Command to load container image into local repository
# docker load < image-file-name.tar.gz
docker load < hcl-dx-core-image-v95_CFXXX_XXXXXXXX-XXXX.tar.gz
```

If you want to load all DX 9.5 CFxxx image files via one command, you may use the following command:

```sh
# Command to load all images at once
# Since HCL Digital Experience images are all containing the word "images", 
# we can filter for fitting tar.gz files
ls -f | grep image | xargs -L 1 docker load -i
```

This loads all images to your local repository, ready for further usage.

You may verify if the loading is successful with the following command:

```sh
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

### From Harbor container registry

!!!note
    This is only available from CF205 onwards. Previous releases need to use the packaged container images the way that is described in the previous section.

To access the harbor container registry, you need to log in with docker. This can easily be done using the following command:

```sh
docker login hclcr.io
# Enter your harbor username and CLI secret to login
```

You can obtain the CLI secret from harbor by navigating to your `User Profile` in [HCL Harbor](https://hclcr.io). You can copy it from the field called `CLI secret`.

After a successful login, you will see the message:

```text
    Login Succeeded
```

You can now pull images from the Harbor container registry using docker.

## Re-tag images

If you are using a Kubernetes cluster that is not configured to operate on your local machine, you may need to push the HCL Digital Experience 9.5 container images to a remote repository.

To do so, you need to re-tag the images to point to your remote repository.

!!!warning
    Do not change the version tags of the DX 9.5 images, as they are used for uniquely identifying which versions of DX applications are running in your cluster.

You may re-tag any image using the following command:

```sh
# Re-tag an existing loaded image
# docker tag OLD_IMAGE_PATH:VERSION NEW_IMAGE_TAG:VERSION

# Example command for DX Core:
docker tag dx/core:v95_CF195_20210514-1708 my/test/repository/dx/core:v95_CF195_20210514-1708
```

If you want to prefix all HCL Digital Experience 9.5 container images with your repository structure, you may use the following command:

```sh
# Command to prefix all HCL Digital Experience container images
# export the prefix for the repository structure, without tailing slash
export REMOTE_REPO_PREFIX="my/test/repository"

# First we list all HCL Digital Experience 9.5 Images, then we remove the first line containing the header
# Then we execute the docker tag command, prefixing each image with the $REMOTE_REPO_PREFIX
docker images dx/* | tail -n +2 | awk -F ' ' '{system("docker tag " $1 ":" $2 " $REMOTE_REPO_PREFIX/" $1 ":" $2) }'
```

The output may be verified by using the following command:

```sh
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

## Push to repository

You may use the following command to push the container images to your repository:

```sh
# Push the new tagged images
# docker push NEW_IMAGE_TAG:VERSION
# Example command for core:
docker push my/test/repository/dx/core:v95_CF195_20210514-1708
```

If you want to push all your locally processed images, you may use the following command:

```sh
# Command to push all HCL Digital Experience images to a remote repository
# export the prefix for the repository structure, without tailing slash
export REMOTE_REPO_PREFIX="my/test/repository"

# Push the images, first we filter for the ones necessary
# Second we execute a docker push for each image
docker images $REMOTE_REPO_PREFIX/dx/* | awk -F ' ' '{system("docker push " $1 ":" $2)}'
```

After running this command, Docker goes ahead and pushes the images to your remote repository. After the push, the container images are now ready for use by your Kubernetes or OpenShift cluster.

## Adjust deployment configuration

After you have successfully prepared all DX 9.5 images, you need to configure the images inside your custom-values.yaml.

The following syntax may be used to define the correct image configuration for your environment:

!!!note
    If deploying to a Hybrid<!-- [Hybrid](hybrid_deployment_helm.md) --> environment, with DX 9.5 Container Update CF198 or later, the Core needs to be set as false, since Core is already installed to an On-premise Server.

!!!note
    From CF205 onwards, the image name and tag configuration of the Helm Chart is pre-filled using the default image names and matching version tags for the respective version of DX. You might need to re-adjust these if you have renamed/re-tagged the images in your local container image repository.

    If you want to use the HCL Harbor container registry, ensure to configure your target repository accordingly and have the [ImagePullSecret](./optional_imagepullsecrets.md) configured:

    ```yaml
    images:
      # Configure the HCL Harbor registry repository
      repository: "hclcr.io"
      # Use the image pull secret configured before
      imagePullSecrets:
        - name: "dx-harbor"
    ```

```yaml
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
    runtimeController: "vX.X.X_XXXXXXXX-XXXX"
    # Image name for each application
    names:
    contentComposer: "dx/content-composer"
    core: "dx/core"
    designStudio: "dx/design-studio"
    digitalAssetManagement: "dx/digital-asset-manager"
    imageProcessor: "dx/image-processor"
    openLdap: "dx/openldap"
    persistence: "dx/postgres"
    remoteSearch: "dx/remote-search"
    ringApi: "dx/ringapi"
    runtimeController: "dx/runtime-controller"
```

## Additional Tasks

If your remote repository requires access credentials, it is necessary to configure an `ImagePullSecret` to allow your cluster nodes to have proper access to the HCL DX 9.5 container images. This is also required if you want to use the HCL Harbor container registry directly.

Please refer to [Using ImagePullSecrets](optional_imagepullsecrets.md) topic for instructions on how to configure this.

<!-- ???info "Related information:"
    - [Hybrid](hybrid_deployment_helm.md) -->
