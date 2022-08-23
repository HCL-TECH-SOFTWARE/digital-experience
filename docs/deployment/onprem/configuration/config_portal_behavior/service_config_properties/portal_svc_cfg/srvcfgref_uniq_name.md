# Administrator Unique Names Mapping Service

Administration portlets and themes create URL links to other administration portlets and pages. If these links were hardcoded, they would no longer be usable if you changed the unique names of these pages. Therefore a service for obtaining those unique names is provided in the portal Administrator Unique Names Mapping Service. This service contains properties with key-value pairs that map internal keys to the actual unique names that are assigned to the referenced pages.

In the WebSphere® Integrated Solutions Console, the portal Administrator Unique Names Mapping Service is listed as **WP AdminUniqueNamesMappingService**.

**Note:** If you change the unique name of a portal administration page by using the Manage Unique Names portlet, you also need to update that name in the properties. This is required so that the theme and administration portlets still function.

The available mappings are defined as follows:

```
     # ----------------------------------------------- #
     # Portal administration page unique names mapping #
     # ----------------------------------------------- #
     # Internal key           unique name              #
     # ----------------------------------------------- #
     #
     #CONTENT_LAYOUT          = ibm.portal.Content
     #APPEARANCES             = ibm.portal.Appearance
     #MANAGE_PAGES            = ibm.portal.Manage Pages
     #UNIQUE_NAMES            = ibm.portal.Custom Unique Names
     #ASSIGN_ROLES            = ibm.portal.Resource Permissions
     #PROPERTIES_PORTLET      = ibm.portal.Page Properties 
     #MY_FAVORITES            = wps.My Favorites 
     #ORGANIZE_FAVORITES      = wps.Organize Favorites 
     #SET_PERMISSIONS         = ibm.portal.Locks   
     #MANAGE_LOG              = ibm.portal.Enable Tracing   
     #MY_PORTAL               = ibm.portal.Home
     #ADMINISTRATION          = ibm.portal.Administration
     #PAGE_CUSTOMIZER         = ibm.portal.Page Customizer 
     #PORTLET_MANAGER         = ibm.portal.Web Modules 
     #MANAGE_MY_PORTLETS      = ibm.portal.Portlets
     #MANAGE_MY_PORTLET_APPS  = ibm.portal.Applications
     #MANAGE_WEBSERVICES      = ibm.portal.Web Services
     #IMPORTXML               = ibm.portal.Import XML
     #SEARCH_CENTER           = ibm.portal.Search Center
     #VIRTUAL_PORTAL          = ibm.portal.Virtual Portal 
     #LOGIN                   = wps.Login 
     #SELFCARE                = wps.Selfcare 
     #APP_PROPERTIES          = ibm.portal.Template and Application Properties
     #APP_PARAMETER           = ibm.portal.Template Parameters
     #APP_ROLES               = ibm.portal.Application Roles
     #APP_TEMPLATES           = ibm.portal.Templates
     #APP_MEMBERSHIP          = ibm.portal.Application Membership
     #APP_CATALOG             = ibm.portal.Catalog
     #APP_LAYOUT              = ibm.portal.Template and Application Layout
     #PZN_PICKER_PAGE         = ibm.portal.Personalization.Picker 

```

Examples of where these unique names are used are: Theme links for New Page, Edit Page, and Assign Permissions.


