# Cleaning up federated tags and resources

When federated tags are no longer integrated in HCL Portal, you invoke the task com.ibm.wps.cp.tagging.federation.taskhandler.FederationDeletionTaskHandler to remove unnecessary data.

The following example XML script triggerDeleteTask.xml shows how you schedule the task to cleanup federated tags:

```
<?xml version="1.0" encoding="UTF-8"?>
    <request type="update" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"     
             xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd">
        <portal action="locate"> 
        <task action="create" 
              name="com.ibm.wps.cp.tagging.federation.taskhandler.FederationDeletionTaskHandler"/> 
</portal></request>

```

**Notes:**

-   As this example does not explicitly define a schedule, the task is performed immediately.
-   You can also select and specify the HCL Connections features for which you want the cleanup to be run. For details about selecting features see the topic about Importing federated tags and resources.

**Parent topic:**[Administering tag federation](../admin-system/tag_fed_admin.md)

**Related information**  


[Working with the XML configuration interface](../admin-system/adxmltsk.md)

