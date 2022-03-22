# DB2 worksheet: Transfer to a single database

When you use the database transfer option, you can select the condition to create a single database in the Configuration Wizard. This worksheet highlights the fields and properties that you see in the Configuration Wizard when you select the single database condition.

When you use the database transfer option, you answer questions about your environment. Some fields are required. Other fields are required or removed based on your selections for environment conditions.

## Typical fields

The following table lists the typical fields that display when you select the option to transfer your data to a single database. To see additional fields that apply to an advanced configuration, click **Advanced**.

Values that you enter for some typical fields apply across domains. Rather than entering a value multiple times, this value is copied to fields in the Advanced view and applied across the database domains.

|Field Label|Property|Condition|Your Value|
|-----------|--------|---------|----------|
|**Database name**|The value that you enter is copied to fields in the Advanced view for the dbdomain.DbName properties.| | |
|**Data source**|The value that you enter is copied to fields in the Advanced view for the dbdomain.DataSourceName properties.| | |
|**Database URL**|The value that you enter is copied to fields in the Advanced view for the dbdomain.DbUrl properties.| | |
|**Configuration user ID**|The value that you enter is copied to fields in the Advanced view for the dbdomain.DbUser properties.| | |
|**Configuration password**|The value that you enter is copied to fields in the Advanced view for the dbdomain.DbPassword properties.| | |
|**Database administrator ID**|The value that you enter is copied to fields in the Advanced view for the dbdomain.DBA.DbUser properties.| | |
|**Database administrator password**|The value that you enter is copied to fields in the Advanced view for the dbdomain.DBA.DbPassword properties.| | |
|**Runtime user**|The value that you enter is copied to fields in the Advanced view for the dbdomain.DbRuntimeUser properties.|To see this field, continue to use the default selection of **Yes** for needing a runtime database user for day-to-day operations.| |
|**Runtime password**|The value that you enter is copied to fields in the Advanced view for the dbdomain.DbRuntimeDbRuntimePassword properties.|To see this field, continue to use the default selection of **Yes** for needing a runtime database user for day-to-day operations.| |
|**IBM DB2 library**|Db2.DbLibrary| | |

## Field used for the database collation condition

Database collation is an optional condition available to you.

|Field Label|Property|Conditions|Your Value|
|-----------|--------|----------|----------|
|**Temporary directory to be used for collation**| |To see this field, you must select the **Yes** option for advanced database collation support. The default selection is **No**.

| |

