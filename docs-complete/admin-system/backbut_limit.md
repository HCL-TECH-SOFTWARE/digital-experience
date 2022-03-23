# Back button limitations 

The following restrictions apply to backward navigability of portal pages.

## The administration portlets do not officially support the browser 'Back' or 'Refresh' functions.

For a listing and description of the administration portlets, refer to [Portal administration portlets](adpltadm.md).

## The Back and Forward buttons have no undo or redo function

The browser Back and Forward buttons do not have an undo or redo function for actions or transactions performed by users. The portal marks completed actions by an internal identifier. If a user performs an action in a portlet and then navigates back to the same portlet panel by the Back or Forward buttons of the browser, the action is not performed once more.

For example, if a user initiates a money transfer or payment of a bill and then navigates further, clicking the Back and Forward buttons of the browser does not repeat the money transfer once again. An action is only performed once.

If a user wants to perform the same action again, the user can do so after refreshing the page. That portal marks that action with a different internal identifier. The protection against repeating the same action applies only to actions within the same markup fragment.

## URL length limitation

In a browser, the possible length of a URL is limited to 2048 characters. This depends on the browser and its implementation. Reverse proxies usually have a length limit of 1024 characters for URLs. To circumvent this limit, you can keep the URLs shorter by configuring an expiration limit for pages that are too far back in the navigation history.

## URL length limit on small devices

Small devices have a more severe length limit for URLs than browsers and proxies. For such small devices the complete view state is kept in the session on the server and is referenced by an ID in the URL. Therefore users cannot bookmark pages with their view state. However, they can use the Back button the same way as described previously to navigate back to the same state of a page.

## Structure of portal URLs

Do not make any assumptions about the syntax or structure of portal URLs. For example, you cannot create valid URLs by simple concatenation. This will automatically be true if only the public API is used to create URLs.

## Bookmarks from previous versions of HCL Portal do not work

Browser bookmarks to pages from HCL Portal Version 7.0 do not work for 8.5. Users need to create their bookmarks new.

Server side bookmarks of the HCL Portal Favorites portlet are migrated automatically as you migrate to HCL Portal 8.5.

**Parent topic:**[Browser behavior and scenarios ](../admin-system/adbackbut.md)

**Related information**  


[Portal administration portlets ](../admin-system/adpltadm.md)

