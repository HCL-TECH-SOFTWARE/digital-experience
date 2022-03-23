# Start transitions and wildcards

You can define a dialog to start if one of several source transition endpoints emits a specific event. In this case, the start of the dialog depends only on the event and not on the referenced transition endpoint and event.

Syntactically, you describe an arbitrary source transition endpoint by referencing the transition endpoint with an asterisk \( \* \). In this sample, the dialog `dialog1` is started whenever one of the participating portlets emits the event `e1`.

**Note:** Using this function increases the risk of modeling non-deterministic dialog sets. You must not use an event that is combined with an undetermined source as part of any other dialog's start transition source.

```

  <transition>
      <source>
          <transition-endpoint nameref="*">
              <event qname="e1"/>
          </transition-endpoint>
      </source>
      <target>
          ...
      </target>
  </transition>
```

**Parent topic:**[Transitions](../screenflow/transitions.md)

