# Principals - Portal Access Control

Use the list command to access the list of principals for an action set.

The first argument is the name of an action set. If the second argument is the keyword all, the command returns all principals in the list, which is separated by newlines. A regular principal is listed with its name. A special principal is listed with a dedicated name embraced by special characters, which makes the special principals easy to spot. Since principal names can include white space, the complete list cannot be parsed into items.

You can access the principals in the list individually. The keyword at as the second argument indicates that the third argument is an index. Alternative keywords are documented in the bean help. The command returns the principal at the given position in the list, where 0 is the index of the first position. If the index is out of range, the command returns empty. You can obtain the number of principals by using count, which expects the name of the action that is set as the only argument.

Jython example:

```
PacList.list(actionset, "all")
PacList.list(actionset, "at", index)
PacList.count(actionset)

# example: get first principal in list of administrators
PacList.list("Administrator", "at", 0)

# example: list all principals in all lists
for as in Access.listall("actionsets").split():
  print "Principals for " + as:" + PacList.list(as, "all")
```

Jacl example:

```
$PacList list actionset all
$PacList list actionset at index
$PacList count actionset

# example: get first principal in list of administrators
$PacList list Administrator at 0

# example: list all principals in all lists
foreach as [$Access listall actionsets] {
  puts "\nPrincipals for $as:"
  puts [$PacList list $as all]
}

```

The command grant adds a principal to a list of principals. The first argument is the name of the action that is set for which the principal is added. The second argument is a keyword that indicates whether a regular or special principal is to be added, as described later. The third argument specifies the principal to add. The PacList bean help documents alternative keywords for the second argument.

If the keyword name is given as the second argument, a regular principal is added. The third argument is the name of the principal, either as a fully qualified distinguished name, or as a short name. The name is resolved to a standard form when the PacList object writes back to the portal. Therefore, it is possible to have duplicates in the list, which is removed by the portal.

If the keyword special is given as the second argument, a special principal is added to the list. The third argument is a keyword that indicates which special principal can be added. The following special principals are supported. Alternative keywords are documented in the help for the PacList bean.

-   anonymous - a user that is not logged in
-   authenticated - any user that is logged in
-   allgroups - any group of a user that is logged in. This virtual user group contains all non-virtual user groups.

The grant command returns a success message if a principal was added to the list. It returns empty if the principal to be added was spotted as a duplicate. As mentioned earlier, duplicates cannot be spotted by the PacList bean if names in non-canonical form are used.

Jython example:

```
PacList.grant(actionset, "name", name)
PacList.grant(actionset, "special", keyword)

# example: grant user access to anyone authenticated
PacList.grant("User", "special", "Authenticated")

# example: grant editor access to John Doe - twice
PacList.grant("Editor", "name", "johndoe")
PacList.grant("Editor", "name", "uid=johndoe,dc=example_1,dc=com")
```

Jacl example:

```
$PacList grant actionset name name
$PacList grant actionset special keyword

# example: grant user access to anyone authenticated
$PacList grant User special Authenticated

# example: grant editor access to John Doe - twice
$PacList grant Editor name "johndoe"
$PacList grant Editor name "uid=johndoe,dc=example_1,dc=com"

```

The command revoke deletes principals from the list for an action set. The first argument is the name of the action set. The second argument is a keyword that indicates how the principal to delete is specified, as described later. Alternative keywords are documented in the help for the PacList bean. In most cases, a third argument specifies the principal to be removed. The command returns a success message if a principal was removed from the list, or empty if the principal to be removed was not found.

If the second argument is the keyword all, the command deletes all principals from the list. This deletion of principals is the only case where more than one principal is removed. It is also the only case without a third argument.

If the second argument is the keyword at, the third argument is the index of the principal to be deleted. This addressing style is similar to the list command. It can be used to delete regular and special principals. The indexes of the succeeding principals are changed by this operation.

If the second argument is the keyword name, the third argument is the name of the regular principal to delete. This addressing style is similar to the grant command. Since the PacList bean cannot resolve names into canonical form, the name must be given in the exact same form in which it is present in the list. If the principal was read from the portal, that is the standard form. If the principal was added by a previous grant command, the name in the list is unchanged from the argument that is given to that command.

If the second argument is the keyword special, the third argument is a keyword for the special principal to delete. This addressing style is similar to the grant command and uses the same keywords for the special principals.

Jython example:

```
PacList.revoke(actionset, "all")
PacList.revoke(actionset, "at", index)
PacList.revoke(actionset, "name", name)
PacList.revoke8actionset, "special", keyword)
```

Jacl example:

```
$PacList revoke actionset all
$PacList revoke actionset at index
$PacList revoke actionset name name
$PacList revoke actionset special keyword
```


