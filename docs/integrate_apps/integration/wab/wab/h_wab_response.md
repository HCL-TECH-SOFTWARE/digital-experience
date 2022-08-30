# Content provider policy requests and responses




Use the **Request** and **Response** tabs to define a fine-grained control over HTTP headers, HTTP cookies, and filters. Filters provide a programmatic control over content during the request and response phases of the interaction between HCL Digital Experience and the web application.

## Headers

Specify the allowed \(propagated\) or blocked headers in the requests and responses to and from the content provider. By default, the Web Application Bridge propagates all the client-side headers. The client-side headers are present in the request that is received from the browser. The Web Application Bridge does not propagate headers that are listed in the block field.

Click **Insert Header** to add custom headers. The custom headers are useful for the following scenarios:

-   To add more headers that are not there in the request from the browser
-   To add more headers that are not there in the request from the content provider
-   To use single sign-on
-   To send more information

If you add a custom header with the same name as an existing header, the custom header overrides the existing header.

## Cookies

Specify the allowed or blocked cookies in the request from the browser or the response from the content provider. By default, the Web Application Bridge blocks all the client-side cookies from reaching the content provider. The client-side cookies are present in the request that is received from the browser. You need to specify the client-side cookies that need to be propagated by selecting **Block all, except** in the **Cookies** section of the **Request** tab and specifying individual cookies.

Click **Insert Cookies** to add custom cookies. The custom cookies are useful for the following scenarios:

-   To add more cookies that are not there in the request from the browser
-   To add more cookies that are not there in the response from the content provider
-   To use single sign-on
-   To send more information

If you add a custom request cookie with the same name as an existing cookie, the custom cookie overrides the existing cookie. If you add a custom response cookie, the Web Application Bridge adds a Set-Cookie header. The Web Application Bridge uses the provided name and value in responses that are sent from the Reverse Proxy servlet to the browser.

## Filters

Filters are Java code that can be started on demand to run custom actions. They modify the request programmatically. Filters are extensions to the core feature. Use the servlet filter API to create custom filters. The filters manipulate the request or response from the portal to the content provider. Developers create the filters.

If you need to develop a filter, please contact the [HCL Service and Support Team](https://support.hcltechsw.com/csm?id=csm_index) as the APIs required to do so are currently being redesigned.

