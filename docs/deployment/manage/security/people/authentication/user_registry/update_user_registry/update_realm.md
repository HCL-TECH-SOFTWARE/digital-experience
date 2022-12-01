# Updating the realm configuration

After you create and use the realm in the default federated repository, you might find that your realm configuration is not working correctly. You can update the realm configurations and make the necessary changes.

1.  Go to the [wp\_profile\_root](/digital-experience/deployment/manage/wpsdirstr#wp_profile_root)/ConfigEngine/properties directory.

2.  Open the wkplc.properties file with a text editor.

3.  Enter a value for the following parameters under the VMM realm configuration heading:

    **Note:** Go to the properties file for specific information about the parameters.

    -   realmName
    -   securityUse
    -   delimiter
4.  Save your changes to the wkplc.properties file.

5.  Open a command prompt.

6.  Change to the [wp\_profile\_root](/digital-experience/deployment/manage/wpsdirstr#wp_profile_root)/ConfigEngine directory.

7.  Run the following task to delete the old entity types before you add the RDN attribute as the only entry in the RDN list:

    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh wp-update-realm -DWasPassword=password
    -   IBM® i: ConfigEngine.sh wp-update-realm -DWasPassword=password
    -   Windows™: ConfigEngine.bat wp-update-realm -DWasPassword=password
    -   z/OS®: ./ConfigEngine.sh wp-update-realm -DWasPassword=password
8.  Stop and restart the appropriate servers to propagate the changes. For instructions, go to [Starting and stopping servers, deployment managers, and node agents](/digital-experience/deployment/manage/stopstart.md).



