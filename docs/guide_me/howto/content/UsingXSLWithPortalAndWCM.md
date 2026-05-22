# Tips for using XSL with HCL DX and WCM

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

If XML and associated XSL are not displayed properly, e.g. cannot preview, this article will provide information for resolving the issue.

## Instructions

The return type for a content is **text/html** by default. To override this, on the URL you can put the parameter **subtype=xml**.
This will make the XML include the XSL.  

When previewing, you need to do this manually each time.  

For rendering, the links that are generated in the hrefs need to include this in the querystring.  

Another option is to use a JSP component and set the response type in the JSP writer. Note that JSP components cannot be pre-rendered.  

If you are trying to use XSL to mark up XML in WCM and you uploaded an XSL file to a file resource component but you are not seeing the XML rendered as expected check the following scenario.  

The issue is that the XSL is returned as a text file rather than XML. Convert the text to an XML object using a custom function to workaround that issue.  For example, define the following in an HTML element:  

```xml
  function loadXMLDoc(dname) {

  if (window.XMLHttpRequest) {
     xhttp=new XMLHttpRequest();
    } else {
     xhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
 
  xhttp.open("GET", dname, false);
  xhttp.send();
 
  return parseXmlDoc(xhttp.responseText);
  }
```

???+ info "Related information"
    [Web Content Manager JSP tags](../../../manage_content/wcm_development/wcm_dev_api/wcm_reference_wcm-jsp-tags.md){target="_blank"}
