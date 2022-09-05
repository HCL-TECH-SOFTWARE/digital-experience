# Deleting and adding portlets - Examples

The following are examples for deleting portlets and adding portlets.

## Delete portlets

Jython example:

```
# delete all welcome-portlets from all pages of a user
# see the Authentication section for portal_login and
portal_logout
portal_login(user\_ID, password)
for page in Content.search("pages").split():
  Content.select(page)
  for c in Layout.search("control", "commonnamehas",
"Welcome").split():
    Layout.delete(c)

portal_logout()
```

Jacl example:

```
# delete all welcome-portlets from all pages of a user
# see the Authentication section for portal_login and portal_logout
portal_login
foreach page [$Content search pages] {
  $Content select $page
  foreach c [$Layout search control commonnamehas Welcome] {
    $Layout delete $c
   }
 }
portal_logout
```

## Add portlets

Jython example:

```
# add a FunPortlet next to each WeatherPortlet

# procedure: add a portlet next to a control
# this changes the current selection of the Layout bean
def add_portlet(control, portlet):
  Layout.select(control)
  pos = Layout.get("position")
  pos = pos + 1
  Layout.select("the", parent)
  Layout.create("control", portlet, "select")
  Layout.move("to", pos)

# main program
# see the Authentication section for portal_login and
portal_logout

portal_login(user\_ID, password)
fun = Portlet.find("portlet", "nameis", "FunPortlet")

for page in Content.search("pages").split():
  Content.select(page)
  for c in Layout.search("control", "commonnamehas",
"Weather").split():
    add_portlet(c, fun)

portal_logout()
```

Jacl example:

```
# add a FunPortlet next to each WeatherPortlet

# procedure: add a portlet next to a control
# this changes the current selection of the Layout bean
proc add_portlet { control portlet } {
  global Layout
  $Layout select $control
  set pos [$Layout get position]
  set pos [expr $pos + 1]
  $Layout select the parent
  $Layout create control $portlet select
  $Layout move to $pos
}

# main program
# see the Authentication section for portal_login and portal_logout

portal_login
set fun [$Portlet find portlet nameis FunPortlet]

foreach page [$Content search pages] {
  $Content select $page
  foreach c [$Layout search control commonnamehas Weather] {
    add_portlet $c $fun
  }
}
portal_logout
```


**Related information**  


[Portal administration tools](../admin-system/admtools.md)

