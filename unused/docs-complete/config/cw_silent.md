# Running the Configuration Wizard silently 

You can run the Configuration Wizard silently if you have multiple deployments or if you want to develop a common deployment template.

1.  Choose one of the following options to prepare to run the Configuration Wizard silently:

    -   Generate the customization data file in the configuration wizard without running the tasks.
    -   Modify the sample customization data file that matches your deployment. This file is in the [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/installer/samples/configwizard directory.

        **Important:** The sample scenarios do not cover all deployment options. Therefore, if the samples do not match your deployment scenario, generate the customization data file.

2.  Open a command prompt.

3.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

4.  Create a silent installation from a set of customization data:

    **Note:** All parameters are necessary. Run this task once per deployment cycle.

    -   AIX® HP-UX Linux™ Solaris z/OS®: ./ConfigEngine.sh customize-workflow -DwfId=workflow-identifier -DwfData=customization-data-file -DwfOutput=output-directory -DWasPassword=password
    -   IBM® i: ConfigEngine.sh customize-workflow -DwfId=workflow-identifier -DwfData=customization-data-file -DwfOutput=output-directory -DWasPassword=password
    -   Windows™: ConfigEngine.bat customize-workflow -DwfId=workflow-identifier -DwfData=customization-data-file -DwfOutput=output-directory -DWasPassword=password
    Where workflow-identifier is the name in the repository.

    Where customization-data-file is the name of the customization data file.

    Where output-directory is the directory where resulting files are written. This directory includes the following content:

    -   The workflow-identifier.wfi file that represents the combination of silent installation tasks and the custom data. Subsequent tasks use this file.
    -   The workflow-identifier directory where scripts and related files are created.
5.  Start the silent installation:

    -   AIX HP-UX Linux Solaris z/OS: ./ConfigEngine.sh execute-workflow -DwfInstance=workflow-instance -DWasPassword=password
    -   IBM i: ConfigEngine.sh execute-workflow -DwfInstance=workflow-instance -DWasPassword=password
    -   Windows: ConfigEngine.bat execute-workflow -DwfInstance=workflow-instance -DWasPassword=password
    This task runs until:

    -   A step in the silent installation fails. You must correct the error and then run the resume-workflow task.
    -   A step is reached that requires manual action. You must finish the requested action and then run the resume-workflow task.
6.  To resume the silent installation, run the resume-workflow task:

    -   AIX HP-UX Linux Solaris z/OS: ./ConfigEngine.sh resume-workflow -DWasPassword=password
    -   IBM i: ConfigEngine.sh resume-workflow -DWasPassword=password
    -   Windows: ConfigEngine.bat resume-workflow -DWasPassword=password
    This task works in the following way:

    -   If you resume the silent installation after an error, the task runs the failed step.
    -   If you resume after you complete a manual step, the task runs the next step in the sequence.

**Parent topic:**[Configuration Wizard ](../config/cw_overview.md)

