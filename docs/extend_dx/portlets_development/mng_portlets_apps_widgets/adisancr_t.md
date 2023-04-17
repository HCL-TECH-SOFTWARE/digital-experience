# Disabling anchors in portlet URLs

When you access a portlet in HCL Digital Experience, the portal appends an anchor to the portlet URL. If several portlets are arranged vertically on a page, this appended anchor forces the browser to scroll down to the portlet rather than display the start of the page. You might prefer to have the start of the page that is displayed, even if the link that was clicked points to a portlet, which is placed further down on the page. To achieve this, you can disable the anchors.

The use of the anchors depends on the configuration of your device, for example your desktop browser. It is controlled by a client device capability called FRAGMENT\_IDENTIFIER. When the used device, for example the browser, has this capability enabled, the portal adds an anchor to the portlet URL. You can disable the addition of the anchors by deleting the capability FRAGMENT\_IDENTIFIER from the appropriate clients. Click the **Administration menu** icon. Then, click **Portal Settings** \> **Supported Clients**.

If you want to enable the anchors again, restore the FRAGMENT\_IDENTIFIER capability. Use the same portlet to add it back to the appropriate clients.

If you want to disable anchors for specific portlets, you can configure a portlet preference of wps.fragment.identifier=false just for those portlets.


