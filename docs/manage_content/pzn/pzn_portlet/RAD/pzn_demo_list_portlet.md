# 17. Using a Personalized List portlet

The Personalized List portlet provides a ready-to-use portlet for displaying personalized content from rules, content spots, or resources. In many cases, it eliminates the need to code new portlets and JSP files yourself.

!!!note
    You can use this portlet instead of coding the IBM® Rational® Application Developer portlet. The Personalized List portlet is not intended to be used with the Web Content resource collection or with rules that involve the Web Content resource collection. To display Web Content rules, use a Portal Personalization Component in HCL Web Content Manager. When the Web Content resource collection is used with the Personalized List portlet, certain attributes like authoring template shows raw values from the repository that cannot be translated to a readable form. The details page of the Personalized List portlet does not show the results of the rendered content. The details page shows some attribute from the content, such as the creator or last modified date, which is not suitable for production use of content from Web Content Manager.

The intended use of the Personalized List portlet is to display personalized lists of documents. The Personalized List can also be used with some generated or custom resource collections.

1. Copy the pers_offers folder from the `/Pers_Offers.war/WEB-INF/classes` directory under your `Pers_Offers` portlet in the `installedApps` location into wp_profile_root/PortalServer/pzn/collections. You might need to create this classes folder first.

2. Restart HCL Portal.

3. Log in as the admin user.

4. Click the **Administration menu** icon. Then, click **Portlet Management > Portlets**.

5. Search for the Personalized List portlet.

6. Make a copy of the Personalized List portlet, named **Personalized List Special Offers**.

7. Set **access control** for the new portlet so **All Authenticated Portal Users** are Privileged Users.

8. Add the Personalized List Special Offers portlet to a new page under Personalization called **Pers List Portlet - Rules**.

9. Display the new page with the new portlet. Click the portlet menu on the Personalized List Special Offers portlet, and select **Configure** from the drop-down list.

10. Click the menu icon under **Which Personalization resources are retrieved** and select **Select a Rule, Content Spot or Resource Collection**.

11. Expand the **Pers Offers** folder and select **Pzn_offers** and click **OK**.

    ![PersListPortlet configuration](./images/personalizedListPortlet_config_content_spot.png)  

12. Click **Display Options**.

13. Select the following options and click **OK**.

    ![PersListPortlet display options](./images/personalizedListPortlet_config_display_options.png)  

14. Click **OK** again to see the portlet.

    ![PersListPortlet title lists](./images/personalizedListPortlet_title_list.png)  

15. Click one of the title links to see the details of that resource.

16. Click **Back**.

17. Configure the portlet again to show more personalized offers.

18. From the Personalization Picker, select the content spot **Pzn_offersSpot** under the Workspace Root and click **OK**.

    ![PersListPortlet set Pzn_offersSpot](./images/personalizedListPortlet_config_PZN_Offers_content_spot.png)

19. Click **Display Options**, set the following values, and click **OK**.

    ![PersListPortlet set Pzn_offersSpot Display Options](./images/personalizedListPortlet_config_PZN_Offers_display_options.png)

20. Complete the configuration and see that the Personalized List Special Offers portlet is empty (when logged in as wpsadmin). This is because the administrator did not enter customer details in the pzndemo database for the user resource that is being used.

21. Log in as Scott and view the Personalized List Special Offers portlet. The portlet displays the personalized offers that are based on the rule, **Show Offers By Customer Type**, which is mapped to the content spot **Pzn_offers Spot**.

22. Test this portlet, logging in as each pzndemo user having a different profile. You must get the same content results that you saw previously by using your own custom-built portlet (Pers_Offers), except you do not have to code a portlet or a JSP file.  
