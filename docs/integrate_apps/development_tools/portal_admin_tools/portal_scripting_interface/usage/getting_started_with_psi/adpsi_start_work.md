# Working with portal pages and other resources

The following exercise shows you some steps how to work with portal resources, such as pages and portlets, search for resources and information about them, and add a portlet to a page.

-   **Searching for a portal page:**

    Search for the **Getting Started** page. Enter the following command and specify the page by its unique name:

    ```
    wsadmin>Content.find("page", "un", "ibm.portal.Home.Getting Started")
    
    ```

    If a page with the specified unique name exists, the Portal Scripting Interface returns the object ID of the page as follows:

    ```
    wsadmin>Content.find("page", "un", "ibm.portal.Home.Getting Started")
       'Z6_CGAH47L00OJCC0I6U1NESJ2GK0'
    
    ```

    If you are not sure whether the resource is a page or a label you can specify the type any instead of page. In this case, you get the following response:

    ```
    wsadmin>Content.find("any", "un", "ibm.portal.Home.Getting Started")
       'Z6_CGAH47L00OJCC0I6U1NESJ2GK0'
    
    ```

    To find out more about the different ways of searching for portal resources, use the command `help()` that the Portal Scripting Interface provides for each command. For an example, see the section about Getting help for a command.

-   **Finding out information about a portal page:**

    To display some standard information about a portal resource, use the details\(\) command. You need to specify for which resource you want more detailed information. The following example can be the portal page Getting Started:

    ```
    wsadmin>Content.find("page", "un", "ibm.portal.Home.Getting Started", "select")
    'Z6_CGAH47L00OJCC0I6U1NESJ2GK0'
    wsadmin>Content.details()
    
    ```

    This returns the following response:

    ```
    wsadmin>Content.find("page", "un", "ibm.portal.Home.Getting Started", "select")
    'Z6_CGAH47L00OJCC0I6U1NESJ2GK0'
    wsadmin>Content.details()
    name: ibm.portal.Home.Getting_Started
    id  :Z6_CGAH47L00OJCC0I6U1NESJ2GK0
    type: staticpage      
          no children
    
    ```

    To find information about a portal resource, you need to specify the resource. If you do not specify the resource, for example, by entering only `wsadmin>Content.details()`, you get a response such as the following one:

    ```
    WASX7015E: Exception running command: "Content.details()"; exception information: 
       com.ibm.bsf.BSFException: exception from Jython:
    Traceback (innermost last):  
       File "<input>", line 1, in ?
    EJPXD0020W: No object has been selected.
    
    ```

    Here are some more examples for requesting information about a portal page:

    ```
    wsadmin>Content.get("type")
       'staticpage'
    wsadmin>Content.get("uniquename")
       'ibm.portal.Home.Getting Started'
    wsadmin>Content.get("allportlets")
       'true'
    wsadmin>Content.nlsget("title", "en")
       'Getting Started'
    wsadmin>Content.parmget("com.ibm.portal.bookmarkable")
       'Yes'
    
    ```

    The following example shows the hierarchy of a page:

    ```
    wsadmin>Content.path()'Z6_000000000000000000000000A0 Z6_CGAH47L00GS790I6U1M1F020A3 Z6_CGAH47L00OJCC0I6U1NESJ2GK0'
    
    ```

    This command returns a 'list' of object IDs of the nodes from the root node to your currently selected node. As you can see, it is not a 'true' list in the Jython sense, it is rather a string with entries separated by blanks. To get a list that is better readable, the command split\(\) as shown in the following example:

    ```
    wsadmin>for id in Content.path().split():
    wsadmin>  Content.get(id, "un")
    wsadmin>
    'wps.content.root'
    'ibm.portal.Home'
    'ibm.portal.Home.Getting Started'
    
    ```

    With this simple loop you can print out the whole hierarchy of nodes up to our currently selected 'Getting Started' page.

-   **Creating a page:**

    To create a page as a child page to the currently selected page, use the following command:

    ```
    wsadmin>Content.create("page", "Title of my first page", "html", "select")'
    Z6_CGAH47L0082M00I6T9E0NL3001'
    
    ```

    This command creates a page for HTML markup and returns its portal object ID. You can now start adding attributes or metadata to the page.

-   **Adding a portlet to a page:**

    To add a portlet to the page that you created previously, use a the following command, for example:

    ```
    wsadmin> myportlet = Portlet.find("portlet", "un", "wps.p.Information")
    wsadmin> Layout.create("container", "horizontal", "select")'
    Z7_CGAH47L008C970I6NA7U4300G2'
    wsadmin> Layout.create("portlet", myportlet)'
    Z7_CGAH47L008C970I6NA7U4300G1'
    
    ```

    This adds the Information portlet to the page and places it in a horizontal container.


**Parent topic:**[Getting started with the Portal Scripting Interface](../admin-system/adpsi_start.md)

