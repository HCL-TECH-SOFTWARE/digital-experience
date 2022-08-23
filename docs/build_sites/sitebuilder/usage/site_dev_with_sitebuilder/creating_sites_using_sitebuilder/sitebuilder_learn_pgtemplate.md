---
id: sitebuilder_learn_pgtemplate
title: Page templates
---
import useBaseUrl from '@docusaurus/useBaseUrl';



Page templates are reusable assets that you can use to quickly assemble new sections of entire websites that are based on repeatable patterns. For example, if you routinely must add sections to your website for new products, you can assemble page templates into a section template.

**Page Templates** lists all the available page templates in the portal site library. All pages and page templates are stored in the portal site library. However, the content for the pages can be stored in a different content library. Only the page templates included with HCL Portal store content in the portal site library.

## Content Template Catalog page templates

The Content Template Catalog includes a collection of ready-to-use page templates. The page templates are organized into a common pattern of an index page with a child details page.

## Custom page templates

In addition, the page templates that are available for your immediate use, you can create new page templates. You can create a new page with the wanted layout and content. Then, move the page to **Hidden Pages** \> **Page Templates**. The move option is available from the portal site toolbar from the **More**.

## Template edit options

From the wizard, users cannot add more pages. They can work only with the pages that you include in the template. However, they can remove pages, rearrange the page order, and edit page properties. In addition, either you or the person that is running the wizard can make the following changes after the page is added to the **Site Structure** or **Section Structure**:

-   Change the template title and URL
-   Select where the default content for the template is copied from. It can either include content from the template default site area, a selected site area, or both
-   Change the page template
-   Specify a unique name for the page

## Maximum number of pages

For performance reasons, the system administrator can limit the number of pages that can be included in a site or section template. The initial page limit is set to 200 pages. You cannot create a site map that exceeds the page limit that is set by the administrator.

The page limit setting is a Site Builder portlet parameter called **SiteTemplateSiteMapMaxSize**.


