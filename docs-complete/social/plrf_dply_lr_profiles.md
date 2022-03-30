# Deploying list-rendering profiles 

You can choose between two ways of deploying your custom list-rendering profiles.

-   You can deploy a list-rendering profile by creating all entries that are contained in the list-rendering profile as custom properties in the WP List Rendering Profile Service resource environment provider in the WebSphere® Integrated Solutions Console.
-   You can implement a plug-in for the extension point with the ID `com.ibm.portal.wcm.plr.ListRenderingProfileProvider`. These extensions can make multiple list-rendering profiles available to the Digital Data Connector \(DDC\) for HCL Portal run time through the following method:

    ```
    com.ibm.portal.wcm.plr.ListRenderingProfileProvider.getListRenderingProfiles()
    ```

    This method is defined in the public Java API for the Digital Data Connector \(DDC\) for HCL Portal framework. With this approach, your plug-in returns the individual list-rendering profile entries as properties contained in `java.util.Properties` objects. By using this approach, you can package the required list-rendering profiles together with the DDC plug-in.


List-rendering profiles are cached by the DDC framework. After deploying a list-rendering profile, you must make the framework aware of changes to the list-rendering profile. To do so, either restart the portal or render the HCL Web Content Manager tag `[Plugin:ListRenderingContext action="reloadProfiles"]`.

**Parent topic:**[Working with list-rendering profiles ](../social/plrf_work_lr_profiles.md)

