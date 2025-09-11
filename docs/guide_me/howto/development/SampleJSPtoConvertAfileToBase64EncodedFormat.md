# How to convert a file to base64 encoded format

## Applies to

> HCL Digital Experience 9.5 and higher

## Introduction

This document describes a sample JSP code that can be used to convert a file (for example an PNG image file) to base64 encoded format.

## Instructions

???+ info "DISCLAIMER OF WARRANTIES"  
    The following enclosed code is sample code created by HCL Corporation. This sample code is provided to you solely for the purpose of assisting you in the development of your applications. The code is provided "AS IS", without warranty of any kind. HCL shall not be liable for any damages arising out of your use of the sample code, even if they have been advised of the possibility of such damages.

```java
<%@page session="false" contentType="text/html" pageEncoding="ISO-8859-1" %>
<%@ page import="java.util.*" %>
<%@ page import="java.io.*" %>
<%@ page import="java.net.*" %>
<%@ page import="java.lang.*" %>
<%@ page import="java.util.*,javax.servlet.jsp.JspWriter,java.io.*" %>
<%@ page import="java.io.FileNotFoundException, java.io.IOException, java.io.InputStreamReader, java.util.ArrayList, java.util.Map, java.util.logging.Logger" %>
<br>

<H1>
    Convert image file to bytes for image upload
</H1>

<form action="convert.jsp" method="GET">
    Enter path to image file:<br><br>
<textarea rows="1" cols="100" name="path"></textarea>
<br>
<input type="submit">
</form>

</div>

<% String path = (String) request.getParameter("path");

if (path != null) {
    String trimpath = path.trim();
    out.println("Converting file: " + path);
    java.nio.file.Path mypath = java.nio.file.Paths.get(path);
    byte[] mydata = java.nio.file.Files.readAllBytes(mypath);
    String str = DatatypeConverter.printBase64Binary(mydata);
    out.println("<br>str = " + str);
}
```

Please also check the [Free Formater](https://www.freeformatter.com/base64-encoder.html){target="_blank"} web site to decode a base64 encoded stream.
