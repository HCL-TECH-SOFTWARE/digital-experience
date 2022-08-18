---
id: pznOverviewHelp
title: Personalization
---
import useBaseUrl from '@docusaurus/useBaseUrl';



Personalization allows a portal or website to choose which content appears for particular site visitors. For example, a site that uses Personalization can show different news articles to managers than to regular employees, or different information to valued customers.

You can define content through a number of applications, including HCL Web Content Manager. Personalization automatically detects the content definition from these applications.

After you define the content type, attributes of the content are shown to the rule author. The rule author can use these attributes to make conditions. These conditions can define if and when certain content is displayed or even if certain actions like database updates and triggered emails might occur.

## Personalization editor

Use the Personalization Editor to edit object content or information.

Selecting a new element from the Personalization Navigator automatically brings you to the Personalization Editor. You enter data that depends on the object chosen. You can also edit existing objects by highlighting the object in the Personalization Navigator, and clicking **Edit** in the Personalization Editor.

## Personalization picker

The Personalization picker is used to select a Personalization rule, content spot, resource collection or folder. The list of items that are displayed is filtered based on the context. For instance, from the Edit Layout and Edit Page Properties pages, you can select a rule to assign to a page or portlet. In these contexts, the picker shows items from the Navigational Rules folder and shows visibility rules. You can choose to view the items in either a list view or a tree view.

-   **[Personalization objects](pznObjects.md)**  
Personalization is controlled by the following types of objects: rules, campaigns, rule mapping, rule events, content spots, resource collections, application objects, and publish server.
-   **[Types of rules](pznRulesOverviewHelp.md)**  
There are seven types of rules that you can create with personalization: select content, update, profiler \(also called segment\) binding, email, recommended content, and visibility.
-   **[Rule elements](pznRuleElements.md)**  

-   **[Access control for personalization objects](pznAccessControl.md)**  
If you work with Personalization, you have a role that is assigned to you. This role defines the tasks that you can do. You might be able to personalize folders and files, or you might have read-only access. You might also have the highest level of control, the administrative role that gives you permission to determine who has access to certain objects.
-   **[Creating and editing personalization campaigns](pznCreateCampaign.md)**  
Campaigns are a means of organizing and implementing sets of personalization behavior within websites or as part of email promotions. A useful analogy is an advertising campaign that targets specific audiences with high priority information for a specified time. Use campaigns to preferentially display campaign-related content in the Content spots of a website, sending directed email with campaign-specific information to a group of email recipients, or both. To accomplish such a goal, a campaign contains a set of rule-to-content spot mappings, start dates, and stop dates, and optionally, email promotions.
-   **[Creating personalization content spots](pznCreateContentSpotHelp.md)**  
A content spot is a placeholder or slot for a rule on a web page or a rule in the body of an email message. When the page is viewed, the content spot uses its rule mapping to determine which rule to run. When the rule is run, any actions that are defined within the rule take place.
-   **[Creating a rule](pznCreateRule.md)**  
Rules define how content spots respond based on the site visitor.
-   **[Creating a rule event](pznCreateRuleEvent.md)**  
Every time that the rule event fires, Personalization collects the users through the first rule. Then, Personalization runs the second rule for each user in the user that is set from the first rule. To create a rule event, you must have a rule that selects certain users from a resource collection. For example, users between the ages of 25 and 35. You must have a rule to serve as the rule event.
-   **[Creating and editing a rule mapping](pznCreateRuleMapping.md)**  
Rule mappings can be changed at any time and are effective immediately upon publication or upon the spot mapping start date, whichever comes later. Rule mappings expire on the rule mapping end date.
-   **[Creating and editing resource collections](pznCreateResourceCollection.md)**  
When you create a resource collection, you must assign it a unique name. That name must be unique among all of the resource collections in the current workspace. Renaming a resource collection that has rules that are created against it prevents the Personalization engine from correctly running those rules.
-   **[Creating and editing application objects](pznCreateAppObject.md)**  
Application objects, along with resource collections, are Personalization authoring tools that are used for creating and implementing rules. Application objects make rules available to the rule author. They are available as an HTTP session. An application object is a current object, whereas a resource collection is not current and exists in a data store.
-   **[Exporting and importing Personalization objects](pznImport.md)**  
You can export a Personalization object to your local file system, and then import the Personalization object into the Personalization Navigator. For example, you might want to import a Personalization object into the Personalization Navigator to back up the Personalization object or to export the object to another server. Any item that you can select from the Personalization Navigator is an example of a Personalization object.
-   **[Versions](pznVersions.md)**  

-   **[Personalized list](pznPersonalizedList.md)**  
The **Personalized List** portlet allows a user to display personalized content without having to build a custom JSP portlet.
-   **[Creating a publish server](pznCreatePublishServer.md)**  


