# Properties file: wkplc_dbdomain.properties


## Release Database Properties

-   **release.DbType**

    -   **Description**

        Database management software to use for the Release domain.

    -   **Valid values**

        `derby`

        `db2`

        `db2_iseries`

        `db2_zos`

        `oracle`

        `sqlserver2005`

    -   **Default value**

        `derby`

    -   **Examples**

        None available

-   **release.DbName**

    -   **Description**

        The name of the database (location name of the DB2 for z/OS subsystem) to be used for this portal database domain. It must comply with your database management software requirements. This property that is combined with the properties schema name and JDBC database URL must be unique for the portal database domains release, community, customization, and JCR.

    -   **Default value**

        release.DbType=db2: `WPREL`

        release.DbType=db2_iseries:

        release.DbType=db2_zos:

        release.DbType=oracle: `WPREL`

        release.DbType=sqlserver2005: `WPREL`

        Otherwise: `wpsdb`

    -   **Examples**

        Apache Derby: `wpsdb`

        IBM DB2: WPREL

        IBM DB2 for i with type 4 driver: `/WPSDB`

        IBM DB2 for i with type 2 driver: `\*LOCAL/WPSDB`

        DB2 for z/OS:

        Oracle Database: `WPREL`

        Microsoft SQL Server: `WPREL`

-   **release.DbSchema**

    -   **Description**

        The name to be used to qualify database objects of this portal database domain. It must comply with your database management software requirements. This property that is combined with the properties database name and JDBC database URL must be unique for the portal database domains release, community, customization, and JCR.

    -   **Default value**

        `release`

    -   **Examples**

        None available

-   **release.DbNameOnZos**

    -   **Description**

        The name of the database to be used for this portal database domain. It must comply with your database management software requirements.

    -   **Default value**

        `WPREL`

    -   **Examples**

        None available

-   **release.DataSourceName**

    -   **Description**

        The name of the data source to be used for this portal database domain. It must comply with the WebSphere Application Server requirements. You cannot use the reserved names releaseDS, communityDS, customizationDS, jcrDS, lmdbDS, and feedback. You can use the same name for all portal database domains that are sharing user ID, password, and JDBC database URL.

    -   **Default value**

        release.DbType=db2: `wpreldbDS`

        release.DbType=oracle: `wpreldbDS`

        release.DbType=sqlserver2005: `wpreldbDS`

        Otherwise: `wpdbDS`

    -   **Examples**

        None available

-   **release.DbUrl**

    -   **Description**

        The JDBC database URL to be used to connect with the database of this portal database domain. It must comply with your JDBC Driver software requirements. This property that is combined with the properties database name and schema name must be unique for the portal database domains release, community, customization, and JCR.

    -   **Default value**

        release.DbType=db2:

        release.DbType=db2_iseries:

        release.DbType=db2_zos:

        release.DbType=oracle:

        release.DbType=sqlserver2005:

        Otherwise: `jdbc:derby:wpsdb;create=true`

    -   **Examples**

        Apache Derby: `jdbc:derby:wpsdb;create=true`

        IBM DB2 with type 4 drivers: `jdbc:db2://:50000/WPREL:returnAlias=0;`

        IBM DB2 with type 2 drivers: `jdbc:db2:WPREL`

        IBM DB2 for i with type 4 drivers: `jdbc:as400:///WPSDB;metadata source=1;prompt=false`

        IBM DB2 for i with type 2 drivers: `jdbc:db2:\*LOCAL/WPSDB`

        IBM DB2 for z/OS with type 4 drivers: `jdbc:db2://:/`

        IBM DB2 for z/OS with type 2 drivers: `jdbc:db2:`

        Oracle Database with type 4 drivers and thin client: `jdbc:oracle:thin:@//:1521/`

        Oracle Database with type 2 drivers and thick client: `jdbc:oracle:oci:@//:1521/`

        Microsoft SQL Server: `jdbc:sqlserver://:1433;SelectMethod=cursor;DatabaseName=WPREL`

-   **release.DbUser**

    -   **Description**

        The database user ID to be used to configure the database objects of this portal database domain. It must comply with your database management software requirements. It is also used by the data source to connect with the database, unless you specify a runtime database user.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **release.DbPassword**

    -   **Description**

        The password of the database user ID used to configure the database objects of this portal database domain. It must comply with your database management software requirements. It is also used by the data source to connect with the database, unless you specify a runtime database user. The ConfigEngine cannot validate that the password complies with the software requirements.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **release.DbRuntimeUser**

    -   **Description**

        The database user ID used for the data source of the portal database domain to connect with the database during day-to-day operations. It must comply with your database management software requirements. It has fewer permissions than the configuration database user (DbUser) that is used when you leave this blank.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **release.DbRuntimePassword**

    -   **Description**

        The password of the database user ID used for the data source of this portal database domain to connect with the database during day-to-day operations. It must comply with your database management software requirements. The ConfigEngine cannot validate that the password complies with the software requirements.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **release.DBA.DbUser**

    -   **Description**

        The database administration user ID used for privileged database operations during database creation and setup for this portal database domain. It must comply with your database management software requirements.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **release.DBA.DbPassword**

    -   **Description**

        The password of the database administration user ID used for privileged database operations during database creation and setup for this portal database domain. It must comply with your database management software requirements. The ConfigEngine cannot validate that the password complies with the software requirements.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **release.DbHome**

    -   **Description**

        Oracle Database: The location on the Oracle database server where table spaces for this portal database domain must be created.

        Microsoft SQL Server: The location on the SQL Server database server where the database files for this portal database domain must be created.

    -   **Default value**

        No default value

    -   **Examples**

        Oracle Database: `/product/11.2.0/dbhome\_1`

        Microsoft SQL Server: `C:\\\\Microsoft SQL Server\\\\\\\\MSSQL`

-   **release.AdminUrl**

    -   **Description**

        The JDBC database URL used to connect with the SQL Server that contains the database for this portal database domain. It is used for database administration operations. It is the same value that is used for the JDBC database URL, but with the database name omitted.

    -   **Default value**

        No default value

    -   **Examples**

        Microsoft SQL Server: `jdbc:sqlserver://:1433`

-   **release.DbConfigRoleName**

    -   **Description**

        The name of the role or group for this portal database domain that includes the database permissions that are required by the configuration database user. The configuration database user configures the database objects of this portal database domain. The role or group must comply with your database management software requirements. The configuration database user must be a member of this role or group. If this role or group does not exist, create it and assign it to the release.DbUser ID.

    -   **Default value**

        release.DbType=db2\_iseries: `WPBASCFG`

        release.DbType=db2\_zos: `WPBASCFG`

        Otherwise: `WP\_BASE\_CONFIG\_USERS`

    -   **Examples**

        None available

-   **release.DbRuntimeRoleName**

    -   **Description**

        The name of the role or group for this portal database domain that has the database permissions that are required by the runtime database user during day-to-day operations. The role or group must comply with your database management software requirements. The runtime database user must be a member of this role or group. If this role or group does not exist, create it and assign it to the release.DbRuntimeUser ID.

    -   **Default value**

        release.DbType=db2_iseries: `WPBASRT`

        release.DbType=db2_zos: `WPBASRT`

        Otherwise: WP`\_BASE\_RUNTIME\_USERS`

    -   **Examples**

        None available

-   **release.XDbName**

    -   **Description**

        The database alias used to create the database for this portal database domain. It must comply with your database management software requirements. Required for IBM DB2 that runs on Linux and UNIX operating systems. Also required for IBM DB2 that runs on a Microsoft Windows operating system that uses type 2 JDBC drivers and is running on the same server as HCL Portal.

    -   **Default value**

        `WPREL`

    -   **Examples**

        None available

