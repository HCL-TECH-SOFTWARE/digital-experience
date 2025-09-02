# How to collect HCL DX logs from OpenShift / Kubernetes deployment

## Applies to

> HCL Digital Experience v8.5 and higher  

## Introduction

Wpcollector is a command line tool that automates the collection of Portal logs and configuration files. Using automated log collection early in the Case life cycle can greatly reduce the number of doc requests that are made by Support. This article outlines the steps on how to run wpcollector on an OpenShift/Kubernetes environment. If you need to run wpcollector in a different environment, please see this [article](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0012545){target="_blank"} for on-prem Portal or this [article](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0075899){target="_blank"} for Portal running on Docker.  

If tracing is required for the problem scenario, you must manually enable trace strings and recreate the problem PRIOR to running wpcollector.  

## Instructions

To run wpcollector, please follow the steps, below:  

1. In your full-deployment.properties used to create your deployment, look for the dx.name property to help identify the Portal Core pod name:  

    Example:  
    dx.name: **dx-core**  

2. On a machine that is configured to access your OpenShift/Kubernetes cluster, get a pod listing of your Portal deployment project/namespace:

    **OpenShift:**  
    Execute command: `oc project`  

    Example output:  
    `Using project "dx-191" on server "https://api.lab.dx.com:6443".`

    Execute command: `oc get pods`

    ```shell
    NAME                                READY          STATUS            RESTARTS            AGE  
    dx-191-operator-564955dc65-cw7c9    1/1            Running           0                   21m  
    dx-core-0                           1/1            Running           0                   2m47s    
    dx-core-contentui-6c67dd6786-2685b  1/1            Running           0                   20m  
    dx-core-dam-0                       1/1            Running           0                   19m  
    dx-core-imgproc-0                   1/1            Running           0                   20m  
    dx-core-persistence-0               1/1            Running           0                   20m  
    dx-core-ringapi-69bb99b98f-4f82c    1/1            Running           0                   20m  
    hcl-dam-operator-578b878d44-bdp5m   1/1            Running           0                   20m  
    ```

    **Kubernetes:**  

    Execute command: `kubectl get pods -n dx-191`  

    ```shell
    NAME                                READY          STATUS            RESTARTS            AGE
    ambassador-547bd77c7d-56vv2         1/1            Running           0                   16m
    ambassador-547bd77c7d-fr9h9         1/1            Running           0                   16m
    ambassador-547bd77c7d-mqz4f         1/1            Running           0                   16m
    ambassador-redis-54f6846876-lrz5k   1/1            Running           0                   16m
    ambassador-redis-54f6846876-nrb58   1/1            Running           0                   16m
    ambassador-redis-54f6846876-p874m   1/1            Running           0                   16m
    dx-core-0                           1/1            Running           0                   17m
    dx-operator-b9b4f9979-8tbvz         1/1            Running           0                   14m    
    ```  

3. Once the exact Portal Core pod name is identified, ssh into the Portal Core pod:  

    **OpenShift:**  
    Execute command:  

    ```shell
    oc exec -it dx-core-0 -- /bin/bash
    ```

    **Kubernetes:**  
    Execute command:  

    ```shell
    kubectl exec -it dx-core-0 -n dx-191 -- /bin/bash
    ```

4. Navigate to the `/opt/HCL/wp_profile/PortalServer/bin` directory and run the wpcollector.sh script:

    ```shell
    cd /opt/HCL/wp_profile/PortalServer/bin/
    ./wpcollector.sh
    ```  

5. Once wpcollector is complete, you should see a **BUILD SUCCESSFUL** message. Navigate to the `/opt/HCL/wp_profile/filesForAutoPD` directory and get the zip name:  

    Example: **wp.mustgather-2021.02.11-14.33.19.166+0000.zip**  

6. Transfer the wpcollector zip to your local machine to upload to HCL Support:

    **OpenShift:**  
    Execute command:  

    ```shell
    oc cp dx-core-0:/opt/HCL/wp_profile/filesForAutoPD/wp.mustgather-2021.02.11-14.33.19.166+0000.zip /temp/wp.mustgather-2021.02.11-14.33.19.166+0000.zip
    ```

    **Kubernetes:**  
    Execute command:  

    ```shell
    kubectl cp -n dx-191 dx-core-0:/opt/HCL/wp_profile/filesForAutoPD/wp.mustgather-2021.02.11-14.33.19.166+0000.zip /temp/wp.mustgather-2021.02.11-14.33.19.166+0000.zip`  
    ```

7. Send the zip to HCL Support by using the instructions outlined in the HTTPS and SFTP upload and download instructions article.  

!!!note
    In the examples above, dx-core-0 is the name of Portal Core pod and dx-191 is the name of the project/namespace for this Portal deployment. Please substitute these arguments with the values from your own deployment before running any of the commands above.  

???+ info "Related information"
    [Automated data collection capability provided by wpcollector tool](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0012545){target="_blank"}  
    [How to collect Portal logs from the Docker image using wpcollector utility](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0075899){target="_blank"}  
