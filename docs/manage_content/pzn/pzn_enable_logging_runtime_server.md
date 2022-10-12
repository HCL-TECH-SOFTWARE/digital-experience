# Enable logging

Create and set up the Feedback database. Then, enable logging on the runtime server that hosts Feedback data.

Choose the appropriate option to create, set up, and enable logging of the Feedback database:

|Operating system|Task|
|----------------|----|
|AIX® and Linux™|Complete the following steps:<br> 1.  Change to the wp_profile_root/ConfigEngine directory.<br>
2.  Create the Feedback database using the following command:<br>
    -   `./ConfigEngine.sh feedback-database -DInitalizeFeedbackDB=true -DWasPassword=password`<br>
3.  Set up the Feedback database using the following command:<br>
    -   ./`ConfigEngine.sh setup-feedback -DWasPassword=password` <br>
4.  Open the FeedbackService.properties file from the wp_profile_root/PortalServer/config/config/services/ directory. <br>
5.  Set loggingEnabled to `true`.<br>
6.  Restart HCL Portal.|
|Windows™|Complete the following steps: <br>1.  Change to the wp_profile_root\ConfigEngine directory.<br>
2.  Create the Feedback database using the following command:<br>
    -   `ConfigEngine.bat feedback-database -DInitalizeFeedbackDB=true -DWasPassword=password`<br>
3.  Set up the Feedback database using the following command:<br>
    -   `ConfigEngine.bat setup-feedback -DWasPassword=password`<br>
4.  Open the FeedbackService.properties file from the wp_profile_root\PortalServer\config\config\services\ directory.<br>
5.  Set loggingEnabled to `true`.<br>
6.  Restart HCL Portal.|


