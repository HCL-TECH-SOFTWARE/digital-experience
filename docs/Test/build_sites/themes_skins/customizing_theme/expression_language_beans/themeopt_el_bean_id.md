# wp.identification

Provides access to the identification services to serialize and deserialize objectIDs.

Attributes:

-   **get\(object\)**

    Serializes the objectID into a string.

    Example:

    ```
    ${wp.identification[object]}
    ```

    Parameters:

    -   **object**

        Identifiable object to be serialized.

    Returns: String, a serialized representation of an object. It is null if it is not a valid object.

-   **get\(string\)**

    Deserializes a string into an objectID.

    Example:

    ```
    ${wp.identification[string]}
    ```

    Parameters:

    -   **string**

        String to look up the identification objects, must not be null.

    Returns: objectID; it can be null if the string is invalid or the object is not found.



