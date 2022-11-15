# Deployment Service

The portal Deployment Service provides services for accessing the configuration properties that are required for the portlet deployment. The portlet deployment component is responsible for the integration of portlets into the portal. It handles the correct deployment of portlet applications and their WAR files into HCL Portal and WebSphere Application Server. It uses the WebSphere Application Server management services for the physical deployment and management of WAR files in the WebSphere Application Server. Management of WAR files includes installing, removing, redeploying, starting, and stopping portlet applications.

In the WebSphere® Integrated Solutions Console, the portal Deployment Service is listed as **WP DeploymentService**.

!!!note "Notes"
    1.  The HCL Portal configuration is separated into two types:

        -   Deployed configuration. This type of configuration is read-only. The deployed configuration is always read from the file `portlet.xml`.
        -   Administrative configuration. This type of configuration is read and write.
    
        The deployed configuration can be modified by administrative changes, for example, by using administrative portlets or the XML configuration interface. The administrative configuration is never overwritten by changes to the deployed configuration.

    2.  Portlet applications appear in the Enterprise Application list on the WebSphere Integrated Solutions Console. However, do not manage them from outside the portal. Instead, manage them by using the portal administration portlets or the XML configuration interface of the portal. You recognize web applications that comprise a portlet application by their administrative name, also called the display name. It is shown in the WebSphere Integrated Solutions Console. You can identify the name of such a portlet application by a portal-specific identifier prefix PA\_<name\>. This identifier is appended to the name. An example for such a name is PA\_WPS\_Welcome. The name in turn is derived from the name of the WAR file when the portlet application is installed. You can change this administrative name with an update of the portlet application.

In the following list of properties, the values that are given in parentheses are the default values.

-   **was.admin.host = \(localhost\)**

    The WebSphere® Application Server administrative host name. This property is used to adapt to the WebSphere® Application Server bootstrap host name, if the default is not applicable.

-   **use.admin.user = \(true\)**

    Use this key to select between two user authentication mechanisms for the portal Portlet Deployment Manager to authenticate with the WebSphere® Application Server administrative services when portal security is enabled. Specify one of the following two possible values:

    -   **true**

        Use a single preset shared user ID for all portal administrative users who issue WAR deployment requests. This value is the default value. This user ID is a separate user ID that is common for all users who have the access rights to install or manage applications. You must register this user ID with WebSphere® Integrated Solutions Console User Administrator rights.

    -   **false**

        Use the actual user ID by which the administrator issues the WAR deployment request. Every portal user with portlet deployment rights must be added to the WebSphere® Integrated Solutions Console User list with administrator rights. Alternatively, you can add the complete group of portal administrators to the WebSphere® Integrated Solutions Console Group administrator rights.

-   **was.notification.timeout = \(900\)**

    Use this property to specify the timeout value \(in seconds\). It specifies how many seconds the deployment tasks waits for an application server event during the management of WAR files. This value may have to be increased on large portal installations.

-   **portletapp.starting.weight = \(100\)**

    Use this property to specify the value for the starting weight of the portlet applications \(war files\). To ensure the correct initialization sequence, this value must be higher than the starting weight of the portal itself.

-   **portletapp.shared.library.list**

    This property defines a list of library references that are added to each deployed WAR file during deployment. You can specify multiple references by separating them with commas \(**,**\). The library references must already be defined in the application server, and the JAR files must already be deployed at the location that is assigned in the reference definition.

-   **portletapp.reload.enabled = preserve**

    Use this property to define the value for the reload property of the deployed WAR file. This property can have the following values:

    -   **true**

        Specify this value to enable reloading mode for all WAR files. Use this value only for portlet development and portlet debugging purposes, but not for production environments.

    -   **false**

        Specify this value to disable reloading mode for all WAR files. This value is the default value.

    -   **preserve**

        When you specify this value, the setting from the file ibm-web-ext.xmi is applied, if available.

    The default setting is false.

    !!!note
        Do not enable reloading in a production environment. Enable reloading only for portlet development and portlet debugging purposes.

-   **discard.config.interval = \(60\)**

    This property defines the minimum time interval for which the configuration service workspace that is used during WAR file deployment is kept. After this time expires, the workspace is discarded when the portal runs the next deployment task. The unit of measure is minutes. Valid values are listed in the following, together with their meaning:

    -   **-1**

        Never discard the workspace.

    -   **0**

        Always discard the workspace immediately after the action that required the workspace was completed.

    -   **\> 0 \(numerical value greater than 0\)**

        Time interval \(in minutes\) for which a workspace is retained before it is discarded. It is then rebuilt for the next deployment task.

    !!!note "Notes"
        -   When you set this property, use good judgment. The proper use of this setting must be a compromise between performance and workspace consumption for the following reasons:
            -   Discarding the workspace frequently has a negative impact on deployment performance. The larger your portal installation is, the longer it takes to discard and rebuild the workspace to save the configuration changes during WAR file deployment.
            -   However, retaining a workspace keeps the `wp_xxx` temporary directories in the WebSphere® Application Server `wstemp` directory. Therefore, the temporary space that they occupy in the file system grows every time a WAR file is deployed and every time the portal is restarted.
        -   The configuration service workspace is not discarded immediately after expiry of the time interval that you set. The cleanup is done the next time that a deployment operation is called. It checks for expired changes and discards the workspace that they occupy. If further deployment operations occurred *after* the last time that the timer interval expired and the workspace was released, the changes in the last allocated workspace remain in the file system even on portal shutdown. Nevertheless, the previous cleanup reduces the volume of occupied disk space to only those temporary files that were processed after the last cleanup interval.

The following property protects deployment settings that users modified by using the WebSphere Integrated Solutions Console during WAR update through web module administration in the portal.

-   **protect.deployment.attributes = \(false\)**

    Use this property to decide whether you want to have existing web module attributes of a deployed portlet WAR file overwritten with future portal updates or not. Portal deployment functions observe the values that are defined for this service during updates of a WAR file. However, a user can later modify the attributes of a deployed WAR by scripting or by using the WebSphere® Integrated Solutions Console. For example, the user can modify the sequence by which class loaders are loaded for an individual WAR file. You can use this property to protect such modifications and prevent them from being overwritten by the portal web module deployment function. Valid values are as follows:

    -   **false**

        If you do not want to protect WAR file modifications, specify `false`. This value is the default value.

    -   **true**

        To protect modifications to WAR files, specify `true`.


**File location definitions:** The following values define file locations. All these settings have default values. Enable or modify them only if the defaults are not appropriate.

-   **delete.temp.files = \(true\)**

    This property determines whether temporary files that were created during deployment in the directory application.repository.dir.name/temp are deleted or kept. The default is true, which means that the files are deleted. Change the value to false only for debugging purposes so that you can view the content of the temporarily expanded WAR files. When you complete debugging, change the value back to true and delete the directories manually. If you change the value to false, be aware that the hard disk drive space required by the temporary directory grows with each WAR file that you add or update.

-   **shorten.deployment.names = \(true\)**

    Use this key to enforce shorter file names during deployment. Some platforms, such as Windows™ impose a limit to the length of a file path. File paths that are too long can cause deployment to fail if the resulting path is too long.

-   **deployment.names.limit = \(21\)**

    This value is the threshold value for portlet application file and display names. Longer names are shortened if required.


The following setting is for debug purposes only. Enable it only when instructed to do so by support personnel.

-   **deployment.debug.log.times = \(false\)**

    This setting is for debug purposes only. Enable it only when instructed to do so by support personnel.



