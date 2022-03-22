# Enable federated security

You can use the Configuration Wizard to configure HCL Portal to use a federated LDAP for security. Use the following information to get familiar with the information you must provide in the wizard and the configuration procedure that it generates.

## Configuration Wizard

The primary Configuration Wizard options are based on your target configuration topology, such as a stand-alone server or a cluster. The federated security option is included with both **Set Up a Stand-alone Server** and **Set Up a Cluster**. For the stand-alone server topology, run the federated security option after database transfer. For the cluster topology, run the federated security option after you create the cluster, but before you add more nodes.

## Validation

For this configuration option, the wizard can connect to your LDAP directory and validate the information that you enter in the wizard. By default, validation is enabled. On the Security Settings panel, you can choose to turn validation on or off by selecting **Yes** or **No** to the **Validate LDAP user registry entries** option. Select **No** if you know that your parameters are correct and that your LDAP server is unavailable at the time of creating your instructions.

Two types of validation are performed when you select to validate settings including field syntax and LDAP connection validations. The syntax validation, for example, checks that you entered a valid port number in the range of 1 - 65535. The connection validation, for example, checks that a connection can be made to your LDAP server.

Enabling validation is recommended because it can prevent a possible failure by validating your entries in the wizard before you run the configuration. The LDAP settings including the **Repository ID**, **Host name**, **Port**, **Bind DN**, **Bind password**, **Base DN**, **Administrator group DN**, **Administrator DN**, and **Administrator password** are all validated before the wizard creates your instructions to run the configuration. Review the following worksheet section to see which fields are required based on your selections in the wizard.

# Worksheet

When you set up the federated security, you answer questions about your wanted configuration. Some fields apply to all federated security configurations. Some fields are required based on your environment. The remaining fields are advanced and do not apply to most configurations.

## Minimal required fields

The following table lists the fields that are unique to the LDAP configuration. You might be prompted for additional information about system or user IDs and passwords that you defined during the portal installation process.

**Attention:** The Enable Federated Security option modifies the wimconfig.xml file. Make a backup copy of this file before you run any of the configuration tasks.

```
[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/config/cells/CellName/wim/config/wimconfig.xml
```

|Field Label|Property|Your Value|
|-----------|--------|----------|
|**LDAP Repository ID**|federated.ldap.id| |
|**LDAP host name**|federated.ldap.host| |
|**LDAP port**|federated.ldap.port| |
|**Bind DN****Restriction:** The following parameters must be unique to your environment:

-   PortalAdminId: this parameter is the user ID that you enter in the **Administrator user ID** field during the installation
-   Bind DN
-   Administrator DN from LDAP

|federated.ldap.bindDN| |
|**Bind password**|federated.ldap.bindPassword| |

|Field Label|Property|Your Value|
|-----------|--------|----------|
|**Base DN****Note:** This field is optional. However, it is recommended that you enter a Base DN that matches your LDAP settings. If you are using a Domino LDAP, and you do not have a Base DN defined, then you can leave this field blank.

|federated.ldap.baseDN| |

## Use an administrator from your LDAP

If you select to use an administrator from your LDAP server, then you must provide additional information about the LDAP group and ID.

|Field Label|Property|Your Value|
|-----------|--------|----------|
|**Administrator group DN from LDAP**|newAdminGroupId| |
|**Administrator DN from LDAP****Restriction:** The following parameters must be unique to your environment:

-   PortalAdminId: this parameter is the user ID that you enter in the **Administrator user ID** field during the installation
-   Bind DN
-   Administrator DN from LDAP

|newAdminId| |
|**Administrator password from LDAP**|newAdminPw| |
|**Default parent for group**|groupParent| |
|**Default parent for PersonAccount**|personAccountParent| |

## Advanced fields

Click **Advanced** on the Customize Values page to see the advanced properties. Default values are provided for advanced fields that are required.

|Field Label|Property|Your Value|
|-----------|--------|----------|
|**LDAP group objectclasses**|federated.ldap.et.group.objectClass| |
|**LDAP group objectclasses for creating groups**|federated.ldap.et.group.objectClassForCreate| |
|**LDAP group search bases**|federated.ldap.et.group.searchBases| |
|**LDAP PersonAccount objectclasses**|federated.ldap.et.personaccount.objectClasses| |
|**LDAP PersonAccount objectclasses for creating users**|federated.ldap.et.personaccount.objectClassesForCreate| |
|**LDAP search bases for the PersonAccount**|federated.ldap.gm.personaccount.searchBases| |
|**Group dummy member**|federated.ldap.gm.dummyMember| |
|**Group member attribute**|federated.ldap.gm.groupMemberName| |
|**Group object class**|federated.ldap.gm.objectClas| |
|**GM member attribute scope**|federated.ldap.gm.scope| |
|**Membership attribute name**|federated.ldap.gc.name| |
|**GC member attribute scope**|federated.ldap.gc.scope| |
|**Certificate filter**|federated.ldap.certificateFilter| |
|**Certificate map mode**|federated.ldap.certificatMapMode| |
|**Group RDN attribute**|groupRdnProperties| |
|**PersonAccount RDN attribute**|personAccoutnRdnProperties| |
|**Application server SSL configuration**|federated.ldap.sslConfiguration| |

