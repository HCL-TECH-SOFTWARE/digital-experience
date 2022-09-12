# Application object

An application object is a java object existing at a known location in the request context.

Defining an application object involves specifying the object’s class name \(as a Java class\), and specifying a key \(string key into a session attribute\) to find it in the request context. Personalization calls methods on these objects during rule execution and uses their results in its decision making. Application Objects that implement the SelfInitializingApplicationObject interface are automatically instantiated as needed by Personalization.

## Installed application objects

The Device, Referrer, Public Render Parameter, and Shared Data application objects are installed by default. By using installed application objects, you can skip the process of defining and registering application objects.

When you use application objects that are not installed, you must define the application objects by using a set of Personalization wizards that are provided with IBM® Rational® Application Developer or develop application objects according to a set of public programming interfaces. After you define the application objects, the application objects are registered to the Personalization server through the Personalization browser. When you use the installed application objects, you do not have to define or register the application objects.

The Device, Referrer, Public Render Parameter, and Shared Data application objects are installed and enabled with 8.5.

**Optional:** To enable the Content Targeting Dialog in virtual portals, use XML access to manually create the hidden Content Targeting Dialog page for each virtual portal. From the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory, run the following task:

-   AIX® HP-UX Linux™ Solaris z/OS®: `./xmlaccess.sh -in [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/pzn.ui/wp.pzn.ui.actions/config/templates/DeployPages.xml -url http://localhost:10039/wps/config/your\_virtual\_portal\_context -user admin\_user\_id -password admin\_password`
-   IBM i: `xmlaccess.sh -in [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/pzn.ui/wp.pzn.ui.actions/config/templates/DeployPages.xml -url http://localhost:10039/wps/config/your\_virtual\_portal\_context -user admin\_user\_id -password admin\_password`
-   Windows™: `xmlaccess.bat -in [PortalServer\_root](../reference/wpsdirstr.md#wp_root)\pzn.ui\wp.pzn.ui.actions\config\templates\DeployPages.xml -url http://localhost:10039/wps/config/your\_virtual\_portal\_context -user admin\_user\_id -password admin\_password`

## Custom Application Objects

You can now write a custom application object by using the SelfInitializingApplicationObject interface that is part of the DX external API. ApplicationObjects defined using this interface must programmatically define a Session Key and Class name.

For example, the Session Key could be registered in the init() method of the application object class, like using the RequestContext to pass through init() method:

- `boolean registerApp = context.setSessionAttribute("customAppObj", this);`

The class name would be the package name along with the classname, for example:

- `com.ibm.websphere.personalization.CustomApplicationObjectClass`

Once the custom ApplicationObject jar has been built, copy it to the **PortalServer/pzn/collections** directory in the profile.

For example: `/opt/HCL/wp_profile/PortalServer/pzn/collections`

Use the Personalization Navigator portlet to import it into PZN using **New->Application Object** option. If the correct session key and class name are entered, the custom Application Object will be found.

## Custom Application Object Details

Custom application objects contains both fixed and dynamic properties that are associated with functional processing when the application object runs.

- Fixed Properties:
    The custom application object fixed properties are determined by the get() methods implemented in the class. For example, if getXyzProperty() is implemented, xyzProperty will be shown in the PZN portlet.

- Dynamic Properties:
    Custom application object dynamic properties can be manually defined in the PZN portlet or via XML.
    -   To manually define the properties, select the application object in the PZN portlet and the details are displayed in the Personalization Editor. 
        In Manage Properties tab in the Personalization Editor section, lists all of the properties (fixed and dynamic). From the Add Dynamic Property button on the Manage Properties tab, you can manually define dynamic properties. To access these dynamic properties the application object class must extend the DynamicApplicationObject class.
    -   The DynamicApplicationObject class implements an interface that contains a get() method that must be included in the application object class. 
        The get() method will automatically be called if the dynamic property is associated with a rule on a page. The get() method has the name of the dynamic property as the input so it is easy to determine which function to perform based on the name.

    For example:

    ```
    private String dynamicPropertyName = "propertyName";
    public Object get(String name) {
        Object returnValue = null;
        if (name.equals(dynamicPropertyName))
    {  returnValue = true;    }
        return returnValue;
    }
    ```
    All of the application object properties (both fixed and dynamic) are available for selection when rules based on the application object are created.

    !!! note 
        For performance reasons, it is recommended that the majority of the functionality be done in the init() method of the application object. The init() method will only be called on requirement, based on whether the page is being initially rendered or refreshed.

## Accessing arbitrary request headers in rule conditions

In PZN rules it is possible to access various dynamic attributes. For example, session data or request data. For the request object it was possible up to now to look for request attributes - as for instance set by a portlet or theme or other code.

With 205 it is now possible to access arbitrary request headers as well.

### Enabling

To not change the existing behavior the feature is disabled by default and needs to be activated:

For that set the following new attribute in the WP ConfigService Resource Environment Provider:

`evaluateRequestHeadersForPZN=true`

### Script portlet sample code

The following sample code shows how a header could be inserted to check a condition for that header in a rule.

The corresponding rule:

```
Profile User Rule 1 is
 
  Mike  when
 
    current Request.test  is  test
 
  Otherwise  Thomas
```

The script portlet sample code:

- HTML:

    ```
    <div id='pzn'>Hello World</div>

    <button type="button" id="myBtn">Check Profile</button>
    ```

- Javascript (need to adjust the host and port and rule UUID accordingly):
    
    ```
    document.getElementById("myBtn").onclick = () => {
            fetch("http://localhost:10039/wps/contenthandler/pzn-rest/rules/b1820994-0dfa-4115-81ac-6bea0a4bacdf/invoke", {
            method: 'post',
            body: '{}',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'test':'test'
                },
            })
            .then((data) => {
                return data.json();
            }).then((res) => {
                console.log(res.result[0]);
                if(res.result[0]==="Thomas")
                    document.getElementById("pzn").innerHTML = "Thomas";
                else
                    document.getElementById("pzn").innerHTML = "Mike";                  
            }).catch(err=>{
            // log errors
            console.log(err);
            })
        };
    ```

The following topics contain an overview of the installed application objects. This overview includes descriptions and examples of using the application objects in rules that you create. To select the attributes that are used in the examples, you must enable the application objects. Instructions for enabling the location attributes associated with the Device application are also included in this section.

