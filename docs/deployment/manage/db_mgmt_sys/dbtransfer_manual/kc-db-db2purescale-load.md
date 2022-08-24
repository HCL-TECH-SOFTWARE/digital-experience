# Database transfer: Enable the DB2 pureScale load balancing feature

Manual steps from the Configuration Wizard are included in HCL Digital Experience Product Documentation for reference and for advanced users. The procedure includes variables and steps for different databases. When you use the wizard to configure your deployment, it replaces the variable with information that you provided in the wizard. It also shows only the steps that are specific to your environment. The instructions that the wizard generates are specific to your environment.

**Attention:** All steps for all database environments are included without consideration for your environment. Use the Configuration Wizard to generate custom instructions for your environment.

This step applies only to DB2® pureScale.

For multithreaded Java applications, set enableSysplexWLB to true in the connection string to use the transaction level workload balancing feature for DB2 pureScale. As more members are started, clients automatically route to the new member without any interruption of service. Members can be stopped without the application knowing.

1.  Access the WebSphere® Integrated Solutions Console. Go to http://host\_name:your\_server\_admin\_port/ibm/console/. For example, go to http://host\_name:10038/ibm/console/.

2.  Click **Resources** \> **JDBC** \> **Data Sources**.

3.  Click **Data sources** \> **data source name** \> **Custom properties**.

4.  Search for enableSysplexWLB.

5.  Click **enableSysplexWLB**, and enter true in the **Value** field.

6.  Click **OK**.



