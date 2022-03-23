# Portal authentication 

The Portal bean handles functions that are outside of the responsibility of the other beans. This responsibility includes global data and technical aspects of scripting, such as the scripting session with the portal. The Portal bean is referenced as $Portal in Jacl.

The Portal bean provides the following functions:

-   Methods to do a login and logout. For more information, see *Authentication*.
-   Methods to set a virtual portal. For more information, see *Virtual Portal selection*.

-   **[User identity authentication](../admin-system/auth.md)**  
Before you can access any data from a script, you must establish the user identity for script execution.
-   **[Virtual portal selection \| Portal authentication](../admin-system/vrtptl_sltn_auth.md)**  
You can set a virtual portal for a login or Portal.login\(\) command with the $Portal setvp or Portal.setvp\(\) command. It is possible to set the virtual portal during a session, but the session becomes effective only during the $Portal login command. The virtual portal is specified by the URL context. The URL context is the part of the home URL that identifies the virtual portal. If $Portal setvp or Portal.setvp\(\) is started without a URL context, the default virtual portal is set.

**Parent topic:**[Command reference for the Portal Scripting Interface](../admin-system/adpsicrf.md)

