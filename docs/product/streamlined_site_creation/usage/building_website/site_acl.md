---
id: site_acl
title: Setting up access
---
import useBaseUrl from '@docusaurus/useBaseUrl';



Access controls allow you to assign access to who has the ability to view rendered constant and pages, and who has the ability to edit or administer content, pages, or features.

Setting up access is covered in more detail in the Administering and Securing sections of the documentation, but there are some things to consider when setting up access for a website.

-   Create groups for each type of user of your site. For example, if you have a set of users who need edit access to a site, create an Editors group and assign your editors to this group.
-   Use library inheritance so that access is automatically inherited down to each item in a library. Inheriting permissions, instead of explicitly defining access rights on individual items, simplifies access rights maintenance and improves overall system performance. Define role assignments as high as possible in the library so that they apply to the largest set of items. Explicitly defined permissions are a powerful and flexible way to control access to an item, but when the same user or group is being granted the same role on all items within an area, or across an entire library, then inherited permission is the best option.
-   Use Workflow security to assign access to groups or users at different stages in a workflow cycle.

