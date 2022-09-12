# Portal server performance tuning tool

Run the performance tuning tool on a new deployment to tune the servers that are based on performance recommendations.

!!!note
    The performance tuning tool does not tune the database, the LDAP user registry, the web servers, or the operating system. In a clustered environment, it tunes only the cluster members. For advanced tuning, refer to the performance tuning guides.

## Properties files

If necessary, modify the following properties files before you run the tune-initial-portal-performance task:

!!!note "Remember"
    Review the [HCL Digital Experience Performance Tuning Guide](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0074411) for information first. Before you modify the properties files, make a local copy of the PortalServer_root\installer\wp.config\config\TuningTask directory. Modify the files in the local copy. Then, add the -DTuningPropertiesDirectory=local_dir_path parameter to the tune-initial-portal-performance task.

-   PortalServer_root\installer\wp.config\config\TuningTask\tuning.properties
-   PortalServer_root\installer\wp.config\config\TuningTask\portalCacheManagerService.properties
-   PortalServer_root\installer\wp.config\config\TuningTask\portal\CommonComponentConfigService.properties
-   PortalServer_root\installer\wp.config\config\TuningTask\portal\ConfigService.properties
-   PortalServer_root\installer\wp.config\config\TuningTask\portal\CPConfigurationService.properties
-   PortalServer_root\installer\wp.config\config\TuningTask\portal\NavigatorService.properties
-   PortalServer_root\installer\wp.config\config\TuningTask\portal\RegistryService.properties
-   PortalServer_root\installer\wp.config\config\TuningTask\portal.8\VirtualPortalConfigService.properties
-   PortalServer_root\installer\wp.configconfig\TuningTask\wcm\WCMConfigService.properties
-   PortalServer_root\installer\wp.config\config\TuningTask\authoring\AccessControlDataManagementService.properties

!!!note:
    Starting with CF02, you can add the -DAuthoringServer parameter to the tune-initial-portal-performance task. Set this parameter to either true or false. Setting this parameter to true turns off the HCL Web Content Manager advanced cache feature and any tuning features that are specific to a Subscriber server.

## Stand-alone and clustered environments

Use the following syntax to run the tune-initial-portal-performance task on a stand-alone or clustered environment:

!!!note "Before you run the task"
    Open a command prompt and change to the wp_profile_root/ConfigEngine directory.

!!!note
    In a clustered environment, run this task on each clustered node.

-   Linux™: `./ConfigEngine.sh tune-initial-portal-performance -DWasPassword=password -DPortalAdminPwd=password -DTuningPropertiesDirectory=local_dir_path`
-   Windows™: `ConfigEngine.bat tune-initial-portal-performance -DWasPassword=password -DPortalAdminPwd=password -DTuningPropertiesDirectory=local_dir_path`

## Vertical cluster member servers

Use the following syntax to run the tune-initial-portal-performance task on vertical cluster members:

!!!note "Before you run the task"
    Open a command prompt and change to the wp_profile_root/ConfigEngine directory.

!!!note
    Run this task on each vertical cluster member on each node in the cluster.

-   Linux™ : `./ConfigEngine.sh tune-initial-portal-performance -DServerName=vertical_cluster_servername -DWasPassword=password -DPortalAdminPwd=password -DTuningPropertiesDirectory=local_dir_path`
-   Windows: `ConfigEngine.bat tune-initial-portal-performance -DServerName=vertical_cluster\ -DWasPassword=password -DPortalAdminPwd=password -DTuningPropertiesDirectory=local_dir_path`

**Related information**  
[Automatically clearing your cache entry](../../../manage_content/pzn/pzn_programming_ref/resource_cache/pzn_auto_cache.md)

