# Session settings stored by the portal

After a user logs out or the session times out, the portal stores the complete navigational state into the database.

The settings include the following navigational state information:

**Note:** Authenticated and remembered users must have cookies enabled on their browser. Users can access portal sites without cookies enabled if they are anonymous users. If you turn on session tracking for anonymous users, then anonymous users also require cookies.

-   Portlet states:
    -   Normal
    -   Minimized
    -   Maximized
-   Portlet modes:
    -   `config`
    -   `edit_defaults`
    -   `edit`
    -   `view`
    -   `help`
-   Page selection:
    -   The last page that was active before the user logged out.

**Note:** Resuming the session state is only possible if either the portal theme login link or WebSphere® Application Server TAI-based authentication is used to log in to the portal. Logging in or addressing a resource with a URL overwrites the complete session state that is to be resumed and addresses the named resource with the default states and modes for its portlets. For example, this occurs when users use ../wps/myportal/ or ../wps/myportal/name/ for a URL mapping or friendly name.

**Parent topic:**[Configuring user session persistence](../admin-system/adcfgpss.md)

