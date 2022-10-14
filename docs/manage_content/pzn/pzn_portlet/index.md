# Developing a personalized portlet

This exercise demonstrates how to use Personalization features of HCL Digital Experience and Rational Application Developer to build your first personalized portlet. Your final result is a working portlet that uses Personalization rules and content spots to display personal news based on user attributes (or profiles).

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

-   PZN_USER: contains user information, including profile attributes
-   PZN_OFFERS: contains text for special offers categorized by customer type

|FIRST_NAME|LAST_NAME|DEPARTMENT|CUSTOMERTYPE|USERNAME*|
|-----------|----------|----------|------------|----------|
|Scott|Green|Loans|Gold|scott|
|Tawana|Streble|Human Resources|Platinum|tawana|
|Marge|Roorda|Human Resources|Platinum|marge|
|Andy|McPherson|IT|Titanium|andy|

|OFFER_ID*|CUSTOMERTYPE|TITLE|DETAILS|
|-----------|------------|-----|-------|
|1|Platinum|2nd House Mortgage|Excellent Mortgage rates on your beach house.|
|2|Gold|Add other Cards|Add other members of your household to your account.|
|3|Platinum|ARM Mortgage|1/3 5.9% APR Mortgage for 27 years.|
|4|Titanium|Free Checking Deluxe|Free Checking with the attainment of a YourCo Financial Credit Card.|

Notice the common element in these tables is the column CUSTOMERTYPE. This column is important when you invoke Personalization later in the exercise.


???+ info "Related information"  
    -   [How a site is personalized](../../../manage_content/pzn/pzn_how_site_personalized.md)

