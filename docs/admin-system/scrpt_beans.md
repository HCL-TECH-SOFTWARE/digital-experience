# Command reference - Script beans \| Portal Scripting Interface

The portal scripting component adds Script beans to the wsadmin tool. These Script beans are objects with methods that work on the portal data.

Portal objects are not represented by Jython or Jacl objects. Jython or Jacl object that represents a particular page or an individual portlet is not present. Rather, a fixed number of script beans provide access to specific areas of the portal data.

The available beans are

-   Portal
-   Content
-   Layout
-   Portlet
-   Look
-   Access
-   PacList
-   Application
-   ArchivedApplication
-   ApplicationCategory
-   TemplateCategory
-   Publish

Most method names are single English words, such as get or search or parent. All method names must be written in lowercase. Each bean has a help method. If started with a method name, it prints help for that method in the bean. If started without an argument, it prints general help for that bean, including a list of method names and other help topics. The general help message of the Portal bean includes an overview of the available beans and their responsibilities.

Jython example:

```
# get help - for the completely lost
Portal.help()

# get help on a particular bean
Portlet.help()
Access.help()

# get help on a method of a bean
Portal.help("login")
Layout.help("select")

# get help on an extended help topic of a bean
Content.help("search-criteria")

```

Jacl example:

```
# get help - for the completely lost
$Portal help

# get help on a particular bean
$Portlet help
$Access help

# get help on a method of a bean
$Portal help login
$Layout help select

# get help on an extended help topic of a bean
$Content help search-criteria

```

**Parent topic:**[Command reference for the Portal Scripting Interface](../admin-system/adpsicrf.md)

