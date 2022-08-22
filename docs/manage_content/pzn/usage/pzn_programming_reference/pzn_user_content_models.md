# User and content models

The first step in developing a Personalization solution is to analyze your business conditions and events to determine the users and content to be targeted. The business users and administrators are primarily responsible for this task.

After this analysis is completed, focus on the user, content and other data for your Personalization solution. The subsequent tasks include:

-   Developing a user model and a content model

    The user model consists of the properties \(attributes\) of the user \(that is, the typical Web site visitor\), such as name and address. Similarly, the content model consists of properties of the Web content, such as title and author. Another term for model is schema.

    If you have already stored user data, some level of user model already exists. In such cases, the decision becomes whether to create a new model, or adapt the existing model to meet the requirements for your Personalization solution. You will also need to ensure that the user model and content model facilitate mapping users to content. For example, if you want to display news headlines that are of interest to the site visitor, the user model might include a property called `user_interests` that is a list of the topics in which the user is interested. The content model, for article content, could include a property `topics` that is a list of the subjects covered in the article. To support mapping a user interest to an article topic, you would ensure that there is an understandable relationship between possible values of `user_interests` and values of `topics`.

-   Implementing the user and content models

    You must implement the user and content data models. If database tables matching the data models do not exist, implementing the data model involves creating and populating the data store for the user and content data. If the database tables exist, you might need to combine data from multiple tables, or add columns to create a user or content resource that matches the corresponding data model. Reusing existing tables might involve combining data from multiple tables to create a user or content resource.

-   Implementing the Personalization APIs for accessing user, content and other resources

    After you implement the user and content data stores, you must enable the Personalization runtime environment to access the data stores. This task involves creating implementations of the Personalization APIs for accessing resources in the customer data store. You can either implement the `ResourceManager3` and `ResourceDomain3` interfaces manually or you can use the wizards provided with Rational Application Developer to generate resources for SQL Server databases or LDAP repositories. There are also implementations of the Portal user as a Personalization resource and a resource collection implementation for accessing the DB2 Content Manager.


**Parent topic:**[Personalization programming reference](../pzn/pzn_programming_reference.md)

