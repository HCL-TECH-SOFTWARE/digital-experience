---
id: oob_pzn_rule_link
title: Link the rule to a content spot on your site
---
import useBaseUrl from '@docusaurus/useBaseUrl';



A content spot is a placeholder for a personalization rule on a web page. When you create a content spot, you associate a business rule with it. This association is referred to as mapping or linking the personalization rule to a content spot.

When the page is viewed, the content spot uses its rule mapping to determine which rule to execute. When the rule is activated, any actions defined within the rule take place. Each content spot has a unique name. A content type of the content spot must be defined when it is created and cannot not be changed.

1.  On the Business Rules page, click **New** \> **Content Spot**.

2.  For **Default Mapping**, click the search icon and select a rule. For this example, you can select Visibility Rule 1.

3.  Save your content spot.


A web developer must add the content spot information to the appropriate JSP.

