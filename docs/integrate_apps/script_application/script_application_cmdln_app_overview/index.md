# Script Application command line application overview

The Script Application command line application automates the creation and update of Script Applications that you write or that you or someone else in your organization wrote earlier.

The Script Application command line application simplifies development by associating a directory of content on your workstation with a specific instance of Script Application and pushing content from that directory to HCL Digital Experience. If the specified instance of Script Application does not exist, it is created on the first push. Otherwise, the content in the directory replaces the existing content of the application that you are writing or updating. Then, other users can create Script Application instances from the application that was created or updated.

You can also use the command line application to update an existing instance of Script Application that you wrote earlier. You can use the command line application from a command line or from an interactive development environment that you have on your computer.

-   **Accessibility:**

    The Script Application command line feature can help impaired users create portal content. For more information about the HCL Portal accessibility features, read *Accessibility features*.

-   **System requirements:**

    The command line application requires Java version 1.6 or newer Java Runtime Environment. The tool includes JAR files and a Windows .bat file and a Linux or OSX .sh file.


-   **[Installing the command line push application](../script-portlet/cmd_line_push.md)**  
You can push files from a directory to the Script Application. You must first install the push application.
-   **[Creating and updating Script Applications with command line push support](../script-portlet/cmd_line_push_cmd.md)**  
Authors can locate your Script Applications and add them to your portal pages by using the content toolbar when they are stored in a Web Content Manager Site Library. You can push files that are associated with script-based applications from your local file system to a Script Application instance in a Web Content Manager Site Library by running the sp push command.
-   **[Creating and enabling a custom site area](../script-portlet/create_cust_site_area.md)**  
You can create extra custom site areas so that your content can be stored in separate site areas.
-   **[Troubleshooting the Script Application command line tool](../script-portlet/cmd_line_trouble.md)**  
Use this information to resolve issues that are related to installing and using the command line tool.


**Related information**  


[Accessibility features](../overview/access.md)

[Script Application limitations and troubleshooting](../script-portlet/ts_preview.md)

