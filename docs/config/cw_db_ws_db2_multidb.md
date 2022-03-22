# DB2 worksheet: Transfer to multiple databases

When you use the database transfer option, you can use the condition to create multiple databases in the Configuration Wizard. This condition is selected by default. This worksheet highlights the fields and properties that you see in the Configuration Wizard when you use the multiple databases condition.

When you use the database transfer option, you answer questions about your environment. Some fields are required. Other fields are required or removed based on your selections for environment conditions.

## Typical fields

The following table lists the typical fields that display when you select the condition to transfer your data to multiple databases. To see additional fields that apply to an advanced configuration, click **Advanced**.

Depending on the conditions that you select, values that you enter for some typical fields might apply across domains. Rather than entering a value multiple times, this value is copied to fields in the Advanced view and applied across the database domains.

|Field Label|Property|Conditions|Your Value|
|-----------|--------|----------|----------|
|**Release database name**|release.DbName| | |
|**Release data source**|release.DataSourceName| | |
|**Release database URL**|release.DbUrl| | |
|**Community database name**|community.DbName| | |
|**Community data source**|community.DataSourceName| | |
|**Community database URL**|community.DbUrl| | |
|**Customization database name**|customization.DbName| | |
|**Customization Data source**|customization.DataSourceName| | |
|**Customization database URL**|customization.DbUrl| | |
|**JCR database URL**|JCR.DbName| | |
|**JCR database name**|JCR.DataSourceName| | |
|**JCR data source**|JCR.DbUrl| | |
|**Feedback database name**|feedback.DbName| | |
|**Feedback data source**|feedback.DataSourceName| | |
|**Feedback database URL**|feedback.DbUrl| | |
|**LikeMinds Database name**|likeminds.DbName| | |
|**LikeMinds data source**|likeminds.DataSourceName| | |
|**LikeMinds database URL**|likeminds.DbUrl| | |
|**IBM DB2 library**|Db2.DbLibrary| | |
|**Configuration user ID**|The value that you enter is copied to fields in the Advanced view for the dbdomain.DbUser properties.|To see this field, continue to use the **Yes** selection for using the same user ID and passwords across portal database domains.| |
|**Configuration password**|The value that you enter is copied to fields in the Advanced view for the dbdomain.DbPassword properties.|To see this field, continue to use the **Yes** selection for using the same user ID and passwords across portal database domains.| |
|**Database administrator ID**|The value that you enter is copied to fields in the Advanced view for the dbdomain.DBA.DbUser properties.|To see this field, continue to use the **Yes** selection for using the same user ID and passwords across portal database domains.| |
|**Database administrator password**|The value that you enter is copied to fields in the Advanced view for the dbdomain.DBA.DbPassword properties.|To see this field, continue to use the **Yes** selection for using the same user ID and passwords across portal database domains.| |
|**Release configuration user**|release.DbUser|To see this field, select **No** for using the same user ID and passwords across portal database domains.| |
|**Release configuration password**|release.DbPassword|To see this field, select **No** for using the same user ID and passwords across portal database domains.| |
|**Release database administrator**|release.DBA.DbUser|To see this field, select **No** for using the same user ID and passwords across portal database domains.| |
|**Release database administrator password**|release.DBA.DbPassword|To see this field, select **No** for using the same user ID and passwords across portal database domains.| |
|**Community configuration user**|community.DbUser|To see this field, select **No** for using the same user ID and passwords across portal database domains.| |
|**Community configuration password**|community.DbPassword|To see this field, select **No** for using the same user ID and passwords across portal database domains.| |
|**Community database administrator**|community.DBA.DbUser|To see this field, select **No** for using the same user ID and passwords across portal database domains.| |
|**Community database administrator password**|community.DBA.DbPassword|To see this field, select **No** for using the same user ID and passwords across portal database domains.| |
|**Customization configuration user**|customization.DbUser|To see this field, select **No** for using the same user ID and passwords across portal database domains.| |
|**Customization configuration password**|customization.DbPassword|To see this field, select **No** for using the same user ID and passwords across portal database domains.| |
|**Customization database administrator**|customization.DBA.DbUser|To see this field, select **No** for using the same user ID and passwords across portal database domains.| |
|**Customization database administrator password**|customization.DBA.DbPassword|To see this field, select **No** for using the same user ID and passwords across portal database domains.| |
|**JCR configuration user**|jcr.DbUser|To see this field, select **No** for using the same user ID and passwords across portal database domains.| |
|**JCR configuration password**|jcr.DbPassword|To see this field, select **No** for using the same user ID and passwords across portal database domains.| |
|**JCR database administrator**|jcr.DBA.DbUser|To see this field, select **No** for using the same user ID and passwords across portal database domains.| |
|**JCR database administrator password**|jcr.DBA.DbPassword|To see this field, select **No** for using the same user ID and passwords across portal database domains.| |
|**Feedback configuration user**|feedback.DbUser|To see this field, select **No** for using the same user ID and passwords across portal database domains.| |
|**Feedback configuration password**|feedback.DbPassword|To see this field, select **No** for using the same user ID and passwords across portal database domains.| |
|**Feedback database administrator**|feedback.DBA.DbUser|To see this field, select **No** for using the same user ID and passwords across portal database domains.| |
|**Feedback database administrator password**|feedback.DBA.DbPassword|To see this field, select **No** for using the same user ID and passwords across portal database domains.| |
|**LikeMinds configuration user**|likeminds.DbUser|To see this field, select **No** for using the same user ID and passwords across portal database domains.| |
|**LikeMinds configuration password**|likeminds.DbPassword|To see this field, select **No** for using the same user ID and passwords across portal database domains.| |
|**LikeMinds database administrator**|likeminds.DBA.DbUser|To see this field, select **No** for using the same user ID and passwords across portal database domains.| |
|**LikeMinds database administrator password**|likeminds.DBA.DbPassword|To see this field, select **No** for using the same user ID and passwords across portal database domains.| |
|**Runtime user**|The value that you enter is copied to fields in the Advanced view for the dbdomain.DbRuntimeUser properties.|To see this field:-   Continue to use the **Yes** selection for using the same user ID and passwords across portal database domains.
-   Continue to use the default selection of **Yes** for needing a runtime database user for day-to-day operations.

