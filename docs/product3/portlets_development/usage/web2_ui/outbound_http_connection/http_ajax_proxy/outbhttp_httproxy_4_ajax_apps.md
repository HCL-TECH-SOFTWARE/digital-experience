# HTTP proxy for Ajax applications, also known as Ajax Proxy

One of the basic technologies that emerged in the context of the next generation web user interface is Ajax \(Asynchronous JavaScript and XML\). Using Ajax can increase the responsiveness and usability of your web applications.

Ajax enables web pages to load data or markup fragments from a server by using asynchronous requests. These requests are processed in the background. Therefore, they do not interfere with the web page that is displayed in the browser. When you use Ajax, your web application exchanges only small amounts of data between the server and the client. Therefore, it refreshes only small parts of the markup. Therefore, Ajax is also useful for developing portlets and for building mashups, that is, aggregating content from various different sources into a uniform user experience. For example, such content can consist of RSS or Atom feeds or other data that is retrieved from external REST services.

To prevent cross-site scripting attacks in such web applications, browsers introduced the so called same-origin policy. This policy prevents client side scripts, in particular JavaScript, from loading content from an origin that has a different protocol, domain name, or port. To overcome this restriction, some browser vendors offer solutions that are based on signed scripts. However, using a signed script does not mean that a script can be trusted. Another disadvantage of these browser-specific solutions is that they rely on the user to configure the browser accordingly.

The solution that HCL Digital Experience offers is based on a server-side HTTP proxy. This proxy is named the HTTP Proxy for Ajax Applications, or also known as the Ajax Proxy. The underlying security model allows administrators to restrict access to trusted origins in a flexible way. The Ajax Proxy can be used for developing themes, skins, static pages, or portlets. The following sections explain how to use and configure the Ajax proxy.

-   **[The programming model for using the AJAX proxy](../dev-portlet/ajax_proxy_prgrmdl.md)**  
View information on using the proxy when programming portlets.

**Parent topic:**[Outbound HTTP connection](../dev-portlet/outbound_http.md)