## Nested or dynamic group support

If you need nested group support, then the wizard provides default values for some of the advanced fields. The default values are based on your LDAP server selection. You must click **Advanced** to see the fields if you want to verify the defaults. Nested or dynamic group support fields include **Group member attribute**, **Membership attribute name**, **LDAP group objectclasses**, and **GC member attribute scope**.

# Enabling federated security

After you answer questions and provide information about your LDAP, the wizard generates a custom configuration procedure.

Depending on your environment, the wizard generates a configuration process. The following steps reflect all possible steps in the configuration process. The steps do not represent a literal configuration. The steps are provided as a reference.

If you click **View Step Command**, you can see the task and properties that are associated with each step in the wizard.

1.  Manual Step: Retrieve the SSL certificate from the SSL port.

    -   **Condition**

        Select to configure SSL enabled LDAP.

    -   **ConfigEngine task**

        None

    **Note:** The following steps are required for environments that leverage Java 1.8, such as HCL Portal Version 9.0 environments. The following steps assume a clustered environment with a Deployment Manager, however, also perform in a stand-alone environment.

    1.  On the Deployment Manager, go to the /AppServer/java/8.0/bin directory.

    2.  2.  Create a backup of the HCL Portal profile before modifying cell security.

    **Note:** The backup is created in /opt/IBM/WebSphere/AppServer/profiles/cw\_profile/.

    -   **Condition**

        None

    -   **ConfigEngine task**

        None

3.  Validate your LDAP server settings.

    -   **Condition**

        None

    -   **ConfigEngine task**

        validate-federated-ldap

4.  Add an LDAP user registry to the default federated repository.

    -   **Condition**

        None

    -   **ConfigEngine task**

        wp-create-ldap

        recycle-dmgr-if-cluster

5.  Register the WebSphere Application Server scheduler tasks.

    -   **Condition**

        None

    -   **ConfigEngine task**

        stop-portal-server

        start-portal-server

        reregister-scheduler-tasks

6.  Replace the file-based HCL Portal and WebSphere Application Server users and groups with users and groups from your LDAP server.

    -   **Condition**

        Select to use an administrator and administrator group that is stored in your LDAP.

    -   **ConfigEngine task**

        wp-change-portal-admin-user

        wp-change-was-admin-user

7.  Update the user registry where new users and groups are stored.

    -   **Condition**

        None

    -   **ConfigEngine task**

        wp-set-entitytypes

8.  Recycle the servers after a security change.

    -   **Condition**

        None

    -   **ConfigEngine task**

        recyle-servers-after-security-change

9.  Update the search administration user.

    -   **Condition**

        Select to use an administrator and administrator group that is stored in your LDAP.

    -   **ConfigEngine task**

        start-portal-server

        action-fixup-after-security-change-portal-wp.search.webscanner

10. After you change the security model, the servers need to be restarted. Restart the portal server.

    -   **Condition**

        None

    -   **ConfigEngine task**

        recycle-servers-after-security-change

        start-portal-server

11. Verify that all defined attributes are available in the configured LDAP user registry.

    -   **Condition**

        None

    -   **ConfigEngine task**

        wp-validate-federated-ldap-attribute-config

12. Manual Step: Update the appropriate MemberFixerModule.properties file with the values for your LDAP users.

    -   **Condition**

        Select to use an administrator and administrator group that is stored in your LDAP.

    -   **ConfigEngine task**

        None

13. Run the member fixer tool.

    -   **Condition**

        Select to use an administrator and administrator group that is stored in your LDAP.

    -   **ConfigEngine task**

        run-wcm-admin-task-member-fixer

14. Restart the HCL Portal Server.

    -   **Condition**

        None

    -   **ConfigEngine task**

        stop-portal-server

        start-portal-server

15. Manual Step: Map attributes to ensure proper communication between HCL Portal and the LDAP server.

    -   **Condition**

        None

    -   **ConfigEngine task**

        None


