# Transitions from portlets

The following code samples show examples of the various transitions that you can configure from a single portlet as the source.

## Single portlet to single portlet

The transition from a single portlet to single portlet is the most simple transition. The code sample shows an example of such a transition.

The source points to a single transition endpoint a portlet, for example, in a travel site, a passenger information portlet and the target points to another single transition endpoint another portlet, for example, the Calendar portlet. After the source Passenger information portlet `portlet1` emits the event `e1`, the user is routed to the target Calendar portlet `portlet2`, which is fed with event `e2`.

Code sample

```

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
```

## Single portlet to multiple portlets

This code sample shows a transition from a single portlet to multiple portlets where the target points to multiple portlets instead of a single one.

Some portlets are associated with different events than others. In the code sample, both the portlets that are referenced by the transition-endpoints `portlet2a` and `portlet2b` receive the event `e2a`. The portlet that is referenced by the transition endpoint `portlet2c` receives the event `e2c`.

!!!note
    In case multiple portlets are referenced as part of a target, all portlets must be on the same page.

Code sample

```

<transition>
    <source>
        <transition-endpoint nameref="portlet1">
             <event qname="e1"/>
        </transition-endpoint>
    </source>
    <target>
        <transition-endpoint nameref="portlet2a">
              <event qname="e2a"/>
        </transition-endpoint>
        <transition-endpoint nameref="portlet2b">
              <event qname="e2a"/>
        </transition-endpoint>
        <transition-endpoint nameref="portlet2c">
              <event qname="e2c"/>
        </transition-endpoint>
    </target>
</transition>
```

## Single portlet to page

This code sample shows a transition from a single portlet to a page instead of a portlet. This transition causes the event to be propagated to all portlets that are found on the page.

All portlets that are found on the page that is referenced by the transition-endpoint `page2` receives the event `e2`.

Code sample

```

<transition>
    <source>
        <transition-endpoint nameref="portlet1">
            <event qname="e1"/>
        </transition-endpoint>
    </source>
    <target>
        <transition-endpoint nameref="page2">
             <event qname="e2"/>
         </transition-endpoint>
     </target>
</transition>
```

## Single portlet to a page and multiple portlets

This code sample shows a transition with the target that points to page and multiple portlets. The page and each portlet are associated with a different event. This transition causes each portlet to receive the event that is associated with the page and the event that is associated with the particular portlet.

In code sample, the portlet that is referenced by the transition-endpoint receives the events as follows

-   Transition-endpoint `portlet2a` receives the events `e2` and `e2a`.
-   Transition-endpoint `portlet2b` receives the events `e2` and `e2a`.
-   Transition-endpoint `portlet2c` receives the events `e2` and `e2c`.

!!!note
    If pages and portlets are both referenced as targets, all portlets must be on the referenced page.

Code sample:

```

<transition>
    <source>
        <transition-endpoint nameref="portlet1">
             <event qname="e1"/>
        </transition-endpoint>
     </source>
     <target>
          <transition-endpoint nameref="page2">
              <event qname="e2"/>
          </transition-endpoint>
          <transition-endpoint nameref="portlet2a">
               <event qname="e2a'/>
          </transition-endpoint>
          <transition-endpoint nameref="portlet2b">
               <event qname="e2a'/>
          </transition-endpoint>
          <transition-endpoint nameref="portlet2c">
               <event qname="e2c'/>
          </transition-endpoint>
      </target>
</transition> 
```

The following code sample shows an alternative way to declare what is declared in the previous code sample. Two of the previously shown transition-endpoints are merged into a single one. Both notations lead to the same effect.

Code sample:

```

<transition>
    <source>
        <transition-endpoint nameref="portlet1">
             <event qname="e1"/>
        </transition-endpoint>
     </source>
     <target>
          <transition-endpoint nameref="page2">
              <event qname="e2"/>
          </transition-endpoint>
          <transition-endpoint nameref="portlet2a 2b">
               <event qname="e2a'/>
          </transition-endpoint>
          <transition-endpoint nameref="portlet2c">
               <event qname="e2c'/>
          </transition-endpoint>
      </target>
</transition> 
```

It is also possible to transmit multiple events to a single target transition-endpoint. In the following code sample, transition-endpoints are associated with events as shown

-   The page that is referenced by the transition-endpoint `page2` is associated with the events `e2-1` and `e2-2`.
-   The portlet that is referenced by the transition-endpoint `portlet2a` is associated with the events `e2a-1` and `e2a-2`.
-   The portlet that is referenced by the transition-endpoint `portlet2b` is associated with the events `e2b-1`.

In this particular sample, `portlet2a` receives the events `e2-1`,`e2-2`, `e2a-1`, and `e2a-2` and `portlet2b` receives the events `e2-1`,`e2-2`, and `e2b-1`.

!!!note
    Transmission of multiple events is supported only for targets.

Code sample:

```

<transition>
    <source>
        <transition-endpoint nameref="portlet1">
             <event qname="e1"/>
        </transition-endpoint>
     </source>
     <target>
          <transition-endpoint nameref="page2">
              <event qname="e2-1"/>
              <event qname="e2-2"/>
          </transition-endpoint>
          <transition-endpoint nameref="portlet2a">
               <event qname="e2a-1"/>
               <event qname="e2a-2"/>
          </transition-endpoint>
          <transition-endpoint nameref="portlet2b">
               <event qname="e2b-1"/>
          </transition-endpoint>
      </target>
</transition> 
```

## Multiple portlets to single portlet

The following code sample shows a transition where the source points to multiple portlets and the target points to a single portlet.

When any of the referenced source portlets, `portlet1a` or `portlet1b`, emits the event `e1`, the user is routed to the target portlet `portlet2`, which is fed with event `e2`.

!!!note
    For sources, it is not possible to alternatively reference multiple transition-endpoints as it was done with targets.

Code sample:

```

<transition>
    <source>
        <transition-endpoint nameref="portlet1a_1b">
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

## Single portlet to another dialog

The following code sample shows a transition where the source points to a single portlet and the target to another dialog.

This transition represents the outgoing transition. When the transition is triggered, it starts the referenced dialog, which is initialized by the defined event. For more information about the outgoing transition, go to *Transition Endpoints*.

In this code sample, when `portlet1` emits the event `e1`, `dialog2` is started and initialized with event `eX`. From here, continuing to a particular step of `dialog2` depends on the transitions that are defined as part of `dialog2`. For more information, go to the topic *Dialog Chaining and Nesting*.

Code sample:

```

<transition type="nested">
   <source>
       <transition-endpoint nameref="portlet1">
            <event qname="e1"/>
       </transition-endpoint>
    </source>
    <target>
        <transition-endpoint nameref="dialog2">
            <event qname="eX"/>
         </transition-endpoint>
     </target>
</transition>
```



???+ info "Related information"
    -   [Dialog chaining and nesting](../../../extend_dx/screenflow/developing_screenflow/creating_dialog_def/transitions/dialog_chain_nest/index.md)
    -   [Transition endpoints](../../../extend_dx/screenflow/developing_screenflow/creating_dialog_def/transition_endpoints/index.md)

