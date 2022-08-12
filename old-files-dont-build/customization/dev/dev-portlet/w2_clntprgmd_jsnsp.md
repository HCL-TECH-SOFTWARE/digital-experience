# JavaScript namespacing - observing good practice

The client side context of Web programming requires good namespacing.

When using the client side programming model for your portlets you need to apply good namespacing practices in JavaScript. This helps to avoid collisions in the page which can be timely and expensive to track down. The namespace need must be balanced with the performance advantage of moving all JavaScript into external JavaScript files that can be cached. An additional benefit is that this makes portlet JSPs much smaller. Refer to the following code sample of writing JavaScript for a portlet by the client side programming model:

```
htmlEditor.js:

if ( typeof( HTMLEditorController ) == "undefined" ) {
     var HTMLEditorController = function( namespace ) {
          this._namespace = namespace;
          this.getSaveForm = function () {
               return document.forms[ namespace + "saveForm" ]
          }
     }
}

htmlEditor.jsp:

var <%=namespace%>htmlController = new HTMLEditorController( "<%=namespace%>" );

```

**Parent topic:**[The client side portlet programming model](../dev-portlet/w2_clntprgmdl.md)

