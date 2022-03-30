# Assigning user access for the Script Application 

When you provide access rights for users and groups to author Script Applications, make sure that you combine access to both the Script Application Editor and Import portlets and to the Script Application Library.

In the Script Application version that is included in HCL Portal Combined Cumulative Fix 09 or later, the Web Content Manager content authorization provides the primary means of access control for editing, pushing, and importing Script Applications. It determines which users can read and edit the site areas and Script Application content items where your Script Application content is stored in Web Content Manager. This change makes it easier to administer access control for Script Application content. To ensure adequate access protection for your Script Application content, review the authorization settings for the following areas:

-   The Script Application Library.
-   The Script Applications Site Area.
-   All other locations where you store Script Applications in Web Content Manager.
-   The Script Application Editor and Script Application Import portlets. The Script Application version that is included in HCL Portal CF09 and later CFs provides the Script Application Editor and Import utility in the form of portlets. By default, these portlets are available to administrators only. You might want to enable more users or groups to use these Script Application Editor and Script Application Import portlets. To do so, give them access permission by using the portal administration portlet Manage Portlets. For information about this portlet and how to use it, read the section about Managing portlets.

To set access permissions for your users to work with the Script Application version that is included in CF09 and later, complete the following steps.

**Note:** You need to complete this procedure only for users who you want to be able to author Script Applications, additional to the portal `wpsadmins` group. The `wpsadmins` group has the necessary access rights already.

1.  Only for customers who upgrade from the PAA-based Script Portlet V 1.2 or 1.3 from the [HCL®Software Products Catalog](https://www.hcltechsw.com/products) to the version that is included in CF09 and later for portal: The method for providing access to the editor and import utilities changed. Obtain your current security settings before you set access permissions for your Script Portlet of CF09 or the Script Application of CF11 or later.

    **Note:** The cumulative fix installation removes the old Script Portlet application and its role mappings. Therefore, you need to complete this step *before* you install CF09 or later Combined Cumulative Fixpacks.

    To obtain the current security settings of your existing Script Portlet configuration, proceed as follows:

    1.  Log in to the WebSphere® Integrated Solutions Console.

    2.  Select **Applications** \> **WebSphere enterprise applications** \> **scriptportlet**.

    3.  Select **Security role to user/group mapping**.

    4.  Select **Map Users...** or **Map groups...**, depending on your user configuration.

    5.  Select **Script Portlet Authors**

    6.  Obtain the Script Portlet Author role mappings for access to the Script Portlet Import and Editor portlets. Take notes of them for further use later.

2.  After you upgrade from the PAA-based Script Portlet V 1.2 or 1.3 to CF09 or later, add the users or groups to the User role of the Script Application Editor and Script Application Import portlets. To do so, use the portal administration portlet Manage Portlets.

3.  For the additional users and groups to be able to author Script Applications, add them as Editors and Reviewers for the Script Application Library and all other Web Content Manager content libraries in which you store Script Applications.

    For virtual portals, each virtual portal has its own copy of the Script Application Library. Therefore, make sure for each virtual portal that you give Script Application authors access to the Script Application Library and its contents, and all custom site areas.


If a user cannot work with the Script Application as expected, make sure that the user has access to both the Script Application Editor and Import portlets *and* to the Script Application Library as required. Examples:

-   **You gave a user Editor access to the Script Application library, but the editor does not open correctly.You might see the following error message: “Error 401: EJCBD0006E: The resolution of a URI failed. Refer to the SystemOut.log for more detailed information.”**

    Make sure that you also granted the user or group User access to the Script Application Editor portlet.

    If you saw the EJCBD0006E error message, you might also see one of the following messages when you check the SystemOut.log: “EJPRD0601E: The current user is not authorized to access the Script Application Import Dialog portlet” or “EJPRF0007E: The current user is not authorized to access the Script Application Editor portlet.”

-   **You gave a user User access to the Script Application Editor, but the Edit option does not show for the Script Application when the user puts the portal page in Edit mode.**

    Make sure to also grant the user or group Editor and Reviewer access to the Web Content Manager library and site area where that Script Application instance is stored. For example, for a Script Application that is stored in the default Script Application Library or Script Application site area, the developer needs Edit and Review access to that library and site area. For a Script Application stored with the page in the Portal Site library, the developer needs Edit and Review access to that page in the Portal Site library.


**Parent topic:**[Script Application security overview ](../script-portlet/security.md)

**Related information**  


[Script Application limitations and troubleshooting ](../script-portlet/ts_preview.md)

