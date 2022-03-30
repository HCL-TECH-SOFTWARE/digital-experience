# Tasks and extension points for custom code

You can use the following tasks and extension points when you create custom code to work with the ConfigEngine framework.

## Common Properties

These attributes are a reflection of similar attributes present on the WsAdmin task. Not all attributes on the WsAdmin task are used and some have a restricted range of values. None of these values are written into the dynamic profile.

|Attribute|Description|Required|Scope|
|---------|-----------|--------|-----|
|wasuser|Contains the user ID to authenticate with the server.|Yes|Global|
|waspassword|Contains the password that is associated with the wasuser user ID to authenticate with the server.|Yes|Global|
|conntype|Specifies the type of server connection. The following values are allowed:-   SOAP: Establishes a SOAP connection. This value is the default.
-   NONE: No server connection is used. Instead, a direct connection to the local WebSphere® Application Server configuration repository is used.

|No|Global|
|properties|Java properties file containing attributes to set in the JVM System properties. The default is $\{EngineInstallLocation\}/config/work/was/jacl.properties.|No|Global|
|script|Provides the location of the deployment script file. This file contains a set of commands to be passed to the WsAdmin script processor. Set the lang attribute to determine the script processor.If not specified, each deployment task assigns a default script location. It is built from the home directory of the configuration engine and a name specific to the task. For example, wplc\_deployEar. Refer to the individual task for this name. Set the lang attribute to determine the file extension.

|No|Global|
|lang|Contains the language to be used to interpret scripts. The supported values are as follows:-   jacl: Use the Jacl interpreter. This value is the default.
-   jpython: Use the Java Python interpreter.

|No|Global|

## Framework-specific Attributes

These attributes provide information about the runtime environment that is associated with the configuration engine.

|Attribute|Description|Required|Scope|
|---------|-----------|--------|-----|
|engineinstalllocation|The location of the configuration engine home directory. This location is used as the root when you construct many of the default locations. It defaults to the setting of the Ant property: engineInstallLocation.|No|Global|
|engineinstalllocation|The location of a deployment file that contains some or all of the deployment attributes of the targeted resource. This file is an XML file whose syntax mirrors that of the Ant task that references the file.|No|not applicable|

## Embedded Markup Tag

The following markup tags are supported.

-   **Comment markup tag**

    Use the comment markup tag to embed a comment into a task value. The comment text is displayed during the task output trace, which is enclosed by parentheses. It is not included in the value that is passed to the task execution. Use <c\> or <comment\> to begin a comment. This tag has no attributes.

-   **Default markup tag**

    Use the default markup tag to force a default value for a task value. The default is chosen if the target value resolves to an empty string. Otherwise, it is ignored. Use <d\> or <default\> to delimit text that is defaulted. This tag has the following single attribute:

    -   value: The default value. This attribute is required.
-   **`<lower>` markup tag**

    Use the lower markup tag to force text to lowercase. Use `<l>` or `<lower>` to delimit lowercase text. This tag has no attributes.

-   **Password markup tag**

    Use the password markup tag to indicate a portion of text that is to remain hidden \(or obscured\) whenever the text value is logged. Use `<p>`, `<pw>`, or `<password>` to indicate the beginning of password text. This tag has no attributes. The default is to substitute the string, PASSWORD\_REMOVED, for the text value during logging. You can override this value with the log attribute.

    -   log: The value that is substituted for the real password during logging of the task. Defaults to PASSWORD\_REMOVED. This attribute is not required.
-   **Upper markup tag**

    Use the upper markup tag to force text to uppercase. Use `<u>` or `<upper>` to delimit uppercase text. This tag has no attributes.

-   **Examples**

    The following example illustrates the use for each of the supported tags. The last instance embeds an undefined tag. This tag causes the parsing to stop and results in a value that is unchanged.

    ```
    <wplc-create-variable server="server"
          node="node"
          wasuser="${WasUserid}"
          waspassword="${WasPassword}"
          testbeanclass="com.ibm.wplc.deploy.tasks.impl.TestAdminBeanImpl">
          <resource name="r1" value="&lt;cValue for r1&lt;/>v1"/>       
    				<resource name="r2" value="&lt;dvalue=&quot;xxx&quot;> &lt;/>"/>     
    				<resource name="r3" value="<u>uPpEr</u>"/>       
    				<resource name="r4" value="<l>LoWeR</l>"/>       
    				<resource name="r5" value="<p>password</p>"/>       
    				<resource name="r6" value="<p log="SECRET">password</p>"/>       
    				<resource name="r7" value="<undefined attr="Attribute">password</undefined>"/>     
    </wplc-create-variable> 
    ```

    Running the previous task results in the following trace. The second set of output for each instance is produced by the test bean class. This bean class is a dummy bean implementation that is used to echo the output that is passed in to a bean for each WPLC task.

    ```
        [wplc-create-variable] Task parameters:
        [wplc-create-variable]   Global attributes:
        [wplc-create-variable]     cell=""
        [wplc-create-variable]     engineinstalllocation="directory\_path"
        [wplc-create-variable]     pathseparator=";"
        [wplc-create-variable]     osarch="x86"
        [wplc-create-variable]     node="node"
        [wplc-create-variable]     server="server"
    
        [wplc-create-variable]   Instance attributes (Set 1 of 7):
        [wplc-create-variable]     name="r1"
        [wplc-create-variable]     description= *** NOT_SPECIFIED ***
        [wplc-create-variable]     value="(Comment:  Value for r1)v1"
        [wplc-create-variable] name="r1"
        [wplc-create-variable] engineinstalllocation="directory\_path"
        [wplc-create-variable] node="node"
        [wplc-create-variable] server="server"
        [wplc-create-variable] pathseparator=";"
        [wplc-create-variable] osarch="x86"
        [wplc-create-variable] value="v1"
        [wplc-create-variable] cell=""
        [wplc-create-variable] description=""
    
        [wplc-create-variable]   Instance attributes (Set 2 of 7):
        [wplc-create-variable]     name="r2"
        [wplc-create-variable]     description= *** NOT_SPECIFIED ***
        [wplc-create-variable]     value="xxx"
        [wplc-create-variable] name="r2"
        [wplc-create-variable] engineinstalllocation="directory\_path"
        [wplc-create-variable] node="node"
        [wplc-create-variable] server="server"
        [wplc-create-variable] pathseparator=";"
        [wplc-create-variable] osarch="x86"
        [wplc-create-variable] value="xxx"
        [wplc-create-variable] cell=""
        [wplc-create-variable] description=""
    
        [wplc-create-variable]   Instance attributes (Set 3 of 7):
        [wplc-create-variable]     name="r3"
        [wplc-create-variable]     description= *** NOT_SPECIFIED ***
        [wplc-create-variable]     value="UPPER"
        [wplc-create-variable] name="r3"
        [wplc-create-variable] engineinstalllocation="directory\_path"
        [wplc-create-variable] node="node"
        [wplc-create-variable] server="server"
        [wplc-create-variable] pathseparator=";"
        [wplc-create-variable] osarch="x86"
        [wplc-create-variable] value="UPPER"
        [wplc-create-variable] cell=""
        [wplc-create-variable] description=""
    
        [wplc-create-variable]   Instance attributes (Set 4 of 7):
        [wplc-create-variable]     name="r4"
        [wplc-create-variable]     description= *** NOT_SPECIFIED ***
        [wplc-create-variable]     value="lower"
        [wplc-create-variable] name="r4"
        [wplc-create-variable] engineinstalllocation="directory\_path"
        [wplc-create-variable] node="node"
        [wplc-create-variable] server="server"
        [wplc-create-variable] pathseparator=";"
        [wplc-create-variable] osarch="x86"
        [wplc-create-variable] value="lower"
        [wplc-create-variable] cell=""
        [wplc-create-variable] description=""
    
        [wplc-create-variable]   Instance attributes (Set 5 of 7):
        [wplc-create-variable]     name="r5"
        [wplc-create-variable]     description= *** NOT_SPECIFIED ***
        [wplc-create-variable]     value="PASSWORD_REMOVED"
        [wplc-create-variable] name="r5"
        [wplc-create-variable] engineinstalllocation="directory\_path"
        [wplc-create-variable] node="node"
        [wplc-create-variable] server="server"
        [wplc-create-variable] pathseparator=";"
        [wplc-create-variable] osarch="x86"
        [wplc-create-variable] value="password"
        [wplc-create-variable] cell=""
        [wplc-create-variable] description=""
    
        [wplc-create-variable]   Instance attributes (Set 6 of 7):
        [wplc-create-variable]     name="r6"
        [wplc-create-variable]     description= *** NOT_SPECIFIED ***
        [wplc-create-variable]     value="SECRET"
        [wplc-create-variable] name="r6"
        [wplc-create-variable] engineinstalllocation="directory\_path"
        [wplc-create-variable] node="node"
        [wplc-create-variable] server="server"
        [wplc-create-variable] pathseparator=";"
        [wplc-create-variable] osarch="x86"
        [wplc-create-variable] value="password"
        [wplc-create-variable] cell=""
        [wplc-create-variable] description=""
    
        [wplc-create-variable]   Instance attributes (Set 7 of 7):
        [wplc-create-variable]     name="r7"
        [wplc-create-variable]     description= *** NOT_SPECIFIED ***
        [wplc-create-variable]     value="password"
        [wplc-create-variable] name="r7"
        [wplc-create-variable] engineinstalllocation="directory\_path"
        [wplc-create-variable] node="node"
        [wplc-create-variable] server="server"
        [wplc-create-variable] pathseparator=";"
        [wplc-create-variable] osarch="x86"
        [wplc-create-variable] value="password"
        [wplc-create-variable] cell=""
        [wplc-create-variable] description=""
    ```


