# Page style 

You use HTML to define the default properties of a presentation template in the same way you use HTML to define the default properties of a web page.

Any valid HTML property can be set including:

-   Margin sizes
-   Text colors
-   Background colors or images

## Example

This is an example of the HTML you might enter in a presentation template to set default properties for a presentation template.

```
<html>
<head></head>
<body bgcolor="#CC0000" text="#000000" link="#6666FF" 
vlink="#9999FF" alink="#FF33CC"leftmargin="5" topmargin="5">
</body>
</html>
```

**Note:** If the same page properties are used in more than one presentation template, they can be stored in a single text component that is itself referenced within the presentation template:

```
<body <component name="TextComponentName"/>>
```

This means that by editing a single text component, the page properties of multiple presentation templates can quickly be updated.

## Cascading stylesheets

Default style properties cannot be set for components. The default page properties override any page properties set in a component.

Cascading stylesheets can be used to control the style of components. For example, You might make the links in a menu a different color to the links in a navigator by using cascading stylesheets to determine the style of different components.

**Note:** Where possible, use one cascading stylesheet for an entire site. A link to the stylesheet can be used, rather than embedding the stylesheet.

**Parent topic:**[Presentation templates ](../wcm/wcm_cms_presentation_templates.md)

