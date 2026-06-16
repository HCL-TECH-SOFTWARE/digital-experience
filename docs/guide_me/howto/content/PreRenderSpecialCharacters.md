# How to Render or Pre-render special characters on a non-windows system

## Applies to

> HCL Digital Experience v8.5 and later  

## Introduction

The default encoding for RTE/Text elements is UTF-8 where as most -ix systems are set to ISO-8859.  This can cause issues with Rendering or Pre=rendering of special characters on non-windows systems.  This article describes the options to ensure the Rendering or Pre-rendering is successful on non-windows systems.

## Instructions

Option 1:
Keep the OS character encoding setting of ISO-8859-1 and use a converter e.g. iconv to convert the pre-rendered files from UTF-8 to 8859-1. This could be done like this:

`iconv --from-code=UTF-8 --to-code=ISO-8859-1 ./oldfile.htm ./newfile.html`

Option 2:
Change the default character encoding used by WCM and set it to "ISO-8859-1".

1. Open the WAS admin console in a browser.  Go to https://host:port/ibm/console/login.do?action=secure
2. Go to Resources > Resource Environment > Resource Environment Providers
3. Select WCM_WCMConfigService.
4. Click Custom Properties.
5. Look for the property connect.defaultencoding.  If it's not present then create a new property by clicking New at the top of the page and entering connect.defaultencoding for the name.  Set the property value to ISO-8859-1
6. Restart the PortalServer.

Be aware this changes the character set of all content delivered through the WCM connect servlet.

Option 3:
Change the character encoding of your OS and set it to UTF-8.
