# The role of the In Context tag in presentation templates \| CTC for HCL Digital Experience

The Component in Context HTML component uses the InContext tag to set up a context for the execution of the main component. Setting context includes setting paths, categories, and templates into the request, then running the component in either a selected context or the current page context.

The following diagram shows how the "Component in Context" HTML component and the "Component in Context with List Presentation Override" HTML component sets up a context for lists, slideshows, carousels, and blocks. The process enables the Content Template site to reuse components, but they are customized for each area of the site.

![This diagram describes how list components and list presentations work together to render the final component.](../images/componentincontext.jpg)

1.  The page component for a list, slideshow, or carousel selects a "list component" to retrieve content items, and a "list presentation component" to display them. An optional "context override" can also be selected to allow context to be retrieved from a context other that the current page. Depending on the type of page component, other attributes can be entered, such as the authoring template or categories to restrict to.

2.  The presentation template sets up a context for the rendering. This includes:

-   Setting the Context Override by using the InContext tag. The Context Override defaults to the current page context if no selection is made.

-   Setting the additional attributes that are entered on the page component, such as the authoring template or categories to restrict to. These are set into request attributes that can be read by menu components when they are rendered. The key for the request attribute is set in the menu component.

-   Setting the selected list presentation component into the request attribute "ListPresentationId". This list presentation is used when the list component is rendered. For more information, see [Overriding the list presentation](../panel_help/wcm_dev_listpres_override.md)

    The presentation template uses a "Component in Context" HTML component to set up the context. There are two versions of this HTML component. A simpler HTML component called "Component in Context" that just sets up the context override, and a more advanced HTML component called "Component in Context with List Presentation Override" that sets up all the items in the preceding list. The "Component in Context with List Presentation Override" component contains this markup that sets up the context:

    ```
    [Plugin:RequestAttribute key="ListPresentationId" value="<The ID of the list presentation component>"]
    [Plugin:RequestAttribute key="templates" value="<The names of the authoring templates to restrict to>"]
    [Plugin:RequestAttribute key="categories" value="<The names of the categories to restrict to>"]
    [Plugin:RequestAttribute key="currentCategories" value="<The names of the current categories to restrict to>"]
    [InContext uuid="<The ID of the Context Override>"]
      [Plugin:RequestAttribute key="siteAreaPath" value="<The site area path to restrict the Personalization components to>"]
      [Element context="portletContext" type="content" key="<The name of the list component element>"]
    [/InContext]
    ```

3.  The list presentation component might refer to the Page Component to retrieve information like the List Title and the CSS Styling.


**Parent topic:**[Page component configuration items ](../ctc/ctc_arch_prestemp_compconfig.md)

**Related information**  


[Creating an In Context tag ](../panel_help/wcm_dev_tag_incontext.md)

