# How to Delete Libraries That Are Referenced by Other Libraries

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction
If a library contains items that are referenced by another library, you cannot delete it using the delete icon in the "Web Content Libraries" portlet.

This document explains how to address this scenario.

## Instructions
If you need to delete a library that contains items that are referenced by another library, choose from the following options:

A.  Manually edit the items in question as follows:

1.  Log in to Portal as an admin and go to Web Content > Authoring > LibraryName.
2. Select the content item(s) that's referenced by another library.
3. Click on on More > View References > Manage References > Clear References.
4. Repeat for all referenced items.

OR

B. Run the module to delete multiple libraries. You'll need to pass all libraries with references between them to the module or none of the libraries will be deleted.

1. To run this module, first clear all locks on the library using the "UnlockLibrary" module.  The process is documented in the following DX Help Center document: [Unlocking a library](https://help.hcl-software.com/digital-experience/9.5/latest/manage_content/wcm_authoring/authoring_portlet/web_content_libraries/wcm_admin_library_unlock/?h=unl)

2. Run the ConfigEngine task to delete the referenced libraries that's documented in the following DX Help Center document: [Deleting libraries by using the delete libraries tool](https://help.hcl-software.com/digital-experience/9.5/latest/manage_content/wcm_configuration/wcm_adm_tools/wcm_admin_library_delete/)
