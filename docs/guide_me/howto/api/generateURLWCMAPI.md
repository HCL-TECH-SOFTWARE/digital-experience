# How to use WCM API to generate a URL based on the locale of the request

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

You can dynamically retrieve content and generate targeted URLs in HCL Digital Experience (DX) based on the locale of an incoming request. Utilizing Web Content Manager (WCM) APIs allows custom code to inspect request properties and route users to localized site areas and content components automatically. This article provides a WCM API sample code to generate a URL based on the locale of the request. 

???+ info "Disclaimer of warranties"
    The following code is sample code created by HCL Corporation. This sample code is provided to you solely for the purpose of assisting you in the development of your applications. The code is provided "AS IS", without warranty of any kind. HCL shall not be liable for any damages arising out of your use of the sample code, even if they have been advised of the possibility of such damages.

## Instructions

1. Implement WCM API URL within your custom Java servlet.
2. Update these placeholder values in the following sample code to match your environment:

    - `"English"`: Replace with the display language string returned by your locale check logic (or evaluate `userlocale.getLanguage()` and `userlocale.toString()`).
    - `"EnglishLibrary/EnglishSiteArea"`: Replace with the path to your primary site area.
    - `"RichTextElement"`: Replace with the exact name or reference of your targeted content element or component.
    - `"FrenchLibrary/FrenchSiteArea"`: Replace with the path to your secondary or alternate site area.

    Refer to the following sample implementation:

    ```java
    try {
        RenderingContext rc = (RenderingContext) request.getAttribute(Workspace.WCM_RENDERINGCONTEXT_KEY);
        Workspace myworkspace = rc.getContent().getSourceWorkspace();
        myworkspace.login();
        DocumentId docId=null;
        DocumentIdIterator contentIterator=null;
        Content currentContent;
        Locale userlocale = request.getLocale();
        String locale = userlocale.getDisplayLanguage();

        if(locale.compareTo("English") == 0)
        {
            DocumentIdIterator siteAreaIterator = myworkspace.findByPath("EnglishLibrary/EnglishSiteArea", myworkspace.WORKFLOWSTATUS_PUBLISHED);
            docId = siteAreaIterator.nextId();
            SiteArea mySiteArea = (SiteArea) myworkspace.getById(docId);
            contentIterator = mySiteArea.getDirectChildren();
            while(contentIterator.hasNext()) 
            {
                docId = (DocumentId) contentIterator.next();
                out.print("<br/><br/>Document id: " + docId.toString());
                currentContent = (Content)myworkspace.getById(docId);
                out.print("<br/><br/>Document Name: " + currentContent.getName());
                RichTextComponent myComponent = (RichTextComponent)currentContent.getComponentByReference("RichTextElement");
                String contentURL = myworkspace.generateURL(rc, myComponent);
                out.print("<br/><br/>URL: " + contentURL);
            }
        }
        else{
                DocumentIdIterator siteAreaIterator = myworkspace.findByPath("FrenchLibrary/FrenchSiteArea", myworkspace.WORKFLOWSTATUS_PUBLISHED);            
            }
        }
        myworkspace.logout();
    }
    catch (Exception e) 
    {
        out.println("Exception " + e.getMessage());
        e.printStackTrace();
    }
    ```

3. Compile the Java project and generate the deployable WAR or EAR archive file:
    - For Maven, run the following command:

        ```bash
        mvn clean package
        ```

    - For Gradle, run the following command:

        ```bash
        gradle build
        ```

4. Deploy and restart the web application module.
5. Trigger the custom Java plugin through an incoming web request using one of the following methods:
    - Navigate to the URL endpoint with your browser's language set to English or French:
    
        ```Plaintext
        https://<your_portal_host>:<port>/wps/PA_MyCustomPlugin/LocaleUrlServlet
        ```

    - Execute `curl` command to simulate localized requests:
    
        ```Bash
        curl -H "Accept-Language: fr-FR,fr;q=0.9" https://<your_portal_host>:<port>/wps/PA_MyCustomPlugin/LocaleUrlServlet
        ```