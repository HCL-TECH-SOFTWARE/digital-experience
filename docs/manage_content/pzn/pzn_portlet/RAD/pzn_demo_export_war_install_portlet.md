# Exporting and installing the personalized portlet

In this topic, you will learn how to export the personalized JSR 268-based JSP portlet and install the portlet in HCL Portal. Before you begin, ensure that you have properly followed the steps in [Coding the portlet JSP](pzn_demo_finish_coding_portlet_jsp.md).

## Export the WAR file and install the portlet

Export the project to a WAR file called **PersOffers.war**.  

1. Right click Pers_Offers and select **Export > WAR file**.  

2. In the **Destination** field, enter **filepath/PersOffers.war**.  

3. Click **Export source files**.  

4. Click **Finish**.  

## Install the portlet on a portal page

1. Start the HCL Digital Experience Portal server.  

2. Log in to HCL Portal as the Portal administrator (wpsadmin).  

3. Click the **Administration menu** icon.

4. Click **Applications > Web Modules**.

5. Click **Install**.  

6. Complete the installation of PersOffers.war. Verify that installation was successful.  

7. Click **Applications > Portlets**.  

8. Search for the Pers_Offers portlet and grant **Privileged User** to **All Authenticated Portal Users**.  

9. Create a new page called **Pers Offers**:  

    a. In the Portal Menu click to **Administration**.
    b  In the left side bar expend **Site Manager** and click to  **Pages**.  
    c. Click to **Content Root > Practitioner Studio > Personalization**.  
    d. Click to **New Page**.  
    e. Name the page **Pers Offer**.  

10. Add the **Pers_Offers** portlet to the page.  

11. Click **Done**.  

    !!!note
        The portlet is not ready to run yet and you will get an error if you try to run it.

You have successfully exported the personalized JSR 268-based JSP portlet and installed the portlet in HCL Portal. In the next topic, you will learn how to [Import Personalization Workspace resource collections.](./pzn_demo_import_resource_collections.md)