-   **release.DbNode**

    -   **Description**

        The name of the database node that is used to create the database for this portal database domain. It must comply with your database management software requirements. Required for IBM DB2 that run on Linux and UNIX operating systems.

    -   **Default value**

        `wpsNode`

    -   **Examples**

        None available

-   **release.DbStorageGroup**

    -   **Description**

        The name of the DB2 for z/OS storage group to be used for this portal database domain.

    -   **Default value**

        `WPSSG`

    -   **Examples**

        None available

-   **release.DbVolumes**

    -   **Description**

        Defines the volumes of the DB2 for z/OS storage group used for this portal database domain.

    -   **Default value**

        `\*`

    -   **Examples**

        None available

-   **release.DbVcat**

    -   **Description**

        Identifies the integrated catalog facility catalog (VCAT) for the DB2 for z/OS storage group that is used for this portal database domain.

    -   **Default value**

        No default value

    -   **Examples**

        `DSN910`

-   **release.DbIndex4KBufferPoolName**

    -   **Description**

        The name of the DB2 for z/OS 4 K index buffer pool to be used for this portal database domain.

    -   **Default value**

        `BP3`

    -   **Examples**

        None available

-   **release.Db4KBufferPoolName**

    -   **Description**

        The name of the DB2 for z/OS 4 K buffer pool to be used for this portal database domain.

    -   **Default value**

        `BP2`

    -   **Examples**

        None available

-   **release.Db32KBufferPoolName**

    -   **Description**

        The name of the DB2 for z/OS 32 K buffer pool to be used for this portal database domain.

    -   **Default value**

        `BP32K1`

    -   **Examples**

        None available

-   **release.TablespaceTrackMod**

    -   **Description**

        Specifies whether DB2 for z/OS tracks modified pages in the space map pages of the table spaces for this portal database domain. Before you change this value, see the DB2 for z/OS documentation to learn more about the option TRACKMOD.

    -   **Valid values**

        `YES`

        `NO`

    -   **Default value**

        `YES`

    -   **Examples**

        None available

-   **release.TablespaceDefine**

    -   **Description**

        Specifies when the underlying data sets for the table spaces of this portal database domain are physically created. Before you change this value, see the DB2 for z/OS documentation to learn more about the option DEFINE.

    -   **Valid values**

        `YES`

        `NO`

    -   **Default value**

        `NO`

    -   **Examples**

        None available


## Community Database Properties

-   **community.DbType**

    -   **Description**

        Database management software to use for the Community domain.

    -   **Valid values**

        `derby`

        `db2`

        `db2_iseries`

        `db2_zos`

        `oracle`

        `sqlserver2005`

    -   **Default value**

        derby

    -   **Examples**

        None available

-   **community.DbName**

    -   **Description**

        The name of the database (location name of the DB2 for z/OS subsystem) to be used for this portal database domain. It must comply with your database management software requirements. This property that is combined with the properties schema name and JDBC database URL must be unique for the portal database domains release, community, customization, and JCR.

    -   **Default value**

        community.DbType=db2: `WPCOMM`

        community.DbType=db2_iseries:

        community.DbType=db2_zos:

        community.DbType=oracle: `WPCOMM`

        community.DbType=sqlserver2005: `WPCOMM`

        Otherwise: `wpsdb`

    -   **Examples**

        Apache Derby: `wpsdb`

        IBM DB2: WPCOMM

        IBM DB2 for i with type 4 driver: `/WPSDB`

        IBM DB2 for i with type 2 driver: `\*LOCAL/WPSDB`

        DB2 for z/OS:

        Oracle Database: `WPCOMM`

        Microsoft SQL Server: `WPCOMM`

-   **community.DbSchema**

    -   **Description**

        The name to be used to qualify database objects of this portal database domain. It must comply with your database management software requirements. This property that is combined with the properties database name and JDBC database URL must be unique for the portal database domains release, community, customization, and JCR.

    -   **Default value**

        `community`

    -   **Examples**

        None available

-   **community.DbNameOnZos**

    -   **Description**

        The name of the database to be used for this portal database domain. It must comply with your database management software requirements.

    -   **Default value**

        `WPCOMM`

    -   **Examples**

        None available

-   **community.DataSourceName**

    -   **Description**

        The name of the data source to be used for this portal database domain. It must comply with the WebSphere Application Server requirements. You cannot use the reserved names releaseDS, communityDS, customizationDS, jcrDS, lmdbDS, and feedback. You can use the same name for all portal database domains that are sharing user ID, password, and JDBC database URL.

    -   **Default value**

        community.DbType=db2: `wpcommdbDS`

        community.DbType=oracle: `wpcommdbDS`

        community.DbType=sqlserver2005: `wpcommdbDS`

        Otherwise: `wpdbDS`

    -   **Examples**

        None available

-   **community.DbUrl**

    -   **Description**

        The JDBC database URL to be used to connect with the database of this portal database domain. It must comply with your JDBC Driver software requirements. This property that is combined with the properties database name and schema name must be unique for the portal database domains release, community, customization, and JCR.

    -   **Default value**

        community.DbType=db2:

        community.DbType=db2_iseries:

        community.DbType=db2_zos:

        community.DbType=oracle:

        community.DbType=sqlserver2005:

        Otherwise: `jdbc:derby:wpsdb;create=true`

    -   **Examples**

        Apache Derby: `jdbc:derby:wpsdb;create=true`

        IBM DB2 with type 4 drivers: `jdbc:db2://:50000/WPCOMM:returnAlias=0;`

        IBM DB2 with type 2 drivers: `jdbc:db2:WPCOMM`

        IBM DB2 for i with type 4 drivers: `jdbc:as400:///WPSDB;metadata source=1;prompt=false`

        IBM DB2 for i with type 2 drivers: `jdbc:db2:\*LOCAL/WPSDB`

        IBM DB2 for z/OS with type 4 drivers: `jdbc:db2://:/`

        IBM DB2 for z/OS with type 2 drivers: `jdbc:db2:`

        Oracle Database with type 4 drivers and thin client: `jdbc:oracle:thin:@//:1521/`

        Oracle Database with type 2 drivers and thick client: `jdbc:oracle:oci:@//:1521/`

        Microsoft SQL Server: `jdbc:sqlserver://:1433;SelectMethod=cursor;DatabaseName=WPCOMM`

-   **community.DbUser**

    -   **Description**

        The database user ID to be used to configure the database objects of this portal database domain. It must comply with your database management software requirements. It is also used by the data source to connect with the database, unless you specify a runtime database user.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **community.DbPassword**

    -   **Description**

        The password of the database user ID used to configure the database objects of this portal database domain. It must comply with your database management software requirements. It is also used by the data source to connect with the database, unless you specify a runtime database user. The ConfigEngine cannot validate that the password complies with the software requirements.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **community.DbRuntimeUser**

    -   **Description**

        The database user ID used for the data source of the portal database domain to connect with the database during day-to-day operations. It must comply with your database management software requirements. It has fewer permissions than the configuration database user \(DbUser\) that is used when you leave this blank.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **community.DbRuntimePassword**

    -   **Description**

        The password of the database user ID used for the data source of this portal database domain to connect with the database during day-to-day operations. It must comply with your database management software requirements. The ConfigEngine cannot validate that the password complies with the software requirements.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **community.DBA.DbUser**

    -   **Description**

        The database administration user ID used for privileged database operations during database creation and setup for this portal database domain. It must comply with your database management software requirements.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **community.DBA.DbPassword**

    -   **Description**

        The password of the database administration user ID used for privileged database operations during database creation and setup for this portal database domain. It must comply with your database management software requirements. The ConfigEngine cannot validate that the password complies with the software requirements.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **community.DbHome**

    -   **Description**

        Oracle Database: The location on the Oracle database server where table spaces for this portal database domain must be created.

        Microsoft SQL Server: The location on the SQL Server database server where the database files for this portal database domain must be created.

    -   **Default value**

        No default value

    -   **Examples**

        Oracle Database: `/product/11.2.0/dbhome\_1`

        Microsoft SQL Server: `C:\\\\Microsoft SQL Server\\\\\\\\MSSQL`

