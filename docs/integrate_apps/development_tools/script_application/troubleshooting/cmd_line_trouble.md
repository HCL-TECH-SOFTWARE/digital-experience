# Troubleshooting the Script Application command line tool

Use this information to resolve issues that are related to installing and using the command line tool.

-   **The script sp.sh or sp.bat is not found.**

    Ensure that the installation directory that contains sp.sh or sp.bat is on the executable path of the operating system. As an alternative to modifying the path, you can always use the full path to the script. For UNIX and OS X, sp.sh must also be executable.

-   **When you run the script, you receive the following message: Please set the JAVA\_HOME to the path where the JRE \(6.0 or higher\) is installed.**

    The Java executable file was not found on the executable path. Set the JAVA\_HOME environment variable to the location of an appropriate JRE.

-   **When you run the script, you receive the message Java exception UnsupportedClassVersionError.**

    Ensure that Version 1.6 or later version of a JRE is available on the path. This exception indicates that a 1.5 or earlier JRE was found by the script.

-   **When you run the script, you receive the message Java exceptionClassNotFoundException.**

    The Java class path that is automatically set by the script is not correct. Review the content of the script sp.sh or sp.bat and verify that the class path is being constructed properly. You must edit the script and echo the value of the class path environment variable after it is constructed.

-   **When you run the script, you see the usage documentation printed.**

    One or more of the command line parameters or options is incorrect. In the current version of the tool, the only valid parameter is `push`. The usage documentation lists the valid options. Each of these options requires a valid value.

-   **When you run the script, you are queried for some or all of the required parameters even though you believe that they were set correctly.**

    A copy of the sp-config.json configuration file was not found in the current working directory, or the directory that is specified by the `-contenRoot` option if it was used on the command line. The tool runs even though it cannot find a copy of sp-config.json. In this case, it interactively queries you for each missing required parameter. Ensure that you pointed the tool at the correct directory.

-   **When you run the script, you receive the message Command failed with an exception. See the log for details.**

    This error message is printed for various reasons, all of which indicate that the push failed. The log file that is named sp-cmdln.log contains a trace of the tool's actions and any errors or Java exceptions that were encountered. The log is written to the current working directory \(or the directory that is given by the `-root` option\). Review the content of the log to determine why the push failed. Common problems are related to incorrectly specified command line option values, networking problems while you try to push the content, and incorrect authentication credentials.



