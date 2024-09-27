# Importing Personalization Workspace resource collections

In this topic, you will learn how to import Personalization Workspace resource collections.  

Use the Personalization Navigator to create Workspace folders for the resource collections. Then, import the resource collections into the Workspace of the Personalization Navigator.

Before you can use the content and user resources in the Personalization Navigator, you must place these class files into a directory accessible by that portlet.

1. Open the Rational Application Developer Pers Offers project.
2. Export the pers_offers folder under **Pers_Offers/Java Resources/JavaSource/src/pers_offers** as a JAR file and set the target location to **PortalServer_root/pzn/prereq.pzn/collections/pers_offers.jar**  
3. Accept the defaults and click **Finish**  
4. Restart the server to make sure that the pers_offers.jar file is loaded correctly.  

## Importing the resource collections into the portlet  

Ensure you have properly followed the steps in [Export the WAR file and install the portlet](pzn_demo_export_war_install_portlet.md).

1. Click the **Personalization** tab.

2. In the Personalization Navigator portlet, click **New** > **Folder**

3. Enter the name **Pers Offers** and click **Create**.

4. **Navigate** to the Pers Offers folder.

5. Click **Import**.

6. Select the **Pzn_offers.hrf** file in your installed Pers_Offers directory under  
    `<wp_profile_root>\installedApps\<cell_name>\PA_Pers_Offers.ear\PersOffers.war\WEB-INF\pzn-resourceCollections\pers_offers.`

7. Click **Import**.

8. See the resource collection in the Workspace.

9. Repeat these steps to import the **Pers_Offers_User.hrf** file.  

## Result  

![Collections import](./images/collections_import.png)  

You have successfully imported the Personalization Workspace resource collections. In the next topic, you will learn how to [Create a simple content rule.](./pzn_demo_create_simple_content_rule.md)
