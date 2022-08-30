# Deploying user interface artifacts

Before you deploy the Screen Flow Manager dialog definitions, you must deploy all portal resources that are part of the dialog definitions, such as pages, and portlets. You can then deploy the dialog definitions by using the portal XML configuration interface \(XMLAccess\).

You can import, export, update, or delete complete dialog sets by using the following command.

```
xmlaccess.{sh|bat} -in your_dialog_sets_file_name -user user_ID -password password -url http://host_name:port/wps/config/fs
```

**Parent topic:**[Developing screen flows](../screenflow/dev_scrnflow.md)