## wplc-create-application-library-ref

-   **Definition and usage**

    Use this Ant task to create or modify the specified library reference.

-   **Required parameters**

    The following parameters are required:

    -   appName: The name of the application with required library reference. The scope is instance.
    -   libraryName: The name of the library reference. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   mode: The mode of the class loader. The scope is instance.
    -   sharedClassloader: Boolean - specifies whether to use a shared class loader. The scope is instance.
-   **Parameters that are specified as nested elements**

    attribute - a generic attribute for this resource. Users can use this attribute to specify any additional name-value pairs that are not already covered by the wplc task.

    -   name: The name of the attribute.
    -   value: The value of the attribute.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.ApplicationLibraryRefCreateImpl class implements this task.


## wplc-remove-application-library-ref

-   **Definition and usage**

    Use this Ant task to remove the specified library reference.

-   **Required parameters**

    The following parameters are required:

    -   appName: The name of the application with required library reference. The scope is instance.
    -   libraryName: The name of the library reference. The scope is instance.
-   **Optional parameters**

    The following parameter is optional:

    -   mode: The mode of the class loader. The scope is instance.
-   **Parameters that are specified as nested elements**

    attribute - a generic attribute for this resource. Users can use this attribute to specify any additional name-value pairs that are not already covered by the wplc task.

    -   name: The name of the attribute.
    -   value: The value of the attribute.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.ApplicationLibraryRefRemoveImpl class implements this task.


## wplc-create-app-server-classloader

-   **Description and usage**

    Use this Ant task to create the specified application server class loader.

-   **Required parameters**

    The following parameters are required:

    -   mode: The mode to operate the application server class loader in. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: Cell scope of resource action. The scope is global.
    -   node: The node scope of resource action. The scope is global.
    -   server: Server scope of resource action. The scope is global.
-   **Parameters that are specified as nested Elements**

    A generic attribute parameter for this resource. Users can use this attribute to specify any additional name-value pairs that are not already covered by the wplc task.

    -   name: The name of the attribute.
    -   value: The value of the attribute.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.ApplicationServerClassloaderCreateImpl class implements this task.


## wplc-remove-app-server-classloader

-   **Description and usage**

    Use this Ant task to create the specified application server class loader.

-   **Required parameters**

    The following parameters are required:

    -   mode: The mode to operate the application server class loader in. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: Cell scope of resource action. The scope is global.
    -   node: The node scope of resource action. The scope is global.
    -   server: Server scope of resource action. The scope is global.
-   **Parameters that are specified as nested Elements**

    A generic attribute parameter for this resource. Users can use this attribute to specify any additional name-value pairs that are not already covered by the wplc task.

    -   name: The name of the attribute.
    -   value: The value of the attribute.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.ApplicationServerClassloaderCreateImpl class implements this task.


## wplc-create-app-server-custom-property

-   **Description and usage**

    Use this Ant task to create or modify a custom property.

-   **Required parameters**

    The following parameters are required:

    -   name: The name of the property to create. The scope is instance.
    -   value: The value of the property to create. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: Cell scope of resource action. The scope is global.
    -   description: The description of the property you are creating. The scope is instance.
    -   node: Node scope of resource action. The scope is global.
    -   required: Boolean - specifies whether the property is required or not. The scope is instance.
    -   server: Server scope of resource action. The scope is global.
-   **Parameters that are specified as nested Elements**

    attribute - a generic attribute for this resource. Users can use this attribute to specify any additional name-value pairs that are not already covered by the wplc task.

    -   name: The name of the attribute.
    -   value: The value of the attribute.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.ApplicationServerCustomPropertyCreateImpl class implements this task.


## wplc-remove-app-server-custom-property

-   **Description and usage**

    Use this Ant task to remove a custom property.

-   **Required parameters**

    The following parameter is required:

    -   name: The name of the property to remove. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: Cell scope of resource action. The scope is global.
    -   node: The node scope of resource action. The scope is global.
    -   server: Server scope of resource action. The scope is global.
-   **Parameters that are specified as nested Elements**

    A generic attribute parameter for this resource. Users can use this attribute to specify any additional name-value pairs that are not already covered by the wplc task.

    -   name: The name of the attribute.
    -   value: The value of the attribute.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.ApplicationServerCustomPropertyRemoveImpl class implements this task.


## wplc-create-app-server-library-ref

-   **Description and usage**

    Use this Ant task to create or modify the specified reference.

-   **Required parameters**

    The following parameters are required:

    -   libraryName: Tells what library reference to add. The scope is instance.
    -   mode: The mode of the class loader. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: Cell scope of resource action. The scope is global.
    -   node: Node scope of resource action. The scope is global.
    -   server: Server scope of resource action. The scope is global.
