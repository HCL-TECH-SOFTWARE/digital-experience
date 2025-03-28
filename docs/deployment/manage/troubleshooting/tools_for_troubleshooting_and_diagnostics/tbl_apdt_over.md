# Data collection and symptom analysis

There is one method to collect data and analyze symptoms for problem determination scenarios. You run a task that can collect and optionally send the data for you. Starting with HCL Digital Experience (DX) version 8.5, there is now a task to collect the configuration wizard logs. This task is only necessary if the wizard fails before the steps to create the `wp\_profile/ConfigEngine` instance.

## Using the wpcollector tool

Complete the following steps to collect and transfer data using the `wpcollector` tool:

1.  If the support team requested tracing, enable it now as instructed and then re-create the problem. If no tracing is requested, skip to the next step.
2.  Open a command prompt and change to the `wp_profile_root/PortalServer/bin/` directory.

    !!!attention
        You must run the `wpcollector` task from the `wp_profile_root/PortalServer/bin/` directory. If you run the task from a different directory, the task fails.

3.  Run the following script to collect data:
    -   AIX® and Linux™: `./wpcollector.sh`
    -   Windows™: `wpcollector.bat`

4.  Locate the `wp.mustgather.zip` file in the `wp_profile_root/filesForAutoPD/` directory. Follow the instructions in [HTTPS and SFTP upload and download instructions](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0010064){target="_blank"} to FTP your results to your HCL case number.

!!!note "Restriction"
    If you try to extract the `wp.mustgather.zip` file, some collections might not expand properly if the path name exceeds the 256 character limitation.

## Using the cwcollector tool

Complete the following steps if the configuration wizard failed before it created the `wp\_profile/ConfigEngine` instance:

1.  Open a command prompt and change to the `AppServer_root/ConfigEngine `directory.
2.  Run the following task to collect the configuration wizard logs:

    !!!note "Tip"
        The logs are compressed and placed into the `AppServer_root/filesForAutoPD` directory.

    -   AIX®: `./ConfigEngine.sh collect-cw-logs -DPortalBinaryLocation=/usr/IBM/WebSphere/PortalServer -DWasPassword=password`
    -   Linux™: `./ConfigEngine.sh collect-cw-logs -DPortalBinaryLocation=/opt/IBM/WebSphere/PortalServer -DWasPassword=password`
    -   Windows™: `ConfigEngine.bat collect-cw-logs -DPortalBinaryLocation=C:/IBM/WebSphere/PortalServer -DWasPassword=password`

    !!!attention
        If the collect-cw-logs task fails, run the `stopserver server1` command from the AppServer_root/bin directory. Then, rerun the `collect-cw-logs` task.

3.  Locate the `cw.mustgather.zip` file in the `AppServer_root/filesForAutoPD` directory. Follow the instructions in [HTTPS and SFTP upload and download instructions](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0010064){target="_blank"} to FTP your results to your HCL case number.

## Troubleshooting

If the `wpcollector` task cannot process due to too many files, the following flags can be set to collect a subset of all the files.

!!!note
    `-Dskip.XXX.XXXX= true` can be set to not include files.

```
"collect-was-common-files-for-PD" flag="skip.was.collection"

"collect-portal-common-files-for-PD" flag="skip.wp.collection"

"collect-wp_profile-common-files-for-PD" flag="skip.profile.collection"

"action-remove-password-from-prop-files" flag="skip.remove.pwd"

"transfer-autopd-data" flag="skip.file.transfer"

"collect-trace-logs" flag = "skip.trace.collection"

"collect_wps_information" flag ="skip.wps.collection"

"collect_cisa_inventory_info" flag ="skip.cisa.collection"

"collect-response-file" flag="skip.resp.file.collection"

"collect-iim-install-data" flag ="skip.iim.data"
```

???+ info "Related information"  
    -   [Portal version and history information](../../../manage/troubleshooting/tools_for_troubleshooting_and_diagnostics/wp_history.md)
    -   [Logging and tracing](../../../manage/troubleshooting/logging_and_tracing/index.md)
    -   [WebSphere® Integrated Solutions Console](../../portal_admin_tools/WebSphere_Integrated_Solutions_Console.md)
