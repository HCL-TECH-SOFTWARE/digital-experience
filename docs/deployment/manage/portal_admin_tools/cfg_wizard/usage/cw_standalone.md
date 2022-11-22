---
id: cw_standalone
title: Set up a stand-alone server
---

# Configuration Wizard: Set up a stand-alone server

Use the Configuration Wizard to set up a stand-alone server. A stand-alone server is useful for different environments, such as a content authoring environment, test environment, and more.

## Before you begin
Roadmaps provide an overview of the steps that are required for common environment configurations. Select the roadmap that is most like the environment that you want to set up. See [HCL Digital Experience roadmaps for stand-alone servers](../../../../../get_started/plan_deployment/traditional_deployment/roadmaps/rm_install_deployment/rm_standalone_servers/rm_standalone_parent.md) for more information.

## About this task
Use your selected roadmap and the Configuration Wizard to complete a new environment set up.

## Procedure
1. Select the roadmap that is most like the configuration that you need to configure.

2. Access the Configuration Wizard. Go to http://your_server:10200/hcl/wizard.

    !!!restriction
        There is a known issue with Chrome version 45.x and the Configuration Wizard. If you are experiencing difficulties, use a different browser when you access the wizard.

3. Log in to the Configuration Wizard with the administrative ID for the configuration wizard profile, cw_profile.

    !!!note
        The wizard user interface might not be available in all languages. If the language is not currently supported, you might see the English version. For details on the supported languages for all of the HCL Digital Experience user interfaces, see [Language Support](../../../../../extend_dx/development_tools/portal_admin_tools/language_support/index.md).

4. Click **Set Up a Stand-alone Server**.

5. Complete each sub step in the order that is shown in the wizard. Use the Configuration Wizard in conjunction with your selected Roadmap.

???+ info "Related concepts"
    -   [Database Management Systems](../../../../../deployment/manage/db_mgmt_sys/index.md)
    -   [Enable federated security](../../../../../deployment/manage/security/user_registry/cw_ldap.md)

???+ info "Related tasks" 
    -   [Accessing the Configuration Wizard](../../../portal_admin_tools/cfg_wizard/configuration/cw_run.md)
    -   [Updating DB2 self-tuning memory manager (STMM) settings](../../../../../deployment/manage/migrate/next_steps/post_mig_activities/db_task/mig_t_post_db2_stmm.md)

