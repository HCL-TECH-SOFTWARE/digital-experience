# Referencing single resource across different dialogs

Often, a single resource is used across different dialogs. For example, such a resource can be a generic date selection portlet. In a travel site, such a page can be used to select the departure date and the return date for the Flight booking dialog and also for the Car booking dialog.

Portlets can have only one dedicated title per locale. For example, the portlet might be called Calendar. Therefore, the dialog must make the descriptions clear to the site visitor who books a trip. The portlet must clearly show when this portlet is used for selecting the departure date, and when it is used for selecting the return date for the trip.

If no explicit titles and descriptions were specified for a transition endpoint as part of the dialog definition. The Dialog State Display \(DSD\) shows the step with the localized title of the referenced resource.

Thus the following applies:

-   If the transition endpoint references a page, the localized page title is displayed.
-   If the transition endpoint references a portlet, the localized portlet title is displayed.

But this fallback mechanism still does not provide possibilities for displaying different titles for the same resource during different steps. To resolve this problem, dialog modelers can also explicitly specify localized titles and descriptions for transition endpoints. The DSD then displays these titles and descriptions instead of the original title and description of the resource. Therefore, you can define two transition endpoints that point to the same resource but have different titles and descriptions or localized titles and descriptions for that resource.

The example references the same Calendar portlet twice as part of two separate transition endpoints. In one transition endpoint, the English title is set to `Date to leave`, in the other one to `Date to return`. This way, the DSD can display the same portlet with different titles or localized titles.

```

 <dialog name="dialog1">
  <transition-endpoint name="calendar.leave">
      <localedata locale="en">
          <title>Date to leave</title>
          <description>Specify the date to leave</description>
      </localedata>
      <localedata locale="de">
          <title>Abreisedatum</title>
          <description>Geben Sie Ihr Abreisedatum an</description>
      </localedata>
      <resource uniquename="uniquename.calendar"/>
      <invocation type="static"/>
 </transition-endpoint>
  <transition-endpoint name="calendar.return">
      <localedata locale="en">
         <title>Date to return</title>
          <description>Specify the date to return</description>
      </localedata>
      <localedata locale="de">
          <title>Rueckreisedatum</title>
          <description>Geben Sie Ihr Rueckreisedatum an</description>
      </localedata>
      <resource uniquename="uniquename.calendar"/>
      <invocation type="static"/>
  </transition-endpoint>
  ...
  <transition>
      <source>
          <transition-endpoint nameref="portlet1">
              <event qname="e1"/>
          </transition-endpoint>
      </source>
      <target>
          <transition-endpoint nameref="calendar.leave">
              <event qname="ecl"/>
          </transition-endpoint>
      </target>
  </transition>
  ...
  <transition>
     <source>
          <transition-endpoint nameref="portlet2">
              <event qname="e2"/>
          </transition-endpoint>
     </source>
      <target>
          <transition-endpoint nameref="calendar.return">
              <event qname="ecr"/>
          </transition-endpoint>
      </target>
  </transition>
  ... 
 </dialog>
```

**Parent topic:**[Transition endpoints](../screenflow/ref_trnstn_endpnts.md)

