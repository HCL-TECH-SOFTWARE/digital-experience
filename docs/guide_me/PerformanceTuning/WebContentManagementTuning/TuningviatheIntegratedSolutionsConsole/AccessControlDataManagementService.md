# Access Control Data Management Service

By using the loadRolesParentBased algorithm in our authoring environment, an approximate 70% improvement in capacity was seen in performance benchmarks.

The `loadRolesParentBased` setting changes the loading algorithm for the `ROLE_INST` and `LNK_USER_ROLE` tables in the database. Instead of loading all assigned roles for a specific principal, only the currently requested access control data is loaded and cached. This is beneficial to a dynamic type of workload like authoring where there are many items being created and deleted that require cache updates. Be aware that this setting may increase database load since fewer items will be cached so be sure that your database server has spare capacity before setting.

## How to Set

In the WebSphere Integrated Solutions Console
Resources -> Resource Environment -> Resource Environment Providers -> WP
AccessControlDataManagementService -> Custom properties
Alternatively, the cache settings can be set in the AccessControlDataManagementService.properties file
and updated via the ConfigEngine.

|Parameter |Default Value|Value Used|
|----------|-------------|----------|
|accessControlDataManagement.acucIgnoreResourceTypes |n/a |null <br> (value should be the string “null”, not blank)|
|accessControlDataManagement.loadRolesParentBased |false |true|

!!! note
    Use the loadRolesParentBased setting in WCM authoring environments only. Leave the default false value in rendering environments. 
    Setting accessControlDataManagement.acucIgnoreResourceTypes can interfere with strict access controls in environments where role assignments change based on workflow stage.