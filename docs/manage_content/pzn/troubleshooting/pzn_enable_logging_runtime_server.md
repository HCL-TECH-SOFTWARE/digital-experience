# Enable logging

Create and set up the Feedback database. Then, enable logging on the runtime server that hosts Feedback data.

Choose the appropriate option to create, set up, and enable logging of the Feedback database:

|Operating system|Task|
|----------------|----|
|AIX®HP-UXLinux™Solaris|Complete the following steps:1.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.
2.  Create the Feedback database using the following command:
    -   ./ConfigEngine.sh feedback-database -DInitalizeFeedbackDB=true -DWasPassword=password
3.  Set up the Feedback database using the following command:
    -   ./ConfigEngine.sh setup-feedback -DWasPassword=password
4.  Open the FeedbackService.properties file from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config/config/services/ directory.
5.  Set loggingEnabled to true.
6.  Restart HCL Portal.

|
|IBM® i|Complete the following steps:1.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.
2.  Create the Feedback database using the following command:
    -   ConfigEngine.sh -profileName profile\_root feedback-database -DInitalizeFeedbackDB=true -DWasPassword=password
3.  Set up the Feedback database using the following command:
    -   ConfigEngine.sh -profileName profile\_root setup-feedback -DWasPassword=password
4.  Open the FeedbackService.properties file from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config/config/services/ directory.
5.  Set loggingEnabled to true.
6.  Restart HCL Portal.

|
|Windows™|Complete the following steps:1.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\ConfigEngine directory.
2.  Create the Feedback database using the following command:
    -   ConfigEngine.bat feedback-database -DInitalizeFeedbackDB=true -DWasPassword=password
3.  Set up the Feedback database using the following command:
    -   ConfigEngine.bat setup-feedback -DWasPassword=password
4.  Open the FeedbackService.properties file from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\PortalServer\\config\\config\\services\\ directory.
5.  Set loggingEnabled to true.
6.  Restart HCL Portal.

|
|z/OS®|Complete the following steps:1.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.
2.  Create the Feedback database using the following command:
    -   ./ConfigEngine.sh feedback-database -DInitalizeFeedbackDB=true -DWasPassword=password
3.  Set up the Feedback database using the following command:
    -   ./ConfigEngine.sh setup-feedback -DWasPassword=password
4.  Open the FeedbackService.properties file from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config/config/services/ directory.
5.  Set loggingEnabled to true.
6.  Restart HCL Portal.

|

**Parent topic:**[Feedback and analytics](../pzn/pzn_feedbackanalytics.md)

