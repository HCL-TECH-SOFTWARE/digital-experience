# Work with the Portal Scripting Interface 

Learn more about the different modes that you can use with the Portal Scripting Interface.

## Prerequisite information

The Portal Scripting Interface provided by HCL Digital Experience is based on the wsadmin scripting tool that is provided by IBM® WebSphere® Application Server. Therefore, before you use the Portal Scripting Interface, familiarize yourself with how to use the WebSphere Application Server wsadmin tool.

## Interactive mode

Use the interactive mode if you want to interact directly and dynamically with the portal to perform simple administrative tasks that should only be executed once. For example, the administrator wants to modify the permissions of a page for a certain principal, or the administrator wants to add a portlet to a page. Use the interactive mode if you do not intend to repeat the operation.

Before initiating a session in interactive mode, make sure that HCL Digital Experience is running. The portal script client is located in the HCL Portal installation directory:

-   AIX®HP-UXLinux™Solaris: `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/bin`
-   IBM i: `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/bin`
-   Windows™: `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\PortalServer\bin`
-   z/OS®: `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/bin`

Log in using the administrative user ID, and invoke the portal script client using the following commands:

-   AIXHP-UXLinuxSolaris: ./wpscript.sh
-   IBM i: wpscript.sh
-   Windows: wpscript.bat
-   z/OS: ./wpscript.sh

The following procedures provide examples:

