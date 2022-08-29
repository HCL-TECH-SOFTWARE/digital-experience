# Start transitions and special events

You can define a dialog to starts if a special start event is emitted from a specific source or from an arbitrary source.

This special start event is identified by the following `QName:`

```
{http://www.ibm.com/xmlns/prod/websphere/portal/v6.1.0/portal-pcm}StartDialog
```

Its payload needs to implement the interface `com.ibm.portal.pcm.events.DialogStartPayload`.

This special start event provides extra ways to start dialogs or screen flows. For example, by implementing the methods of that interface, you can programmatically control the name of the dialog that you want to start.

The code sample shows a dialog definition that uses the special start event. In this sample, if a portlet emits the special start event, the dialog with the name returned by the `getDialogDefinitionName()` method is started.

**Note:** The central idea of the HCL UX Screen Flow Manager is to control transitions that are based on the declarative model. Therefore, use this more programmatic approach with care and only if you cannot implement your goal by other means.

```

  <transition type="start">
      <source>
          <transition-endpoint nameref="*">
              <event qname="{http://www.ibm.com/xmlns/prod/websphere/portal/v6.1.0/portal-pcm}StartDialog"/>
          </transition-endpoint>
      </source>
      <target>
          ...
      </target>
  </transition>
```

It might happen that a JSR-286 event is emitted by a portlet that participates in a dialog, but is not defined as part of a transition. Events that occur outside of a screen flow transition are not affected by the HCL UX Screen Flow Manager. They are delivered as if HCL UX Screen Flow Manager was not present. The previous code sample shows as an example: If portlet4 emits an event eX, a matching transition is found and therefore run. If portlet4 emits an event eY, a matching transition cannot be found, and therefore no transition is run. Nevertheless, the emission of the event eY affects the screen flow. For example, portlet4 might be on page4, together with another portlet portlet5. Then, if portlet5 can receive the event eY. The event eY is delivered from portlet4 to portlet5, as if the IBM UX Screen Flow Manager were not present. The central idea of the HCL UX Screen Flow Manager is to control transitions that are based on the declarative model. Therefore, use this more programmatic approach with care and only if you cannot implement your goal by other means.

As you can start dialogs by specifying dedicated transition endpoints, undetermined transition endpoints, dedicated events, or special start events, several combinations are possible. The code sample shows the behavior and interplay of these combinations.

```

 <dialog name="dialog1">
  <transition type="start">
      <source>
          <transition-endpoint nameref="*">
              <event qname="{http://www.ibm.com/xmlns/prod/websphere/portal/v6.1.0/portal-pcm}StartDialog"/>
          </transition-endpoint>
      </source>
      ...
  </transition>
 </dialog>

<dialog name="dialog2">
  <transition type="start">
      <source>
         <transition-endpoint nameref="*">
              <event qname="eX"/>
          </transition-endpoint>
      </source>
      ...
  </transition>
 </dialog>

 <dialog name="dialog3">
  <transition type="start">
      <source>
          <transition-endpoint nameref="portlet3">
              <event qname="{http://www.ibm.com/xmlns/prod/websphere/portal/v6.1.0/portal-pcm}StartDialog"/>
          </transition-endpoint>
      </source>
      ...
  </transition>
 </dialog>

 <dialog name="dialog4">
  <transition type="start">
      <source>
          <transition-endpoint nameref="portlet4">
              <event qname="eX"/>
          </transition-endpoint>
      </source>
      ...
  </transition>
 </dialog>
```

**Parent topic:**[Transitions](../screenflow/transitions.md)

**Related information**  


[Configuration options](../screenflow/cfg_opt.md)

