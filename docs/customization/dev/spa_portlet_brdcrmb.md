# The Breadcrumb Trail portlet

The Breadcrumb Trail portlet allows you to add the navigation path to your static pages. The breadcrumb trail starts at the content root and goes down to the currently selected static page.

## Unique name

You can address the Breadcrumb Trail portlet by its unique name: `wps.p.SpaBreadCrumbTrail` .

## Usage

You can embed the Breadcrumb Trail portlet into a static page by using the semantic tag `portlet-window` described in the topic about class attributes for portlets on static pages. When rendering the page, the server replaces the tag with the portlet microformat, and the portlet renders the breadcrumb trail by using the navigation microformat.

## Example

The following example produces a breadcrumb trail navigation for the current page:

```
<div class="portlet-window" name="breadcrumb"
     style="portlet-definition:wps.p.SpaBreadCrumbTrail">
</div>
```

**Parent topic:**[Portlets for adding dynamic elements to static pages](../dev/spa_portlets.md)

**Related information**  


[Class attributes for portlets on static pages](../dev/spa_plt_mcrfrmt.md)

