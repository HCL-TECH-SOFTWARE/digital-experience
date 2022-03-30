# Modifying the HTML head section of a JSR 286 portlet 

To write into the HTML head section of your JSR 286 portlet, for example, to change a page title, use the `addProperty` method on the `PortletResponse`.

1.  Invoke the `addProperty` method to modify the HTML head section.

    -   `PortletReponse.addProperty(String key, org.w3c.dom.Element element)`
    **Note:** When modifying the HTML head section, you must invoke the `addProperty` method before the response headers are committed. This should occur no later than during the render headers sub phase of the render lifecycle phase.


Example:

```
protected void doHeaders(RenderRequest request, RenderResponse response)
{
	Element title = response.createElement("title");
        title.setTextContent("My Portal Page Title");
        response.addProperty(MimeResponse.MARKUP_HEAD_ELEMENT, title);	
}
```

If you add a script tag to the portlet head section, be sure to add text to the tag. If you do not add text, the script tag is not closed properly. Consider the following incorrect code sample from a `doHeader` :

```
   String url = "/sample.js";
   Element scriptElement = response.createElement(Tag.SCRIPT.toString());
   scriptElement.setAttribute(Attribute.TYPE.toString(), "text/javascript");
   scriptElement.setAttribute(Attribute.SRC.toString(), url);
   response.addProperty(MimeResponse.MARKUP_HEAD_ELEMENT, scriptElement);
```

This generates a script tag in the header like as follows:

```
<script src="/sample.js" type="text/javascript" />
```

This causes rendering problems in Mozilla FireFox and other browsers.

The code needs to call `setTextContent` with a non-empty string as given in the fifth line of the following code sample:

```
   String url = "/sample.js";
   Element scriptElement = response.createElement(Tag.SCRIPT.toString());
   scriptElement.setAttribute(Attribute.TYPE.toString(), "text/javascript");
   scriptElement.setAttribute(Attribute.SRC.toString(), url);
   scriptElement.setTextContent(" ");
   response.addProperty(MimeResponse.MARKUP_HEAD_ELEMENT, scriptElement);
```

This generates a properly closed script tag in the header as follows:

```
   <script src="/sample.js" type="text/javascript"> </script>
```

**Parent topic:**[Using two-phase rendering with JSR 286 portlets ](../dev-portlet/jsr2phase_overview.md)

