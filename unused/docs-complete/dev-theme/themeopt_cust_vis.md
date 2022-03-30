# Changing menu item visibility 

Whether the menu items are visible is controlled in a layered way by client-side JavaScript and markup. The default value for visibility, if not specified, is Boolean true.

1.  In the menu feed from the server is a default value whether a menu item is visible. The client-side code controls whether a menu item is visible in the feed. If a menu item includes a visibilityFn member, that function is invoked client-side to control the visibility.

2.  Mark a menu item with a visibility boolean member, in the case where the server-side feed provider code has reached the conclusion that the menu item should not be visible to the client \( "visibility" : false \). The "visibility" : false member is added to the menu feed when a DynamicMenuitem references a plug-in whose isActive\(\) method returns false when invoked by the menu feed provider code. The isActive\(\) method on a plug-in can return false if, for example, the user does not currently have access control permissions sufficient to invoke the operation on the current page or portlet or other object, or if operation is inconsistent with the current state of the object \(if known\).


**Parent topic:**[Simple menu framework ](../dev-theme/themeopt_cust_menu.md)