-   **Parameters that are specified as nested Elements**

    attribute - a generic attribute for this resource. Users can use this attribute to specify any additional name-value pairs that are not already covered by the wplc task.

    -   name: The name of the attribute.
    -   value: The value of the attribute.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.ApplicationServerLibraryRefCreateImpl class implements this task.


## wplc-remove-app-server-library-ref

-   **Description and usage**

    Use this Ant task to remove the specified library reference.

-   **Required parameters**

    The following parameters are required:

    -   libraryName: Tells what library reference to remove. The scope is instance.
    -   mode: The mode of the class loader. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: Cell scope of resource action. The scope is global.
    -   node: Node scope of resource action. The scope is global.
    -   server: Server scope of resource action. The scope is global.
-   **Parameters that are specified as nested Elements**

    attribute - a generic attribute for this resource. Users can use this attribute to specify any additional name-value pairs that are not already covered by the wplc task.

    -   name: The name of the attribute.
    -   value: The value of the attribute.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.ApplicationServerLibraryRefRemoveImpl class implements this task.


## wplc-create-cmp-connection-factory

-   **Description and usage**

    Use this Ant task to add a data source to the specified CMP J2CResourceAdaptor.

-   **Required parameters**

    The following parameters are required:

    -   authDataAlias: The AuthAlias used this binding procedure. The scope is instance.
    -   datasourcename: Name of the data source. The scope is instance.
    -   j2cresourceadaptorname: The J2C Resource adapter name. The scope is instance.
    -   jdbcprovidername: Name of the JDBC provider that identifies this resource. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: Cell of the resource action. The scope is global.
    -   containerauthalias: Authorization alias for container. The scope is instance.
    -   containermappingalias: Mapping alias for container. The scope is instance.
    -   description: A description of the data source. The scope is instance.
    -   forceScope: Set to true if do not want to scope to the existing cluster. The scope is instance.
    -   node: Node of the resource action. The scope is global.
    -   server: Server of the resource action. The scope is global.
    -   usecontainer: Use the container. The value must be set to true or false. The scope is instance.
-   **Parameters that are specified as nested Elements**

    attribute - a generic attribute for this resource. Users can use this attribute to specify any additional name-value pairs that are not already covered by the wplc task.

    -   name: The name of the attribute.
    -   value: The value of the attribute.
    customproperty - used to create a custom property under this data source.

    -   name: The name of the custom property.
    -   value: The value of the custom property.
    connectionpool - used to set the connection pool properties for this data source.

    -   name: The name of the connection pool.
    -   value: The value of the connection pool.
    relationalresourceadapter - used to set the Relational Resource adapter properties for this data source.

    -   name: The name of the relational resource adapter.
    -   value: The value of the relational resource adapter.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.CMPConnectionFactoryCreateImpl class implements this task.


## wplc-remove-cmp-connection-factory

-   **Description and usage**

    Use this Ant task to remove a data source to the specified CMP J2CResourceAdaptor.

-   **Required parameters**

    The following parameters are required:

    -   containermappingalias: The mapping alias for the container.
    -   datasourcename: Name of the data source. The scope is instance.
    -   j2cresourceadaptorname: The J2C Resource adapter name. The scope is instance.
    -   jdbcprovidername: Name of the JDBC provider that identifies this resource. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: Cell of the resource action. The scope is global.
    -   containerauthalias: Authorization alias for container. The scope is instance.
    -   containermappingalias: Mapping alias for container. The scope is instance.
    -   description: A description of the data source. The scope is instance.
    -   forceScope: Set to true if do not want to scope to cluster, if exists. The scope is instance.
    -   node: Node of the resource action. The scope is global.
    -   server: Server of the resource action. The scope is global.
    -   usecontainer: Use the container. The value must be set to true or false. The scope is instance.
-   **Parameters that are specified as nested Elements**

    attribute - a generic attribute for this resource. Users can use this attribute to specify any additional name-value pairs that are not already covered by the wplc task.

    -   name: The name of the attribute.
    -   value: The value of the attribute.
    customproperty - used to create a custom property under this data source.

    -   name: The name of the custom property.
    -   value: The value of the custom property.
    connectionpool - used to set the connection pool properties for this data source.

    -   name: The name of the connection pool.
    -   value: The value of the connection pool.
    relationalresourceadapter - used to set the Relational Resource adapter properties for this data source.

    -   name: The name of the relational resource adapter.
    -   value: The value of the relational resource adapter.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.CMPConnectionFactoryRemoveImpl class implements this task.


## wplc-create-datasource

-   **Description and usage**

    Use this Ant task to create a data source at the target scope.

-   **Required parameters**

    The following parameters are required:

    -   datasourcename: Name of the data source. The scope is instance.
    -   jdbcprovidername: Name of the JDBC provider that identifies this resource. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: Cell scope of resource action. The scope is global.
    -   containerauthalias: Authorization alias for container. The scope is instance.
    -   containermappingalias: Mapping alias for container. The scope is instance.
    -   DbDriverType: Specifies the driver type for this data source. Can be the type 2 or type 4 driver for this database. The scope is instance.
    -   DbType: The database type for this data source. Use this parameter to specify the database type; for example: db2, oracle, sqlserver, db2 for zOS. The scope is instance.
    -   DbUrl: The database URL. Use the data source to connect to the database. The database name displays in this URL. The scope is instance.
    -   description: A description of the data source. The scope is instance.
    -   forceScope: Set to true if do not want to scope to existing cluster. The scope is instance.
    -   isPortalDatasource: Specifies whether this parameter is a Portal data source domain. Portal data source domains are governed by special rules for config-split and database domain function in Portal. If your data source is not governed by these rules, enter false. The default for this property is true. The scope is instance.
    -   node: Node of the resource action. The scope is global.
    -   portalDomain: Required only for HCL Portal domain-based data sources. This setting tells the name of the domain of the data source. The scope is instance.
    -   server: Server of the resource action. The scope is global.
    -   templatename: Name of the WebSphere template to follow when you create the data source. The scope is instance.
    -   usecontainer: Use the container. The value must be set to true or false. The scope is instance.
    -   useXA: Specify whether this data source uses XA connections or not. The value must be set to true or false. The scope is instance.
-   **Parameters that are specified as nested Elements**

    attribute - a generic attribute for this resource. Users can use this attribute to specify any additional name-value pairs that are not already covered by the wplc task.

    -   name: The name of the attribute.
    -   value: The value of the attribute.
    customproperty - used to create a custom property under this data source.

    -   name: The name of the custom property.
    -   value: The value of the custom property.
    connectionpool - used to set the connection pool properties for this data source.

    -   name: The name of the connection pool.
    -   value: The value of the connection pool.
    relationalresourceadapter - used to set the Relational Resource adapter properties for this data source.

    -   name: The name of the relational resource adapter.
    -   value: The value of the relational resource adapter.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.DataSourceCreateImpl class implements this task.


## wplc-modify-datasource

-   **Description and usage**

    Use this Ant task to modify a data source at the target scope.

