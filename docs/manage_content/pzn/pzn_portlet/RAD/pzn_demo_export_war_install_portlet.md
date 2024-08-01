# 7. Exporting and installing the personalized portlet

Please make sure that the previous steps are completed successfully. It is then possible to export the personalized JSR 268 JSP portlet with the following steps.

## Export the WAR file and install the portlet

1. Ensure that you have properly followed the steps in [Coding the portlet JSP](pzn_demo_finish_coding_portlet_jsp.md).

2. Export the project to a war file called PersOffers.war.

    a.  Right click Pers_Offers and select **Export > WAR file**.

    b.  In the **Destination** field, type filepath/PersOffers.war.

    c.  Select **Export source files**.

    d.  Click **Finish**.

## Install the portlet on a portal page

1. Start the HCL Digital Experience Portal server.

2. Log in as the Portal administrator (wpsadmin).

3. Click the **Administration menu** icon. Then, click **Portlet Management > Web Modules**.

4. Click **Install**.

5. Complete the installation of PersOffers.war. Verify that installation was successful.

6. Open **Portlet Management > Portlets**.

7. Search for the Pers_Offers portlet and grant **Privileged User** to **All Authenticated Portal Users**.

8. Create a new page called Pers Offers by completing the following steps:

    a.  Select **Portal User Interface > Manage Pages**.
    b.  Select **Content Root > Personalization**.
    c.  Select **New Page**.
    d.  Label the Page Pers Offer.

9. Add the Pers_Offers portlet to the page.

10. Click **Done**.

    !!!note
        The portlet is not ready to run yet. If you try, you get an error.

You can now import the Personalization workspace resource collections.  
