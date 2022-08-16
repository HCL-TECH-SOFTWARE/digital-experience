---
id: wcm_dev_elements_navigator_types
title: Navigator type examples
---
import useBaseUrl from '@docusaurus/useBaseUrl';



You can use navigator elements to display different sections of a site framework in different ways.

## Breadcrumb navigators

If a website is large and complex, a user can easily lose orientation. A breadcrumb allows the user to see the position of the current web page within the website and the logical path back to the highest level of the site framework. A breadcrumb does not provide the actual path that the user has traversed in the website; the **Back** button in the browser provides this. A breadcrumb is the orientation device that shows a user where the displayed web page fits within the site framework.

You use the following configuration settings to create a breadcrumb navigator:

|Parameter|Setting|
|---------|-------|
|**Start Type**|Current site area|
|**Include Start**|Yes|
|**Ancestor Level**|All|
|**Descendant Level**|None|
|**Preceding siblings Level**|None|
|**Next Siblings Level**|None|
|**Show Top**|No|
|**Show Content**|Yes|
|**Expand navigator to display current site area**|No|
|**Expand current navigator branch one level**|No|
|**Highlight current site area or content using final navigator result design**|No|

## Site map navigators

A site map provides, at a glance, the framework of your site. A site map is a navigator component that displays that part of the site framework that you define.

To create a site map, the navigator is configured as follows:

|Parameter|Setting|
|---------|-------|
|**Start Type**|Current Top Level Site Area|
|**Include Start**|Yes|
|**Ancestor Level**|None|
|**Descendant Level**|2 Levels|
|**Preceding siblings Level**|None|
|**Next Siblings Level**|None|
|**Show Top**|No|
|**Show Content**|No|
|**Expand navigator to display current site area**|No|
|**Expand current navigator branch one level**|No|
|**Highlight current site area or content using final navigator result design**|No|