-   **community.AdminUrl**

    -   **Description**

        The JDBC database URL used to connect with the SQL Server that contains the database for this portal database domain. It is used for database administration operations. It is the same value that is used for the JDBC database URL, but with the database name omitted.

    -   **Default value**

        No default value

    -   **Examples**

        Microsoft SQL Server: `jdbc:sqlserver://:1433`

-   **community.DbConfigRoleName**

    -   **Description**

        The name of the role or group for this portal database domain that includes the database permissions that are required by the configuration database user. The configuration database user configures the database objects of this portal database domain. The role or group must comply with your database management software requirements. The configuration database user must be a member of this role or group. If this role or group does not exist, create it and assign it to the community.DbUser ID.

    -   **Default value**

        community.DbType=db2_iseries: `WPBASCFG`

        community.DbType=db2_zos: `WPBASCFG`

        Otherwise: `WP_BASE_CONFIG_USERS`

    -   **Examples**

        None available

-   **community.DbRuntimeRoleName**

    -   **Description**

        The name of the role or group for this portal database domain that has the database permissions that are required by the runtime database user during day-to-day operations. The role or group must comply with your database management software requirements. The runtime database user must be a member of this role or group. If this role or group does not exist, create it and assign it to the community.DbRuntimeUser ID.

    -   **Default value**

        community.DbType=db2_iseries: `WPBASRT`

        community.DbType=db2_zos: `WPBASRT`

        Otherwise: `WP_BASE_RUNTIME_USERS`

    -   **Examples**

        None available

-   **community.XDbName**

    -   **Description**

        The database alias used to create the database for this portal database domain. It must comply with your database management software requirements. Required for IBM DB2 that runs on Linux and UNIX operating systems. Also required for IBM DB2 that runs on a Microsoft Windows operating system that uses type 2 JDBC drivers and is running on the same server as HCL Portal.

    -   **Default value**

        `WPCOMM`

    -   **Examples**

        None available

-   **community.DbNode**

    -   **Description**

        The name of the database node that is used to create the database for this portal database domain. It must comply with your database management software requirements. Required for IBM DB2 that run on Linux and UNIX operating systems.

    -   **Default value**

        `wpsNode`

    -   **Examples**

        None available

-   **community.DbStorageGroup**

    -   **Description**

        The name of the DB2 for z/OS storage group to be used for this portal database domain.

    -   **Default value**

        WPSSG

    -   **Examples**

        None available

-   **community.DbVolumes**

    -   **Description**

        Defines the volumes of the DB2 for z/OS storage group used for this portal database domain.

    -   **Default value**

        `\*`

    -   **Examples**

        None available

-   **community.DbVcat**

    -   **Description**

        Identifies the integrated catalog facility catalog \(VCAT\) for the DB2 for z/OS storage group that is used for this portal database domain.

    -   **Default value**

        No default value

    -   **Examples**

        `DSN910`

-   **community.DbIndex4KBufferPoolName**

    -   **Description**

        The name of the DB2 for z/OS 4 K index buffer pool to be used for this portal database domain.

    -   **Default value**

        `BP3`

    -   **Examples**

        None available

-   **community.Db4KBufferPoolName**

    -   **Description**

        The name of the DB2 for z/OS 4 K buffer pool to be used for this portal database domain.

    -   **Default value**

        `BP2`

    -   **Examples**

        None available

-   **community.Db32KBufferPoolName**

    -   **Description**

        The name of the DB2 for z/OS 32 K buffer pool to be used for this portal database domain.

    -   **Default value**

        `BP32K1`

    -   **Examples**

        None available

-   **community.TablespaceTrackMod**

    -   **Description**

        Specifies whether DB2 for z/OS tracks modified pages in the space map pages of the table spaces for this portal database domain. Before you change this value, see the DB2 for z/OS documentation to learn more about the option TRACKMOD.

    -   **Valid values**

        `YES`

        `NO`

    -   **Default value**

        `YES`

    -   **Examples**

        None available

-   **community.TablespaceDefine**

    -   **Description**

        Specifies when the underlying data sets for the table spaces of this portal database domain are physically created. Before you change this value, see the DB2 for z/OS documentation to learn more about the option DEFINE.

    -   **Valid values**

        `YES`

        `NO`

    -   **Default value**

        `NO`

    -   **Examples**

        None available


## Customization Database Properties

-   **customization.DbType**

    -   **Description**

        Database management software to use for the Customization domain.

    -   **Valid values**

        `derby`

        `db2`

        `db2_iseries`

        `db2_zos`

        `oracle`

        `sqlserver2005`

    -   **Default value**

        `derby`

    -   **Examples**

        None available

-   **customization.DbName**

    -   **Description**

        The name of the database (location name of the DB2 for z/OS subsystem) to be used for this portal database domain. It must comply with your database management software requirements. This property that is combined with the properties schema name and JDBC database URL must be unique for the portal database domains release, community, customization, and JCR.

    -   **Default value**

        customization.DbType=db2: `WPCUST`

        customization.DbType=db2_iseries:

        customization.DbType=db2_zos:

        customization.DbType=oracle: `WPCUST`

        customization.DbType=sqlserver2005: `WPCUST`

        Otherwise: `wpsdb`

    -   **Examples**

        Apache Derby: `wpsdb`

        IBM DB2: `WPCUST`

        IBM DB2 for i with type 4 driver: `/WPSDB`

        IBM DB2 for i with type 2 driver: `\*LOCAL/WPSDB`

        DB2 for z/OS:

        Oracle Database: `WPCUST`

        Microsoft SQL Server: `WPCUST`

-   **customization.DbSchema**

    -   **Description**

        The name to be used to qualify database objects of this portal database domain. It must comply with your database management software requirements. This property that is combined with the properties database name and JDBC database URL must be unique for the portal database domains release, community, customization, and JCR.

    -   **Default value**

        customization.DbType=db2_iseries: `customiz`

        Otherwise: `customization`

    -   **Examples**

        None available

-   **customization.DbNameOnZos**

    -   **Description**

        The name of the database to be used for this portal database domain. It must comply with your database management software requirements.

    -   **Default value**

        `WPCUST`

    -   **Examples**

        None available

-   **customization.DataSourceName**

    -   **Description**

        The name of the data source to be used for this portal database domain. It must comply with the WebSphere Application Server requirements. You cannot use the reserved names releaseDS, communityDS, customizationDS, jcrDS, lmdbDS, and feedback. You can use the same name for all portal database domains that are sharing user ID, password, and JDBC database URL.

    -   **Default value**

        customization.DbType=db2: `wpcustdbDS`

        customization.DbType=oracle: `wpcustdbDS`

        customization.DbType=sqlserver2005: `wpcustdbDS`

        Otherwise: `wpdbDS`

    -   **Examples**

        None available

