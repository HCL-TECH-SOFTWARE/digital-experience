# Permission blocks - Portal Access Control

Use the show command to access the flags that control distribution of permissions. The first argument is the name of the action set, and the second is the name of the flag to obtain. The optional keyword numeric indicates whether the flag value must be returned as a human readable string, or as a numeric value suitable for programmatic evaluation. Since the string value is subject to translation into different locales, only the numeric value can reliably be used in conditional statements. The numeric value 0 indicates a block, while 1 stands for allowed distribution. The following names are supported for the two flags. Alternative names are documented in the help for the PacList bean.

-   inheritance - from the parent to this node
-   propagation - from the children to this node

Jython example:

```
PacList.show(actionset, flag)
PacList.show(actionset, flag, "numeric")

# example: evaluate manager inheritance flag
if PacList.show("Manager", "inheritance", "numeric"):
  print "inheritance is permitted"
else:
  print "inheritance is blocked"
```

Jacl example:

```
$PacList show actionset flag
$PacList show actionset flag numeric

# example: evaluate manager inheritance flag
if [$PacList show Manager inheritance numeric] then {
  puts "inheritance is permitted"
} else {
  puts "inheritance is blocked"
}
```

The commands block and unblock are used to change the flags that control distribution of permissions. They expect the name of the action set and the name of the flag as the first and second argument. The block command prevents the corresponding distribution of permissions, and the unblock command allows it. The commands return a success message if the flag value changed, or empty if the flag already had the required value.

Jython example:

```
PacList.block(actionset, flag)
PacList.unblock(actionset, flag)

# example: prevent propagation of delegator permissions
PacList.block("Delegator", "propagation");

# example: allow inheritance of user permissions
PacList.unblock("User", "inheritance")
```

Jacl example:

```
$PacList block actionset flag
$PacList unblock actionset flag

# example: prevent propagation of delegator permissions
$PacList block Delegator propagation

# example: allow inheritance of user permissions
$PacList unblock User inheritance

```


