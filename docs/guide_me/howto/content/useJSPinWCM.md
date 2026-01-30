# How to use Java Server Pages (JSPs) in WCM

## Applies to

> HCL Digital Experience 9.5 and higher  

## Introduction

This article describes how to use Java Server Page (JSP) components in HCL Digital Experience with the Web Content Manager (WCM). 

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
6.  Select the **hello** JSP component.
7.  Preview a content item that uses the presentation template to verify that the JSP output appears.

## Rendering the JSP in a Local Rendering Portlet
To render the JSP in a WCM Local Rendering Portlet on a page, you must copy the JSP to the local rendering war file.

Copy the `hello.jsp` file to the following location:
```
<wp_profile_root>\installedApps\<cellName>\PA_WCMLRingPortJSR286.ear\ilwwcm-localrende.war\jsp
```

## Frequently asked questions

**Can I create a JSP component as a Dynamic web project and refer to it in a JSP component?**

Yes. You can create the JSP using Rational Tools, but you must create the JSP Component itself within WCM.