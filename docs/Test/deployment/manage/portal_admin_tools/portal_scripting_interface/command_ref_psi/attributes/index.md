# Portal Scripting Interface Attributes

All beans use similar commands to query and modify attributes. Attributes are identified by a name, such as uniquename, title, or markup.

There are different commands for the different types of attributes. Similar to the details command in Portal objects, the commands must start on the bean responsible for the object type. For example, attributes of content nodes are accessed only through the Content bean, not through the Layout or any other bean.

The set of attributes that is supported for an object depends on the type of the object. Many attributes are read-only. Attribute values are always represented as strings in the scripting language. They are mapped from and to portal data types by the respective script bean. Exceptions are triggered if the mapping fails.


