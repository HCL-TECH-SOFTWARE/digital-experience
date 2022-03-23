# Dialog context keys

The dialog context \(DCX\) acts like the transient memory of a dialog. It maintains contextual information that is passed from one portlet to subsequent portlets and provides the information to all subsequent portlets. Data that is stored in the dialog context \(DCX\) is stored only for the lifetime of a user session. If a user logs out of the portal or the user session times out, the current dialog instance, all suspended dialog instances, and all related data are lost.

-   The DCX is divided into segments where each segment holds data or contextual information of a single dialog instance.
-   Normally, when you specify events, the `QName` defines how and under which key the corresponding payload is stored in the segment of the specific dialog instance.

    For example, the DCX contains the following information after you run the transition:

    -   An entry with `key = passengerID`.
    -   A value that matches the payload that was sent with the corresponding event.
    The car renters information portlet `portlet2` is then initialized with the data stored in the DCX under the key `userID`. If no previous transition stored anything under the key `userID, portlet2` does not receive any data.

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
                  <event qname="userID"/>
              </transition-endpoint>
          </target>
      </transition>
    
    ```


DCX keys make it possible to specify under which key a portlet stores data in the DCX, or under which key a portlet reads data from the DCX.

To enable `portlet1` to communicate with `portlet2`, you have the following two options:

-   You can make `portlet1` store its payload under the key `userID,` even though it emits an event with the `QName passengerID`. The following code sample shows how you can make `portlet1` store data under `userID`.

    Code sample

    ```
    
      <transition>
          <source>
              <transition-endpoint nameref="portlet1">
                  <event qname="passengerID" dcx-key="userID"/>
              </transition-endpoint>
          </source>
          <target>
              <transition-endpoint nameref="portlet2">
                  <event qname="userID"/>
              </transition-endpoint>
          </target>
      </transition>
    
    ```

-   You can make `portlet2` read the key `passengerID`, even though it expects an event with the `QName userID`. The following code sample shows how you can make `portlet2` read data under `passengerID`.

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
                  <event qname="userID" dcx-key="passengerID"/>
              </transition-endpoint>
          </target>
      </transition>
    
    ```


**Parent topic:**[Retrieve and store event payload ](../screenflow/ret_str_evnt_pyld.md)

