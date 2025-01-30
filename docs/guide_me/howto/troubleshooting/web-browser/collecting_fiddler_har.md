# How to collect a Fiddler trace (HAR-file)?

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

There will be instances where HCL Support will request a Fiddler/HAR file to investigate a product issue. Please follow the instructions below.  

## Instructions

### Steps using Fiddler  

1. <a href="https://www.telerik.com/download/fiddler" target="_blank">Download Fiddler</a>

2. <a href="https://docs.telerik.com/fiddler/configure-fiddler/tasks/configurefiddler" target="_blank">Configure Fiddler </a>

    !!! Note  
        If the target site will be accessed over HTTPS, make sure to follow the steps discussed in the article linked below to decrypt the traffic.  
        <a href="http://docs.telerik.com/fiddler/Configure-Fiddler/Tasks/DecryptHTTPS" target="_blank">Configure Fiddler Classic to Decypt HTTPS Traffic</a>

3. Enable any tracing on the Portal Server requested by HCL Support (skip step if no tracing requested).  

4. Open browser and clear all browser cache (or open a private/incognito tab).  

5. Open Fiddler to start capturing traffic.  

6. If browser console output requested by HCL Support, open the browser console (usually F12).  

7. Reproduce the issue in your browser.  

8. Once issue is reproduce, save the Fiddler session (`File -> Save -> All Sessions`).  

9. This will produce a file with the extension .SAZ. Please upload file to your Case with HCL Support for review.  

10. If HCL Support requested additional tracing logging, please upload the `\WebSphere\wp_profile\logs\WebSphere_Portal` logs directory (or a wpcollector).  

11. If HCL Support requested the browser console text, please copy the text to a file and upload to Case for review as well.  

If Fiddler cannot be installed in your environment, you can provide similar data with your browser's built in tools.  

### Steps to create a HAR file in the web-browser

1. Enable any tracing on the Portal Server requested by HCL Support (skip step if no tracing requested).  

2. Open browser and clear all browser cache (or open a private/incognito tab).  

3. Open browser `Developer Tools -> Network` tab (menu option will vary depending on browser being used).  

4. Select the option to collect entire session. For example, in Chrome: 'Preserve log', in Firefox: 'Persist Logs'.  

5. Reproduce the issue in your browser.  

6. Once issue is reproduce, save the session as a HAR file.  
   Using Chrome web-browser: Right-click in the network traffic and select `Save all as HAR with content`.  
   Using Firefox: Right-click and select `Save all as HAR`.  
   Microsoft Edge: Navigate to network and click the `Export HAR (santizized)...` button.  

7. This will produce a file with the extension .HAR. Please upload to your Case with HCL Support for review.  

8. If HCL Support requested additional tracing logging, please upload the `\WebSphere\wp_profile\logs\WebSphere_Portal` logs directory (or a wpcollector).  

9. If HCL Support requested the browser console text, please copy the text to a file (navigate to Console tab in Developer tools) and upload to Case for review as well.  

Also see HCL Digital Experience: <a href="https://www.youtube.com/watch?v=9ct26dCrHqk" target="_blank">Getting an HAR Log</a>
