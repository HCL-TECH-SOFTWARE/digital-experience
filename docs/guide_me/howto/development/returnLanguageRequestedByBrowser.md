# How to retrieve the language requested by the browser

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

When retrieving user language preferences, the Java `request.getHeader` method might not return the language requested by the browser. HCL Digital Experience (DX) provides locale and language computation and uses request wrappers that can modify the information exposed to the user components. This article explains how to retrieve the language requested by the browser.

## Instructions

To retrieve the language requested by the browser, perform the following steps:

1. Check the value returned by `request.getHeader ("Accept-Language")`.
2. If the returned value does not match the language requested by the browser, unwrap the request object to access the original client request. For example:

    ???+ info "Disclaimer of warranties"  
    The following enclosed code is sample code created by HCL Corporation. This sample code is provided to you solely for the purpose of assisting you in the development of your applications. The code is provided "AS IS", without warranty of any kind. HCL shall not be liable for any damages arising out of your use of the sample code, even if they have been advised of the possibility of such damages.

    ```java
    HttpServletRequest unwrapped = request;

    while(unwrapped instanceof HttpServletRequestWrapper) {
        unwrapped = (HttpServletRequest) ((HttpServletRequestWrapper)unwrapped).getRequest();
        System.out.println(unwrapped.getHeader("Accept-Language"));
    }
    ```

3. Call `unwrapped.getHeader("Accept-Language")` to retrieve the original client header value.
