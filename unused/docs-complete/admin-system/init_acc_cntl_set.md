# Initial Access Control Settings 

The administrative user who installs HCL Digital Experience has a default set of access rights.

## Portal administrative user access rights

The installation creates a dedicated administrative user and corresponding administrative user group. By default the name of the administrative user group is **wpsadmins**. The following information describes the initial access control settings. A user always has the permissions that are associated with the User, Editor, and Privileged User role types on itself. There is no explicit role assignment for these permissions. They are a part of the administration policy.

-   **Administrative user**

    The administrative user for each domain is identified during the installation and configured in the Access Control Data Management Service. The administrative user has unlimited access on all resource in the corresponding domain.

-   **wpsadmins**

    The administrative group for each domain is identified during the installation and configured in the Access Control Data Management Service. This group has the same role mappings as the administrative user.

-   **All Authenticated Portal Users**

    User@ the following portlet applications:

    -   portletWiring Web Application
    -   Edit page content and layout
    -   Concrete Properties Web App
    -   appearance Web Application
    -   com.ibm.wps.portlets.palette
    -   com.ibm.wps.wp.spa.portlets
    -   com.ibm.wps.resolver.friendly.disambiguation
    -   Application Layout
    -   LotusNotesPortlet
    -   Manage Pages and Favorites App
    -   peopleFinderJSR168.1
    -   People Finder
    -   Organize Favorites
    -   View Group Members
    User@ the following Virtual Resources:

    -   USERS
    -   USER\_GROUPS
    -   PSE\_SOURCES
    -   APPLICATION\_FOLDERS
    -   URL\_MAPPING\_CONTEXTS
    -   WCM\_REST\_SERVICE
    Privileged User@ the following portlet applications:

    -   Welcome
    -   Information Portlet Application
    -   wp.ap.selfcare
    -   Bookmarks
    -   com.ibm.lotus.search.portlets.SearchCenterPortletApplication
    -   com.ibm.wps.portlets.bookmarks.9730c9c350.web2
    -   Directory Search
    -   ReminderPortlet
    -   Banner Ad
    -   LotusNotesPortlet
    -   Microsoft Exchange 2010
    -   Document\_Viewer\_Portlet
    -   HCL Common Mail Portlet
    -   Personalization Editors
    -   Personalization Navigator
    -   Personalization Picker
    -   Personalized List
    -   Policy Status Application
    -   Search Admin Application
    -   ParamConfig Application
    -   Properties Portlet Application
    -   Roles Portlet Application
    -   Community Portlet Application
    -   Application Catalog Manager
    -   wp.ap.sitemap
    Privileged User@ the following portlets:

    -   Directory Search
    -   Lotus Notes View
    -   Sametime Web 2.0 Contact List
    User@ the following portlets:

    -   Add to Sametime List
    -   Directory Search
    -   iNotes
    -   Dynamic Person Tag
    -   Lotus Notes View
    -   Sametime Web 2.0 Contact List
    User@ the following pages:

    -   Content Root

        **Note:** Propagation is blocked.

    -   Home
    -   Add to Sametime List
    -   Application Root
    -   Temporary Application Root
    -   Applications
    -   Application Membership
    -   Application Roles
    -   Banner Links
    -   Calendar
    -   Directory Search
    -   Mail
    -   Lotus Notes
    -   Sametime
    -   Organize Favorites
    -   Page Customizer
    -   Page Properties
    -   People Finder
    -   Policy Status
    -   Quick Links
    -   Collapsed Quick Links Shelf Links
    -   Expanded Quick Links Shelf Links
    -   Explore
    -   Footer Links
    -   Groups Viewer
    -   Person Tag
    -   Theme Links
    -   Template and Application Layout
    -   Template and Application Properties
    -   Welcome
    Privileged User@ the following pages:

    -   Business Rules
    -   Collaboration
    -   Edit My Profile
    -   Search Seedlist
    -   Site Map
    -   Personalization
    -   Personalization Picker
    -   Personalized List
    -   Content Palette
    -   People Palette
    -   Search Center
    -   Document Search
    -   iNotes
    -   Home
    -   Quick Links
    -   Theme Links
    -   Site Map
    -   Messaging
    Contributor@ the following document library:

    -   Portal Site library

        **Note:** Propagation is blocked.

    Editor@ the following document library.

    -   Portal Site library: Content resource type
-   **Anonymous Portal User**

    User@ the following portlet applications:

    -   wp.ap.login
    -   wp.ap.selfcare
    -   wp.ap.sitemap
    -   HCL Common Mail Portlet
    -   Newsgroups
    -   Banner Ad
    User@ the following portlets:

    -   Lotus Notes View
    User@ the following pages:

    -   Login
    -   Edit My Profile
    User@ the following Virtual Resources:

    -   URL\_MAPPING\_CONTEXTS
    -   Editor@USER SELF ENROLLMENT
    User@ the following document library:

    -   Portal Site library

        **Note:** Propagation is blocked.

    -   Portal Site library: Content resource type

**Parent topic:**[Resources, roles, access rights, and initial access control settings ](../admin-system/resources_roles.md)

