# Command reference for the Portal Scripting Interface

The HCL Digital Experience Scripting Interface component provides a scripting interface for the administration functions.

With the Portal Scripting Interface, you can access the portal with any portal user ID and work within the access rights of that user ID.

Jython or Jacl are the two scripting languages that you can use for the scripting syntax and that are supported by the wsadmin tool of the WebSphere® Application Server.

## Jython

Jython is a general-purpose high-level programming language. It uses code indentation as block delimiters.

-   The hash character (`#`) starts a comment that extends to the end of the line.
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

A variable can contain an object. In a statement, an object method starts with the object followed by a dot (.), the method name, and arguments that are passed to the method in parentheses (\).

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

-   The number sign character (`#`) starts a comment that extends to the end of the line.
-   By default, each line is interpreted as one statement.
-   You can write multiple statements on one line by separating the statements with semicolons.
-   You can nest statements by using brackets `[]`. The brackets are interpreted like back quotation marks in most AIX® and Linux™ shells. The statement within the brackets is run, and its result is substituted in place of the bracketed statement before the surrounding statement is interpreted.
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

???+ info "Related information"  
    -   [Work with the Portal Scripting Interface](../../../portal_admin_tools/portal_scripting_interface/adpsitsk.md)
    -   [Portal Scripting Interface and project support](../../../../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/pages/managed_pages/advadmin_managedpages/wcm_mngpages_projectpsi.md)
    -   [Portal Scripting Interface and web content libraries](../../../../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/pages/managed_pages/advadmin_managedpages/wcm_mngpages_librarypsi.md)
    -   [Task: create-virtual-portal](../../../../../build_sites/virtual_portal/vp_reference/vp_command_ref/portal_cfg_adm_vp/advp_cfgtsk_create.md)
    -   [Task: modify-virtual-portal](../../../../../build_sites/virtual_portal/vp_reference/vp_command_ref/portal_cfg_adm_vp/advp_cfgtsk_modify.md)

