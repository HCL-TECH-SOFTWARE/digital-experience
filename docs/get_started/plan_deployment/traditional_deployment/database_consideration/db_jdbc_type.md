# JDBC type 2 and type 4 drivers

The Configuration Wizard uses JDBC type 4 drivers by default. You can change the default selection in the Configuration Wizard.

During step 2, Customize Values, click **Advanced** to change the driver type.

When you use a JDBC type 2 connection, HCL Portal and DB2® Connect are installed on one system \(the local system\). The DB2 server is installed on a different system \(the remote system\).

When you use a JDBC type 4 connection, you do not need DB2 Connect. Instead, the DB2 Universal JDBC driver that is supplied with DB2 is copied to portal server. It is used within the Java virtual machine \(JVM\) of HCL Portal and connects directly to the remote DB2 server.

Depending on your database software, there might be more required configuration steps for using type 2 drivers. Review the installing database software topics.

???+ info "Related information"
    - [Installing and preparing Oracle or Oracle RAC](../../../../deployment/install/traditional/install_prereq_software/prereq_db/oracle_inst.md)
    - [Installing and preparing DB2 for z/OS](../../../../deployment/install/traditional/install_prereq_software/prereq_db/db2z_inst.md)
    - [Installing and preparing DB2](../../../../deployment/install/traditional/install_prereq_software/prereq_db/inst_db2.md)

