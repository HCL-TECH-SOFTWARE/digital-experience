# How to retrieve the language requested by the browser with `request.getHeader`

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

`request.getHeader` is not reliably returning the language requested by the browser.

Portal provides sophisticated locale and language computation and uses a set of request wrappers to provide this and other information to the user components. 

## Instructions

At least one request wrapper returns a modified Accept-Language header.

To get the header value of the original client request, you can unwrap the request object first, for example:

```java
HttpServletRequest unwrapped = request;

while(unwrapped instanceof HttpServletRequestWrapper) {
   unwrapped = (HttpServletRequest) ((HttpServletRequestWrapper)unwrapped).getRequest();
   System.out.println(unwrapped.getHeader("Accept-Language"));
}
```

It might be possible that the following method call returning the language set in the User's Profile instead of the language submitted by the browser:

`request.getHeader("Accept-Language")`  