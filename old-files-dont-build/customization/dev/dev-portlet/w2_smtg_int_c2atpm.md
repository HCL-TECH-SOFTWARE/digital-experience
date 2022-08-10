# Integrating click-to-action targets with the person menu

Target actions for live text based click-to-action can also integrate with the person menus that are generated for hCard microformats found in the page markup.

Target actions that you want to be displayed in a person menu need to declare the special type name as follows:

```
http://www.ibm.com/xmlns/prod/websphere/portal/v6.1/livetext#hcard
```

Unlike normal click-to-action sources, the person data that is available in the person menu is complex structured information. Therefore the value of the variable `window.ibm.portal.c2a.event.value` is not a string, but a JavaScript object with multiple nested properties that represent available information about the person. Refer to the person tag documentation about available attributes. The value that is passed in a target input field annotated with `c2a:action-param` is a string representation of this object in JavaScript Object Notation \(JSON\) format.

If you want target actions to receive only individual fields of the person record, you can indicate this by appending the field selector to the type name. For example, a target action that is declared with the following type name will receive only the `email.internet` nested property of the person record.

```
http://www.ibm.com/xmlns/prod/websphere/portal/v6.1/livetext#hcard.email.internet
```

If the specified field is not available for a given source, then the target action is not displayed in the person menu.

**Parent topic:**[Live text for click-to-action](../dev-portlet/w2_smtg.md)

