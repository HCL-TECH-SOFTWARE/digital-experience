# Customizing loading markup for asynchronous web content rendering

To adjust the loading markup to the user experience, you can customize it. For example, you can use a company-specific loading icon or text.

To do so, use the following instructions.

1.  Create an HCL Web Content Manager HTML component in a Web Content Manager library.

    The body of this newly created Web Content Manager HTML component serves as the custom loader markup and is delivered by the Web Content Viewer portlet.

2.  To notify the portlet to use a custom markup rather than the default content, set the page parameter `wcm.custom.asynchronous.rendering.loader`. As the value, specify the path to the HTML component. All Web Content Viewer portlets on that page then use the custom markup from the HTML component.

3.  To address the configured web content, create the JSR 286 compliant Resource URL. To do so, use the `PortletResourceURL` rendering plug-in.

    This resource URL triggers the `serveResource` method of the Web Content Viewer portlet and returns the rendered web content.

4.  Use this markup to update the HTML document object model.

    The `PortletResourceURL` supports the attributes that you can use with resource URLs, such as the resource identifier`id` or `cacheability`. For the custom asynchronous web content rendering scenario, you do not need to define any attributes. As more than one instance of this custom loading markup on a page is possible, use the `namespace` attribute of the portlet rendering plug-in to create unique identifiers.


The following content is an example of a custom loader markup:

```
<div>
   <a href="[Plugin:PortletResourceURL]" id="[Plugin:Portlet key="namespace"]customAsyncRenderingHook"></a>
   <div style="width: 100%; text-align: center; padding-top: 5em;">
      <span>Loading web content...</span>
   </div>
</div>

<script type="text/javascript">
(function() {
   var hook = document.getElementById("[Plugin:Portlet key="namespace"]customAsyncRenderingHook");
   var xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function() {
      if (xhr.readyState==this.DONE) {
         if (xhr.status==200) {
            hook.parentNode.innerHTML = xhr.responseText;
         } else if (xhr.status==0) {
            // implement timeout handling here ...
         } else {
            // implement error handling here
         }
      }
   };

   xhr.open("GET", hook.href);
   xhr.timeout = 5000;
   xhr.ontimeout = function() { console.error('Asynchronous rendering timed out.'); };
   xhr.send();
}());
</script>
```


