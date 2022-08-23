# DB2: Enabling support for high availability data replication

Optional: To prevent data loss on DB2, modify the JCR schema to support high availability data replication \(HADR\).

Before you enable the HADR, use the **Database Transfer** option in the Configuration Wizard to transfer your data from Apache Derby to DB2®.

**Tip:** Read the following tips before you enable support for high availability data replication:

-   Do NOT set the custom property **enableClientAffinitiesList** to true. It is not necessary with newer DB2 versions. Setting this value to true in DB2 10.1 means that ONLY servers that are listed in the alternative server names list are used for connecting to the database.
-   The db2inst1 and lcuser values need to be the same passwords on both DB2 servers.

1.  Stop the portal server. Depending on your environment, you might have multiple portal servers to stop.

2.  Back up the JCR database. The reconfigure-jcr-for-hadr task permanently changes the JCR schema.

3.  Open a command prompt and change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\ConfigEngine directory.

4.  Run the reconfigure-jcr-for-hadr task to convert columns in ICMUTMWIDE0 table from NOT LOGGED BLOB \(Binary Large Object\) TO LOGGED BLOB.

    **Note:** For clustered environments, run this task only from one node.

    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh reconfigure-jcr-for-hadr -DTransferDomainList=jcr -DWasPassword=password
    -   Windows™: ConfigEngine.bat reconfigure-jcr-for-hadr -DTransferDomainList=jcr -DWasPassword=password
5.  Start the portal server.

6.  Complete the following steps on the primary databases:

    1.  Add ports for each portal database and for both database servers in the /etc/services file:

        ```
        
        DB2_db2inst1      60000/tcp
        DB2_db2inst1_1    60001/tcp
        DB2_db2inst1_2    60002/tcp
        DB2_db2inst1_END  60003/tcp
        db2c_db2inst1     50000/tcp
        DB2_HADR_COM_1    50003/tcp
        DB2_HADR_COM_2    50004/tcp
        DB2_HADR_JCR_1    50005/tcp
        DB2_HADR_JCR_2    50006/tcp
        DB2_HADR_LIK_1    50007/tcp
        DB2_HADR_LIK_2    50008/tcp
        DB2_HADR_FEE_1    50009/tcp
        DB2_HADR_FEE_2    50010/tcp
        DB2_HADR_REL_1    50011/tcp
        DB2_HADR_REL_2    50012/tcp
        DB2_HADR_CUS_1    50013/tcp
        DB2_HADR_CUS_2    50002/tcp
        ```

        DB2\_HADR\_DB\_1 represents a database on the primary server. DB2\_HADR\_DB\_2 represents a database on the standby server.

    2.  Run the following command, for each portal database, to enable log archiving in the databases:

        ```
        db2 update db cfg for DBNAME using LOGARCHMETH1 LOGRETAIN
        ```

        The archive logs are stored in the log directory. The databases are placed into the backup pending state, which is required for the standby server.

    3.  Run the following command for each portal database to take an offline backup:

        ```
        db2 "backup database DBNAME"
        ```

    4.  Enter the following commands to configure the HADR parameters:

        ```
        db2 update db cfg for DBNAME using HADR_LOCAL_HOST IP\_ADDRESS\_OF\_PRIMARY
        db2 update db cfg for DBNAME using HADR_LOCAL_SVC PORT\_NUMBER\_OF\_PRIMARY
        db2 update db cfg for DBNAME using HADR_REMOTE_HOST IP\_ADDRESS\_OF\_STNDBY
        db2 update db cfg for DBNAME using HADR_REMOTE_SVC PORT\_NUMBER\_OF\_STNDBY
        db2 update db cfg for DBNAME using HADR_REMOTE_INST INSTNAME\_OF\_STNDBY
        db2 update db cfg for DBNAME using HADR_TIMEOUT 120
        db2 update db cfg for DBNAME using HADR_SYNCMODE NEARSYNC
        db2 update db cfg for DBNAME using HADR_SPOOL_LIMIT 0
        db2 update db cfg for DBNAME using HADR_REPLAY_DELAY 0
        db2 update db cfg for DBNAME using HADR_PEER_WINDOW 0
        db2 update db cfg for DBNAME using LOGINDEXBUILD ON
        ```

        For example:

        ```
        db2 update db cfg for COM85DB using HADR_LOCAL_HOST psvtclc08.rtp.raleigh.ibm.com
        db2 update db cfg for COM85DB using HADR_LOCAL_SVC 50003
        db2 update db cfg for COM85DB using HADR_REMOTE_HOST 9.37.17.237
        db2 update db cfg for COM85DB using HADR_REMOTE_SVC 50004
        db2 update db cfg for COM85DB using HADR_REMOTE_INST db2inst1
        db2 update db cfg for COM85DB using HADR_TIMEOUT 120
        db2 update db cfg for COM85DB using HADR_SYNCMODE NEARSYNC
        db2 update db cfg for COM85DB using HADR_SPOOL_LIMIT 0
        db2 update db cfg for COM85DB using HADR_REPLAY_DELAY 0
        db2 update db cfg for COM85DB using HADR_PEER_WINDOW 0
        db2 update db cfg for COM85DB using LOGINDEXBUILD ON
        ```

    5.  Enter the following command to update the database catalog with alternative server information:

        ```
        UPDATE ALTERNATE SERVER FOR DATABASE database USING HOSTNAME hostname PORT instance\_portnumber
        ```

        For example:

        ```
        db2 UPDATE ALTERNATE SERVER FOR DATABASE COM85DB USING HOSTNAME 9.37.17.237 PORT 50000
        ```

    6.  Run the following command for each portal database to take an offline backup:

        ```
        db2 "backup database DBNAME"
        ```

