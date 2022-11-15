# System event logging

The system event logging facility of HCL Digital Experience enables the recording of information about the operation of HCL Portal.

Event logs provide administrators with information about important or abnormal events, especially errors that occur during the operation of the product. In addition, event logs gather debugging information that helps IBM support to resolve problems.

HCL Portal provides two types of logging: logging of messages and logging of debugging messages called traces.

For information about how to use log files and a list of trace logger strings refer to the topic about HCL Portal logs.

## Message logging

Messages for HCL Portal are logged in the following files:

-   **SystemOut.log**

    Contains information that is useful to monitor the health of the HCL Portal server and all running processes.

-   **System.err**

    Contains exception stack trace information that is useful when problem analysis is done.


**Locating the log files:** Log files for HCL Portal, including SystemOut.log and System.err are in the following directory: wp_profile_root/logs/WebSphere_Portal

## Trace logging

HCL Portal provides the logging of debugging messages called traces. These traces are useful for fixing problems. However, to save system resources, they are turned off by default.

Traces can be set for different durations:

-   **Temporary**

    Traces can be set for a temporary period by using the administration portlet **Enable Tracing** or the WebSphere® Integrated Solutions Console. To set traces by using the portlet, complete the following steps:

    1.  Log in as the administrator.
    2.  Click the **Administration menu** icon. Then, click **Portal Analysis > Enable Tracing**. The Enable Tracing portlet displays.
    3.  Click **Site Administration > Advanced Administration > Portal Analysis > Enable Tracing**. The Enable Tracing portlet displays.
    4.  Type the required trace string into the field **Append these trace settings:** For example, this string can be `com.ibm.wps.command.credentialvault.*=finest`
    5.  Click the **Add** icon. **Enable Tracing** updates the **Current trace settings** field.
    **Note:** Restarting HCL Portal removes traces that were set by using the Enable Tracing Administration portlet.

    To disable tracing, use either of the following methods:

    -   Select the current trace settings under **Current trace settings:** and click the **Remove** icon. For example, the current setting can be `com.ibm.wps.command.credentialvault.*=finest`.
    -   Type the trace string *=info into the field **Append these trace settings:** and click the **Add** icon. This trace string overwrites all settings that are listed under **Current trace settings:** and resets it to the default.
-   **Extended**

    To enable trace settings for a longer period, that is, for more than one session, switch them on in the WebSphere® Application Server configuration. Proceed by the following steps:

    1.  Access the WebSphere® Integrated Solutions Console by using this URL: `http://hostname:port_number/ibm/console`
    2.  Go to **Servers > Server Types > WebSphere application servers**.
    3.  Select the application server.
    4.  Click **Troubleshooting > Change Log Detail Levels**.
    5.  Specify the required trace settings. For example, this setting can be `com.ibm.wps.command.credentialvault.*=finest`
    6.  Save your updates.
    7.  Restart the WebSphere_Portal server.
    8.  To disable tracing, specify `tracestring: *=info` and restart the WebSphere_Portal server.

## Changing the log file name and location

You can change the locations of the log files by configuring them in the WebSphere Integrated Solutions Console. Go to **Troubleshooting > Logs and Trace > server_name** and select the logger type that you want to change. In the configuration dialog, change the path for the log file as required.

## Changing the language used in the log file

By default, information in the log file is written in the language that was used for the HCL Portal installation. However, because HCL Portal supports a number of languages, you can choose to have the log file information that is written in a language other than that language used during installation.

To change the language that is used for the log file, edit the file log.properties. This file is in the following HCL Portal directory:

-   AIX® and Linux™: wp_profile_root/PortalServer/config/config
-   Windows™: wp_profile_root\PortalServer\config\config

Add the following line:

```
locale=xx 
```

Where xx is the two-letter abbreviation for the locale. For a list of the locale abbreviations that are used with HCL Portal, refer to the topic about Directory structure and go to the section about Directories for languages. For example, to have log information that is generated in English, you would add the following line:

```
 locale=en 
```

## Reference: Log file format

If the logs are written to the log file of HCL Portal and not redirected to the logging facility WebSphere Application Server, the log file consists of a sequence log records that are separated by blank lines.

The log records have the following format:

```

     timestamp classification classname method threadID
     messagecode: logmessage

```

Where:

-   The timestamp is the time (to the millisecond) when the log record was created.
-   The classification is one of the following letters:
    -   **E**

        For error messages

    -   **W**

        For warning messages

    -   **I**

        For informational messages

    -   **l**

        For traces (low details)

    -   **m**

        For traces (medium details)

    -   **h**

        For traces (high details)

-   The classname is the Java class that contains the code that triggered the log event.
-   The method is the name of the Java method that contains the code that triggered the log event.
-   The messagecode is a unique identifier for this message, to uniquely identify the specific message and refer to it when you are consulting documentation or support. The message code is only available for error, warning, or informational messages, and not for traces. It consists of:
    -   A four-character identifier for the component that defines the message.
    -   A four-digit number that identifies the message in the component.
    -   A one-letter classification code, which can be E, W, or I.
-   The logmessage is the actual log message that describes the logged event. Error, warning, and informational messages are translated into the system locale. Trace messages are not translated.
-   The threadID is the identification of the thread that triggered the log event.

!!!note
    1.  Traces are written only if the specific tracing facility is enabled; all other messages are written unconditionally.
    2.  The system locale is part of the general globalization features of HCL Portal and can be configured by using LocalizerService. For more information, see the topics about Setting service configuration properties and about the Portal configuration services.

Here is an example of a log record:

```

2011.05.16 13:36:14.449 W com.ibm.wps.services.datastore.DataStoreServiceImpl init 0000003a
DSTO0063W: The transaction isolation level is not set to READ_COMMITTED.

The current value is TRANSACTION_REPEATABLE_READ.

```

???+ info "Related information"  
    -   [Starting and stopping servers, deployment managers, and node agents](../../../../deployment/manage/stopstart.md)
    -   [Setting service configuration properties](../../../../deployment/manage/config_portal_behavior/service_config_properties/index.md)
    -   [Portal service configuration](../../../../deployment/manage/config_portal_behavior/service_config_properties/portal_svc_cfg/index.md)
    -   [Localizer Service](../../../../deployment/manage/config_portal_behavior/service_config_properties/portal_svc_cfg/srvcfgref_localizer.md)
    -   [Directory structure](../../../../guide_me/wpsdirstr.md)
    -   [WebSphere Application Server 8.5.:Log and trace settings](https://www.ibm.com/docs/en/SSEQTP_8.5.5/com.ibm.websphere.base.doc/ae/utrb_logtrace.html)

