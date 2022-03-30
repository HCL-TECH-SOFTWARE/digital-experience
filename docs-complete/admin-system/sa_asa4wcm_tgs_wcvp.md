# Enabling default microformat support in Web Content Viewers

Web Content Viewers provide support for Active Site Analytics microformats by default. You can use this support to inject microformats into your content design or presentation templates.

The viewer supports the following microformat tags:

-   asa.wcm.content\_item.title
-   asa.wcm.content\_item.path

1.  Edit the portlet preferences for the Web Content Viewer, and set the value of the WCM\_ENABLE\_ASA\_TAGS preference to true. By default, the preference value is false.

    **Note:** The default viewer has the unique name of ibm.portal.Web.Content.Viewer.Jsr286.

    -   To use the administration user interface to set the preference for all instances of the viewer, complete these steps:
        1.  Click the **Administration menu** icon. Then, click **Portlet Management** \> **Portlets**..
        2.  Locate the Web Content Viewer from the list.
        3.  Click the **Configure portlet** icon, and set the preference value.
    -   To set the preference for all instances or only a single instance of the viewer, you can also use the XML configuration interface.

After you set the preference, the viewer automatically inserts the microformat tags into each piece of content that it renders.

**Parent topic:**[Instrumenting web content for Active Site Analytics](../admin-system/sa_asa4wcm.md)

