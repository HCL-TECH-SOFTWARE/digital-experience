# Migrate the Core profile

This section shows the steps to migrate your Core profile. You can create a backup of the profile and restore it later in the Helm deployment.

Follow this guidance to create a backup of the Core profile from your Operator deployment, and restore the profile to a Helm-based deployment.

-   **Back up from an Operator-based deployment**

    1.  **Ensure that only one Core pod is running.**

        Check how many pods are running with the following command:

        ```
        kubectl -n <namespace> get pods
        ```

        If more than one pod is running, scale down the Core pods so only one \(1\) pod is running. On the Operator deployment, adjust the `dxctl` property file:

        ```
        dx.maxreplicas:1
        dx.minreplicas:1
        ```

        then apply the changes in the updated property file using the `dxctl` tool:

        ```
        ./dxctl -–update -p deployment.properties
        ```

        Once the changes are applied, any replicas will be terminated.

        You may check the progress by running the `kubectl` command.

    2.  **Connect to the Core pod**.

        The following command opens a shell in the running Core pod:

        ```
        kubectl exec --stdin --tty pod/<pod-name> -n <namespace> -- /bin/bash
        ```

        For example:

        ```
        kubectl exec --stdin --tty pod/dx-deployment-0 -n dxns -- /bin/bash
        ```

        1.  **Stop the Core application before a backup from the wp\_profile is created.**

            Navigate to the profile bin folder and run the `stopServer` command:

            ```
            cd /opt/HCL/wp_profile/bin/
            ./stopServer.sh WebSphere_Portal -username <username> -password <password>
            ```

            **Note:** While the server is stopped, the liveness probe returns a failure result to Kubernetes. Once the maximum allowed number of failures is reached, Kubernetes restarts the pod, closing any `kubectl exec` session and brings the Core pod back online. However, with the default liveness probe settings in `full-deployment.properties`, this process takes approximately two \(2\) hours to occur.

            If you need to adjust your liveness probe settings to allow time to perform the profile backup \(for instance, because you have reduced them considerably from the default in your deployment\), make the changes in your `full-deployment.properties` file, and then apply the changes using `dxctl` as described in Step 1.

        2.  **Compress the whole Core profile folder /opt/HCL/wp\_profile** by running the following command:

            ```
            cd /opt/HCL
            tar -cvpzf core_prof_95_CF199.tar.gz --exclude=/core_prof_95_CF199.tar.gz --one-file-system wp_profile
            ```

        3.  **Close the shell in the Core pod** using the following command:

            ```
            exit
            ```

    3.  **Download the backup Core profile from the Core pod to your local system** by running the following command:

        ```
        kubectl cp <namespace>/<pod-name>:<source-file> <target-file>
        ```

        For example:

        ```
        kubectl cp dxns/dx-deployment-0:opt/HCL/core_prof_95_CF199.tar.gz /tmp/core_prof_95_CF199.tar.gz 
        ```

    4.  **\(Optional\)** Make the old environment unavailable.

        Kubernetes eventually brings the Core pod back online by restarting it \(see the note on liveness probes in Step 2.a\). If you want to keep the Operator-based deployment unavailable to users after backing up the profile, you can do the following steps:

        -   **Adjust the `dxctl` property file**:

            ```
            dx.maxreplicas: 0
            dx.minreplicas: 0
            dx.replicas: 0
            ```

        -   **Apply it using the `dxctl` tool**:

            ```
            ./dxctl -–update -p deployment.properties
            ```

            The change is applied after a few seconds and all the additional Core pods are terminated. You can use `kubectl get pods` to check the progress. If the additional Core pods are not terminated after a few minutes, use the following command to force the changes to be applied:

            ```
            kubectl delete statefulset -n <namespace> dx-deployment
            ```

        If you want to enable the Operator-based deployment Core pod again, set the values of the `dxctl` property file to values greater than zero and apply the changes using the `dxctl` tool.


