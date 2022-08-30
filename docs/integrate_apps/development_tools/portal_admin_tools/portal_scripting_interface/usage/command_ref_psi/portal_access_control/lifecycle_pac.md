# Lifecycle - Portal Access Control

PacList objects are read from and written back to the portal by using getacl and setacl in the Access bean. The command getacl returns the PacList object for a resource. It expects the category and identifier of the resource as arguments. The category identifies the Script bean that is responsible for the resource. It is given as a keyword, which can be the bean name or the type of the resource. The supported keywords are documented in the help for the Access bean. PacList objects are obtained only for resources that are handled by the Content and Portlet beans. For the root node of the portlet repository, there are no PacList objects.

The command setacl writes a PacList object back to the portal. That command is necessary only if the PacList object is modified. The PacList object is the only argument to the command. Each PacList object is tied to a particular resource and cannot be written for any other resource.

Jython example:

```
Access.getacl(category, ID)
Access.setacl(paclist)

# example: get PacList object for a particular page
#          the object is stored in variable "acl"
Content.find("label", "uniquename",
"ibm.portal.Administration", "select")
acl = Access.getacl("Content", Content.current())

# example: write back PacList object in variable "acl"
Access.setacl(acl)
```

Jacl example:

```
$Access getacl category ID
$Access setacl paclist

# example: get PacList object for a particular page
#          the object is stored in variable "acl"
$Content find label uniquename ibm.portal.Administration select
set acl [$Access getacl Content [$Content current]]

# example: write back PacList object in variable "acl"
$Access setacl $acl
```

To access or manipulate a PacList object, it must be loaded in the PacList bean. The operations of the PacList bean always refer to the PacList object currently loaded. An object can be loaded only for viewing by using view, or for manipulation by using edit. Both commands expect the PacList object as an argument. The PacList bean is loaded only if it is unloaded, or if it is loaded with an object that is not modified.

Jython example:

```
PacList.view(paclist)
PacList.edit(paclist)

# example: load PacList object for content root, view only
PacList.view(Access.getacl("Content", Content.root()))

# example: load PacList object for a particular page
Content.find("label", "uniquename",
"ibm.portal.Administration", "select")
acl = Access.getacl("Content", Content.current())
PacList.edit(acl)
```

Jacl example:

```
$PacList view paclist
$PacList edit paclist

# example: load PacList object for content root, view only
$PacList view [$Access getacl Content [$Content root]]

# example: load PacList object for a particular page
$Content find label uniquename ibm.portal.Administration select
set acl [$Access getacl Content [$Content current]]
$PacList edit $acl
```

The command current returns the name of the loaded object, which includes the identifier of the resource. The command done unloads the PacList bean and returns the object that was loaded. If the PacList bean is already unloaded, done still returns the PacList object that was loaded before, which is useful for dealing with errors.

If the currently loaded PacList object is modified since it was loaded, the command modified returns. If the keyword numeric is added, it returns the value of the flag as a Boolean 1 or 0. Without the keyword, it returns a string true or false.

Jython example:

```
PacList.current()
PacList.done()

PacList.modified()
PacList.modified("numeric")

# example: write back and unload PacList object
#          only if it was modified
if PacList.modified("numeric"):
  Access.setacl(PacList.done()

# example: recover the last loaded PacList object
PacList.view(PacList.done())
```

Jacl example:

```
$PacList current
$PacList done

$PacList modified
$PacList modified numeric

# example: write back and unload PacList object
#          only if it was modified
if [$PacList modified numeric] {
  $Access setacl [$PacList done]
}

# example: recover the last loaded PacList object
$PacList view [$PacList done]

```


