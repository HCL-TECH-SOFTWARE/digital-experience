# Content spots 

Learn what a content spot is, why it is used and how to personalize content spot for a rule on a Web page.

A content spot is a placeholder or slot for a rule on a Web page. When the page is viewed, the content spot uses its rule mapping to determine which rule to execute. When the rule is executed, any actions defined within the rule take place. Each content spot has a unique name. A content spot's content type must be defined when it is created and should not be changed.

Content spots are created by developers using the Content Spot wizard in Rational Application Developer and also in the Personalization workspace by selecting **New \> Content Spot**. After creating the spot, the developer can place it on a JSP, or invoke it programmatically from any Java class.

To make the spot available to the Personalization engine, it should be on the classpath of any application which invokes it. If you are using a portlet or Web project in Rational Application Developer, the classpath information updates automatically when you deploy the application.

To make the content spot available to the Personalization authoring portlets, the content spot must be created in the workspace by selecting **New \> Content Spot**. The name given to the content spot in the authoring portlet should match the display name given to it in the Rational Application Developer wizard or the name by which it is invoked using the com.ibm.websphere.personalization.ContentSpot programming interface. Content spots may be placed into folders by either using a display name which fully qualifies this folder, or by setting the execution scope to match the folder at runtime. So, if you want your content spot to be called MyDataSpot in a folder called ProductData, then the content spot's display name should be specified in the wizard as ProductData/MyDataSpot.

Users of the Personalization workspace specify which rule to place in a content spot. This is also known as mapping the rule to the content spot, or creating a rule mapping. When finished, a workspace user with authority to publish rules and rule mappings publishes them from the workspace server to the run-time environment. Publishing is optional, and is used to move objects between servers. Content spots, rules and all other objects created in Personalization are live as soon as they are created. Rule mappings can be changed at any time and are effective immediately upon publication, or upon the rule mapping start date, whichever comes later. Rule mappings expire on the rule mapping end date.

Content spots can be accessed in the workspace through the Personalization authoring portlets. You can see a list of all the content spots in the project, along with their content type and the name of their mapped rules, by navigating the browser view.

Use of content spots is optional. The com.ibm.websphere.personalization.ContentSpot class can be used to directly execute a rule by the rule name.

**Parent topic:**[Personalization terms ](../pzn/pzn_concepts.md)

**Previous topic:**[Rules ](../pzn/pzn_rules.md)

**Next topic:**[Rule spot mappings ](../pzn/pzn_mappings.md)

**Parent topic:**[Personalization terms ](../pzn/pzn_concepts.md)

**Previous topic:**[Rules ](../pzn/pzn_rules.md)

**Next topic:**[Rule spot mappings ](../pzn/pzn_mappings.md)

