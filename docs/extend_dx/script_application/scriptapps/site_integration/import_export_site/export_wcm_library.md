
# Exporting your WCM library

## Exporting Process

1. Use the directory where you want to export as your base directory when running the commands.
2. Export the Page Hierarchy xml by running the following command.

    === "MacOS or Linux"

           ```bash
           # assumes other required parameters are already set via config file in store or via enviroment variables
           dxclient wcm-library-export \
              -dxUsername {DXUSERNAME} \
              -dxPassword {DXPASSWORD} \
              -dxConnectUsername {DXUSERNAME} \
              -dxConnectPassword {DXPASSWORD} \
              -dxWASUsername {DXUSERNAME} \
              -dxWASPassword {DXPASSWORD} \
              -librariesName {LIBRARYNAME} \
              -hostname $HOSTNAME \
              -dxProfileName $DXPROFILENAME \
              -hostname $HOSTNAME \
              -dxConnectPort $DXCONNECTPORT;
           ```

    === "Windows"

           ```bat
           :: assumes other required parameters are already set via config file in store or via enviroment variables
           dxclient wcm-library-export ^
              -dxUsername {DXUSERNAME} ^
              -dxPassword {DXPASSWORD} ^
              -dxConnectUsername {DXUSERNAME} ^
              -dxConnectPassword {DXPASSWORD} ^
              -dxWASUsername {DXUSERNAME} ^
              -dxWASPassword {DXPASSWORD} ^
              -librariesName {LIBRARYNAME} ^
              -hostname %HOSTNAME% ^
              -dxProfileName %DXPROFILENAME% ^
              -hostname %HOSTNAME% ^
              -dxConnectPort %DXCONNECTPORT%;
           ```

!!!info "Notes on parameters:"
    1. `librariesName` should be `"{Library Name}"`.
       - `"Woodburn Insurance"` if you are on Woodburn Insurance Demo
    2. Ensure to place your correct credentials in the `{DXUSERNAME}` and `{DXPASSWORD}`.

## Output

Find in your base directory the xml output in store/outputFiles/wcmLibrary (“The zip output file should look something like this: `wcm-library-export-20220913022248.zip`”). Move the exported zip to a different directory to ensure it would not be lost.

!!!tip "See more detailed information [here](https://help.hcltechsw.com/digital-experience/9.5/containerization/wcmlibraries.html)."

???+ info "Related information"
      - [How to Import WCM library](import_wcm_libraries.md)
