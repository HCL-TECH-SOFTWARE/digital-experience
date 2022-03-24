# Description 

Provides access to the description of certain objects such as Navigation, Content, Theme, Profile, and others.

If no attribute is used, then the attribute `value` is used by default.

Attributes:

-   **direction**

    Provides the direction that the description is read.

    Example:

    ```
    ${wp.description.direction}
    ```

    Parameters: none

    Returns: String, either `ltr` or `rtl`; it is never null.

-   **get\(locale\)**

    Gets the description in a specified locale.

    Example:

    ```
    ${wp.description['de']}
    ```

    Parameters:

    -   **locale**

        The locale code for the language you want.

    Returns: String containing the description in the specified locale.

-   **locale**

    Provides the current locale.

    Example:

    ```
    ${wp.description.locale}
    ```

    Parameters: none

    Returns: Locale object that represents the current locale.

-   **value**

    Provides the description in the current locale.

    Example:

    ```
    ${wp.description.value}
    ```

    Parameters: none

    Returns: String containing the description in the current locale.

-   **xmlLocale**

    Provides the current locale as defined by IETF BCP 47.

    Example:

    ```
    ${wp.description.xmlLocale}
    ```

    Parameters: none

    Returns: String containing the current local in XML format. For example, `en-us`.


**Parent topic:**[Common beans ](../dev-theme/themeopt_el_bean_common.md)

