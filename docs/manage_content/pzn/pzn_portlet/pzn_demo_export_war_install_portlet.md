# Export the WAR file and install the portlet

Export the IBM Rational Application Developer project to a war file and install the portlet on a portal page.

Ensure that you have properly followed the steps in [Coding the portlet JSP](pzn_demo_finish_coding_portlet_jsp.md).

1.  Export the Rational Application Developer project to a war file called PersOffers.war.

    1.  Right click Pers\_Offers and select **Export** \> **WAR file**.

    2.  In the **Destination** field, type filepath/PersOffers.war.

    3.  Select **Export source files**.

    4.  Click **Finish**.

2.  Start HCL Portal.

3.  Log in as the Portal administrator \(wpsadmin\).

4.  Click the **Administration menu** icon. Then, click **Portlet Management** \> **Web Modules**.

5.  Click **Install**.

6.  Complete the installation of PersOffers.war. Verify that installation was successful.

7.  Open **Portlet Management** \> **Portlets**.

8.  Search for the Pers\_Offers portlet and grant **Privileged User** to **All Authenticated Portal Users**.

9.  Create a new page called Pers Offers by completing the following steps:

    1.  Select **Portal User Interface** \> **Manage Pages**.
    2.  Select **Content Root** \> **Personalization**.
    3.  Select **New Page**.
    4.  Label the Page Pers Offer.
10. Add the Pers\_Offers portlet to the page.

11. Click **Done**.

    **Note:** The portlet is not ready to run yet. If you try, you get an error.


You can now import the Personalization workspace resource collections.


**Previous topic:**[Coding the portlet JSP](../pzn/pzn_demo_finish_coding_portlet_jsp.md)

**Next topic:**[Import Personalization Workspace resource collections](../pzn/pzn_demo_import_resource_collections.md)


**Previous topic:**[Coding the portlet JSP](../pzn/pzn_demo_finish_coding_portlet_jsp.md)

**Next topic:**[Import Personalization Workspace resource collections](../pzn/pzn_demo_import_resource_collections.md)

