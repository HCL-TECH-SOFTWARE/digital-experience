# Customizing Person card actions through the theme 

You can use the theme to add items to the Person card's More actions menu in any portlet that uses the AJAX person tag.

1.  Locate the theme file which contains the `<body></body>` tags of the page. This is most often Default.jsp, or theme.html.

    For more information on locating your theme's files, see Location of theme resources.

2.  Open the file in a text editor.

3.  To add a menu item, add XML code to the end of the file, just before </body\></html\> tags.

    The following sample code adds a menu item called **Test Action**.

    ```
    <div class="com.ibm.portal.action" style="display:none;">
     <span class="action-id">test.action1</span>
     <span class="action-impl">/javascript/TestAction.js</span>
     <span class="action-context">person</span>
     <span class="action-label">Test Action</span>
     <span class="action-description">This is a test for extending Person menu</span>
     <span class="action-showif">TestAction.showif</span>
     <span class="action-url">javascript:TestAction.execute(@@@ARGS@@@)</span>
     <span class="action-order">0</span>
    </div>
    ```

4.  Save the changes to the file.

5.  Create a JavaScript™ file that executes the action you want to occur when the associated menu item is selected.

    The following sample code generates an alert when the menu item **Test Action** is selected.

    ```
    var TestAction = {
      showif: function(person) {
        return true;
      },
      execute: function(person) {
        alert("TestAction executed for: " + person.fn);
      }
    }
    
    ```

    Paste the JavaScript file \(TestAction.js\) in a directory where it can be accessed by a URL. For example you could put the TestAction.js file in either a JavaScript directory in the root of your web server \(/javascript/TestAction.js\) or a directory in your theme WAR file /yourthemecontext/javascript/TestAction.js.

6.  If the file you modified in step 1 was not Default.jsp, update the file's timestamp by making a change, removing the change, and then saving the file.

7.  To verify that the new action was added, open a portlet that supports people awareness \(for example, the People Finder\) and then view the Person card for a selected user. Verify that the option you added \(for example **Test Action**\) is available from the **More actions** menu and that it works as expected.


**Parent topic:**[Collaborative Services API and the person tag ](../collab/i_coll_r_cs_api.md)

