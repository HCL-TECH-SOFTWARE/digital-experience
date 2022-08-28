# Creating more multilingual sites Multilingual Solution

In many cases, the number of languages or regions you require for a site is fixed, but there are times when you need to roll out new locales as your organization grows.

1.  Use the **ML Library Copy** portlet to copy either the base locale site or one of the translated sites that more closely matches the new site, assigning it a new name and locale during the copy.

2.  Translate the copied items as required.

3.  Update the relevant multilingual configuration file to reference your new library.

4.  This step is optional. If the library being copied had Portal Page mappings, then you can have new mappings added against the copied library by running the following command from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory:

    -   **Windows™**

        ConfigEngine.bat wcm-mls-sync-content-mappings -DPortalAdminId=username -DPortalAdminPwd=password -DbaseLibrary=NAME\_OF\_EXISTING\_COPIED\_LIBRARY -DlibrariesToSync=NAME\_OF\_NEW\_CREATED\_LIBRARY

    -   **Linux™**

        ./ConfigEngine.sh wcm-mls-sync-content-mappings -DPortalAdminId=username -DPortalAdminPwd=password -DbaseLibrary=NAME\_OF\_EXISTING\_COPIED\_LIBRARY -DlibrariesToSync=NAME\_OF\_NEW\_CREATED\_LIBRARY


When the initial translation is complete, you can run user acceptance tests before you deploy your new site and going into the day to day maintenance that is enabled through automated processes.

You can temporarily disable the automated syncing of this new site while it is going through its initial translation and testing phases.


