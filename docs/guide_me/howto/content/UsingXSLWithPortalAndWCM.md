# How to use XSL with HCL DX and WCM

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

When XML documents and their associated XSL stylesheets do not display or preview properly, the issue usually occurs when the content rendering type defaults to standard HTML or plain text. This article describes how to use XSL with HCL Digital Experience (DX) and Web Content Manager (WCM) to resolve these presentation issues.

## Instructions

To use XSL with HCL DX and WCM, perform the following steps:

### Overriding the content subtype parameter

1. Append the `subtype=xml` parameter to the content URL to override the default `text/html` return type and force the XML to include the XSL stylesheet.
2. Manually add the `subtype=xml` parameter to the URL query string each time you preview the content.
3. Configure generated links within `href` attributes to include the `subtype=xml` parameter inside the query string during rendering.

### Managing alternative rendering and file conversions

1. Use a JSP component and set the response type directly in the JSP writer if content does not require pre-rendering.
2. Verify if an XSL file uploaded to a file resource component is incorrectly returning as a plain text file instead of an XML object.
3. Define a custom function within an HTML element to convert the text response into a valid XML object using the following code:

    ```js
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
    - [Web Content Manager JSP tags](../../../manage_content/wcm_development/wcm_dev_api/wcm_reference_wcm-jsp-tags.md)
