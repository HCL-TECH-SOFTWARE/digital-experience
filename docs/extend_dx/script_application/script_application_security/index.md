# Script Application Security Overview

The default security configuration of the Script Application places limits on which portal users and groups can access the editor and import features. You can customize these limits.

For users to work with the Script Application, you must combine different ways of setting access permissions.

-   You determine which users or groups can access the Script Application Editor and Script Application Import portlets. To do so, you use the portal administration portlet Manage Portlets.
-   You determine which users or groups have Editor or Reviewer access rights to the Script Application Library. To do so, you assign access to the Script Application Library in Web Content Manager.

When you provide access rights for users and groups to author Script Applications, make sure that you combine access to both the Script Application Editor and Import portlets and to the Script Application Library.

The default security settings put constraints on several tasks that only authorized users can to do. These constraints apply to the following tasks:

-   Defining and editing new Script Application instances
-   Importing content that is used to construct these Script Application instances.

Configure the security for these tasks properly to protect your portal from malicious users.

The Script Application also puts extra constraints upon the upload option. The size and content of uploaded archives is limited. They are set by default at levels that accommodate most use cases.

The default settings for the Script Application might not be appropriate for all customers and all environments. You can change the permissions on the Script Application Library, and the Script Applications Site Area where you can push script-based applications for use as Script Applications. Review the permissions and security settings by using the portal administration tools, the Web Content Authoring tool, and the HCL DX and Web Content Manager security practices. These tools and documents help you ensure that the permissions are set for the users and roles in your environment.

When you review and set security permissions, be aware that the Script Application Library contains different types of artifacts. The **Script Applications** Site Area is where Script Application developers push applications to, unless you create a custom site area for that use. Protect these site areas to provide access permissions to users in the following ways:

-   Developers can modify the content items. To be able to do so, they need Web Content Manager Editor access permission.
-   Users who run Script Applications can access them only as readers.

The other contents of the Script Application Library include templates, which need to be accessed, but not modified, by users of Script Applications. The Script Application Library also includes Script Application configuration settings that must be modifiable by administrators for the configuration of the Script Application environment for that portal or virtual portal.

You can use the Script Application in virtual portals and give different users or groups of users access to modify Script Application artifacts in their own virtual portal. Each virtual portal has its own copy of the Script Application Library. Therefore, verify for each virtual portal that you have appropriate permissions set on the Script Application Library and its contents, and all custom site areas.

You can provide security for the content of your Script Application primarily by Web Content Manager authorization. You give users Read, Edit, or Review access to the site areas and portal content where you store your Script Applications. For more information about how to set access rights to Web Content Manager libraries, site areas and content items, read the section about [Web Content Manager access control](../../../deployment/manage/security/people/authorization/controlling_access/wcm_security/index.md). For Script Application libraries, site areas, and content that your users use with the Script Application editor, import, export, and command line push utility, users need Editor rights to these Script Application libraries, site areas, and content.

-   **[User Access to Script Applications](sp_security_upgrade.md)**  
When you provide access rights for users and groups to author Script Applications, make sure that you combine access to both the Script Application Editor and Import portlets and to the Script Application Library.
-   **[Control Access to Script Applications](access_to_script_app_lib_sitearea/index.md)**  
You can grant editor and reviewer access to users or group of users for the Script Application Library and Script Applications Site Area. 
-   **[Imported Archive Security](import_security.md)**  
There are constraints on the size and content of uploaded archives to add a layer of security when you import archives.
-   **[Custom Configuration Properties for Script Applications](import_export_config.md)**  
When the Script Application imports or exports an application, it uses specific properties as the parameters for the import or export.