# ModuleCapability

Represents one capability as defined by a module.

Attributes:

-   **name**

    Returns the name of the capability.

    Example:

    ```
    ${wp.moduleList.current.capabilities['oneUI'].name}
    ```

    Parameters: none

    Returns: String; never null.

-   **version**

    Returns the version of the capability.

    Example:

    ```
    ${wp.moduleList.current.capabilities['oneUI'].value}
    ```

    Parameters: none

    Returns: String; never null.


