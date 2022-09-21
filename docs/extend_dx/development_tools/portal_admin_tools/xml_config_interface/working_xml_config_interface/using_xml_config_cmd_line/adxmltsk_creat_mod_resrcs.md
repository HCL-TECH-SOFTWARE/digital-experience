# Creating and modifying resources

In addition to copying and restoring configurations of existing portal resources, you can use the XML configuration interface to install new resources in the portal. You can also use the XML configuration interface as an alternative to the portal administrative user interface for running some administration tasks.

In these cases, you cannot export and reimport XML scripts, but you must edit them. In most cases, it is still useful to start with an XML export and only partially modify it, rather than writing complete new XML scripts. The following scripts show examples for modifying different resources in the portal configuration by using XML scripts.

All the examples use the ID generating mode and do not specify literal object IDs. Therefore, you can run them on any portal installation, as they do not depend on hardcoded object ID values. As noted earlier, using literal object IDs makes sense only if you really want to create two instances of the same resource, and if you have a controlled environment where you can guarantee that all object IDs that your resources depend on have exactly the required values. As object IDs are difficult to use for identifying the resources, the examples assign unique names to most top-level resources. This way you can reference them later, and the resources are not duplicated if you run the scripts twice.

The first example file DeployPortlet.xml shows how you deploy a portlet and create a simple test page to display the portlet. Some of the attributes in the XML must match the corresponding settings that were defined in the portlet.xml deployment descriptor in the portlet WAR file. This is necessary so that the XML processing can properly identify the contents of the WAR file. When you want to deploy a different portlet, you must not only specify a different WAR file but also adapt those attributes. Also, the configuration that is specified for the portlet is less than what you see in an XML export result for the portlet. For example, the localized titles are not included in the XML script. This is because those settings are specified in the portlet.xml deployment descriptor; you do not have to override them with the XML configuration interface.

!!!note
    As Windows limits the maximum path length to 260 characters, the name of the WAR file must be 25 characters or less. Deploying a WAR file with a name that is more than 25 characters results in an error.

The CreatePage.xml sample shows the following extra possibilities:

1.  It assumes that the portlet is already installed. Therefore, it uses only a locate action for the web module, not an update action.
2.  It sets a specific skin for displaying the portlet on the page.
3.  It shows how you can specify localized titles in properties files rather than include them in the XML script: the titles and descriptions for the page are now loaded from two properties files for two different languages.

Both examples use a simple page layout with just one row and one column. If you want to generate more complex page layouts, you can use the administration portlets to create them. You can export the result to generate a template for your XML scripts.

When you create new resources, you might want to define specific access control settings for them, for example to make them visible to all portal users. The UpdateAccesscontrol.xml example shows the syntax for specifying different access control settings. This sample updates existing resources, but you can use the same syntax to define access control settings for new resources while you are creating them in an XML script. This sample also shows how you can specify access control user roles on virtual resources. This allows you to give a user access to all resources of a specific type that exist in the portal.

The CreateURL.xml sample defines a URL mapping for the sample page that was created with the DeployPortlet.xml example mentioned earlier. After you create the URL mapping, you can access the page directly by entering that URL in the browser.

The DeployTheme.xml example shows how you can use XML scripts to install new themes and skins into your portal. The XML scripts create these resources only in the portal database, so that they can be used in the portal. In addition, you must write the JSPs that run the actual visualization and copy them to the resource directory specified in the XML before you can use the theme in the portal.

The ModifyPortlet.xml example changes settings of a portlet instance that is shown on a page. Such settings are normally set in the edit mode of the portlet. It depends on the code of the portlet which settings are stored and how they are used.

The CreateUser.xml example imports a new user into the portal. It also creates a group that contains only that one user.

To add a language to the portal, use the CreateLanguage.xml example.

!!!note
    To prepare for running this XML script, you must insert resource bundles and, where applicable, JSPs for the new language. For details about how to do this, refer to the topic about how to support new languages in the HCL Portal Help Center.

The UpdateVault.xml example demonstrates how to create new resources in the portal credential vault with an XML script.

The ClonePortlet.xml example shows how you can use the XML configuration interface to add new portlets with different settings to existing applications.

The Transaction.xml example demonstrates the effect of using different transaction levels for the execution of an XML import.

The MovePage.xml example shows you how to move a page to another node.

!!!note
    The actual move of the page is done by the last two lines in the sample file.


???+ info "Related information" 
    -   [Supporting a new language](../../../../portal_admin_tools/language_support/supporting_new_language/index.md)

