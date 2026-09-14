# How to retrieve the language requested by the browser

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

Java method **request.getHeader** is not reliably returning the language requested by the browser.
HCL DX provides sophisticated locale and language computation and uses a set of request wrappers to provide this and other information to the user components.  

## Instructions

???+ info "DISCLAIMER OF WARRANTIES"  
    The following enclosed code is sample code created by HCL Corporation. This sample code is provided to you solely for the purpose of assisting you in the development of your applications. The code is provided "AS IS", without warranty of any kind. HCL shall not be liable for any damages arising out of your use of the sample code, even if they have been advised of the possibility of such damages.

At least one request wrapper returns a modified **Accept-Language** header.

To get the header value of the original client request, you can unwrap the request object first, for example:

```java
HttpServletRequest unwrapped = request;

while(unwrapped instanceof HttpServletRequestWrapper) {
    unwrapped = (HttpServletRequest) ((HttpServletRequestWrapper)unwrapped).getRequest();
    System.out.println(unwrapped.getHeader("Accept-Language"));
}
```

It might be possible that the following method call returning the language set in the user's profile instead of the language submitted by the browser:

`request.getHeader("Accept-Language")`
