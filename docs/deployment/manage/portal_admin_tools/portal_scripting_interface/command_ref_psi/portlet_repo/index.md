# Portlet repository

The portlet repository provides access to portlets, portlet applications, and web modules. To provide easy access to the relations between the repository objects, the repository is modeled as a tree. Unlike with the content and component hierarchies, the repository tree is not arbitrarily nested.

At the root of the repository is a dummy node. Children of the root are the web modules. Web modules are the deployment units of the portal. They correspond to WAR files. The children of a web module are portlet applications.

The portlet repository is accessed by using the Portlet bean, referenced as $Portlet in Jacl. Modification of the portlet repository from a script is not supported.

The Portlet bean provides the following functions:

-   Methods to browse in the portlet repository tree. For more information, see *Navigation*.
-   Methods to locate a portlet, application, or web module, or to search for particular repository objects. For more information, see *Search*.
-   Methods for getting attributes, metadata, or portlet preferences. The following attribute types are supported by the Layout bean:
    -   Plain attributes
    -   List valued attributes
    -   Locale-specific attributes
    -   Portlet metadata
    -   Portlet preferences
