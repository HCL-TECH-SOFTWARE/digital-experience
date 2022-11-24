---
id: wcm_dev_tags_start-end
title: Start and End Attributes
---

# Start and end attributes

The start and end attributes are used to wrap the data that is returned by an Web Content Manager tag within other tags, such as HTML. These attributes are not mandatory.

The main advantage to using start and end attributes are that the code you enter in the start and end attributes are only rendered when the component tag itself is rendered. For example, If a user does not have access to the content displayed by using a component tag, then neither the content nor the start and end code are displayed. This also applies when a component does not exist or does not contain any content.

## Example:

In this example, start and end attributes are used to display a set of text components in a bullet list. This might be entered in a presentation template.

```
<ul>
[component name="Component1" start="<li>" end="</li>" ]
[component name="Component2" start="<li>" end="</li>" ]
[component name="Component3" start="<li>" end="</li>" ]
[component name="Component4" start="<li>" end="</li>" ]
</ul>
```

The text components would look like this list when rendered:

-   Component 1
-   Component 2
-   Component 3
-   Component 4

If a user did not have access to component 3, the rendered list would look like this:

-   Component 1
-   Component 2
-   Component 4

In contrast, you could also add this code to a presentation template:

```
<ul>
<li>[component name="Component1" ]</li>
<li>[component name="Component2" ]</li>
<li>[component name="Component3" ]</li>
<li>[component name="Component4" ]</li>
</ul>
```

If a user did not have access to component 3, the rendered list would then look like this:

-   Component 1
-   Component 2
-   Component 4

Although the text component is not rendered, the bullet is still rendered.

