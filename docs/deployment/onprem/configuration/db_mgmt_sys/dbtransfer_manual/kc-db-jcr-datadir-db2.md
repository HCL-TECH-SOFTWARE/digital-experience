# Database transfer: Set up the data and index directory for JCR collation

Manual steps from the Configuration Wizard are included in HCL Digital Experience Product Documentation for reference and for advanced users. The procedure includes variables and steps for different databases. When you use the wizard to configure your deployment, it replaces the variable with information that you provided in the wizard. It also shows only the steps that are specific to your environment. The instructions that the wizard generates are specific to your environment.

**Attention:** All steps for all database environments are included without consideration for your environment. Use the Configuration Wizard to generate custom instructions for your environment.

Create the data directory, `data`, and the index directory, `index`, on your database server

1.  Create the `data` directory in the following location:

    `&dbpath/$\{jcr.DbName\}/data/``&dbpath/jcr.DbName/data/`

2.  Create the `index` directory in the following location:

    `&dbpath/$\{jcr.DbName\}/index/``&dbpath/jcr.DbName/index/`



