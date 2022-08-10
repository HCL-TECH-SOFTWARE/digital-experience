# Logging in to the portal

Before you can work with portal scripting commands, you need to log in to the portal server instance where you want to work with the Portal Scripting Interface.

At the command prompt `wsadmin>` use the following command: `Portal.login("your_userid", "your_password")`:

```
wsadmin> **Portal.login\(your\_userid, your\_password\)**
```

If you logged in successfully, the Portal Scripting Interface returns a message that starts with `logged in as . . .`. The console now shows the following lines:

```
wsadmin> **Portal.login\(your\_userid, your\_password\)**wsadmin> 
**logged in as "uid=your\_userid,o=defaultWIMFileBasedRealm"**

```

You can now administer the portal instance in a similar way as by using the Portal Administration user interface. The following examples show how you can work with pages.

**Parent topic:**[Getting started with the Portal Scripting Interface](../admin-system/adpsi_start.md)

