# Configuring your own delayed deletion schedule by using the XML configuration interface

You can use the HCL Digital Experience XML configuration interface to configure the delayed deletion schedule according to your requirements. You can define a daily, weekly, or monthly schedule. You can also use the XML configuration interface to run individual cleanup tasks at arbitrary intervals.

1.  Edit the following sample XML configuration file:

    -   AIX®: PortalServer_root/PortalServer/doc/xml-samples/Task.xml
    -   HP-UX: PortalServer_root/PortalServer/doc/xml-samples/Task.xml
    -   IBM® i: PortalServer_root/PortalServer/doc/xml-samples/Task.xml
    -   Linux™: PortalServer_root/PortalServer/doc/xml-samples/Task.xml
    -   Solaris: PortalServer_root/PortalServer/doc/xml-samples/Task.xml
    -   Windows™: PortalServer_root\\PortalServer\\doc\\xml-samples\\Task.xml
    -   z/OS®:PortalServer_root/PortalServer/doc/xml-samples/Task.xml
2.  Uncomment and edit the entry that corresponds to the scheduled time that you want to set.

    !!!note
        By default, the Task.xml file is set to run the scheduler immediately one time.

3.  Save your changes.

4.  Import the modified Task.xml file by using the XML configuration interface \(XMLAccess\).


!!!note "Notes"
    1.  For your customized schedule to be observed by the portal, you must enable the scheduler.cleanup.enabled property by setting it to true in the WP Data Store Service. You do so in the resource environment providers in the WebSphere® Integrated Solutions Console. For more information, read *Configuring immediate or delayed deletion of portal pages*. For more information about portal configuration properties and how to set them, read *Setting service configuration properties* and *Portal service configuration*.<br>
    2.  If you delete a page with an object ID and then re-create it with XML configuration interface, you might receive an error message. The message indicates that the operation was canceled because it would cause a duplicate key value.<br>
    3.  When you run the cleanup task, the XML configuration interface schedules only the task to be run in WebSphere Application Server and returns. It does not mean that WebSphere Application Server runs the task immediately. To determine when a task started and ended, check the SystemOut.log log file for the messages EJPDE0005I and EJPDE0006I. These messages confirm that the cleanup task successfully completed. After you confirm, you can run the XML script for re-creating a page with the same object ID as it had before the deletion.


**Related information**  
[Setting service configuration properties](../../config_portal_behavior/service_config_properties/index.md)
[Portal service configuration](../../config_portal_behavior/service_config_properties/portal_svc_cfg/index.md)

