# Digital Experience Personalization

Digital Experience Personalization provides automatic customization of website content presented to individual users and user groups.

Personalization can recognize a specific user based on a profile or can determine characteristics of a user based on previous purchases, products or pages viewed, and so forth. Personalization then selects content that is appropriate for that profile.

For example, if a visitor belongs to a particular geographic region, targeted content specific to that region can be personalized to the visitor. If a person has a high salary range, region code, or other information, Personalization can be configured to retrieve information about a commercial website premium product. The page is assembled with the personalized information, and the visitor sees a personalized page.

**Video:** [Create and apply A/B Personalized scenarios with HCL Digital Experience](https://www.youtube.com/watch?v=zEyzF4TiFJo&list=PLEjl4yzB6ckH2QJw886wkwqmSotdCLxdf)

Personalization is composed of:

-   **Personalization browser** - The Personalization user interface:

    -   registers resource collections
    -   authors rules, campaigns, and content spots
    -   maps rules into content spots for a particular campaign
    Since objects are authored through the Personalization server, the Personalization browser can display rules in production as well as view rules in a staging environment.

-   **Rules engine** - The rules engine executes rules created in the Personalization browser. A programming interface exists for Personalization to invoke rules, Personalization rules may be invoked through the Personalized List portlet, or rules may be invoked through Web Content Manager Personalization components. Rules associated with pages or portlets through Portal Administration are also automatically triggered.
-   **LikeMinds Recommendation engine** - The recommendation engine evaluates recommendation rules created in the Personalization browser.
-   **Resource engine** - The resource engine resolves the queries produced by rules into content pieces to be returned. Content for Personalization is created and approved using whatever content management tool you choose, or may come from an SQL Server, LDAP or any other database. Content is accessed via a set of Resource Collection classes.
-   **A logging framework** - The logging framework is used to record information about website usage to the feedback database and the recommendation engine. It is entirely up to the site developers to decide what information is logged.

The engines rules engine, together with the recommendation engine and the resource engine, are sometimes collectively referred to as the Personalization run time server.

The engine identifies the particular user. Personalization retrieves that person's profile. For example, a person may have a salary range included in her profile. Personalization then selects content that is appropriate for that profile. If a person has a high salary range, region code, or other information, Personalization can be configured to retrieve information about a commercial website premium product. The page is assembled with the proper personalized information. The user sees her personalized page.

Beginning with [HCL DX 9.5 Container Update and CF 200](../../whatsnew/cf20/newcf200.md), a new API explorer is available that allows developers using the Digital Experience Personalization REST APIs to explore and test these APIs. See the topic Digital Experience Personalization REST API Explorer below for details.

## Types of Personalization

There are three types of Personalization:

-   **Simple filtering**

    A site displays content based on predefined groups of site visitors. For example, if a site visitor is in the Human Resources department, the site provides access to URLs containing Human Resources policy manuals.

-   **Rules engines**

    In a rules based system, the site owner defines a set of business rules which determine what category of content is shown when a certain profile type visits the site. An example would be: Display all four wheel drive SUVs to visitors in the northeast in the 21 to 35 age group.

    This approach has the advantage of driving the site's behavior with the business objectives of the site owner. The site owner is usually the owner of a marketing campaign or some other business manager.

-   **Collaborative filtering**

    A site visitor rates a selection of products, explicitly or implicitly. Those ratings are compared with the ratings offered by other visitors. Software algorithms detect similarities. For example, a visitor receives book recommendations based on the similar purchases of others.


## Rules versus collaborative filtering

When complex filtering is required, a rule-based system may work better than collaborative filtering, and vice versa. The following table details examples where one type of personalization is better than the other.

|Scenario|Which filtering type to use|Reason|
|--------|---------------------------|------|
|If the number of items offered and users who purchase them are rather low.|Rules|Very little room to compute user similarity necessary for collaborative filtering.|
|If price points are high or purchasing frequency is low.|Rules|Finite, limited arenas - collaborative filtering fails because of the inherent lack of diversity.|
|If there is a preexisting dependency between items. Example: Disability policy required for homeowner|Rules|Recommending a disability policy just because collaborative filtering says many others "like this user" also bought a policy is incorrect - one must have the homeowner policy first.|
|If number of items offered and users who purchase them are rather high.|Collaborative|Cannot write rules covering all items.|
|If price points are low, all quite dissimilar, or the products offered have a wide range of user appeal.|Collaborative|The wide variance fits the collaborative filtering approach. Collaborative filtering also lowers the risk of making "bad" recommendations.|
|When not much information is gathered about the user, but the user can be identified, possibly by a login or cookie.|Collaborative|In this case, user attributes on which to base rules may be lacking. Collaborative filtering can compare the user's experiences on the site to other users.|

- **[Targeted content and Portal Personalization](./pzn_intro.md)**  
Targeted content provides you with a way to deliver multiple pieces of content to different audiences. Targeted content matches the best content with the most appropriate group by using segments. Segments help you split your audience into meaningful groups with different interests or characteristics.
- **[Personalization](./personalization/index.md)**  
Personalization can recognize a specific site visitor based on a profile and determine characteristics of a user based on previous purchases, products or pages viewed, or other attributes. If a visitor belongs to a particular geographic region, content specific to that region can be targeted to the visitor. The page is assembled with the personalized information, and the visitor sees a personalized page.
- **[How a site is personalized](../pzn/pzn_how_site_personalized.md)**  
Use this topic to understand how to define a personalized list of new articles for a website, such as a section of an intranet site for targeted employee bulletins or where the content of the site is tailored to the particular user.
- **[Personalization terms](../pzn/pzn_terms/index.md)**  
The concepts and principles for working with Portal Personalization require an understanding of terminology.
- **[The Personalization interface](../pzn/pzn_portlets.md)**  
The Portal Personalization user interface consists of three portlets: the Personalization Navigator, Personalization Editor, and the Personalized List.
- **[Publishing personalization rules](../pzn/publishing_pzn_rules/index.md)**  
HCL Digital Experience Personalization sends published rules across HTTP to a servlet which resides on each personalization server.
- **[The Web Content resource collection](../pzn/pzn_wcm_rescoll.md)**  
The Web Content resource collection allows you to write rules that select lists of content from the HCL Web Content Manager.
- **[The Portal User resource collection](../pzn/pzn_usr_rescoll.md)**  
The Portal User resource collection uses public APIs provided by HCL Digital Experience to access user information.
- **[Developing a personalized portlet](../pzn/pzn_portlet/index.md)**  
This exercise demonstrates how to use Personalization features of HCL Digital Experience and Rational Application Developer to build your first personalized portlet. Your final result is a working portlet that uses Personalization rules and content spots to display personal news based on user attributes \(or profiles\).
- **[Personalization programming reference](../pzn/pzn_programming_ref/index.md)**  
HCL Digital Experience provides the programming model, processes, and APIs for the Personalization rules and resource engines.
- **[Personalization APIs](../pzn/pzn_apis/index.md)**  
Personalization APIs in HCL DX supports the ability to recognize a specific site visitor and determine their characteristics based on previous purchases, products or pages viewed, or other attributes based on a user profile. Personalization then selects content that is appropriate for that profile.
- **[Personalization-Unica Integration](./pzn_unica_integration/index.md)**  
Unica Campaign is a web-based solution that enables you to design, run, and analyze direct marketing campaigns. Users can create segments in Unica Campaigns and Segment Central.
- **[Staging Personalization rules to production](./pzn_stage_prod.md)**  
Learn how about the different methods of moving Personalization rules from a staging system to a production system.
- **[Enable logging](./pzn_enable_logging_runtime_server.md)**  
Learn how to create and set up the Feedback database and enable logging on the runtime server that hosts Feedback data.

## HCLSoftware U learning materials

For an introduction and a demo on how to use Personalization, go to [Personalization](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D2803){target="_blank"}. To try it out yourself, refer to [Personalization Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Business_User/HDX-BU-200_Personalization_Lab.pdf){target="_blank"} and corresponding [Personalization Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Business_User/HDX-BU-200_Personalization_Lab_Resouces.zip).


