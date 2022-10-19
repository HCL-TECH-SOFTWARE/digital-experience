# Accessing portlet services

Using an example, learn how a standard portlet can retrieve and use a sample portlet service. Accessing a portlet service requires a JNDI lookup for a PortletServiceHome. To use the portlet service, you retrieve a service object from the home, cast it to the service-specific interface and invoke service methods.

This section describes how a portlet can invoke a portlet service. See [Portlet services](wpsptservice.md) for a general overview of portlet services. The following example shows how a standard portlet can retrieve and use a sample portlet service. The service implementation and deployment is explained in [Creating your own portlet service](wpsbsservice.md).

Accessing a portlet service requires a JNDI lookup for a PortletServiceHome. As this is may be a rather expensive operation, you should do it in the init\(\) method of the portlet and store the returned object in an instance variable:

```xmp


   import javax.portlet.*;
   import com.ibm.portal.portlet.service.*;

   private PortletServiceHome helloServiceHome = null;
   ...
   
   public void init(PortletConfig config) 
   {
      javax.naming.Context ctx = new javax.naming.InitialContext();
      try {
          Object home = 
                ctx.lookup("portletservice/sample.portletservice.HelloService");
          if (home != null) 
                   helloServiceHome = (PortletServiceHome) home;
      } catch(javax.naming.NameNotFoundException ex) {
      // we can do without the service, if it is not available
      config.getPortletContext().log("No hello service available");
      }
   }


```

The example is written to gracefully handle a situation where the service is not available because the service is optional for the functionality of the portlet. If possible, you should write your portlets so that they are portable across portal installations, whether they support a given portlet service or not. Such portlets can still run on portals that have not support for portlet services at all and do not even provide the IBM-specifc PortletServiceHome class, because this class is only loaded when the service is actually registered in JNDI.

To use the portlet service, you retrieve a service object from the home, cast it to the service-specific interface and invoke service methods:

```xmp

   public void doView(RenderRequest request, RenderResponse response)
   {
      if (helloServiceHome != null)
      {
         HelloService service = 
               (HelloService) helloServiceHome.getPortletService(HelloService.class);
         service.sayHello(request, response);
      }
   
      //... do other stuff
   }

```

Note that, while it is good practice to store the PortletServiceHome object in an instance variable, you must not store the actual service object, because references to service objects may not be held for longer than a single request.

???+ info "Related information"
      - [Portlet services](../portlet_services/index.md)
      - [Creating your own portlet service](wpsbsservice.md)


