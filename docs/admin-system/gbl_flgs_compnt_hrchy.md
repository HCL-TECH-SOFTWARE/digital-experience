# Global flags - Component hierarchy 

A composition hierarchy has several global flags. The global flags are similar to attributes of the content page node, except that they are associated with the composition hierarchy rather than the content node. Therefore, they are accessed through the Layout bean after the page in the Content bean is selected.

You can query the global flags with the getflag and modify them with the setflag command. The getflag command expects the name of the flag as the first argument. If the keyword numeric is added, it returns the value of the flag as a Boolean 1 or 0. Without the keyword, it returns a string true or false. The setflag command expects the name of the flag as the first argument, the new value as the second. You can specify the new value as any Boolean value recognized by the BSF, like 1/0, true/false, t/f, on/off.

Jython example:

```
Layout.getflag(flag)
Layout.getflag(flag, "numeric")

Layout.setflag(flag, value)

# query a flag in a condition
if Layout.getflag("active", "numeric"):
  ...
else:
  ...
```

Jacl example:

```
$Layout getflag flag
$Layout getflag flag numeric

$Layout setflag flag value

# query a flag in a condition
if [$Layout getflag active numeric] then {...} else {...}
```

The following global flags are supported. The bean help documents alternative and shorter names.

|Attribute|Description|
|---------|-----------|
|active, a|Whether the page is active.|
|bookmarkable, bookmark, b|Whether an internal link to the page can be created.|
|shareable, share, s|Whether the page can be used as a base for derived pages.|

A page is not shown in the navigation if the active flag is false. You can deactivate the pages while they are modified to prevent user from seeing an inconsistent view of the page. The bookmarkable flag is not writable.

**Parent topic:**[Component hierarchy \| Portal scripting interface](../admin-system/compnt_hrchy.md)

