# Import Personalization Workspace resource collections

Use the Personalization Navigator to create Workspace folders for the resource collections. Then import the resource collections into the Workspace of the Personalization Navigator.

Before you can use the content and user resources in the Personalization Navigator, you must place these class files into a directory accessible by that portlet. To do this, export the pers\_offers folder in RAD under Pers\_Offers/Java Resources/JavaSource as a JAR file. Make the target location [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/pzn/prereq.pzn/collections/pers\_offers.jar. Accept the defaults and click **Finish**, then restart the server.

Ensure you have properly followed the steps in [Export the WAR file and install the portlet](pzn_demo_export_war_install_portlet.md).

1.  Click the **Personalization** tab.

2.  In the Personalization Navigator portlet, click **New** \> **Folder**

3.  Enter the name Pers Offers and click **Create**.

4.  Change to the Pers Offers folder.

5.  Click **Import**.

6.  Browse to find the Pzn\_offers.hrf file in your installed Pers\_Offers directory under Pers\_Offers.war/WEB-INF/pzn-resourceCollections/pers\_offers.

7.  Click **Import**.

8.  See the resource collection in the Workspace.

9.  Do the same to import the Pers\_Offers\_User.hrf file.


You can now create a simple content rule.

**Parent topic:**[Developing a personalized portlet](../pzn/pzn_demooverview.md)

**Previous topic:**[Export the WAR file and install the portlet](../pzn/pzn_demo_export_war_install_portlet.md)

**Next topic:**[Create a simple content rule](../pzn/pzn_demo_create_simple_content_rule.md)

**Parent topic:**[Developing a personalized portlet](../pzn/pzn_demooverview.md)

**Previous topic:**[Export the WAR file and install the portlet](../pzn/pzn_demo_export_war_install_portlet.md)

**Next topic:**[Create a simple content rule](../pzn/pzn_demo_create_simple_content_rule.md)

