# General tips

View some general tips related to resource classloading when using the Personalization API.

## Resource classloading

-   The recommended location for generated content spot classes and resource collection classes is in a WebSphere Application Server shared library. When a rule is executed, Personalization uses the class loader of the content spot to load any resource collections or application objects required for that rule. If you are using the default `com.ibm.websphere.personalization.ContentSpot` class to execute rules, then that class loader is the Personalization shared library class loader. In this scenario, your resource collections and application objects must be visible to the class loader of the `com.ibm.websphere.personalization.ContentSpot` class. With a generated content spot class, you have the flexibility to place this class and any associated resource collections directly in a web module or portlet application, but they must also be available to the Personalization portlets. Whichever mechanism you use for content spots, the best way to ensure that your resource collection classes are available is to put them in a shared library on the application server. By default, Personalization is shipped with a shared library that may be used for resource collections. Place your resource collection classes in the [wp\_profile\_root](../../../../guide_me/wpsdirstr.md)/PortalServer/pzn/collections directory and reload the server.
-   In previous versions of Personalization, the user interface classes were loaded dynamically out of other web applications, out of databases, and out of other paths entered by the user. In the current version of Personalization, the content spot and resource collections must be on the classpath for the Personalization portlets. The best way to achieve this is through use of a shared library.
-   If you use the Personalization resource wizard in Rational Application Developer to create the resource classes in a Web or portlet project, those generated classes will be deployed in the Web module and not be available to the Personalization portlets. You will have to put these classes on a shared library and make that shared library available to the Personalization portlets.
-   Classes in a shared library are only reloaded when the application server is reloaded. Classes in a Web module are reloaded when the Web module is reloaded.
-   Ensure the global uniqueness of the class names by using package names.
-   In a cluster of application servers, be sure to copy your content spot and resource classes to each application server in the cluster.


