# Dialog chaining and nesting

Dialogs can start other dialogs. Dialogs that start other dialogs are referred to as calling dialogs and the dialogs that are being started are referred to as called dialogs. Two different options are available to complete this action such as dialog chaining and dialog nesting.

With dialog chaining option, one dialog can start another dialog in a way that the calling dialog ends after the called one starts. Therefore, after the called one starts, there is no way to go back to the calling one anymore. For example, in a travel site, you can configure the Flight booking or the calling dialog to end after the Car booking or the called dialog starts. After the Car booking dialog starts the user cannot go back to the Flight booking dialog.

With the dialog nesting option, one dialog can start another dialog but the calling dialog does not end after the called dialog starts. Therefore, you can go back and forth between these nested dialogs. For example, in a travel site, you can configure the Flight booking or the calling dialog to pause after the Car booking or the called dialog starts. After the Car booking dialog starts the user cannot go back and forth between the Flight booking and car booking dialogs.

In both options, the calling dialog references the dialog to be called as target. The called dialog starts with the event the calling dialog emits.

A called dialog can start only by triggering one of its start transitions and can end only by triggering one of its end transitions. In the following code sample, `dialog2` must have a start transition, which is triggered by the emission of an event `eX`. The `dialog3` must have a start transition, which is triggered by the emission of an event `eY`.

```

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

```

-   **[Valid and invalid definitions](../screenflow/vld_invld_df.md)**  
Whether you start a dialog in a chained or a nested fashion, the dialogs can be controlled through an attribute TYPE. The attribute TYPE is assigned to the transition-endpoint element. Valid values include CHAINED and NESTED. If you do not specify the attribute, the default attribute value CHAINED is applied.
-   **[Multiple start transitions](../screenflow/mtpl_strt_trnstsn.md)**  
In case the called dialog has multiple start transitions that can be triggered by the emission of an event, the start transition that needs to be triggered can be controlled. To control which of the potentially matching start transitions must be triggered, an attribute ENTRY-POINT is assigned to the transition-endpoint element that references the dialog to be called.
-   **[Incoming transitions](../screenflow/incmng_trnstns.md)**  
When the transitions return from the called dialog to the calling dialog, the incoming transitions can control how the transitions must continue.
-   **[Multiple outgoing transitions](../screenflow/mltpl_outgng_trnstns.md)**  
When the calling dialog has multiple outgoing transitions from which the called dialog can be started, you must define how the transition continues. When you return from the called dialog, you must define that the continuation of transitions within the calling dialog differs. The continuation of transitions differs depending on where you exited the calling dialog.

**Parent topic:**[Transitions](../screenflow/transitions.md)

**Related information**  


[Referencing dialogs](../screenflow/ref_dlgs.md)

[Transitions from portlets](../screenflow/trnstn_frm_ptlts_ref.md)

[Transitions from dialogs](../screenflow/trnstn_frm_dlgs_ref.md)