| |
|**Runtime password**|The value that you enter is copied to fields in the Advanced view for the dbdomain.DbRuntimeDbRuntimePassword properties.|To see this field:-   Continue to use the **Yes** selection for using the same user ID and passwords across portal database domains.
-   Continue to use the default selection of **Yes** for needing a runtime database user for day-to-day operations.

| |
|**Release runtime user**|release.DbRuntimeUser|To see this field:-   Select **No** for using the same user ID and passwords across portal database domains.
-   Continue to use the default selection of **Yes** for needing a runtime database user for day-to-day operations

| |
|**Release runtime password**|release.DbRuntimePassword|To see this field:-   Select **No** for using the same user ID and passwords across portal database domains.
-   Continue to use the default selection of **Yes** for needing a runtime database user for day-to-day operations

| |
|**Community runtime user**|community.DbRuntimeUser|To see this field:-   Select **No** for using the same user ID and passwords across portal database domains.
-   Continue to use the default selection of **Yes** for needing a runtime database user for day-to-day operations

| |
|**Community runtime password**|community.DbRuntimePassword|To see this field:-   Select **No** for using the same user ID and passwords across portal database domains.
-   Continue to use the default selection of **Yes** for needing a runtime database user for day-to-day operations

| |
|**Customization runtime user**|customization.DbRuntimeUser|To see this field:-   Select **No** for using the same user ID and passwords across portal database domains.
-   Continue to use the default selection of **Yes** for needing a runtime database user for day-to-day operations

| |
|**Customization runtime password**|customization.DbRuntimePassword|To see this field:-   Select **No** for using the same user ID and passwords across portal database domains.
-   Continue to use the default selection of **Yes** for needing a runtime database user for day-to-day operations

| |
|**JCR runtime user**|jcr.DbRuntimeUser|To see this field:-   Select **No** for using the same user ID and passwords across portal database domains.
-   Continue to use the default selection of **Yes** for needing a runtime database user for day-to-day operations

| |
|**JCR runtime password**|jcr.DbRuntimePassword|To see this field:-   Select **No** for using the same user ID and passwords across portal database domains.
-   Continue to use the default selection of **Yes** for needing a runtime database user for day-to-day operations

| |
|**Feedback runtime user**|feedback.DbRuntimeUser|To see this field:-   Select **No** for using the same user ID and passwords across portal database domains.
-   Continue to use the default selection of **Yes** for needing a runtime database user for day-to-day operations

| |
|**Feedback runtime password**|feedback.DbRuntimePassword|To see this field:-   Select **No** for using the same user ID and passwords across portal database domains.
-   Continue to use the default selection of **Yes** for needing a runtime database user for day-to-day operations

| |
|**LikeMinds runtime user**|likeminds.DbRuntimeUser|To see this field:-   Select **No** for using the same user ID and passwords across portal database domains.
-   Continue to use the default selection of **Yes** for needing a runtime database user for day-to-day operations

| |
|**LikeMinds runtime password**|likeminds.DbRuntimePassword|To see this field:-   Select **No** for using the same user ID and passwords across portal database domains.
-   Continue to use the default selection of **Yes** for needing a runtime database user for day-to-day operations

| |

## Field used for the database collation condition

Database collation is an optional condition available to you.

|Field Label|Property|Conditions|Your Value|
|-----------|--------|----------|----------|
|**Temporary directory to be used for collation**| |To see this field, you must select the **Yes** option for advanced database collation support. The default selection is **No**.

| |

