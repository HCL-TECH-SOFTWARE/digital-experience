# Public Render Parameters

The Public Render Parameter is an application object that provides read and write access to public render parameters.

Public render parameters allow portlets to share navigational state information and preserve this information across requests. Use this object in rules when you need your site to store a user's selection as a public render parameter during the action phase and have other portlets read this public render parameter during the render phase.

You can write public render parameters from preprocessors and portlets \(JSR 168, JSR 286, and legacy IBM portlets\) during the action phase. Render parameters are read from anywhere, including preprocessors, themes, dynamic assembly transformation, and portlets, during all phases.

Let's apply an example to this definition to highlight how you can use the public render parameters application object in rules that you create on your site. For example,

-   You select a travel destination from an airline website.
-   Your selection is saved by a portlet as a public render parameter during the action phase.
-   Portlets can read your destination during the render phase, and your destination is available in bookmarks that you create. For example, you have a portlet that provides ticket rates that are based on the destination selected.
-   A visibility rule that uses the Public Render Parameters application object displays content in the site that is based on your destination selection.

**Note:** You cannot write public render parameters from themes or from update rules.

Use the table to learn more about the Public Render application object

|Description|Public Render Parameter application object|
|-----------|------------------------------------------|
|Type of data stored|Strings and arrays of strings. Since these parameters are encoded in your portal URLs, it is recommended that you use string values that are not long in length.|
|Location of stored data|Public render parameters are encoded in all portal URLs.Public render parameters remain available when a user remains in the same browser tab or opens a new tab by using a link from the original tab.

|
|Duration of storage|Data is not connected to a user session. Data is available in the same browser tab, window, or bookmarks.|
|Supported user types|You can use this object for all users. For example, supported user types include authenticated users and anonymous users, with and without sessions|

**Note:** The Shared Data application object is also used in rules to share data between portal web applications. Use the Shared Data application object, instead of the Public Render Parameters application object, when you need to share complex data.

-   **[Create a visibility rule that uses travel destination](../contarget/targeting_render_example.md)**  
Learn how to create the Public Render Parameter application object by using a visibility rule for your HCL Digital Experience portal website.
-   **[Create a visibility rule that uses travel destination](../contarget/targeting_render_example.md)**  
Learn how to create the Public Render Parameter application object by using a visibility rule for your HCL Digital Experience portal website.

**Parent topic:**[Application object](../pzn/pzn_application_object.md)