Before initiating a session in interactive mode, make sure that HCL Portal is running. You can invoke the portal script client using the `wpscript.sh` command from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/bin` directory. You must be logged in using the administrative user ID. The following procedures provide examples:

1.  If WebSphere Application Server security is enabled, specify a user ID and password during login as shown in the following example:

    -   AIXHP-UXLinuxSolaris: ./wpscript.sh -port port\_number -user user\_id -password password
    -   IBM i: wpscript.sh -port port\_number -user user\_id -password password
    -   Windows: wpscript.bat -port port\_number -user user\_id -password password
    -   z/OS: ./wpscript.sh -port port\_number -user user\_id -password password
    The most basic parameters are explained briefly in the following table.

    |Parameter|Description|
    |---------|-----------|
    |-lang|Specifies the language of the script file, command, or an interactive shell. Specify one of the following values for the -lang parameter:

    -   jacl
    -   jython
 This parameter is optional and has no default value. This option overrides language determinations that are based on script file names, profile script file names, or the com.ibm.ws.scripting.defaultLang property.

 **Important:** If you do not specify the script language in the command line or as a parameter, and the wsadmin tool cannot determine the script language, an error occurs. If you do not specify the script language as the value for -lang, the wsadmin tool determines the script language as follows:

    -   If you specify the -f script\_file\_name argument, the wsadmin tool determines the language from the name of the target script file.
    -   If you specify the -profile profile\_script\_name argument, the wsadmin tool determines the language from the name of the profile script.
|
    |-conntype|The type of connection that should be established between scripting. Valid connection types include:

    -   SOAP
    -   RMI
    -   NONE
 The default value is SOAP. This parameter is optional. Use the -conntype NONE option to run in local mode. The result is that the scripting client is not connected to a running server. If the connection type NONE is selected, the scripting beans are inactive and cannot be used for administration, with the exception of the help command.

|
    |-port|The connection port number. This parameter is optional. The port number depends on values chosen during installation. You can verify the value that is set for the WasSoapPort property in the wkplc.properties file found in the appropriate directory given here:

    -   AIXHP-UXLinuxSolaris: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine
    -   IBM i: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine
    -   Windows: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\ConfigEngine
If you are running wpscript on a server that is part of a cell managed by a deployment manager, the port\_number can vary depending on what ports are in use on the system when the deployment manager is created. To verify the value, check the setting for SOAP\_CONNECTOR\_ADDRESS in serverindex.xml located in the appropriate directory given here:

    -   AIXHP-UXLinuxSolaris: dmgr\_profile\_root/config/cells/cell\_name/nodes/node\_name
    -   IBM i: dmgr\_profile\_root/config/cells/cell\_name/nodes/node\_name
    -   Windows: dmgr\_profile\_root\\config\\cells\\cell\_name\\nodes\\node\_name
For z/OS: The name of the connection port. This is the SOAP port of the portal server. This parameter is optional. To determine the SOAP port, access the WebSphere Integrated Solutions Console, go to **yourPortalServerName** \> **End Points** \> **SOAP\_CONNECTOR\_ADDRESS**. For example, if you are running wpscript on a server that is part of a cell managed by a deployment manager, the SOAP port might be 10033.

|
    |-user|The user ID under which you establish the connection. This parameter can be mandatory, depending on your security configuration.

|
    |-password|The password for the user ID under which you establish the connection.

|

2.  Log on to the portal using one of the following script commands:

    Jython: `Portal.login\("user\_ID", "password"\)`

    JACL: `$Portal login user\_ID password`

3.  Issue portal script commands as required.
4.  After you have completed all tasks by the portal scripting interface, close and exit the script processor. All changes that you committed are applied to the portal configuration.

## Script mode

Use the script mode to apply predefined changes to the configuration of a portal.

The wpscript tool executes a Jython or JACL script that contains the administrative operations. The scripting client inherits the script processor from wsadmin, so an administrator can exploit the Jython or JACL scripting language, in order to write re-usable, extendable administration scripts. This mode is typically preferred if reproducible administration tasks are created: For example, the administrator can write a script that produces a complete page subtree, and adds individual page layouts and portlets on each page.

Users who have access permission to perform XML configuration interface requests can change configurations of all resources. The Portal Scripting Interface is mostly consistent with the administration model that is exposed by the Portal user interface.

Before using script mode, make sure that HCL Portal is running and a portal script file is available. You must be logged in using the WebSphere administrative user ID. Use the following procedure:

1.  Update the script file with the appropriate credentials, if required.
2.  Use one of the following commands to launch the script processor tool:

    Jython: `wpscript.sh -port port\_number -f script\_file\_name.py`

    JACL: `wpscript.sh -port port\_number -f script\_file\_name.jacl`

    This initializes the interactive script environment of the portal JACL or Jython script processor.

3.  In the directory `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/bin`, use the following command to launch the script processor tool:

    Jython: `wpscript.sh -port port\_number -f script\_file\_name.py`

    JACL: `wpscript.sh -port port\_number -f script\_file\_name.jacl`

    This command initializes the script environment of the portal script processor. You must be logged in at the z/OS console using the WebSphere Application Server administrative user ID.

4.  Check the output from the script processor to ensure that no errors occurred during the execution of the script.

All changes committed by the script are immediately applied to the portal configuration.

The following script example creates a new page with the title **A page**. This page resides beneath the **Home** label. The page contains two portlets that are arranged horizontally.

-   **Portal Jython script example**

    The following example is a Jython script file named testme.py:

    ```
    # Scripting bean example: create a simple page (multi-column Layout)
    #
    
    # Procedure: create a multi-column page under the page that is currently
    # selected, and place the given portlets into the layout.
    #
    # parameters:
    #   name The name of the page
    #   portlet_names A list of portlet names.
    # returns:
    #   oid The id of the page that has been created
    def create_multi_col_page(name, portlet_names):
        thePage = Content.create("page", name, "html")
        Content.select(thePage)
        lyt0 = Layout.create("container", "horizontal", "select")
        for pn in portlet_names:
            pid = Portlet.find("portlet", "cn", pn)
            Layout.create("control", pid)
    
        return thePage
    
    
    # main code starts here
    
    # set User ID/ pwd for portal Login command
    # Hint: User ID and passwords should normally not be placed inside a
    # configuration script; better use property files or command line arguments
    user = "user\_ID"
    pwd = "password"
    Portal.login(user, pwd)
    
    # determine and select the parent of the page to be created.
    # In this example, This is the "Home" label.
    Content.select(Content.find("all", "uniquename", "ibm.portal.Home")
    # Invoke the page creation procedure. The label of the page is "My test page",
    # portlets to be added are the reminder portlet and the welcome portlet.
    newbie = create_multi_col_page("A Page", ["Reminder", "Welcome_to_HCL Portal and HCL Web Content Manager"])
    
    print "ok, we are done."
    ```

-   **Portal JACL script example**

    The following example is a JACL script file named testme.jacl:

    ```
    # Scripting bean example: create a simple page (multi-column Layout)           
    #                                                                              
    
    # Procedure: create a multi-column page under the page that is currently       
    # selected, and place the given portlets into the layout.                      
    #                                                                              
    # parameters:                                                                  
    #   name              The name of the page                                     
    #   portlet_names     A list of portlet names.                                 
    # returns:
    #   oid               The id of the page that has been created                 
    proc create_multi_col_page { name portlet_names } {                            
      global Content Layout Portlet                                                
        set thePage [$Content create page $name html]                              
        $Content select $thePage                                                   
        set lyt0 [$Layout create container horizontal select]                      
        foreach pn $portlet_names {                                                
          set pid [$Portlet find portlet cn $pn]                                   
          $Layout create control $pid                                              
        }                                                                          
      return $thePage                                                              
    }                                                                              
                                                                                   
    # main code starts here                                                        
                                                                                   
    # set User ID/ pwd for portal Login command                                    
    # Hint: User ID and passwords should normally not be placed inside a           
    # configuration script; better use property files or command line arguments    
    set user user\_ID                                                           
    set pwd  password                                                              
    $Portal login $user $pwd                                                       
                                                                                   
    # determine and select the parent of the page to be created.                   
    # In this example, This is the "Home" label.                              
    $Content select [$Content find all uniquename "ibm.portal.Home"]                 
                                                                                   
    # Invoke the page creation procedure. The label of the page is "My test page", 
    # portlets to be added are the reminder portlet, and the welcome portlet.   
    set newbie [create_multi_col_page "A Page" { "Reminder" "Welcome_to_HCL Portal and HCL Web Content Manager" } ]
                                                                                   
    puts "ok, we are done."       
    ```


The scripts can receive parametric information externally, by using one of the following features:

-   Profiles.
-   Command line arguments.

Scripts can access command line arguments with the following variables:

-   **argc**

    Use this variable in JACL scripts to specify the number of command line arguments.

-   **argv**

    Use this variable in Jython and JACL scripts to specify the command line arguments.


Jython: In the preceding example script, testme.py, delete the following statements:

```
user = "portaladmin"
pwd = "adminpwd"
```

and replace them with the following statements:

```
if len(sys.argv) != 2:
   print "invocation syntax: wpscript testme.py <user> <pwd>"
   sys.exit(1)

user = argv[0]
pwd = argv[1]
```

JACL: In the preceding example script, testme.jacl, delete the following statements:

```

set user portaladmin                                                           
set pwd  adminpwd 

```

and replace them with the following statements:

```
if { $argc != 2 }  {
    puts "invocation syntax: wpscript testme.jacl <user> <pwd>"
	  exit
  }
  set user [lindex $argv 0]
  set pwd [lindex $argv 1]
```

The security-sensitive username and password are removed from the script. The modified code expects the user ID and password to be specified as command line arguments, for example:

Jython: wpscript.sh -port port\_number -f testme.py user\_IDpassword  
 JACL:wpscript.sh -port port\_number -f testme.jacl user\_ID password

## Run scripting commands in a profile

A profile is a script that runs before the main script, or before entering interactive mode. Profiles can be used to set up environment specific behavior or user specific data. Profiles are specified when invoking wpscript, using the -profile parameter. For example, the login command can be placed in a profile.

-   **Jython profile script example**

    The following example is a Jython profile script named mylogin.py:

    ```
    # scripting profile
    # contains log-in procedure on portal with disabled security
    if len(sys.argv) != 2:
       print "invocation syntax: wpscript -f testme.jacl -profile
    mylogin.py user\_ID password"
       sys.exit(1)
    
    user = argv[0]
    pwd = argv[1]
    Portal.login(user, pwd)
    ```

    Remove or comment out the following statements in the testme.py script file:

    ```
    if len(sys.argv) != 2:
       print "invocation syntax: wpscript testme.py user\_ID password"
       sys.exit(1)
    
    user = argv[0]
    pwd = argv[1]
    Portal.login(user, pwd)
    ```

    To invoke `mylogin.py`, enter the following command: wpscript.sh -port port\_number -profile mylogin.py -f testme.py user\_ID password

-   **JACL profile script example**

    The following example is a JACL profile script named mylogin.jacl:

    ```
    # scripting profile 
      # contains log-in procedure on portal with disabled security
      if { $argc != 2 }  {
        puts "invocation syntax: wpscript -f testme.jacl -profile mylogin.jacl user\_ID password"
    	  exit
      }
      set user [lindex $argv 0]
      set pwd [lindex $argv 1]
      $Portal login $user $pwd
    ```

    Remove or comment out the following statements in the testme.jacl script file:

    ```
      if { $argc != 2 }  {
        puts "invocation syntax: wpscript testme.jacl user\_ID password"
        exit
      }
      set user [lindex $argv 0]
      set pwd [lindex $argv 1]
      $Portal login $user $pwd 
    ```

    To invoke `mylogin.jacl`, enter the following command: wpscript.sh -port port\_number -profile mylogin.jacl -f testme.jacl user\_ID password


The benefit of this change is that the environment-specific login procedure is removed from the administration script. For systems with enabled WebSphere Application Server security, the login procedure is:

-   **Jython scripts**

    ```
      # scripting profile 
      # contains log-in procedure on portal with enabled security
      Portal.login()
    ```

-   **JACL scripts**

    ```
      # scripting profile 
      # contains log-in procedure on portal with enabled security
      $Portal login
    ```


**Parent topic:**[Portal Scripting Interface ](../admin-system/ad_psi.md)

**Related information**  


[Scripting for static pages ](../admin-system/spa_psi.md)

[Portal Scripting Interface ](../admin-system/ad_psi.md)

[Command reference for the Portal Scripting Interface](../admin-system/adpsicrf.md)

[Configuring portal behavior ](../admin-system/adptlcfg.md)

[The XML configuration interface ](../admin-system/admxmlai.md)

[Users and groups ](../admin-system/adusrgrp.md)

