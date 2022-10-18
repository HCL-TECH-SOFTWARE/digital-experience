---
id: wcm_dev_elements_jsp_props
title: Selecting a JSP file
---

# Selecting a JSP file


You use the JSP element to select a JSP file to store in the component.

1.  Enter the path to the JSP file. The path must begin with a forward slash.

    For example:

    ```
    /wps/customapplication;/jsp/jspFilename.jsp
    ```

    **Storing JSP files:** JSP files are stored within a web application that runs on the portal. To reference a JSP file in another web application, use the following path: contextPath;jspPath. For example: /wps/customapplication;/jsp/jspFilename.jsp.

    A dynamic context path value can be defined by adding a token to the context path that corresponds to a key and value pair to the Web Content Manager configuration service environment provider. When this key is used as the token in the jsp value field, it is replaced dynamically at render time. For example: \[my.custom.key\];myfile where my.custom.key is a constant within the Web Content Manager configuration service.

2.  Enter an error message to display when an incorrect JSP path is entered. A Java exception stack trace is displayed if there is a syntax error.


