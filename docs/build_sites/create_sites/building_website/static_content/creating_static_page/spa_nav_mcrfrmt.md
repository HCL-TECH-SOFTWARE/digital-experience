# Navigation options for static pages

You can provide navigation for your static pages by using either the portal theme or by making use of the navigation microformat.

## Portal theme to provide navigation

To provide navigation for static pages by using the portal theme, remove the `<html>` and `<head>` tags from your static page content. If you do that, the portal renders the content as navigation.

## Navigation microformat to provide navigation

If you have full static HTML pages with beginning and ending `<html>` tags in your portal, you might want to include links to other pages in the portal. In this case you write your HTML code so that it includes a navigation portlet in the page and makes use of the navigation microformat. Refer to the following list of class attributes and the example of the microformat navigation option.

-   **first**

    This attribute denotes the first child in a list. This is required for CSS styling.

-   **last**

    This attribute denotes the last child in a list. This is required for CSS styling.

-   **expanded**

    This attribute denotes an expanded node. A node can only be expanded if it has children and its navigational state is set to **expanded**.

-   **collapsed**

    This attribute denotes a collapsed node. A node can only be collapsed if it has children and its navigational state is set to **collapsed**.

-   **page-actions**

    This attribute lists the actions that are available on the page. Typically, this list contains the actions used to expand or collapse the navigation nodes. For a page that is currently selected in the navigation, this list also contains the actions that are available for that page.

-   **selected**

    This attribute denotes the page that is currently selected in the navigation.

-   **pageoperation-expand**

    This attribute expands a collapsed node.

-   **pageoperation-collapse**

    This attribute collapses an expanded node.


## Example of the microformat navigation option

The following is an example of a microformat representation for a navigation for a page:

```
<div class="xoxo portal-navigation">
  <ul>
    <li class="first expanded">
      <a href='/wps/myportal/!ut/p/c5/ . . . . . '>Home</a>
      <ul>
        <li class="first">
          <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Web 2.0 Introduction</a>
        </li>
        <li>
          <a href='/wps/myportal/!ut/p/c5/e/'>Web 2.0 Portlets</a>
        </li>
        <li class="collapsed">
          <ul class="xoxo page-actions">
            <li class="pageoperation-expand">
              <a href='/wps/myportal/!ut/p/c5/e/'>Expand</a>
            </li>
          </ul>
          <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Static Page Aggregation</a>
        </li>
        <li>
          <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Navigation Page</a>
        </li>
        <li>
          <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Nav1</a>
        </li>
        <li>
          <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>IBM</a>
        </li>
        <li>
          <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>dnd</a>
        </li>
        <li>
          <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>derivable</a>
        </li>
        <li>
          <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>deriv1</a>
        </li>
        <li class="selected last">
          <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Container Test</a>
        </li>
      </ul>
    </li>
    <li class="collapsed">
      <ul class="xoxo page-actions">
        <li class="pageoperation-expand">
          <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Expand</a>
        </li>
      </ul>
      <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Administration</a>
    </li>
    <li>
      <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Resource Policy Editor</a>
    </li>
    <li>
      <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Resource Policy Editor CA</a>
    </li>
    <li>
      <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Domino Integration</a>
    </li>
    <li class="collapsed">
      <ul class="xoxo page-actions">
        <li class="pageoperation-expand">
          <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Expand</a>
        </li>
      </ul>
      <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Templates</a>
    </li>
    <li class="collapsed">
      <ul class="xoxo page-actions">
        <li class="pageoperation-expand">
          <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Expand</a>
        </li>
      </ul>
      <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Site 
      Map</a>
    </li>
    <li class="collapsed">
      <ul class="xoxo page-actions">
        <li class="pageoperation-expand">
          <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Expand</a>
        </li>
      </ul>
      <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>About</a>
    </li>
    <li>
      <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Login</a>
    </li>
    <li>
      <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Edit My Profile</a>
    </li>
    <li class="collapsed">
      <ul class="xoxo page-actions">
        <li class="pageoperation-expand">
          <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Expand</a>
        </li>
      </ul>
      <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Page Customizer</a>
    </li>
    <li>
      <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Page Properties</a>
    </li>
    <li>
      <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Template Parameters</a>
    </li>
    <li>
      <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Template and Application Properties</a>
    </li>
    <li>
      <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Template and Application Layout</a>
    </li>
    <li>
      <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Application Roles</a>
    </li>
    <li>
      <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Application Membership</a>
    </li>
    <li>
      <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Policy Status</a>
    </li>
    <li>
      <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Organize Favorites</a>
    </li>
    <li>
      <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Search Seedlist</a>
    </li>
    <li>
      <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>People Palette</a>
    </li>
    <li>
      <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Content Palette</a>
    </li>
    <li class="collapsed">
      <ul class="xoxo page-actions">
        <li class="pageoperation-expand">
          <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Expand</a>
        </li>
      </ul>
      <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Quick Links</a>
    </li>
    <li class="collapsed">
      <ul class="xoxo page-actions">
        <li class="pageoperation-expand">
          <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Expand</a>
        </li>
      </ul>
      <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Theme 
      Links</a>
    </li>
    <li>
      <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Open Tasks</a>
    </li>
    <li class="last collapsed">
      <ul class="xoxo page-actions">
        <li class="pageoperation-expand">
          <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Expand</a>
        </li>
      </ul>
      <a href='/wps/myportal/!ut/p/c5/ . . . . . /'>Application Root</a>
    </li>
  </ul>
</div>

```

## Inline navigation

The inline navigation feature can be enabled by setting the page metadata spa.ex.anchor.enabled to `true`. The default is `false`. With this feature, the markup of the static page can contain `<a>` links that point to different portal pages that use relative URLs. The href attribute is rewritten at rendering time and replaced by the portal URL that points to this page. The relative URLs in the source markup use the friendly path of the current page as the base URL. The relative reference is applied to this base URL and the resulting friendly path is used to address the target page. This feature works only if both the current page and the targeted page have a friendly path.

For example, if the current page has the friendly path /home/mypage and contains the following markup; `<a href="child">child_page</a>`, then this markup is rewritten to a portal URL that points to the page with the friendly name /home/mypage/child.

!!! note
  -   If the href attribute of an anchor link contains an absolute URL, no rewriting occurs and the link continues to point to the absolute URL.

  -   If the href attribute of an anchor link contains a URL that starts with /, then the rewriting logic resolves the URL as a friendly path. If no page for this path exists, the system assumes a link to another application on the same server and leaves the value of the href attribute untouched.

  -   If the href attribute of an anchor link starts with ?, then the remainder is considered query parameters and no rewriting occurs.


???+ info "Related information:"
  - [Using friendly URLs](../../../../../extend_dx/development_tools/portal_admin_tools/portal_user_interface/managing_pages/manage_pages_portlets/mp_friendly_url.md)

