# How to improve query performance for Portal / WCM queries?

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

This document describes tuning hints to get a better performance of WCM queries in HCL Digital Experience.

## Instructions

Some options for reducing query time:

1. Run runstats/reorg on the database, preferably with Portal server not running. Search for the term "runstats" and "reorg" in the V8 Tuning Guide (see link below).

2. Isolate the query in a JCR trace. Run the query from a database client instead of Portal server while the DBA analyzes the query implementation on the database side. They can advise if creating or deleting indexes or modifying database config will help. Using this trace string will help isolate the query in the trace:

      `com.ibm.icm.da.portable.common.sql.*=all`

3. The DBA can recommend a query "hint" that can dramatically reduce the prepare time for the query on the database server side. For more details, please check step 6.

4. Modify the portal configuration in accordance with Portal/WCM the tuning guides:

    [Web content maintenance](https://help.hcl-software.com/digital-experience/8.5/admin-system/web-content-maintenance.html)  
    [Portal server performance tuning tool](https://help.hcl-software.com/digital-experience/9.5/latest/deployment/manage/tune_servers/wp_tune_tool/)  
    [HCL DX Performance Tuning Guide](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0074411)  

5. Reduce the size of the WCM database. Delete un-needed content/libraries. Run clearVersions to prune un-needed versions.

6. There are multiple query hints to the Oracle optimizer that can dramatically reduced query times for some queries. These hints should be be added to icm.properties in Portal 8.0.0.x and below. For Portal 8.5.x and above, they should be added to the Resource Environment provider `JCR ConfigService PortalContent` via Dmgr or WAS Admin console.

Add this new entry under custom properties:

   `jcr.query.predicate.hint.optimization.info`

Value:

```text
   [icm:label,,,opt_param(''_optimizer_squ_bottomup'',''FALSE'') leading({2})
   use_nl({1})][ibmcontentwcm:projectState,,,opt_param(''_optimizer_squ_bottomup'',''FALSE'')
   leading({2})
   use_nl({1})][ibmcontentwcm:projectUuid,,,opt_param(''_optimizer_squ_bottomup'',''FALSE'')
   leading({2})
   use_nl({1})][ibmcontentwcm:categoriesUuids,,,opt_param(''_optimizer_squ_bottomup'',''FALSE'')
   leading({2})
   use_nl({1})][ibmcontentwcm:reference,,,opt_param(''_optimizer_squ_bottomup'',''FALSE'')
   leading({2})
   use_nl({1})][ibmcontentwcm:authoringTemplateUuid,*,*,opt_param(''_optimizer_squ_bottomup'',''FALSE'')
   leading({2})
   use_nl({1})][ibmcontentwcm:libraryUuid,*,*,opt_param(''_optimizer_squ_bottomup'',''FALSE'')
   leading({2}) use_nl({1})]
```

Please also check: [Disabling Workflow Actions](https://help.hcl-software.com/digital-experience/9.5/latest/manage_content/wcm_configuration/wcm_svc_cfg/wcm_config_disable_actions/)
