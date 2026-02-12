# How to collect HCL DX logs from an OpenShift or Kubernetes deployment

## Applies to

> HCL Digital Experience v8.5 and higher  

## Introduction

The `wpcollector` command-line tool automates the collection of Portal logs and configuration files. Running this tool proactively expedites troubleshooting your issues.

This article explains how to run `wpcollector` on an OpenShift or Kubernetes environment. For other environments, refer to:

- Docker: [How to collect Portal logs from the Docker image using wpcollector utility](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0075899){target="_blank"}
- On-premises: [Automated data collection capability provided by wpcollector tool](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0012545){target="_blank"}

!!!note
    If your issue requires tracing, you must manually enable trace strings and reproduce the problem before running `wpcollector`.

## Instructions

Follow these steps to run `wpcollector` in your container environment.

1. Locate the `dx.name` property in your `full-deployment.properties` file to identify the Portal Code pod name. For example:

    ```yaml
    dx.name: dx-core
    ```

2. Find the specific core pod name by listing the pods in your namespace (for example, `dx-191`):

    - **OpenShift:**  

        1. Verify your current project:

            ```shell
            oc project 
            ```

            Sample output:  

            ```shell
            Using project "dx-191" on server "https://api.lab.dx.com:6443".
            ```

        2. List the running pods:  

            ```shell
            oc get pods
            ```

            Sample output:

            ```text
            NAME                                READY          STATUS            RESTARTS            AGE  
            dx-191-operator-564955dc65-cw7c9    1/1            Running           0                   21m  
            dx-core-0                           1/1            Running           0                   2m47s    
            dx-core-contentui-6c67dd6786-2685b  1/1            Running           0                   20m  
            ```

    - **Kubernetes:**  

        1. List all available namespaces to identify your Portal deployment project:

            ```bash
            kubectl get namespaces
            ```

            Sample output:

            ```bash
            NAME              STATUS   AGE
            default           Active   4d
            dx-191            Active   4d
            kube-system       Active   4d
            ```

        2. List the pods in your identified namespace:

            ```bash
            kubectl get pods -n dx-191
            ```

            Sample output:

            ```text
            NAME                                READY          STATUS            RESTARTS            AGE
            ambassador-redis-54f6846876-p874m   1/1            Running           0                   16m
            dx-core-0                           1/1            Running           0                   17m
            dx-operator-b9b4f9979-8tbvz         1/1            Running           0                   14m    
            ```  

3. Open a shell session in the Portal Core pod. Use the pod name identified in the previous step (for example, `dx-core-0`):

    - **OpenShift:**  

        ```shell
        oc exec -it dx-core-0 -- /bin/bash
        ```

    - **Kubernetes:**  

        ```shell
        kubectl exec -it dx-core-0 -n dx-191 -- /bin/bash
        ```

4. Run the `wpcollector.sh` script from the `/opt/HCL/wp_profile/PortalServer/bin/` directory:

    ```shell
    cd /opt/HCL/wp_profile/PortalServer/bin/
    ./wpcollector.sh
    ```  

5. After the "BUILD SUCCESSFUL" message appears, navigate to the `/opt/HCL/wp_profile/filesForAutoPD` directory and get the ZIP file name. For example: `wp.mustgather-2021.02.11-14.33.19.166+0000.zip`.

6. Exit the pod shell and copy the ZIP file to your local machine:

    - **OpenShift:**  

        ```shell
        oc cp dx-core-0:/opt/HCL/wp_profile/filesForAutoPD/wp.mustgather-2021.02.11-14.33.19.166+0000.zip /temp/wp.mustgather-2021.02.11-14.33.19.166+0000.zip
        ```

    - **Kubernetes:**  

        ```shell
        kubectl cp -n dx-191 dx-core-0:/opt/HCL/wp_profile/filesForAutoPD/wp.mustgather-2021.02.11-14.33.19.166+0000.zip /temp/wp.mustgather-2021.02.11-14.33.19.166+0000.zip`  
        ```

7. Upload the file to HCL Support. Detailed instructions can be found at [HTTPS and SFTP upload and download instructions](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0010064){target="_blank"}. Send the file using the steps provided in the HTTPS and SFTP upload and download instructions.

???+ info "Related information"
    - [Automated data collection capability provided by wpcollector tool](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0012545){target="_blank"}  
    - [How to collect Portal logs from the Docker image using wpcollector utility](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0075899){target="_blank"}  
