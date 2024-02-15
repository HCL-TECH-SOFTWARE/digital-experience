# Personalization objects


Personalization is controlled by the following types of objects: rules, campaigns, rule mapping, rule events, content spots, resource collections, application objects, and publish server.

## Personalization navigator

Use the Personalization Navigator to navigate, create, and delete Personalization objects entirely from a graphical user interface.

The Personalization Navigator consists of a tree directory view of the Personalization objects. Select a resource by clicking the box next to the object name. Click the plus or minus sign next to a folder to expand or collapse its contents.

## Workspaces and folders

## Rules

Rules are used to define how your website interacts with individual and groups of website visitors. Rules are composed of easy-to-read logic statements that, in their final form, specify how to evaluate various conditions and what actions to take based on those conditions.

## Campaigns

Campaigns are a means of organizing and implementing sets of personalization behavior within websites or as part of email promotions. A useful analogy is an advertising campaign that targets specific audiences with high priority information for a specified time. Use campaigns to preferentially display campaign-related content in the Content spots of a website, sending directed email with campaign-specific information to a group of email recipients, or both. To accomplish such a goal, a campaign contains a set of rule-to-content spot mappings, start dates, and stop dates, and optionally, email promotions.

When a campaign is active in the runtime environment, its rule mappings take precedence over mappings in the Normal View. A campaign can contain rule mappings for some or all of the content spots on a site.

It is possible to have multiple campaigns active simultaneously. The priority settings of the active campaigns dictate which campaign rule mapping is used. The campaign with the highest priority 'wins', and its rule mappings are used. If multiple active campaigns have the same priority setting, the rule mapping that is used for a content spot is determined randomly according to the relative split ratios.

## Rule mapping

A rule mapping defines a correspondence between a rule and a Content Spot. The rule mapping can have a start and end date and a split that is associated with it. If you have the authority, you can publish rules and spot mappings from the workspace server to the runtime environment.

## Rule events

A rule event is a user-driven event rather than a seasonal event \(such as a campaign\). If a user triggers a certain rule, Personalization can be configured to update or replace email promotions or campaigns, which are based on that rule. For example, a customer does not revisit a web retail site for a certain time. A rule event can be triggered to send out an email coupon to that customer as an incentive.

## Content spots

A content spot is a placeholder or slot for a rule on a web page or a rule in the body of an email message. When the page is viewed, the content spot uses its rule mapping to determine which rule to run. When the rule is run, any actions that are defined within the rule take place.

## Resource collections

Personalization works with content stored within resource collections. A resource collection specifies the Java classes that are used to access the resources in the customer content store. Resource collections are similar to database tables. However, a resource collection does not have to be an actual database table. It can be a file system, an LDAP repository, an XML store, or virtually any content store accessible by Java.

## Application objects

Application objects, along with resource collections, are Personalization authoring tools that are used for creating and implementing rules. Application objects make rules available to the rule author. They are available as an HTTP session. An application object is a current object, whereas a resource collection is not current and exists in a data store.

Information from a resource collection can be used as an application object, and an application object can be placed in a resource collection.

## Publish server

Personalization resources are published to a server through the Personalization Navigator. When on the Publish Server, your resources are live. You can also view the status of publish jobs you ran since restarting the server.

