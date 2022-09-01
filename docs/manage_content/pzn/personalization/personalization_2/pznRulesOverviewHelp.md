---
id: pznRulesOverviewHelp
title: Types of rules
---




There are seven types of rules that you can create with personalization: select content, update, profiler \(also called segment\) binding, email, recommended content, and visibility.

## Binding rule

Binding combines actions and profilers to specify actions when defined conditions are encountered. Returned content can be sorted or filtered before display or use. Actions can be controlled by always, exclude, and otherwise blocks. In addition, the total number of items that are used can be limited.

The always and exclude blocks are always performed no matter what the outcome of the profiler execution, but the otherwise block is only run if none of the profilers match. An otherwise block works the same as an always block in that it adds items to the results, but for an exclude block, you actually choose an action that defines items that you do not want to include in the results. For example, on a shopping site, you might want to exclude items that are already purchased.

Binding rules can contain the following elements: profilers, quick profiler, profiles, Do Action, Order As Is, Show all items.

If you select to use one of the available profilers you, select one or more profiles for this portion of the binding to categorize your website visitors, session attributes or other attributes.

## Email rule

The email rule sends an email message to a recipient or list of recipients. An email rule that is assigned to a content spot sends an email message when the content spot is triggered. For example, at the time a website visitor views a page with the content spot.

Email promotions must be part of a campaign.

Email rule type can contain the following elements: add recipient, sender, cc recipient, bcc recipient, subject, body URI.

## Profiler rule or segment

Profilers, also called segments, are typically used to categorize a site visitors according to their user properties. Profilers can also be used to define other conditions that are based on such factors, such as the current date and time or other implicit and explicit application object properties. Profilers can also make decisions that are based on the current user's session attributes and request attributes and parameters, along with category and action counts.

Profilers can be constructed to define the conditions of arbitrarily named profiles, or can be defined in terms of other profilers. For example, you can create a profiler that evaluates as true if a profile is in any, all, or none of a group of other profiles.

Profiler rules can contain the following elements: profiles, resource attributes, is empty, value, add condition, add profile

## Recommended content rule

When you create a Recommend Content rule, you specify one of three recommendation methods. The recommendation methods are how the current user navigated the site, preferences that are explicitly expressed by the user, and association with content returned from a rule.

Recommended content rules can contain the following elements: content, do action.

-   **how the current user navigated the site**

    Use this method to generate recommendations that are based on actions the user took on items while navigating the site. This method is associated with the LikeMinds Clickstream engine. Your website captures actions with the Action bean. The Action bean collects the action performed the item resource and resource collection, and then logs the data for LikeMinds to use later.

-   **preferences explicitly expressed by the user**

    Use this recommendation method to generate recommendations that are based on users' ratings of items. This method is associated with the LikeMinds Preference engine. Items map to a piece of content and are represented by resources and resource collections.

    Your website captures ratings using the Rating bean. The Rating bean collects the rating, the item resource, and resource collection, and then logs the data for LikeMinds to use later.

-   **association with content returned from a rule**

    Use this recommendation method to generate recommendations that are based on market-basket analysis. This method associates items that a current website user has interest in \(such as an item in their shopping cart\) with items that others users have had interest in or have purchased. This method is associated with the LikeMinds Item Affinity engine.

    Item affinity rules use the LikeMinds transaction data being collected. They offer a method for generating recommendations from a known set of resources \(actually the results of another rule returning the same resource type\).


Before you use **Recommend Content rules**, check with your system administrator to see which LikeMinds engines are configured and running on the production runtime server. If you use Preview, verify that LikeMinds transaction data is available for you to preview.

## Select content rule

The Select Content rule displays content to a user based on the parameters that are set in the rule. Users with certain characteristics receive different content from other users.

Select content rules can contain the following element: resource attribute, is equal to, add condition, order as is, show all items

## Update rule

Update actions are used to store content or data in the user profile, an application object, or other Content sources.

You can add multiple actions when you create an update rule. Click **add Expression** to add another expression to perform. Unlike multiple conditions within Select Content and Profiler rules, multiple expressions within an Update action rule are always considered to be connected by "and."

Update rules can contain the following elements: resource attributes, set to, and value.

## Visibility rule

Visibility rules are typically used to determine what a user sees, or what is targeted towards a user. They might use any type of information, including LDAP attributes, time of day, or session information to determine usability.

Visibility rules can contain the following elements: show or hide, resource attributes, is empty, value, and add condition.

