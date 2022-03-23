# Importing federated tags and resources 

When tags from remote systems, such as HCL Connections are integrated into HCL Portal, you need to schedule a task to retrieve the tags and related data from the remote system.

To retrieve tags and related resource for federation, schedule a task named `com.ibm.wps.cp.tagging.federation.taskhandler.FederationTaskHandler` HCL Portal by using the XML configuration interface \(XMLAccess\). In the following example, the XML task triggerTask.xml is scheduled to run the task `com.ibm.wps.cp.tagging.federation.taskhandler.FederationTaskHandler` once a day:

```
<?xml version="1.0" encoding="UTF-8"?>
   <request type="update" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd">  
      <portal action="locate">    
         <task action="create" name="com.ibm.wps.cp.tagging.federation.taskhandler.FederationTaskHandler">   
            <startTime>22:00</startTime>   
         </task> 
      </portal>
   </request>

```

This tasks handles all HCL Connections features.

You can also select and specify which HCL Connections features you want a task to handle. For example, you can have data for HCL Connections wikis and blogs collected on a different schedule than HCL Connections files. Refer to the following example:

```
<?xml version="1.0" encoding="UTF-8"?>
<request type="update" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
          xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd"> 
     <portal action="locate">
          <task action="create" name="com.ibm.wps.cp.tagging.federation.taskhandler.FederationTaskHandler">
              <startTime>12:00</startTime>  
              <parameter>wikis</parameter>
              <parameter>blogs</parameter>
        </task>
        <task action="create" name="com.ibm.wps.cp.tagging.federation.taskhandler.FederationTaskHandler">
              <startTime>07:00</startTime> 
          <parameter>files</parameter>
        </task>
      </portal>
</request>
```

**Notes:**

-   The `<parameter>` element contains the ID of the HCL Connections feature. These IDs are listed on the page Federating Tags.
-   Carefully consider which features you want to integrate into portal. With each HCL Connections feature, there is potential for coupling large amounts of data.

To retrieve changes in the HCL Connections tag cloud, you need to run the FederationTaskHandler script.

**Parent topic:**[Administering tag federation ](../admin-system/tag_fed_admin.md)

**Related information**  


[Working with the XML configuration interface](../admin-system/adxmltsk.md)

