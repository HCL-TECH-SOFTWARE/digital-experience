# How to Import WCM library

## Importing WCM library

!!!danger
    **DO NOT deploy script applications first** if you have those script applications in this library. Ensure that you import the wcm library first before redeploying or updating the script applications in it. The uuid of script applications will change if you deploy them first.

1. Import the Woodburn Insurance wcm-library zip into your system by running the following command.

    === "MacOS or Linux"

           ```bash
           # assumes other required parameters are already set via config file in store or via enviroment variables
           dxclient wcm-library-import \
              -libFilePath {SITEZIP} \
              -dxUsername {DXUSERNAME} \
              -dxPassword {DXPASSWORD} \
              -dxConnectUsername {DXUSERNAME} \
              -dxConnectPassword {DXPASSWORD} \
              -dxWASUsername {DXUSERNAME} \
              -dxWASPassword {DXPASSWORD} \
              -dxProfileName $DXPROFILENAME \
              -hostname $HOSTNAME;
           ```

    === "Windows"

           ```bat
           :: assumes other required parameters are already set via config file in store or via enviroment variables
           dxclient wcm-library-import ^
              -libFilePath {SITEZIP} ^
              -dxUsername {DXUSERNAME} ^
              -dxPassword {DXPASSWORD} ^
              -dxConnectUsername {DXUSERNAME} ^
              -dxConnectPassword {DXPASSWORD} ^
              -dxWASUsername {DXUSERNAME} ^
              -dxWASPassword {DXPASSWORD} ^
              -dxProfileName %DXPROFILENAME% ^
              -hostname %HOSTNAME%;
           ```

    !!!info "Notes on parameters:"
         1. `libFilePath` should be pointing to your `wcm-library.zip` which can be the one exported from [here](export_wcm_library.md).
            - `wcm-library-export-20220919092012.zip` if you are on Woodburn Insurance Demo
         2. Ensure to place your correct credentials in the `{DXUSERNAME}` and `{DXPASSWORD}`.


2. The output should look similar to this.
  ```
  2022-08-16 21:46:29 : Upload file is in progress.
  (node:57924) Warning: Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable to '0' makes TLS connections and HTTPS requests insecure by disabling certificate verification.
  2022-08-16 21:46:30 : WCM library uploaded successfully to the location - /opt/HCL/AppServer/profiles/cw_profile/dxconnect/tmp989/wcm-library-export-20220902201641.zip.
  2022-08-16 21:50:09 : WCM library import successful.
  ```

3. Things to check.
      1. If you have anything in this library that is referencing anything outside this library, those should be added first.
      2. If you have circular dependency (e.g: You have a wcm button that references a page that is also referencing something else in this library):
         1. WCM library <-> Site Page dependency
            1. Import the library first since [importing DX Site Page Hierarchy](import_site_page_hierarchy.md) will fail if some reference are missing. This will result in broken references in the components.
            2. Proceed to [import DX Site Page Hierarchy](import_site_page_hierarchy.md).
            3. Import the library again to fix the broken references.
            !!!tip "This is the case in `Woodburn Insurance Demo` so import the library again after [importing DX Site Page Hierarchy](import_site_page_hierarchy.md) if you are following the demo."
         2. WCM library A <-> WCM library B dependency
            1. Import library A first. This will result in broken references in the components.
            2. Import library B. This will have complete references.
            3. Import the library A again to fix the broken references.
      3. If you have script applications in this library.
         1. Ensure to import the library first before [deploying the script applications](../../common-setup/build-and-deploy/build_and_deploy_scriptapps.md).
         2. This is because deploying the script applications first before will generate new uuid which will break any old references.
         3. Deploying the script applications after importing the library will update existing script applications.

!!!tip "See more detailed information [here](https://help.hcltechsw.com/digital-experience/9.5/containerization/wcmlibraries.html)."

???+ info "Related information"
     - [Exporting your WCM library](export_wcm_library.md)
