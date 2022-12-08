# Configuring Security Access Manager for authorization

You can configure IBM Security Access Manager for both authentication and authorization for HCL Digital Experience. If you configure these functions at different times as independent tasks, configure Security Access Manager for authentication first. Using Security Access Manager only for authorization is not supported.


Complete the steps in [Configuring Security Access Manager for authentication only](../../../manage/security/people/authentication/external_sec_mgmt/security_access_manager/cfg_sec_access_mgr/cfg_tam_auth)  before you configure Security Access Manager for authorization.

You can configure HCL Portal to delegate the decisions about what users or groups are granted access to Portal resources, to IBM® Security Access Manager. This action is also called externalizing the access control for Portal resources. Normally these decisions are made by consulting the principal-to-role mappings that are stored in the Portal database. The following task configures the Portal code that is used to obtain access control decisions for Portal resources from Security Access Manager instead of from the Portal database. It includes configuration of properties that determine how the Portal resources are represented in the Security Access Manager protected object namespace. It also configures how permissions are represented in the Security Access Manager access control lists. After this task is run, you can use the Resource Permissions portlet or XMLAccess to place portal resources such as pages and portlets under Security Access Manager control.

!!!important
    There are more considerations when you set up security to use an external security manager in a cluster environment and across mixed nodes. For instance, complete any configuration for an external security manager after you completed all other configuration tasks, including ensuring that the cluster is functional.

**Implementation details of externalized access control:**

When Portal resources are moved to Security Access Manager access control, HCL Portal creates entries corresponding to individual roles on the externalized resources in the Security Access Manager protected object space. The roles in this case are the Portal roles on Portal resources; for example, in simplified form, User@Welcome page or Administrator@Some Portlet.

Access Control Lists (ACLs) are attached to these Security Access Manager objects. The ACLs use the PDAction and PDActionGroup property values to determine what users are granted the various roles. HCL Portal security code queries Security Access Manager for the users that have the <PDAction\> within <PDActionGroup\> permission on entries in the Security Access Manager object space, and interprets that as granting the user the corresponding Portal role on the resource.

Any subset of Portal resources can be placed under external access control. HCL Portal can maintain internal control of other resources.

There are multiple entries in the Security Access Manager object space for every externalized resource, one entry per existing Portal role on that resource. Recall that in HCL Portal there are multiple different role types; for example, User, Privileged User, Editor, Manager, Administrator. Not every Portal role might be instantiated for every resource instance, and entries in Security Access Manager exist only if the corresponding actual role on that Portal resource exists.

**Format of the entries in Security Access Manager:**

By default, the entries in the Security Access Manager object space have the following format:

```
<PDRoot_Value>/<Portal Rolename-on-resource>[/<EACappname_value>/<EACserverName_value>/<EACcellName_value>]
```

By default, the `Portal Rolename-on-resource` is in the form of `<Portal_RoleType>@<Portal_Resource_Identifier>`. For example: `Administrator@VIRTUAL_EXTERNAL_ACCESS_CONTROL`.

The Security Access Manager object space entries might be different from the default, depending on the following properties:

-   If the reorderRoles property is set to `true`, the `Portal Rolename-on-resource` displays as `Portal_Resource_Identifier@Portal_Roletype`. For example, `VIRTUAL_EXTERNAL_ACCESS_CONTROL@Administrator`.
-   Set all three of the `EACserverName`, `EACcellName`, and `EACappname` properties; otherwise, they are not included in the object space entries.

[]()

