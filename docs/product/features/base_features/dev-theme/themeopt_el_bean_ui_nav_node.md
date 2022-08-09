# uiNavigationNode

Provides access to a navigation node in a navigation model.

To access the uiNavigationModel Bean, you must use the [uiNavigationModel](../dev-portlet/dgn_ptlnavig.md#uinavmodel) tag and define the variable name that you want the bean to be available under. For example:

```
<portal-navigation:uiNavigationModel var="uiNavigationModel"
    mobileDeviceClassTest="smartphone/tablet">
uiNavigationNode\_attribute</portal-navigation:uiNavigationModel>
```

Attributes:

-   **contentNode**

    Returns the content node that is associated with the navigation node.

    Example:

    ```
    ${uiNavigationModel.selected.contentNode}
    ```

    Parameters: none

    Returns: [ContentNode](themeopt_el_bean_content_node.md). Never null.

-   **description**

    The description of the navigation node.

    Example:

    ```
    ${uiNavigationModel.selected.description}
    ```

    Parameters: none

    Returns: [Description](themeopt_el_bean_description.md) object for the navigation node; it is never null. You can use the value of the title object to retrieve the description in current locale.

-   **isDraft**

    Returns whether the navigation node is part of a project or not.

    Example:

    ```
    ${uiNavigationModel[wp.selectionModel.selected].isDraft}
    ```

    Parameters: none

    Returns: Boolean; true if the page is a draft page. False if it is not.

-   **isHidden**

    Returns whether the navigation node is hidden or not.

    Example:

    ```
    ${uiNavigationModel[wp.selectionModel.selected].isHidden}
    ```

    Parameters: none

    Returns: Boolean; true if the page is hidden. False if it is not.

-   **isInSelectionPath**

    Returns whether the navigation node is part of the selection path. It returns whether a page is in the breadcrumb trail, but not necessarily the currently active page.

    Example:

    ```
    ${uiNavigationModel[wp.selectionModel.selected].isInSelectionPath}
    ```

    Parameters: none

    Returns: Boolean; true if the page is part of the selection path. False if it is not.

-   **isPrivate**

    Determines if the current node is private.

    Example:

    ```
    ${uiNavigationModel.selected.isPrivate}
    ```

    Parameters: none

    Returns: Boolean, true if the page is private, otherwise false.

-   **isSelected**

    Returns whether the navigation node is selected or the currently selected page.

    Example:

    ```
    ${uiNavigationModel[wp.selectionModel.selected].isSelected}
    ```

    Parameters: none

    Returns: Boolean; true if the page is selected. False if it is not.

-   **metadata**

    The metadata map of this navigation node.

    Example:

    ```
    ${uiNavigationModel.selected.metadata['com.ibm.portal.Hidden']}
    ```

    Parameters: none

    Returns: [Metadata](themeopt_el_bean_meta.md), never null.

-   **moduleList**

    Returns the module list for the currently selected page and theme.

    Example:

    ```
    <c:forEach var="node"items="${uiNavigationModel.selected.moduleList}">   
        ${node.name}/${node.version},
    </c:forEach>
    ```

    Parameters: none

    Returns: [CurrentModuleList](themeopt_el_bean_mod_current_list.md), never null.

-   **objectID**

    Returns the ObjectID associated with this navigation node.

    Example:

    ```
    ${uiNavigationModel.selected.objectID}
    ```

    Parameters: none

    Returns: ObjectID. Never null.

-   **profileRef**

    Returns the profile reference for the page. If it is empty or null, the default theme profile reference is used.

    Example:

    ```
    ${wp.selectionModel.selected.profileRef}
    ```

    Parameters: none

    Returns: String, the profile reference within the theme. It can be null if you are using a non-modularized theme.

-   **projectID**

    Returns the project identifier that is associated with this navigation node, or null of no project is associated.

    Example:

    ```
    ${uiNavigationModel.selected.projectID}
    ```

    Parameters: none

    Returns: String representing the associated project. It can be null if no project is associated.

-   **title**

    The title of this navigation node.

    Example:

    ```
    ${uiNavigationModel.selected.title}
    ```

    Parameters: none

    Returns: [Title](themeopt_el_bean_title.md) associated with the current object.

-   **themeID**

    Returns the set theme ID for the page. If it is not set for the page, this function returns the inherited theme or default system theme.

    Example:

    ```
    ${wp.selectionModel.selected.themeID}
    ```

    Parameters: none

    Returns: ObjectID of the referenced theme. Never null.

-   **url**

    Short hand for urlGeneration that returns a string and cannot be manipulated any further.

    Example:

    ```
    ${wp.selectionModel.selected.url}
    ```

    Parameters: none

    Returns: String; the URL pointing to this page.

-   **urlGeneration**

    Creates a portal URL you can control with attributes. The URL attributes can be set by using further methods on the UrlGeneration object as shown in the examples section.

    Example:

    ```
    ${wp.selectionModel.selected.urlGeneration}
    ```

    ```
    <a href="${node.urlGeneration.autoNavigationalState}">NavState depends on configuration</a>
    ```

    More examples:

    ```
    <c:set var="node" value="${wp.selectionModel.selected}"/>
    <a href="${node.url}">Simple URL, no modifications possible</a>
    <a href="${node.urlGeneration}">Simple URL</a>
    <a href="${node.urlGeneration.keepNavigationalState}">With NavState</a>
    <a href="${node.urlGeneration.noNavigationalState}">Without NavState</a>
    <a href="${node.urlGeneration.setThemeTemplate('Plain')}">With ThemeTemplate</a>
    <a href="${node.urlGeneration.forcePublic}">Public Link</a>
    <a href="${node.urlGeneration.secure}">Secure Link</a>
    <a href="${node.urlGeneration.setLocale('de')}">In Deutsch</a>
    <a href="${node.urlGeneration.setParam('a','b')}">With Params</a>
    <a href="${node.urlGeneration.setParam('a','b').setParam('c','d').forcePublic.setLocale('de').setThemeTemplate('Plain')}">
    Complex URL</a>
    <a href="${node.urlGeneration.logout}">Logout</a>
    <a href="${node.urlGeneration.login}">Login</a>
    <a href="${node.urlGeneration.normalize}">Normalized URL</a>
    <a href="${node.urlGeneration.allowRelativeURL}">Relative URL</a>
    <a href="${node.urlGeneration.disallowRelativeURL}">Disallow Relative URL</a>
    <a href="${node.urlGeneration.forceAbsolute}">Absolute URL</a>
    ```

    Parameters: none

    Returns: [UrlGenerationPage](themeopt_el_bean_url_gen_page.md); the URL object pointing to this page