-   **Restore your back up to the Helm-based deployment**

    **Important:**

    -   Ensure to note the [requirements and limitations here](helm_extract_operator_properties.md#prereq_lxy_5rt_hrb).
    -   For the new Helm deployment, you must use a different Kubernetes namespace from the one used in the Operator-based deployment.
    1.  **Ensure that the Helm-based deployment is in the correct state before restoring a backup.**

        -   **Ensure that you have [extracted the Kubernetes DX configuration](helm_extract_operator_properties.md) from the Operator-based deployment to a valid custom-values.yaml file.**
        -   **Enable `migration` mode for `operatorToHelm`** by adding or updating the following value in custom-values.yaml:

            ```
            migration:
              operatorToHelm:
                enabled: true
            ```

        -   **Disable all the applications, except `runtimeController` and the `core`**:

            ```
            applications:
              core: true
              runtimeController: true
              contentComposer: false
              designStudio: false
              digitalAssetManagement: false
              imageProcessor: false
              openLdap: false
              persistence: false
              remoteSearch: false
              ringApi: false
              ambassador: false
            ```

        -   **Start the Helm deployment.** If you are running the migration of the Core first, run the following command:

```
helm install -n <namespace> --create-namespace -f <custom-values.yaml> <prefix> <chart>
```

            For example:

            ```
            helm install -n dxns-helm --create-namespace -f custom-values.yaml dx-deployment hcl-dx-deployment
            ```

            If DAM migration is done first:

            ```
            helm upgrade -n <namespace> -f <custom-values.yaml> <prefix> <chart>
            ```

            For example:

            ```
            helm upgrade -n dxns-helm -f custom-values.yaml dx-deployment hcl-dx-deployment
            ```

        The following outcomes are expected:

        -   The `core` pod is running and kept alive.
        -   The `core` application is not running.
        -   No default profile is created automatically. The folder `/opt/HCL/wp_profile` is empty.
    2.  **Upload the backup profile.**

        Use the following command to transfer the backup profile to the remote Core pod:

        ```
        kubectl cp <source-file> <namespace>/<pod-name>:<target-file>
        ```

        For example:

        ```
        kubectl cp /tmp/core_prof_95_CF199.tar.gz dxns-helm/dx-deployment-core-0:/tmp/core_prof_95_CF199.tar.gz
        ```

    3.  **Connect to the Core pod.**

        Use the following command to pine a shell in the running Core pod:

        ```
        kubectl exec --stdin --tty pod/<pod-name> -n <namespace> -- /bin/bash
        ```

        For example:

        ```
        kubectl exec --stdin --tty pod/dx-deployment-core-0 -n dxns-helm -- /bin/bash
        ```

        1.  **Extract the profile.** Move the core\_prof\_95\_CF199.tar.gz from the /temp folder to the profile folder /opt/HCL/profiles before extracting it:

            ```
            tar -xf /tmp/core_prof_95_CF199.tar.gz --directory /opt/HCL/profiles
            mv /opt/HCL/profiles/wp_profile /opt/HCL/profiles/prof_95_CF199
            rm /tmp/core_prof_95_CF199.tar.gz
            ```

        2.  **Create a symbolink \(symlink\)** by running the following command:

            ```
            rm -r /opt/HCL/wp_profile
            ln -s /opt/HCL/profiles/prof_95_CF199 /opt/HCL/wp_profile
            ```

        3.  **Close the shell in the Core pod** using the following command:

            ```
            exit
            ```

    4.  **Disable the migration mode and the deployment.**

        **Note:** If Digital Asset Management was used in the Operator-based deployment, you must follow the [DAM migration instructions](helm_dam_migration.md) before disabling migration mode.

        1.  **Disable the `migration` mode** by updating the following value in custom-values.yaml

            ```
            migration:
              operatorToHelm:
                enabled: false
            ```

        2.  **Enable all relevant applications.**
        3.  **Upgrade the Helm deployment** using the following command:

            ```
            helm upgrade -n <namespace> --create-namespace -f <custom-values.yaml> <prefix> <chart>
            ```

            For example:

            ```
            helm upgrade -n dxns-helm --create-namespace -f custom-values.yaml dx-deployment hcl-dx-deployment
            ```

    5.  **Reconfigure applications to use relative paths.**

        Coming from old Operator deployments, it can appear that the applications \(Digital Asset Management, Content Composer, and Design Studio\) are still configured to use absolute URLs for their rendering. If you use any of these applications, it is highly recommended that you reconfigure them to use relative paths.

        CAUTION:

        Reconfigure relative paths for applications that are active in your deployment. Otherwise, the command will fail.

        Replace the placeholders for `NAMESPACE`, `YOUR_WAS_ADMIN_USER`, and `YOUR_WAS_ADMIN_PASSWORD` with the corresponding values of your deployment.

        -   For Content Composer:

            ```
            kubectl exec -n <NAMESPACE> dx-deployment-core-0 -- bash -c 'cd /opt/HCL/ConfigEngine/ && ./ConfigEngine.sh action-deploy-headless-content-pages -Dcc.static.ui.url=/dx/ui/content/static -DWasPassword=<YOUR_WAS_ADMIN_USER> -DPortalAdminPwd=<YOUR_WAS_ADMIN_PASSWORD>'
            ```

        -   For Digital Asset Management:

            ```
            kubectl exec -n <NAMESPACE> dx-deployment-core-0 -- bash -c 'cd /opt/HCL/ConfigEngine/ && ./ConfigEngine.sh action-deploy-media-library-pages -Ddam.static.ui.url=/dx/ui/dam/static -DWasPassword=<YOUR_WAS_ADMIN_USER> -DPortalAdminPwd=<YOUR_WAS_ADMIN_PASSWORD>'
            ```

        -   For Design Studio:

            ```
            kubectl exec -n <NAMESPACE> dx-deployment-core-0 -- bash -c 'cd /opt/HCL/ConfigEngine/ && ./ConfigEngine.sh action-deploy-content-sites-pages -Dcontentsites.ui.url=/dx/ui/site-manager/static -DWasPassword=<YOUR_WAS_ADMIN_USER> -DPortalAdminPwd=<YOUR_WAS_ADMIN_PASSWORD>'
            ```

    6.  **Create the secret with your TLS certificate for the Ambassador Ingress in your Helm-based deployment.**

        To make your migrated Helm deployment accessible, you need to configure the TLS certificate that is used by the Ambassador Ingress. See [Use certificate](helm_configure_networking.md) for more information.

    7.  \(**Optional**\) If you have changed the WAS/Portal Administrator user, update the corresponding secrets \(`dx-deployment-was` and `dx-deployment-wps`\) in the Helm-based deployment.
    8.  **\(Optional\)** Configure Remote Search.

        Skip this step if you have not used Remote Search in your Operator deployment, or if you have no plans to use Remote Search within your Helm-based deployment. Configure Remote Search and re-index your data again.

        See instructions on [how to configure Remote Search within a Kubernetes environment](kubernetes_remote_search.md).


**Parent topic:**[Migrating from Operator to Helm deployments](../containerization/helm_operator_migration.md)

