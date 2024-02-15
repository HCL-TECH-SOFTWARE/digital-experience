# Device class support in a migrated theme

You can use the new device classes and equation support to modify your themes from previous versions so they are more efficient.

With the two new features, you can remove or modify certain aspects of a prior theme that you migrated. These changes are optional, but these new features are more powerful and simpler to use.

This version of Portal supports `ios`, `android`, `blackberry`, and `worklight` in addition to the `smartphone` and `tablet` themes it already supports. You can also use equation support to combine individual device classes to check for multiple client conditions.

For example, if you were manually integrating with MobileFirst® in a previous version, and manually created some combination device classes, such as `smartphone-ios`, `tablet-ios`, `smartphone-android`, `tablet-android`, your combination device classes are no longer needed. The individual device classes can be combined in equations, such as `smartphone+ios`, `tablet+ios`. If you had a combination device class such as `hires-tablet-ios`, you can change to define the singular `hires` device class. Then, use equations to combine with the other default singular device classes, such as `hires+tablet+ios`. In these equations, use `+` for AND, `/` for OR, `!` for NOT and parentheses to group items together. For more information, see *Device Class Equations*.

In your .jsp logic, for example, you can change the previous version syntax with `<c:if>` against `deviceClass`. Here is an example of code from a previous version:

```
<c:set var="deviceClass" scope="request" value="${wp.clientProfile['DeviceClass']}" />
<c:set var="isMobile" scope="request" value="${deviceClass == 'tablet' || deviceClass == 'smartphone'}" />
<c:if test="${isMobile}">
...
</c:if>
```

You can change that to a new equation syntax with `<portal-logic:if>` with the new deviceClass parameter. For example:

```
<portal-logic:if deviceClass="tablet/smartphone">
...
</portal-logic:if>
```

You can now use device class equations in module subcontributions in theme contributions .json files. For example:

```
}, {
					"value":"/css/my_css_smartphone_ios.css",
					"type":"smartphone+ios"
				}, {
```

Dynamic content spots in theme templates can now also be varied entirely with device class equations. For example:

```
mvc:res:/hello.jsp,smartphone+ios@res:/hello_smartphone_ios.jsp,(smartphone/tablet)+android@res:/hello_mobile_android.jsp
```

In this example, you can use `res:/hello.jsp` as the default URI, `res:/hello_smartphone_ios.jsp` as the URI for iOS smartphones, and `res:/hello_mobile_android.jsp` as the URI for Android smartphones and tablets.