-   **Required parameters**

    The following parameters are required:

    -   datasourcename: Name of the data source. The scope is instance.
    -   jdbcprovidername: Name of the JDBC provider that identifies this resource. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: Cell scope of resource action. The scope is global.
    -   containerauthalias: Authorization alias for container. The scope is instance.
    -   containermappingalias: Mapping alias for container. The scope is instance.
    -   description: A description of the data source. The scope is instance.
    -   forceScope: Set to true if do not want to scope to existing cluster. The scope is instance.
    -   node: Node of the resource action. The scope is global.
    -   server: Server of the resource action. The scope is global.
    -   usecontainer: Use the container. The value must be set to true or false. The scope is instance.
-   **Parameters that are specified as nested Elements**

    attribute - a generic attribute for this resource. Users can use this attribute to specify any additional name-value pairs that are not already covered by the wplc task.

    -   name: The name of the attribute.
    -   value: The value of the attribute.
    customproperty - used to create a custom property under this data source.

    -   name: The name of the custom property.
    -   value: The value of the custom property.
    connectionpool - used to set the connection pool properties for this data source.

    -   name: The name of the connection pool.
    -   value: The value of the connection pool.
    relationalresourceadapter - used to set the Relational Resource adapter properties for this data source.

    -   name: The name of the relational resource adapter.
    -   value: The value of the relational resource adapter.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.DataSourceModifyImpl class implements this task.


## wplc-remove-datasource

-   **Description and usage**

    Use this Ant task to remove a data source at the target scope.

-   **Required parameters**

    The following parameters are required:

    -   datasourcename: Name of the data source. The scope is instance.
    -   jdbcprovidername: Name of the JDBC provider that identifies this resource. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: Cell scope of resource action. The scope is global.
    -   forceScope: Set to true if do not want to scope to existing cluster. The scope is instance.
    -   node: Node of the resource action. The scope is global.
    -   portalDomain: Required only for HCL Portal domain-based data sources. This setting tells the name of the domain of the data source. The scope is instance.
    -   server: Server of the resource action. The scope is global.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.DataSourceRemoveImpl class implements this task.


## wplc-create-host-alias

-   **Description and usage**

    Use this Ant task to create the specified Host Alias.

-   **Required parameters**

    The following parameters are required:

    -   host: The host name for the host alias. The scope is instance.
    -   port: The port number for this host alias. The scope is instance.
    -   virtualHostName: The virtual host name to use for this host alias. The scope is instance.
-   **Optional parameters**

    The following parameter is optional:

    -   cell: The cell scope of resource action. The scope is global.
-   **Parameters that are specified as nested Elements**

    attribute - a generic attribute for this resource. Users can use this attribute to specify any additional name-value pairs that are not already covered by the wplc task.

    -   name: The name of the attribute.
    -   value: The value of the attribute.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.HostAliasCreateImpl class implements this task.


## wplc-remove-host-alias

-   **Description and usage**

    Use this Ant task to remove the specified Host Alias.

-   **Required parameters**

    The following parameters are required:

    -   host: The host name for the host alias. The scope is instance.
    -   port: The port number for this host alias. The scope is instance.
    -   virtualHostName: The virtual host name to use for this host alias. The scope is instance.
-   **Optional parameters**

    The following parameter is optional:

    -   cell: The cell scope of resource action. The scope is global.
-   **Parameters that are specified as nested Elements**

    attribute - a generic attribute for this resource. Users can use this attribute to specify any additional name-value pairs that are not already covered by the wplc task.

    -   name: The name of the attribute.
    -   value: The value of the attribute.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.HostAliasRemoveImpl class implements this task.


## wplc-create-j2c-auth

-   **Description and usage**

    Use this Ant task to create an entry in the security table of the target cell. This entry can be used as a user-password pair for your configuration.

-   **Required parameters**

    The following parameters are required:

    -   alias: The alias that is used to identify this authentication data. The scope is instance.
    -   password: The password that is associated with this user ID.
    -   user: The user name that is used to create a connection with this authentication data.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: The name of the cell where this J2C authentication data is created, removed, or modified. The scope is global.
    -   description: A description of what this authentication data is used for and what it connects to. The scope is instance.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.J2CAuthCreateImpl class implements this task.


## wplc-modify-j2c-auth

-   **Description and usage**

    Use this Ant task to modify an entry in the security table of the target cell. This entry can be used as a user-password pair for your configuration.

-   **Required parameters**

    The following parameters are required:

    -   alias: The alias that is used to identify this authentication data. The scope is instance.
    -   password: The password that is associated with this user ID.
    -   user: The user name that is used to create a connection with this authentication data.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: The name of the cell where this J2C authentication data is created, removed, or modified. The scope is global.
    -   description: A description of what this authentication data is used for and what it connects to. The scope is instance.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.J2CAuthModifyImpl class implements this task.


## wplc-remove-j2c-auth

-   **Description and usage**

    Use this Ant task to remove an entry in the security table of the target cell.

-   **Required parameters**

    The following parameter is required:

    -   alias: The alias that is used to identify this authentication data. The scope is instance.
-   **Optional parameters**

    The following parameter is optional:

    -   cell: The name of the cell where this J2C authentication data is created, removed, or modified. The scope is global.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.J2CAuthRemoveImpl class implements this task.


## wplc-create-jvm-custom-property

-   **Description and usage**

    Use this Ant task to create or update a custom JVM property in the WebSphere® Application Server environment.

-   **Required parameters**

    The following parameters are required:

    -   name: The name of the JVM custom property. The scope is instance.
    -   value: The value of the property to create.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: The cell scope of the resource action. The scope is global.
    -   description: A description of the JVM custom property. The scope is instance.
    -   node: The node scope of the resource action.
    -   required: The Boolean value that is used to tell WebSphere if this property is required or not.
    -   server: The server scope of the resource action.
    -   zosProcessDefType: z/OS® only: Used to tell which region this property is created for: Servant, Control, or Abjunct. The value defaults to Servant.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.JVMCustomPropertyCreateImpl class implements this task.


## wplc-remove-jvm-custom-property

-   **Description and usage**

    Use this Ant task to remove a custom JVM property in the WebSphere® Application Server environment.

-   **Required parameters**

    The following parameters are required:

    -   name: The name of the JVM custom property. The scope is instance.
    -   value: The value of the property to create.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: The cell scope of the resource action. The scope is global.
    -   node: The node scope of the resource action.
    -   server: The server scope of the resource action.
    -   zosProcessDefType: z/OS® only: Used to tell which region this property is removed from: Servant, Control, or Abjunct. The value defaults to Servant.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.JVMCustomPropertyRemoveImpl class implements this task.


## wplc-create-jdbc-provider

-   **Description and usage**

    Use this Ant task to create a JDBC provider resource on the target scope.

-   **Required parameters**

    The following parameter is required:

    -   jdbcprovidername: The name of the JDBC provider that identities this resource. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: Cell scope of resource action. The scope is global.
    -   DbDriverType: Specifies the driver type for this JDBC Provider. Can be the type 2 or type 4 driver for this database. The scope is instance.
    -   DbType: The database type for this JDBC Provider. Use this parameter to specify the database type; for example: db2, oracle, sqlserver, db2 for zOS. The scope is instance.
    -   DbUrl: The database URL. This JDBC Provider is used to connect to the database. The database name displays in this URL. The scope is instance.
    -   forceScope: Set to true if do not want to scope to an existing cluster. The scope is instance.
    -   implementationClassName: The class name that is used to create this JDBC Provider. The scope is instance.
    -   node: The node of the resource action. The scope is global.
    -   server: The server of the resource action. The scope is global.
    -   templatename: Name of the template to follow when you create the JDBC Provider. The scope is instance.
    -   useXA: Specify whether this JDBC Provider uses XA connections or not. Set to true or false. The scope is instance.
