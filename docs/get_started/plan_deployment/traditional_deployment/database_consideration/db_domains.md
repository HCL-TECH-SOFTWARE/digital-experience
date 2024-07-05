# Portal database domains

Sets of databases tables and schemas for portal resources are called database domains. Database domains classify and help you determine how to distribute portal data.

There are six database domains: release, customization, community, JCR, feedback, and LikeMinds. The database domains categorize portal data into the following categories and subcategories to help you decide how to distribute portal data into different databases:

-   **Release data \(release and JCR\)**

    Includes all portal content definitions, rules, and rights that are designed externally then brought into the portal by a staging process, such as page hierarchy, available portlets and themes, templates, credential slots, Personalization rules, and policies. These resources are typically not modified during production and need administrative rights to do so. Administrators typically create release data on an integration server and stage it to the production system. Release data is protected by access control and contains only data, not code. Release data includes two separate portal database domains: release and JCR.

    The release portal database domain contains portal static site configuration, including access control, pages, and portlets.

    The JCR portal database domain contains authored content, Personalization rules, and theme policy definitions.

-   **Customization data \(customization\)**

    This data is associated with a particular user only and cannot be shared across users or user groups. Typical examples are portlet data or customized pages \(implicitly derived pages\). Because this data is scoped to a single user only, access control protection is simplified.

-   **Community data \(community\)**

    This data includes all resources that are modified during production. Typically, users and groups are allowed to modify or delete shared resources. Community resources are protected by access control.

-   **Configuration data**

    Configuration data is not store in a portal database domain. It is typically kept in property files. The property files are either protected by file system security or application server administration rights. This data defines the portal server setup, such as database connection, object factories, and deployment descriptors. This type of data typically is constant during the time a server node is running.


Feedback and likeminds portal database domains store data exclusively for the Feedback and LikeMinds applications.

## Database schema names

The table includes the default names that are used in the Configuration Wizard. Replace these values with the values in your environment; schema names must be different when the database is shared.

All table spaces are approximately 2.8 GB by default. The size increases with the use of the Java™ Content Repository function.

For some database software, such as DB2, the database name cannot exceed 8 characters and can contain letters and numbers only.

|Application|Database name|Space required|
|-----------|-------------|--------------|
|HCL Portal Used for the portal (at a minimum) or to hold all data. Stores information about user customization, such as pages, and user profile and login information.|reldb</br>commdb</br>custdb|Depends on the number of users and portal objects, such as pages and portlets.|
|Personalization,Web Content Manager Contains documents, personalization rules, personalization campaigns, and document library configuration information.
|jcrdb|Depends on the number and size of Personalization rules and campaigns, and the number and size of items and elements that are created in.Web Content Manager|
|FeedbackContains the information that is logged by your website for analysis of site activity and generating reports.|fdbkdb|Depends on the amount of traffic to the site. The amount of data that is logged per login-enabled page can vary.|
|LikeMinds Contains the recommendations that are displayed to users. The LikeMinds application analyzes the visitor's interactions with your website are and generates predictions.|lmdb|Depends on the amount of traffic to the site.|

## Database users

The table indicates types of objects that are owned by each user. The architecture allows each of the following users to exist in the same database. All table spaces are approximately 2.8 GB by default. The size increases with the use of Java Content Repository.

|Application|Database user|Function|
|-----------|-------------|--------|
|HCL Portal|releaseusr</br>communityusr</br>customizationusr|Core user who owns approximately 230 tables, which are used for HCL Portal core objects, which include tables that store the user customizations that are made to pages.|
|Java Content Repository|jcr|Java Content Repository user who owns approximately 100 tables. The number might be higher depending on usage.|
|Feedback|feedback|Feedback user who owns approximately 50 tables that are used for logging site and personalization usage.|
|LikeMinds|likeminds|LikeMinds user who owns approximately 15 tables that are used to hold the website usage analysis routines and recommendation text.|


