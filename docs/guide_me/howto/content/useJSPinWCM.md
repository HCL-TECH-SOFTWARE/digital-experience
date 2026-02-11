# How to use JavaServer Pages (JSPs) in WCM

## Applies to

> HCL Digital Experience 9.5 and higher  

## Introduction

This article describes how to use JSP components in HCL Digital Experience (DX) with the Web Content Manager (WCM).

!!! warning "Disclaimer"
    HCL Corporation created these sample steps and code to help you develop your applications. They are provided "AS IS," without warranty of any kind. HCL is not liable for any damages arising from your use of the sample code, even if HCL has been advised of the possibility of such damages.

## Creating and testing a JSP component

1. Create a JSP file named `hello.jsp` in the following directory:

    ```
    <wp_profile_root>\installedApps\<cellName>\wcm.ear\ilwwcm.war\jsp\
    ```

2. In the WCM authoring tool, create a JSP component named **hello**.  

    ```path
    /jsp/hello.jsp
    ```

3. Edit a presentation template to use for testing.  
4. Select the **hello** JSP component.
5. Select **Insert Tag**, and then select **Component**.
6. Select the **hello** JSP component.
7. Preview a content item that uses the presentation template to verify that the JSP output appears.

## Rendering the JSP in a local rendering portlet

To render the JSP in a WCM local rendering portlet on a page, you must copy the JSP to the local rendering WAR file.

Copy the `hello.jsp` file to the following location:

```
<wp_profile_root>\installedApps\<cellName>\PA_WCMLRingPortJSR286.ear\ilwwcm-localrende.war\jsp
```

!!! note "JSP component creation"
    You can create a JSP component as a dynamic web project using Rational Tools. However, you must create the JSP component itself within WCM to refer to it.
