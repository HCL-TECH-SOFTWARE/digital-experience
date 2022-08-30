# Granting access to theme development tools

By default, theme development tools are available to the administrator only. You can grant access for managing themes to other users and user groups, such as a theme design team.

To create, delete, and edit themes, users must have access to three areas:

1.  View access on the theme development pages
2.  User access on the theme development portlets
3.  Manager access on all WebDAV resources. You can set manager access on the /wps/mycontenthandler/dav/fs-type1/ entry point. When you grant users access to this area, those users have full read, write, and delete access on all files in this area of WebDAV.

To allow non-administrator users to update or modify existing files do the following steps.

1.  Open a command prompt and change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.
2.  Run the following ConfigEngine task.
    -   AIX® HP-UX Linux™ Solarisz/OS®:
    -   IBM® i: ConfigEngine.sh export-nodes -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin -Dquery="/filestore/fs-type1/themes" -Dwp.content.repository.output.dir="c:\\temp\\jcr"
    -   Windows™: ConfigEngine.bat export-nodes -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin -Dquery="/filestore/fs-type1/themes" -Dwp.content.repository.output.dir="c:\\temp\\jcr"
3.  Edit the file that was exported in the c:\\temp\\jcr directory. Add the manager role to a user or group by adding the following code:

    -   Code to add the manager role to a user:

        ```
        <icm:role icm:actions="actionset:Manager,actions:Traverse,View,Edit,Add_Child,Delete,Join,">                                            
                 <icm:principal icm:name="uid=testuser,o=defaultwimfilebasedrealm" icm:type="USER" />                                                  
             </icm:role>
        ```

    -   Code to add the manager role to a group:

        ```
        <icm:role icm:actions="actionset:Manager,actions:Traverse,View,Edit,Add_Child,Delete,Join,">
                 <icm:principal icm:name="cn=mygroup,o=defaultWIMFileBasedRealm" icm:type="USER_GROUP" />
             </icm:role>
        ```

    Add it after the `<icm:owner>` element. See the following complete code snippet for reference.

    ```
    <icm:node>
    <icm:access>                                                         
      <icm:wps>                                                           
       <icm:owner>                                                        
        <icm:principal icm:name="uid=wpsadmin,o=defaultwimfilebasedrealm" icm:type="USER" />                                                   
       </icm:owner>                                                       
       <icm:role icm:actions="actionset:Manager,actions:Traverse,View,Edit,Add_Child,Delete,Join,">                                             
        <icm:principal icm:name="uid=testuser,o=defaultwimfilebasedrealm" icm:type="USER" />                                                   
       </icm:role>                                                          
      </icm:wps>                                                          
    </icm:access>                                                        
    </icm:node>       
    ```

4.  Import the file with the following ConfigEngine task.
    -   AIX HP-UX Linux Solarisz/OS:
    -   IBM i: ConfigEngine.sh import-nodes -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin -Dwp.content.repository.input.dir="c:\\temp\\jcr"
    -   Windows: ConfigEngine.bat import-nodes -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin -Dwp.content.repository.input.dir="c:\\temp\\jcr"

You can grant users access with XMLAccess. Create users with the following script:

```
<request type="update" version="8.5.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.xsd">
	<portal action="locate">

		<!-- Create a user -->
		<user action="update" name="ThemeUser" firstname="A" lastname="ThemeUser" password="secret">
			<description>A user to edit themes</description>
			<parameter name="preferredLanguage" type="string" update="set">en</parameter>
		</user>

		<!-- Create another user -->
		<user action="update" name="AnotherThemeUser" firstname="Another" lastname="ThemeUser" password="secret">
	       	<description>Another user to edit themes</description>
	       	<parameter name="preferredLanguage" type="string" update="set">en</parameter>
		</user>

	</portal>
</request>
```

Use the following script to grant those users access:

