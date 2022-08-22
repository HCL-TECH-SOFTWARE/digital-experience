# Opening a console window for interactive scripting

To start the Portal Scripting Interface from a console window, use the procedure described here.

1.  Change into the directory where your Portal Scripting Interface is installed:

    `cd /opt/WebSphere/PortalServer/bin`

2.  Call the Portal Scripting Interface startup command file:

    `wpscript.sh|bat`.

    **Note:** You must indicate that you want to enter the commands in Jython as follows: `-lang jython`. If you prefer to use the JACL Syntax, you can type `-lang jacl`.

    1.  Type the command as follows: `./wpscript.sh -lang jython`.

        This command starts the interactive scripting console. The Portal Scripting Interface prompts you for a user ID and password. The Portal Scripting Interface is an extension to the WebSphere® Application Server `wsadmin` tool.

    2.  Use a valid WebSphere Application Server administrator user ID.

        The Portal Scripting Interface returns the following response:

        ```
        WASX7209I: Connected to process "HCL Portal and HCL Web Content Manager" on node wpsbvt using SOAP connector;  
                   The type of process is: UnManagedProcess
        WASX7031I: For help, enter: "print Help.help()"
        
        ```

3.  You can now enter Portal Scripting commands as required. You can also use all the available WebSphere Application Server `wsadmin` commands.



