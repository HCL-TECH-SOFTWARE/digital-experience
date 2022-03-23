# DB2 for z/OS worksheet: Transfer your database 

This worksheet highlights the fields and properties that you see in the Configuration Wizard when you use the database transfer option.

When you use the database transfer option, you answer questions about your environment. Some fields are required. Other fields are required or removed based on your selections for environment conditions.

## Typical fields

The following table lists the typical fields that display when you select the database transfer option. To see additional fields that apply to an advanced configuration, click **Advanced**.

Depending on the conditions that you select, values that you enter for some typical fields might apply across domains. Rather than entering a value multiple times, this value is copied to fields in the Advanced view and applied across the database domains.

|Field Label|Property|Conditions|Your Value|
|-----------|--------|----------|----------|
|**DB2 SYSADM authorization ID:**| | | |
|**DB2 location name**| | | |
|**Release DB2 for z/OS database name**|release.DbNameOnZos| | |
|**Release data source**|release.DataSourceName| | |
|**Release database URL**|release.DbUrl| | |
|**Release storage group**|release.DbStorageGroup| | |
|**Release VCAT**|release.DbVCat| | |
|**Release 32k buffer pool**|release.Db32KBufferPoolName| | |
|**Release 4 K buffer pool**|release.Db4KBufferPoolName| | |
|**Release 4 K buffer pool indexes**|release.DbIndex4KBufferPoolName| | |
|**Community DB2 for z/OS database name**|community.DbNameOnZos| | |
|**Community data source**|community.DataSourceName| | |
|**Community database URL**|community.DbUrl| | |
|**Community storage group**|community.DbStorageGroup| | |
|**Community VCAT**|community.DbVCat| | |
|**Community 32 K buffer pool**|community.Db32KBufferPoolName| | |
|**Community 4 K buffer pool**|community.Db4KBufferPoolName| | |
|**Community 4 K buffer pool indexes**|community.DbIndex4KBufferPoolName| | |
|**Customization DB2 for z/OS database name**|customization.DbNameOnZos| | |
|**Customization data source**|customization.DataSourceName| | |
|**Customization database URL**|customization.DbUrl| | |
|**Customization storage group**|customization.DbStorageGroup| | |
|**Customization VCAT**|customization.DbVCat| | |
|**Customization 32 K buffer pool**|customization.Db32KBufferPoolName| | |
|**Customization 4 K buffer pool**|customization.Db4KBufferPoolName| | |
|**Customization 4 K buffer pool indexes**|customization.DbIndex4KBufferPoolName| | |
|**JCR DB2 for z/OS database name**|jcr.DbNameOnZos| | |
|**JCR data source**|jcr.DataSourceName| | |
|**JCR database URL**|jcr.DbUrl| | |
|**JCR storage group**|jcr.DbStorageGroup| | |
|**JCR database host name**|jcr.DbHost| | |
|**JCR domain**|jcr.DbDomain| | |
|**JCR port**|jcr.DbPort| | |
|**JCR storage group**|jcr.DbStorageGroup| | |
|**JCR VCAT**|jcr.DbVcat| | |
|**JCR 32 K buffer pool**|jcr.Db32KBufferPoolName| | |
|**JCR 4 K buffer pool**|jcr.Db4KBufferPoolName| | |
|**JCR 4 K buffer pool for indexes**|jcr.DbIndex4KBufferPoolName| | |
|**Feedback database name**|feedback.DbNameOnZos| | |
|**Feedback data source**|feedback.DataSourceName| | |
|**Feedback database URL**|feedback.DbUrl| | |
|**Feedback storage group**|feedback.DbStorageGroup| | |
|**Feedback VCAT**|feedback.DbVcat| | |
|**Feedback 32 K buffer pool**|feedback.Db32KBufferPoolName| | |
|**Feedback 4 K buffer pool**|feedback.Db4KBufferPoolName| | |
|**LikeMinds database name**|likeminds.DbNameOnZos| | |
|**LikeMinds data source**|likeminds.DataSourceName| | |
|**LikeMinds database URL**|likeminds.DbUrl| | |
|**LikeMinds storage group**|likeminds.DbStorageGroup| | |
|**LikeMinds VCAT**|likeminds.DbVcat| | |
|**LikeMinds 32 K buffer pool**|likeminds.Db32KBufferPoolName| | |
|**LikeMinds 4 K buffer pool**|likeminds.Db4KBufferPoolName| | |
|**DB2 subsystem name**| | | |
|**IBM DB2 for z/OS library**|db2\_zos.DbLibrary| | |
|**Database group**| | | |
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

**Parent topic:**[DB2 z/OS: Database transfer ](../config/cw_db_transfer.md)

