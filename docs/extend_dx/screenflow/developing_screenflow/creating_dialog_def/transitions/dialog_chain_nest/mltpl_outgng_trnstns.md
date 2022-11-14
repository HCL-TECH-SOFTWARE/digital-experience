# Multiple outgoing transitions

When the calling dialog has multiple outgoing transitions from which the called dialog can be started, you must define how the transition continues. When you return from the called dialog, you must define that the continuation of transitions within the calling dialog differs. The continuation of transitions differs depending on where you exited the calling dialog.

To control how to continue with such transitions, an attribute `resume-point` is assigned to the transition-endpoint element that references the dialog from which the transition is returned. The `resume-point` attribute needs to reference a transition endpoint of the calling dialog that was active when another dialog was started.

In the following code sample, the `dialog1` has two transitions from which `dialog2` can be started. One transition references the transition endpoint `portlet1` as its source, the other references the transition endpoint `portlet2`. Furthermore, `dialog2` has two distinct incoming transitions. One transition carries the attribute `resume-point` with value `portlet1`, the other one with value `portlet2`.

When you exit `dialog1` through the first transition, which references the endpoint `portlet1`, `dialog1` would continue with `portlet3` after `dialog2` ends. The reason is that the transition that references the resume point with value `portlet1` is triggered since `portlet1` was active when you exited `dialog1`.

When you exit `dialog1` through the second transition, which references the endpoint `portlet2`, `dialog1`would continue with `portlet4` after `dialog2` ends. The reason is that the transition that references the resume point with value `portlet2` is triggered since `portlet2` was active when you exited `dialog1`.

Code sample

```

<dialog name="dialog1">
   ...
   <transition>
       <source>
           <transition-endpoint nameref="portlet1">
               <event qname="eX"/>
           </transition-endpoint>
       </source>
       <target>
           <transition-endpoint nameref="dialog2">
               <event qname="eX"/>
           </transition-endpoint>
       </target>
   </transition>
   <transition>
       <source>
           <transition-endpoint nameref="portlet2">
               <event qname="eX"/>
           </transition-endpoint>
       </source>
       <target>
           <transition-endpoint nameref="dialog2">
               <event qname="eX"/>
           </transition-endpoint>
       </target>
   </transition>
   ...
   <transition>
       <source>
           <transition-endpoint nameref="dialog2" resumepoint="portlet1">>
               <event qname="eZ"/>
           </transition-endpoint>
       </source>
       <target>
           <transition-endpoint nameref="portlet3">
               <event qname="eZ"/>
           </transition-endpoint>
       </target>
   </transition>
   <transition>
       <source>
           <transition-endpoint nameref="dialog2" resumepoint>
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
 ...
 
```

**Parent topic:**[Dialog chaining and nesting](../screenflow/dlg_chng_nstng.md)