-   **Parameters that are specified as nested Elements**

    attribute - a generic attribute for this resource. Users can use this attribute to specify any additional name-value pairs that are not already covered by the wplc task.

    -   name: The name of the attribute.
    -   value: The value of the attribute.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.JDBCProviderCreateImpl class implements this task.


## wplc-modify-jdbc-provider

-   **Description and usage**

    Use this Ant task to create a JDBC provider resource on the target scope.

-   **Required parameters**

    The following parameter is required:

    -   jdbcprovidername: The name of the JDBC provider that identities this resource. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: Cell scope of resource action. The scope is global.
    -   forceScope: Set to true if do not want to scope to an existing cluster. The scope is instance.
    -   node: The node of the resource action. The scope is global.
    -   server: The server of the resource action. The scope is global.
-   **Parameters that are specified as nested Elements**

    attribute - a generic attribute for this resource. Users can use this attribute to specify any additional name-value pairs that are not already covered by the wplc task.

    -   name: The name of the attribute.
    -   value: The value of the attribute.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.JDBCProviderModifyImpl class implements this task.


## wplc-remove-jdbc-provider

-   **Description and usage**

    Use this Ant task to remove a JDBC provider resource on the target scope.

-   **Required parameters**

    The following parameter is required:

    -   jdbcprovidername: The name of the JDBC provider that identities this resource. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: Cell scope of resource action. The scope is global.
    -   forceScope: Set to true if do not want to scope to an existing cluster. The scope is instance.
    -   node: The node of the resource action. The scope is global.
    -   server: The server of the resource action. The scope is global.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.JDBCProviderRemoveImpl class implements this task.


## wplc-create-library

-   **Description and usage**

    Use this Ant task to create or modify the specified library.

-   **Required parameters**

    The following parameter is required:

    -   name: The name of the library. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: The cell of the resource action. The scope is global.
    -   classpath: Tells what class path entries to add. The scope is instance.
    -   node: The node of the resource action. The scope is global.
    -   server: The server of the resource action. The scope is global.
-   **Parameters that are specified as nested Elements**

    attribute - a generic attribute for this resource. Users can use this attribute to specify any additional name-value pairs that are not already covered by the wplc task.

    -   name: The name of the attribute.
    -   value: The value of the attribute.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.LibraryCreateImpl class implements this task.


## wplc-remove-library

-   **Description and usage**

    Use this Ant task to remove the specified library.

-   **Required parameters**

    The following parameter is required:

    -   name: The name of the library. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: The cell of the resource action. The scope is global.
    -   node: The node of the resource action. The scope is global.
    -   server: The server of the resource action. The scope is global.
-   **Parameters that are specified as nested Elements**

    attribute - a generic attribute for this resource. Users can use this attribute to specify any additional name-value pairs that are not already covered by the wplc task.

    -   name: The name of the attribute.
    -   value: The value of the attribute.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.LibraryRemoveImpl class implements this task.


## wplc-create-res-env-custom-property

-   **Description and usage**

    Use this Ant task to create or reassign a Resource Environment Provider custom property.

-   **Required parameters**

    The following parameters are required:

    -   name: The name of the resource to create, update, or modify. The scope is instance.
    -   providerName: The name of the resource environment provider. The scope is instance.
    -   value: The value of the custom property. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: The cell of the resource action. The scope is global.
    -   description: The description of the custom property. The scope is instance.
    -   forceScope: Set to true if do not want to scope to an existing cluster. The scope is instance.
    -   node: The node of the resource action. The scope is global.
    -   required: The Boolean value to specify whether this property is required or not. The scope is instance.
    -   server: The server of the resource action. The scope is global.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.ResourceEnvProviderCustomPropertyCreateImpl class implements this task.


## wplc-retrieve-res-env-custom-property

-   **Description and usage**

    Use this Ant task to return the value of a Resource Environment Provider custom property.

-   **Required parameters**

    The following parameters are required:

    -   name: The name of the resource to create, update, or modify. The scope is instance.
    -   propToSet: The property that is set in the Ant project with the value retrieved from this property. The scope is instance.
    -   providerName: The name of the resource environment provider. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: The cell of the resource action. The scope is global.
    -   forceScope: Set to true if do not want to scope to an existing cluster. The scope is instance.
    -   node: The node of the resource action. The scope is global.
    -   server: The server of the resource action. The scope is global.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.ResourceEnvProviderCustomPropertyRetreiveImpl class implements this task.


## wplc-remove-res-env-custom-property

-   **Description and usage**

    Use this Ant task to remove a Resource Environment Provider custom property.

-   **Required parameters**

    The following parameters are required:

    -   name: The name of the resource to create, update, or modify. The scope is instance.
    -   providerName: The name of the resource environment provider. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: The cell of the resource action. The scope is global.
    -   forceScope: Set to true if do not want to scope to an existing cluster. The scope is instance.
    -   node: The node of the resource action. The scope is global.
    -   server: The server of the resource action. The scope is global.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.ResourceEnvProviderCustomPropertyRemoveImpl class implements this task.


## wplc-create-res-env-entry

-   **Description and usage**

    Use this Ant task to create or modify a resource environment entry.

-   **Prerequisites**

    Run the wplc-create-res-referenceable task before you run the wplc-create-res-env-entry task. The resource entry that is referenced in the wplc-create-res-env-entry task is not automatically created. Instead, the wplc-create-res-referenceable task creates the resource.

-   **Required parameters**

    The following parameters are required:

    -   jndiName: The JNDI name. The scope is instance.
    -   name: The name of the resource to create, update, or modify. The scope is instance.
    -   providerName: The name of the resource environment provider. The scope is instance.
    -   referenceable.Class: The class of the resource environment provider. The scope is instance.
    -   referenceable.FactoryClass: The factory class of the resource environment provider. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   category: The name of the category. The scope is instance.
    -   cell: The cell of the resource action. The scope is global.
    -   description: The description of the resource action. The scope is instance.
    -   forceScope: Set to true if do not want to scope to an existing cluster. The scope is instance.
    -   node: The node of the resource action. The scope is global.
    -   server: The server of the resource action. The scope is global.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.ResourceEnvEntryCreateImpl class implements this task.


## wplc-remove-res-env-entry

-   **Description and usage**

    Use this Ant task to remove a resource environment entry.

-   **Required parameters**

    The following parameters are required:

    -   name: The name of the resource to create, update, or modify. The scope is instance.
    -   providerName: The name of the resource environment provider. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: The cell of the resource action. The scope is global.
    -   forceScope: Set to true if do not want to scope to an existing cluster. The scope is instance.
    -   node: The node of the resource action. The scope is global.
    -   server: The server of the resource action. The scope is global.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.ResourceEnvEntryRemoveImpl class implements this task.


## wplc-create-res-env-entry-custom-property

-   **Description and usage**

    Use this Ant task to create or reassign a custom SSL property in WebSphere® Application Server security.

