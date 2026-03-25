# How to identify missing DX resource roles

## Applies to

> HCL Digital Experience 9.5 and higher

## Introduction

If a user cannot view a specific page or content item, they might lack the required access roles. This article describes how to identify which Portal or Web Content Manager (WCM) resource is missing role assignments for a user or their groups.

## Instructions

Refer to the following steps to identify missing resource permissions.

### Collecting traces

1. Back up and delete all existing `trace.log` files on the server. These files are typically located in the `<wp_profile_root>/logs/WebSphere_Portal` directory.

2. Reduce server activity to a minimum.

3. Log in to HCL DX as an administrator.

4. Navigate to **Administration > Tracing**.

5. Under **Append these trace settings:**, enter the following string, and then select the **Add** plus icon:

    ```text
    com.ibm.wps.ac.impl.AccessControlFederator=all
    ```  

6. Perform the steps to recreate the issue, stopping immediately prior to the final action.

7. Clear the contents of the `trace.log` file using the following command:

    ```shell
    > trace.log
    ```

    !!!note
        - Do not delete the `trace.log` file. Otherwise, a Portal JVM restart is required.
        - For Windows, use a text editor such as Notepad++ to clear the contents of the `trace.log` file while the server is running.

8. Perform the final action to recreate the issue.

9. Immediately copy the `trace.log` file to a new location or file name using the following command:

    ```shell
    cp trace.log recreate.log
    ```

10. Return to **Tracing**, locate the trace string you entered in Step 5, and select the **Remove** trash icon.

### Reviewing traces

1. Use the following command to search the `trace.log` file for the `hasPermission` string and find entries that returned `false`:

    `grep -i hasPermission recreate.log |grep -i false`  

2. Review the lines immediately preceding the `false` entry to determine which role was checked on which resource. For example (`RETURN RESULT: false`):  

    ```bash
    0000013c AccessControl > com.ibm.wps.ac.impl.AccessControlFederator checkShortCutPermission ENTRY ACPrincipalPumaImpl: Name: UID=JohnDoe,OU=PEOPLE,DC=MYCOMPANY,DC=COM, OID:[ExtIDImpl 'Z9eAeLAI8KU46L1CI3SK6P1BUKAL7GAHU48H952BUKAL7F2H65MS9LAFA4CHA5IKSK0H9C1H6KUSA1QGGK7PA9AGO22D8TPGUK61', USER, UID=1509859,OU=PEOPLE,OU=EXTERNAL,DC=MYCOMPANY,DC=COM, [Domain: rel]] (PermissionCollection)[[ObjectIDImpl 'Z6_00000000000000A0BR2B300GN4', CONTENT_NODE, VP: 0, [Domain: rel], DB: 0000-000000000000000080026B8B35008097]:ModifyNode1:(ActionSet)Edit, (0) (/ActionSet)](/PermissionCollection) ........(deleted 4 lines)  
    ...  
    0000013c AccessControl < com.ibm.wps.ac.impl.AccessControlFederator hasPermission RETURN RESULT: false for ACPrincipalPumaImpl: Name: UID=JohnDoe,OU=PEOPLE,DC=MYCOMPANY,DC=COM, OID:[ExtIDImpl  
    ...  
    ```

3. Verify that the entries are on the same thread (in this example, `0000013c`).

    - The first entry indicates that the portal is checking if the user has the Edit role (for example, `(ActionSet)Edit` on resource with ObjectID `Z6_00000000000000A0BR2B300GN4`).  
    - The second entry shows the result of that check returned from Portal Access Control (PAC).  

!!!note
    You may see `hasPermission` returning `false` for a UUID (for example, `d837d02c-85f9-4cfb-b21e-9c713aae2e71`) instead of a ObjectID. In that case, use the WCM Support Tools Portlet to look up the UUID instead of generating a full XML Access export.

### Exporting the portal content using XML Access

To export the portal content associated with the ObjectID `Z6_00000000000000A0BR2B300GN4`, generate an XML Access export using the following steps:

1. Generate an XML Access export file (`result.xml`) by following the instructions in [Generating a complete XML Access export of a Portal configuration](../../../deployment/manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/gen_xmlaccessexpt_ptlconfig.md){target="_blank"}.  

2. In the `result.xml` file, locate the resource with the missing role (`Z6_00000000000000A0BR2B300GN4`)

    When you locate the ObjectID in the export, it appears within an XML element that identifies the resource type. For example, a portal page is represented as a `<content-node>`:

    ```xml
    <content-node action="update" active="true" content-parentref="Z6_000000000000000000000000A0" domain="rel" objectid="Z6_00000000000000A0BR2B300GN4" ordinal="100" themeref="undefined" type="label" uniquename="ibm.portal.Home">
    ```

By combining the trace results with the identified item from the XML Access export, you can determine that the user `JohnDoe` is missing the Edit role on the `ibm.portal.Home` page (ObjectID `Z6_00000000000000A0BR2B300GN4`).

Most role names are self-explanatory. For example, a `traverse/view` error means you must assign the User role, and a `personalize` error means you must assign the Privileged User role.

### JCR issues

If you cannot identify the resource using the previous process, the issue might be at the JCR layer. Use the following steps to troubleshoot JCR permissions:

1. Repeat the [trace collection process](#collecting-traces), but use the following trace string instead:

    ```plaintext
    com.ibm.icm.jcr.service.access.WPSAccessManagerImpl=all
    ```  

2. Use grep to search the trace.log file for the isGranted or Permissions strings. For example:

    ```bash
    grep -i "isGranted\|Permissions" trace.log
    ```

If you need to verify whether the Markup Editor role is assigned to a static page where a user is attempting to change the layout, refer to [Access permissions](../../../deployment/manage/security/people/authorization/controlling_access/resources_roles/sec_acc_rights.md){target="_blank"}.

- The action **Modifying page properties includes Set page layout properties of a static page** requires the Markup Editor role.
- In the role hierarchy, the Markup Editor role stands on its own, except in relation to the Administrator role. For more information, refer to [Resource Roles](../../../deployment/manage/security/people/authorization/controlling_access/resources_roles/sec_roles.md){target="_blank"}.

This requirement correlates with the following trace entry, where `AccessControlFederator` shows `hasPermission` returning `false`:

```trace-entry
[8/1/23 22:46:30:047 CST] 000001eb AccessControl < com.ibm.wps.ac.impl.AccessControlFederator hasPermission RETURN RESULT: false for ACPrincipalPumaImpl: Name: CN=A7K2ZZZCN,OU=CN,OU=User,DC=CN,DC=MMM,DC=COM, OID:[ExtIDImpl 'Z9eAeP9P8JQ07N1CGJHH6PHP0JHH61BE66OCCH1ECJP0663EC3SKCGHP0', USER, 9e458708c49f0c4a9c0c18630f868e0f, [Domain: rel]] in project [ExtIDImpl 'Z6QSeDeP9O0JP4C2BDEJMCCO1PCMMG6HHPIJM4CNHOCMMG61JP2MH57H9OCMSGCO1', PROJECT, 9a03ab57-c8df-41f9-a7bf-4afac91af9d8, [Domain: jcr]] on (PermissionCollection)[[ObjectIDImpl 'Z6_M94G0O412P7A506IA529QPSU54', CONTENT_NODE, VP: 0, [Domain: rel], DB: 0000-3611083009221F558091AA88A433F785]:NA:(ActionSet)Edit,Edit_Markup, (0) (/ActionSet)](/PermissionCollection)  
```
