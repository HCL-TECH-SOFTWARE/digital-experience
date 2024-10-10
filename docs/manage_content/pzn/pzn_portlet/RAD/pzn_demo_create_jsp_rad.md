# Creating a JSR 268-based JSP portlet  

In this topic, you will learn how to create a basic JSR 268 portlet with a JSP file for the Personalized Offers project, and add the welcome text to the portlet.

Before you begin, ensure you have properly installed the demo and databases and stopped the HCL Portal server so you can connect to the database.


1. Launch Rational Application Developer.

2. Click **File > New > Project...** and select **Portlet Project**.

3. Click **Next**.

   When the **Confirm Enablement** window appears, click **OK** to enable Portal Development.

4. Fill out the New Portlet Project fields with the following information:

    1. In the **Project Name** field, enter **Pers\_Offers**.

    2. Under **Project location**, select **Use default location**.

    3. Select **WebSphere Portal v9.5 stub** from the **Target Runtime** list.

    4. Unselect **Add project to an EAR**.

    5. In the **Portlet settings**, select **Create a portlet** and enter the Portlet name: **Pers_Offers**  

    6. Under **Configuration**, click **Modify...**  

    7. Under **Portlet API**, select **JSR 268 Portlet** from the list.

    8. Under **Portlet type**, select **Basic Portlet** and click the **OK** button.

         ![Portlet Type](.\images\create_project_type_Pers_Offers.png)

5. Click **Next**.

6. In the **Portlet Settings** window, accept the default settings and click **Next**

7. Remove the option **Add action listener to portlet to handle action requests** and click **Finish**  

8. Accept the default Portlet Settings and click **Next**.

9. No Actions are necessary. Clear any selected actions and click **Next**.

10. No Advanced Settings are necessary. Click **Finish**.

    ![Create Project Pers_Offers](.\images\create_project_Pers_Offers.png)

    !!!note
        When the **Open Associated Perspective?** window appears, click **Open Perspective** to open the JSP-file in the Design mode.  

        When the **Rich Page Editor** window appears, click the **OK** button.  

11. The JSP file opens automatically in Design mode. Edit the text of the portlet to display **Welcome to Personalized Offers!**.

12. Save and close the JSP.

## Result

![Welcome JSP](.\images\Pers_Offers_Welcome_JSP.png)

You have successfully created a basic JSR 268 portlet with a JSP file using Rational Application Developer. In the next topic, you will learn how to [Create the Personalization content resource classes and content spot.](./pzn_demo_create_pzn_content_resources.md)
