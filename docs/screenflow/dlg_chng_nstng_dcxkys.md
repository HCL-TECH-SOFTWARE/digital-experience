# Dialog chaining and nesting DCX keys and event mappers

In context of dialog chaining or nesting, DCX keys and mappers never influence another dialogs DCX segment. When a transition part of a calling dialog uses a DCX key or a mapper it influences only the data that is stored in the calling dialog's DCX segment and not the called dialog's segment. Similarly, when a transition part of a called dialog uses a DCX key or a mapper it influences only the data that is stored in the called dialog's DCX segment and not the calling dialog's segment.

Use of DCX keys and mappers in dialog chaining or dialog nesting is required to properly exchange data between the calling and called dialogs. In many cases, called dialogs are developed independently from calling dialogs, not intended to be part of another dialog.

For example, consider a travel booking screen flow. It consists of steps that allow to book a flight, a hotel, and a car after a particular date of travel, and destination is specified. Before the agent can start booking, the customer's personal data needs to be collected. Assume that another screen flow, a billing screen flow, is already modeled which allows the agent to look up this data through a customer ID. Thus the entire flow requires the booking to be started, the personal data to be collected and updated and finally the actual bookings to be done.

DCX keys

Assume the travel booking screen flow that carries the customer information under the key `travellerID` to be the blue screen flow. Assume the billing screen flow that carries the customer information under the key `customerID` to be the red screen flow.

1.  During step 1, the `travellerID` is specified along with the date of travel, and destination. The red screen flow is started in a nested fashion.
2.  During step 2, the red screen flow is supposed to display the customer information such as name, and address.
3.  During step 3, the red screen flow must allow for updating the customer information. The red screen flow needs to be fed with the `travellerID` but expects it to be sent with an event with `QName customerID`.
4.  The entire set of customer information such as name, and address, is packaged in a special customer object. This customer object is emitted by thered screen flow's end transition under the key `customerBean`.
5.  The blue screen flow requires this data but expects it to be sent by an event with `QName travellerBean`. The `travellerID` needs to be converted to `customerID` and `travellerBean` to `customerBean`.

The following code sample shows an option to convert the event `Qnames`. The outgoing transition responsible for calling the red dialog assigned the attribute `dcx-key` with value `customerID` to the event element associated with this transition's source transition endpoint. Thus, even though the transition endpoint step\_1 emits an event with `QName travellerID`, the information is stored in theblue dialog's DCX under the key `customerID`. Thus it can be sent to the red dialog through an event with `QName customerID` as the corresponding payload can be found in the blue dialog's DCX under exactly that key. The blue dialog's incoming transition receives the customer information through an event with `QName customerBean`, but stores the corresponding payload under the key `travellerBean`. Thus the customer information can be propagated with events with `QName travellerBean` as the corresponding payload can be found in the blue dialog's DCX under exactly that name.

Code sample

```

<dialog name="dialog blue">
  ...
  <transition type="nested">
      <source>
          <transition-endpoint nameref="step_1">
              <event qname="travellerID" dcx-key="customerID"/>
          </transition-endpoint>
      </source>
      <target>
          <transition-endpoint nameref="dialog red">
              <event qname="customerID"/>
          </transition-endpoint>
      </target>
  </transition>
  ...
  <transition>
      <source>
          <transition-endpoint nameref="dialog red">
              <event qname="customerBean" dcx-key="travellerBean"/>
          </transition-endpoint>
      </source>
      <target>
          <transition-endpoint nameref="step 4">
              <event qname="travellerBean"/>
          </transition-endpoint>
      </target>
  </transition>
  ...
</dialog>
...
<dialog name="dialog red">
 ...
  <transition type="start">
      <source>
          <transition-endpoint nameref="...">
              <event qname="customerID"/>
          </transition-endpoint>
      </source>
      <target>
          <transition-endpoint nameref="step_2">
              <event qname="customerID"/>
          </transition-endpoint>
      </target>
  </transition>
  ...
  <transition type="end">
      <source>
          <transition-endpoint nameref="step 3">
              <event qname="customerBean"/>
          </transition-endpoint>
      </source>
      <target>
          <transition-endpoint nameref="PAGE ORIGIN">
              <event qname="customerBean"/>
          </transition-endpoint>
      </target>
  </transition>
  ...
</dialog>
...
</dialog>

```

Event mappers

Assume the screen flow that carries the customer information under the key `travellerID` to be the blue screen flow. Assume the screen flow that carries the customer information under the key `customerID` to be the red screen flow. Assume the `travellerID` is of type `string` while the `customerID` is of type `Integer`. Also, assume that the beans `travellerBean` and `customerBean` differ not only by name but are also of different object type.

The following code sample shows an option to convert the keys and the bean. The mappers ensure that the events are properly renamed and the data types are properly transformed.

Code sample

```

<dialog name="dialog blue">
  ...
  <transition type="nested">
      <source>
          <transition-endpoint nameref="step 1">
              <event qname="travellerID" mapper-class="B2RMapper"/>
          </transition-endpoint>
      </source>
      <target>
          <transition-endpoint nameref="dialog red">
              <event qname="customerID"/>
          </transition-endpoint>
      </target>
  </transition>
  ...
  <transition>
      <source>
          <transition-endpoint nameref="dialog red">
              <event qname="customerBean" mapper-class="R2BMapper"/>
          </transition-endpoint>
      </source>
      <target>
          <transition-endpoint nameref="step 4">
              <event qname="travellerBean"/>
          </transition-endpoint>
      </target>
  </transition>
  ...
</dialog>
...
<dialog name="dialog red">
 ...
  <transition type="start">
      <source>
          <transition-endpoint nameref="...">
              <event qname="customerID"/>
          </transition-endpoint>
      </source>
      <target>
          <transition-endpoint nameref="step_2">
              <event qname="customerID"/>
          </transition-endpoint>
      </target>
  </transition>
  ...
  <transition type="end">
      <source>
          <transition-endpoint nameref="step 3">
              <event qname="customerBean"/>
          </transition-endpoint>
      </source>
      <target>
          <transition-endpoint nameref="PAGE ORIGIN">
              <event qname="customerBean"/>
          </transition-endpoint>
      </target>
  </transition>
  ...
</dialog>
...
</dialog>

```

**Note:** In the context of dialog chaining and dialog nesting, the definition of a mapper as part of an outgoing transition's target is invalid. The definition of a mapper as part of the called dialog's start transition's source is also invalid.

**Parent topic:**[Retrieve and store event payload ](../screenflow/ret_str_evnt_pyld.md)

