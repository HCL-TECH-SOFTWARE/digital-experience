---
title: Generate Unique Namespace IDs
---

# Add tokens to generate unique namespace IDs when applications are pushed or imported to a Script Application

Associating JavaScript variable names and HTML IDs with a unique portlet namespace prevents applications from colliding with each other and uniquely identifies HTML element ID values and JavaScript variables. To use a unique portlet namespace, you can prefix or suffix any imported JavaScript, HTML, CSS, or JSON variable or ID with the token \_\_SPNS\_\_. The Script Application replaces the \_\_SPNS\_\_ token with the Web Content Manager ScriptPortletNamespace plug-in markup when a script application is pushed or imported from the developer client to the server. The Web Content Manager ScriptPortletNamespace plug-in markup generates the unique namespace for the application when it is rendered.

When you use the `__SPNS__` token as a placeholder for the namespace in the external application representation, you can locally test applications that do not otherwise rely on HCL DX and portlet artifacts and markup.

In the following example, the `__SPNS__` token represents a pattern that is replaced by the Script Application namespace plug-in markup when the application is pushed or imported to a Script Application from a local file system.

```
$(function() {
      $(app_js1).html("<div>hi from app_js1 with namespace: \_\_SPNS\_\_</div>");
      var myVar\_\_SPNS\_\_ = '\_\_SPNS\_\_';
      alert("Namespace: " + myVar\_\_SPNS\_\_);
  });
```

When the application is stored as a Web Content Manager content item, that pattern is replaced with the Script Application Namespace plug-in markup `[Plugin:ScriptPortletNamespace]`. The following example shows the markup.

```
$(function() {
          $(app_js1).html("<div>hi from app_js1 with namespace: 
             [Plugin:ScriptPortletNamespace]</div>");
          var myVar[Plugin:ScriptPortletNamespace] = '[Plugin:ScriptPortletNamespace]';
          alert("Namespace: " + myVar[Plugin:ScriptPortletNamespace]);
    });
```

When the application is rendered, the Script Application Namespace plug-in replaces the plug-in markup with unique portlet namespace IDs. The following example shows the unique portlet namespace IDs:

```
 $(function() {
      $(app_js1).html("<div>hi from app_js1 with namespace: 
         ns_Z7_4HD81440LG4710AAJ7HDH910L2_</div>");
      var myVarns_Z7_4HD81440LG4710AAJ7HDH910L2_ = 'ns_Z7_4HD81440LG4710AAJ7HDH910L2_';
      alert("Namespace: " + myVarns_Z7_4HD81440LG4710AAJ7HDH910L2_);
  });
```

When you export the application to a compressed file, the Script Application Namespace plug-in markup replaces the `__SPNS__` token again so the application can be tested outside of the HCL DX environment.


