# Oracle worksheet: Transfer your database

This worksheet highlights the fields and properties that you see in the Configuration Wizard when you use the transfer database option.

When you use the database transfer option, you answer questions about your environment. Some fields are required. Other fields are required or removed based on your selections for environment conditions.

## Typical fields

The following table lists the required fields that display when you select the database transfer option. To see additional fields that apply to an advanced configuration, click **Advanced**.

**Important:** To successfully complete the database transfer, the Oracle Thin Type-4 JDBC is required for Linux™.

|Field Label|Property|Condition|Your Value|
|-----------|--------|---------|----------|
|**Database name**|This field corresponds to the dbdomain.DbName properties in the wkplc\_dbdomain.properties file.| | |
|**Data source**|This field corresponds to the dbdomain.DataSourceName properties in the wkplc\_dbdomain.properties file.| | |
|**Database URL**|This field corresponds to the dbdomain.DbUrl properties in the wkplc\_dbdomain.properties file.| | |
|**Database home directory**| | | |
|**Configuration user ID**|This field corresponds to the dbdomain.DbUser properties in the wkplc\_dbdomain.properties file.| | |
|**Configuration password**|This field corresponds to the dbdomain.DbPassword properties in the wkplc\_dbdomain.properties file.| | |
|**Database administrator ID**|This field corresponds to the dbdomain.DBA.DbUser properties in the wkplc\_dbdomain.properties file.| | |
|**Database administrator password**|This field corresponds to the dbdomain.DBA.DbPassword properties in the wkplc\_dbdomain.properties file.| | |
|**Runtime user**|This field corresponds to the dbdomain.DbRuntimeUser properties in the wkplc\_dbdomain.properties file.|To see this field, continue to use the default selection of **Yes** for needing a runtime database user for day-to-day operations.| |
|**Runtime password**|This field corresponds to the dbdomain.DbRuntimeDbRuntimePassword properties in the wkplc\_dbtype.properties file.| |
|**Oracle Database library**|oracle.DbLibrary| | |


