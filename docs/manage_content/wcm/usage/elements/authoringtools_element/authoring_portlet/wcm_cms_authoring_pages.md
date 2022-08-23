# Custom portal pages for authoring

You can create a new HCL Digital Experience portal page to act as the home page of your authoring system.

You can create separate subpages under an authoring home page. For example:

-   add an authoring portlet to one subpage
-   add web content viewer portlets to other subpages to allow users to preview different parts of a website

You can also create pages specifically for different types of users. For example, you can create a separate page for your site designers and content creators. The authoring portlets that you add to each page can be configured specifically for each user type.

## Creating new pages

When new pages are created that contain an authoring portlet, add the following metadata parameter to the advanced settings in the page properties:

-   Parameter: resourceaggregation.profile
-   Value: profiles/profile\_wcmauthoring.json

## Example authoring home page

In this example, you have two users groups; site designers and content creators. The website is split between a design library and a content library.

To create a shared authoring environment for both sets of users you would create a parent home page with separate subpages for each group, plus a third subpage that is used to preview the site:

|Site designers page|Content creators page|Header|
|-------------------|---------------------|------|
|-   Includes an authoring portlet that is configured to use both the design and content libraries.
-   Only site designers can access this page.

|-   Includes an authoring portlet that is configured to use only the content library.
-   Only content creators can access this page.

|-   Includes a web content viewer portlet that is used to preview the website.
-   Both site designers and content creators can access this page.

|


