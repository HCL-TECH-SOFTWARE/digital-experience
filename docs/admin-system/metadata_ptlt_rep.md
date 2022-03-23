# Portlet metadata 

Portlet nodes can own metadata, which are name-value pairs of data that is associated with the content node. Metadata are used by the portal, for example, to set display attributes, or by the user. The Portal bean allows read-only access on portlet metadata. Metadata can be assigned only with portlet-type or application-type repository objects.

Jython example:

```
Portlet.parmget(ID, name)
Portlet.list(ID, "parm")

# only for beans with a current selection
Portlet.parmget(name)
Portlet.list("parm")

# example: get the metadata for an instance property named #
"MyPortletConfig"
print Portlet.parmget("MyPortletConfig")

# example: list all metadata names for the selected portlet
for pname in Portlet.list("parm").split():
    print pname
```

Jacl example:

```
$Portlet parmget ID name
$Portlet list ID parm

# only for beans with a current selection
$Portlet parmget name
$Portlet list parm

# example: get the metadata for an instance property named # "MyPortletConfig"
puts "[$Portlet parmget MyPortletConfig]"

# example: list all metadata names for the selected portlet
foreach pname [$Portlet list parm] {
puts "$pname" 
}
```

**Parent topic:**[Portlet repository ](../admin-system/ptlt_rep.md)

