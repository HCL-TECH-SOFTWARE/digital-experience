# Adding a message module

You can add a message module that displays system messages, such as error, warning, or informational messages, at the beginning of the page.

1.  Add the `st_notice` property to your profile.

2.  Call the `newNotice()` function to display a message from your JavaScript. Enter a title and description, where title is the header of your message and description is the body of your message. If the body of your message is long, you can insert `<br>` elements so that the text wraps.


You can change the appearance of the message module by changing the CSS, which is in /modules/st\_notice/head/ in WebDAV.

**Parent topic:**[Understanding the Simple Theme](../dev-theme/themeopt_themedev_simpletheme.md)

