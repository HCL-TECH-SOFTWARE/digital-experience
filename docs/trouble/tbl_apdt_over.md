# Data collection and symptom analysis

There is one method to collect data and analyze symptoms for problem determination scenarios. You run a task that can collect and optionally send the data for you. Starting with HCL Digital Experience version 8.5, there is now a task to collect the configuration wizard logs. This task is only necessary if the wizard fails before the steps to create the wp\_profile/ConfigEngine instance.

-   **wpcollector tool**

    Complete the following steps:

    1.  If the support team requested tracing, enable it now as instructed and then re-create the problem. If no tracing is requested, skip to the next step.
    2.  Open a command prompt and change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/bin/ directory.

        **Attention:** You must run the wpcollector task from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/bin/ directory. If you run the task from a different directory, the task fails.

    3.  Run the following script to collect data:
        -   AIX® HP-UX Linux™ Solaris z/OS®: ./wpcollector.sh
        -   IBM® i: wpcollector.sh
        -   Windows™: wpcollector.bat
    4.  If you did not automatically FTP your results, locate the wp.mustgather.zip file or the pmr-wp.mustgather-timestamp.zip file in the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/filesForAutoPD/ directory. Follow the instructions in "Exchanging information with IBM Technical Support for problem determination" to manually FTP your results.
    **Restriction:** If you try to extract the wp.mustgather.zip file, some collections might not expand properly if the path name exceeds the 256 character limitation.

-   **cwcollector tool**

    Complete the following steps if the configuration wizard failed before it created the wp\_profile/ConfigEngine instance:

    1.  Open a command prompt and change to the [AppServer\_root](../reference/wpsdirstr.md#was_root)/ConfigEngine directory.
    2.  Run the following task to collect the configuration wizard logs:

        **Tip:** The logs are compressed and placed into the [AppServer\_root](../reference/wpsdirstr.md#was_root)/filesForAutoPD directory.

        -   AIX®: ./ConfigEngine.sh collect-cw-logs -DPortalBinaryLocation=/usr/IBM/WebSphere/PortalServer -DWasPassword=password
        -   HP-UX Linux™ Solaris: ./ConfigEngine.sh collect-cw-logs -DPortalBinaryLocation=/opt/IBM/WebSphere/PortalServer -DWasPassword=password
        -   IBM® i: ConfigEngine.sh collect-cw-logs -DPortalBinaryLocation=/QIBM/ProdData/WebSphere/PortalServer/V85/Server -DWasPassword=password
        -   Windows™: ConfigEngine.bat collect-cw-logs -DPortalBinaryLocation=C:/IBM/WebSphere/PortalServer -DWasPassword=password
        -   z/OS®: ./ConfigEngine.sh collect-cw-logs -DPortalBinaryLocation=/usr/lpp/zPortalServer/V8R5M0 -DWasPassword=password
        **Attention:** If the collect-cw-logs task fails, run the stopserver server1 command from the [AppServer\_root](../reference/wpsdirstr.md#was_root)/bin directory. Then, rerun the collect-cw-logs task.

    3.  If you did not automatically FTP your results, locate the cw.mustgather.zip file or the pmr-cw.mustgather-timestamp.zip file in the [AppServer\_root](../reference/wpsdirstr.md#was_root)/filesForAutoPD directory. Follow the instructions in "Exchanging information with IBM Technical Support for problem determination" to manually FTP your results.
-   **Troubleshooting:**

    If the wpcollector task cannot process due to too many files, then flags can be set to collect a subset of all the files.

    `-Dskip.XXX.XXXX= true can be set to not include files.`

    "collect-was-common-files-for-PD" flag="skip.was.collection"

    "collect-portal-common-files-for-PD" flag="skip.wp.collection"

    "collect-wp\_profile-common-files-for-PD" flag="skip.profile.collection"

    "action-remove-password-from-prop-files" flag="skip.remove.pwd"

    "transfer-autopd-data" flag="skip.file.transfer"

    "collect-trace-logs" flag = "skip.trace.collection"

    "collect\_wps\_information" flag ="skip.wps.collection"

    "collect\_cisa\_inventory\_info" flag ="skip.cisa.collection"

    "collect-response-file" flag="skip.resp.file.collection"

    "collect-iim-install-data" flag ="skip.iim.data"