1.  **Clustered environments:** Complete this step on all nodes.


    Run the following task in the [wp\_profile\_root](../../../manage/wpsdirstr#wp_profile_root)/ConfigEngine directory to validate that the PdPerm.properties file is correct and that communication between HCL Portal and the Security Access Manager server works:


    !!!tip
        Run the validate-pdadmin-connection task on the HCL Portal node or on each node in a clustered environment. In a clustered environment, WasPassword is the Deployment Manager administrator password. The wp.ac.impl.PDAdminPwd is the Security Access Manager administrative user password.

    <table>
    <tr>
    <td> **Operating system** </td><td> **Task** </td>
    </tr>
    <tr>
    <td> AIX® </td>
    <td>

    ```
    ./ConfigEngine.sh validate-pdadmin-connection -DWasPassword=password 
                                                  -Dwp.ac.impl.PDAdminPwd=password
    ```

    </td>
    </tr>
    <tr>
    <td> HP-UX </td>
    <td>

    ```
    ./ConfigEngine.sh validate-pdadmin-connection -DWasPassword=password 
                                                  -Dwp.ac.impl.PDAdminPwd=password
    ```

    </td>
    </tr>
    <tr>
    <td> IBM i </td>
    <td>

    ```
    ConfigEngine.sh validate-pdadmin-connection -DWasPassword=password 
                                                -Dwp.ac.impl.PDdAdminPwd=password
    ```

    </td>
    </tr>
    <tr>
    <td> Linux™ </td>
    <td>

    ```
    ./ConfigEngine.sh validate-pdadmin-connection -DWasPassword=password 
                                                  -Dwp.ac.impl.PDAdminPwd=password
    ```

    </td>
    </tr>
    <tr>
    <td> Solaris </td>
    <td>

    ```
    ./ConfigEngine.sh validate-pdadmin-connection -DWasPassword=password 
                                                  -Dwp.ac.impl.PDAdminPwd=password
    ```

    </td>
    </tr>
    <tr>
    <td> Windows™ </td>
    <td>

    ```
    ConfigEngine.bat validate-pdadmin-connection -DWasPassword=password 
                                                 -Dwp.ac.impl.PDAdminPwd=password
    ```

    </td>
    </tr>
     <tr>
    <td> z/OS® </td>
    <td>

    ```
    ./ConfigEngine.sh validate-pdadmin-connection -DWasPassword=password 
                                                  -Dwp.ac.impl.PDAdminPwd=password
    ```

    </td>
    </tr>
    </table>

    **If the task does not run successfully:** Run the run-svrssl-config task to create the properties file. For information, refer to *Creating the PdPerm.properties file*. Then, run the validate-pdadmin-connection task again. If the task is not successful after a second attempt, do not proceed with any subsequent steps. The fact that the task does not run successfully indicates that your portal cannot connect to the Security Access Manager server. Troubleshoot the connectivity issue between your portal instance and the Security Access Manager server.

2.  Update the Namespace management parameters in the wkplc\_comp.properties file

    1.  For wp.ac.impl.EACserverName, type the Namespace context information to further distinguish externalized portal role names from other role names in the namespace.

        !!!note
            If set, wp.ac.impl.EACcellName and wp.ac.impl.EACappname must also be set. All three parameters must be set or none of them.

    2.  For wp.ac.impl.EACcellName, type the Namespace context information to further distinguish externalized portal role names from other role names in the namespace.

        !!!note
            If set, wp.ac.impl.EACserverName and wp.ac.impl.EACappname must also be set.

    3.  For wp.ac.impl.EACappname, type the Namespace context information to further distinguish externalized portal role names from other role names in the namespace.

        !!!note
            If set, wp.ac.impl.EACcellName and wp.ac.impl.EACserverName must also be set.

    4.  For wp.ac.impl.reorderRoles, type false to keep the role order or true to reorder the roles by resource type first.

3.  Update the following parameters in the wkplc\_comp.properties file; go to the Portal authorization parameters heading:

    1.  For wp.ac.impl.PDRoot, type the root object space name in the Security Access Manager namespace for the resource entries for this portal. All Portal roles are installed with this entry. For multiple profiles and portal instances that all share a common Security Access Manager instance, choose a unique name for each root object space entry. This unique name helps to easily distinguish the resources for different instances. Or use a common PDRoot value for all Portal instances so that all Portal roles from any instance have a common parent. You can then use the EACappname parameter to distinguish between instances. If it better suits your administration models, you can also mix these two approaches, by using a common PDRoot value for some instances, and unique PDRoot values for others.

    2.  For wp.ac.impl.PDAction, type the Custom Action created by the Security Access Manager external authorization plug-in. The combination of the action group and the action determines the Security Access Manager permission string. The permission string is used to assign membership to externalized portal roles. You might want to check with your Security Access Manager administrator to determine what they want the PDActionGroup and PDAction values to be.

        !!!note
            After you create ACLs in Security Access Manager by using a PDAction and PDActionRoot value, these values must remain constant. Changing these values after you create ACLs that use the original settings, results in losing permissions.

    3.  For wp.ac.impl.PDActionGroup, type the Custom Action group that is created by the Security Access Manager external authorization plug-in. The combination of the action group and the action determines the Security Access Manager permission string. The permission string is used to assign membership to externalized portal roles.

        !!!note
            After you create ACLs in Security Access Manager by using a PDAction and PDActionRoot value, these values must remain constant. Changing these values after you create ACLs that use the original settings, results in losing permissions.

    4.  For wp.ac.impl.PDCreateAcl, set the value to true to automatically create and attach a Security Access Manager ACL when HCL Portal externalizes the roles for a resource. Set the value to false to not create and attach a Security Access Manager ACL when HCL Portal externalizes the roles for a resource. In this case, the Security Access Manager Administrator must manually create and attach ACLs to the object space entries for the externalized portal resources and roles. Any ACLs created manually in this way, must use the PDAction and PDActionGroup values in order for the permissions to be found.

4.  Save your changes to the properties file.

5.  Run the following task to enable Security Access Manager authorization:

    |Operating system|Task|
    |----------------|----|
    |AIX|./ConfigEngine.sh enable-tam-authorization -DWasPassword=password|
    |HP-UX|./ConfigEngine.sh enable-tam-authorization -DWasPassword=password|
    |IBM i|ConfigEngine.sh enable-tam-authorization -DWasPassword=password|
    |Linux|./ConfigEngine.sh enable-tam-authorization -DWasPassword=password|
    |Solaris|./ConfigEngine.sh enable-tam-authorization -DWasPassword=password|
    |Windows|ConfigEngine.bat enable-tam-authorization -DWasPassword=password|
    |z/OS|./ConfigEngine.sh enable-tam-authorization -DWasPassword=password|

    **Clustered note:** In a clustered environment, complete this step on all nodes. The WasPassword value is the Deployment Manager administrative password.

    **If the task does not run successfully:** Ensure the values in the wkplc\_comp.properties file are valid.

6.  Stop and restart the appropriate servers to propagate the changes. For specific instructions, see [Starting and stopping servers, deployment managers, and node agents](../../../manage/stopstart).


After you complete the authorization procedure, you can then use the HCL Portal administration tools (the Resource Permission portlet or XMLAccess scripting) to externalize the access control decisions for Portal resources. For any resources placed under IBM Security Manager access control, the Security Access Manager protected object space contains entries for roles in the following format


[PortalServer\_root](../../../manage/wpsdirstr#wp_profile_root)/role\_name/application\_name/server\_name/cell\_name


For example: If the wp.ac.impl.PDRoot value was Portal\_Instance\_1 and wp.ac.impl.EACcellName was Cell\_A, Wp.ac.impl.EACserverName was Server\_B, and wp.ac.impl.EACappName was Application\_C, then an object space entry corresponding to a Portal role name approximately looks like

Portal\_Instance\_1/Administrator@VIRTUAL\_EXTERNAL\_ACCESS\_CONTROL/Application\_C/Server\_B/Cell\_A.

Where the Portal role name Administrator@VIRTUAL\_EXTERNAL\_ACCESS\_CONTROL is simplified from its actual appearance, which might include a generated UUID value or custom unique name.

!!!note
    The `EACappname`, `EACserverName`, and `EACcellName` must all be specified, or none of them appears in the Security Access Manager object space entries.


[Creating the PdPerm.properties file](../../../manage/security/people/authentication/external_sec_mgmt/security_access_manager/cfg_sec_access_mgr/un_svrssl_config)
