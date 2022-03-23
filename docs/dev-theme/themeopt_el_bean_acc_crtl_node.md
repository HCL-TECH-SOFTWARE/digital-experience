# AccessControl 

Provides read access to the current access control permissions for a resource.

Attributes:

-   **hasAddChildPermission**

    Determine whether the page is a non-private page and the current user has contributor, editor, manager, or admin permission for the specified page.

    Example:

    ```
     ${wp.ac[wp.selectionModel.selected].hasAddChildPermission}
    ```

    Parameters: none

    Returns: Boolean; true if the check is successful, otherwise false.

-   **hasEditSharedPermission**

    Determines whether the page is a non-private page and the current user has editor, manager, or admin permission for the specified page.

    Example:

    ```
    ${wp.ac[wp.selectionModel.selected].hasEditSharedPermission}
    ```

    Parameters: none

    Returns: Boolean; true if the check is successful, otherwise false.

-   **hasPersonalizePermission**

    Determines whether the specified page is a private page and the current user has PRIVILEGED\_USER permission.

    Example:

    ```
    ${wp.ac[wp.selectionModel.selected].hasPersonalizePermission}
    ```

    Parameters: none

    Returns: Boolean; true if the check is successful, otherwise false.

-   **hasPermission**

    Determines whether the resource has a specific permission. Attribute is the case in-sensitive name of the `com.ibm.portal.ac.data.RoleType`.

    Example:

    ```
    ${wp.ac[wp.selectionModel.selected].hasPermission['Administrator']}
    ${wp.ac[wp.selectionModel.selected].hasPermission['ManageR']}
    ${wp.ac[wp.selectionModel.selected].hasPermission['editor']}
    ```

    Parameters: none

    Returns: Boolean; true if the check is successful, otherwise false.

-   **isPrivate**

    Determines whether the specified page is private.

    Example:

    ```
     ${wp.ac[wp.selectionModel.selected].isPrivate}
    ```

    Parameters: none

    Returns: Boolean; true if the page is private, false if it is not.


**Parent topic:**[wp.ac - Access control ](../dev-theme/themeopt_el_bean_ac_rt.md)

