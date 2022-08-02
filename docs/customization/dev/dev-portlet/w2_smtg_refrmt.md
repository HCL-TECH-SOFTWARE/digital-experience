# Live text formats

Application of live text elements to sources and targets is based on special HTML classes that are attached to elements of the HTML markup.

**Note:** The class attribute can be attached to any HTML element and that it can have multiple values, which are separated by spaces. Therefore, you can annotate any HTML element in your output with a click-to-action class, even if it has already a class attribute for CSS formatting.

Sources for Live text are span \(`<span>`\) or division \(`<div>`\) elements that are annotated with a `c2a:source` class. Targets are HTML form \(`<form>`\) elements that are annotated with a `c2a:target` class. Both sources and targets have mandatory and optional properties. These properties are provided by annotated subelements of the main source or target tag. The property value is the entire content of the annotated property element with leading and trailing white spaces removed Example:

```
<b class="c2a:value">
    johndoe@cntserv_exmp.com
</b>
```

represents a `c2a:value` property with the value `johndoe@acme.com`. In many cases some of the source or target content is only relevant for the click-to-action framework but not for the user. In such cases, you might want to hide that part of the source or target content from rendering. To do this action, use the HTML attribute `style="display:none"`.

## Source tag

The source tag must be an HTML span \(`<span>`\) or division \(`<div>`\) elements that are annotated with a `c2a:source` class. The properties of a source tag are as follows:

|Property|Content|Mandatory|
|--------|-------|---------|
|`c2a:typename`|Namespaced type name that describes the format and semantics of the data that is provided.|Yes|
|`c2a:value`|Actual data that is passed to the target operation.|Yes|
|`c2a:anchor`|Optional anchor point that you can use for displaying the **Click-to-action** hover menu. If you do not specify this property, the content of the property `c2a:value` is used as the default.|No|
|`c2a:display`|Markup that is inserted as a header into the menu that is generated for the source.|No|

When the portal finds one or more matching targets for a source tag, the `c2a:anchor` subelement is marked as an active click-to-action source. And hovering over the element displays a click-to-action menu trigger. You can control the way that source anchors are displayed in the browser by the CSS file `styles.css` that is located under the directory c:`\IBM\WebSphere\PortalServer\ui\wp.tagging.liveobject\semTagEar\Live_Object\Framework.ear\Live_Object_Framework.war\ui`. The decoration for elements that offer a hover menu is defined by the following styles by default:

```
.hasHover { border-bottom: 1px dotted #306bc4; }
img.hasHover { padding:1px; border:1px dotted #306bc4; }

```

The value of the property `c2a:typename` is used to match sources to targets. This value can have an XML namespace associated to avoid unintended type name clashes. As plain HTML does not support the use of standard XML namespaces and namespace prefixes, a namespaced name is represented as `namespaceURI#localPart`.

Source tag example:

```
<div class="c2a:source someotherclass">
    <span class="c2a:typename" 
          style="display:none">http://www.ibm.com/xmlns/prod/datatype#email822</span>
    <p>some content that is not relevant to click-to-action, also to make clear 
       that property elements do not have to be direct children
        <b class="c2a:value">johndoe@cntserv_exmp.com</b>
    </p>
    <img class="c2a:anchor" src="c2aHoverTrigger.jpg" />
    <p class="c2a:display" style="display:none;">             
        <b><c>This is a sample click-to-action source</c></b><br>           
        <b><c>You can add an optional header to your action menu</c></b>
  </p> 
</div>

```

## Target tag

The target tag must be an HTML form \(`<form>`\) that is annotated with a `c2a:target` class. The properties of a target tag are as follows:

|Property|Content|Mandatory|
|--------|-------|---------|
|`c2a:typename`|Namespaced type name that describes the format and semantics of the data that is expected.|Yes|
|`c2a:action-label`|The string that you want to be displayed for the operation in the click-to-action menu.|Yes|
|`c2a:action-param`|This property must be an HTML input \(`<input>`\) element, designates the place where the data is passed.|No|

When the portal finds one or more matching targets for a source tag, the `c2a:anchor` subelement is marked as an active click-to-action source. And hovering over the element displays a click-to-action menu trigger. You can control the way that source anchors are displayed in the browser by the CSS file `styles.css` that is located under the directory c:`\IBM\WebSphere\PortalServer\ui\wp.tagging.liveobject\semTagEar\Live_Object\Framework.ear\Live_Object_Framework.war\ui`. The decoration for elements that offer a hover menu is defined by the following styles by default:

```
.hasHover { border-bottom: 1px dotted #306bc4; }
img.hasHover { padding:1px; border:1px dotted #306bc4; }

```

When a target is selected from a click-to-action menu, the corresponding HTML form is processed as if a user submitted it. The input field that was annotated as `c2a:action-param` is filled with the source data. Then, JavaScript `onsubmit` handlers are started, and finally the portal sends the form to its target URL. The target URL must point to the server-side target for click-to-action. If you want to implement a client-side click-to-action handler, use an `onsubmit` handler on the form. The JavaScript handler can retrieve the form and the input value from the page Document Object Model \(DOM\). But for convenience, the source data is also passed in the global variable `window.ibm.portal.c2a.event.value`.

Target tag example for a server-side handler:

```
<FORM class="c2a:target" action="/myapp/do.something">
    <span class="c2a:typename"> http://www.ibm.com/xmlns/prod/datatype#email822</span>
    <p class="c2a:action-label">Show inbox</p> 
       Email: <input type="text" class="c2a:action-param" name="someInputName"> 
    <input type="submit">
</FORM>

```

Target tag example for a client-side handler:

```
<FORM class="c2a:target" onsubmit="doSomething(this);return false" 
      action="javascript:void(0)" style="display:none"> 
    <span class="c2a:typename"> http://www.ibm.com/xmlns/prod/datatype#email822</span>
    <p class="c2a:action-label">Show inbox</p> 
    <input type="text" class="c2a:action-param" name="someInputName">
</FORM>
```

**Parent topic:**[Live text for click-to-action](../dev-portlet/w2_smtg.md)