-   **customization.DbUrl**

    -   **Description**

        The JDBC database URL to be used to connect with the database of this portal database domain. It must comply with your JDBC Driver software requirements. This property that is combined with the properties database name and schema name must be unique for the portal database domains release, community, customization, and JCR.

    -   **Default value**

        customization.DbType=db2:

        customization.DbType=db2_iseries:

        customization.DbType=db2_zos:

        customization.DbType=oracle:

        customization.DbType=sqlserver2005:

        Otherwise: `jdbc:derby:wpsdb;create=true`

    -   **Examples**

        Apache Derby: `jdbc:derby:wpsdb;create=true`

        IBM DB2 with type 4 drivers: `jdbc:db2://:50000/WPCUST:returnAlias=0;`

        IBM DB2 with type 2 drivers: `jdbc:db2:WPCUST`

        IBM DB2 for i with type 4 drivers: `jdbc:as400:///WPSDB;metadata source=1;prompt=false`

        IBM DB2 for i with type 2 drivers: `jdbc:db2:\*LOCAL/WPSDB`

        IBM DB2 for z/OS with type 4 drivers: `jdbc:db2://:/`

        IBM DB2 for z/OS with type 2 drivers: `jdbc:db2:`

        Oracle Database with type 4 drivers and thin client: `jdbc:oracle:thin:@//:1521/`

        Oracle Database with type 2 drivers and thick client: `jdbc:oracle:oci:@//:1521/`

        Microsoft SQL Server: `jdbc:sqlserver://:1433;SelectMethod=cursor;DatabaseName=WPCUST`

-   **customization.DbUser**

    -   **Description**

        The database user ID to be used to configure the database objects of this portal database domain. It must comply with your database management software requirements. It is also used by the data source to connect with the database, unless you specify a runtime database user.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **customization.DbPassword**

    -   **Description**

        The password of the database user ID used to configure the database objects of this portal database domain. It must comply with your database management software requirements. It is also used by the data source to connect with the database, unless you specify a runtime database user. The ConfigEngine cannot validate that the password complies with the software requirements.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **customization.DbRuntimeUser**

    -   **Description**

        The database user ID used for the data source of the portal database domain to connect with the database during day-to-day operations. It must comply with your database management software requirements. It has fewer permissions than the configuration database user (DbUser) that is used when you leave this blank.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **customization.DbRuntimePassword**

    -   **Description**

        The password of the database user ID used for the data source of this portal database domain to connect with the database during day-to-day operations. It must comply with your database management software requirements. The ConfigEngine cannot validate that the password complies with the software requirements.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **customization.DBA.DbUser**

    -   **Description**

        The database administration user ID used for privileged database operations during database creation and setup for this portal database domain. It must comply with your database management software requirements.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **customization.DBA.DbPassword**

    -   **Description**

        The password of the database administration user ID used for privileged database operations during database creation and setup for this portal database domain. It must comply with your database management software requirements. The ConfigEngine cannot validate that the password complies with the software requirements.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **customization.DbHome**

    -   **Description**

        Oracle Database: The location on the Oracle database server where table spaces for this portal database domain must be created.

        Microsoft SQL Server: The location on the SQL Server database server where the database files for this portal database domain must be created.

    -   **Default value**

        No default value

    -   **Examples**

        Oracle Database: `/product/11.2.0/dbhome\_1`

        Microsoft SQL Server: `C:\\\\Microsoft SQL Server\\\\\\\\MSSQL`

-   **customization.AdminUrl**

    -   **Description**

        The JDBC database URL used to connect with the SQL Server that contains the database for this portal database domain. It is used for database administration operations. It is the same value that is used for the JDBC database URL, but with the database name omitted.

    -   **Default value**

        No default value

    -   **Examples**

        Microsoft SQL Server: `jdbc:sqlserver://:1433`

-   **customization.DbConfigRoleName**

    -   **Description**

        The name of the role or group for this portal database domain that includes the database permissions that are required by the configuration database user. The configuration database user configures the database objects of this portal database domain. The role or group must comply with your database management software requirements. The configuration database user must be a member of this role or group. If this role or group does not exist, create it and assign it to the customization.DbUser ID.

    -   **Default value**

        customization.DbType=db2_iseries: `WPBASCFG`

        customization.DbType=db2_zos: `WPBASCFG`

        Otherwise: `WP_BASE_CONFIG_USERS`

    -   **Examples**

        None available

-   **customization.DbRuntimeRoleName**

    -   **Description**

        The name of the role or group for this portal database domain that has the database permissions that are required by the runtime database user during day-to-day operations. The role or group must comply with your database management software requirements. The runtime database user must be a member of this role or group. If this role or group does not exist, create it and assign it to the customization.DbRuntimeUser ID.

    -   **Default value**

        customization.DbType=db2_iseries: `WPBASRT`

        customization.DbType=db2_zos: `WPBASRT`

        Otherwise: `WP_BASE_RUNTIME_USERS`

    -   **Examples**

        None available

-   **customization.XDbName**

    -   **Description**

        The database alias used to create the database for this portal database domain. It must comply with your database management software requirements. Required for IBM DB2 that runs on Linux and UNIX operating systems. Also required for IBM DB2 that runs on a Microsoft Windows operating system that uses type 2 JDBC drivers and is running on the same server as HCL Portal.

    -   **Default value**

        `WPCUST`

    -   **Examples**

        None available

-   **customization.DbNode**

    -   **Description**

        The name of the database node that is used to create the database for this portal database domain. It must comply with your database management software requirements. Required for IBM DB2 that run on Linux and UNIX operating systems.

    -   **Default value**

        `wpsNode`

    -   **Examples**

        None available

-   **customization.DbStorageGroup**

    -   **Description**

        The name of the DB2 for z/OS storage group to be used for this portal database domain.

    -   **Default value**

        `WPSSG`

    -   **Examples**

        None available

-   **customization.DbVolumes**

    -   **Description**

        Defines the volumes of the DB2 for z/OS storage group used for this portal database domain.

    -   **Default value**

        `\*`

    -   **Examples**

        None available

-   **customization.DbVcat**

    -   **Description**

        Identifies the integrated catalog facility catalog (VCAT) for the DB2 for z/OS storage group that is used for this portal database domain.

    -   **Default value**

        No default value

    -   **Examples**

        `DSN910`

-   **customization.DbIndex4KBufferPoolName**

    -   **Description**

        The name of the DB2 for z/OS 4 K index buffer pool to be used for this portal database domain.

    -   **Default value**

        `BP3`

    -   **Examples**

        None available

-   **customization.Db4KBufferPoolName**

    -   **Description**

        The name of the DB2 for z/OS 4 K buffer pool to be used for this portal database domain.

    -   **Default value**

        `BP2`

    -   **Examples**

        None available

-   **customization.Db32KBufferPoolName**

    -   **Description**

        The name of the DB2 for z/OS 32 K buffer pool to be used for this portal database domain.

    -   **Default value**

        `BP32K1`

    -   **Examples**

        None available

-   **customization.TablespaceTrackMod**

    -   **Description**

        Specifies whether DB2 for z/OS tracks modified pages in the space map pages of the table spaces for this portal database domain. Before you change this value, see the DB2 for z/OS documentation to learn more about the option TRACKMOD.

    -   **Default value**

        `YES`

    -   **Examples**

        None available

-   **customization.TablespaceDefine**

    -   **Description**

        Specifies when the underlying data sets for the table spaces of this portal database domain are physically created. Before you change this value, see the DB2 for z/OS documentation to learn more about the option DEFINE.

    -   **Valid values**

        `YES`

        `NO`

    -   **Default value**

        `NO`

    -   **Examples**

        None available


## JCR Database Properties

-   **jcr.DbType**

    -   **Description**

        Database management software to use for the JCR domain.

    -   **Valid values**

        `derby`

        `db2`

        `db2_iseries`

        `db2_zos`

        `oracle`

        `sqlserver2005`

    -   **Default value**

        `derby`

    -   **Examples**

        None available

