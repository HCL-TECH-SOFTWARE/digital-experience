# Database source configuration

The rule-based user groups adapter uses a Java data source to communicate with the database that holds the table for the rule-based groups.

You must define a data source that references the required JDBC driver and points to the database that contains the groups table. For information about how to configure a data source, see the related links section.

Create the data source and, if you have a portal cluster environment, map it to the cluster scope.

Before you continue with the next configuration step, run the **Test connection** operation in the WebSphere® Integrated Solutions Console and make sure that it runs successfully. Configure the rule-based user groups adapter later with the JNDI name of the data source. See the related links section for information.


**Related information**  


[Configuring a data source using the administrative console](https://www.ibm.com/docs/en/was-nd/9.0.5?topic=mrifrc-configuring-property-extension-repository-in-federated-repository-configuration)

[Configuring the VMM rule-based groups repository](/digital-experience/deployment/manage/security/people/authorization/users_and_groups/rule_based_user_groups/cfg_rule_based_user_groups/cfg_vmm_rule_based_groups_repo/)

[Configuring the VMM repository and realm](/digital-experience/deployment/manage/security/people/authorization/users_and_groups/rule_based_user_groups/cfg_rule_based_user_groups/cfg_vmm_rule_based_groups_repo/rbug_cfg_vmm_rps_rlm)



