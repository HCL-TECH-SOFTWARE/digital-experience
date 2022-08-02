# Create a module profile

You can create a module profile or use the module profile from the ready-to-use HCL Digital Experience Portal 7.0.0.28.0 theme. Modify the profile as needed by editing the profile\_full.json file in the profiles folder. To modify the profile as needed, make a copy of the profile\_full.json file in the profiles folder, make your modifications and then copy your new profile to your portal.

The value of resourceaggregation.profile in the metadata.properties file determines which .json file is loaded by default for your theme. The default profile for the HCL DX Portal 7.0.0.28.0 theme is profile\_deferred.json.

1.  Connect your WebDAV client to http://localhost:10039/wps/mycontenthandler/dav/fs-type1/

2.  From the ibm.portal.7002Themethemes\\Portal8.0 folder, copy the profiles folder to the local drive.

3.  Copy the local copy of the profiles folder into the fs-type1 folder for your theme.

4.  Connect your WebDAV client to http://localhost:10039/wps/mycontenthandler/dav/themelist/

5.  From the folder for your theme, copy the metadata.properties file to the local drive.

6.  Edit the local copy of the metadata.properties file. Change the contents of the file to:

    ```
    resourceaggregation.profile=profiles/profile_yourprofile.json
    ```

7.  Copy the local copy of the metadata.properties file into the themelist folder for your theme.


**Related information**  


[Creating a dynamic content spot with a module](../rwd/rwd_define_mod_override.md)

