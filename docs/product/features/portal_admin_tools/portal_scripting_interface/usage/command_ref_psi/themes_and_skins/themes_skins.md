# Themes and Skins

Themes and skins are two distinct sets of objects with a matrix relation, where each skin can be tied to any number of themes. The sets of themes and skins are accessible through the Look bean, which is referenced as $Look in Jacl.

The Look bean provides access to the portal theme and skin objects:

-   Methods that allow to search on themes. For more information, see *Search*.
-   Methods for getting attributes. Themes and Skins support the default attributes. Only the get command is available. Since there is no current selection, the ID of the node for which to obtain an attribute value must be given explicitly.
-   Methods to retrieve theme and skin lists. For more information, see *Global lists*.

-   **[Navigation - Themes and Skins](../admin-system/navigation_themes_skins.md)**  
The Look bean is a simple lookup mechanism to access the name and ID of the available themes and skins. It does not support a current selection, nor navigation of the matrix relation between both sets. Since that might change in the future, the deselect command is implemented. It can be used before searches to ensure that the search is global, even if a current selection is introduced in the future.
-   **[Search - Themes and Skins](../admin-system/search_themes_skins.md)**  
The syntax for searching is similar to the generic tree search described in Search. Since the look bean does not support a current selection, the search is not scoped and the keyword select is not supported for the find command. The command deselect \(Navigation\) can be used to ensure that a search is global, even if a search scope is introduced in the future.
-   **[Global lists - Themes and Skins](../admin-system/gbl_lsts_themes_skins.md)**  
For ease of use, two global lists hold the common name of all themes and skins. You can access the global lists with the listall command, which expects the list name as an argument. The following list names are supported. See the bean help for alternative list names.

**Parent topic:**[Command reference for the Portal Scripting Interface](../admin-system/adpsicrf.md)

