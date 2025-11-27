# How to export only themes and skins in HCL Digital Experience

## Applies to

> HCL Digital Experience 9.5 and higher  

## Introduction

If you would like to export just the themes and skins from a HCL Digital Experience and not the entire configuration of the server, there is a simple way to accomplish this via a pre-written xmlaccess script provided with the HCL Digital Experience installation binaries.  

## Instructions

To generate an export of your HCL DX themes and skins, do the following:

1. Open a terminal or command window. navigate to the `<wp_profile>/PortalServer/bin` directory

2. Run the following command:

    **Linux/Unix command:**

    ```shell
    <wp_profile_root>/PortalServer/bin/xmlaccess.sh -user <portal_admin_user> -password <portal_admin_password> -url http://<hostname>:<port>/wps/config -in <portal_server_root/doc/xml-samples/ExportThemesAndSkins.xml -out result.xml 
    ```

    **Microsoft Windows command:**

    ```shell
    <wp_profile_root>\PortalServer\bin\xmlaccess.bat -user <portal_admin_user> -password <portal_admin_password> -url http://<hostname>:<port>/wps/config -in <portal_server_root>\doc\xml-samples\ExportThemesAndSkins.xml -out result.xml 
    ```

    !!!note
        - Substitute `<portal_admin_user>`, `<portal_admin_password>`, `<hostname>`, and `<port>` with the correct values for your environment. It is recommended to use the "direct" URL and port so the request can bypass any webserver or load balancer that may be present.  
        - The file name specified after the "-out" parameter will contain the Portal theme and skin configuration as XML. The output file can have any name.  
        - You may also invoke XMLAccess without any parameters on the command line to test it in your environment.  
        - If the file **ExportThemesAndSkins.xml** is missing in your installation, contact the HCL Support or take a copy from another Portal host.  
