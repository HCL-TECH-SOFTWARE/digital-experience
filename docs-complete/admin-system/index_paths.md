# Index paths \| Portal scripting interface

Index paths are used to refer to components in the component hierarchy. They are based on the index or position of a component in the surrounding container. An index path is a multidimensional index of a component, where the number of dimensions is equal to the depth of the component in the tree. Index paths are absolute or relative, depending on whether there is a leading slash. Absolute paths start with a leading slash and are resolved from the root component. Relative paths start with a number and are resolved from the selected component. Trailing slashes are irrelevant.

-   **/**

    The root component.

-   **/0**

    The first child of the root component.

-   **/1**

    The second child of the root component.

-   **...**
-   **/0/0**

    The first child of the first child of the root component.

-   **/0/1**

    The second child of the first child of the root component.

-   **...**
-   **/5/1/3**

    The fourth child of the second child of the sixth child of the root component.

-   **...**
-   **0**

    The first child of the current component.

-   **1**

    The second child of the current component.

-   **...**
-   **1/0**

    The first child of the second child of the current component.

-   **...**

**Parent topic:**[Command reference for the Portal Scripting Interface](../admin-system/adpsicrf.md)

**Related information**  


[Navigation - Component hierarchy ](../admin-system/navigation_compnt_hrchy.md)

