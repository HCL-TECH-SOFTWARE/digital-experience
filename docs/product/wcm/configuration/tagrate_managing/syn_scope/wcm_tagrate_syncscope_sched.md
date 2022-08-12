# Scheduling scope synchronization

You can schedule scope synchronization to be run at specific times by defining the schedule with the XML configuration interface.

1.  Verify whether any scheduled synchronizations are defined for the portal.

    1.  Create an export file that you can use with the xmlaccess command.

        Here is an example of a request you can use to query the current configuration:

        ```
        <?xml version="1.0" encoding="UTF-8"?> 
        <request type="export" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd" > 
          <portal action="locate"> 
            <task action="export" name="com.ibm.portal.cp.SynchronizationTask"/> 
          </portal> 
        </request>
        ```

    2.  Run the xmlaccess command, specifying the export file.

        The resulting output file contains any scheduled synchronization times that are defined in the portal.

2.  Set the synchronization schedule.

    1.  To set a time for a scheduled synchronization, create an XML request document.

        For example, to schedule a synchronization to occur at 15:36 hours every day, you would use a request like this:

        ```
        <?xml version="1.0" encoding="UTF-8"?> 
        <request type="update" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd"> 
          <portal action="locate"> 
            <task action="create" name="com.ibm.portal.cp.SynchronizationTask"> 
              <startTime>15:36</startTime> 
            </task> 
          </portal> 
        </request>
        ```

        For each scheduled synchronization, create a separate `task` element and specify the time with a `startTime` element.

    2.  Run the xmlaccess command, specifying the file that contains the scheduling request.

        Scope information for the web content system is then synchronized automatically according to the schedule you defined.

3.  If you want to set a minimum time before subsequent synchronizations are run, specify the `tagging.syndication.minimumTagSynchronizationTimeInterval` property in the Web Content Manager configuration service.

    1.  Log in to the WebSphere® Integrated Solutions Console \(`http://hostname.example.com:10027/ibm/console`\).

    2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

    3.  Click **WP ConfigService**.

    4.  Under **Additional Properties**, click **Custom Properties**.

    5.  Click **New**, and enter the property name `tagging.syndication.minimumTagSynchronizationTimeInterval`.

    6.  Set the string value to the number of seconds between synchronizations.

    7.  Click **OK**, and save the changes to the master configuration.

    8.  Restart the portal.


**Parent topic:**[Synchronizing scopes for web content](../wcm/wcm_tagrate_syncscope.md)

**Related information**  


[Setting service configuration properties](../admin-system/adsetcfg.md)

[Working with the XML configuration interface](../admin-system/adxmltsk.md)

[XML configuration reference](../admin-system/adxmlref.md)

