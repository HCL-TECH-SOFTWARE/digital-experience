# Exclusive transitions or dialogs

Exclusive dialogs are special forms of dialogs. They are also referred to as null or one-step dialogs. They consist of a single transition only. You can use them to go into a dialog, run only one transition, and use it to end the dialog immediately afterward.

Code sample

```

 <transition type="exclusive">
  <source>
      <transition-endpoint nameref="portlet1">
          <event qname="eX"/>
      </transition-endpoint>
  </source>
  <target>
      <transition-endpoint nameref="portlet2">
          <event qname="eX"/>
      </transition-endpoint>
  </target>
 </transition>
```

**Parent topic:**[Transitions](../screenflow/transitions.md)

