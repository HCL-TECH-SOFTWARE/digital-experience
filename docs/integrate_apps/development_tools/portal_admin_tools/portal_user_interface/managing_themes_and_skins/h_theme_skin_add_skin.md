---
id: h_theme_skin_add_skin
title: Creating your own custom skin
---




You can create skins to customize the portal theme as required. A successful approach to creating custom skins is copying the standard portal skin, `ibm.portal.80Standard`, then adding images, JavaScript files, and other custom resources. Copying the standard portal skin is the best way to ensure that your custom skin contains all the required elements.

**Note:** Do not modify the standard HCL Portal skin directly, because future fix packs and service changes can overwrite your changes.

To create custom skins, proceed by the following steps:

1.  **Creating a new skin.**

    To create a custom skin, proceed by these steps:

    1.  Mount the /skinlist WebDAV entry point with your WebDAV client here: /wps/mycontenthandler/dav/skinlist/ .

        Replace wps with your WpsContextRoot value, if you have changed it.

    2.  Copy and rename the folder of the HCL Portal skin that you plan to use as the base for your custom skin.

        **Note:** Some WebDAV clients do not let you copy directly within the /skinlist folder. As an alternative, do the following:

        1.  Copy the appropriate folder to your local file system.
        2.  Give the skin a new title by editing the appropriate localized\_locale.properties file under the metadata folder. If you do not change the title, the portal will show multiple skins with the same title in selection lists.
        3.  Copy the new folder to the WebDAV /skinlist folder.
    **Note:** If you have trouble using the /skinlist/ entry point, try /skinlist/all, as some WebDAV clients have issues listening without the all appended.

    Your new skin is now defined in the portal database. To customize your skin, you edit the skin files in WebDAV. You can then assign the skin to portlets. To perform administrative customization to the title, description, or metadata of your skin, continue to use the /skinlist/ entry point. If you want to customize the templates and static resources, use the /fs-type1/ entry point.

2.  **Adding static resources to your skin.**

    To add images or other static resources to your skin, proceed as follows:

    1.  Mount the /fs-type1/ WebDAV entry point with your WebDAV client here: /wps/mycontenthandler/dav/fs-type1/

        Replace wps with your WpsContextRoot value, if you have changed it.

    2.  Add images or other static resources to your skin as follows:

        1.  Copy the required static resources, such as images or JavaScript files, into the root directory of your skin in WebDAV.
        2.  Organize your files in subdirectories as necessary.
        3.  Use server relative or absolute URLs to reference the resources in your skin.html file. For example, if you create a folder named /images that contains a file named logo.png, you can use the following references:
            -   Server relative URL: `<img src="/wps/mycontenthandler/dav/skinlist/myskin/images/logo.png"/>`
            -   Absolute URL: `<img src="http://server\_name:port\_number/wps/mycontenthandler/dav/skinlist/myskin/images/logo.png"/>`
        **Note:** When you create a file for the skin on the /fs-type1/ entry point, there is a link that exposes this file also through the /skinlist/ entry point. This link makes it possible to use the path defined to the image as skinlist instead of fs-type1 . You can still use an absolute path to the /fs-type1/ entry point if required, for example `<img src="http://server\_name:port\_number/wps/mycontenthandler/dav/fs-type1/skins/myskin/images/logo.png"/>`


