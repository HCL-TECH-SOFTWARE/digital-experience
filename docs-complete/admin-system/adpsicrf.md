# Command reference for the Portal Scripting Interface

The HCL Digital Experience Scripting Interface component provides a scripting interface for the administration functions.

With the Portal Scripting Interface, you can access the portal with any portal user ID and work within the access rights of that user ID.

Jython or Jacl are the two scripting languages that you can use for the scripting syntax and that are supported by the wsadmin tool of the WebSphere® Application Server.

## Jython

Jython is a general-purpose high-level programming language. It uses code indentation as block delimiters.

-   The hash character \(`#`\) starts a comment that extends to the end of the line.
-   By default, each line is interpreted as one statement.
-   You can write multiple statements on one line by separating the statements with semicolons.
-   Jython is case-sensitive.

Example:

```
# here is a comment
single_statement(with_arguments)
first_statement_in_line() ; second_statement()
outer statement [first inner] [second inner statement]
```

A variable can contain an object. In a statement, an object method starts with the object followed by a dot \(.\), the method name, and arguments that are passed to the method in parentheses \(\).

Example:

```
# variable 'Object' holds the object to invoke
# invoke the double argument version of the method
Object.method(arg1, arg2)

# and now the single argument version
Object.method(arg)

# there may be a version with three arguments
Object.method(arg1, arg2, arg3)

# invoke the single argument version
# the single argument is provided as a nested statement
# the nested statement invokes the double argument version
Object.method(Object.method(argInner1, argInner2)
```

## Jacl

Jacl is an interpreted language without strong typing. It is a procedural language with some object-oriented concepts that are used by the scripting component.

-   The number sign character \(`#`\) starts a comment that extends to the end of the line.
-   By default, each line is interpreted as one statement.
-   You can write multiple statements on one line by separating the statements with semicolons.
-   You can nest statements by using brackets `[]`. The brackets are interpreted like back quotation marks in most AIX® HP-UX Linux™ Solaris shells. The statement within the brackets is run, and its result is substituted in place of the bracketed statement before the surrounding statement is interpreted.
-   Jacl is case-sensitive.

Example:

```
# here is a comment
single statement with arguments
first statement in line ; second statement
outer statement [first inner] [second inner statement]
```

The value of a Jacl variable is accessed by placing a $ in front of the variable name. A variable can contain an object. An object method is started by using the object as the first part of a statement, followed by the method name, and any arguments that are passed to the method. Since there is no strong typing, a method can be overloaded only by varying the number of arguments.

Example:

```
# variable 'Object' holds the object to invoke
# invoke the double argument version of the method
$Object method arg1 arg2

# and now the single argument version
$Object method arg

# there may be a version with three arguments
$Object method arg1 arg2 arg3

# invoke the single argument version
# the single argument is provided as a nested statement
# the nested statement invokes the double argument version
$Object method [$Object method argInner1 argInner2]
```

