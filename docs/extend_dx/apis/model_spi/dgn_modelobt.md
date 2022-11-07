# Obtain a Model from the Portal

Portal models can be obtained by using three different ways, depending on where the code that uses them is located.

The different ways to obtain Portal models are as follows:

-   **JNDI lookup**

    A JNDI lookup can be done for code that is in a request/response cycle of the portal, for example in a JSP. The lookup results in a home interface from which a model provider can be obtained. Interfaces for the models that are mentioned previously can be found in `com.ibm.portal.model`. To avoid calling the JNDI lookup too often, store the provider object. The following example, which is only applicable to non-portlet code that runs inside of a portal, shows how the content model is obtained by using a JNDI lookup.

    ```xmp
    
    try
    {
       Context ctx = new InitialContext();
    b   ContentModelHome home = (ContentModelHome)
                        ctx.lookup("portal:service/model/ContentModel");
       if (home != null) {
          ContentModelProvider provider = home.getContentModelProvider();
          ContentModel model = 
                          provider.getContentModel(aRequest, aResponse);
    	   ...
       }
    }
    catch (NamingException nx)
    {
        // some error handling code here
    }
    
    
    ```

-   **Portlet service (standard portlet API)**

    Standard portlets can access models through specific portlet services. These portlet services are in `com.ibm.portal.portlet.service.model`. The following example shows how the navigation model is obtained by a standard portlet.

    ```xmp
    
    PortletServiceHome psh;
    javax.naming.Context ctx = new javax.naming.InitialContext();
    boolean serviceAvailable = false;
    try {
       psh = (PortletServiceHome) 
          ctx.lookup("portletservice/com.ibm.portal.portlet.service.model.NavigationModelProvider");
          serviceAvailable = true;
    }
    catch(javax.naming.NameNotFoundException ex) 
    {
        ... error handling...
    }
    ...
    if (serviceAvailable) {
       NavigationModelProvider provider = (NavigationModelProvider)
                               psh.getPortletService(NavigationModelProvider.class);
       NavigationModel model = provider.getNavigationModel(aRequest, aResponse);
       ...
    }
    
    
    ```


**Note the following limitations for obtaining a portal model:**

1.  WSRP portlets must not use the Model SPI.
2.  Model access is only possible after the portal has initialized the request appropriately. Access is possible inside of code that is started through the portal servlet. Models cannot be accessed in servlet filters.


**Related information**  


[Obtaining a controller for working with resources](../dev/ctrlrapit_obtn_ctrlr.md)

