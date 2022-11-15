# Referencing through metadata markers

Pages and portlets can be referenced not only by their unique names but can also be referenced through metadata markers.

A transition has a source that points to a transition-endpoint. The transition-endpoint references one or multiple portlets through metadata markers. When the particular portlet or any of the portlets that are referenced emits the event, the transition is triggered. The event that is emitted is defined as part of the transition's source.

Alternatively, a transition has a source that points to a transition-endpoint. The transition-endpoint references one or multiple pages through metadata markers. When any portlet on the particular page or on any of the pages that are referenced emits the event, the transition is triggered. The event that is emitted is defined as part of the transitions source.

Code sample shows an example where resources, either pages or portlets, that are assigned metadata with keys uxfm.marker.1 and uxfm.marker.2 are being referenced.

```

<dialog name="dialog1">
  <transition-endpoint name="marked_resources">
      <localedata locale="en">
          <title>Subdialog 1</title>
          <description>This is a subdialog</description>
       </localedata>
       <resource metadat="uxfm.marker.1"/>
       <resource metadata="uxfm.marker.2"/>
       <invocation type="static"/>
...
</transition-endpoint>
```

!!!note
  Marking portlet definitions instead of portlet windows lead to a different behavior. For more information, go to the topic *Dynamic pages and portlets*

???+ info "Related information"
    -   [Dynamic pages and portlets](../../../../../extend_dx/screenflow/advance_concepts/dyn_pgs_ptlts.md)

