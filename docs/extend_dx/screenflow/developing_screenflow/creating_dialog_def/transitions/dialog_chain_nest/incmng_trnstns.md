# Incoming transitions

When the transitions return from the called dialog to the calling dialog, the incoming transitions can control how the transitions must continue.

The following code sample shows an example. In the following sample, `dialog1` is the calling dialog that called `dialog2`. After the called dialog `dialog2` ends, the transition returns to the calling dialog `dialog1`. Because `portlet3` emits event `eZ`, the shown incoming transition defines that `dialog1` must continue with `portlet5`. The `portlet5` is initialized with the event `eZ`.

Code sample

```

 <dialog name="dialog1">
   ...
   <transition>
       <source>
           <transition-endpoint nameref="dialog2">
               <event qname="eZ"/>
           </transition-endpoint>
       </source>
       <target>
           <transition-endpoint nameref="portlet5">
               <event qname="eZ"/>
           </transition-endpoint>
       </target>
   </transition>
   ...
 </dialog>
 ...
 <dialog name="dialog2">
   ...
   <transition type="end">
       <source>
           <transition-endpoint nameref="portlet3">
               <event qname="eZ"/>
           </transition-endpoint>
       </source>
       <target>
           <transition-endpoint nameref="portlet4">
               <event qname="eZ"/>
           </transition-endpoint>
       </target>
   </transition>
   ...
 </dialog>
```

The event that is associated with the target of the called dialog's end transition needs to match with the event of the calling dialog's incoming transition. In the sample, `dialog1` needs to have an incoming transition, which is triggered by the emission of an event `eZ` by `dialog2`. The transition endpoint that is referenced by the called dialogs end transitions target becomes irrelevant.

**Parent topic:**[Dialog chaining and nesting](../screenflow/dlg_chng_nstng.md)