-   **Required parameters**

    The following parameters are required:

    -   entryName: The name of the resource entry to update. The scope is instance.
    -   name: The name of the resource to create, update, or modify. The scope is instance.
    -   providerName: The name of the resource environment provider. The scope is instance.
    -   value: The value of the custom property. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: The cell of the resource action. The scope is global.
    -   description: The description of the custom property. The scope is instance.
    -   forceScope: Set to true if do not want to scope to an existing cluster. The scope is instance.
    -   node: The node of the resource action. The scope is global.
    -   required: The Boolean value to specify whether this property is required or not. The scope is instance.
    -   server: The server of the resource action. The scope is global.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.ResourceEnvEntryCustomPropertyCreateImpl class implements this task.


## wplc-remove-res-env-entry-custom-property

-   **Description and usage**

    Use this Ant task to remove a custom SSL property in WebSphere® Application Server security.

-   **Required parameters**

    The following parameters are required:

    -   entryName: The name of the resource entry to update. The scope is instance.
    -   name: The name of the resource to create, update, or modify. The scope is instance.
    -   providerName: The name of the resource environment provider. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: The cell of the resource action. The scope is global.
    -   forceScope: Set to true if do not want to scope to an existing cluster. The scope is instance.
    -   node: The node of the resource action. The scope is global.
    -   server: The server of the resource action. The scope is global.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.ResourceEnvEntryCustomPropertyRemoveImpl class implements this task.


## wplc-create-resource-env-provider

-   **Description and usage**

    Use this Ant task to create a resource environment provider at the specified scope.

-   **Required parameters**

    The following parameter is required:

    -   name: The name of the resource to create, update, or modify. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: The cell of the resource action. The scope is global.
    -   description: The description of the custom property. The scope is instance.
    -   forceScope: Set to true if do not want to scope to an existing cluster. The scope is instance.
    -   node: The node of the resource action. The scope is global.
    -   server: The server of the resource action. The scope is global.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.ResourceEnvProviderCreateImpl class implements this task.


## wplc-remove-resource-env-provider

-   **Description and usage**

    Use this Ant task to remove a resource environment provider at the specified scope and with the specified name.

-   **Required parameters**

    The following parameter is required:

    -   name: The name of the resource to create, update, or modify. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: The cell of the resource action. The scope is global.
    -   forceScope: Set to true if do not want to scope to an existing cluster. The scope is instance.
    -   node: The node of the resource action. The scope is global.
    -   server: The server of the resource action. The scope is global.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.ResourceEnvProviderRemoveImpl class implements this task.


## wplc-create-res-referenceable

-   **Description and usage**

    Use this Ant task to create or modify a resource entry that you can reference.

    **Important:** Run this task before you run the wplc-create-res-env-entry task. The wplc-create-res-referenceable task creates the resource that is referenced in the wplc-create-res-env-entry task.

-   **Required parameters**

    The following parameters are required:

    -   providerName: The name of the resource environment provider. The scope is instance.
    -   referenceable.Class: The reference class of the resource environment provider. The scope is instance.
    -   referenceable.FactoryClass: The reference factory class of the resource environment provider. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: Cell of the resource action. The scope is global.
    -   forceScope: Set to true if do not want to scope to cluster, if exists. The scope is instance.
    -   node: Node of the resource action. The scope is global.
    -   server: Server of the resource action. The scope is global.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.ResourceReferenceableCreateImpl class implements this task.


## wplc-remove-res-referenceable

-   **Description and usage**

    Use this Ant task to remove a resource entry you can reference.

-   **Required parameters**

    The following parameters are required:

    -   providerName: The name of the resource environment provider. The scope is instance.
    -   referenceable.Class: The reference class of the resource environment provider. The scope is instance.
    -   referenceable.FactoryClass: The reference factory class of the resource environment provider. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: Cell of the resource action. The scope is global.
    -   forceScope: Set to true if do not want to scope to an existing cluster. The scope is instance.
    -   node: Node of the resource action. The scope is global.
    -   server: Server of the resource action. The scope is global.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.ResourceReferenceableRemoveImpl class implements this task.


## wplc-create-variable

-   **Description and usage**

    Use this Ant task to create or reassign a WebSphere® Application Server environment variable and value.

-   **Required parameters**

    The following parameters are required:

    -   name: The name of the variable. The scope is instance.
    -   value: The value that is assigned to the variable. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: The cell of the resource action. The scope is global.
    -   description: The description of the variable.
    -   node: The node of the resource action. The scope is global.
    -   server: The server of the resource action. The scope is global.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.VariableCreateImpl class implements this task.


## wplc-remove-variable

-   **Description and usage**

    Use this Ant task to remove a WebSphere® Application Server environment variable and value.

-   **Required parameters**

    The following parameter is required:

    -   name: The name of the variable. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: The cell of the resource action. The scope is global.
    -   node: The node of the resource action. The scope is global.
    -   server: The server of the resource action. The scope is global.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.VariableRemoveImpl class implements this task.


## wplc-retrieve-variable

-   **Description and usage**

    Use this Ant task to retrieve a WebSphere® Application Server environment variable and value.

-   **Required parameters**

    The following parameter is required:

    -   name: The name of the variable. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: The cell of the resource action. The scope is global.
    -   node: The node of the resource action. The scope is global.
    -   server: The server of the resource action. The scope is global.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.VariableRetrieveImpl class implements this task.


## wplc-create-res-env-directory

-   **Description and usage**

    Use this Ant task to create RP file names in the directory.

-   **Required parameters**

    The following parameter is required:

    -   rpPropertyDirectoryName: The property directory name. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: Cell of the resource action. The scope is global.
    -   forceScope: Set to true if do not want to scope to an existing cluster. The scope is instance.
    -   node: Node of the resource action. The scope is global.
    -   rpPrefix: The name of the prefix. The scope is instance.
    -   server: Server of the resource action. The scope is global.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.REProviderCreateByDirectoryImpl class implements this task.


## wplc-cluster-sync-all-node

-   **Description and usage**

    Use this Ant task to sync all nodes in the cluster.

-   **Optional parameters**

    The following parameters are optional:

    -   cell: Cell of the resource action. The scope is global.
    -   node: Node of the resource action. The scope is global.
    -   server: Server of the resource action. The scope is global.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.ClusterSyncAllNodesImpl class implements this task.


## wplc-cluster-sync-single-node

-   **Description and usage**

    Use this Ant task to sync a single cluster node.

-   **Required parameters**

    The following parameter is required:

    -   syncNode: The name of the node to sync. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: Cell of the resource action. The scope is global.
    -   node: Node of the resource action. The scope is global.
    -   server: Server of the resource action. The scope is global.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.ClusterSyncSingleNodeImpl class implements this task.


## wplc-extract-ear-local-or-remote

-   **Description and usage**

    Use this Ant task to extract ear files locally or remotely.

-   **Required parameters**

    The following parameters are required:

    -   appName: The application name for the ear file. The scope is instance.
    -   earFile: The local directory and file where the ear file is exported to. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: Cell of the resource action. The scope is global.
    -   node: Node of the resource action. The scope is global.
    -   server: Server of the resource action. The scope is global.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.ExtractEarLocalOrRemoteImpl class implements this task.


