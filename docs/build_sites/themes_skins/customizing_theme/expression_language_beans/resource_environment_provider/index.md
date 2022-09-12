# wp.rep - Resource Environment Provider

The wp.rep provides access to the set of configuration entries for the specified resource environment provider.

Attributes:

-   **get\(provider key\)**

    Retrieves the property that is defined in the Resource Environment Provider.

    Example:

    ```
    ${wp.rep['resourceEnvironmentProvider']['property']}
    ```

    To retrieve the Portal defined Dojo context root.

    ```
    
    ${wp.rep['WP GlobalThemeConfig']['resources.js.dojo.contextRoot']}
    ```

    Parameters: String; specifies the provider key. .

    Returns: [Properties](themeopt_el_bean_prop.md); it can be null if not found.


