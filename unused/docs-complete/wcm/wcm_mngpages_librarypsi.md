# Portal Scripting Interface and web content libraries

With the Portal Scripting Interface, you can create Jacl or Jython scripts to automate the management of web content libraries. Using the DocumentLibrary bean with the Portal Scripting Interface, you can create and delete libraries, retrieve a list of libraries, and retrieve library attributes.

## Create libraries

To create a library, use the create method.

-   Jacl syntax: `$DocumentLibrary create "library\_name"`
-   Jython syntax: `DocumentLibrary.create("library\_name")`

-   **Jacl example:**

    ```
    wsadmin>$DocumentLibrary create "Library1"
    "library1"
    ```

-   **Jython example:**

    ```
    wsadmin>DocumentLibrary.create("Library1")
    '"library1"'
    ```


## Delete libraries

To delete a library, use the delete method.

-   Jacl syntax: `$DocumentLibrary delete "library\_name"`
-   Jython syntax: `DocumentLibrary.delete("library\_name")`

-   **Jacl example:**

    ```
    wsadmin>$DocumentLibrary delete "Library1"
    ```

-   **Jython example:**

    ```
    wsadmin>DocumentLibrary.delete("Library1")
    ```


## List libraries

To retrieve a list of libraries, use the listall method.

-   Jacl syntax: `$DocumentLibrary listall`
-   Jython syntax: `DocumentLibrary.listall()`

-   **Jacl example:**

    ```
    wsadmin>$DocumentLibrary listall
    "template page content" "wiki template v70" "blog template v70" "web resources v70"
    "portal site" "web content templates" "blog solo template v70" "web content"
    "library1"
    ```

-   **Jython example:**

    ```
    wsadmin>DocumentLibrary.listall()
    '"template page content" "wiki template v70" "blog template v70" "web resources v70"
    "portal site" "web content templates" "blog solo template v70" "web content"
    "library1"'
    ```


## Retrieve library details

Retrieve library details with the details method. This method returns the following information about the library: the Universally Unique Identifier \(UUID\), state, name, and title.

-   Jacl syntax: `$DocumentLibrary details "library\_name"`
-   Jython syntax: `DocumentLibrary.details("library\_name")`

-   **Jacl example:**

    ```
    wsadmin>$DocumentLibrary details "Library1"
    uuid       : 64fa541a-a189-4ed6-8a6f-4c3dcc148295
    name       : library1
    title      : Library1
    description:
    enabled            : true
    deletion prohibited: false
    ```

-   **Jython example:**

    ```
    wsadmin>print DocumentLibrary.details("Library1")
    uuid       : 13b06eb0-52c7-415b-9a93-4195968aa2a3
    name       : library1
    title      : Library1
    description:
    enabled            : true
    deletion prohibited: false
    ```


**Parent topic:**[Administering managed pages ](../wcm/wcm_mngpages_advadmin.md)

**Related information**  


[Command reference for the Portal Scripting Interface](../admin-system/adpsicrf.md)

