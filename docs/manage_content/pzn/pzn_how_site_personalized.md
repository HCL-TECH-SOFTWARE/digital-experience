# How a site is personalized

Use this topic to understand how to define a personalized list of new articles for a website, such as a section of an intranet site for targeted employee bulletins or where the content of the site is tailored to the particular user.

## Developing a personalized portlet or website

1.  A web developer defines an area of a site that needs Personalization. This area may be a personalized list of new articles appearing in a website, a place on an intranet site for targeted employee bulletins such as changes to benefit plans, a product list on a commerce website, or any other place where the content of the site should be tailored to the particular user.
2.  A set of Resource Collections and Application Objects are defined. Together, these objects make up the business vocabulary that represents the terms and objects upon which Personalization decisions are based. These objects may be defined in the web page by pointing to an IBM® Java™ Content Repository item type. These objects may be generated through a set of Personalization wizards provided with IBM Rational® Application Developer; or they may be developed according to a set of public programming interfaces.
3.  The Resource Collections and Application Objects are registered to the Personalization server through the Personalization browser by importing .hrf files. These files define Resource Collections. The developer can also manually create the Resource Collection and Application Object references in the Personalization Browser.

    **Note:** The classes used for the Resource Collections and Application Objects must be on the classpath for both the application being personalized and for the Personalization browser web application. One way to achieve this task is to use a shared library placed either on the application server, or on the individual web applications. If you are using stock resource collections provided with HCL Portal, such as the Portal User Resource Collection or the Java Content Repository Resource Collection, these classpaths are already registered properly.

4.  Programmers now use the objects and terms defined through the Resource Collections and Application Objects to write rules and map those rules to content spots using campaigns.
5.  Portlet and website developers may either configure a Personalization Rule Display portlet to show the rule or content spot or may call into the Personalization programming interfaces to execute the appropriate rules or content spots which the programmers have defined.

**Note:** The Content Spot provides a way for the site developers to develop personalized pages before the rules are authored as well as a way to more loosely tie a particular rule to a page. It is then up to a programmer to "map" the Content Spot to a Rule using a Rule Mapping within a Campaign in a Personalization browser.

## Using Personalization Rules

1.  A user navigates to the page containing Personalization rules or content spots.
2.  The application invokes Personalization to find content or make decisions.
3.  Personalization identifies the correct rules to execute. If a Content Spot with the name given to execute is not found, a rule is looked for directly with this name.
4.  The Personalization server searches for all Rule Mappings for the Content Spot. The server looks for Rule Mappings which have started, but not yet ended.
5.  The Rule Mappings are ordered based on the priority and split values. The rules associated with each mapping are executed in turn until a rule returns content.

    **Note:** It is possible to configure Personalization so that only the first rule \(higher priority\) will get executed.

6.  For each rule executed, Personalization retrieves the user's profile and evaluates the rule to select the content which meets the conditions of the rule. The rules engine will invoke the resource engine as necessary to retrieve content pieces.
7.  The content is returned to the web page, and displays for the user.


**Next topic:**[Personalization terms](../pzn/pzn_concepts.md)


**Next topic:**[Personalization terms](../pzn/pzn_concepts.md)

**Related information**  


[Developing a personalized portlet](../pzn/pzn_demooverview.md)

