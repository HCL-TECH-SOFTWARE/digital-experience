# Developing a personalized portlet

This exercise demonstrates how to use Personalization features of HCL Digital Experience and Rational Application Developer to build your first personalized portlet. Your final result is a working portlet that uses Personalization rules and content spots to display personal news based on user attributes \(or profiles\).

The demonstration Web site is organized into the following three pages:

1.  **Front Page**
    -   **Internal News** displays internal YourCo news for the user. This portlet displays the news upon clicking upon one of the links.
    -   **General News**displays external worldwide news articles for users. This portlet messages to the GeneralNewsDetails upon clicking upon one of the links.
    -   **UserInfo** displays the current user's information. This information is used in rules to target content throughout the website to the particular preferences of your users. This user information can be modified using the edit feature.
2.  **Partners Page**

    -   **Products** displays products for the current user. This portlet messages to the PartnersDetails upon clicking upon one of the links.
    -   **Promotions** runs a simple rule targeting the information in the portlet to the user's preferences.
    The promotions portlet also demonstrates running a campaign and the splitting of rules within a campaign. In this case, between March 1 and April 16, 2005 the Tax Season campaign will run. Within this campaign, one content spot is filled with 2 distinct rules, Get Tax Season Promotions and Get 3 Promotions about IRAs. Get Tax Season Promotions will be run 70% of the time and Get 3 Promotions about IRAs the remaining 30%.

    A second campaign is also running in the promotions spot between April 14 and April 15, 2005. This campaign has a higher priority than the Tax Season campaign so it will run at this time.

3.  **Services Page**
    -   **Services** displays services that are offered to the user. Clicking on one of the services will display the details of the service. If logging is enabled, clicking on one of the services will log the fact that this particular type of service was selected by the user.
    -   **Offers** displays current offers for the user. This portlet demonstrates calling an analysis bean from a rule.

Personalization can use database content. This exercise uses the sample database that comes with the Personalization sample. The following tables are used:

-   PZN\_USER: contains user information, including profile attributes
-   PZN\_OFFERS: contains text for special offers categorized by customer type

|FIRST\_NAME|LAST\_NAME|DEPARTMENT|CUSTOMERTYPE|USERNAME\*|
|-----------|----------|----------|------------|----------|
|Scott|Green|Loans|Gold|scott|
|Tawana|Streble|Human Resources|Platinum|tawana|
|Marge|Roorda|Human Resources|Platinum|marge|
|Andy|McPherson|IT|Titanium|andy|

|OFFER\_ID\*|CUSTOMERTYPE|TITLE|DETAILS|
|-----------|------------|-----|-------|
|1|Platinum|2nd House Mortgage|Excellent Mortgage rates on your beach house.|
|2|Gold|Add other Cards|Add other members of your household to your account.|
|3|Platinum|ARM Mortgage|1/3 5.9% APR Mortgage for 27 years.|
|4|Titanium|Free Checking Deluxe|Free Checking with the attainment of a YourCo Financial Credit Card.|

Notice the common element in these tables is the column CUSTOMERTYPE. This column is important when you invoke Personalization later in the exercise.

