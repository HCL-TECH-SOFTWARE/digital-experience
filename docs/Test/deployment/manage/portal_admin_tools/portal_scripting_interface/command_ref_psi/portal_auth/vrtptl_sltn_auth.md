# Virtual portal selection \| Portal authentication

You can set a virtual portal for a login or Portal.login(\) command with the $Portal setvp or Portal.setvp(\) command. It is possible to set the virtual portal during a session, but the session becomes effective only during the $Portal login command. The virtual portal is specified by the URL context. The URL context is the part of the home URL that identifies the virtual portal. If $Portal setvp or Portal.setvp(\) is started without a URL context, the default virtual portal is set.

Jython example:

```
# example: set the virtual portal and execute a portal login
# in the example, the virtual portal URL context is employees,
# which would correspond with a base URL of
'/wps/myportal/employees'

Portal.setvp("employees")

Portal.login()
```

Jacl example:

```
# example: set the virtual portal and execute a portal login
# in the example, the virtual portal URL context is employees,
# which would correspond with a base URL of '/wps/myportal/employees'

$Portal setvp employees

$Portal login
```


