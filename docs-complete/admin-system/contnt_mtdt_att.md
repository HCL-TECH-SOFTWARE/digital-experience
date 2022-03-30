# Metadata attributes \| Content bean content hierarchy

Content nodes can own metadata, which are name-value pairs of data that is associated with the content node. Metadata are used by the portal, for example to set display attributes, or by the user. However, you must ensure that none of the metadata information that is set by the portal is overridden.

Jython example:

```
Content.parmget(ID, name)
Content.parmset(ID, name, value)
Content.drop(ID, "parm", name)
Content.list(ID, "parm")

# only for beans with a current selection
Content.parmget(name)
Content.parmset(name, value)
Content.drop("parm", name)
Content.list("parm")

# example: set the metadata for an instance property named #
"MyUserData" on the selected node
Content.parmset("MyUserData", "A_User_Value")

# example: get the metadata for an instance property named #
"MyUserData" (should return "A_User_Value")
print Content.parmget("MyUserData")

# example: list all metadata names
for pname in Content.list("parm").split():
    print pname

#example: Drop the metadata with the name "MyUserData"
Content.drop("parm", "MyUserData")
Organization
```

Jacl example:

```
$Content parmget ID name
$Content parmset ID name value
$Content drop ID parm name
$Content list ID parm
 
# only for beans with a current selection
$Content parmget name
$Content parmset name value
$Content drop parm name
$Content list parm
 
# example: set the metadata for an instance property named 
# "MyUserData" on the selected node 
$Content parmset MyUserData A_User_Value 
 
# example: get the metadata for an instance property named 
# "MyUserData" (should return "A_User_Value") 
puts "[$Content parmget MyUserData]" 
 
# example: list all metadata names 
foreach pname [$Content list parm] { 
  puts "$pname"  
} 
 
#example: Drop the metadata with the name "MyUserData" 
$Content drop parm "MyUserData" 
```

**Parent topic:**[Content hierarchy accessed through Content bean](../admin-system/contnt_hierarchy.md)

