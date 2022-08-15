# Setting dynamic Digital Data Connector filter values

Digital Data Connector \(DDC\) for HCL Portal defines a dedicated public render parameter that can be used by DDC plug-ins for filtering lists.

You can set the value of the DDC filter public render parameter by submitting an HTML form that addresses the URI `ddc:filter` by using an HTTP get method. You can create the HTML form by using HCL Web Content Manager design components. The following HTML fragment shows a simple search form:

```
<form action="." method="get">
   <input type="hidden" name="uri" value="ddc:filter" />
   <input type="hidden" name="prefix" value="<your DDC filter prefix>" />
   <input type="hidden" name="action" value="set" />
   <input name="value" type="text" value="Enter keywords" title="Search keywords" />
   <input type="submit" value="Submit" name="submitButton" /> 
</form>
```

When you define such HTML form, take care of the following aspects:

-   Set the form action attribute to a period \(`.`\) and the form method attribute to `get`.
-   Add a form parameter with the name `uri` and set it to the value `ddc:filter`.
-   Add a form with the name `filter` and specify the filter value prefix that is recognized by the target DDC plug-in. Using such a prefix enables individual DDC plug-ins to track their filter parameters if multiple plug-ins are active on the same portal page. To determine the appropriate prefix value, read the documentation of the DDC plug-in that you use.
-   Add a form parameter with the name `action` and specify the action that you want to be completed. To set the value, specify `set`. To remove the value, specify `remove`.
-   Add a form parameter with the name `value` to specify the filter value that you want to be set. With the `remove` action, this parameter is ignored.

After the user submits this form, the DDC filter public render parameter is updated in the user's rendering state, and the portal now renders the page in its new state. The parameter value that is set is concatenated from the values of the `prefix` parameter and of the `value` parameter. You can access the full concatenated value in your Web Content Manager design components by using the `RenderParam` plug-in. To access the value for a specific prefix, you can use the `ListRenderingContext` plug-in with the action attribute set to `getFilter`.

DDC plug-ins can evaluate the active filter parameter value by using the `com.ibm.portal.wcm.plr.ListRenderState` interface that is defined by the public Digital Data Connector API.

**Parent topic:**[Implementing user interactions](../social/plrf_impl_user_interactns.md)

