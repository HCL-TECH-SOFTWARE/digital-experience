# How to modify the response header with ForceType when using HCL DX with IBM HTTP Server

## Applies to

> HCL Digital Experience 9.5 and higher

## Introduction

You might use HCL Digital Experience (DX) with IBM HTTP Server as a frontend. In this configuration, you might need to force IBM HTTP Server to modify the response header. For example, you might need to change the response header to ensure PDF files download correctly.  

## Instructions

### Modifying headers for local files

If IBM HTTP Server serves the PDF file locally, use the `<FilesMatch>` directive. This configuration forces the PDF to download as expected.

```
<FilesMatch "\.(?i:pdf)$">
ForceType application/octet-stream
Header set Content-Disposition attachment
</FilesMatch>
```

### Modifying headers for backend files
If a backend IBM WebSphere Application Server (Digital Experience Server) serves the PDF, the <FilesMatch> directive does not apply.  

```
<LocationMatch "\.(?i:pdf)$">
ForceType application/octet-stream
Header set Content-Disposition attachment
</LocationMatch>
```

!!! note
    This configuration requires that the URL include the PDF filename, because location stanzas can match only against URL strings. For example: `http://sitename/mycontent/was/my.pdf`
