# Disabling step-up authentication and the Remember me cookie

You can disable the step-up authentication feature or the Remember me cookie to remove them from your server.

1.  Go to the wp_profile_root/ConfigEngine/properties directory.

2.  Open the wkplc.properties file with a text editor.

3.  Enter one of the following values for the disable_rememberme parameter under the StepUp Authentication heading:

    !!!note
        Add the disable_rememberme parameter to the wkplc.properties file if it does not exist.

    -   If you are disabling both step-up authentication and the Remember me cookie, enter true.
    -   If you are disabling step-up authentication only, enter false.
    -   If you are disabling the Remember me cookie only, leave blank.

4.  Save your changes to the wkplc.properties file.

5.  Open a command prompt.

6.  Change to the wp_profile_root/ConfigEngine directory.

7.  Choose one of the following tasks to modify your environment:

    -   If you are disabling step-up authentication and or the Remember me cookie, run the `disable-stepup-authentication` task.
    -   If you are disabling the Remember me cookie only, run the `disable-rememberme` task.
    Use the following command syntax:

    -   AIX® and Linux™: `./ConfigEngine.sh task_name -DWasPassword=password`
    -   Windows™: `ConfigEngine.bat task_name -DWasPassword=password`

    Where task_name is either `disable-stepup-authentication` or `disable-rememberme`.

8.  Check the output for any error messages before you run any additional tasks. If any of the configuration tasks fail, verify the values in the wkplc.properties file.

9.  Stop and restart the appropriate servers to propagate the changes. For instructions, go to [Starting and stopping servers, deployment managers, and node agents](../../../../manage/stopstart.md).



