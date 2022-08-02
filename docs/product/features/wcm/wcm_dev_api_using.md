# How to use the Web Content Manager API

The workspace is the heart of the HCL Web Content Manager API. Items are created, saved, deleted and searched for in the workspace item. A workspace is basically an interface to Web Content Manager that is associated with a user. Using a workspace item, the user can perform operations as that user.

To get a workspace item, you must first retrieve the `WebContentService`:

```
try
 {
    // Construct and initial Context
    InitialContext ctx = new InitialContext();
    
    // Retrieve WebContentService using JNDI name
    WebContentService webContentService = (WebContentService) 
    ctx.lookup("portal:service/wcm/WebContentService");
 }
 catch (NamingException ne)
 {
    System.out.print("Naming Exception: " + ne);
 }
```

You then request one from the repository singleton with the following call:

```
webContentService.getRepository().getWorkspace("my username", "my password");
```

To get a workspace item without specifying a user name and password, use one of the following calls:

-   When used in a portlet: `Workspace workspace = webContentService.getRepository().getWorkspace( (Principal) portletRequest.getUser() );`
-   When not used in a portlet: `Workspace workspace = webContentService.getRepository().getWorkspace((Principal) request.getUserPrincipal() );`

If the user is not recognized as a Web Content Manager user, or for some other reason could not be authenticated, an `OperationFailedException` will be thrown.

**Note:** Only Web Content Manager users \(including external LDAP users if enabled\) are recognized. For example, A workspace cannot be retrieved using an LTPA token.

Operations available on the workspace include:

-   Searching for items with the provided "findBy" methods.
-   Creating new items of available editable types.
-   Saving and deleting editable items.

You must call `endWorkspace()` when finished with the workspace item.

```
webContentService.getRepository().endWorkspace();
```

**Note:** You don't need to call `endWorkspace()` when using a JSP component as rendering and session management is handled by Web Content Manager.

**Note:** You use the `setCurrentDocumentLibrary` method to make calls library-specific. If not specified, the default library that has been configured in the WCM WCMConfigService service is used.

**Parent topic:**[The HCL Web Content Manager API](../wcm/wcm_dev_api.md)

