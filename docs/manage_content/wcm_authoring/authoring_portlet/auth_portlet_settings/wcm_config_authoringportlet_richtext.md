# Editor options

You can configure HCL Web Content Manager to use different editors for rich text and HTML fields.

## Rich text editor

-   **Default**

    Select this option to use the default JavaScript editor. This editor does not require a working Java runtime environment on the client computer.

-   **Advanced**

    Select this option to use the Textbox.io editor. Browser pop-up windows must be enabled to use this editor.

    !!!important
        The Textbox.io component in the HCL Digital Experience software is deprecated effective January 31, 2023 and will End of Support (EOS) on January 31, 2024. See [Deprecated features](../../../../whatsnew/deprecated_features.md) for more information.

-   **Enhanced Editor**

    Select this option to use the TinyMCE editor. Browser pop-up windows must be enabled to use this editor.

-   **EditLive! Java Editor**

    Select this option to use the EditLive! Java editor. This editor requires a working Java runtime environment on the client computer. Browser pop-up windows must be enabled to use this editor.

    !!! note
        Ephox EditLive! is a deprecated feature as of CF11 or higher.

-   **Custom**

    Select **Custom** to use a third-party rich text editor as your default editor. Before you enable a compatible third-party rich text editor, read the installation and configuration instructions of the third-party rich text editor. These instructions should include steps for enabling the third-party rich text editor to be used in a Web Content Manager solution.

    When you configure a third-party rich text editor, you need to copy a JSP file that is supplied by the third-party rich text editor. This file is used to start the third-party rich text editor. You enter the name of this JSP file in the Rich Text Options section of the authoring portlet configuration.

    If the third-party rich text editor is not available, the standard rich text editor is used.


## HTML editor

-   **Default**

    Select this option to use the default HTML editor.

-   **Custom**

    Select **Custom** to use a third-party HTML editor as your default editor. Before you enable a compatible third-party HTML editor, read the installation and configuration instructions of the third-party HTML editor. These instructions should include steps for enabling the third-party HTML editor to be used in a Web Content Manager solution.

    When you configure a third-party HTML editor, you need to copy a JSP file that is supplied by the third-party HTML editor. This file is used to start the third-party HTML editor. You enter the name of this JSP file in the HTML Options section of the authoring portlet configuration.

    If the third-party HTML editor is not available, the default HTML editor is used.


**Storing JSP files:** JSP files are stored within a web application that runs on the portal. To reference a JSP file in another web application, use the following path: contextPath;jspPath. For example: /wps/customapplication;/jsp/jspFilename.jsp.

A dynamic context path value can be defined by adding a token to the context path that corresponds to a key and value pair to the Web Content Manager configuration service environment provider. When this key is used as the token in the jsp value field, it is replaced dynamically at render time. For example: mycustomkey;myfile, where mycustomkey is a constant within the Web Content Manager configuration service.


