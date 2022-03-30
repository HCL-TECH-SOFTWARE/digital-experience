# Multiple start transitions

In case the called dialog has multiple start transitions that can be triggered by the emission of an event, the start transition that needs to be triggered can be controlled. To control which of the potentially matching start transitions must be triggered, an attribute ENTRY-POINT is assigned to the transition-endpoint element that references the dialog to be called.

The following code sample shows an example.

In the sample `dialog1` calls `dialog2`. `Dialog2` has two start transitions, which are both triggered by the emission of the event `eX`. The transition that calls `dialog2` from within `dialog1` uses the `entry-point` attribute. The attribute points to the respective source transition-endpoint `portlet1` of the transition to be triggered.

For example, in a travel site, Flight booking dialog transitions to the Car booking dialog. The Car booking dialog can start either from the Renters information portlet or the Calendar portlet. The transition uses to the `entry-point` to point to the portlet that needs to be start.

```

<dialog name="dialog1">
  ...
  <transition type="nested">
      <source>
          <transition-endpoint nameref="portlet1">
              <event qname="e1a"/>
          </transition-endpoint>
      </source>
      <target>
          <transition-endpoint nameref="dialog2" entry-point="portlet1">
              event qname="eX"/>
          </transition-endpoint>
      </target>
  </transition>
  ...
</dialog>
  ...
  <transition type="start">
      <source>
          <transition-endpoint nameref="portlet1">
              <event qname="eX"/>
          </transition-endpoint>
      </source>
      <target>
          <transition-endpoint nameref="portlet3">
             <event qname="eX"/>
          </transition-endpoint>
      </target>
  </transition>
  <transition type="start">
      <source>
          <transition-endpoint nameref="portlet2">
              <event qname="eX"/>
          </transition-endpoint>
      </source>
      <target>
          <transition-endpoint nameref="portlet3">
             <event qname="eX"/>
          </transition-endpoint>
      </target>
  </transition>
  ...
</dialog>  
```

**Parent topic:**[Dialog chaining and nesting](../screenflow/dlg_chng_nstng.md)

