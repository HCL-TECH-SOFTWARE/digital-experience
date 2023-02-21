# Execution priority

You can and must explicitly model and enforce a deterministic behavior for the transitions. Even if the entire set of dialogs is deterministic, the emission of an event by a particular portlet can trigger two different transitions of two different dialogs. Therefore, you must explicitly model the intended behavior of the transitions.

For example, when a `portlet1` emits an event `e1`, two different transitions T1 and T2 can be triggered. The transition T1 as part of an active dialog D1 and the start transition T2 as part of another dialog D2 both react on the same event `e1`. After `portlet1` emits `e1`, the transitions needs to determine whether to continue with D1 or to suspend D1 and start D2.

You can explicitly model the intended behavior of the transitions by using the optional attribute `priority`. The attribute `priority` is assigned to the element dialog. Valid values that you can use are `preserve` and `suspend`. The default value is set to `suspend` unless you configure the settings differently. For more information about configuring, go to *Configuration Options*.

The value `preserve` defines that the transition that is part of an active dialog always wins. For example, after `portlet1` emits the event `e1`, the transition continues with active dialog D1 instead of switching to another dialog D2.

The value `suspend` defines that start-transitions always win. For example, after `portlet1` emits the event `e1`, the transition suspends the active dialog D1 and starts another dialog D2. If the attribute is not specified, the default value is applied.

The following code samples show the outlined behavior under the assumption that `dialog1` is already active. In the following code sample, after `portlet1` emits the event `e1`, both the transitions shown theoretically fit. Since, for `dailog1` the attribute `priority` is set to `suspend`, the intended behavior is to prefer triggering matching start transitions. Matching start transitions are triggered even if they are part of the active dialog. Hence in this case `dialog1` is suspended and the user must continue with `dialog2` and is redirected to `portlet3`.

Code sample:

```

 <dialog name="dialog1" priority="suspend">
     ...
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
     ...
 </dialog>
 ...
 <dialog name="dialog2">
     ...
     <transition type="start">
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
     ...
 </dialog>    

```

In the following code sample, after `portlet1` emits the event `e1`, both transitions shown theoretically fit. Since for `dialog1` the attribute `priority` is set to `preserve`, the intended behavior is to prefer triggering a matching transition that is a part of the active dialog. Thus, in this case the user continues with `dialog1` and is redirected to `portlet2`.

Code sample:

```

<dialog name="dialog1" priority="preserve">
     ...
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
     ...
 </dialog>
 ...
 <dialog name="dialog2">
     ...
     <transition type="start">
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
     ...
 </dialog>  

```

!!!note
    In the context of dialog chaining or nesting, the attribute `priority` is not inherited. For example, when a dialog D1 calls another dialog D2, the attribute `priority`, which might be specified for D1 is not propagated to D2.



???+ info "Related information" 
    -   [Configuration options](../../../cfg_opt.md)

