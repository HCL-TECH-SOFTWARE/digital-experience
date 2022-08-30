# JSR 286 portlet events based communications

Portlet events provide a powerful and flexible publish/subscribe mechanism for communication between JSR 286 portlets. They can be used to exchange complex data between portlets and to trigger portlet activity such as updates to back end systems. In the portal, they can also interoperate with other communication mechanisms such as Cooperative portlets and click-to-action.

For more information about the portal event distribution mechanism, read the section about the portal *Event broker*.

## Concepts of the Java Portlet Specification 2.0

Programming details for portlet events are defined in the Java Portlet Specification 2.0. Portlets can publish events by using the `response.setEvent()` call and receive events in the `processEvent` method. The `GenericPortlet` class provides a default event handling mechanism that dispatches events based on the `@ProcessEvent` annotation.

As a portlet programmer, declare all events that a portlet can publish or receive in the `portlet.xml` deployment descriptor.

Example declaration in the deployment descriptor:

```
<portlet-app xmlns:x="http://www.cntserv_exmp.com/portlet" 
             xmlns:std="http://somestandardsbody.org/interop-events">
    <portlet>
        ...
        <supported-processing-event>
            <qname>x:address.showForUpdate</qname>
        </supported-processing-event>
        <supported-publishing-event>
            <qname>x:address.updated</qname>
        </supported-publishing-event>
    </portlet>
    <event-definition>
        <qname>x:address.showForUpdate</qname>
        <alias>std:address</alias>
        <value-type>com.acme.portlets.common.Address</value-type>
    </event-definition>  
    <event-definition>
        <qname>x:address.updated</qname>
        <alias>std:address</alias>
        <value-type>com.cntserv_exmp.portlets.common.Address</value-type>
    </event-definition>  
</portlet-app>

```

This declares a publishing and a processing event with a Java payloads of class `com.acme.portlets.common.Address` and global names `address.showForUpdate` and `address.updated` in the namespace `http://cntserv_exmp.com/portlet`. In addition, the alias `address` in the namespace `http://somestandardsbody.org/interop-events` of some presumed standardization organization indicates that these events are compatible with any events of another portlet that has the same alias and can therefore work with input or output values of the provided address type. Here is a coding example:

```
public class MyPortlet extends GenericPortlet {
    public static String NAMESPACE = "http://cntserv_exmp.com/portlet";
    
    @ProcessAction(name="address.updated")
    public void addressUpdated(ActionRequest request, ActionResponse response) {
      ...
      Address myAddress = ...;
      response.setEvent(new QName(NAMESPACE, "address.updated"), myAddress);
    } 
    @ProcessEvent(name="address.showForUpdate")
    public void addressUpdated(EventRequest request, EventResponse response) {
      Address myAddress = (Address) request.getEvent();
      ...
    }

```

## Controlling event distribution in the portal

The Java Portlet Specification intentionally leaves open how events are passed between portlets, but only specifies how they are published and received. In HCL Digital Experience Version 8.5, event distribution is based on the same event broker and wiring techniques that are used to connect cooperative portlets. That means that when you place a portlet on a page, it will initially not be able to publish or receive any events. You must use the portlet wiring tool link to connect the events declared by the portlet to outputs or inputs of other portlets.

Portlets can declare localized display names and descriptions for portlet events in the application resource bundle. Provide at least a display name, as the portlet wiring tool needs this information to display event sources and targets properly.

The portlet `EventDistributionService` provides the option to have user interface elements displayed dependent on whether a given event is wired to targets or not. The wiring information provided by this portlet service is available for all requests in which the property `com.ibm.portal.portlet.Constants.FEATURE_EVENT_DISTRIBUTION_SERVICE` is set and available. For incoming WSRP requests this property is not available.

## Support for complex event types

As noted previously, portlet events support complex Java types as payloads. The Java Portlet Specification requires that such payload classes support Java serialization as well as XML serialization by using Java XML Binding \(JAXB\) annotations. The portal supports transfer of such payloads between portlets, even if they are deployed in different WAR files. However, if the payload class is packaged as part of the portlet WAR file, it is necessary to serialize and deserialize values during the transport because both portlets use different class loaders, which will result in less than optimal run time performance.

To obtain optimal performance for transferring complex Java payloads, at the cost of a more complicated deployment process, remove the payload classes from the WAR file and deploy them in a class loader that is shared by both portlets. You can do this by using the IBM® WebSphere® Application Server shared libraries, or by placing the shared classes in the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config` directory.


**Related information**  


[Public render parameters](../dev-portlet/pltcom_pubrndrprm.md)

