# ContentNode 

Provides access to a content node. This interface offers a way to obtain the type of the content node.

Attributes:

-   **contentNodeType**

    Returns the type of this content node as `com.ibm.portal.content.ContentNodeType`.

    Example:

    ```
    ${wp.navigationModel.selected.contentNode.contentNodeType}
    ```

    ```
    ${wp.selectionModel.selected.contentNode.contentNodeType}
    ```

    The following example displays how to check whether the currently selected node is a label:

    ```
    <c:if test="${wp.navigationModel.selected.contentNode.contentNodeType == 'LABEL'}">
    ```

    ```
    <c:if test="${wp.selectionModel.selected.contentNode.contentNodeType == 'LABEL'}">
    ```

    Parameters: none

    Returns: `com.ibm.portal.content.ContentNodeType COMPOSITION, EXTERNALURL, LABEL, PAGE, STATICPAGE`

-   **description**

    The description of the content node.

    Example:

    ```
    ${wp.navigationModel.selected.contentNode.description}
    ```

    ```
    ${wp.selectionModel.selected.contentNode.description}
    ```

    Parameters: none

    Returns: [ContentNode](themeopt_el_bean_content_node.md) object for the navigation node; it is never null. You can use the value of the title object to retrieve the description in current locale.

-   **metadata**

    The metadata map of this content node.

    Example:

    ```
    ${wp.navigationModel.selected.contentNode.metadata['com.ibm.portal.Hidden']}
    ```

    ```
    ${wp.selectionModel.selected.contentNode.metadata['com.ibm.portal.Hidden']}
    ```

    Parameters: none

    Returns: [Metadata](themeopt_el_bean_meta.md), never null.

-   **moduleList**

    Returns the module list for the currently selected page and theme.

    Example:

    ```
    <c:forEach var="node" items="${wp.navigationModel.selected.contentNode.moduleList}">   
    	${node.name}/${node.version},
    </c:forEach>
    ```

    ```
    <c:forEach var="node" items="${wp.selectionModel.selected.contentNode.moduleList}">   
    	${node.name}/${node.version},
    </c:forEach>
    ```

    Parameters: none

    Returns: [CurrentModuleList](themeopt_el_bean_mod_current_list.md), never null.

-   **objectID**

    Returns the ObjectID associated with this content node.

    Example:

    ```
    ${wp.navigationModel.selected.contentNode.objectID}
    ```

    ```
    ${wp.selectionModel.selected.contentNode.objectID}
    ```

    Parameters: none

    Returns: ObjectID. Never null.

-   **profileRef**

    Returns the profile reference for the page. If it is empty or null, the default theme profile reference is used.

    Example:

    ```
    ${wp.navigationModel.selected.contentNode.profileRef}
    ```

    ```
    ${wp.selectionModel.selected.contentNode.profileRef}
    ```

    Parameters: none

    Returns: String, which represents the reference to a profile that exists within the theme. It can be null if you are using a non-modularized theme.

-   **themeID**

    Returns the set theme ID for the page. If it is not set for the page, this function returns the inherited theme or default system theme.

    Example:

    ```
    ${wp.navigationModel.selected.contentNode.themeID}
    ```

    ```
    ${wp.selectionModel.selected.contentNode.themeID}
    ```

    Parameters: none

    Returns: ObjectID of the referenced theme. Never null.

-   **title**

    The title of this content node.

    Example:

    ```
    ${wp.navigationModel.selected.contentNode.title}
    ```

    ```
    ${wp.selectionModel.selected.contentNode.title}
    ```

    Parameters: none

    Returns: [Title](themeopt_el_bean_title.md) associated with the current object.

-   **url**

    Short hand for urlGeneration that returns a string and cannot be manipulated any further.

    Example:

    ```
    ${wp.navigationModel.selected.url}
    ```

    ```
    ${wp.selectionModel.selected.url}
    ```

    Parameters: none

    Returns: String; the URL pointing to this page.

-   **urlGeneration**

    Creates a portal URL you can control with attributes. The URL attributes can be set by using further methods on the UrlGeneration object as shown in the examples section.

    Example:

    ```
    ${wp.navigationModel.selected.urlGeneration}
    ```

    ```
    ${wp.selectionModel.selected.urlGeneration}
    ```

    More examples:

    ```
    <c:set var="node" value="${wp.navigationModel.selected}"/>
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
    <a href="$\{node.urlGeneration.autoNavigationalState\}"\>NavState depends on configuration</a\>
    ```

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
    <a href="$\{node.urlGeneration.autoNavigationalState\}"\>NavState depends on configuration</a\>
    ```

    Parameters: none

    Returns: [UrlGenerationPage](themeopt_el_bean_url_gen_page.md); the URL object pointing to this page


**Parent topic:**[NavigationNode ](../dev-theme/themeopt_el_bean_nav_node.md)

