# Event Mappers

In more complex scenarios, adapting only the event names or QNames might not be enough. Sometimes you might need to transform the payload.

For example, in a travel site, a passenger information portlet `portlet1` emits a passenger ID under the key `passengerID`. The payload is of type `Integer`. A second portlet, a car renters information portlet `portlet2` expects a passenger ID under the key `userID`, and sent as payload of type `String`.

As with DCX keys to enable the passenger information portlet `portlet1` to communicate with the car renters information portlet `portlet2`, you have the following two options:

-   You can make the passenger information portlet `portlet1` store its payload under the key `userID` and as of type `String,` even though it emits an event with the `QName employeeID` and as of type `Integer`.
-   You can make the car renters information portlet `portlet2` read the key `employeeID` and as of type `Integer`, even though it expects an event with the `QName userID` and as of type `String.`

Mappers have full access to the DCX segment of the currently processed dialog instance and also to the payload that is being processed. Therefore, mappers are powerful tools, as they can run various transformations.

Implement `MapperFactory` to make the mappers available. You can register the `MapperFactory` with an Eclipse Extension Point. The advantage of this approach is that you can register new mappers without having to restart the server. This method is also called hot deployment. To use a `MapperFactory`, you need to implement the interface `MapperFactory` and return an object instance of type `ContextToPayloadMapper` or `PayloadToContextMapper`. This implementation depends on the concrete event mapper that is requested.

The following code sample shows an example of how a `MapperFactory` can look.

Code sample

```

 public class MapperFactory implements com.ibm.portal.pcm.events.MapperFactory {
 
  public ContextToPayloadMapper getContextToPayloadMapper(String name) {      
      ContextToPayloadMapper result = null;       
      if (name.equals("myPackage.myMapper")) {
          result = new MyMapper();
      }
 
      return result;
  }
 
  public PayloadToContextMapper getPayloadToContextMapper(String name) {
      // ...
  }
 }

```

The following code sample shows how you can register a `MapperFactory` with a plugin.xml file.

Code sample

```

 <plugin
     id="com.ibm.wps.portlet.pcm.demo"
     name="Portlet Control Manager Demo"
     version="1.0.0"
     provider-name="IBM">

     <!-- Mapper Factory -->
     <extension point="com.ibm.portal.pcm.MapperFactory" id="PcmMapperFactory">
         <factory class="com.ibm.wps.pcm.demo.mapper.MapperFactory"/>
     </extension>
 </plugin>

```

-   **[Event mapper types](../screenflow/evnt_mprs_type.md)**  
HCL UX Screen Flow Manager supports the following two types of event mappers: PayloadToContextMappers and ContextToPayloadMappers.
-   **[Packaging of event mappers and JAXB serialization](../screenflow/pkg_evntmpr_jaxb_srlztn.md)**  
It is good practice to package event mappers in a shared library rather than together with the business portlets.

**Parent topic:**[Retrieve and store event payload](../screenflow/ret_str_evnt_pyld.md)

**Related information**  


[Retrieve and store event payload](../screenflow/ret_str_evnt_pyld.md)

