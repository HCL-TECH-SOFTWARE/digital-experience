# Creating a page from the site toolbar

A page displays content, such as portlets and other pages. Pages organize your site information. As you create pages, you also create new navigational elements to the site. You can create a page under an existing page or you can create a page that is a peer to an existing page. When you create a page you can also reference an existing page, apply a layout, and select supported markups.

Your access role determines the kind on page you can create.

-   **Public pages**

    You must have the Administrator, Manager, or Editor role assignment to create a public page.

-   **Custom page \(derived page\)**

    You must have the Editor and Privileged User role assignment to create a custom page.

    If you have Editor role on the derived page, you can change anything except markups.

    If you have a Privileged User role on the derived page, you can change the title, skins, or layout on the derived page. This role is restricted for a layout, by the derivation parent page.


**Note:** Do not use the Edit Layout portlet to edit pages with static layout that were created using the site toolbar or vice versa. The Edit Layout portlet might not display static layout containers as expected and vice versa.

If you reference an existing page, layout, supported markups, locks, skins, portlet list, and locale-specific titles are predetermined by the existing page you reference. Any changes to the original page results in the same change to all pages that are referenced.

When you create a page, you can give the page a friendly URL. Friendly URLs must be unique and the portal validates that the name you enter is unique.

1.  Navigate to the page where you want to add the new page.

2.  Turn on **Edit Mode** in the site toolbar.

3.  Select the **Create** tab from the site toolbar.

4.  From the Page tab, select the template you would like to use. You can filter the template results by typing search terms into the input box. The default template is the Basic template.

5.  Enter the page title.

6.  Type a unique URL in **Friendly URL Name** or use the name that was generated for you.

    This name creates a custom address for your page that is easy to remember and share.

    **Note:** When creating a URL Mapping or creating or modifying a page, make sure it is unique. For example, do not use strings such as home, ibm, ibm.com. Also do not use strings that were already used as URL Mappings or friendly URLs in your portal. Otherwise browser redirect loops might occur, sometimes without an error message. To determine such strings, use the XML configuration interface to export your portal. Then scan the exported file for the string that you want to use for your URL Mapping or friendly URL. By default, the portal ensures that the friendly URL name that you enter is unique. However, this enforcement does not include derived pages with an inherited friendly name and siblings that are moved in by a personalization rule.

7.  Specify the page insertion point. This determines where your page will be located in the page hierarchy.

8.  You can modify the advanced settings on the Page Setting window. You can specify a unique name for the page and a description for the page, or make the page private by selecting **Make this page private**.

9.  Click **Create** to create the page.


**Related information**  


[Setting up a web content fallback page ](../admin-system/mp_wcm_fallback.md)

