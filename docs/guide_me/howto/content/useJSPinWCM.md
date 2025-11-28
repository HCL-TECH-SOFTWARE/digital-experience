# How to use Java Server Pages (JSPs) in WCM

## Applies to

> HCL Digital Experience 9.5 and higher  

## Introduction

This document describes an example for using Java Server Page (JSP) components in HCL Digital Experience with the Web Content Manager (WCM).  

???+ info "DISCLAIMER OF WARRANTIES"
    The following steps are sample steps created by HCL Corporation.
    These steps and/or sample code is provided to you solely for the purpose of assisting you in the development of your applications.
    The code is provided "AS IS", without warranty of any kind. HCL shall not be liable for any damages arising out of your use of the sample code, even if they have been advised of the possibility of such damages.

## Instructions

Sample steps for use of JSP component:  

1. Create a JSP file with name **hello.jsp** in the following directory:

    ```shell
    <wp_profile_root>\installedApps\<cellName>\wcm.ear\ilwwcm.war\jsp\
    ```

2. In the WCM authoring tool create a JSP component `hello` and use this in the `Path` field:  

    ```path
    /jsp/hello.jsp
    ```

3. Edit a presentation template to be used for testing and use **Insert Tag** type **Component**.  

4. Select the **hello** JSP component.

5. Preview a content item that uses the presentation template. Verify the JSP output is seen.

To render the JSP in a WCM Local Rendering Portlet on a page, copy the JSP to the following location:

```shell
<wp_profile_root>\installedApps\<cellName>\PA_WCMLRingPortJSR286.ear\ilwwcm-localrende.war\jsp
```

### Additional FAQ

Question:  
Is there any way to create JSP component as Dynamic web project and refer...in JSP component?  

Answer:  
Yes, you could create the JSP itself using Rational Tools but the JSP Component itself would be created with WCM.  