-   **jcr.DbName**

    -   **Description**

        The name of the database (location name of the DB2 for z/OS subsystem) to be used for this portal database domain. It must comply with your database management software requirements. This property that is combined with the properties schema name and JDBC database URL must be unique for the portal database domains release, community, customization, and JCR.

    -   **Default value**

        jcr.DbType=db2: `WPJCR`

        jcr.DbType=db2_iseries:

        jcr.DbType=db2_zos:

        jcr.DbType=oracle: `WPJCR`

        jcr.DbType=sqlserver2005: `WPJCR`

        Otherwise: wpsdb

    -   **Examples**

        Apache Derby: `wpsdb`

        IBM DB2: WPJCR

        IBM DB2 for i with type 4 driver: `/WPSDB`

        IBM DB2 for i with type 2 driver: `\*LOCAL/WPSDB`

        DB2 for z/OS:

        Oracle Database: `WPJCR`

        Microsoft SQL Server: `WPJCR`

-   **jcr.DbSchema**

    -   **Description**

        The name to be used to qualify database objects of this portal database domain. It must comply with your database management software requirements. This property that is combined with the properties database name and JDBC database URL must be unique for the portal database domains release, community, customization, and JCR.

    -   **Default value**

        `jcr`

    -   **Examples**

        None available

-   **jcr.DbNameOnZos**

    -   **Description**

        The name of the database to be used for this portal database domain. It must comply with your database management software requirements.

    -   **Default value**

        `WPJCR`

    -   **Examples**

        None available

-   **jcr.DataSourceName**

    -   **Description**

        The name of the data source to be used for this portal database domain. It must comply with the WebSphere Application Server requirements. You cannot use the reserved names releaseDS, communityDS, customizationDS, jcrDS, lmdbDS, and feedback. You can use the same name for all portal database domains that are sharing user ID, password, and JDBC database URL.

    -   **Default value**

        jcr.DbType=db2: `wpjcrdbDS`

        jcr.DbType=oracle: `wpjcrdbDS`

        jcr.DbType=sqlserver2005: `wpjcrdbDS`

        Otherwise: `wpdbDS`

    -   **Examples**

        None available

-   **jcr.DbUrl**

    -   **Description**

        The JDBC database URL to be used to connect with the database of this portal database domain. It must comply with your JDBC Driver software requirements. This property that is combined with the properties database name and schema name must be unique for the portal database domains release, community, customization, and JCR.

    -   **Default value**

        jcr.DbType=db2:

        jcr.DbType=db2_iseries:

        jcr.DbType=db2_zos:

        jcr.DbType=oracle:

        jcr.DbType=sqlserver2005:

        Otherwise: `jdbc:derby:wpsdb;create=true`

    -   **Examples**

        Apache Derby: `jdbc:derby:wpsdb;create=true`

        IBM DB2 with type 4 drivers: `jdbc:db2://:50000/WPJCR:returnAlias=0;`

        IBM DB2 with type 2 drivers: `jdbc:db2:WPJCR`

        IBM DB2 for i with type 4 drivers: `jdbc:as400:///WPSDB;metadata source=1;prompt=false`

        IBM DB2 for i with type 2 drivers: `jdbc:db2:\*LOCAL/WPSDB`

        IBM DB2 for z/OS with type 4 drivers: `jdbc:db2://:/`

        IBM DB2 for z/OS with type 2 drivers: `jdbc:db2:`

        Oracle Database with type 4 drivers and thin client: `jdbc:oracle:thin:@//:1521/`

        Oracle Database with type 2 drivers and thick client: `jdbc:oracle:oci:@//:1521/`

        Microsoft SQL Server: `jdbc:sqlserver://:1433;SelectMethod=cursor;DatabaseName=WPJCR`

-   **jcr.DbUser**

    -   **Description**

        The database user ID to be used to configure the database objects of this portal database domain. It must comply with your database management software requirements. It is also used by the data source to connect with the database, unless you specify a runtime database user.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **jcr.DbPassword**

    -   **Description**

        The password of the database user ID used to configure the database objects of this portal database domain. It must comply with your database management software requirements. It is also used by the data source to connect with the database, unless you specify a runtime database user. The ConfigEngine cannot validate that the password complies with the software requirements.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **jcr.DbRuntimeUser**

    -   **Description**

        The database user ID used for the data source of the portal database domain to connect with the database during day-to-day operations. It must comply with your database management software requirements. It has fewer permissions than the configuration database user (DbUser) that is used when you leave this blank.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **jcr.DbRuntimePassword**

    -   **Description**

        The password of the database user ID used for the data source of this portal database domain to connect with the database during day-to-day operations. It must comply with your database management software requirements. The ConfigEngine cannot validate that the password complies with the software requirements.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **jcr.DBA.DbUser**

    -   **Description**

        The database administration user ID used for privileged database operations during database creation and setup for this portal database domain. It must comply with your database management software requirements.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **jcr.DBA.DbPassword**

    -   **Description**

        The password of the database administration user ID used for privileged database operations during database creation and setup for this portal database domain. It must comply with your database management software requirements. The ConfigEngine cannot validate that the password complies with the software requirements.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **jcr.DbHome**

    -   **Description**

        Oracle Database: The location on the Oracle database server where table spaces for this portal database domain must be created.

        Microsoft SQL Server: The location on the SQL Server database server where the database files for this portal database domain must be created.

    -   **Default value**

        No default value

    -   **Examples**

        Oracle Database: `/product/11.2.0/dbhome\_1`

        Microsoft SQL Server: `C:\\\\Microsoft SQL Server\\\\\\\\MSSQL`

-   **jcr.AdminUrl**

    -   **Description**

        The JDBC database URL used to connect with the SQL Server that contains the database for this portal database domain. It is used for database administration operations. It is the same value that is used for the JDBC database URL, but with the database name omitted.

    -   **Default value**

        No default value

    -   **Examples**

        Microsoft SQL Server: `jdbc:sqlserver://:1433`

-   **jcr.DbConfigRoleName**

    -   **Description**

        The name of the role or group for this portal database domain that includes the database permissions that are required by the configuration database user. The configuration database user configures the database objects of this portal database domain. The role or group must comply with your database management software requirements. The configuration database user must be a member of this role or group. If this role or group does not exist, create it and assign it to the jcr.DbUser ID.

    -   **Default value**

        jcr.DbType=db2_iseries: `WPJCRCFG`

        jcr.DbType=db2_zos: `WPJCRCFG`

        Otherwise: `WP_JCR_CONFIG_USERS`

    -   **Examples**

        None available

-   **jcr.DbRuntimeRoleName**

    -   **Description**

        The name of the role or group for this portal database domain that has the database permissions that are required by the runtime database user during day-to-day operations. The role or group must comply with your database management software requirements. The runtime database user must be a member of this role or group. If this role or group does not exist, create it and assign it to the jcr.DbRuntimeUser ID.

    -   **Default value**

        release.DbType=db2_iseries: `WPJCRRT`

        release.DbType=db2_zos: `WPJCRRT`

        Otherwise: `WP_JCR_RUNTIME_USERS`

    -   **Examples**

        None available

-   **jcr.XDbName**

    -   **Description**

        The database alias used to create the database for this portal database domain. It must comply with your database management software requirements. Required for IBM DB2 that runs on Linux and UNIX operating systems. Also required for IBM DB2 that runs on a Microsoft Windows operating system that uses type 2 JDBC drivers and is running on the same server as HCL Portal.

    -   **Default value**

        `WPJCR`

    -   **Examples**

        None available

-   **jcr.DbNode**

    -   **Description**

        The name of the database node that is used to create the database for this portal database domain. It must comply with your database management software requirements. Required for IBM DB2 that run on Linux and UNIX operating systems.

    -   **Default value**

        wpsNode

    -   **Examples**

        None available

