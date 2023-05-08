# DB2 Auto Maintenance

For performance benchmarks in our WCM authoring enviornments, automatic maintenance was also
turned off using the command db2 update db cfg for <jcrdb> using auto_maint off. Maintenance was
disabled to ensure that no database statistics or table reorganizations were performed during the measurement. This setting is not recommended for production. When using automatic maintenance, consider configuring the database to only run during periods of low load.