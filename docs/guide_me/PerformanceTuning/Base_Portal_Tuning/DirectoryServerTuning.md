# Directory Server Tuning

Our measurements used IBM Tivoli Directory Server version 6.3 (ITDS) as the directory server. ITDS use a
DB2 database for storing user information. This database is typically located on the same system as the
directory server. If your workload involves creating, updating, or deleting users, then occasional database
maintenance may be needed on this database.

On a modern server, it should be feasible to fit the majority of your user population in memory on the LDAP
server. The directory servers in our base Portal Scenario measurements were tuned with this goal in mind.
Note that in ITDS, both the LDAP server and its underlying DB need to be tuned to support this goal.

The easiest way to configure ITDS is to use the graphical idsxcfg tool located in the sbin directory of your
LDAP install location (usually /opt/ibm/ldap/V6.3/sbin on UNIX systems). Under the ‘Database tasks’ item,
select ‘Performance tuning’. This will open a wizard interface that sets the necessary values based on user
input. The percentage of system memory used by the instance should be set to 90%. The DB2 buffer pool
sizes should be left as AUTOMATIC, the default. Other values should be set based on the LDAP user
population.

Alternatively, the following values can be set manually in ibmslapd.conf. This file is in the etc directory of
the LDAP instance home which is set to /home/dsrdbm01/idsslapd-dsrdbm01 by default on UNIX systems.
You must restart the LDAP server after changing these values.

These values are applicable for the base Portal data population of 100,000 users and 15,000 groups. Note
that the entry cache size and group member cache size are set to the number of users and groups in LPA so
that all users and groups should be cached by the server.

|Parameter|Value|
|---|---|
|ibm-slapdACLCacheSize |25000|
|ibm-slapdEntryCacheSize <br> ibm-slapdFilterCacheSize| 100000<br> 1000|
|ibm-slapdFilterCacheBypassLimit <br>ibm-slapdDbConnections| 100<br> 15|
|ibm-slapdGroupMembersCacheSize<br> ibm-slapdGroupMembersCacheBypassLimit| 15000<br> 100|