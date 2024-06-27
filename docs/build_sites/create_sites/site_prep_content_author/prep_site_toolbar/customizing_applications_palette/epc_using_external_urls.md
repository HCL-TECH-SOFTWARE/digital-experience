# Creating categories by using external URLs

You can also use external URLs to represent categories to organize your portlet entities. The advantage of representing labels, or external URLs, with categories is that administrators can easily add, delete, and modify categories by using the Manage Pages portlet as the administrative user interface. Since categories are labels, or external URLs, they can be assigned localized titles and descriptions, which can be set with the Manage Pages portlet as well.

To assign portlets to these categories, you must point the external URL to a feed that returns either a list of portlet definitions or a list of portlet entities. These portlet definitions or portlet entities then represent the portlets that are shown as being part of the Applications palette.


1. Create a custom tag and assign that tag to the applications you want in a custom application palette category. You can assign tags to portlets or other resources with the following XML which adds a tag called "CustomAppCategory" to a resource with a given OID (object ID).

    ```
    <request
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"xsi:noNamespaceSchemaLocation="PortalConfig_8.0.0.xsd" type="update"> 
    <portal action="locate"> 
    <!-- Assignment of the tag 'sample' to the custom resource -->
    <tag action="update" resourceref="oid_of_portlet" domain="comm" owner="uid=wpsadmin,o=defaultwimfilebasedrealm" locale="en">CustomAppCategory</tag>
    </portal>
    </request>
    ```

    The following is the general format when adding a tag to a portlet:

    ```
    <tag action="update" resourceref="<portlet object ID>" domain="comm" owner="<your portal admin full distinguished name and domain>" locale="en">TagName</tag>
    ```

    Use this format to create a tag if it does not exist, and you can assign as many tags as you want to as many portlets. This way, you can see the custom portlets show up under just one category or multiple different categories.

    After adding tags to portlet resources, you can now get a portlet entity feed of all portlets tagged with a custom tag by using the following URL:

    https://your_dx_hostname/wps/mycontenthandler?uri=rm:empty?tmparam=tm%3aname%3aCustomAppCategory


2) To open the **Manage Pages** portlet, click the **Administration** menu icon. Then, click **Portal User Interface > Manage Pages**.

3) Locate the category root label.

    For example, search for the label with the unique name `com.ibm.portal.toolbar.applications.category.label.root`.

4) Under the application category root label, click **New URL** to create a new URL.

5) In Title field add a title and in Description field add a description for the new category. Click **OK**.

6) In the Advanced Options section, select **HTML** as supported markup. Specify a URI pointing to a feed that returns a list of portlet definitions or portlet entities.

    For example, the URL from step 1 has the following URI: `rm:empty?tmparam=tm%3aname%3aCustomAppCategory`

This creates a category in the application palette and all portlets in the provided portlet entity are added to the new category. For more information on portlet entity feeds, see [Syntax for Addressing Portal Resources](../../../../../extend_dx/apis/model_spi/model-spi_rest_service/feeds_rest_svc/syntax_for_portal_resource/index.md).