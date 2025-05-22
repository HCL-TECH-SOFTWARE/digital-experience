# How to improve query performance for WCM queries

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

This document describes tuning tips to improve the performance of Web Content Manager (WCM) queries in HCL Digital Experience (DX).

## Instructions

To reduce your query time, refer to the following options you can try:

1. Run the `runstats` and `reorg` commands on the database, preferably with DX server not running. For more information on these commands, refer to the [HCL DX Performance Tuning Guides](../../performance_tuning/index.md).

2. Isolate the query in a JCR trace using the following command:

    ```
    com.ibm.icm.da.portable.common.sql.*=all
    ```

    Run the query from a database client instead of DX server while the database administrator analyzes the query implementation on the database side. They can advise if creating or deleting indexes or modifying database config will help. Using this trace string will help isolate the query in the trace.

3. Modify the portal configuration in accordance with DX and WCM the tuning guides:

    - [Web content maintenance](https://help.hcl-software.com/digital-experience/8.5/admin-system/web-content-maintenance.html){target="_blank"}  
    - [Portal server performance tuning tool](../../../deployment/manage/tune_servers/wp_tune_tool.md)
    - [HCL DX Performance Tuning Guides](../../performance_tuning/index.md)

4. Reduce the size of the WCM database. Delete un-needed content/libraries. Run clearVersions to prune un-needed versions.

5. There are multiple query hints to the Oracle optimizer that can dramatically reduced query times for some queries. These hints should be added to `icm.properties` in DX 8.0.0.x and below. For DX 8.5.x and above, they should be added to the Resource Environment provider `JCR ConfigService PortalContent` using the WebSphere Application Server Integrated Solutions Console (WAS admin console).

    In the WebSphere Application Server Integrated Solutions Console under `Resources > Resource Environment provider > JCR ConfigService PortalContent` add a new custom property with name:  

    ```
    jcr.query.predicate.hint.optimization.info
    ```

    Add the following as value of this property:

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

???+ info "Related information"
    - [Disabling Workflow Actions](../../../manage_content/wcm_configuration/wcm_svc_cfg/wcm_config_disable_actions.md)