## wplc-query-application-list

-   **Description and usage**

    Use this Ant task to query a list of applications that are installed in the cell and to return a comma delimited string. The application list is placed in an Ant property called $\{filteredAppList\}.

-   **Optional parameters**

    The following parameters are optional:

    -   cell: Cell of the resource action. The scope is global.
    -   filter: The filter that is used for the application query; for example: PA\_.
    -   node: Node of the resource action. The scope is global.
    -   server: Server of the resource action. The scope is global.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.ApplicationsQueryImpl class implements this task.


## wplc-retrieve-datasource-custom-property

-   **Description and usage**

    Use this Ant task to retrieve a value from the data source custom properties.

-   **Required parameters**

    The following parameters are required:

    -   datasourcename: Name of the data source. The scope is instance.
    -   jdbcprovidername: Name of the JDBC provider that identifies this resource. The scope is instance.
-   **Optional parameters**

    The following parameters are optional:

    -   cell: Cell of the resource action. The scope is global.
    -   forceScope: Set to true if do not want to scope to the existing cluster. The scope is instance.
    -   node: Node of the resource action. The scope is global.
    -   propertyName: The name of the custom property to retrieve the value from. The scope is instance.
    -   propToSet: The property that is set in the Ant project with the value retrieved from WebSphere® Application Server. The scope is instance.
    -   server: Server of the resource action. The scope is global.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.DataSourceRetrieveCustomPropertyValue class implements this task.


## wplc-wait-for-sync-to-complete

-   **Description and usage**

    Use this Ant task to wait for the ear expansion and distribution to complete.

-   **Optional parameters**

    The following parameters are optional:

    -   cell: Cell of the resource action. The scope is global.
    -   maxAppTimeToWait: The maximum time in minutes to wait for each application expansion process to complete.
    -   maxTimeToWait: The maximum time in minutes to wait for the expansion process to complete.
    -   node: Node of the resource action. The scope is global.
    -   server: Server of the resource action. The scope is global.
    -   waitTime: The time to wait between checks for the application to deploy.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.impl.ClusterWaitForSyncToCompleteImpl class implements this task.


## wplc-create-ear

-   **Description and usage**

    Use this Ant task to deploy an EAR resource to the target Application or portal server.

-   **Required parameters**

    The following parameters are required:

    -   appname: The name of the application for the EAR file.
    -   earfile: The location of the EAR file to deploy.
-   **Optional parameters**

    The following parameters are optional:

    -   cluster: Defines the cluster name. Do not include spaces with this value. If not set, the value defaults to the context that is defined in the EAR file's application.xml file.
    -   classloadermode: Sets the class-loader delegation mode, also known as the class loader order. This value determines whether a class loader delegates the loading of classes to the parent class loader. The following values are supported:
        -   PARENT\_FIRST: Delegates the loading of classes to its parent before you load the class from its local path. This value is the default for the class-loader policy and for standard JVM class loaders.
        -   PARENT\_LAST: Causes the class loader to attempt to load classes from its local class path before you delegate the class loading to its parent. Using this policy, an application class loader can override and provide its own version of a class that exists in the parent class loader.
    -   startingweight: Sets the starting weight for the application. The starting weight specifies the order in which applications are started when the server starts. The application with the lowest starting weight is started first.
    -   server: The name of the application server for HCL Portal.
    -   node: The name of the WebSphere® Application Server node.
    -   cell: The name of the WebSphere® Application Server cell.
-   **Parameters that are specified as nested Elements**

    attribute - a generic attribute for this resource. Users can use this attribute to specify any additional name-value pairs that are not already covered by the wplc task. This parameter is used to pass any attribute that is associated with the resource action.

    -   name: The name of the attribute.
    -   value: The value of the attribute.
    option - Not all available EAR deployment options are supported by the wplc-create-ear syntax as attributes. The option element passes more information to the underlying framework inside the WsAdmin profile. This feature is similar to how other parameters are passed into the WsAdmin script file. However, in this situation, the full set of options are assembled into a string corresponding to the syntax of the scripting language.

    Do not code parameters that are included as attributes on the task as options. Use the corresponding attribute to avoid redundancy and to prevent runtime exception during the task parsing.

    The syntax of the nested option element allows for the following three formats: keyword only, keyword/value pairing, or keyword with value list.

    -   key: The name of the option
    -   value: The value of the option. If no value is present and the option does not contain nested value elements, then this key does not take a value.
    If a keyword can take a list of values, then a single nested value element is used for each value in the list.

    |Parameter type|Example \(with AdminApp syntax\)|Option element syntax|
    |--------------|--------------------------------|---------------------|
    |Keyword only|`-nodeployejb`|`<option key="nodeployejb"/>`|
    |Keyword with simple value|`-custom value`|`<option key="custom" value="value"/>`|
    |Keyword with list of values|`-MapresrefToEJB {{value1} {value2} {value3}}`|    ```
<option key="MapResRefToEJB"/>
	<value>value1</value>
	<value>value2</value>
	<value>value3</value>
</option>
    ```

|

-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.EarCreate class implements this task.


## wplc-edit-ear

-   **Description and usage**

    Use this Ant task to edit the attributes of the target application.

-   **Required parameters**

    The following parameter is required:

    -   appname: The name of the application for the EAR file.
-   **Parameters that are specified as nested Elements**

    option - Not all available EAR deployment options are supported by the wplc-create-ear syntax as attributes. The option element passes more information to the underlying framework inside the WsAdmin profile. This feature is similar to how other parameters are passed into the WsAdmin script file. However, in this situation, the full set of options are assembled into a string corresponding to the syntax of the scripting language.

    Do not code parameters that are included as attributes on the task as options. Use the corresponding attribute to avoid redundancy and to prevent runtime exception during the task parsing.

    The syntax of the nested option element allows for the following three formats: keyword only, keyword/value pairing, or keyword with value list.

    -   key: The name of the option
    -   value: The value of the option. If no value is present and the option does not contain nested value elements, then this key does not take a value.
    If a keyword can take a list of values, then a single nested value element is used for each value in the list.

    |Parameter type|Example \(with AdminApp syntax\)|Option element syntax|
    |--------------|--------------------------------|---------------------|
    |Keyword only|`-nodeployejb`|`<option key="nodeployejb"/>`|
    |Keyword with simple value|`-custom value`|`<option key="custom" value="value"/>`|
    |Keyword with list of values|`-MapresrefToEJB {{value1} {value2} {value3}}`|    ```
<option key="MapResRefToEJB"/>
	<value>value1</value>
	<value>value2</value>
	<value>value3</value>
</option>
    ```

|

-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.EarEdit class implements this task.


## wplc-update-ear

-   **Description and usage**

    Use this Ant task to update an existing deployed EAR file with a new or modified version.

-   **Required parameters**

    The following parameters are required:

    -   appname: The name of the application for the EAR file.
    -   earfile: The location of the EAR file to deploy.
