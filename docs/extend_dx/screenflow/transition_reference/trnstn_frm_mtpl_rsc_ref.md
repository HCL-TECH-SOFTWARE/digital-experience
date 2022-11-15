# Transitions from multiple resources

The following code sample shows a transition where the source points to multiple resources and the target points to single portlet. The multiple resources that the source points to can be pages or portlets or both pages and portlets that are marked with a particular metadata marker.

## Multiple resources to single portlet

When any marked portlet or any portlet on a marked page emits the event `e1`, the user is routed to the target portlet `portlet2`. The target portlet `portlet2` is then fed with the event `e2`.

Code sample

```

<transition>
   <source>
       <transition-endpoint nameref="marked_resources">
            <event qname="e1"/>
       </transition-endpoint>
    </source>
    <target>
        <transition-endpoint nameref="portlet2">
            <event qname="e2"/>
         </transition-endpoint>
     </target>
</transition>
```

**Parent topic:**[Transitions reference](../screenflow/ref_trnstntns.md)

