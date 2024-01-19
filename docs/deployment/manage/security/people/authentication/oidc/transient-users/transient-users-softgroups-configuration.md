# Configuring Rule-based user groups adapter for Transient Users

## Overview

The [Rule-based user groups](https://opensource.hcltechsw.com/digital-experience/latest/deployment/manage/security/people/authorization/users_and_groups/rule_based_user_groups/) (Softgroups) for HCL Portal allow you to define dynamic portal user groups. For more information, see [capabilities](https://opensource.hcltechsw.com/digital-experience/latest/deployment/manage/security/people/authorization/users_and_groups/rule_based_user_groups/#what-you-can-do-with-rule-based-user-groups).

The rule-based user group is implemented as a custom repository adapter for Virtual Member Manager (VMM). A unique group name represents rule-based user groups, the Lightweight Directory Access Protocol (LDAP) search filter rule expression, and an optional description. The HCL DX handles them as normal portal user groups. They are in a special base distinguished name in the user realm hierarchy. 
Administrators can create, define, update, or delete them by using the VMM API in WebSphere® Application Server or the Portal User Management Architecture (PUMA) in HCL DX like other groups. You can use these Softgroups to assign security role mappings, portal access permissions, or visibility rules the same way as other portal user groups. The rule-based user groups feature handles the correct membership determination for the users during run time.

This configuration allows user roles and groups from an Identity Provider's (IdP) claim token, to be mapped with these Softgroups. To leverage this feature, you have to build a custom Java Authentication and Authorization Service (JAAS) Login Module. For more information on using `Softgroup service`, see [Building a custom JAAS login module for your Identity Provider (IdP)](transient-users-building-jaas-modules.md).

The Softgroups(rule-based user groups) configuration allows user roles and groups from an Identity provider to be mapped to softgroups in DX through the OIDC Claim Token, WAS/DB configuration, and custom JAAS Login Module code.

## Creating database

Create a database before Softgroups is used. The Softgroups feature stores the definitions of the rule-based user groups in a database table. This includes the name, rule, and description of the group. Use one of the following SQL statements to create the table, using a database and schema of your choice. Replace `schema_name` in the scripts with the schema name of your choice.

This configuration has been tested using the DB2 database. Although databases like SQL or Oracle are used instead of DB2. For more information on creating database, tables and schema, see [Database setup](https://opensource.hcltechsw.com/digital-experience/latest/deployment/manage/security/people/authorization/users_and_groups/rule_based_user_groups/cfg_rule_based_user_groups/rbug_db_setup/).

!!!note
    This configuration is not tested on SQL or Oracle. But should work in general.

Use the following commands to create the database, tables and schema:

```sh
CREATE DATABASE sgdb

CONNECT TO sgdb USER db2inst1 USING <YOUR_DB_PASSWORD>

CREATE SCHEMA softgrouptest AUTHORIZATION db2inst1;

CREATE TABLE softgrouptest.SOFTGROUPS (ID INT NOT NULL GENERATED ALWAYS AS IDENTITY, GROUPNAME VARCHAR(128) NOT NULL, RULE VARCHAR(300) NOT NULL, DESCRIPTION VARCHAR(512), LASTMODIFIED TIMESTAMP, PRIMARY KEY (ID), UNIQUE (GROUPNAME));

CREATE INDEX softgrouptest.SOFTGROUPSIX1 ON softgrouptest.SOFTGROUPS (LASTMODIFIED DESC);

COMMIT;
```

## Configuring a data source

When you create a data source, you associate it with a Java Database Connectivity (JDBC) provider that is configured to access a specific vendor database. The application server requires both objects for your applications to make calls to that particular database and receive data from it. The data source provides connection management capabilities that physically make possible these exchanges between your applications and the database.

1. Log in with the admin user into WebSphere Integrated Solutions Console (ISC).

2. Navigate to **Resources** > **JDBC** > **Data sources**:
    1. In the **Scope** dropdown select `Node=dockerNode, Server=WebSphere_Portal`.
    2. Click **New**.

3. Enter the basic data source information and click **Next**:

    | Field | Value |
    | --- | --- |
    | Data source name | sgdb |
    | JNDI name | jdbc/sgdb |

4. Select an existing JDBC provider and click **Next**:

    | Field | Value |
    | --- | --- |
    | Select an existing JDBC provider | wpdbJDBC_db2 |

5. Enter the database-specific properties for the data source and click **Next**:

    | Field | Value |
    | --- | --- |
    | Driver type | 4 |
    | Databse name | sgdb |
    | Server name | local-db2 |
    | Port number | 50000 |

6. Setup the security aliases and click **Next**:

    | Field | Value |
    | --- | --- |
    | Authentication alias for XA recovery | wpreldbDSJAASAuth |
    | Component-managed authentication alias | wpreldbDSJAASAuth |
    | Mapping-configuration alias | DefaultPrincipalMapping |
    | Container-managed authentication alias | (none) |

7. On the summary page review all the values and click **Finish**.

![OIDC_TRANSIENT_SOFTGROUPS_JDBC](../../../../../../../images/OIDC_TRANSIENT_SOFTGROUPS_JDBC.png)

## Updating custom properties for JAAS and Softgroups

1. In the WAS ISC navigate to **Global security** > **Java Authentication and Authorization Service** > **System logins** > **WEB_INBOUND**, and click on your module `com.hcl.dx.auth.jaas.impl.TransientUsersLoginModule`.

2. Add the following custom properties for the Softgroups Service instance that ia referenced in the JAAS module:

    | Name | Value |
    | --- | --- |
    | sgroup.dataSourceJNDIName | &lt;dataSourceJNDIName&gt; |
    | sgroup.dbSchema | &lt;dbSchema&gt; |
    | sgroup.dbType | &lt;dbType&gt; |

3. Add a new custom property for the custom Softgroups role/group key. This key is referenced in the JAAS module to select the appropriate set of values from the OIDC claim token and used in setting/retrieving the correct user group information:

    | Name | Value |
    | --- | --- |
    | sgroup.softgroupKey | &lt;IDP_SOFTGROUP_KEY&gt; |

    For example: "groups", "roles", etc.

4. In the WAS ISC navigate to  **Resources** > **Resource Environment** > **Resource Environment Providers** > **WP PumaStoreService** > **Custom properties**:
    1. Populate the fields:

        | Field | Value |
        | --- | --- |
        | Name | store.puma_default.filter.assertionFilter.classname |
        | Value | com.ibm.wps.um.AssertionFilter |

    2. Click **Apply** and then **Save**.

5. In the WAS ISC, navigate to **Servers** > **Server Types** > **WebSphere application servers** > **WebSphere_Portal** > **Java and process management** > **Process definition** > **Java Virtual Machine** and in **Classpath** add `/opt/HCL/PortalServer/base/wp.base/shared/app/wp.base.jar`.

6. Restart the DX server:

    ```sh
    cd /opt/HCL/AppServer/bin
    ./stopServer.sh WebSphere_Portal
    ./startServer.sh WebSphere_Portal
    ```

## Configuring the VMM rule-based groups repository

### Configuring the VMM repository and realm

Run the wp-create-cur, wp-create-cur-custom-property, and wp-update-group-repository-relationship commands to configure the VMM repository and realm:

1. Open a command prompt and change to wp_profile_root/ConfigEngine directory.
2. Run the following task to add the repository configuration to VMM:
    ```sh
    ./ConfigEngine.sh wp-create-cur -Dfederated.cur.id=SoftGroups -Dfederated.cur.adapterClassName=com.ibm.wps.vmm.adapter.softgroups.SoftgroupsAdapter -Dfederated.cur.baseDN=o=softgroups -DWasUserId=yourwasuserid -DWasPassword=yourwaspassword
    ```
3. Run the following command to update the repository configuration with custom properties:
    ```sh
    ./ConfigEngine.sh wp-create-cur-custom-property -Dcur.id=SoftGroups -Dcur.name=dataSource -Dcur.value=nameofdatasource -DWasUserId=wpsadmin -DWasPassword=yourwaspassword

    ./ConfigEngine.sh wp-create-cur-custom-property -Dcur.id=SoftGroups -Dcur.name=dbSchema -Dcur.value=yourschema -DWasUserId=wpsadmin -DWasPassword=yourwaspassword
    ```
    Example of DB2 specific tasks:
    ```sh
    ./ConfigEngine.sh wp-create-cur-custom-property -Dcur.id=SoftGroups -Dcur.name=dataSource -Dcur.value=jdbc/sgdb -DWasUserId=wpsadmin -DWasPassword=wpsadmin

    ./ConfigEngine.sh wp-create-cur-custom-property -Dcur.id=SoftGroups -Dcur.name=dbSchema -Dcur.value=softgrouptest -DWasUserId=wpsadmin -DWasPassword=wpsadmin
    ```
4. Enable the cross-repository group lookup for the repositories you want to use. To find Groups Entities in the SoftGroups Repository, run the following task:
    ```sh
    ./ConfigEngine.sh wp-update-group-repository-relationship -Drepository.id=transientidp -Drepository.forgroups=SoftGroups -DWasUserId=wpsadmin -DWasPassword=yourwaspassword
    ```

!!!note
    Please verify repository.id value from  /opt/HCL/wp_profile/config/cells/dockerCell/wim/config/wimconfig.xml. In our case its **transientidp**

### Configuring the rule attribute for the Group

In addition to the repository configuration, define the rule attribute as a new attribute for the entity type Group:

1. Edit the file `wimxmlextension.xml` in the directory `[PortalServer\_root]/config/cells/dockerCell/wim/model`. If the file does not exists create a new one. Add the following attribute definition to the file:

    ```sh
    <sdo:datagraph xmlns:sdo="commonj.sdo"
        xmlns:wim="http://www.ibm.com/websphere/wim">
        <wim:schema>
                <wim:propertySchema nsURI="http://www.ibm.com/websphere/wim" dataType="String" multiValued="false" propertyName="rule">
                    <wim:applicableEntityTypeNames>Group</wim:applicableEntityTypeNames>
                </wim:propertySchema>
        </wim:schema>
    </sdo:datagraph>
    ```

1. Edit the file `wimconfig.xml` in the directory `[PortalServer\_root]/config/cells/dockerCell/wim/config` and ensure that the following value exists, if not update it:

    ```sh
    <config:CustomProperties name="dataSource" value="jdbc/sgdb"/>
    ```

## Enabling Softgroups portlet

### Deploying Softgroups WAR

To create the Softgroups portlet application, you need additional resources, that is the WAR file. To deploy this WAR file run the following command:

```sh
cd /opt/HCL/wp_profile/ConfigEngine
./ConfigEngine.sh action-deploy-portlets-wp.portlets.softgroups -DPortalAdminPwd=wpsadmin
```

After the config engine task is executed, ensure to restart the portal server using the following commands:

```sh
cd /opt/HCL/AppServer/bin
./stopServer.sh WebSphere_Portal
./startServer.sh WebSphere_Portal
```

### Creating Softgroups Admin page

Once the WAR is deployed, create an **Admin** page which will allow you to define the rule-based groups using the following steps:

1. Ensure you are logged in to the DX Portal using the administrator credentials.
2. Navigate to **Administration** > **Site Management** > **Pages**, to view **Page Creation** page.
3. Set the title to **Softgroups Admin** and friendly URL to **softgroups**.
4. Add the Softgroups Portlet to the newly created page:
     1. Select **new Page**.
     2. Click **Pencil** icon.
     3. Click **Add Portlet**.
     4. Search for Soft and select **softgroups.portlet**.
     5. Click **Done**.

### Manage Softgroups Admin page permissions

1. Go back to **Home** section, under **Manage Pages** and locate the newly added Softgroups admin page.
2. Click on the little key icon.
1. Uncheck the boxes for Privileged User and User in the Allow Inheritance column.
4. Click **Apply** and click **Done** button.

### Define Rule-Based User Groups

1. Navigate to https://&lt;DX_HOSTNAME&gt;/wps/myportal/Home/softgroups and ensure you are logged in with the administrator credentials.
2. Under the **Create** section, provide a name for your group, for example, **softgrouptest**.
3. Add a description for the group.
4. Under the rule, add a specific rule for defining its membership criteria, for example, **(groups=softgrouptest)**.

    !!!note
        Currently a `custom role/group key` and `email` from the **OIDC Claim Token** are supported. Using these two attributes Softgroup can be created such as **(groups=&lt;group_name&gt;)** or **(email=*@&lt;domain&gt;)** or **(email=&lt;email&gt;)**.
        For example: `(groups=group1)` or `(groups=mytestgroup)` or `(email=*@softgroup3.com)` or `(email=test5@softgroup5.com)`  

![OIDC_TRANSIENT_JAAS_SOFTGROUPS_RULE](../../../../../../../images/OIDC_TRANSIENT_JAAS_SOFTGROUPS_RULE.png)

## Assigning users to groups in your IdP

Please refer to your IdP's documentation for managing user groups, the following steps are specific to Keycloak:

1. Log in to the Keycloak admin console as an administrator.
2. Select the desired realm.
3. Navigate to the **Groups** > **Create Group** and enter the desired group name for example `softgrouptest`, and then click **Create**.
4. Navigate to **clients** > ** **hcl-dx-oidc-client** > **client scopes** > **hcl-dx-oidc-client-dedicated** > **Group Membership** (Add a mapper of type `Group Membership` if not added).
5. Set **Token Claim Name** to `groups`.
6. Turn on the **Add to userinfo** radio button and click **Save**.
7. Go to the **Users** tab and click on a user.
8. Click **Groups** tab and click the **Join Group** button.
9. Check the box for the `softgrouptest` group and click the **Join** button.

## Testing the user access control

### Creating a test portal page

1. Log in to the DX portal with the admin user, go to **Administration** > **Site Management** > **Manage Pages** > **Content Home** > **Home** and select **New Page**.
2. Add a title for instance `softgroups test page`.
3. Add a **Friendly URL Name** for instance `softgrouptest`.
4. Click **ok**.

### Managing permissions for test portal page

1. On the **Home** section, under **Manage Pages** click on the little key icon for the newly added `softgroups test page`.
2. Uncheck the boxes for `Privileged User` & `User` in the `Allow Inheritance` column.
3. Click the **Edit Role** button for User and click the **Add** button.
1. Click the **Search** button and select the `softgrouptest` group and then click **OK**
6. In the breadcrumb links, click on the `softgroups test page` link and click the **Done** button.

### Verify if everything works as expected

1. Ensure you have logged out from DX.
2. Navigate to https://&lt;DX_HOSTNAME&gt;/wps/myportal/Home and log in with the test user, who was added to the `softgrouptest` group.
3. Verify if the user that you have logged in with can access the test portal page.
