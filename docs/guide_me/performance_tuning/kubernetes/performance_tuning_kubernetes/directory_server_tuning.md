# Directory Server Tuning

IBM Security Verify Directory (ISVD) uses a DB2 database for storing user information. This database is typically located on the same system as the directory server. If your workload involves creating, updating, or deleting users, then occasional database maintenance may be needed on this database.

On a modern server, it should be feasible to fit the majority of your user population in memory on the LDAP server. The directory servers in our base Portal Scenario measurements were tuned with this goal in mind. Note that in ISVD, both the LDAP server and its underlying DB need to be tuned to support this goal.

The easiest way to configure ISVD is to use the graphical idsxcfg tool located in the sbin directory of your LDAP install location (usually /opt/ibm/ldap/V6.3/sbin on UNIX systems). Under the ‘Database tasks’ item, select ‘Performance tuning’. This will open a wizard interface that sets the necessary values based on user input. The percentage of system memory used by the instance should be set to 90%. The DB2 buffer pool sizes should be left as AUTOMATIC, the default. Other values should be set based on the LDAP user population.

Alternatively, the following values can be set manually in ibmslapd.conf. This file is in the etc directory of the LDAP instance home which is set to /home/dsrdbm01/idsslapd-dsrdbm01 by default on UNIX systems. You must restart the LDAP server after changing these values.

These values are applicable for the base Portal data population of 100,000 users and 15,000 groups. Note that the entry cache size and group member cache size are set to the number of users and groups in LPA so that all users and groups should be cached by the server.

IBM Security Verify Directory (ISVD) Settings

| Parameter | Value |
| --- | --- |
| ibm-slapdACLCacheSize | 25000 |
| ibm-slapdEntryCacheSize | 100000 |
| ibm-slapdFilterCacheSize | 1000 |
| ibm-slapdFilterCacheBypassLimit | 100 |
| ibm-slapdDbConnections | 15  |
| ibm-slapdGroupMembersCacheSize | 15000 |
| ibm-slapdGroupMembersCacheBypassLimit | 100 |

During Medium config tests, we utilized an OpenLDAP container. We recommend that you use your own LDAP directory for performance testing. The OpenLDAP container provided a lightweight and flexible solution that met our testing needs, and this approach can be used as a reference for your own performance tuning efforts.