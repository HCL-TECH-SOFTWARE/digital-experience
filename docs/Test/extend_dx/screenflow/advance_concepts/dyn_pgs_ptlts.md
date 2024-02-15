# Dynamic pages and portlets

The HCL UX Screen Flow Manager not only supports redirecting users between static portal resources, but also between dynamic resources. The HCL Portal feature Dynamic UI Management is used.

You can use the Dynamic UI Management feature to create pages and portlets at run time. You can also use it to modify a user's content model and the navigation model, triggered by a user interaction.

In most cases, a dynamic page is a transient copy of a template page, often referred to as base page. This transient copy behaves like a snapshot of the base page from the time when the copy was created. It contains all portlets of the base page and all its properties. A dynamic portlet is a transient copy of a portlet definition. You can add dynamic portlets only to dynamic pages.

The benefit of using dynamic pages instead of static pages is that you can create multiple copies or instances of the base page. A user can then manually switch or be redirected between these instances.

Dynamic pages are always added to an extension node, a page to which a transformation is assigned.

During the processing of a dialog, single subdialogs can either be static or dynamic. If the subdialog is supposed to be dynamic, you can distinguish between the following two cases:

-   If the transition endpoint references a page, the redirect requires a dynamic page. The dynamic page needs to be a transient copy, of the referenced base page that is to be started and to be added under the extension node.
-   If the transition endpoint references a portlet, the redirect requires a dynamic portlet. The dynamic portlet needs to be a transient copy, of the referenced portlet definition that is to be started and to be added to an existing dynamic page. This case requires that a dynamic page is always created previously. The Screen Flow Manager ensures this requirement by starting an empty dynamic page. The dynamic portlet can then be added to that page.

You can use the dialog definition to control whether to start a resource dynamically. You can also specify in which extension node you want to add the dynamic copy. The following code sample shows an example.

Code sample:

```

 <dialog name="dialog1">
  <transition-endpoint name="page2">
      <resource uniquename="uniquename.page2"/>
      <invocation type="dynamic" extension-node="extensionNode1"/>
  </transition-endpoint>
  <transition-endpoint name="portlet1">
      <resource uniquename="uniquename.portlet1"/>
      <invocation type="static" extension-node="extensionNode1"/>
 </transition-endpoint>
  <transition-endpoint name="portlet2">
      <resource uniquename="uniquename.portlet2"/>
      <invocation type="dynamic" extension-node="extensionNode1"/>
  </transition-endpoint>
  <transition>
      <source>
          <transition-endpoint nameref="portlet1">
              <event qname="e1-1"/>
          </transition-endpoint>
      </source>
      <target>
          <transition-endpoint nameref="page2">
              <event qname="e2"/>
          </transition-endpoint>
      </target>
  </transition>
  <transition>
      <source>
          <transition-endpoint nameref="portlet1">
              <event qname="e1-2"/>
          </transition-endpoint>
      </source>
      <target>
          <transition-endpoint nameref="portlet2">
              <event qname="e2"/>
          </transition-endpoint>
      </target>
  </transition>   
 </dialog>

```

In this sample, you can see two transitions: In both cases, `portlet1` exists on a static page.

-   If the portlet emits the event `e1-1`, the user is redirected to `page2`. The `page2` is in turn expected to start dynamically in the extension node or page with the unique name `extensionNode1`. The dynamic page is a transient copy of the base page with the unique name `uniquename.page2`.
-   If `portlet1` emits the event `e1-2`, the user is redirected to `portlet2`, which is also expected to start dynamically. A dynamic page is required to which this dynamic portlet can be added. Therefore, the screen flow manager creates an empty dynamic page in the extension node or page with the unique name `extensionNode1` to which the portlet is then added.

The portal removes dynamic resources when they are no longer needed. For example, after a transition redirects a user from a dynamic page `dpage1` to a dynamic page `dpage2,` `dpage1` is removed and `dpage2` is created.



???+ info "Related information"
    -   [Referencing through metadata markers](../../../extend_dx/screenflow/developing_screenflow/creating_dialog_def/transition_endpoints/ref_mtadta_mrkrs.md)

