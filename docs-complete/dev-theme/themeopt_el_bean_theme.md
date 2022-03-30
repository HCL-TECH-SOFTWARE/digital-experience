# Theme 

Provides access to the attributes of one theme.

Attributes:

-   **description**

    The description of the theme.

    Example:

    ```
    ${wp.themeList.current.description}
    ```

    Parameters: none

    Returns: [Description](themeopt_el_bean_description.md) object for the theme node; it is never null. You can use the value of the title object to retrieve the description in current locale.

-   **metadata**

    The metadata map of this theme.

    Example:

    ```
    ${wp.themeList.current.metadata['com.ibm.portal.Hidden']}
    ```

    Parameters: none

    Returns: [Metadata](themeopt_el_bean_meta.md), never null.

-   **profiles**

    Represents the profile list of this theme.

    Example:

    ```
    ${wp.themeList.current.profiles}
    ```

    Parameters: none

    Returns: [ProfileList](themeopt_el_bean_profilelist.md), it is never null.

-   **themeTemplateURI**

    Represents the URI pointing to the theme template that is configured for the current page that is rendered.

    Example:

    ```
    <%@ taglib uri="http://www.ibm.com/xmlns/prod/websphere/portal/v8.5/resolver" prefix="r" %>
    <r:dataSource uri='spa:${wp.identification[${wp.selectionModel.selected}]}' escape="none">
        <r:param name="themeURI" value="${wp.themeList.current.themeTemplateURI}"/>
        <r:param name="mime-type" value="text/html"/>
    </r:dataSource>
    ```

    Parameters: none

    Returns: The URI pointing to the theme template that is configured for the current page that is rendered.

    Exception: This attribute works for the current theme and current page that is rendered only.

-   **title**

    The title of this theme.

    Example:

    ```
    ${wp.themeList.current.title}
    ```

    Parameters: none

    Returns: [Title](themeopt_el_bean_title.md) object for the theme node; it is never null. You can use the value of the title object to retrieve the title in current locale.


