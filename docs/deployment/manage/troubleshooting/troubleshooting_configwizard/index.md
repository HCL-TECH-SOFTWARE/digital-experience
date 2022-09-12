# Troubleshooting the Configuration Wizard

The Configuration Wizard provides tools for troubleshooting HCL Digital Experience errors, such as logs, step commands, and reset options.

If you encounter a failure during a configuration, do not go back to the Answer Questions or Customize Values pages. To recover from the failure and continue the configuration:

1.  Click **View Results** for the step that failed to determine what caused the failure.
2.  Save your selections in case you must reset the configuration process or start over. Click **Download Wizard Selections**.
3.  Recovery steps vary based on the cause of the failure.
    -   Update your configuration environment and run the step that failed again.
    -   Reset the configuration steps and start over.

## View Results to determine cause

When you encounter a problem, it is typically recorded in a log file. There are a number of log files. The two most frequently used log files are ConfigTrace.log and SystemOut.log. On the Configure page, use the **View Results** link to open the ConfigTrace.log. To inspect the ConfigTrace.log, use the following approach:

1.  Search the log file for BUILD FAILED.
2.  After you find BUILD FAILED, search for an error message that occurred before that message.
3.  Most errors have a code and message. The code includes an E to indicate error, such as EJPXX1234E. Ideally the message indicates what failed, why, and what you need to do to recover. Some errors, especially from third-party applications, do not have error codes. For these errors, consult the application documentation.

## Run Step to run a single step again

Depending on the failure and the action that you took, you might be able to run the step again. You can run the step again if the failure resulted from:

-   Not being able to connect to the LDAP or database server because the server was not online. Start the server and when it is online, run the failed step again.
-   Network communications instability. When network becomes stable, run the failed step again.

## Reset Steps

The **Reset Steps** option forces you to start over. If you must reset all the steps, download your wizard selections to save time. After you click **Reset Steps**, return to the home page by clicking Cancel. Select your configuration options, and click **Upload Saved Selections**. After the XML file uploads, you can correct the settings that led to the error.

You need to reset the steps and start the configuration again if you:

-   Provided an incorrect value for the profile path, administrator credentials, or another repeatedly used property.

Resetting the steps does not undo any tasks that the wizard completed before the failure occurred. Steps that you need to take to clean up depend on the configuration steps that the wizard ran before the failure occurred. See individual configuration troubleshooting topics for guidance.

After you correct the values, on the Configure page, click **Skip Step** for any steps that ran that you do not need to run again. If you completed a step in the previous attempt that did not use values that you changed, then you can skip the step.

**Related information**  
[Accessing the Configuration Wizard](../../../../extend_dx/development_tools/portal_admin_tools/cfg_wizard/configuration/cw_run.md)

