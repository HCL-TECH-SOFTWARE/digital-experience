# Portal Scripting Interface Attributes

All beans use similar commands to query and modify attributes. Attributes are identified by a name, such as uniquename, title, or markup.

There are different commands for the different types of attributes. Similar to the details command in Portal objects, the commands must start on the bean responsible for the object type. For example, attributes of content nodes are accessed only through the Content bean, not through the Layout or any other bean.

The set of attributes that is supported for an object depends on the type of the object. Many attributes are read-only. Attribute values are always represented as strings in the scripting language. They are mapped from and to portal data types by the respective script bean. Exceptions are triggered if the mapping fails.

-   **[Plain attributes \| Portal Scripting Interface](../admin-system/pl_attributes.md)**  
Plain attributes have a single value that is queried by using the get command. The object for which to query the attribute is specified by an ID, and the attribute is specified by name.
-   **[List valued attributes \| Portal Scripting Interface](../admin-system/lstvl_attributes.md)**  
List valued attributes can have multiple values. They are queried by using the list command, which returns all values, which are separated by white space.
-   **[Locale-specific attributes \| Portal Scripting Interface](../admin-system/lcl_spcf_att.md)**  
Locale-specific attributes have different values for different languages and countries. They can be queried by using the nlsget command, where nls stands for National Language Support.

**Parent topic:**[Command reference for the Portal Scripting Interface](../admin-system/adpsicrf.md)

