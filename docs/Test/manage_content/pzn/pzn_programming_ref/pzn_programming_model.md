# Programming model

Personalization builds on the same programming model used by WebSphere Application Server.

Two components of that model are Java Server Pages \(JSP\) and business logic \(JavaBeans™ and enterprise beans\). JSP files enable you to effectively separate HTML coding \(presentation\) from business logic. You isolate your business logic in beans that the Web page author embeds in the JSP.

The term developer could refer to Web page authors or programmers. The developer does not need programming skills to author JSPs that access databases and reusable Java components. The author only needs to know the type of content that the bean, servlet, or other Java component adds to the page. The programmers create the reusable Java components and provide the Web page authors with the component names and properties. The database administrators provide the Web page programmers with the database access and table information.

![run-time model](../../../images/runtime1.jpg)

The model expands three Web team roles:

-   The business users

    The business users understand the business goals that the Web site or Web application must achieve. They understand the business conditions and business rules that must be factored into the Personalization solution. For example, the business users know the characteristics by which to categorize users for effective implementation of the business rules.

-   The developer

    The developer understands Web site development and can use Rational Application Developer \(or similar tools\) to create and publish Web pages and sites. The developer works with the business user to determine where personalized content should appear and creates content spots of the appropriate type at the proper locations on the Web pages.

-   The administrator

    This team member is the Web content expert and/or server administrator. The administrator knows what content already exists, where it is stored, the people who provide the content, how often the content is updated and other details. This person understands how to categorize content and helps the business users organize and target content for categories of users.