-   **jcr.DbHost**

    -   **Description**

        The host name of the remote system that hosts the DB2 Content Manager Runtime Edition database (DB2 for z/OS only).

    -   **Default value**

        No default value

    -   **Examples**

        :

-   **jcr.DbDomain**

    -   **Description**

        The domain (not including the host name) of the remote system that hosts the DB2 Content Manager Runtime Edition database (DB2 for z/OS only).

    -   **Default value**

        No default value

    -   **Examples**

        `yourco.com`

-   **jcr.DbPort**

    -   **Description**

        The port number of the DB2 Content Manager Runtime Edition database on the remote system (DB2 for z/OS only).

    -   **Default value**

        No default value

    -   **Examples**

        `446`

-   **jcr.ZosDbPrefix**

    -   **Description**

        The common prefix of Node Type database names for DB2 Content Manager Runtime Edition \(DB2 for z/OS only\).

    -   **Default value**

        `ICM`

    -   **Examples**

        None available

-   **jcr.ZosDbMaxTables**

    -   **Description**

        The maximum number of user-defined tables to be stored in a particular Node Type database in the DB2 Content Manager Runtime Edition database (DB2 for z/OS only).

    -   **Default value**

        `100`

    -   **Examples**

        None available

-   **jcr.DbStorageGroup**

    -   **Description**

        The name of the DB2 for z/OS storage group to be used for this portal database domain.

    -   **Default value**

        `WPSSG`

    -   **Examples**

        None available

-   **jcr.DbVolumes**

    -   **Description**

        Defines the volumes of the DB2 for z/OS storage group used for this portal database domain.

    -   **Default value**

        `\*`

    -   **Examples**

        None available

-   **jcr.DbVcat**

    -   **Description**

        Identifies the integrated catalog facility catalog (VCAT) for the DB2 for z/OS storage group that is used for this portal database domain.

    -   **Default value**

        No default value

    -   **Examples**

        `DSN910`

-   **jcr.DbIndex4KBufferPoolName**

    -   **Description**

        The name of the DB2 for z/OS 4 K index buffer pool to be used for this portal database domain.

    -   **Default value**

        `BP3`

    -   **Examples**

        None available

-   **jcr.Db4KBufferPoolName**

    -   **Description**

        The name of the DB2 for z/OS 4 K buffer pool to be used for this portal database domain.

    -   **Default value**

        `BP2`

    -   **Examples**

        None available

-   **jcr.Db32KBufferPoolName**

    -   **Description**

        The name of the DB2 for z/OS 32 K buffer pool to be used for this portal database domain.

    -   **Default value**

        `BP32K1`

    -   **Examples**

        None available

-   **jcr.TablespaceTrackMod**

    -   **Description**

        Specifies whether DB2 for z/OS tracks modified pages in the space map pages of the table spaces for this portal database domain. Before you change this value, see the DB2 for z/OS documentation to learn more about the option TRACKMOD.

    -   **Default value**

        `YES`

    -   **Examples**

        None available

-   **jcr.TablespaceDefine**

    -   **Description**

        Specifies when the underlying data sets for the table spaces of this portal database domain are physically created. Before you change this value, see the DB2 for z/OS documentation to learn more about the option DEFINE.

    -   **Valid values**

        `YES`

        `NO`

    -   **Default value**

        NO

    -   **Examples**

        None available


## JCR Properties

The following properties are required to configure the JCR.

-   **jcr.blobBufferpool**

    -   **Description**

        Required only for IBM DB2 for z/OS and OS/390. The name of the bufferpool in which the BLOB tablespaces is created. If it is not specified, then the default value specified in the database is used.

    -   **Default value**

        `BP32K1`

    -   **Examples**

        None available


## Personalization Feedback Database Properties

-   **feedback.DbType**

    -   **Description**

        Database management software to use for the Feedback domain.

    -   **Valid values**

        `db2`

        `db2_iseries`

        `db2_zos`

        `derby`

        `oracle`

        `sqlserver2005`

    -   **Default value**

        `derby`

    -   **Examples**

        None available

-   **InitializeFeedbackDB**

    -   **Description**

        Specify how to handle the Feedback database during database transfer from Derby.

    -   **Valid values**

        `true`

        `false`

    -   **Default value**

        `true`

    -   **Examples**

        None available

-   **feedback.DbName**

    -   **Description**

        The name of the database (location name of the DB2 for z/OS subsystem) to be used for this portal database domain. It must comply with your database management software requirements. This property that is combined with the properties schema name and JDBC database URL must be unique for the portal database domains release, community, customization, and JCR.

    -   **Default value**

        feedback.DbType=db2: `WPFDBK`

        feedback.DbType=db2_iseries:

        feedback.DbType=db2_zos:

        feedback.DbType=oracle: `WPFDBK`

        feedback.DbType=sqlserver2005: `WPFDBK`

        Otherwise: `wpsdb`

    -   **Examples**

        Apache Derby: wpsdb

        IBM DB2: WPFDBK

        IBM DB2 for i with type 4 driver: `/WPSDB`

        IBM DB2 for i with type 2 driver: `\*LOCAL/WPSDB`

        DB2 for z/OS:

        Oracle Database: `WPFDBK`

        Microsoft SQL Server: WPFDBK

-   **feedback.DbSchema**

    -   **Description**

        The name to be used to qualify database objects of this portal database domain. It must comply with your database management software requirements. This property that is combined with the properties database name and JDBC database URL must be unique for the portal database domains release, community, customization, and JCR.

    -   **Default value**

        feedback

    -   **Examples**

        None available

-   **feedback.DbNameOnZos**

    -   **Description**

        The name of the database to be used for this portal database domain. It must comply with your database management software requirements.

    -   **Default value**

        `WPFDBK`

    -   **Examples**

        None available

-   **feedback.DataSourceName**

    -   **Description**

        The name of the data source to be used for this portal database domain. It must comply with the WebSphere Application Server requirements. You cannot use the reserved names releaseDS, communityDS, customizationDS, jcrDS, lmdbDS, and feedback. You can use the same name for all portal database domains that are sharing user ID, password, and JDBC database URL.

    -   **Default value**

        feedback.DbType=db2: `wpfdbkdbDS`

        feedback.DbType=oracle: `wpfdbkdbDS`

        feedback.DbType=sqlserver2005: `wpfdbkdbDS`

        Otherwise: `wpdbDS`

    -   **Examples**

        None available

-   **feedback.DbUrl**

    -   **Description**

        The JDBC database URL to be used to connect with the database of this portal database domain. It must comply with your JDBC Driver software requirements. This property that is combined with the properties database name and schema name must be unique for the portal database domains release, community, customization, and JCR.

    -   **Default value**

        feedback.DbType=db2:

        feedback.DbType=db2_iseries:

        feedback.DbType=db2_zos:

        feedback.DbType=oracle:

        feedback.DbType=sqlserver2005:

        Otherwise: `jdbc:derby:wpsdb;create=true`

    -   **Examples**

        Apache Derby: `jdbc:derby:wpsdb;create=true`

        IBM DB2 with type 4 drivers: `jdbc:db2://:50000/WPFDBK:returnAlias=0;`

        IBM DB2 with type 2 drivers: `jdbc:db2:WPFDBK`

        IBM DB2 for i with type 4 drivers: `jdbc:as400:/WPSDB;metadata source=1;prompt=false`

        IBM DB2 for i with type 2 drivers: `jdbc:db2:\*LOCAL/WPSDB`

        IBM DB2 for z/OS with type 4 drivers: `jdbc:db2://:/`

        IBM DB2 for z/OS with type 2 drivers: `jdbc:db2:`

        Oracle Database with type 4 drivers and thin client: `jdbc:oracle:thin:@//:1521/`

        Oracle Database with type 2 drivers and thick client: `jdbc:oracle:oci:@//:1521/`

        Microsoft SQL Server: `jdbc:sqlserver://:1433;SelectMethod=cursor;DatabaseName=WPFDBK`