-   **Optional parameters**

    The following parameters are optional:

    -   classloadermode: Sets the class-loader delegation mode, also known as the class loader order. This value determines whether a class loader delegates the loading of classes to the parent class loader. The following values are supported:
        -   PARENT\_FIRST: Delegates the loading of classes to its parent before you load the class from its local class path. This value is the default for the class-loader policy and for standard JVM class loaders.
        -   PARENT\_LAST: Causes the class loader to attempt to load classes from its local class path before you delegate the class loading to its parent. Using this policy, an application class loader can override and provide its own version of a class that exists in the parent class loader.
    -   startingweight: Sets the starting weight for the application. The starting weight specifies the order in which applications are started when the server starts. The application with the lowest starting weight is started first.
-   **Parameters that are specified as nested Elements**

    attribute - a generic attribute for this resource. Users can use this attribute to specify any additional name-value pairs that are not already covered by the wplc task. This parameter is used to pass any attribute that is associated with the resource action.

    -   name: The name of the attribute.
    -   value: The value of the attribute.
    option - Not all available EAR deployment options are supported by the wplc-create-ear syntax as attributes. The option element passes more information to the underlying framework inside the WsAdmin profile. This feature is similar to how other parameters are passed into the WsAdmin script file. However, in this situation, the full set of options are assembled into a string corresponding to the syntax of the scripting language.

    Do not code parameters that are included as attributes on the task as options. Use the corresponding attribute to avoid redundancy and to prevent runtime exception during the task parsing.

    The syntax of the nested option element allows for the following three formats: keyword only, keyword/value pairing, or keyword with value list.

    -   key: The name of the option
    -   value: The value of the option. If no value is present and the option does not contain nested value elements, then this key does not take a value.
    If a keyword can take a list of values, then a single nested value element is used for each value in the list.

    |Parameter type|Example \(with AdminApp syntax\)|Option element syntax|
    |--------------|--------------------------------|---------------------|
    |Keyword only|`-nodeployejb`|`<option key="nodeployejb"/>`|
    |Keyword with simple value|`-custom value`|`<option key="custom" value="value"/>`|
    |Keyword with list of values|`-MapresrefToEJB {{value1} {value2} {value3}}`|    ```
<option key="MapResRefToEJB"/>
	<value>value1</value>
	<value>value2</value>
	<value>value3</value>
</option>
    ```

|

-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.EarUpdate class implements this task.


## wplc-modify-ear

-   **Description and usage**

    Use this Ant task to modify a previously deployed EAR resource to the target application or Portal server instance.

-   **Required parameters**

    The following parameters are required:

    -   appname: The name of the application for the EAR file.
-   **Optional parameters**

    The following parameters are optional:

    -   classloadermode: Sets the class-loader delegation mode, also known as the class loader order. This parameter determines whether a class loader delegates the loading classes to the parent class loader. The following values are supported:
        -   PARENT\_FIRST: Delegates the loading of classes to its parent before you load the class from its local class path. This value is the default for the class-loader policy and for standard JVM class loaders.
        -   PARENT\_LAST: Causes the class loader to attempt to load classes from its local class path before you delegate the class loading to its parent. Using this policy, an application class loader can override and provide its own version of a class that exists in the parent class loader.
    -   startingweight: Set the starting weight for the application. The starting weight specifies the order in which applications are started when the server starts. The application with the lowest starting weight is started first.
    -   server: The name of the HCL Portal server.
    -   node: The name of the WebSphere® Application Server node.
    -   cell: The name of the WebSphere® Application Server cell.
-   **Parameters that are specified as nested Elements**

    attribute - a generic attribute for this resource. Users can use this attribute to specify any additional name-value pairs that are not already covered by the wplc task.

    -   name: The name of the attribute.
    -   value: The value of the attribute.
    option - Not all available EAR deployment options are supported by the wplc-create-ear syntax as attributes. The option element passes more information to the underlying framework inside the WsAdmin profile. This feature is similar to how other parameters are passed into the WsAdmin script file. However, in this situation, the full set of options are assembled into a string corresponding to the syntax of the scripting language.

    Do not code parameters that are included as attributes on the task as options. Use the corresponding attribute to avoid redundancy and to prevent runtime exception during the task parsing.

    The syntax of the nested option element allows for the following three formats: keyword only, keyword/value pairing, or keyword with value list.

    -   key: The name of the option
    -   value: The value of the option. If no value is present and the option does not contain nested value elements, then this key does not take a value.
    If a keyword can take a list of values, then a single nested value element is used for each value in the list.

    |Parameter type|Example \(with AdminApp syntax\)|Option element syntax|
    |--------------|--------------------------------|---------------------|
    |Keyword only|`-nodeployejb`|`<option key="nodeployejb"/>`|
    |Keyword with simple value|`-custom value`|`<option key="custom" value="value"/>`|
    |Keyword with list of values|`-MapresrefToEJB {{value1} {value2} {value3}}`|    ```
<option key="MapResRefToEJB"/>
	<value>value1</value>
	<value>value2</value>
	<value>value3</value>
</option>
    ```

|

-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.EarModify class implements this task.


## wplc-update-file-in-ear

-   **Description and usage**

    Use this Ant task to update a file in the deployed ear.

-   **Required parameters**

    The following parameters are required:

    -   appname: The name of the application for the EAR file.
    -   classloadermode: Sets the class-loader delegation mode, also known as the class loader order. This value determines whether a class loader delegates the loading of classes to the parent class loader. The following values are supported:
        -   PARENT\_FIRST: Delegates the loading of classes to its parent before you load the class from its local class path. This value is the default for the class-loader policy and for standard JVM class loaders.
        -   PARENT\_LAST: Causes the class loader to attempt to load classes from its local class path before you delegate the class loading to its parent. Using this policy, an application class loader can override and provide its own version of a class that exists in the parent class loader.
        -   startingweight: Sets the starting weight for the application. The starting weight specifies the order in which applications are started when the server starts. The application with the lowest starting weight is started first.
-   **Parameters that are specified as nested Elements**

    option - Not all available EAR deployment options are supported by the wplc-create-ear syntax as attributes. The option element passes more information to the underlying framework inside the WsAdmin profile. This feature is similar to how other parameters are passed into the WsAdmin script file. However, in this situation, the full set of options are assembled into a string corresponding to the syntax of the scripting language.

    Do not code parameters that are included as attributes on the task as options. Use the corresponding attribute to avoid redundancy and to prevent runtime exception during the task parsing.

    The syntax of the nested option element allows for the following three formats: keyword only, keyword/value pairing, or keyword with value list.

    -   key: The name of the option
    -   value: The value of the option. If no value attribute is present and the option does not contain value elements, then this key does not take a value.
    If a keyword can take a list of values, then a single nested value element is used for each value in the list.

    Add the following two <option\> keys:

    -   An option element with a key of contents points to the location on disk of the file to update option key="contents" value="locationOfFileOnDisk"/\>.
    -   An option element with a key of contenturi points to the location inside of an .ear file of the file to update option key="contenturi" value="locationOfFileInEar"/\>
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.EarCreate class implements this task.


## wplc-remove-ear

-   **Description and usage**

    Use this Ant task to remove or uninstall an EAR resource from the target application or Portal server instance.

-   **Required parameters**

    The following parameter is required:

    -   appname: The name of the application for the EAR file.
-   **Implementation bean**

    The com.ibm.wplc.deploy.tasks.EarRemove class implements this task.


**Parent topic:**[Developing advanced PAA file applications ](../config/dev_sol_app_adv.md)

