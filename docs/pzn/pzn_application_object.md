# Application object 

An application object is a java object existing at a known location in the request context.

Defining an application object involves specifying the object’s class name \(as a Java class\), and specifying a key \(string key into a session attribute\) to find it in the request context. Personalization calls methods on these objects during rule execution and uses their results in its decision making. Application Objects that implement the SelfInitializingApplicationObject interface are automatically instantiated as needed by Personalization.

-   **[Device application object ](../contarget/targeting_device_overview.md)**  
The Device application object displays content by device class or by location \(city, country, latitude, and longitude\).
-   **[Referrer application object ](../contarget/targeting_referrer.md)**  
The Referrer application object displays content based on what site or what key words from which search engine the user was referred from.
-   **[Public Render Parameters ](../contarget/targeting_render.md)**  
The Public Render Parameter is an application object that provides read and write access to public render parameters.
-   **[Shared Data application object ](../contarget/targeting_shared_data.md)**  
The Shared Data application object is used in rules to share complex data between web applications and HCL Digital Experience in a user's session.
-   **[Device application object ](../contarget/targeting_device_overview.md)**  
The Device application object displays content by device class or by location \(city, country, latitude, and longitude\).
-   **[Referrer application object ](../contarget/targeting_referrer.md)**  
The Referrer application object displays content based on what site or what key words from which search engine the user was referred from.
-   **[Public Render Parameters ](../contarget/targeting_render.md)**  
The Public Render Parameter is an application object that provides read and write access to public render parameters.
-   **[Shared Data application object ](../contarget/targeting_shared_data.md)**  
The Shared Data application object is used in rules to share complex data between web applications and HCL Digital Experience in a user's session.

**Parent topic:**[Personalization terms ](../pzn/pzn_concepts.md)

**Previous topic:**[Campaigns ](../pzn/pzn_campaigns.md)

**Next topic:**[Request Context ](../pzn/pzn_request_context.md)

**Parent topic:**[Personalization terms ](../pzn/pzn_concepts.md)

**Previous topic:**[Campaigns ](../pzn/pzn_campaigns.md)

**Next topic:**[Request Context ](../pzn/pzn_request_context.md)

## Installed application objects

The Device, Referrer, Public Render Parameter, and Shared Data application objects are installed by default. By using installed application objects, you can skip the process of defining and registering application objects.

When you use application objects that are not installed, you must define the application objects by using a set of Personalization wizards that are provided with IBM® Rational® Application Developer or develop application objects according to a set of public programming interfaces. After you define the application objects, the application objects are registered to the Personalization server through the Personalization browser. When you use the installed application objects, you do not have to define or register the application objects.

The Device, Referrer, Public Render Parameter, and Shared Data application objects are installed and enabled with 8.5.

**Optional:** To enable the Content Targeting Dialog in virtual portals, use XML access to manually create the hidden Content Targeting Dialog page for each virtual portal. From the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory, run the following task:

-   AIX® HP-UX Linux™ Solaris z/OS®: `./xmlaccess.sh -in [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/pzn.ui/wp.pzn.ui.actions/config/templates/DeployPages.xml -url http://localhost:10039/wps/config/your\_virtual\_portal\_context -user admin\_user\_id -password admin\_password`
-   IBM i: `xmlaccess.sh -in [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/pzn.ui/wp.pzn.ui.actions/config/templates/DeployPages.xml -url http://localhost:10039/wps/config/your\_virtual\_portal\_context -user admin\_user\_id -password admin\_password`
-   Windows™: `xmlaccess.bat -in [PortalServer\_root](../reference/wpsdirstr.md#wp_root)\pzn.ui\wp.pzn.ui.actions\config\templates\DeployPages.xml -url http://localhost:10039/wps/config/your\_virtual\_portal\_context -user admin\_user\_id -password admin\_password`

The following topics contain an overview of the installed application objects. This overview includes descriptions and examples of using the application objects in rules that you create. To select the attributes that are used in the examples, you must enable the application objects. Instructions for enabling the location attributes associated with the Device application are also included in this section.

