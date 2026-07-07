# How to identify WCM items causing performance issues

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

This document describes hints and tips for improving the WCM Authoring Performance in HCL Digital Experience.

## Instructions

1. Verify runstats/reorg is completed on the database at least weekly. Improving the performance of your database can help avoid these situations. For example, two of the database attributes that DB2 relies upon to perform optimally are the database catalog statistics and the physical organization of the data in the tables. Catalog statistics must be recomputed periodically during the life of the database, particularly after periods of heavy data modifications (inserts, updates, and deletes) such as a population phase. To fix this, you must run "Runstats" on the JCR database before and after syndication. The DB2 runstats command is used to count and record the statistical details about tables, indexes, and columns. See database performance for information on using the "Runstats" task. 

!!! note
Due to the heavy load of computing these statistics, it is recommend that this maintenance occurs during off hours, periods of low demand, or when the Portal is offline.

2. Verify no custom themes or theme profiles are in use for the authoring page

3. Verify versioningStrategy is set correctly per customer requirements. See: [Web Content Manager configuration service](https://help.hcl-software.com/digital-experience/9.5/latest/manage_content/wcm_configuration/wcm_svc_cfg/srvcfgwcmref_config/)

4. Use clearVersions utility to reduce the number of any un-needed existing versions. See: [Clearing version history](https://help.hcl-software.com/digital-experience/9.5/latest/manage_content/wcm_configuration/wcm_adm_tools/wcm_admin_clear_versions/)

5. Manually delete any WCM Libraries no longer required.

6. Collect this trace when executing long-running authoring query: `com.ibm.icm.da.portable.common.sql.*=all`

- Search the trace files for `time to execute` and identify the query that takes the longest time to execute.
- Use the UUID to find the content that generates this query.  Review the design to see if it can be changed to request less data from the database.
- If the content can't be changed to reduce the data retrieved, run that query from a DB client. Work with your DBA to reduce query execution time

7. Preventing automatic manager-level access when artifacts are created
- Ensure that the workflow.skipDefaultManagerAccess property is set to true to prevent creating manager-level access rights when artifacts are created or edited. This property improves performance. See: [Web content authoring options](https://help.hcl-software.com/digital-experience/9.5/latest/manage_content/wcm_configuration/cfg_webcontent_auth_env/wcm_config_prop_authoring/)
