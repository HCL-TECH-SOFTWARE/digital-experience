# How to import DX Site Page Hierarchy

## Importing DX Site page hierarchy via xmlaccess
 
1. Run the following command.

    === "MacOS or Linux"

           ```bash
           # assumes other required parameters are already set via config file in store or via enviroment variables
           dxclient xmlaccess \
              -dxUsername {DXUSERNAME} \
              -dxPassword {DXPASSWORD} \
              -xmlFile {XML} \
              -dxProtocol $DXPROTOCOL \
              -hostname $HOSTNAME \
              -dxPort $DXPORT;
           ```

    === "Windows"

           ```bat
           :: assumes other required parameters are already set via config file in store or via enviroment variables
           dxclient xmlaccess ^
              -dxUsername {DXUSERNAME} ^
              -dxPassword {DXPASSWORD} ^
              -xmlFile {XML} ^
              -dxProtocol %DXPROTOCOL% ^
              -hostname %HOSTNAME% ^
              -dxPort %DXPORT%;
           ```

    !!!info "Notes on parameters:"
         1. `xmlFile` should be pointing to your page hierarchy export xml which can be the one exported from [here](export_site_page_hierarchy.md) or the one mentioned in [manual export](manual_export_site_page_hierarchy.md).
            - `wbiSite.xml` if you are using the Woodburn Insurance Demo.
         2. Ensure to place your correct credentials in the `{DXUSERNAME}` and `{DXPASSWORD}`.

2. The output should look similar to this.

      ```console
      2022-09-05 21:46:57 : XML Access execution in progress.
      (node:27677) Warning: Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable to '0' makes TLS connections and HTTPS requests insecure by disabling certificate verification.
      2022-09-05 21:47:01 : XML Access execution successfully completed, please find the output below, also refer to this file for more details store/outputFiles/xmlaccess/Output-20220905214701.xml.
      ```

3. Update the wcm libraries that are referencing to this DX Site page hierarchy. You can do this by doing the [import process](import_wcm_libraries.md) of the wcm library again or by manually updating each of the component in Authoring of Practitioner Studio.

4. To verify, your site should appear in Sites tab.
      ![Verify Site](../../images/19site_verify.png)

!!!tip "See more detailed information [here](https://help.hcltechsw.com/digital-experience/9.5/containerization/xmlaccess.html)."

???+ info "Related information"
      - [Exporting the DX Site Page Hierarchy xml from your system](export_site_page_hierarchy.md)
      - [Manually exporting the your DX Site Page Hierarchy](manual_export_site_page_hierarchy.md)