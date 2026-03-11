# How to delete WCM libraries referenced by other libraries

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

In HCL Digital Experience (DX) Web Content Manager (WCM), web content libraries organize web content items, templates, and components. Frequently, an item in one library references an item in another library. To maintain referential integrity and prevent broken links across your site, WCM restricts the deletion of any web content library that contains items actively referenced by another library. Attempting to use the delete icon in the Web Content Libraries portlet in this scenario will fail. This article explains how to resolve these cross-library dependencies and successfully delete the target libraries.

## Instructions

If you need to delete a library that contains items that are referenced by another library, you have two options: manually edit the items, or run the module to delete multiple libraries.

### Manually edit the items

1. Log in to HCL DX as an administrator.
2. Navigate to **Web Content > Authoring**, then select the library you want to delete.
3. Select the content items referenced by another library.
4. Select **More > View References > Manage References > Clear References**.
5. Repeat these steps for all referenced items.

### Run the module to delete multiple libraries

!!! important
    To successfully delete the libraries, you must include every referenced library in the module.

1. Clear all locks on the library using the `UnlockLibrary` module. For more information on this module, refer to [Unlocking a library](../../../manage_content/wcm_authoring/authoring_portlet/web_content_libraries/wcm_admin_library_unlock.md){target="_blank"}.

2. Run the ConfigEngine task to delete the referenced libraries. For more information, refer to [Deleting libraries by using the delete libraries tool](../../../manage_content/wcm_configuration/wcm_adm_tools/wcm_admin_library_delete.md){target="_blank"}.
