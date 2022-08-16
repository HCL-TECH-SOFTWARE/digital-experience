---
id: h_wab_ipc
title: Web application bridge inter-portlet communication
---
import useBaseUrl from '@docusaurus/useBaseUrl';



The web application bridge supports sending events from the client side and server side. The Web Dock portlet can send and receive events from other portlets on the same page. It uses a client-side technique that is based on OpenAjax. With client-side events, no page refresh is required. The Web Dock portlet can also send events to other portlets. It uses a server-side technique that is based on the JSR 286 event support. With server-side events, a full page refresh is required.

**Restrictions:** Do not configure the same web dock application to publish and subscribe on the same queue, at the same time. Also, if you have multiple web dock applications on a page, the inter-portlet communication feature is disabled.

## Client side: Web Dock portlet as publisher

The client-side eventing method uses the `OpenAjax.hub.publish(name, publisherData)` method. The name parameter is the topic to which the event is published. The publisherData parameter is the data that is passed as an argument to the handler function, which is handling this event.

To enable the Web Dock portlet to publish a client-side event, set the **Publish client side event** to yes. The Web Dock portlet always sends the source element in the form of a Document Object Model \(DOM\) node as the `publisherData`. The source element is the element where the user did some action that resulted in the publishing of the event. The type of event source element preference is used to specify the type of elements that can result in the publishing of an event. The **Type of event captured** specifies the type of events that need to be captured from inside the iFrame of the Web Dock portlet. Both events or elements can be selected from the list or typed in as a comma-separated list. Only the events that are captured from inside the iFrame result in the publishing of an event. By default, the Web Dock portlet publishes to the global topic, which is com.ibm.vwat.event. However, use **Publish event topic**to publish to another topic. The value in **Publish event topic** is appended to "com.ibm.vwat.event" to form the new topic. For example, if **Publish event topic** is set to "myTopic.subTopic1.subTopic2", then the event is published to "com.ibm.vwat.event.myTopic.subTopic1.subTopic2".

## Client side: Web Dock portlet as subscriber

With this client-side method, you subscribe to a topic with the OpenAjax.hub.subscribe\(name, refOrName\) method.

To enable the Web Dock portlet to subscribe to an event, set **Subscribe client side event** to yes. By default, the Web Dock portlet subscribes to the global topic "com.ibm.vwat.event". However, use **Subscribe event topic** to subscribe to a different topic. The Web Dock portlet always expects a URL or a URL fragment as the `publisherData`. The `publisherData` sets the src attribute of the iFrame of the Web Dock portlet. This attribute is used to show content from the new URL on the Web Dock portlet. However, the URL template preference can be used to add a prefix to the publisherData. For example, if URL template is set to http://www.abc.com and the publisherData is /xyz, then the value that is used to set the src attribute of the iFrame is http://www.abc.com/xyz.

The returned value from the `processSubscribedEvent` is used as the URL for the subscriber Web Dock portlet.

## Server side: Web Dock portlet as subscriber

To subscribe the Web Dock portlet to an event, create a wire from some source portlet to the Web Dock portlet with the Portlet Wiring Tool. The Web Dock portlet can subscribe to the following three events:

-   ss\_subscriber\_reset: Resets the Web Dock portlet so that the iFrame points to initial location as given in the Edit Shared Settings. Event definition:

    ```
    <event-definition>
    	  	<qname>vwat:ss_subscriber_reset</qname> 
    	  	<alias>xsd:string</alias>
    	  	<value-type>java.lang.String</value-type>
    </event-definition>
    ```

-   ss\_subscriber\_set: Sets the Web Dock portlet's iFrame URL according to the value received from the event. Event definition:

    ```
    <event-definition>
    	  	<qname>vwat:ss_subscriber_set</qname> 
    	  	<alias>xsd:string</alias>
    	  	<value-type>java.lang.String</value-type>
    </event-definition>
    ```

-   ss\_subscriber\_append: Sets the Web Dock portlet's iFrame URL after you append the value received from the event to the URL template. Event definition:

    ```
    <event-definition>
    	  	<qname>vwat:ss_subscriber_append</qname> 
    	  	<alias>xsd:string</alias>
    	  	<value-type>java.lang.String</value-type>
    </event-definition>
    ```


## Server side: Web Dock portlet as publisher

You can enable the Web Dock portlet to publish a server-side event. Set the **Publish server side event** to yes. Create a wire from the Web Dock portlet to some target portlet with the Portlet Wiring Tool. The Web Dock portlet publishes a JSON string that contains the ID and value properties of the source element. For example, if the **Type of event source element** is a, then the value is the HREF property of the element. The event source element is the element on which the user did some action. This action results in the publishing of the event. The **Type of event captured** is used to specify the type of events; for example, onclick, onchange. Both events or elements can be selected from the list or typed in as a comma-separated list. This event needs to be captured from inside the iFrame of the Web Dock portlet. Only the events that are captured inside the iFrame of the Web Dock portlet result in the publishing of an event.

The **URL template** is a prefix that is added to the event source element.

