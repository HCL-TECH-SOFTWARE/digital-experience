# Changing portlet mode and window state on the client side

With the client-side programming model, you can handle portlet mode and window state changes entirely on the client, rather than requiring a full server-client roundtrip.

In client-side aggregation, you can provide an event handler for changes of portlet mode and portlet window state. This handler gets called when a mode change or a window state change is triggered.

**Note:** This function is only supported in the portal CSA theme and the CSA skin. You can adapt the CSA theme and skin to write your own custom themes and skins to support this feature.

The return value of your handler determines whether the default action is run:

-   A return value of true allows execution of the default action, in this case the portlet mode or window state change.
-   A return value of false cancels the default action.

This action allows the portlet to handle these changes entirely on the client, with no server interaction.

You define the change handlers as follows:

-   To define a portlet mode change handler, define a JavaScript function with the name `<portlet:namespace/>doPortletMode` in your portlet.
-   To define a portlet window state change handler, define a function with the name `<portlet:namespace/>doWindowState`.

The CSA skin checks whether such a function is defined before it processes any portlet mode or window state changes. The handler function provides two arguments:

-   The first argument is the required portlet mode or window state in string form.
-   The second argument is the markup element that must be used to insert a mode-specific markup. This argument is necessary to support the inline modes that you see in the CSA version of the IBM portal skin.

Refer to the following example:

```
<portlet:namespace/>doPortletMode( portletMode, div ){ 
   var retVal = true;
   if ( portletMode == ibm.portal.portlet.PortletMode.VIEW ) {
      //do view mode here
      div.innerHTML = "...some view mode markup...";
      retVal = false;
   }
   return retVal;
   }
```


