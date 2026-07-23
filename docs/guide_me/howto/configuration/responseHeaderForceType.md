# How to modify the response header with `ForceType` when using HCL DX with the IBM HTTP server

## Applies to

> HCL Digital Experience 9.5 and higher

## Introduction

You might use HCL Digital Experience (DX) with the IBM HTTP server as a frontend. In this configuration, you might need to force the IBM HTTP server to modify the response header. For example, you might need to change the response header to ensure PDF files download correctly.  

## Instructions

### Modifying headers for local files

If the IBM HTTP server serves the PDF file locally, use the `<FilesMatch>` directive. This configuration forces the PDF to download as expected.

```
<FilesMatch "\.(?i:pdf)$">
ForceType application/octet-stream
Header set Content-Disposition attachment
</FilesMatch>
```

### Modifying headers for backend files

If a backend IBM WebSphere Application server (DX server) serves the PDF, the `<FilesMatch>` directive does not apply.  

```
<LocationMatch "\.(?i:pdf)$">
ForceType application/octet-stream
Header set Content-Disposition attachment
</LocationMatch>
```

!!! note
    This configuration requires the URL to include the PDF filename as location stanzas only match against URL strings. For example: `http://sitename/mycontent/was/my.pdf`