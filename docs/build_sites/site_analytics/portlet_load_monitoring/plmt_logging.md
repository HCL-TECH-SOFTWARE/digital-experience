# Logging and auditing events

Portlet load monitoring allows you to log events. For example, this can help you audit events. When Portlet load monitoring blocks or enables a portlet, it creates a log file entry in the HCL Digital Experience log file SystemOut.log. This log file entry contains the portlet object ID, the portlet name, the WAR file name of the portlet and the EAR file display name. The log file entries consist of translated messages. If you use tools that monitor log files for events, you can check for log file entries that are related to Portlet load monitoring as described here.

Portlet load monitoring creates log file entries for the events that are described in the following list.

-   **Portlet load monitoring blocks a portlet because the portlet exceeds the maximum number of requests.**

    If Portlet load monitoring blocks a portlet because it exceeded the maximum number of concurrent requests that are specified for it, Portlet load monitoring creates the following log file entry with the message code `EJPPG3001W`:

    ```
    EJPPG3001W: Portlet load monitoring disabled the portlet with 
    object ID: Object\_ID, portlet name: Portlet\_Name, 
    WAR file name: WAR\_File\_Name, EAR file display name: EAR\_File\_Display\_Name, 
    because the portlet exceeded its maximum number of requests.
    ```

-   **Portlet load monitoring blocks a portlet because the portlet exceeds the average response time.**

    If Portlet load monitoring blocks a portlet because that portlet exceeded the average response time that is specified for this portlet, Portlet load monitoring creates the following log file entry with the message code `EJPPG3002W`:

    ```
    EJPPG3002W: Portlet load monitoring disabled the portlet with 
    object ID: Object\_ID, portlet name: Portlet\_Name, 
    WAR file name: WAR\_File\_Name, EAR file display name: EAR\_File\_Display\_Name, 
    because the portlet exceeded its average response time.
    ```

-   **Portlet load monitoring activates a portlet because the portlet returns to the reactivation limit.**

    If Portlet load monitoring reenables a blocked portlet because the blocked portlet falls back down to the reactivation limit of concurrent requests that are defined for the portlet, Portlet load monitoring creates the following log file entry with the message code `EJPPG3003I`:

    ```
    EJPPG3003I: Portlet load monitoring reenabled the portlet 
    with object ID: Object\_ID, portlet name: Portlet\_Name, 
    WAR file name: WAR\_File\_Name, EAR file display name: EAR\_File\_Display\_Name 
    because number of portlet requests fell below the reactivation limit.
    ```

-   **Administrator manually blocks requests to a portlet.**

    If a portal administrator manually blocks requests to a portlet, Portlet load monitoring creates the following log file entry with the message code `EJPPD0101I`:

    ```
    EJPPD0101I: Portal administrator admin\_user\_ID manually blocked requests 
    to the portlet with object ID: Object\_ID, portlet name: Portlet\_Name, 
    WAR file name: WAR\_File\_Name, EAR file display name: EAR\_File\_Display\_Name
    
    ```

-   **Administrator manually unblocks requests to a portlet.**

    If an administrator manually unblocks requests to a blocked portlet, Portlet load monitoring creates the following log file entry with the message code `EJPPD0100I`:

    ```
    EJPPD0100I: Portal administrator admin\_user\_ID manually unblocked requests 
    to the portlet with object ID: Object\_ID, portlet name: Portlet\_Name, 
    WAR file name: WAR\_File\_Name, EAR file display name: EAR\_File\_Display\_Name.
    
    ```


In the log entry, the variables `Object\_ID, Portlet\_Name, War\_File\_Name, EAR\_File\_Dislay\_Name, admin\_user\_ID` are substituted with the corresponding values for the affected portlet and the administrative user.

Example: If Portlet load monitoring blocks a portlet with the portlet name **StdWorldClock** because the portlet exceeded the maximum number of requests that are allowed, then the log file entry might look like this:

```
EJPPG3001W: Portlet load monitoring disabled the portlet with 
   ObjectID: [ObjectIDImpl '3_MLSU3F540O0360ISG212TT2003', 
             PORTLET_DEFINITION, VP: 0, 
             [Domain: rel], DB: 0000-B6723F5E2100836180E45004D1BB0060], 
   portlet name: StdWorldClock, 
   WAR file name: StdWorldClock.war, 
   EAR file display name: PA_StandardWorldClock 
because portlet exceeded its maximum number of requests.
```


