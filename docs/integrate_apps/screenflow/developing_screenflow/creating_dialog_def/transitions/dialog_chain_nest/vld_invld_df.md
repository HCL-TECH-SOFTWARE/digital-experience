# Valid and invalid definitions

Whether you start a dialog in a chained or a nested fashion, the dialogs can be controlled through an attribute TYPE. The attribute TYPE is assigned to the transition-endpoint element. Valid values include CHAINED and NESTED. If you do not specify the attribute, the default attribute value CHAINED is applied.

The following code sample shows the relevant fragments of valid definitions for the calling dialog `dialog1` and the called dialogs `dialog2` and `dialog3`.

Code sample

```

<dialog name="dialog1">
  ...
  <transition type="chained">
      <source>
          <transition-endpoint nameref="portlet1">
              <event qname="e1a"/>
          </transition-endpoint>
      </source>
      <target>
          <transition-endpoint nameref="dialog2">
              <event qname="eX"/>
          </transition-endpoint>
      </target>
  </transition>
  ...
  <transition type="nested">
      <source>
          <transition-endpoint nameref="portlet1">
              <event qname="e1b"/>
          </transition-endpoint>
      </source>
      <target>
          <transition-endpoint nameref="dialog3">
              <event qname="eY"/>
          </transition-endpoint>
      </target>
  </transition>
  ...
</dialog>
...
<dialog name="dialog2">
  ...
  <transition type="start">
      <source>
          <transition-endpoint nameref="portlet1">
              <event qname="eX"/>
          </transition-endpoint>
      </source>
      <target>
          <transition-endpoint nameref="portlet2">
              <event qname="eX"/>
          </transition-endpoint>
      </target>
  </transition>
  ...
</dialog>
... 
<dialog name="dialog3">
  ...
  <transition type="start">
      <source>
          <transition-endpoint nameref="portlet1">
              <event qname="eY"/>
          </transition-endpoint>
      </source>
      <target>
          <transition-endpoint nameref="portlet2">
              <event qname="eY"/>
          </transition-endpoint>
      </target>
  </transition>
  ...
</dialog>       

```

The following code sample shows invalid definitions as `dialog2` has no start transition that is triggered by the event `eX`.

Code sample

```

<dialog name="dialog1">
  ...
  <transition type="chained">
      <source>
          <transition-endpoint nameref="portlet1">
              <event qname="e1a"/>
          </transition-endpoint>
      </source>
      <target>
          <transition-endpoint nameref="dialog2">
              <event qname="eX"/>
          </transition-endpoint>
      </target>
  </transition>
  ...
  <transition type="nested">
      <source>
          <transition-endpoint nameref="portlet1">
              <event qname="e1b"/>
          </transition-endpoint>
      </source>
      <target>
          <transition-endpoint nameref="dialog3">
              <event qname="eY"/>
          </transition-endpoint>
      </target>
  </transition>
  ...
</dialog>
...
<dialog name="dialog2">
  ...
  <transition type="start">
      <source>
          <transition-endpoint nameref="portlet1">
              <event qname="eZ"/>
          </transition-endpoint>
      </source>
      <target>
          <transition-endpoint nameref="portlet2">
              <event qname="eZ"/>
          </transition-endpoint>
      </target>
  </transition>
  ...
</dialog>
... 
<dialog name="dialog3">
  ...
  <transition type="start">
      <source>
          <transition-endpoint nameref="portlet1">
              <event qname="eY"/>
          </transition-endpoint>
      </source>
      <target>
          <transition-endpoint nameref="portlet2">
              <event qname="eY"/>
          </transition-endpoint>
      </target>
  </transition>
  ...
</dialog>  

```

**Note:** If the dialogs `dialog2` and `dialog3` are started in a chained or nested fashion, the transition endpoint that is referenced by the start transition's source becomes irrelevant.

**Parent topic:**[Dialog chaining and nesting](../screenflow/dlg_chng_nstng.md)

