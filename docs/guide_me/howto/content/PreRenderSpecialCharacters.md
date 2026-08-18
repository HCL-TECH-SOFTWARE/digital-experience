# How to render or pre-render special characters on a Unix/Linux environment

## Applies to

> HCL Digital Experience v9.5 and later  

## Introduction

The default encoding for Rich Text Elements / Text elements is **UTF-8** where the most Linux/Unix systems are set to **ISO-8859**. This can cause issues with rendering or pre=rendering of special characters on non-windows systems. This article describes the options to ensure the rendering or pre-rendering is successful on non-windows systems.

## Instructions

This document describes three different options that can be used to resolve such encoding issues.  

### Option 1

Keep the OS character encoding setting to ISO-8859-1 and use a converter e.g. **iconv** to convert the pre-rendered files from **UTF-8** to **ISO-8859-1**. This could be done by using iconv as following:  

```bash
iconv --from-code=UTF-8 --to-code=ISO-8859-1 ./oldfile.htm ./newfile.html
```

### Option 2

Change the default character encoding used by WCM and set it to **ISO-8859-1**.

1. Open the IBM Integrated Solutions Console (WAS admin console) in a web-browser.  
2. Navigate to **Resources > Resource Environment > Resource Environment Providers**.
3. Select **WCM WCMConfigService**.
4. Click to the **Custom Properties** link.
5. Search for the property **connect.defaultencoding**. If it's not present then create a new property by clicking to the **New** button at the top of the page and entering the **connect.defaultencoding** for the name. Set the property value to **ISO-8859-1**.
6. Restart the HCL DX server (WebSphere_Portal JVM).

Be aware this changes the character set of all content delivered through the WCM connect servlet.

### Option 3

Change the character encoding of your OS and set it to UTF-8.
