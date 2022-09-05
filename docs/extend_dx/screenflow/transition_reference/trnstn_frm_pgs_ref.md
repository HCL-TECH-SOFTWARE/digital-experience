# Transitions from pages

The following code samples show examples of the various transitions that you can configure with the page as the source.

## Single page to single portlet

The following code sample shows a transition where the source points to a single page and the target points to single portlet.

When any portlet on the referenced page `page1` emits the event `e1`, the user is routed to the target portlet `portlet2`, which is fed with event `e2`.

Code sample

```

<transition>
    <source>
        <transition-endpoint nameref="page1">
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

## Multiple pages to single portlet

The following code sample shows a transition where the source points to multiple pages and the target points to a single portlet.

When any portlet on any of the referenced pages, `page1a` or `page1b`, emits the event `e1`, the user is routed to the target portlet `portlet2`. The target portlet `portlet2` is then fed with event `e2`.

**Note:** For sources, it is not possible to alternatively reference multiple transition endpoints.

Code sample

```

<transition>
   <source>
       <transition-endpoint nameref="page1a_1b">
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

## Page hierarchy to single portlet

The following code sample shows a transition where the source points to a page hierarchy and the target points to single portlet.

When any portlet on any page part of the referenced hierarchy emits the event `e1`, the user is routed to the target portlet `portlet2`. The target portlet `portlet2` is then fed with event `e2`.

Code sample

```

<transition>
   <source>
       <transition-endpoint nameref="pageHierarchy1">
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

