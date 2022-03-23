# End transitions and special events

Similar to the special start event, end transitions can emit a special end event.

This special end event is identified by the following `QName:`

```
{http://www.ibm.com/xmlns/prod/websphere/portal/v6.1.0/portal-pcm}EndDialog
```

In contrast to the special start event, the special end event is not expected to carry a payload.

```

 <transition type="end">
      <source>
          <transition-endpoint nameref="portlet1">
              <event qname="e1"/>
          </transition-endpoint>
      </source>
      <target>
          <transition-endpoint nameref="portlet2">
              <event qname="{http://www.ibm.com/xmlns/prod/websphere/portal/v6.1.0/portal-pcm}EndDialog"/>
          </transition-endpoint>
      </target>
  </transition>

```

**Parent topic:**[Transitions](../screenflow/transitions.md)

