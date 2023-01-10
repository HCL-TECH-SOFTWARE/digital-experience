# DAM not initializing, incomplete schema migration

During schema migration, rollback will be allowed only for the incomplete schema with the status PROCESSING/MIGRATING in dbstatus table.

- Introduce the two new fields in dbstatus table container name and schema migration start time.
- Expired time is allotted time to complete the schema migration.
- The container which start the schema migration, that name of container and start time will be stored in dbstatus table.
- Within the expired time, only the lead container could delete the incomplete schema and roll back to the old schema.
- After an expired time, any container could delete the incomplete schema and roll back to the old schema.
- Expired time will configure from helm.
- The issue has occurred for multiple reasons hence solution will be implemented in the catch block.
- DAM_SCHEMA_MIGRATION_EXPIRED_TIME_IN_MINUTES has been included in the environment JSON the default value of 10 minutes same can be configured from the helm.

## Configuration values from helm

Dam schema migration expire time is configured as damSchemaMigrationExpiredTimeInMinutes from helm. 

### Dam schema migration expire time

`damSchemaMigrationExpiredTimeInMinutes` determines dam schema migration expired time. Expired time is allotted time to complete the schema migration. By default, value set is 10 minutes. 

```yaml
configuration:
  digitalAssetManagement:
    damSchemaMigrationExpiredTimeInMinutes: 10
```