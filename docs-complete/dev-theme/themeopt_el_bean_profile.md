# Profile 

Provides access to the attributes of one profile.

Attributes:

-   **description**

    The description of the profile.

    Example:

    ```
    ${wp.themeList.current.profiles.current.description}
    ```

    Parameters: none

    Returns: [Description](themeopt_el_bean_description.md) object for the profile node; it is never null. You can use the value of the title object to retrieve the description in current locale.

-   **metadata**

    The metadata map of this profile.

    Example:

    ```
    ${wp.themeList.current.profiles.current.metadata['com.ibm.portal.Hidden']}
    ```

    Parameters: none

    Returns: [Metadata](themeopt_el_bean_meta.md), never null.

-   **relativePath**

    The relative path of this profile.

    Example:

    ```
    ${wp.themeList.current.profiles.current.relativePath}
    ```

    Parameters: none

    Returns: The URI of this profile as a string.

-   **title**

    The title of this profile.

    Example:

    ```
    ${wp.themeList.current.profiles.current.title}
    ```

    Parameters: none

    Returns: [Title](themeopt_el_bean_title.md) object for the profile node; it is never null. You can use the value of the title object to retrieve the title in current locale.

-   **uri**

    The URI of this profile.

    Example:

    ```
    ${wp.themeList.current.profiles.current.uri}
    ```

    Parameters: none

    Returns: The URI of this profile as a string.


**Parent topic:**[ProfileList ](../dev-theme/themeopt_el_bean_profilelist.md)

