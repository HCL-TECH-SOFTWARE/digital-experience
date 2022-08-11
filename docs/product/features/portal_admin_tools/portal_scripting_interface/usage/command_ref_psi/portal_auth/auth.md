# User identity authentication

Before you can access any data from a script, you must establish the user identity for script execution.

The login command authenticates the scripting engine against the portal and creates a user session for the subsequent commands. There are several different options for logging in, which can be distinguished by the number of arguments.

The login command with two arguments expects a user name and a password as the first and second argument. The user name identifies the portal user. It can be given as a fully qualified distinguished name, or as a login name. The portal looks up the user name and verify the password.

Jython example:

```
Portal.login(user\_ID, password)

# example: login as Portal user
Portal.login(user\_ID, password)
```

Jacl example:

```
$Portal login user\_ID password

# example: login as Portal user
$Portal login user\_ID password
```

The login command without arguments is used only if security is enabled in the portal. In that case, a user name and password had to be given to the application server to connect to the portal. The portal accepts the user identity from the connection without a second password check. This action requires that the application server user is also a portal user.

Jython example:

```
Portal.login()
```

Jacl example:

```
$Portal login
```

The login command with a single argument is used only if security is enabled in the portal. Like the version without argument, the user identity from the connection is accepted by the portal. In addition, that user requires manage permission on the portal itself. That permission is the same permission that is required to use the XMLAccess tool.

If these preconditions are satisfied, the user name that is given as argument, is looked up and taken as the portal user identity. The user name that is given as argument is different from the user name of the connection. There is no second password check. This action is similar to the su command found in many operating systems, which allows the super user to act as any other user, without knowing the user password.

Jython example:

```
Portal.login(user\_ID)

# example: login and change to Portal user
Portal.login("johndoe")
```

Jacl example:

```
$Portal login user\_ID

# example: login and change to Portal user
$Portal login johndoe

```

The logout command ends the scripting session and allows the portal to free the resources that are allocated for that session. It must always be used before the scripting client exits. The logout command also invalidates the portal data that is cached in the client. It is therefore possible to reauthenticate as a different user without starting a new scripting client.

You must always logout and reauthenticate as the same user if the connection from the scripting client to the portal is re-established by using the AdminControl bean of the wsadmin tool. The portal might lose the user session in that case, which causes subsequent operations fail.

Jython example:

```
Portal.logout()
```

Jacl example:

```
$Portal logout
```

In a deployment scenario, the authentication must not be handled by the deployment script itself. Use a wrapper script for the authentication instead, so that you can run the deployment script under different user identities without changes. Here is an example for a wrapper script, which assumes that the deployment script defines a run\_deployment procedure.

Jython example:

```
# keep the user identity of the connection
Portal.login()
# execute the deployment procedure
run_deployment()
# clean up before exit
Portal.logout()
```

Jacl example:

```
# keep the user identity of the connection
$Portal login
# execute the deployment procedure
run_deployment
# clean up before exit
$Portal logout

```

Alternatively, the deployment script can use procedures that are defined in a profile script for login and logout. Profile scripts are run on start of the scripting client.

Jython example:

```
# login function
def portal_login(user\_ID, password):
  Portal.login(user\_ID, password)
  # other startup operations, like logging the access
# logout function
def portal_logout():
  Portal.logout()
  # other shutdown operations
```

Jacl example:

```
# procedure for login
proc portal_login { } {
  $Portal login user\_ID password
 # other startup operations, like logging the access
}

# procedure for logout
proc portal_logout { } {
  $Portal logout
  # other shutdown operations
}

```

**Parent topic:**[Portal authentication](../admin-system/ptl_auth.md)

