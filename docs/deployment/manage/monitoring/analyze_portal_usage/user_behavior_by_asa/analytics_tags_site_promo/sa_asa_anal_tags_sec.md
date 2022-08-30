---
id: sa_asa_anal_tags_sec
title: Security for analytics tags and site promotions
---
import useBaseUrl from '@docusaurus/useBaseUrl';



Security for analytics tags allows you to administer which users can view, create, or assign analytic tags, including site promotions. The portal provides a virtual resource for site promotions and roles on this virtual resource.

The portal provides the virtual resource ANALYTICS\_TAGS to administer which users can manage analytics tags. This resource allows you to determine user rights that are related to analytics tags. The following list explains which roles users need in order to manage analytics tags. The user actions correspond to the usual portal roles. Privileges are inherited.

In a default portal installation the group wpsadmins has the role EDITOR. There is no role assigned to the anonymous user or to the group All authenticated users. Note that all users need to have at least the EDITOR role on the virtual resource ANALYTICS\_TAGS and the USER role on the resource to be able to edit analytics tags assignments.

## USER

-   Can view existing analytics tag mappings.
-   Can view existing analytics tag assignments on all resources, for example pages or portlets, on which the user has at least the USER role.

## EDITOR

-   Includes all USER actions.
-   Can create analytics tags and analytics tag mappings.
-   Can add and remove analytics tag mappings on all resources, for example pages or portlets, on which the user has at least the USER role.

## MANAGER

-   Includes all USER and EDITOR actions.
-   Can delete analytics tags.

**Note:** In a default portal installation only the group wpsadmins has the MANAGER role on ANALYTICS\_TAGS.

