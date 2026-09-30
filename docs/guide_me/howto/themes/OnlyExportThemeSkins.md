# How to export themes and skins in HCL DX

## Applies to

> HCL Digital Experience 9.5 and higher  

## Introduction

You can export HCL DX themes and skins without exporting the entire server configuration by using an XML Access script provided with the HCL DX installation binaries. This article explains how to use the script to export themes and skins.

## Instructions

To export HCL DX themes and skins:

1. Open a terminal or command window.
2. Navigate to the `<wp_profile>/PortalServer/bin` directory.
3. Run the following command:

    - **Linux or Unix:**

        ```shell
        <wp_profile_root>/PortalServer/bin/xmlaccess.sh -user <portal_admin_user> -password <portal_admin_password> -url http://<hostname>:<port>/wps/config -in <portal_server_root/doc/xml-samples/ExportThemesAndSkins.xml -out result.xml 
        ```

    - **Microsoft Windows:**

        ```bat
        <wp_profile_root>\PortalServer\bin\xmlaccess.bat -user <portal_admin_user> -password <portal_admin_password> -url http://<hostname>:<port>/wps/config -in <portal_server_root>\doc\xml-samples\ExportThemesAndSkins.xml -out result.xml 
        ```

!!! note
    - Replace `<portal_admin_user>`, `<portal_admin_password>`, `<hostname>`, and `<port>` with the correct values for your environment. It is recommended to use the "direct" URL and port so the request bypasses any web server or load balancer that might be present.
    - The file name specified after the `-out` parameter contains the portal theme and skin configuration as XML. The output file can have any name.
    - You can also run XML Access without any parameters on the command line to test it in your environment.
    - If the `ExportThemesAndSkins.xml` file is missing from your installation, contact HCL Support or copy it from another portal host.
