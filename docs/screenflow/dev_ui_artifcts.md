# Developing user interface artifacts 

Every screen flow needs a starting point from which it can be triggered. The user interface components that you develop and their functions enable the screen flow to be triggered and processed. Independent of the type of user interface artifact you develop, it must send and receive JSR-286 events to enable a screen flow. Therefore, you must implement or reuse JSR-286 compliant portlets that send and receive such events.

For example, assume in a travel site for a Flight booking page, the Passenger information portlet portlet1 and the Calendar portlet portlet2 are two portlets that you developed.

-   The Passenger information portlet portlet1 must be able to receive an event with the QName e0 and to send an event with the QName e1.
-   The Calendar portlet portlet2 must be able to receive an event with the QName e1 and to send an event with the QName e2.

When the Passenger information portlet portlet1 sends the event e1, the user is routed from the Passenger information portlet portlet1 to the Calendar portlet portlet2. For more information, go to *Transitions*.

To enable the Passenger information portlet portlet1 to receive and send the mentioned events, you need to do the following two things:

-   Specify the events in the portlet.xml file of the portlet.

```
<portlet id="portlet1">
 ...
  <supported-processing-event>
      <qname>e0</qname>
  </supported-processing-event>
  <supported-publishing-event>
      <qname>e1</qname>
  </supported-publishing-event>
 </portlet>
 
 <event-definition>
  <qname>e0</qname>
  <value-type>java.lang.String</value-type>
 </event-definition>
 <event-definition>
  <qname>e1</qname>
  <value-type>java.lang.String</value-type>
 </event-definition>
```

-   Include code in the portlet that can handle an incoming event and another code that can send an event.

```
 @Override
 public void processAction(ActionRequest request, ActionResponse response)
      throws PortletException, IOException {
  // ...
  
  response.setEvent(new QName("e1", "xyz"), new String());
 }

 @Override
 public void processEvent(EventRequest request, EventResponse response)
      throws PortletException, IOException {
 
  final Event event = request.getEvent();
  // ...
```

Make similar changes to the Calendar portlet portlet 2.

```
 <portlet id="portlet2">
  ...
  <supported-processing-event>
      <qname>e1</qname>
  </supported-processing-event>
  <supported-publishing-event>
      <qname>e2</qname>
  </supported-publishing-event>
 </portlet>
 
 <event-definition>
  <qname>e1</qname>
  <value-type>java.lang.String</value-type>
</event-definition>
 <event-definition>
  <qname>e2</qname>
  <value-type>java.lang.String</value-type>
 </event-definition>
```

```
 @Override
 public void processAction(ActionRequest request, ActionResponse response)
      throws PortletException, IOException {
  // ...
 
  response.setEvent(new QName("e2", "xyz"), new String());
 }
 
 @Override
 public void processEvent(EventRequest request, EventResponse response)
      throws PortletException, IOException {

  final Event event = request.getEvent();
  // ...
```

If you want to integrate forms such as passenger information form or widgets such as calendar, you can use such a portlet as a wrapper for these artifacts. For more information about developing portlets, go to *Developing portlets in the WebSphere® Portal Version 8.0 product documentation.*

The portlets that can start screen flows are referred to as Dialog Instantiation and Initialization portlets \(DIIPs\). You can usually distinguish between two kinds of DIIPs:

-   One type of DIIP triggers a new dialog instance by sending a well-defined start-event.
-   The other type of DIIP triggers a new dialog that is based on the fact that a specific portlet emits a specific custom event.

In either case, the event emission causes a new screen flow to be started and initialized with some initial data that the event payload transmits.

With the Screen Flow Manager, different teams or even third-party vendors can develop different types of user interface \(UI\) artifacts. These artifacts are usually portlets, but can also be widgets or forms. For more details, go to *iWidgets Development in the IBM® Rational® Application Developer documentation*.

**Parent topic:**[Developing screen flows](../screenflow/dev_scrnflow.md)

**Related information**  


[Transitions](../screenflow/transitions.md)