-   **feedback.DbUser**

    -   **Description**

        The database user ID used to configure the database objects of this portal database domain. It must comply with your database management software requirements. It is also used by the data source to connect with the database, unless you specify a runtime database user.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **feedback.DbPassword**

    -   **Description**

        The password of the database user ID used to configure the database objects of this portal database domain. It must comply with your database management software requirements. It is also used by the data source to connect with the database, unless you specify a runtime database user. The ConfigEngine cannot validate that the password complies with the software requirements.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **feedback.DbRuntimeUser**

    -   **Description**

        The database user ID used for the data source of the portal database domain to connect with the database during day-to-day operations. It must comply with your database management software requirements. It has fewer permissions than the configuration database user (DbUser) that is used when you leave this blank.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **feedback.DbRuntimePassword**

    -   **Description**

        The password must comply with the database management software requirements. The ConfigEngine cannot validate that the password complies with the software requirements.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **feedback.DBA.DbUser**

    -   **Description**

        The database administration user ID used for privileged database operations during database creation and setup for this portal database domain. It must comply with your database management software requirements.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **feedback.DBA.DbPassword**

    -   **Description**

        The password of the database administration user ID used for privileged database operations during database creation and setup for this portal database domain. It must comply with your database management software requirements. The ConfigEngine cannot validate that the password complies with the software requirements.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **feedback.DbHome**

    -   **Description**

        Oracle Database: The location on the Oracle database server where table spaces for this portal database domain must be created.

        Microsoft: SQL Server The location on the SQL Server database server where the database files for this portal database domain must be created.

    -   **Default value**

        No default value

    -   **Examples**

        Oracle Database: `/product/11.2.0/dbhome\_1`

        Microsoft SQL Server: `C:\\\\Microsoft SQL Server\\\\\\\\MSSQL`

-   **feedback.AdminUrl**

    -   **Description**

        The JDBC database URL used to connect with the SQL Server that contains the database for this portal database domain. It is used for database administration operations. It is the same value that is used for the JDBC database URL, but with the database name omitted.

    -   **Default value**

        No default value

    -   **Examples**

        Microsoft SQL Server 2008: `jdbc:sqlserver://:1433`

        Microsoft SQL Server 2005: `jdbc:sqlserver://:1433`

-   **feedback.DbConfigRoleName**

    -   **Description**

        The name of the role or group for this portal database domain that includes the database permissions that are required by the configuration database user. The configuration database user configures the database objects of this portal database domain. The role or group must comply with your database management software requirements. The configuration database user must be a member of this role or group. If this role or group does not exist, create it and assign it to the feedback.DbUser ID.

    -   **Default value**

        feedback.DbType=db2_iseries: `WPPZNCFG`

        feedback.DbType=db2_zos: `WPPZNCFG`

        Otherwise: `WP_PZN_CONFIG_USERS`

    -   **Examples**

        None available

-   **feedback.DbRuntimeRoleName**

    -   **Description**

        The name of the role or group for this portal database domain that has the database permissions that are required by the runtime database user during day-to-day operations. The role or group must comply with your database management software requirements. The runtime database user must be a member of this role or group. If this role or group does not exist, create it and assign it to the feedback.DbRuntimeUser ID.

    -   **Default value**

        feedback.DbType=db2_iseries: `WPPZNRT`

        feedback.DbType=db2_zos: `WPPZNRT`

        Otherwise: `WP_PZN_RUNTIME_USERS`

    -   **Examples**

        None available

-   **feedback.XDbName**

    -   **Description**

        The database alias used to create the database for this portal database domain. It must comply with your database management software requirements. Required for IBM DB2 that runs on Linux and UNIX operating systems. Also required for IBM DB2 that runs on a Microsoft Windows operating system that uses type 2 JDBC drivers and is running on the same server as HCL Portal.

    -   **Default value**

        `WPFDBK`

    -   **Examples**

        None available

-   **feedback.DbNode**

    -   **Description**

        The name of the database node that is used to create the database for this portal database domain. It must comply with your database management software requirements. Required for IBM DB2 that run on Linux and UNIX operating systems.

    -   **Default value**

        `pznNode`

    -   **Examples**

        None available

-   **feedback.DbHostName**

    -   **Description**

        Required for Microsoft SQL Server 2005 and 2008 only. The host name of the Feedback database.

    -   **Default value**

        `myserver`

    -   **Examples**

        None available

-   **feedback.DbStorageGroup**

    -   **Description**

        The name of the DB2 for z/OS storage group to be used for this portal database domain.

    -   **Default value**

        `WPSSG`

    -   **Examples**

        None available

-   **feedback.DbVolumes**

    -   **Description**

        Defines the volumes of the DB2 for z/OS storage group used for this portal database domain.

    -   **Default value**

        `\*`

    -   **Examples**

        None available

-   **feedback.DbVcat**

    -   **Description**

        Identifies the integrated catalog facility catalog \(VCAT\) for the DB2 for z/OS storage group that is used for this portal database domain.

    -   **Default value**

        No default value

    -   **Examples**

        `DSN910`

-   **feedback.Db4KBufferPoolName**

    -   **Description**

        The name of the DB2 for z/OS 4 K buffer pool to be used for this portal database domain.

    -   **Default value**

        `BP2`

    -   **Examples**

        None available

-   **feedback.Db32KBufferPoolName**

    -   **Description**

        The name of the DB2 for z/OS 32 K buffer pool to be used for this portal database domain.

    -   **Default value**

        `BP32K1`

    -   **Examples**

        None available


## LikeMinds Database Properties

-   **likeminds.DbType**

    -   **Description**

        Database management software to use for the Likeminds domain.

    -   **Valid values**

        `derby`

        `db2`

        `db2_iseries`

        `db2_zos`

        `oracle`

        `sqlserver2005`

    -   **Default value**

        `derby`

    -   **Examples**

        None available

-   **likeminds.DbName**

    -   **Description**

        The name of the database (location name of the DB2 for z/OS subsystem) to be used for this portal database domain. It must comply with your database management software requirements. This property that is combined with the properties schema name and JDBC database URL must be unique for the portal database domains release, community, customization, and JCR.

    -   **Default value**

        likeminds.DbType=db2: `WPLM`

        likeminds.DbType=db2_iseries:

        likeminds.DbType=db2_zos:

        likeminds.DbType=oracle: `WPLM`

        likeminds.DbType=sqlserver2005: `WPLM`

        Otherwise: `wpsdb`

    -   **Examples**

        Apache Derby: `wpsdb`

        IBM DB2: `WPLM`

        IBM DB2 for i with type 4 driver: `/WPSDB`

        IBM DB2 for i with type 2 driver: `\*LOCAL/WPSDB`

        DB2 for z/OS:

        Oracle Database: `WPLM`

        Microsoft SQL Server: `WPLM`

-   **likeminds.DbSchema**

    -   **Description**

        The name to be used to qualify database objects of this portal database domain. It must comply with your database management software requirements. This property that is combined with the properties database name and JDBC database URL must be unique for the portal database domains release, community, customization, and JCR.

    -   **Default value**

        likeminds

    -   **Examples**

        None available

-   **likeminds.DbNameOnZos**

    -   **Description**

        The name of the database to be used for this portal database domain. It must comply with your database management software requirements.

    -   **Default value**

        `WPLM`

    -   **Examples**

        None available

