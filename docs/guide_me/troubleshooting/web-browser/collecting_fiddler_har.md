# How to collect a Fiddler trace (HAR-file)

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

To help support investigate a product issue, HCL Support might ask you for a Fiddler trace or a HAR file. This article describes how you can produce these traces or files.

## Instructions

To create Fiddler trace or an HAR file, refer the following steps:

### Steps using Fiddler  

1. [Download Fiddler](https://www.telerik.com/download/fiddler){target="_blank"}.

2. [Configure Fiddler](https://docs.telerik.com/fiddler/configure-fiddler/tasks/configurefiddler){target="_blank"}.

    !!! Note  
        If the target site uses HTTPS, make sure to [Configure Fiddler Classic to Decrypt HTTPS Traffic](http://docs.telerik.com/fiddler/Configure-Fiddler/Tasks/DecryptHTTPS){target="_blank"} to capture the traffic.

3. If requested by HCL Support, enable tracing on the Portal server.  

4. Open the browser and clear the cache. Alternatively, you can open a private or incognito tab.

5. Open Fiddler.  

6. If requested by HCL Support, open the browser console (usually by pressing **F12**).

7. Reproduce the issue in your browser.  

8. Once the issue is reproduced, save the Fiddler session (**File > Save > All Sessions**). This creates a file with a `.saz` extension.

9. Upload the file to your case with HCL Support.  

10. If HCL Support requests additional logs, upload the `<wp_profile_root>\logs\WebSphere_Portal` logs directory or a [wpcollector output](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0012545){target="_blank"}.  

11. If requested by HCL Support, copy the browser console text to a file.

    1. Go to the **Console** tab in **Developer Tools**.
    2. Right-click and select **Copy console messages** (or a similar save option, depending on your browser).
    3. Upload the file to your case.  

If you cannot install Fiddler in your environment, you can use your browser’s built-in tools to provide similar data.  

### Creating a HAR file in a web-browser

1. Enable any tracing on the Portal server requested by HCL Support. Skip this step if tracing is not requested.  

2. Open the browser and clear the cache. Alternatively, you can open a private or incognito tab.

3. Open your browser’s **Developer Tools** and select the **Network** tab.  

4. Enable the option to preserve the log, such as **Preserve log** in Chrome or **Persist Logs** in Firefox.

5. Reproduce the issue in your browser.  

6. After you reproduce the issue, save the session as a HAR file.

    - **In Chrome and Microsoft Edge:** Click the **Export HAR (sanitized)...** button under the **Network** tab.
    - **In Firefox:** Right-click and select **Save all as HAR**. 

    This creates a file with a `.har` extension.

7. Upload the file to your case with HCL Support.  

8. If HCL Support requested additional logs, upload the `<wp_profile_root>\logs\WebSphere_Portal` logs directory or a [wpcollector output](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0012545){target="_blank"}.

9. If requested by HCL Support, copy the browser console text to a file.

    1. Go to the **Console** tab in **Developer Tools**.
    2. Right-click, and select **Copy console messages** (or a similar save option, depending on your browser). 
    3. Upload the file to your case.
  
!!! info "Additional Information"
    Also see HCL Digital Experience: [Getting an HAR Log](https://www.youtube.com/watch?v=9ct26dCrHqk){target="_blank"}
