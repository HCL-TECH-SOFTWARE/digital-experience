# Other special transitions

The UX Screen Flow Manager supports several more special transitions, or more precisely, transition endpoints.

After a dialog ends, the user needs to be redirected to a page. The following options are available:

1.  If the target of an end transition points to the special transition endpoint `DEFAULT_RETURN`, the screen flow manager redirects the user. The user is redirected to the resource referenced by the unique name that is specified for the configuration option `com.ibm.wps.pcm.dialog.default.return.uniquename`. For more details, go to *Configuration options*. The event that is associated with this target is transmitted to the referenced resource.

    ```
    
     <transition type="end">
          <source>
              <transition-endpoint nameref="portlet1">
                  <event qname="e1"/>
              </transition-endpoint>
          </source>
          <target>
              <transition-endpoint nameref="DEFAULT_RETURN">
                  <event qname="e2"/>
              </transition-endpoint>
          </target>
      </transition>
    ```

2.  If the target of an end transition points to the special transition endpoint `PAGE_ORIGIN`, the user is redirected to the page from which the dialog is triggered.

    The event that is associated with this target is transmitted to all portlets on that page. This transmission is also called broadcasting.

    ```
    
      <transition type="end">
          <source>
              <transition-endpoint nameref="portlet1">
                  <event qname="e1"/>
              </transition-endpoint>
          </source>
          <target>
              <transition-endpoint nameref="PAGE_ORIGIN">
                  <event qname="e2"/>
              </transition-endpoint>
          </target>
      </transition>
    
    ```

3.  If the target of an end transition points to the special transition endpoint `PORTLET_ORIGIN`, the user is redirected to the page that contains the portlet from which the dialog is triggered.

    The event that is associated with this target is transmitted to that specific portlet.

    ```
    
      <transition type="end">
          <source>
              <transition-endpoint nameref="portlet1">
                  <event qname="e1"/>
              </transition-endpoint>
          </source>
          <target>
              <transition-endpoint nameref="PORTLET_ORIGIN">
                  <event qname="e2"/>
              </transition-endpoint>
          </target>
      </transition>
    
    ```


Another special transition is available for standard transitions that are not end transitions. In this context, dialog modelers sometimes want to define a dialog as follows: after a specific source portlet emitted a specific event, the user is returned to the resource or portlet. This resource or portlet redirects the user to the resource that emitted the event. Therefore, you can reference the special transition endpoint named `CALLER`.

For example in the code, the first transition is triggered after `portlet1` emits event `e1`. Event `e1` causes the user to be redirected to `portlet2`. Then, after `portlet2` emits event `e2-2`, the user is redirected back to `portlet1`, which previously called `portlet2`.

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
              <event qname="e2-1"/>
          </transition-endpoint>
      </target>
  </transition>
  <transition>
      <source>
          <transition-endpoint nameref="portlet2">
              <event qname="e2-2"/>
          </transition-endpoint>
      </source>
      <target>
          <transition-endpoint nameref="CALLER">
              <event qname="e3"/>
          </transition-endpoint>
      </target>
  </transition>

```

???+ info "Related information"
    -   [Configuration options](../../../cfg_opt.md)