-   **likeminds.DataSourceName**

    -   **Description**

        The name of the data source to be used for this portal database domain. It must comply with the WebSphere Application Server requirements. You cannot use the reserved names releaseDS, communityDS, customizationDS, jcrDS, lmdbDS, and feedback. You can use the same name for all portal database domains that are sharing user ID, password, and JDBC database URL.

    -   **Default value**

        likeminds.DbType=db2: `wplmdbDS`

        likeminds.DbType=oracle: `wplmdbDS`

        likeminds.DbType=sqlserver2005: `wplmdbDS`

        Otherwise: `wpdbDS`

    -   **Examples**

        None available

-   **likeminds.DbUrl**

    -   **Description**

        The JDBC database URL to be used to connect with the database of this portal database domain. It must comply with your JDBC Driver software requirements. This property that is combined with the properties database name and schema name must be unique for the portal database domains release, community, customization, and JCR.

    -   **Default value**

        likeminds.DbType=db2:

        likeminds.DbType=db2_iseries:

        likeminds.DbType=db2\_zos:

        likeminds.DbType=oracle:

        likeminds.DbType=sqlserver2005:

        Otherwise: `jdbc:derby:wpsdb;create=true`

    -   **Examples**

        Apache Derby: `jdbc:derby:wpsdb;create=true`

        IBM DB2 with type 4 drivers: `jdbc:db2://:50000/WPLM:returnAlias=0;`

        IBM DB2 with type 2 drivers: `jdbc:db2:WPLM`

        IBM DB2 for i with type 4 drivers: `jdbc:as400:/WPSDB;metadata source=1;prompt=false`

        IBM DB2 for i with type 2 drivers: `jdbc:db2:\*LOCAL/WPSDB`

        IBM DB2 for z/OS with type 4 drivers: `jdbc:db2://:/`

        IBM DB2 for z/OS with type 2 drivers: `jdbc:db2:`

        Oracle Database with type 4 drivers and thin client: `jdbc:oracle:thin:@//:1521/`

        Oracle Database with type 2 drivers and thick client: `jdbc:oracle:oci:@//:1521/`

        Microsoft SQL Server: `jdbc:sqlserver://:1433;SelectMethod=cursor;DatabaseName=WPLM`

-   **likeminds.DbUser**

    -   **Description**

        The database user ID used to configure the database objects of this portal database domain. It must comply with your database management software requirements. It is also used by the data source to connect with the database, unless you specify a runtime database user.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **likeminds.DbPassword**

    -   **Description**

        The password of the database user ID used to configure the database objects of this portal database domain. It must comply with your database management software requirements. It is also used by the data source to connect with the database, unless you specify a runtime database user. The ConfigEngine cannot validate that the password complies with the software requirements.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **likeminds.DbRuntimeUser**

    -   **Description**

        The database user ID used for the data source of the portal database domain to connect with the database during day-to-day operations. It must comply with your database management software requirements. It has fewer permissions than the configuration database user \(DbUser\) that is used when you leave this blank.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **likeminds.DbRuntimePassword**

    -   **Description**

        The password of the database user ID used for the data source of this portal database domain to connect with the database during day-to-day operations. It must comply with your database management software requirements. The ConfigEngine cannot validate that the password complies with the software requirements.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **likeminds.DBA.DbUser**

    -   **Description**

        The database administration user ID used for privileged database operations during database creation and setup for this portal database domain. It must comply with your database management software requirements.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **likeminds.DBA.DbPassword**

    -   **Description**

        The password of the database administration user ID used for privileged database operations during database creation and setup for this portal database domain. It must comply with your database management software requirements. The ConfigEngine cannot validate that the password complies with the software requirements.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **likeminds.DbHome**

    -   **Description**

        Oracle Database: The location on the Oracle database server where table spaces for this portal database domain must be created.

        Microsoft: SQL Server The location on the SQL Server database server where the database files for this portal database domain must be created.

    -   **Default value**

        No default value

    -   **Examples**

        Oracle Database: `/product/11.2.0/dbhome\_1`

        Microsoft SQL Server: `C:\\\\Microsoft SQL Server\\\\\\\\MSSQL`

-   **likeminds.AdminUrl**

    -   **Description**

        The JDBC database URL used to connect with the SQL Server that contains the database for this portal database domain. It is used for database administration operations. It is the same value that is used for the JDBC database URL, but with the database name omitted.

    -   **Default value**

        No default value

    -   **Examples**

        Microsoft SQL Server 2008: `jdbc:sqlserver://:1433`

        Microsoft SQL Server 2005: `jdbc:sqlserver://:1433`

-   **likeminds.DbConfigRoleName**

    -   **Description**

        The name of the role or group for this portal database domain that includes the database permissions that are required by the configuration database user. The configuration database user configures the database objects of this portal database domain. The role or group must comply with your database management software requirements. The configuration database user must be a member of this role or group. If this role or group does not exist, create it and assign it to the likeminds.DbUser ID.

    -   **Default value**

        likeminds.DbType=db2_iseries: `WPPZNCFG`

        likeminds.DbType=db2_zos: `WPPZNCFG`

        Otherwise: `WP_PZN_CONFIG_USERS`

    -   **Examples**

        None available

-   **likeminds.DbRuntimeRoleName**

    -   **Description**

        The name of the role or group for this portal database domain that has the database permissions that are required by the runtime database user during day-to-day operations. The role or group must comply with your database management software requirements. The runtime database user must be a member of this role or group. If this role or group does not exist, create it and assign it to the likeminds.DbRuntimeUser ID.

    -   **Default value**

        likeminds.DbType=db2_iseries: `WPPZNRT`

        likeminds.DbType=db2_zos: `WPPZNRT`

        Otherwise: `WP_PZN_RUNTIME_USERS`

    -   **Examples**

        None available

-   **likeminds.XDbName**

    -   **Description**

        The database alias used to create the database for this portal database domain. It must comply with your database management software requirements. Required for IBM DB2 that runs on Linux and UNIX operating systems. Also required for IBM DB2 that runs on a Microsoft Windows operating system that uses type 2 JDBC drivers and is running on the same server as HCL Portal.

    -   **Default value**

        `WPLM`

    -   **Examples**

        None available

-   **likeminds.DbNode**

    -   **Description**

        The name of the database node that is used to create the database for this portal database domain. It must comply with your database management software requirements. Required for IBM DB2 that run on Linux and UNIX operating systems.

    -   **Default value**

        `pznNode`

    -   **Examples**

        None available

-   **likeminds.DbHostName**

    -   **Description**

        Required for Microsoft SQL Server 2005 and 2008 only. The host name of the Likeminds database.

    -   **Default value**

        `myserver`

    -   **Examples**

        None available

-   **likeminds.DbStorageGroup**

    -   **Description**

        The name of the DB2 for z/OS storage group to be used for this portal database domain.

    -   **Default value**

        `WPSSG`

    -   **Examples**

        None available

-   **likeminds.DbVolumes**

    -   **Description**

        Defines the volumes of the DB2 for z/OS storage group used for this portal database domain.

    -   **Default value**

        `\*`

    -   **Examples**

        None available

-   **likeminds.DbVcat**

    -   **Description**

        Identifies the integrated catalog facility catalog (VCAT) for the DB2 for z/OS storage group that is used for this portal database domain.

    -   **Default value**

        No default value

    -   **Examples**

        `DSN910`

-   **likeminds.Db4KBufferPoolName**

    -   **Description**

        The name of the DB2 for z/OS 4 K buffer pool to be used for this portal database domain.

    -   **Default value**

        `BP2`

    -   **Examples**

        None available

-   **likeminds.Db32KBufferPoolName**

    -   **Description**

        The name of the DB2 for z/OS 32 K buffer pool to be used for this portal database domain.

    -   **Default value**

        `BP32K1`

    -   **Examples**

        None available