1.  [Prerequisites for the Personalization portlet exercise](../pzn/pzn_demoprereq.md)  
This exercise is intended for users with significant HCL Digital Experience administration experience and strong portlet Java development skills.
2.  [Install the Personalization sample](../pzn/pzn_demoinstall.md)  
This exercise installs the Portal Personalization sample and configures your database for the Personalization sample. No additional database requirements are needed.
3.  [Create the JSP file in Rational Application Developer](../pzn/pzn_demo_create_jsp_rad.md)  
Create a basic JSR 168 portlet file for the Personalized Offers project and add the welcome text to the portlet.
4.  [Create the Personalization content resource classes and content spot](../pzn/pzn_demo_create_pzn_content_resources.md)  
View the steps to create the Personalization content resource classes and content spot using IBM Rational Application Developer.
5.  [Creating the Personalization user resource classes and content spot](../pzn/pzn_demo_create_pzn_user_resources.md)  
Use the Project Explorer of IBM Rational Application Developer to create the user resource classes and content spot for the Personalization demo that creates the Personalized Offers portlet for different customer profiles.
6.  [Coding the portlet JSP](../pzn/pzn_demo_finish_coding_portlet_jsp.md)  
Use the Rational Application Developer Project Explorer to work with the pers\_offers.Pzn\_offersSpot.class and the pers\_offers.Per\_Offers\_UserSpot.class to define the context parameters offersSpot and the userSpot. Code the setRequest calls to pass the user context to personalization.
7.  [Export the WAR file and install the portlet](../pzn/pzn_demo_export_war_install_portlet.md)  
Export the IBM Rational Application Developer project to a war file and install the portlet on a portal page.
8.  [Import Personalization Workspace resource collections](../pzn/pzn_demo_import_resource_collections.md)  
Use the Personalization Navigator to create Workspace folders for the resource collections. Then import the resource collections into the Workspace of the Personalization Navigator.
9.  [Create a simple content rule](../pzn/pzn_demo_create_simple_content_rule.md)  
Use the Personalization Editor to create a business rule for a resource collection.
10. [Create a content spot](../pzn/pzn_demo_create_content_spot.md)  
Use the Personalization Editor to create a placeholder for the rule that renders the selected content on a Web page. This placeholder is the content spot. Specify which rule to place in the content spot; this is called mapping the rule to the content spot or creating a rule mapping. In this example, the content is a resource collection.
11. [Enhance the Personalized Portlet](../pzn/pzn_demo_enhance_personalized_portlet.md)  
Introduce enhancements in the Personalized Portlet.
12. [Insert dynamic table HTML/JSP code](../pzn/pzn_demo_insert_dynamic_table_code.md)  
Use Rational Application Developer to code the dynamic table in the Personalized Offers portlet JSP. Export the project as a web archive \(WAR\) file. Open the HCL Digital Experience Administration page for Portlet Management and update the web module that contains the Personalized Offers portlet.
13. [Modify resource collection properties](../pzn/pzn_demo_modify_resource_collection_properties.md)  
Use the Personalization Navigator to specify the Translator Class for the resource collection.
14. [Create the user profiler rule](../pzn/pzn_demo_create_user_profiler_rule.md)  
Use the Personalization Editor to create a profiler rule for users who qualify as customers for Gold Offers in the Personalized Offers resource collection.
15. [Create additional advanced rules](../pzn/pzn_demo_create_additional_advanced_rules.md)  
For each customer type specified by a profile, add to the business rule \(the profiler\) by selecting actions to build the syntax of the rule.
16. [Change content spot rule mapping](../pzn/pzn_demo_change_content_spot_rule_mapping.md)  
Change the default rule mapping to the new binding rule that you created for different customer types who will use the Personalized Offers portlet. Test the portlet for use by all customer types. Verify that the portlet displays the personalized content that is specified by the business rule for each user profile.
17. [Personalized List portlet](../pzn/pzn_demo_list_portlet.md)  
The Personalized List portlet provides a ready-to-use portlet for displaying personalized content from rules, content spots, or resources. In many cases, it eliminates the need to code new portlets and JSP files yourself.
18. [Uninstall Personalization sample and database](../pzn/pzn_demouninstall.md)  
View the steps to uninstall Personalization sample demo, database, and users.
19. [Prerequisites for the Personalization portlet exercise](../pzn/pzn_demoprereq.md)  
This exercise is intended for users with significant HCL Digital Experience administration experience and strong portlet Java development skills.
20. [Install the Personalization sample](../pzn/pzn_demoinstall.md)  
This exercise installs the Portal Personalization sample and configures your database for the Personalization sample. No additional database requirements are needed.
21. [Create the JSP file in Rational Application Developer](../pzn/pzn_demo_create_jsp_rad.md)  
Create a basic JSR 168 portlet file for the Personalized Offers project and add the welcome text to the portlet.
22. [Create the Personalization content resource classes and content spot](../pzn/pzn_demo_create_pzn_content_resources.md)  
View the steps to create the Personalization content resource classes and content spot using IBM Rational Application Developer.
23. [Creating the Personalization user resource classes and content spot](../pzn/pzn_demo_create_pzn_user_resources.md)  
Use the Project Explorer of IBM Rational Application Developer to create the user resource classes and content spot for the Personalization demo that creates the Personalized Offers portlet for different customer profiles.
24. [Coding the portlet JSP](../pzn/pzn_demo_finish_coding_portlet_jsp.md)  
Use the Rational Application Developer Project Explorer to work with the pers\_offers.Pzn\_offersSpot.class and the pers\_offers.Per\_Offers\_UserSpot.class to define the context parameters offersSpot and the userSpot. Code the setRequest calls to pass the user context to personalization.
25. [Export the WAR file and install the portlet](../pzn/pzn_demo_export_war_install_portlet.md)  
Export the IBM Rational Application Developer project to a war file and install the portlet on a portal page.
26. [Import Personalization Workspace resource collections](../pzn/pzn_demo_import_resource_collections.md)  
Use the Personalization Navigator to create Workspace folders for the resource collections. Then import the resource collections into the Workspace of the Personalization Navigator.
27. [Create a simple content rule](../pzn/pzn_demo_create_simple_content_rule.md)  
Use the Personalization Editor to create a business rule for a resource collection.
28. [Create a content spot](../pzn/pzn_demo_create_content_spot.md)  
Use the Personalization Editor to create a placeholder for the rule that renders the selected content on a Web page. This placeholder is the content spot. Specify which rule to place in the content spot; this is called mapping the rule to the content spot or creating a rule mapping. In this example, the content is a resource collection.
29. [Enhance the Personalized Portlet](../pzn/pzn_demo_enhance_personalized_portlet.md)  
Introduce enhancements in the Personalized Portlet.
30. [Insert dynamic table HTML/JSP code](../pzn/pzn_demo_insert_dynamic_table_code.md)  
Use Rational Application Developer to code the dynamic table in the Personalized Offers portlet JSP. Export the project as a web archive \(WAR\) file. Open the HCL Digital Experience Administration page for Portlet Management and update the web module that contains the Personalized Offers portlet.
31. [Modify resource collection properties](../pzn/pzn_demo_modify_resource_collection_properties.md)  
Use the Personalization Navigator to specify the Translator Class for the resource collection.
32. [Create the user profiler rule](../pzn/pzn_demo_create_user_profiler_rule.md)  
Use the Personalization Editor to create a profiler rule for users who qualify as customers for Gold Offers in the Personalized Offers resource collection.
33. [Create additional advanced rules](../pzn/pzn_demo_create_additional_advanced_rules.md)  
For each customer type specified by a profile, add to the business rule \(the profiler\) by selecting actions to build the syntax of the rule.
34. [Change content spot rule mapping](../pzn/pzn_demo_change_content_spot_rule_mapping.md)  
Change the default rule mapping to the new binding rule that you created for different customer types who will use the Personalized Offers portlet. Test the portlet for use by all customer types. Verify that the portlet displays the personalized content that is specified by the business rule for each user profile.
35. [Personalized List portlet](../pzn/pzn_demo_list_portlet.md)  
The Personalized List portlet provides a ready-to-use portlet for displaying personalized content from rules, content spots, or resources. In many cases, it eliminates the need to code new portlets and JSP files yourself.
36. [Uninstall Personalization sample and database](../pzn/pzn_demouninstall.md)  
View the steps to uninstall Personalization sample demo, database, and users.


**Previous topic:**[Feedback and analytics](../pzn/pzn_feedbackanalytics.md)

**Next topic:**[Personalization programming reference](../pzn/pzn_programming_reference.md)


**Previous topic:**[Feedback and analytics](../pzn/pzn_feedbackanalytics.md)

**Next topic:**[Personalization programming reference](../pzn/pzn_programming_reference.md)

**Related information**  


[How a site is personalized](../pzn/pzn_how_site_personalized.md)

