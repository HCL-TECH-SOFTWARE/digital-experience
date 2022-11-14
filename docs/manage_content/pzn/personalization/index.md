# Personalization



Personalization can recognize a specific site visitor based on a profile. It can also determine characteristics of a user based on previous purchases, products or pages viewed, or other attributes. If a visitor belongs to a particular geographic region, content specific to that region can be targeted to the visitor. The page is assembled with the personalized information, and the visitor sees a personalized page.

Personalization includes the following tools:

-   **Personalization browser:** Shows rules in a user interface for both the production and staging environment. Use the personalization browser to:

    -   Register resource collections
    -   Author rules, campaigns, and content spots
    -   Map rules into content spots for a particular campaign
    All objects are authored through the Personalization server.

-   **Rules engine:** Uses rules created in the Personalization browser. The Personalized List portlet or Web Content Manager can start Personalization rules. You can also use the Personalization API to start rules. Rules associated with pages or portlets through Portal Administration are automatically triggered.
-   **LikeMinds Recommendation engine:** Evaluates recommendation rules created in the Personalization browser.
-   **Resource engine:** Resolves the queries produced by rules into content pieces to be returned. Content for Personalization is created and approved using whatever content management tool you choose, or from an SQL Server, LDAP, or any other database. Content is accessed using a set of Resource Collection classes.
-   **A logging framework:** Records information about website usage to the feedback database and the recommendation engine. It is entirely up to the site developers to decide what information is logged.

The engines are sometimes collectively called the Personalization run time server.

The engine identifies the particular user. Personalization retrieves user profile. For example, a user profile might include salary range information. If a user has a high salary range, you can configure Personalization to show information about a premium product on the website.

## Types of Personalization

There are three types of Personalization:

-   **Simple filtering**

    A site renders content based on predefined groups of site visitors. For example, if a site visitor is in the Human Resources department, the site provides access to URLs containing Human Resources policy manuals.

-   **Rules engines**

    In a rules-based system, the site owner defines a set of business rules. The rules determine what category of content is shown when a certain profile type visits the site. An example would be to show all four-wheel drive SUVs to visitors in the northeast in the 21-to-35 age group.

    Use this approach to drive the site behavior based on the business objectives. The site owner is usually the owner of a marketing campaign or some other business manager.

-   **Collaborative filtering**

    A site visitor rates a selection of products, explicitly or implicitly. Those ratings are compared with the ratings offered by other visitors. Software algorithms detect similarities. For example, a visitor receives book recommendations based on the similar purchases of others.


1.  [Content that you personalize](oob_pzn_content.md)  
You can personalize specific content spots of your intranet and internet website. For example, you can personalize a list of new articles that appears on the website based on the visitors geographical location. You can personalize employee bulletins for specific groups of employees, such as changes to benefit plans. You can personalize a product list on a commerce website.
2.  [Creating a business rule](oob_pzn_rule_create.md)  
Rules are used to define how your website interacts with individuals and groups of site visitors. Rules are composed of easy-to-read logic statements that specify how to evaluate conditions and what actions to take.
3.  [Link the rule to a content spot on your site](oob_pzn_rule_link.md)  
A content spot is a placeholder for a personalization rule on a web page. When you create a content spot, you associate a business rule with it. This association is referred to as mapping or linking the personalization rule to a content spot.
4.  [Publish your rules to production](oob_pzn_publish.md)  
You can publish selected rules or the full workspaces from the personalization navigator. Before you publish, you must define the publishing server.
5.  [Personalization](pznOverviewHelp.md)  
Personalization allows a portal or website to choose which content appears for particular site visitors. For example, a site that uses Personalization can show different news articles to managers than to regular employees, or different information to valued customers.

