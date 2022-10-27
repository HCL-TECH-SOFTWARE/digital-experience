# List presentation override

You can override the list presentation that is used to render any list by setting the request parameter or request attribute `ListPresentationId` to set the ID, or `ListPresentation` to set the name path.

To override a list presentation by setting the request attribute, open the presentation template or component design where you want to add the list:

1.  Click **Insert Tag**.
2.  Select **Plugin Component**.
3.  Select **Rendering State**.
4.  Select **Request Attribute Plug-in**.
5.  Click **OK**.

For example: An item has a component reference element that refers to a list presentation component called "list presentation". It also has a component reference element that refers to a list component (such as a menu, navigator, search, or personalization component) named "list". You can edit the tag with the details of the list presentation to override and pair it with a matching element tag.

To set the ID, you might use this example:

```
[Plugin:RequestAttribute key="ListPresentationId" compute="once" value="[Element context='...' type='...' key='list presentation' format='id']"]
[Element context="..." type="..." key="list"] 
[Plugin:RequestAttribute key="ListPresentationId" mode="delete"]
```

To set the path, you might use this example:

```
[Plugin:RequestAttribute key="ListPresentation" compute="once" value="[Element context='...' type='...' key='list presentation' format='namepath']"]
[Element context="..." type="..." key="list"]
[Plugin:RequestAttribute key="ListPresentation" mode="delete"]
```

