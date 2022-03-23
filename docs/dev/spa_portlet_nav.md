# The Navigation portlet 

The Navigation portlet allows you to add dynamic portal navigation to a static page. When writing a static portal page you can configure the starting point of the navigation and the number of navigation levels by using the initialization parameters.

## Unique name

You can address the Navigation Portlet by its unique name: `wps.p.SpaNavigation` .

## Usage

You can embed the navigation portlet into a static page by using the semantic tag `portlet-window` described in the topic about class attributes for portlets on static pages. When rendering the page, the server replaces the semantic tag with the portlet microformat, and the portlet renders the navigation by using the navigation microformat. The portlet accepts the following configuration parameters that you can embed by coding a definition list \( `<dl>` \) in the static page:

-   **root**

    This identifies the node where the navigation starts that the portlet renders. This parameter accepts a path-like expression that is relative to the current selection. Path segments can include the OID or unique name of a node. The period character \( **.** \) or the double period \( **..** \) have the same meaning as in relative URLs. If you omit this parameter, the navigation starts at the current node.

-   **levels**

    The number of child levels that start at the node that is identified by the `root` parameter. A value of `-1` means all levels. This is also the default if you omit this parameter.


## Example

The following example produces a single level navigation of the siblings of the current page:

```
<div class="portlet-window" name="main-navigation"
     style="portlet-definition:wps.p.SpaNavigation">
     <dl>
     <dt>root</dt>
     <dd>..</dd>
     <dt>levels</dt>
     <dd>1</dd>
     </dl>
</div>
```

The following example shows the quick link navigation:

```
<div class="portlet-window" name="quick-navigation"
     style="portlet-definition:wps.p.SpaNavigation">
     <dl>
     <dt>root</dt>
     <dd>ibm.portal.Quick Links</dd>
     </dl>
</div>
```

**Parent topic:**[Portlets for adding dynamic elements to static pages ](../dev/spa_portlets.md)

**Related information**  


[Class attributes for portlets on static pages ](../dev/spa_plt_mcrfrmt.md)

