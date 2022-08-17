# Configuring history expiration limits

You can configure how far back the HCL Portal tracks the history of the navigational state of pages. This allows you to control the balance between the performance of your portal and the retrievability of previously visited pages for users.

The further back your portal tracks the history of portal pages, the further back your users can go in their browsing history of pages that they visited before. However, this also increases the URL length of your portal pages, as the navigational history is stored in the page URL. Therefore limiting the page history might be of benefit for the performance of your portal.

HCL Portal provides two different approaches for controlling the page history in the navigational state:

1.  The **history manager** allows you to control the number of previously visited pages for which the portal tracks the navigational state.
2.  The history expiration limit for swapped render parameters

-   **[History manager for pages](../admin-system/historylimit_cfg_histmgr.md)**  
The history manager allows you to control for how many visited pages navigational state you want to tracked. In other words it controls the maximum number of pages whose state is contained in the portal URLs. The visited pages are tracked within the navigational state in a LRU algorithm based way.
-   **[History expiration limit for render parameters](../admin-system/historylimit_scn.md)**  
You can configure the portal so that it discards the render parameters for pages that the user has not visited recently within the same session. The purpose of this setting is to limit the URL length. This might be of benefit for the performance of your portal. The portal discards the navigational state of the portlet application of standard API portlets on pages that are too far back in the history.

**Parent topic:**[Browser behavior and scenarios](../admin-system/adbackbut.md)

