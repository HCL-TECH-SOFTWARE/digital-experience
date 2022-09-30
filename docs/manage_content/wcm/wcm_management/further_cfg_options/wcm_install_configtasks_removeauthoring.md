# Remove authoring configuration task

The remove authoring configuration task uninstalls the authoring portlet and related portal pages.

## Running the configuration task

To remove the Authoring portlet:

1.  Stop the server.
2.  Open a command prompt.
3.  Change to the wp_profile_root/ConfigEngine directory.
4.  Run the remove-wcm-authoring task.
    -   AIX®: `./ConfigEngine.sh remove-wcm-authoring -DWasPassword=password`
    -   Linux™: `./ConfigEngine.sh remove-wcm-authoring -DWasPassword=password`
    -   Windows™: `ConfigEngine.bat remove-wcm-authoring -DWasPassword=password`

