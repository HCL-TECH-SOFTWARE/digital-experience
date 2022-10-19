# Creating your own portlet service

Write a portlet service by defining the interface, writing the service implementation, making the service accessible, and registering the service.

Writing a portlet service consists of four steps:

The service provider interfaces can be used to write portlet services for Standard portlets. The HCL Portlet API is no longer supported starting with HCL Portal Version 8.5.0. You must convert portlets based on the HCL Portlet API to the Standard Portlet API. Learn how to convert HCL Portlets to Standard API portlets.

## Defining the interface

This step is not required if you want to implement your service against an existing interface. Defining a portlet service interface requires the same careful considerations as defining any public API interface. A portlet service interface must extend the `PortletService` interface defined in the com.ibm.portal.portlet.service package. The following is an example interface for the `HelloWorldService` .

```xmp

package sample.portletservice;

import java.io.IOException;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import com.ibm.portal.portlet.service.PortletService;

public interface HelloService extends PortletService
{
    /** print a nice greeting */
    public void sayHello(RenderRequest request, RenderResponse response) 
           throws IOException;
}


```

## Writing the service implementation

The service implementation must implement the PortletServiceProvider interface of the com.ibm.portal.portlet.service.spi package to be able to make use of the portlet service life cycle methods in addition to your service interface. The `PortletServiceConfig` parameter of the init\(\) method allows you, for example, to access the configuration of the service \(see [Registering the service](#reg_service) for more information\).

```xmp


package sample.portletservice;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.prefs.Preferences;

import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;

import com.ibm.portal.portlet.service.spi.PortletServiceProvider;
 
public class HelloServiceImpl 
    implements HelloService, PortletServiceProvider {
    
    private String message;
        
    // called by the portal when the service is initialized        
    public void init(Preferences servicePreferences) {
        
        // read the message from the configuration, default is "Hello"
        message = servicePreferences.get("message", "Hello");
    }
        
    public void sayHello(RenderRequest request, RenderResponse response) 
                throws IOException {
        String user = request.getRemoteUser();
        if (user == null)
            // no user logged in
            user = "Stranger";
        
        PrintWriter out = response.getWriter();
        out.print(message);
        out.print(", ");
        out.print(user);            
    }

}


```

## Making the service accessible for HCL Digital Experience portlets

This step is optional. If you want your portlet service to be available for HCL portlets, you need to create an additional service interface that extends org.apache.jetspeed.portlet.service.PortletService and provides the same functionality.

```xmp


package sample.portletservice;

import java.io.IOException;
import org.apache.jetspeed.portlet.PortletRequest;
import org.apache.jetspeed.portlet.PortletResponse;
import org.apache.jetspeed.portlet.service.PortletService;

public interface HelloServiceIBM extends PortletService {

    /** print a nice greeting */
    public void sayHello(PortletRequest request, PortletResponse response) throws IOException;

}


```

You can have a single implementation that is registered for both interfaces and implements both. If the service methods take arguments that are classes or interfaces from the portlet API, the method signatures are different for the two service interfaces. You can still use a common implementation for both interfaces by using the APIConverterFactory class of the com.ibm.portal.portlet.apiconvert package. This class includes methods that wrap objects from the HCL portlet API, such as PortletRequest and PortletSession, and implement the corresponding standard portlet API objects on the service side, so that you can re-use your service implementation for standard portlets.

```xmp


package sample.portletservice;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.prefs.Preferences;

import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;

import org.apache.jetspeed.portlet.PortletRequest;
import org.apache.jetspeed.portlet.PortletResponse;

import com.ibm.portal.portlet.apiconvert.APIConverterFactory;
import com.ibm.portal.portlet.service.spi.PortletServiceProvider;
 
public class HelloServiceImpl2 
    implements HelloService, HelloServiceIBM, PortletServiceProvider {
    
    private String message;
        
    // called by the portal when the service is initialized        
    public void init(Preferences servicePreferences) {
        
        // read the message from the configuration, default is "Hello"
        message = servicePreferences.get("message", "Hello");
    }
        
    public void sayHello(RenderRequest request, RenderResponse response) 
                throws IOException {
        String user = request.getRemoteUser();
        if (user == null)
            // no user logged in
            user = "Stranger";
        
        PrintWriter out = response.getWriter();
        out.print(message);
        out.print(", ");
        out.print(user);            
    }
    
    public void sayHello(PortletRequest request, PortletResponse response) 
                throws IOException {
        sayHello (APIConverterFactory.getInstance().getRenderRequest(request),
            APIConverterFactory.getInstance().getRenderResponse(response));
    }

}


```

## Registering the service

1.  Put all service interface and implementation classes into a JAR file.
2.  Place the JAR file in the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config` directory.
3.  Register the new portlet service with the WP PortletServiceRegistryService resource environment provider in the WebSphere® Integrated Solutions Console.
    -   Create an entry to register the implementation in the JNDI directory. The name for this entry is jndi.service\_interface and the value is service\_implementation. The fully qualified service interface name can then be used to lookup the service.
    -   Optional: Provide configuration parameters for the implementation. The name for this entry is service\_implementation.parameter and the value is the required parameter value.
4.  Restart HCL Portal to activate the new settings.

In the following example, `HelloService` is the name of the portlet service, `HelloServiceIBM` is the name of the interface for HCL portlets, and the `message` configuration parameter is set with the value `Greetings`.

!!!note
    The colon (:) used in previous versions of HCL Portal to designate JNDI entries with `jndi:` is not supported for resource environment providers. Use `jndi.` instead.

To register this portlet service, add the following property names and values to the PortletServiceRegistryService:

|Property name|Value|
|-------------|-----|
|`jndi.sample.portletservice.HelloService`|`sample.portletservice.HelloServiceImpl2`|
|`sample.portletservice.HelloServiceIBM`|`sample.portletservice.HelloServiceImpl2`|
|`sample.portletservice.HelloServiceImpl2.message`|`Greetings`|

!!!note "Tip"
    To check whether your service has been registered successfully, use the application server dumpNamespace tool. The following command, run from the [AppServer\_root](../reference/wpsdirstr.md#was_root)/bin directory, lists all portlet service entries in JNDI:

```

	dumpNamespace -port bootstrap_port -root server -startAt portletservice

```

Using the WebSphere Integrated Solutions Console, you can find the bootstrap port of your portal server in the "End Points" section of the settings for the server "HCL Portal and HCL Web Content Manager".