7.  Complete the following steps on the standby databases:

    1.  Ensure that both the primary and standby servers are on the same DB2 level so that a mismatch situation does not occur. Run the db2level command on both servers to check whether they are on the same DB2 version and fix pack.

    2.  Add ports for each portal database and for both database servers in the /etc/services file:

        ```
        
        DB2_db2inst1      60000/tcp
        DB2_db2inst1_1    60001/tcp
        DB2_db2inst1_2    60002/tcp
        DB2_db2inst1_END  60003/tcp
        db2c_db2inst1     50000/tcp
        DB2_HADR_COM_1    50003/tcp
        DB2_HADR_COM_2    50004/tcp
        DB2_HADR_JCR_1    50005/tcp
        DB2_HADR_JCR_2    50006/tcp
        DB2_HADR_LIK_1    50007/tcp
        DB2_HADR_LIK_2    50008/tcp
        DB2_HADR_FEE_1    50009/tcp
        DB2_HADR_FEE_2    50010/tcp
        DB2_HADR_REL_1    50011/tcp
        DB2_HADR_REL_2    50012/tcp
        DB2_HADR_CUS_1    50013/tcp
        DB2_HADR_CUS_2    50002/tcp
        ```

        DB2\_HADR\_DB\_1 represents a database on the primary server. DB2\_HADR\_DB\_2 represents a database on the standby server.

    3.  Copy the backup images from the primary server to the standby server.

    4.  Run the following command to restore the database:

        ```
        db2 "restore database DBNAME"
        ```

    5.  Enter the following commands to configure the HADR parameters:

        ```
        db2 update db cfg for DBNAME using HADR_LOCAL_HOST IP\_ADDRESS\_OF\_STNDBY
        db2 update db cfg for DBNAME using HADR_LOCAL_SVC PORT\_NUMBER\_OF\_STNDBY
        db2 update db cfg for DBNAME using HADR_REMOTE_HOST IP\_ADDRESS\_OF\_PRIMARY
        db2 update db cfg for DBNAME using HADR_REMOTE_SVC PORT\_NUMBER\_OF\_PRIMARY
        db2 update db cfg for DBNAME using HADR_REMOTE_INST INSTNAME\_OF\_PRIMARY
        db2 update db cfg for DBNAME using HADR_TIMEOUT 120
        db2 update db cfg for DBNAME using HADR_SYNCMODE NEARSYNC
        db2 update db cfg for DBNAME using HADR_SPOOL_LIMIT 0
        db2 update db cfg for DBNAME using HADR_REPLAY_DELAY 0
        db2 update db cfg for DBNAME using HADR_PEER_WINDOW 0
        db2 update db cfg for DBNAME using LOGINDEXBUILD ON
        ```

        For example:

        ```
        db2 update db cfg for COM85DB using HADR_LOCAL_HOST 9.37.17.237
        db2 update db cfg for COM85DB using HADR_LOCAL_SVC 50004
        db2 update db cfg for COM85DB using HADR_REMOTE_HOST psvtclc08.rtp.raleigh.ibm.com
        db2 update db cfg for COM85DB using HADR_REMOTE_SVC 50003
        db2 update db cfg for COM85DB using HADR_REMOTE_INST db2inst1
        db2 update db cfg for COM85DB using HADR_TIMEOUT 120
        db2 update db cfg for COM85DB using HADR_SYNCMODE NEARSYNC
        db2 update db cfg for COM85DB using HADR_SPOOL_LIMIT 0
        db2 update db cfg for COM85DB using HADR_REPLAY_DELAY 0
        db2 update db cfg for COM85DB using HADR_PEER_WINDOW 0
        db2 update db cfg for COM85DB using LOGINDEXBUILD ON
        ```

    6.  Enter the following command to update the database catalog with alternative server information:

        ```
        UPDATE ALTERNATE SERVER FOR DATABASE database USING HOSTNAME hostname PORT instance\_portnumber
        ```

        For example:

        ```
        db2 UPDATE ALTERNATE SERVER FOR DATABASE COM85DB USING HOSTNAME psvtclc08.rtp.raleigh.ibm.com PORT 50000
        ```

    7.  Run the following command to start the HADR on the standby server for each portal database:

        ```
        db2 start hadr on database DBNAME as standby
        ```

8.  Complete the following steps on the primary server:

    1.  Run the following command to activate the database:

        ```
        db2 activate database DBNAME
        ```

    2.  Run the following command for each portal database to start the HADR:

        ```
        db2 start hadr on database DBNAME as primary
        ```

9.  Run the following command to verify that the HADR is running:

    ```
    db2pd -db DBNAME -hadr
    ```

10. Complete the following steps to set up the IBM® WebSphere® Application Server JDBC connections:

    Go to [FAQ: How to configure the JDBC driver for automatic client re-route](https://www.ibm.com/support/pages/faq-how-configure-jdbc-driver-automatic-client-re-route), option 2, for information and the latest updates.

    1.  Log in to the WebSphere Integrated Solutions Console.

    2.  Go to **Resources** \> **JDBC** \> **JDBC providers** \> **wpdbJDBC\_db2** \> **Data sources** \> **JCR85DBLADS** \> **WebSphere Application Server data source properties**.

    3.  Go to the **Advanced DB2 features** section.

    4.  Ensure that the following information is set:

        -   **Retry interval for client reroute**: Enter a minimum of 5 seconds.
        -   **Maximum retries for client reroute**: Enter a minimum of 3 retries.
        -   **Alternate server names**: Enter an alternative server.
        -   **Alternate port numbers**: For example, enter 50000.
    5.  Save your changes.

    6.  Restart the WebSphere Application Server application servers.

    7.  Validate the connection by testing it for each data source.



**Related information**  


[Starting and stopping servers, deployment managers, and node agents](../admin-system/stopstart.md)

