# Example HTML markup for defining a portal page

Use these code samples as examples of HTML markup to create a portal page.

The HTML markup that you use to create a portal page has a direct effect on how the page is rendered in the portal. This topic provides examples of the HTML markup that you can use in a source file to produce various types of content in a portal page.

You can include portlets in a static HTML file by using the class attribute `portlet-window` on a `<div>` or an `<object>` element:

-   Use a `<div>` element if the portlet is part of the `<body>` of the page.
-   Use the `<object>` element if the portlet is part of the `<head>` element of the page.

The marked up element is replaced by the dynamic content of the portlet when the page is rendered. Unless the portlet is embedded in a container, it cannot be moved or deleted by the page customizer or other portal mechanisms. To delete such a portlet, you need to replace the static page with an updated HTML file that does not contain the portlet. In addition to the class attribute `portlet-window`, a portlet `<div>` or `<object>` element needs to contain the following information:

The parser decodes HTML documents and treats the following tags specifically:

-   **Name attribute**

    This is the name of the portlet instance that is unique across the page. It is used to distinguish between different instances of the same type of portlet on the page. When a static page is updated, this instance name is used to determine if portlets need to be updated or deleted. This name is not the unique name in the portal.

-   **Style attribute**

    The style attribute identifies the portlet definition, that is the type of the portlet. The attribute needs to contain the portlet definition style. The value of the style contains the object ID or the unique name of the portlet definition.


Example:

```
<div class="portlet-window" name="instancename" 
     style="portlet-definition:definitionname"></div>
```

You can also parametrize portlet windows directly in the HTML document. These parameters are passed on as edit default preferences to the portlet instances at page creation or page update time. For a portlet included with a `<div>` element, the parameters consist of name-value pairs that are formatted by using an HTML definition list. Example:

```
<div class="portlet-window" name="<instancename>" 
     style="portlet-definition:<definitionname>">
   <dl>
      <dt>key1</dt>
      <dd>value1</dd>
      <dt>key2</dt>
      <dd>value2</dd>
   </dl>
</div>
```

For a portlet included by an `<object>` element, the parameters consist of name-value pairs that are formatted by using the `<param>` elements of the `<object>` element. Example:

```
<object class="portlet-window" name="<instancename\>" 
     style="portlet-definition:<definitionname\>"\>
   <param name="key1" value="value1"\>
	 <param name="key2" value="value2"\>
</object\>

```

Portlet containers contain portlet windows that can be rearranged or deleted by a page editor, for example, the page customizer. In addition you can add new portlet windows after the page has been deployed. The portlet windows that you define in the static page as the content of the container are the portlets that are initially part of the container. Containers cannot be nested.

Similar to portlet windows, containers are marked up by using the class attribute `portlet-container` on a `<div>` tag. In addition you need to specify the following:

-   **Name attribute**

    This is the name of the container that is unique across the page. This is not the unique name in the portal.


Example:

```
<div class="portlet-container" name="holdername">
   <div class="portlet-window" name="instancename" 
        style="portlet-definition:definitionname"></div>
</div>
```

## Rendering a page from full HTML markup

When you include the beginning `<html>` and ending `</html>` markup in the source file, the resulting portal page is rendered without the portal theme, or surrounding navigation frame. The user sees only the layout that you code inside the HTML file. An example of the HTML markup looks like this:

```
<html>
   <head>
      <title>Sample Static Page</title>
   </head>
   <body>
      <p>This is a static page example.</p>
      <p>Welcome portlet</p>
      <div class="portlet-container" name="portletContainer1">
         <div class="portlet-window" name="portletWindow1" 
              style="portlet-definition:wps.p.Welcome To WebSphere Portal">
         </div>
      </div>
   </body>
</html>
```

The values given for the name attributes must be unique in the scope of the page.

With this example, all information that the portal requires to render the page is well known at the time when you create and edit the static page.

## Rendering a page from an HTML fragment

When the HTML source file is a fragment of HTML markup, and does not include the opening or closing `<html>` markup, then the page is rendered inside the portal navigation frame. An example of this HTML coding:

```
<p>This page has one Welcome Portlet.</p>
<p>Welcome portlet</p>
<div class="portlet-container" name="portletContainer1">
   <div class="portlet-window" name="portletWindow1" 
        style="portlet-definition:wps.p.Welcome To WebSphere Portal">
   </div>
</div>
```

The values given for the name attributes must be unique in the scope of the page.

**Parent topic:**[Creating a static page](../dev/spa_define_page.md)

