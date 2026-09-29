# How to optimize WCM authoring performance

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

Improving Web Content Manager (WCM) authoring performance in HCL Digital Experience (DX) involves optimizing database maintenance, configuration settings, and content design. This article describes how to identify and resolve WCM items causing performance issues in HCL DX.

## Instructions

To identify and resolve WCM items causing performance issues in HCL DX, perform the following tasks:

### Optimizing database and page configurations

- Verify that database `runstats` and `reorg` tasks complete at least weekly. DB2 catalog statistics and physical table organization directly affect performance. Execute the `runstats` command on the JCR database before and after syndication to recalculate statistics following heavy data modifications. Refer to database performance documentation for details on using the `runstats` task.

    !!!note
        Due to the heavy load of computing statistics, schedule this maintenance during off-peak hours, periods of low demand, or while the portal is offline.

- Verify that no custom themes or theme profiles are assigned to the authoring page.

### Managing versions and WCM libraries

- Verify that versioningStrategy is configured correctly according to system requirements. For more information refer to [Web Content Manager configuration service](../../../manage_content/wcm_configuration/wcm_svc_cfg/srvcfgwcmref_config.md).
- Run the clearVersions utility to remove unneeded content versions. For more information, refer to [Clearing version history](../../../manage_content/wcm_configuration/wcm_adm_tools/wcm_admin_clear_versions.md).
- Delete any WCM libraries that are no longer required.

### Tracing queries and setting authoring options

- Collect the following trace when executing long-running authoring queries: `com.ibm.icm.da.portable.common.sql.*=all`
  - Search trace files for `time to execute` to identify long-running queries.
  - Use the UUID to locate the content generating the query, then adjust the design to request less data.
  - If the design cannot be changed, run the query directly from a database client and consult a database administrator to optimize execution time.
- Set `workflow.skipDefaultManagerAccess` to true to prevent automatic manager-level access creation during artifact generation or editing. For more information, refer to [Web content authoring options](../../../manage_content/wcm_configuration/cfg_webcontent_auth_env/wcm_config_prop_authoring.md).