```
<request type="update" version="8.5.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.xsd">
	<portal action="locate">

		<!-- Give the users access to manage themes -->
		<virtual-resource action="update" name="THEME_MANAGEMENT">
			<access-control>
				<role actionset="Manager" update="set">
					<mapping subjectid="ThemeUser" subjecttype="user" update="set"/>
					<mapping subjectid="AnotherThemeUser" subjecttype="user" update="set"/>
				</role>
			</access-control>
		</virtual-resource>

		<!-- Give the users access to use the Theme Manager portlet -->
		<web-app action="update" uid="com.ibm.wps.portlet.thememanager.webmod">
			<portlet-app action="update" uid="com.ibm.wps.portlet.thememanager">
				<portlet action="update" uniquename="wps.p.thememanager">
					<access-control externalized="false" owner="uid=wpsadmin,o=defaultWIMFileBasedRealm" private="false">
						<role actionset="User" update="set">
							<mapping subjectid="ThemeUser" subjecttype="user" update="set"/>
							<mapping subjectid="AnotherThemeUser" subjecttype="user" update="set"/>
						</role>
					</access-control>
				</portlet>
			</portlet-app>
		</web-app>

		<!-- Give the users access to use the Theme Creator portlet -->
		<web-app action="update" uid="com.ibm.wps.portlet.themecreator.webmod">
			<portlet-app action="update" uid="com.ibm.wps.portlet.themecreator">
				<portlet action="update" uniquename="wps.p.themecreator">
					<access-control externalized="false" owner="uid=wpsadmin,o=defaultWIMFileBasedRealm" private="false">
						<role actionset="User" update="set">
							<mapping subjectid="ThemeUser" subjecttype="user" update="set"/>
							<mapping subjectid="AnotherThemeUser" subjecttype="user" update="set"/>
						</role>
					</access-control>
				</portlet>
			</portlet-app>
		</web-app>
		
		<!-- Give the users access to use the Theme Properties portlet -->
		<web-app action="update" uid="com.ibm.wps.portlet.themeproperties.webmod">
			<portlet-app action="update" uid="com.ibm.wps.portlet.themeproperties">
				<portlet action="update" uniquename="wps.p.themeproperties">
					<access-control externalized="false" owner="uid=wpsadmin,o=defaultWIMFileBasedRealm" private="false">
						<role actionset="User" update="set">
							<mapping subjectid="ThemeUser" subjecttype="user" update="set"/>
							<mapping subjectid="AnotherThemeUser" subjecttype="user" update="set"/>
						</role>
					</access-control>
				</portlet>
			</portlet-app>
		</web-app>

		<!-- Give the users access to use the Theme Analyzer portlet -->
		<web-app action="update" uid="com.ibm.wps.portlet.themeoptanalyzer.webmod">
			<portlet-app action="update" uid="com.ibm.wps.portlet.themeoptanalyzer">
				<portlet action="update" uniquename="wps.p.themeoptanalyzer">
					<access-control externalized="false" owner="uid=wpsadmin,o=defaultWIMFileBasedRealm" private="false">
						<role actionset="User" update="set">
							<mapping subjectid="ThemeUser" subjecttype="user" update="set"/>
							<mapping subjectid="AnotherThemeUser" subjecttype="user" update="set"/>
						</role>
					</access-control>
				</portlet>
			</portlet-app>
		</web-app>

		<!-- Give the users access to view the Theme Development pages -->
		<content-node action="update" uniquename="ibm.portal.theme.development">           
			<access-control externalized="false" owner="uid=wpsadmin,o=defaultWIMFileBasedRealm" private="false">
				<role-block actionset="User" type="inheritance"/>
				<role actionset="User" update="set">
					<mapping subjectid="ThemeUser" subjecttype="user" update="set"/>
					<mapping subjectid="AnotherThemeUser" subjecttype="user" update="set"/>
				</role>
			</access-control>
		</content-node>

	</portal>
</request>
```

You can also grant access to users and groups. Use the following script to create users and groups:

