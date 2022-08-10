# Portlet preferences in portlet bean

It is possible to get and set preferences to portlet instances. Because Portlet beans specify a static portlet only, and not a portlet instance that is found on a page, portlet instances are identified by two ID values: The ID of the portlet that specifies the portlet, and the ID of the portlet entity piid that anchors an instance of the portlet in a page.

The command prefnames is used to obtain a list of available preference names. Portlet preferences might have multiple values. The command getpref therefore accepts a numeric index attribute. The numeric index attribute denotes the number of the value to be obtained. For example, 0 means to return the first preference value, 1 means to return the second value. The total number of available preference values for a specific preference name is returned by the prefcount command.

The addpref command is used to add a portlet preference value to the portlet preference list. You can set portlet preferences to read-only. You can control this setting with the commands spprof \(Set Portlet Preference Read-only Flag\) and gpprof \(Get Portlet Preference Read-only Flag\).

Jython example:

```
Portlet.prefnames(ID, piid)
Portlet.getpref(ID, piid, name, "at", index)
Portlet.addpref(ID, piid, name, value)
Portlet.gpprof(ID, piid, name, ["numeric"])
Portlet.spprof(ID, piid, name, readonly\_flag)
```

Jacl example:

```

$Portlet prefnames ID piid
$Portlet getpref ID piid name at index
$Portlet addpref ID piid name value
$Portlet gpprof ID piid name [numeric] 
$Portlet spprof ID piid name readonly\_flag
```

The portlet is identified by two ID values: The ID of the portlet and the ID of the portlet entity. You can obtain the ID of the portlet entity by the command $Layout get piid or Layout.get\("piid"\).

Jython example:

```
# example: set a portlet preference
# 1. locate the control where the portlet resides
# 2. obtain its portlet instance ID
# 3. set the portlet preference accordingly
ctl = Layout.find("all", "pid", Portlet.csn(), "select")
piid = Layout.get(ctl, "piid")
Portlet.addpref(piid, "MYKEY", "Value")

# example: list portlet preference values for key "MYKEY"
# the control ID is stored in the variable ctrl
for ix in range($Portlet.prefcount(piid, "MYKEY")):
  print Portlet.getpref(piid, "MYKEY", "at", ix)

# example: drop all portlet preferences on a certain key
Portlet.droppref(piid, "MYKEY")
```

Jacl example:

```
# example: set a portlet preference
# 1. locate the control where the portlet resides
# 2. obtain its portlet instance ID
# 3. set the portlet preference accordingly
set ctl [$Layout find all pid [$Portlet csn] select] 
set piid [$Layout get $ctl piid]
$Portlet addpref $piid MYKEY "SomeValue"

# example: list portlet preference values for key "MYKEY"
# the control ID is stored in the variable ctrl
for {set ix 0} {$ix < [$Portlet prefcount $piid MYKEY]} {incr ix} {
  puts "[$Portlet getpref $piid MYKEY at $ix]"
}

# example: drop all portlet preferences on a certain key
$Portlet droppref $piid  MYKEY
```

Dependent on the standard that the portlet complies with, there are differences in the handling of portlet preferences. You can set multiple preference values on a preference key with standard portlets, while IBM portlets support only single values on each portlet preference key.

**Parent topic:**[Portlet repository](../admin-system/ptlt_rep.md)

