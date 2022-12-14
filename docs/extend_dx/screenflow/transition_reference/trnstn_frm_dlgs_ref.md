# Transitions from dialogs

The following code samples show examples of the various transitions that you can configure with the page as the source.

## Single dialog to single portlet

The following code sample shows a transition where the source points to a single dialog and the target to a single portlet.

The transition represents the incoming transition. When the transition is triggered, it causes the continuation of the dialog that the transition is returned to. For more information about incoming transitions, go to *Transition Endpoints*.

In this code sample, when `dialog2` emits the event `eX`, `dialog1` is continued and is initialized with event `e2`.

Code sample

```

<transition>
   <source>
       <transition-endpoint nameref="dialog2">
            <event qname="eX"/>
       </transition-endpoint>
    </source>
    <target>
        <transition-endpoint nameref="portlet2">
            <event qname="e2"/>
         </transition-endpoint>
     </target>
</transition>
```

## Dialog to dialog

The following code sample shows a transition where the source and the target point to dialogs. This transition represents the dispatching transition.

A dispatching transition is triggered when the transition returns from one dialog and it causes another dialog to start. In this sample when `dialog2` emits the event `eX`, `dialog3` is started and is initialized with the event `eY`. For more information about dispatching transition, go to *Dialog Chaining and Nesting*.

Code sample:

```

<transition type="nested">
   <source>
       <transition-endpoint nameref="dialog2">
            <event qname="eX"/>
       </transition-endpoint>
    </source>
    <target>
        <transition-endpoint nameref="dialog3">
            <event qname="eY"/>
         </transition-endpoint>
     </target>
</transition>
```


???+ info "Related information"
    -   [Dialog chaining and nesting](../../../extend_dx/screenflow/developing_screenflow/creating_dialog_def/transitions/dialog_chain_nest/index.md)
    -   [Transition endpoints](../../../extend_dx/screenflow/developing_screenflow/creating_dialog_def/transition_endpoints/index.md)

