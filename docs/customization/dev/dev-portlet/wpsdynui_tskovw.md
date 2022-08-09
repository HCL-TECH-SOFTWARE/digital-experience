# Overview: Developing a dynamic UI configuration

Get an overview of the main tasks involved in creating a dynamic UI configuration.

The following describes a general overview of the main tasks involved in creating a dynamic UI configuration.

-   [Planning](#planning)
-   [Creating the extension node for containing dynamic pages](#ext_node)
-   [Developing the portlet definition for dynamic portlets](#port_def)
-   [Developing the page definition for dynamic pages](#page_def)
-   [Developing the dynamic UI launching portlet](#launch)
-   [Providing controls for closing dynamic UIs.](#close)
-   [Testing the configuration](#test)
-   [Deploying the configuration](#deploy)

**Note:** Only standard portlets can launch dynamic UIs. HCL portlets, however, can be launched as dynamic portlets and receive properties. Standard portlets can also launch dynamic pages that contain a mixture of standard and HCL portlets.

1.  Planning. Determine the requirements of the dynamic UI configuration. The following are some of the questions that can help you in the planning process.

    -   What is the layout of the page definition?
    -   Should the page definitions be viewable by users? If not, where in the portal topology should they be placed?
    -   Where should the extension node be placed in the portal topology?
    -   What information needs to be passed to each dynamic UI? How will the portlets use that information?
    -   How will the UI be closed? Should you use tags to allow the user to close dynamic pages and dynamic portlets? If not, is it the responsibility of the calling portlet or a dynamic portlet to close the UI?
2.  Creating the extension node for dynamic pages.

    1.  Create the page to be used for containing dynamic UIs.

    2.  Assign a unique name to the node. To do this, use the Unique names portlet.

    3.  Open a command prompt.

    4.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

    5.  Run the following configuration task:

        -   AIX®HP-UXLinux™Solaris: ./ConfigEngine.sh action-enable-page-as-extension-node-wp.dynamicui.config -DPageUniqueName=pageUniqueName \[-DVirtualPortalContext=virtualPortalContext\]
        -   IBM® i: ConfigEngine.sh action-enable-page-as-extension-node-wp.dynamicui.config -DPageUniqueName=pageUniqueName \[-DVirtualPortalContext=virtualPortalContext\]
        -   Windows™: ConfigEngine.sh action-enable-page-as-extension-node-wp.dynamicui.config -DPageUniqueName=pageUniqueName \[-DVirtualPortalContext=virtualPortalContext\]
        -   z/OS®: ./ConfigEngine.sh action-enable-page-as-extension-node-wp.dynamicui.config -DPageUniqueName=pageUniqueName \[-DVirtualPortalContext=virtualPortalContext\]
        where pageUniqueName is the unique name of the extension node and virtualPortalContext is the context of the virtual portal that the specified page is part of. The -DVirtualPortalContext flag is needed only in the case where a virtual portal is used.

        This command designates the page as an extension node. If you subsequently need to remove the extension node designation, run the command using the action-disable-page-as-extension-node-wp.dynamicui.config task.

3.  Developing the portlet definition for dynamic portlets. Any existing portlet can be used as the definition for a dynamic portlet. For standard portlets, be sure to set the ID attribute for the `<portlet-app/>` element in portlet.xml. The launching portlet uses this value, plus the `<portlet-name/>`, to obtain the object ID of the portlet definition. For HCL portlets, the uid attribute of the `<portlet-app/>` element is used.

    Determine what properties need to be passed to the portlet.

    -   **Portlet deployment descriptor considerations**

        To receive portlet properties, the com.ibm.portal.context.enable preference parameter must be set in the portlet.xml with a value of true. By default, this value is set to false.

        -   For standard portlets:

            ```xmp
            <portlet-preferences>
            
            		 ...
                <preference>
                <name>com.ibm.portal.context.enable</name>
                <value>true</value>
            		 </preference>
            		 ...
            </portlet-preferences>
            
            ```

        -   For HCL portlets

            ```xmp
            ...
               <config-param>
                  <param-name>com.ibm.portal.context.enable</param-name>
                  <param-value>true</param-value>
               </config-param>
            ... 
            ```

            Additionally, you must also modify the file web.xml for HCL portlets to receive portlet properties. The servlet class entry should specify the com.ibm.wps.pb.wrapper.PortletWrapper class. See[Packaging, deploying and compiling cooperative portlets](wpsc2apackage.md#) for more information and an example.

    -   **Considerations for retrieving context**

        Standard portlets receive page properties on the processAction\(\) method using the com.ibm.portal.context request attribute. The value of this attribute is a Map storing the context entries. Each property value is obtained by name. The name and value of each property value is determined by the requirements of your dynamic UI configuration. Use the following code sample to get a value for the property with the name propertyName:

        ```xmp
        public void processAction (ActionRequest request, ActionResponse response) 
                    throws PortletException, java.io.IOException
        {
               
           // perform application specific action handling
           ...
                  
           // perform page context processing
           
           String specialAction = request.getParameter("com.ibm.portal.action");
         
           if (specialAction != null &&
               specialAction.equals("com.ibm.portal.context.receive")) 
           {
              //this indicates context was passed to the launched page
              java.util.Map contextMap = (java.util.Map)
                            request.getAttribute("com.ibm.portal.context");
        
              Object propertyValue =  (Object) contextMap.get(<propertyName>);
              
              portletSession.setAttribute(<propertyName>, propertyValue);
                
           }
        
        }
        ```

        HCL portlets must implement the PropertyListener interface that provides the setProperties\(\) method, which provides the page properties as an array of PropertyValue objects.

        In this sample, a loop is used to scan the array for the task properties.

        ```xmp
        public void setProperties(PortletRequest request, PropertyValue contextArray[])
        {
              
           Object propertyValue;
        
           for (int i = 0; i < contextArray.length; i++) 
           {
              String propertyName = contextArray[i].getProperty().getName();
        
              if(propertyName.equals(<propertyName>))
              {
                 propertyValue = (Object)contextArray[i].getValue();
              }
                
           }
        
           request.getSession().setAttribute(<propertyName>, propertyValue);
              
        }
        ```

    -   **IBM portlet considerations**

        To receive portlet properties, the com.ibm.portal.context.enable configuration parameter is specified in the portlet.xml. This parameter plays the same functional role as the standard portlet preference. Additionally, you must also modify the web.xml file to receive portlet properties. The servlet class entry should specify the com.ibm.wps.pb.wrapper.PortletWrapper class. See the [Packaging, deploying and compiling cooperative portlets](wpsc2apackage.md) section for more information.

4.  Developing the page definition for dynamic pages.

    1.  Create the layout and content of the page definition from which dynamic pages are launched. For development purposes, you can use Manage Pages as you work with the visual layout.

    2.  Assign a unique name to the page using the Unique names portlet. The portlet uses this name to lookup the object ID of the page definition.

5.  Developing the dynamic UI launching portlet

    1.  Using JNDI lookup, obtain a reference to the required portlet services.

        ```xmp
        
        
        private DynamicUIManagementFactoryService dynamicUIManagerFactoryService;
        private RedirectURLGeneratorFactoryService redirectService;
        PropertyFactory propertyFactory;
        ...
        
        // Obtain a reference to the Dynamic UI Management Factory service
        PortletServiceHome dynamicUIManagerFactoryServiceHome = (PortletServiceHome) 
           ctx.lookup("portletservice/com.ibm.portal.portlet.service.dynamicui.DynamicUIManagementFactoryService"); 
        dynamicUIManagerFactoryService = (DynamicUIManagementFactoryService) 
           dynamicUIManagerFactoryServiceHome.getPortletService(DynamicUIManagementFactoryService.class);
        
        // Obtain a reference to the property factory
        PortletServiceHome serviceHome = (PortletServiceHome) 
           ctx.lookup("portletservice/com.ibm.portal.propertybroker.service.PropertyFactory"); 
           propertyFactory = 
             (PropertyFactory)serviceHome.getPortletService(com.ibm.portal.propertybroker.service.PropertyFactory.class);
        
        // If the dynamic UI should be displayed immediately upon launch,
        // obtain a reference to the RedirectURLGeneratorFactory service 
           PortletServiceHome redirectServiceHome = (PortletServiceHome) 
              ctx.lookup("portletservice/com.ibm.portal.portlet.service.state.RedirectURLGeneratorFactoryService");
           redirectService = (RedirectURLGeneratorFactoryService) 
           redirectServiceHome.getPortletService(RedirectURLGeneratorFactoryService.class);
        
        
        ```

    2.  Obtain the object ID of the page definition or portlet definition. This can be done using either a unique name \(for a page or portlet definition\) or portlet name + portlet-app ID \(portlet definition only\).

        -   **Using a unique name:**

            ```xmp
            Context ctx = new InitialContext();
            
            ...
            
            Name uniqueName = new CompositeName("portal:uniquename");
            
            uniqueName.add(yourUniqueName);
            ObjectID oidForName = (ObjectID) ctx.lookup(uniqueName);
            
            
            ```

        -   **Using portlet name + porlet-app id:**

            ```xmp
            Context ctx = new InitialContext();
            
            ...
            
            Name portletName = 
                 new CompositeName("portal:config/portletdefinition");
            portletName.add(appID);
            portletName.add(portletName);
            
            ObjectID portletDefOID = (ObjectID) ctx.lookup(portletName);
            
            ```

    3.  Obtain an instance of the DynamicUICtrl interface from the factory.

        The factory expects the Render/ Action Request/Response followed by the configuration name \(String\) as input parameters. The DynamicUICtrl that is returned is parameterized with the request/response. The DynamicUICtrl must be obtained once per request and should not be stored.

        ```xmp
        
        DynamicUICtrl DynamicUICtrl = 
            dynamicUIManagerFactoryService.getDynamicUICtrl(request, response, extensionNode);
        
        
        ```

    4.  Create the properties that need to be passed to the dynamic UI.

        ```xmp
        PropertyController property1 = propertyFactory.createProperty(config); 
        property1.setName(propertyKey);
        property1.setClassname("java.lang.String");
        property1.setDirection(Direction.OUT);
        
        PropertyValue value = 
            propertyFactory.createPropertyValue(request, property1, propertyValue);
        PropertyValue[] propertyValues = new PropertyValue[1];
        propertyValues[0] = value;  
        
        ```

    5.  Launch the dynamic UI using the addPage\(\) or addPortlet methods and passing the object ID of the page/portlet definition. Example of launching a page:

        ```xmp
        
        DynamicUICtrl.addPage(pageDefinitionID, 
                      new LocalizedImpl(title,description), propertyValues);
        
        
        ```

    6.  Navigate the user to the newly launched page using a redirect.

        ```xmp
        
        RedirectURLGenerator redirector = 
                          redirectService.getURLGenerator(request, response);
        EngineURL redirectURL = redirector.createPortletURL(launchedPortlet);
        
        response.sendRedirect(redirectURL.toString());
        
        
        ```

6.  Providing controls for closing dynamic UIs.

    In many cases you can allow the user to explicitly close a dynamic UI from a theme or skin. These icons are enabled by using the `<portal:closePage/>` and `<portal:closePortlet/>` tags. See [Tags used by the portal JSPs](dgn_ptltld.md#) for more information.

    As an alternative, the launching portlet can close a dynamic UI using the removePage\(\) or removePortlet\(\) methods of the DynamicUICtrl interface, providing the object ID of the dynamic UI as input on the call. If removing a dynamic portlet, the calling portlet must be on the same page.

7.  Testing the configuration.

    Each dynamic UI configuration has its own requirements, design, and implementation, and therefore, a different set of test cases. However, you should always verify the following general behaviors.

    -   Pages and portlets are created and removed successfully.
    -   Each time a dynamic UI is launched, a new instance of the page or portlet is created or, in the case of shared dynamic UIs, the user is returned to an existing instance.
    -   Properties are passed and processed by the dynamic portlets as expected.
    -   As portlets are added and removed from a dynamic page, the page maintains a balanced layout.
8.  Deploying the configuration

    When the dynamic UI configuration is ready to be promoted to a production level server, create the XMLAccess scripts that contain the necessary page and portlet definitions. You can use the Manage Pages portlet to export the page configuration to XMLAccess, including any wires or unique names used by the configuration.


**Parent topic:**[Dynamic user interfaces](../dev-portlet/wpsdynui_cpts.md)

