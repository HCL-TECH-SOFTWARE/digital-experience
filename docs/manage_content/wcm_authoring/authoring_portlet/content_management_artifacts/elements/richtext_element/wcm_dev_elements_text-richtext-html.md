# Text, rich text and HTML elements

You use the short text, text, rich text, and HTML elements to store blocks of text, but each has slightly different properties.

## Creating an element

Short text, text, rich text, and HTML elements can be added to site areas, content items, and authoring templates or they can be created as individual components.

## Short text element

A short text element is used to store small amounts of fixed-length text where the length is 250 bytes or less. Unlike the other text elements, short text elements can also be used as a search parameter in a Personalization rule.

## Text element

You use a text element to store larger amounts of text than can be stored in a short text element. No special processing occurs for this element.

## HTML element

An HTML element is used to store fragments of HTML that can be reused in presentation templates and other elements designs. You can enter HTML directly into the element or upload HTML from a previously created HTML file.

## Rich text element

A rich text element is similar to the HTML element except that it includes a rich text editor. The rich text editor can be used to format text that is stored within a rich text element. The main purpose of the rich text element is to provide base-level content creators with an easy-to-use text editor. Advanced users who are required to produce more advanced code, including web content tags, or who need to store fragments of HTML must use an HTML element instead.

You must use rich text elements sparingly in authoring templates, site areas, and content items as adding multiple rich text elements to these items can reduce authoring performance.

The rich text editors that are used by Web Content Manager are supplied by other vendors. For information on using the rich text editor, see the user documentation that is supplied by the specific rich text editor vendor.

## How to use web content tags in rich text and HTML elements

|Element type|Details|
|------------|-------|
|Short Text and Text elements|Web content tags cannot be used in short text and text elements.|
|HTML elements|Any combination of web content tags can be used in HTML elements with the following exceptions:<br><br>1.  You cannot use single quotation marks around attribute values.<br>-   `[Component name='example']`<br>-   `[Component name='example' start='<a href="' end=' ">link</a>']`<br>-   `[Component name='example' start='<img src="' end=' "/>']`<br>2.  You cannot use double quotation marks inside attribute values<br>-   `[Component name="example" start="<a href="" end="">link</a>"]`<br>-   `[Component name="example" start="<img src="" end=""/>"]`|
|Rich text elements|Basic Web Content Manager tags can be used in rich text elements. For example, the following tags can be used in Rich Text elements:<br><br>-   `[component name="test"]`<br>-   `[element type="content" context="current" key="body"]`<br><br>The following tag formats are invalid:<br><br>1.  The use of single quotation marks around attribute values.<br>-   `[Component name='example']`<br>-   `[Component name='example' start='<a href="' end=' ">link</a>']`<br>-   `[Component name='example' start='<img src="' end=' "/>']`<br>2.  The use of double quotation marks inside attribute values.<br>-   `[Component name="example" start="<a href="" end="">link</a>"]`<br>-   `[Component name="example" start="<img src="" end=""/>"]`<br>3.  Embedding tags inside other HTML tags.<br>-   `<a href='[Component name="example"]'>link</a>`<br>-   `<img src='[Component name="example"]'/>`|


???+ info "Related information" 
    -   [Setting service configuration properties](../../../../../../deployment/manage/config_portal_behavior/service_config_properties/index.md)

