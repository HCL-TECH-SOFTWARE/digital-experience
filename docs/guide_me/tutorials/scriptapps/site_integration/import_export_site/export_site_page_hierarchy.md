
# Exporting the DX Site Page Hierarchy xml from your system

## Exporting Process
1. Use the directory where you want to export as your base directory when running the commands.
   
2. Export the Page Hierarchy xml by running the following command.

    === "MacOS or Linux"

           ```bash
           # assumes other required parameters are already set via config file in store or via enviroment variables
           dxclient xmlaccess \
              -dxUsername {DXUSERNAME} \
              -dxPassword {DXPASSWORD} -xmlFile {XMLFILE} \
              -dxProtocol $DXPROTOCOL -hostname $HOSTNAME \
              -dxPort $DXPORT;
           ```

    === "Windows"

           ```bat
           :: assumes other required parameters are already set via config file in store or via enviroment variables
           dxclient xmlaccess ^
              -dxUsername {DXUSERNAME} ^
              -dxPassword {DXPASSWORD} -xmlFile {XMLFILE} ^
              -dxProtocol %DXPROTOCOL% -hostname %HOSTNAME% ^
              -dxPort %DXPORT%;
           ```

    !!!info "Notes on parameters:"
        1. `xmlFile` should be pointing to your Page Hierarchy export xml from [setup](index.md#Page-Hierarchy-export-xml). Sample XML files can be found in the samples directory of DXClient or in DX server located in the following directory: `PortalServer_root/doc/xml-samples`.
        2. Ensure to place your correct credentials in the `{DXUSERNAME}` and `{DXPASSWORD}`.


3. The output should look similar to this:

    ```bash
    2022-09-07 21:07:08 : XML Access execution in progress.
    (node:86263) Warning: Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable to '0' makes TLS connections and HTTPS requests insecure by disabling certificate verification.
    2022-09-07 21:07:08 : XML Access execution successfully completed, please find the output below, also refer to this file for more details store/outputFiles/xmlaccess/Output-20220909154617.xml..
    ```


## Output
Find in your base directory the xml output in store/outputFiles/xmlaccess (“The zip output file should look something like this: `Output-20220926095803.xml`”). Move the exported zip to a different directory to ensure it would not be lost.


!!!tip "See more detailed information [here](https://help.hcltechsw.com/digital-experience/9.5/containerization/xmlaccess.html)."

## Related Pages
   - [Manually exporting the your DX Site Page Hierarchy ](manual_export_site_page_hierarchy.md)
   - [How to import DX Site Page Hierarchy](import_site_page_hierarchy.md)