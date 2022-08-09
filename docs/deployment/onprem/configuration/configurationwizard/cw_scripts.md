# Creating scripts and instructions

The Configuration Wizard creates multiple files to help you complete your configuration objectives in a three-step process \(Answer Questions, Customize Values, and Configure\). When you select an option to customize for a specific configuration scenario, you provide information about your environment. Instructions, scripts, and helper files with updated property values are created to guide you in completing your configuration goal. You can run your configuration in real time or you can save your settings to use on another server.

1.  From the Configuration Wizard, click an option to customize your configuration goal.

2.  Answer Questions
3.  If you saved values from a previous session, click **Upload Saved Selections** to locate the .xml file with your values. Then, click **Load**.

4.  Answer questions about your environment, configuration goals, and preferences. The Configuration Wizard uses these values to filter steps when it creates your scripts.

    For example, you can select the targeted operating system where portal is installed to customize the instructions and scripts that are created for your environment.

5.  Click the forward arrow to proceed to **Customize Values**.

6.  Customize Values
7.  Review parameter and property values. Use the default values or enter new values. Default values are provided for some parameters. Sample values are also provided to guide you through the configuration process. To see more parameters that are not part of the basic configuration path, click **Advanced**.

8.  Click the forward arrow to proceed to **Configure**.

9.  Configure

    You can start your configuration on the same system that you are using to access the Configuration Wizard or save your settings to use on another server.

10. Click **Download Wizard Selections** to save your configuration settings to configure similar environments. By saving your settings, you can reuse parameter values in the future. When you use this option, an XML file is created for you to download with the information that you provided.

11. Review parameter and property values.

    Some of the properties and parameters that display might not be relevant to your task.

12. Click **Download Configuration Scripts** to create a compressed file that contains scripts, instructions, and other files.

    This compressed file is downloaded to the location specified in your browser download settings. The configuration wizard creates the following files:

    -   **Instruction file \(HTML\) named after your task**

        The instruction file provides you with tailored steps for your configuration and your target operating system. Based on the information that you provided when customizing your task, an instruction file is created. This file guides you when you run scripts in combination with other manual configuration steps for your specific configuration goal.

    -   **Scripts**

        Depending on the conditions of your environment, the script files use a .sh or .bat file extension or are simple text files. Use the scripts, along with other manual configuration steps described by your instruction file, to run your configuration. For example, your script file might provide you with a script to run a ConfigEngine task rather than you running the task.

    -   **Updated properties**

        Configuration helper files with updated property values entered for your configuration are created when customizing your task. You can use these helper files to save time.

    -   **.wfi file**

        File used for troubleshooting your task.

13. Click **Start Configuration** to run your configuration.


**Parent topic:**[Configuration Wizard](../config/cw_overview.md)

**Related information**  


[Roadmaps to deploy your HCL Digital Experience system](../install/deployment_patterns.md)