```
<request type="update" version="8.5.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.xsd">
	<portal action="locate">

		<!-- Create a user -->
		<user action="update" name="ThemeGroupUser" firstname="A" lastname="ThemeGroupUser" password="secret">
			<description>A user to be in the theme editors group</description>
			<parameter name="preferredLanguage" type="string" update="set">en</parameter>
		</user>

		<!-- Create another user -->
		<user action="update" name="AnotherThemeGroupUser" firstname="Another" lastname="ThemeGroupUser" password="secret">
			<description>Another user to be in the theme editors group</description>
			<parameter name="preferredLanguage" type="string" update="set">en</parameter>
		</user>

		<!-- Create a group to hold the two new users -->
		<group action="update" name="ThemeGroup">
			<description>A group of theme editors</description>
			<member-user update="set" id="ThemeGroupUser"/>
			<member-user update="set" id="AnotherThemeGroupUser"/>
		</group>

	</portal>
</request>
```

Grant the users and groups access with the following script:

```
<request type="update" version="8.5.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.xsd">
	<portal action="locate">

		<!-- Give the user group access to manage themes -->
		<virtual-resource action="update" name="THEME_MANAGEMENT">
			<access-control>
				<role actionset="Manager" update="set">
					<mapping subjectid="ThemeGroup" subjecttype="user_group" update="set"/>
				</role>
			</access-control>
		</virtual-resource>

		<!-- Give the user group access to use the Theme Manager portlet -->
		<web-app action="update" uid="com.ibm.wps.portlet.thememanager.webmod">
			<portlet-app action="update" uid="com.ibm.wps.portlet.thememanager">
				<portlet action="update" uniquename="wps.p.thememanager">
					<access-control externalized="false" owner="uid=wpsadmin,o=defaultWIMFileBasedRealm" private="false">
						<role actionset="User" update="set">
							<mapping subjectid="ThemeGroup" subjecttype="user_group" update="set"/>
						</role>
					</access-control>
				</portlet>
			</portlet-app>
		</web-app>

		<!-- Give the user group access to use the Theme Creator portlet -->
		<web-app action="update" uid="com.ibm.wps.portlet.themecreator.webmod">
			<portlet-app action="update" uid="com.ibm.wps.portlet.themecreator">
				<portlet action="update" uniquename="wps.p.themecreator">
					<access-control externalized="false" owner="uid=wpsadmin,o=defaultWIMFileBasedRealm" private="false">
						<role actionset="User" update="set">
							<mapping subjectid="ThemeGroup" subjecttype="user_group" update="set"/>
						</role>
					</access-control>
				</portlet>
			</portlet-app>
		</web-app>

		<!-- Give the user group access to use the Theme Properties portlet -->
		<web-app action="update" uid="com.ibm.wps.portlet.themeproperties.webmod">
			<portlet-app action="update" uid="com.ibm.wps.portlet.themeproperties">
				<portlet action="update" uniquename="wps.p.themeproperties">
					<access-control externalized="false" owner="uid=wpsadmin,o=defaultWIMFileBasedRealm" private="false">
						<role actionset="User" update="set">
							<mapping subjectid="ThemeGroup" subjecttype="user_group" update="set"/>
						</role>
					</access-control>
				</portlet>
			</portlet-app>
		</web-app>

		<!-- Give the user group access to use the Theme Analyzer portlet -->
		<web-app action="update" uid="com.ibm.wps.portlet.themeoptanalyzer.webmod">
			<portlet-app action="update" uid="com.ibm.wps.portlet.themeoptanalyzer">
				<portlet action="update" uniquename="wps.p.themeoptanalyzer">
					<access-control externalized="false" owner="uid=wpsadmin,o=defaultWIMFileBasedRealm" private="false">
						<role actionset="User" update="set">
							<mapping subjectid="ThemeGroup" subjecttype="user_group" update="set"/>
						</role>
					</access-control>
				</portlet>
			</portlet-app>
		</web-app>

		<!-- Give the user group access to view the Theme Development pages -->
		<content-node action="update" uniquename="ibm.portal.theme.development">
			<access-control externalized="false" owner="uid=wpsadmin,o=defaultWIMFileBasedRealm" private="false">
				<role-block actionset="User" type="inheritance"/>
				<role actionset="User" update="set">
					<mapping subjectid="ThemeGroup" subjecttype="user_group" update="set"/>
				</role>
			</access-control>
		</content-node>

	</portal>
</request>
```


