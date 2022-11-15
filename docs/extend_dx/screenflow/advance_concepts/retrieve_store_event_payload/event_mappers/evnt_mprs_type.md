# Event mapper types

HCL UX Screen Flow Manager supports the following two types of event mappers: PayloadToContextMappers and ContextToPayloadMappers.

Consider the following example to understand how the two types of event mappers function.

Example: In a travel site, a passenger information portlet `portlet1` emits a passenger ID under the key `passengerID`. The payload is of type `Integer`. A second portlet, a car renters information portlet `portlet2` expects a passenger ID under the key `userID`, and sent as payload of type `String`.

-   `PayloadToContextMappers` mappers transform an event that is emitted by a transition source and influence the way that it is stored in the DCX segment. These mappers are started before data is stored in the DCX and therefore can control the key under which data is stored and the data type.

    The following code sample shows how you can use a `PayloadToContextMapper` to enable the passenger information portlet `portlet1` and the car renters information portlet `portlet2` in the example to communicate with each other.

    Code sample

    ```
    
     public void payloadToContext(final QName dcxKey, final Object payload, final DCXData dcxData) {
       // ...
     
       QName mappedDcxKey = new QName("userID");
       String transformedPayload = ((Integer)payload).toString();
     
       dcxData.put(mappedDcxKey, transformedPayload);
     }  
    
    ```

    To use this mapper, you need to implement the interface `PayloadToContextMapper`. The input parameters carry information about the following two items:

    -   The DCX key that is used to store the event as defined in association with the source, if it is not changed by the mapper.
    -   The payload that is stored under this key, if it is not changed by the mapper.
    The input parameters also provide a reference to the DCX segment that belongs to a specific dialog instance. In this example, the mapper changes the DCX key where the payload is to be stored and the payload itself by transforming it from type `Integer` to type `String`.

    The following code sample shows how to register `PayloadToContextMappers`.

    Code sample

    ```
    
     <transition>
         <source>
             <transition-endpoint nameref="portlet1">
                 <event qname="passengerID" mapper-class="myPackage.myMapper"/>
             </transition-endpoint>
         </source>
         <target>
             <transition-endpoint nameref="portlet2">
                 <event qname="userID"/>
             </transition-endpoint>
         </target>
     </transition>
    
    ```

-   `ContextToPayloadMappers` can transform an event before it is transmitted to a transition target. These mappers are started after data is read from the DCX and before it is transmitted to the target. This action means that these mappers can influence the payload before it is sent.

    The following code sample shows how you can use a `ContextToPayloadMapper` to enable the passenger information portlet `portlet1` and the car renters information portlet `portlet2` in the example to communicate with each other.

    Code sample

    ```
    
    public Serializable contextToPayload(final DCXData dcxData, final QName dcxKey, final Class<?> targetClass) {
       // ...        
       Object payload = dcxData.get(dcxKey, targetClass);
       String transformedPayload = ((Integer)payload).toString();
    
       return (Serializable) transformedPayload;
    }
    ```

    To use this mapper, you need to implement the interface `ContextToPayloadMapper`. The input parameters carry information about the following two items:

    -   The DCX key or `QName` that is used to send the event as defined in association with the source.
    -   The payload is sent under this key - if it is not changed by the mapper.
    The input parameters also provide a reference to the DCX segment that belongs to a specific dialog instance. In this example, the mapper changes the type of the payload that is to be sent by transforming it from type `Integer` to type `String`.

    The following code sample shows how to register `ContextToPayloadMappers`.

    Code sample

    ```
    
      <transition>
          <source>
              <transition-endpoint nameref="portlet1">
                  <event qname="passengerID"/>
              </transition-endpoint>
          </source>
          <target>
              <transition-endpoint nameref="portlet2">
                  <event qname="userID" dcx-key="employeeID" mapper-class="myPackage.myMapper"/>
              </transition-endpoint>
          </target>
      </transition>
    
    ```


**Parent topic:**[Event Mappers](../screenflow/evnt_mprs.md)

