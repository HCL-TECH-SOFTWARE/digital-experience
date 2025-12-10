# How to modify the response header with ForceType when using HCL DX with IBM HTTP Server

## Applies to

> HCL Digital Experience 9.5 and higher

## Introduction

There might be situations in which HCL DX will be used along with IBM HTTP Server in front of the HCL DX environment. If you want to force  the IBM HTTP Server to modify the response header, there are settings that can be set on IBM HTTP-Server side to fulfill these requirements. For example, if the response-header of a PDF file request should be changed.  

## Instructions

Using the following will only work if the PDF file is being served locally by the IBM HTTP Server. This will force the PDF to download as expected.

```xml
<FilesMatch "\.(?i:pdf)$">
ForceType application/octet-stream
Header set Content-Disposition attachment
</FilesMatch>
```

If the PDF is being served from a backend IBM WebSphere Application Server (Digital Experience Server) instead, using FilesMatch is not applicable.  

In that case, you will need to force a specific content type in the HTTP Server or you can set a header for a WebSphere response. That can only be done using the Location Stanzas:  

```xml
<LocationMatch "\.(?i:pdf)$">
ForceType application/octet-stream
Header set Content-Disposition attachment
</LocationMatch>
```

!!!note
    This requires that the PDF file be called in the URL, since location stanza's can only match against URL strings:  
    e.g `http://sitename/mycontent/was/my.pdf`  
