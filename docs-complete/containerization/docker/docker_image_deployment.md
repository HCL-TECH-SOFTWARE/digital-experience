# Docker image deployment

This section describes the steps in deploying HCL Digital Experience 9.5 containers using Docker.

Follow these steps to deploy the HCL Digital Experience 9.5 and later CF container update releases in Docker.

1.  Download the Docker image from your HCL Digital Experience entitlements in the [HCL Software License Portal](https://www.hcltech.com/software/support/release), in the **HCL\_Portal\_8.5\_9.0\_9.5\_CFs** download package entry. Refer to the [Docker image list](../docker.md) for the latest HCL DX 9.5 container update releases.

2.  Open a terminal window and change to the root directory of the extracted package.

3.  Load the container into your Docker repository:

        docker load < hcl-dx-core-image-v95-xxxxxxxx-xxxx.tar.gz
    
    ![](../../images/container_docker_deploy.png "Loading the container into your Docker repository")

4.  Run the HCL DX Docker container using either of the following commands:

        docker run -p 10038:10038 -p 10039:10039 -p 10041:10041 -p 
        10042:10042 -p 10200:10200 -p 10202:10202 hcl/dx/core:v95_xxxxxxxx-xxxx

    -OR-
    
        docker run -p 10038:10038 -p 10039:10039 -p 10041:10041 -p 
        10042:10042 -p 10200:10200 -p 10202:10202 -v ~/dx-store/
        wp_profile:/opt/HCL/wp_profile hcl/dx/core:v95_xxxxxxxx-xxxx

    In HCL DX 9.5 CF171, Administrators can use this command to run the container if credentials have been updated:

        docker run -e WAS_ADMIN=wasadmin -e WAS_PASSWORD=wasadminpwd -e 
        DX_ADMIN=dxadmin -e DX_PASSWORD=dxadminpwd -p 10038:10038 -p 
        10039:10039 -p 10041:10041 -p 10042:10042 -p 10200:10200 -p 
        10202:10202 -v ~/dx-store/wp_profile:/opt/HCL/wp_profile hcl/dx/core:v95_xxxxxxxx-xxxx

    The additional syntax adds the ability for users to pass updated credentials for the HCL Portal Administrators.

    - `-e WAS_ADMIN=wasadmin`
    - `-e WAS_PASSWORD=wasadminpwd`
    - `-e DX_ADMIN=dxadmin`
    - `-e DX_PASSWORD=dxadminpwd`

    **Notes:**

       - Make sure the `~/dx-store/wp\_profile directory` is created before you start the Docker container. This is required for persistence \(for using `-v ~/dx-store/wp_profile:/opt/HCL/wp_profile hcl/dx/ core:v95_xxxxxxxx-xxxx`\).
       - To use the HCL DX Configuration Wizard, start the Java virtual machine \(JVM\) within the running container with the following command:

            docker exec <CONTAINER ID> /opt/HCL/AppServer/profiles/cw_profile/bin/startServer.sh server1
            
       - For HCL DX 9.5 CF171 and later, access the Configuration Wizard at https://localhost:10202/hcl/wizard.

         **Note:** For HCL DX 9.5 release earlier than CF171, access the Configuration Wizard at https://localhost:10202/ibm/wizard.

       - Upgrading an existing HCL DX 9.5 Docker container, using a persisted volume, to HCL DX 9.5 CF171 or HCL DX 9.5 CF172 may require launching the upgraded container twice.

         For example, if the following command fails with an error, re-running the command allows a successful upgrade and launch the container:

            docker run -e WAS_ADMIN=wasadmin -e WAS_PASSWORD=wasadminpwd -e 
            DX_ADMIN=dxadmin -e DX_PASSWORD=dxadminpwd -p 10038:10038 -p 
            10039:10039 -p 10041:10041 -p 10042:10042 -p 10200:10200 -p 
            10202:10202 -v ~/dx-store/wp_profile:/opt/HCL/wp_profile hcl/dx/core:v95_xxxxxxxx-xxxx
        
        This issue is fixed in HCL DX 9.5 CF173.

    See the following sections for additional information:

    -   [How to upload HCL Digital Experience 9.5 CF container images to a private repository](https://youtu.be/XJONRdpgCuo)
    -   [Docker image list](docker_image_deployment.md)
    -   [Customizing the container deployment](customizing_container_deployment.md)
    -   [Containerization Limitations/Requirements](limitations_requirements.md)

