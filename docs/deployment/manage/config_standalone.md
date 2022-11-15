# Configuring a stand-alone server

Use the Configuration Wizard to configure a stand-alone server. A stand-alone server is useful for different environments, such as a content authoring environment, test environment, and more. Installation of a stand-alone server is covered elsewhere in this documentation.

Roadmaps provide an overview of the steps that are required for common environment configurations. Select the roadmap that is most like the environment that you want to set up.

Use your selected roadmap and the Configuration Wizard to complete a new environment set up.

1.  Select the roadmap that is most like the configuration that you need to configure.

2.  Access the Configuration Wizard. Go to http://your_server:10200/hcl/wizard.
    
    !!!note
        If working with HCL Digital Experience 8.5 or 9 software level prior to CF18, the wizard address will be: http://your_server:10200/ibm/wizard. After installing CF18, the configuration wizard will automatically be adjusted to http://your_server:10200/hcl/wizard.

    !!!note "Restriction"
        There is a known issue with Chrome version 45.x and the Configuration Wizard. If you are experiencing difficulties, use a different browser when you access the wizard.

3.  Log in to the Configuration Wizard with the administrative ID for the configuration wizard profile, `cw_profile`.
    
    !!!note
        The wizard user interface might not be available in all languages. If the language is not currently supported, you might see the English version. For details on the supported languages for all of the HCL Digital Experience user interfaces, see [Language support](../../extend_dx/development_tools/portal_admin_tools/language_support/index.md).

4.  Click **Set Up a Stand-alone Server**.

5.  Complete each sub step in the order that is shown in the wizard.

    Use the Configuration Wizard in conjunction with your selected roadmap.

???+ info "Related information"  
    -   [HCL Digital Experience roadmaps for stand-alone servers](../../get_started/plan_deployment/traditional_deployment/roadmaps/rm_install_deployment/rm_standalone_servers/rm_standalone_parent.md)
    -   [DB2 z/OS: Database transfer](../manage/db_mgmt_sys/dbtransfer_zOS/index.md)
    -   [Enable federated security](../manage/security/user_registry/cw_ldap.md)
    -   [Accessing the Configuration Wizard](../../extend_dx/development_tools/portal_admin_tools/cfg_wizard/configuration/cw_run.md)
    -   [Updating DB2 self-tuning memory manager (STMM settings](../manage/migrate/next_steps/post_mig_activities/mig_post_cf.md)

