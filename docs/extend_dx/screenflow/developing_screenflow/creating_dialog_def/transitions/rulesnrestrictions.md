# Rules and restrictions

When you model a transition certain rules and restrictions apply.

The following are descriptions of the rules:

1.  The entire set of dialogs, together with all their transitions, needs to be deterministic. That is the transitions need to produce the same results all times. To achieve this condition, the HCL UX Screen Flow Manager must always clearly determine the transition that is to be triggered. The transition is determined based on the transition endpoint that emits an event and the name \(`QName`\) of the event. The screenflow is not valid if the definition is not deterministic. For example, the definition of two dialogs as shown in code sample is not valid, as it is not deterministic: The Screen Flow Manager might not decide whether to trigger the first or the second transition after `portlet1` emits event `e1`.

    Code sample

    ```
    
      <transition>
          <source>
              <transition-endpoint nameref="portlet1">
                  <event qname="e1"/>
              </transition-endpoint>
         </source>
          <target>
             <transition-endpoint nameref="portlet2">
                  <event qname="e2"/>
              </transition-endpoint>
          </target>
      </transition>
      <transition>
          <source>
              <transition-endpoint nameref="portlet1">
                  <event qname="e1"/>
              </transition-endpoint>
         </source>
          <target>
              <transition-endpoint nameref="portlet3">
                  <event qname="e3"/>
             </transition-endpoint>
          </target>
      </transition>
    
    ```

2.  A source cannot reference more than one single transition endpoint.
3.  A target can reference one of the following portal resources:
    -   A single portlet that can receive one or multiple events.
    -   Multiple target portlets. All these portlets must be found on the same page. Each single portlet can receive one or multiple events.
    -   A single target page. Each single portlet on that page can receive the same event or multiple events that are sent to the page. This action is also called broadcasting.
    -   One target page and one or multiple target portlets. All these portlets must be found on the target page. Each single portlet on that page can receive the following types of events:
        -   The same event or multiple events that are sent to the page.
        -   One or multiple dedicated events that are sent to the portlet itself.

**Parent topic:**[Transitions](../screenflow/transitions.md)

