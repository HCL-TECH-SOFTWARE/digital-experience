# Referencing portlets

A transition endpoint can reference portlets as the target of a screen flow transition.

## Reference a single portlet

The simplest form of a transition endpoint that is used within a transitions source is a transition endpoint that references a single portlet. In that case, the portlet is referenced through its unique name. For example, in a travel site, the transition endpoint can reference a Calendar portlet as the target in a transition with Passenger information portlet as the source.

A transition with a source that points to a transition endpoint that references a single portlet is triggered. The transition is triggered when the particular portlet that is referenced emits the event that is defined as part of the transitions source. For more information, see *Transitions*.

```
<dialog name="dialog1">
 <transition-endpoint name="portlet1">
      <localedata locale="en">
           <title>Subdialog 1</title>
           <description>This is a subdialog</description>
       </localedata>
       <resource uniquename="uniquename.portlet1"/>
       <invocation type="static"/>
...
  </transition-endpoint>
```

## Reference multiple portlets

It is also possible to reference multiple portlets as part of a single transition endpoint. For example, the transition with Passenger information portlet as the source can point to Calendar portlets, and Destination portlets as references in a transition endpoint.

A transition with a source that points to a transition endpoint that references multiple portlets is triggered. The transition is triggered when any of the referenced portlets emit the event that is defined as part of the transitions source.

```
<dialog name="dialog1">
 <transition-endpoint name="portlet1_2_3">
      <localedata locale="en">
          <title>Subdialog 1</title>
          <description>This is a subdialog</description>
       </localedata>
       <resource uniquename="uniquename.portlet1"/>
       <resource uniquename="uniquename.portlet2"/>
       <resource uniquename="uniquename.portlet3"/>
       <invocation type="static"/>
...
</transition-endpoint>     
```



