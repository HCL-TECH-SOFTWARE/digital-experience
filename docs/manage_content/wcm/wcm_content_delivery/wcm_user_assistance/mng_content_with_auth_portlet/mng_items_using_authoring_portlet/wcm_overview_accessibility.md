---
id: wcm_overview_accessibility
title: Authoring portlet accessibility features
---




Accessibility features help a user who has a physical disability, such as restricted mobility or limited vision, to use software products successfully.

The HCL Web Content Manager authoring portlet supports the following accessibility features:

-   **Screen-reader software and a digital speech synthesizer:**

    You can use these tools to hear what is displayed on the screen.

-   **Browser accessibility features:**

    The accessibility features of supported browsers \(large fonts, high contrast colors\) are supported in the authoring portlet.


**Note:** The best accessibility experience is achieved with Firefox 3.5.x or higher.

## Accessibility features of the default rich text editor

You access the accessibility features of the default rich text editor by typing **control-shift-m**. This command opens the detached accessible toolbar. You then use the following keystrokes:

-   **Control-shift-t**

    This command opens the table insertion dialog. Select the point at which to create the table in the edit window, and then open the table insertion dialog. You use the tab button to browse through the data entry fields that are used to define the table. Click **OK** to insert the table or click **Cancel** to cancel the action.

-   **Control-shift-g**

    This command opens the color picker dialog. Select some text in the edit window, and then open the color picker. Users can use the tab key to browse through the color swatches. The selected color name and value are displayed in the text area. Click **Enter** to apply the color to the selected text or click **Cancel** to cancel the action.


The detached accessible toolbar can be closed by using the **alt-F4** keystroke.

**Note:** **Control-shift-t** and **Control-shift-g** do not work when the focus is on the detached accessible toolbar. Click **Alt+Tab** to set the focus back to the browser that contains the authoring portlet where the focus is within the rich text editor area.

You can customize the detached accessible toolbar keystrokes by editing the KeySequence.properties file that is located under the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\PortalServer\config\com\ibm\wps\odc\editors` folder.

**Note:** These features apply only to the default rich text editor. See the documentation of other rich text editors for details on any accessibility features used by those editors.

## How to use JAWS with rich text fields

JAWS users need to install the Java Access Bridge to be able to read the content of Java applet rich text fields. Otherwise, the JAWS reader identifies only rich text fields as an RTE frame and not read the content of the rich text field.

**Note:** This step is not required for the default rich text editor, which is not a Java applet rich text editor.

## Writing accessible web content

The Web Content Manager application does not check whether content written in Web Content Manager is accessible or not. You need to test your website to ensure that the content is accessible.

