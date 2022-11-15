# Referencing dialogs

A transition endpoint can reference dialog as the source of a screen flow transition.

## Reference a single dialog

It is possible to reference a single dialog as part of a transition-endpoint. For example, in a travel site, the steps that are needed to book a flight might represent a single dialog and booking a car might represent another dialog. A transition endpoint can reference the Flight booking dialog or the Car booking dialog.

If a transition defines a target that points to a transition-endpoint that references a dialog, the transition is referred to as outgoing transition. An outgoing transition represents a transition that starts when it leaves the calling dialog and enters the called one. For example, if the Car booking dialog is defined as the target in a transition and the Flight booking dialog is defined as the source, the Flight booking dialog would be the calling dialog and the Car booking dialog would be the called one. Therefore, an outgoing transition is one that starts when it leaves the Flight booking dialog and enters the Car booking dialog.

If a transition defines a source that points to a transition-endpoint that references a dialog, the transition is referred to as incoming transition. An incoming transition represents a transition that starts when it returns from the called dialog and continues with the calling one. For example, if the Flight booking dialog is referenced as the source, a transition that returns from the target Car booking, the called dialog to the source Flight booking, the calling dialog and continues with the steps then it is an incoming transition.

For more information about transitions, go to *Transitions* and for more information about starting dialogs from within other dialogs, go to *Dialog chaining and nesting*.

```

<dialog name="dialog1>
 <transition-endpoint name="dialog2">
      <localedata locale="en">
           <title>Dialog 2</title>
           <description>This is dialog 2</description>
      </localedata>
      <resource uniquename="dialog2"/>
      <invocation type="static"/>
...
 </transition-endpoint>
```

**Parent topic:**[Transition endpoints](../screenflow/ref_trnstn_endpnts.md)

**Related information**  


[Transitions](../screenflow/transitions.md)

[Dialog chaining and nesting](../screenflow/dlg_chng_nstng.md)