-   **[Command reference - Script beans \| Portal Scripting Interface](../admin-system/scrpt_beans.md)**  
The portal scripting component adds Script beans to the wsadmin tool. These Script beans are objects with methods that work on the portal data.
-   **[Command reference - Portal objects \| Portal Scripting Interface](../admin-system/portal_objects.md)**  
Most portal objects are represented in the script by an object identifier string, which is based on the object ID in the portal. For example: \_6\_00KJL57F9D02H456\_A .
-   **[Command reference - Tree navigation \| Portal Scripting Interface](../admin-system/tree_nav.md)**  
The Content, Layout, and Portlet beans each represent a tree hierarchy. The basic navigation methods are the same for all three. A tree bean provides methods to access the root node to look up the parent and children of a node, and to maintain a cursor that points to a selected node in the tree.
-   **[Command references for Search \| Portal Scripting Interface](../admin-system/search.md)**  
All beans with tree navigation support identical commands for searching, but the available search criteria are different for each bean.
-   **[Portal Scripting Interface Attributes ](../admin-system/attributes.md)**  
All beans use similar commands to query and modify attributes. Attributes are identified by a name, such as uniquename, title, or markup.
-   **[Organization \| Portal Scripting Interface](../admin-system/organization.md)**  
For some beans, in particular the Content and Layout beans, the order of nodes is significant. In tree beans, the parent relationship of the nodes defines the hierarchy. Only nodes with the same parent node are in a particular order in trees.
-   **[Content hierarchy accessed through Content bean](../admin-system/contnt_hierarchy.md)**  
The content hierarchy is a tree of content nodes. Content nodes can be labels, compositions, and links. Compositions are also called pages. Links can be internal or external. In the GUI, links represent the nodes in the Favorites list. Internal links point to a portal page, external links can point to any URL.
-   **[Component hierarchy \| Portal scripting interface](../admin-system/compnt_hrchy.md)**  
The component hierarchy is a tree of components on a page. Components can be containers and controls. A container holds other components, a control displays a portlet. The component hierarchy is accessed and modified by using the Layout bean, referenced as $Layout in Jacl.
-   **[Portlet repository ](../admin-system/ptlt_rep.md)**  
The portlet repository provides access to portlets, portlet applications, and web modules. To provide easy access to the relations between the repository objects, the repository is modeled as a tree. Unlike with the content and component hierarchies, the repository tree is not arbitrarily nested.
-   **[Themes and Skins ](../admin-system/themes_skins.md)**  
Themes and skins are two distinct sets of objects with a matrix relation, where each skin can be tied to any number of themes. The sets of themes and skins are accessible through the Look bean, which is referenced as $Look in Jacl.
-   **[Portal Access Control ](../admin-system/ptl_acc_con.md)**  
The scripting operations for access control differ fundamentally from content, layout, or the portlet repository. The reason is that access control data is not transparently cached on the client. To avoid many requests and slow response times for every simple lookup operation, a different programming model is adopted for access control data.
-   **[Portal authentication ](../admin-system/ptl_auth.md)**  
The Portal bean handles functions that are outside of the responsibility of the other beans. This responsibility includes global data and technical aspects of scripting, such as the scripting session with the portal. The Portal bean is referenced as $Portal in Jacl.
-   **[Deleting and adding portlets - Examples](../admin-system/examples.md)**  
 The following are examples for deleting portlets and adding portlets.
-   **[Troubleshooting the Portal Scripting Interface](../admin-system/troubleshooting.md)**  
The following solutions help solve the troubleshooting issues.
-   **[Property file format \| Portal scripting interface](../admin-system/prop_file.md)**  
You can provide locale-specific attributes for a set of locales in a Java property file. The generic format of Java property files is described in the Java API documentation for method load in class java.util.Properties. The description here covers the particular properties that are interpreted when locale-specific attributes are loaded from a portal script.
-   **[Index paths \| Portal scripting interface](../admin-system/index_paths.md)**  
Index paths are used to refer to components in the component hierarchy. They are based on the index or position of a component in the surrounding container. An index path is a multidimensional index of a component, where the number of dimensions is equal to the depth of the component in the tree. Index paths are absolute or relative, depending on whether there is a leading slash. Absolute paths start with a leading slash and are resolved from the root component. Relative paths start with a number and are resolved from the selected component. Trailing slashes are irrelevant.

**Parent topic:**[Portal Scripting Interface ](../admin-system/ad_psi.md)

**Related information**  


[Work with the Portal Scripting Interface ](../admin-system/adpsitsk.md)

[Portal Scripting Interface and project support ](../wcm/wcm_mngpages_projectpsi.md)

[Portal Scripting Interface and web content libraries](../wcm/wcm_mngpages_librarypsi.md)

[Task: create-virtual-portal ](../admin-system/advp_cfgtsk_create.md)

[Task: modify-virtual-portal ](../admin-system/advp_cfgtsk_modify.md)

