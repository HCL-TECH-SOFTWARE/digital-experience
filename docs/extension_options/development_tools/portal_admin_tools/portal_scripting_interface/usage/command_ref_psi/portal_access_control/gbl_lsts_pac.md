# Global lists - Portal Access Control

A global list holds the names of the predefined action sets. The global list is accessed with the listall command in the Access bean. The command expects the list name as an argument. The only supported list name is actionsets. See the bean help for alternative list names.

Jython example:

```
# example: list the names of all predefined action sets
Access.listall("actionsets")

# example output:
Admin SecurityAdmin Delegator Manager Editor PrivilegedUser User
```

Jacl example:

```
# example: list the names of all predefined action sets
$Access listall actionsets

# example output:
Admin SecurityAdmin Delegator Manager Editor PrivilegedUser User

```


