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

!!! note
    -   As this example does not explicitly define a schedule, the task is performed immediately.
    -   You can also select and specify the HCL Connections features for which you want the cleanup to be run. For details about selecting features see the topic about Importing federated tags and resources.


???+ info "Related information"
    - [Working with the XML configuration interface](../../../../deployment/manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/index.md)

