# How to use stylesheets in items

Stylesheets can be used to format the design of HCL Web Content Manager pages in the same way as normal web pages.

## Creating and referencing stylesheet elements

Stylesheet elements can be stored only in stylesheet components.

To link a stylesheet component to a specific authoring template, you must select a stylesheet component as the default stylesheet in an authoring template.

To link a stylesheet component to a specific site area or content item, you must add a component reference element to a site area or content item and select a stylesheet component.

## Referencing a stylesheet element in a presentation template

Stylesheet elements are referenced in the "header" section of a presentation template by using either a style element tag or component tag.

|Details|Code example|
|-------|------------|
|To use the stylesheet that is specified in the authoring template of the current content item, you must use a `<styleElement>` tag.

|```
<HTML>
<HEAD>
<styleElement source="template"/>
</HEAD>
<BODY></BODY>
</HTML>

```

|
|To use the stylesheet that is selected in a component reference element that is stored in either the current site area or content item, you must use a `<styleElement>` tag.

|```
<HTML>
<HEAD>
<styleElement source="path" name="component 
reference name"/>
</HEAD>
<BODY></BODY>
</HTML>

```

|
|To use a specific stylesheet, you must use a `<component>` tag.

|```
<HTML>
<HEAD>
<component name="stylesheet 
component name"/>
</HEAD>
<BODY></BODY>
</HTML>

```

|

When rendered in web content, references to stylesheet components are rendered as external stylesheet links:

```
<HTML>
<HEAD>
<link href="stylesheet" media="media-type" rel="styleheet-type" type="text">
</HEAD>
<BODY></BODY>
</HTML>

```

## How to use styles in HTML tags

Styles that are used in HTML are stored in presentation templates and element designs in the same way as normal HTML. The style must exist in the stylesheet that is referenced in the presentation template that is used to render the HTML.

For example, to add a class that is called "`wcm`" to a heading tag:

```
<H1 class="wcm">Heading</H1> 
```

## How to use styles in web content tags

Stylesheets can be used to format the style of content that is retrieved by using Web Content Manager tags. The style must exist in the stylesheet that is referenced in the presentation template that is used to render the Web Content Manager tag.

For example, to format the links in a menu by using a stylesheet class called "`wcm`", the following placeholder tag would be used:

```
<a href="<placeholder tag="href" />" class="wcm"><placeholder tag="name" /></a>
```


