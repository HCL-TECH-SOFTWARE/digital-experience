# Page layout

You will use HTML to define the layout of a presentation template in the same way you use HTML to define the layout of a web page.

This is an example of a possible layout of a presentation template. Although it is recommended that HTML elements \(such as tables\) be used to specify the exact layout of a presentation template, it is not mandatory to use the same. You can define the layout of your page the way you want.

When the layout of a page is defined, all you need to do is reference different components into the different sections of your HTML table. \(You can reference more that one component within a single table cell.\)

You can also enter text and HTML tags directly into a presentation template. This method is useful if you have an element that needs to appear on all pages that use a common presentation template. However, if that element is used on other presentation templates, it would be more efficient to save it as a component.

## Example

This is an example of the HTML you might enter in a presentation template to set the layout of a presentation template.

![Presentation template layout example showing the regions of the page including header, pre-body, body, post-body, left pane, right pane, and footer.](../images/WCM_6.jpg)

```
<html>
<head></head>
<body>
<table width="100%" border="0" 
cellspacing="0">
<tr><td colspan="3"></td></tr>
<tr><tdrowspan="3"></td><td></td><td 
rowspan="3"></td></tr>
<tr><td></td></tr>
<tr><td></td></tr>
<tr><tdcolspan="3"></td></tr>
</table>
</body>
</html>
```

Text and HCL Web Content Manager tags are then added to the different table cells to create the finished web page.

## Enabling Connect tags

Connect tags are advanced Web Content Manager tags that can be used to retrieve data from external sources and apply custom caching. **Process connect tags** must be selected in a presentation template form for connect tags to be processed.


**Related information**  


[Inserting an image in an element](../panel_help/wcm_dev_elements_insert_image.md)

[Inserting a link in an element](../panel_help/wcm_dev_elements_insert_link.md)

[Inserting element tags](../panel_help/wcm_dev_elements_insert_tags.md)

[Creating web content tags](../panel_help/wcm_dev_referencing_tags.md)

