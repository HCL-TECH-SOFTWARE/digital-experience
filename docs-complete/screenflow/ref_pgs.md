# Reference pages

A transition endpoint can reference pages as the target of a screen flow transition.

## Reference a single page

A transition with a source that points to a transition endpoint that references a single page is triggered. The transition is triggered when any portlet on the particular page that is referenced emits the event that is defined as part of the transitions source. For example, in a travel site, in a Flight booking dialog the transition with Calendar portlet as the source can reference the departure date page as the target.

```
<dialog name="dialog1">
   <transition-endpoint name="page1">
        <localedata locale="page1">
              <title>Subdialog 1</title>
              <description>This is a subdialog</description>
        </localedata>
        <resource uniquename="uniquename.page1"/>
        <invocation type="static"/>
...
</transition-endpoint>
```

## Reference multiple pages

As with portlets, it is also possible to reference multiple pages as part of a single transition-endpoint. For example, in a Flight booking dialog, the transition with Calendar portlet as the source can reference the departure date page and return date page as targets.

A transition with a source that points to a transition-endpoint that references multiple pages is triggered. The transition is triggered when any portlet on any of the pages that are referenced emits the event. The emitted event must be defined as part of the transitions source.

```

<dialog name="dialog1">
   <transition-endpoint name="page1_2_3">
         <localedata locale="en">
               <title>Subdialog 1</title>
               <description>This is a subdialog</description>
          </localedata>
          <resource uniquename="uniquename.page1"/>
          <resource uniquename="uniquename.page2"/>
          <resource uniquename="uniquename.page3"/>
          <invocation type="static"/>
...
</transition-endpoint>
```

## Reference page hierarchies

A portlet can consist of a well-defined set of topologically connected pages. The pages are part of a connected graph. In some scenarios, you might want a transition to be triggered when any portlet on any page that is part of a connected graph emits the event. The event that is emitted must be defined as part of the transition's source.

To list all the pages, you can point to a page hierarchy by referencing the hierarchy's root page. You can reference the root page through its unique name and with the optional attribute `type` with value hierarchy.

A transition with a source that points to a transition-endpoint that references a page hierarchy is triggered. The transition is triggered when any page that is a direct or indirect child of the referenced root page emits the event. The event that is emitted must be defined as part of the transitions source.

For example, in a travel site, in a Flight booking dialog, the transition can point to the Destination portlet. The Destination portlet can consist of several pages that provide data on possible destination locations the user can choose. To list all the pages in the destination portlet the transition can reference the hierarchy root page, for example, Europe.

```

<dialog name="dialog1">
  <transition-endpoint name="pageHierarchy1">
       <localedata locale="en">
            <title>Subdialog 1</title>
            <description>This is a subdialog</description>
        </localedata>
        <resource uniquename="uniquename.page1" type="hierarchy" />
        <invocation type="static"/>
...
</transition-endpoint>
```

**Parent topic:**[Transition endpoints](../screenflow/ref_trnstn_endpnts.md)

