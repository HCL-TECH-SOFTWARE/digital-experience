# Start and end transitions

When the referenced transition endpoint and event matches the source of a start transition, dialogs are started. Start transitions differ from other transitions only in that they carry the attribute type, with the value start. Similarly, end transitions carry the attribute type, with the value end.

To avoid transitions that can accidentally start or end a screen flow, dialog modelers need to define start and end transitions. Each dialog needs to define at least one start and at least one end transition.

```

  <transition type="start">
      <source>
          ...
      </source>
      <target>
          ...
      </target>
  </transition>
  ...
  <transition type="end">
      <source>
          ...
      </source>
      <target>
          ...
      </target>
  </transition>

```


