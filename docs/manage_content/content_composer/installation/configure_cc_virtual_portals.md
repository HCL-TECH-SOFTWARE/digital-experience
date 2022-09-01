# Enable or disable Content Composer in Virtual Portals

The use of Content Composer features in a Virtual Portal deployment pattern is supported for HCL Content Composer beginning with Container Update 9.5 CF192.

By default, this feature is not enabled on HCL Digital Experience 9.5. Get the [latest Docker image](../../../deployment/install/container/image_list.md) before you proceed with the following steps.

!!! note
     While there are also DX 8.5/9.0 CF17 images, the one you need to enable this HCL Content Composer feature is the 9.5 Docker image.

You can only enable Content Composer features in a Virtual Portal deployment pattern when Practitioner Studio is available \(for HCL DX 9.5 and later releases\). Refer to the [Woodburn Studio](../../../build_sites/woodburn_studio/index.md) and [Practitioner Studio](../../../build_sites/practitioner_studio/index.md) documentation topics on how to apply themes and create pages.

Follow these steps below to enable this support in your deployment:

1.  [Create a Virtual Portal](../../../build_sites/virtual_portal/adm_vp_task/vp_adm_task/create_vp/index.md).
2.  [Enable Practitioner Studio in the Virtual Portal](../../../build_sites/practitioner_studio/working_with_ps/enable_prac_studio.md).
3.  In the Virtual Portal, enable rendering of content supported by DX APIs, for example, via Content Composer interfaces.

## Enable and install content rendering in the base Portal

To enable content rendering in the base Portal:

1.  Connect to your Docker container using the following command:

    ```
    docker ps
    docker exec -it <id from docker ps> bash
    ```

2.  Run the following Config tasks:

    ```
    /opt/HCL/wp_profile/ConfigEngine/ConfigEngine.sh enable-headless-content -Dstatic.ui.url=... -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin
    ```

    Sample:

    ```
    /opt/HCL/wp_profile/ConfigEngine/ConfigEngine.sh enable-headless-content -Dstatic.ui.url=http://us-latest.team-q-dev.com:5000/dx/ui/content/static -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin
    ```


Next, install content rendering in the virtual Portal by following the steps below:

1.  Run the Config tasks:

    ```
    /opt/HCL/wp_profile/ConfigEngine/ConfigEngine.sh enable-headless-content-vp -Dstatic.ui.url=... -DVirtualPortalContext=... -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin
    ```

    Sample:

    ```
    /opt/HCL/wp_profile/ConfigEngine/ConfigEngine.sh enable-headless-content-vp -Dstatic.ui.url=http://us-latest.team-q-dev.com:5000/dx/ui/content/static -DVirtualPortalContext=demo -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin
    ```


## Remove and disable content rendering from the virtual Portal

To remove and disable content rendering from the virtual Portal:

1.  Run the following Config tasks:

    ```
    /opt/HCL/wp_profile/ConfigEngine/ConfigEngine.sh disable-headless-content-vp -DVirtualPortalContext=... -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin
    ```

    Sample:

    ```
    /opt/HCL/wp_profile/ConfigEngine/ConfigEngine.sh disable-headless-content-vp -DVirtualPortalContext=dam -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin
    ```

2.  Follow these steps to disable content rendering:

    1.  Connect to your Docker container using the following command:

        ```
        docker ps
        docker exec -it <id from docker ps> bash
        ```

    2.  Run the following Config tasks:

        ```
        /opt/HCL/wp_profile/ConfigEngine/ConfigEngine.sh disable-headless-content -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin
        ```


## Grant access to all authenticated Portal users

While setting permissions for other users can be done manually within the Resource Permissions portlet in Portal, there are also ConfigEngine tasks that can be used to grant `all authenticated portal users` access to the Content Composer page, portlet \(React Integration Portlet for Content\) and WCM REST service. These can be integrated into a CI/CD process if needed.

!!! note
     Permissions to access libraries, for example, `Web Content`, will still need to be set manually. In addition, the Editor role is the minimum level required for a user to utilize the WCM REST service, which is already included in these tasks.

To grant access to all authenticated portal users:

1.  Connect to your Docker container using the following command:

    ```
    docker ps
    docker exec -it <id from docker ps> bash
    ```

2.  Run the following Config task to grant permission:

    ```
    /opt/HCL/wp_profile/ConfigEngine/ConfigEngine.sh grant-access-headless-content -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin
    ```

3.  To remove the permissions that were granted in the previous steps, run the following Config task:

    ```
    /opt/HCL/wp_profile/ConfigEngine/ConfigEngine.sh remove-access-headless-content -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin
    ```



