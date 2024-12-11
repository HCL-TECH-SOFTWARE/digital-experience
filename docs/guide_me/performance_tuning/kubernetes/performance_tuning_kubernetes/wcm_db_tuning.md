# WCM Database Tuning

## Buffer Pools & DB2 Self Tuning Memory Manager

One of the most important database tuning factors is bufferpool sizing. It is important to evaluate the database's physical versus logical reads and size the bufferpools to achieve a 95% or better hit rate, if possible.

DB2 11.5 supports automatic tuning of bufferpool sizes; we enabled this setting on the JCR database and saw good results. We also gave DB2 an initial bufferpool size for each bufferpool to help the self-tuning memory manager (STMM) reach appropriate sizes more quickly after benchmark rampup. This was done as follows:

**Modifying DB2 Bufferpool Sizes**

1. Connect to the database:

    ```bash
    db2 connect to <jcrdb>
    ```

2. Alter the bufferpool sizes:

    ```bash
    db2 alter bufferpool icmlsfreqbp4 size 1000 automatic
    db2 alter bufferpool icmlsvolatilebp4 size 16000 automatic
    db2 alter bufferpool icmlsmainbp32 size 16000 automatic
    db2 alter bufferpool cmbmain4 size 1000 automatic
    ```

3. Terminate the session and reset the connection:

    ```bash
    db2 -v terminate
    db2 connect reset
    ```

Where &lt;jcrdb&gt; is the JCR database name. Note that the other Portal database domains used the default settings for DB2.

More information on DB2 STMM can be found in the DB2 11.5 Info Center.

Finally, we recommend that you use DB2 in 64-bit mode to allow sufficient memory for the necessary database objects. This is particularly important with authoring environments as this can be a very database intensive workload. During our testing, database memory became a limiting factor with this workload and we were able to achieve a significant increase in capacity by moving to 64-bit.

## Query Optimization

Several DB2 parameters related to how queries are parsed and executed may be beneficial for WCM performance. Improvement from the following sections may be highly dependent on data population. When making changes to these parameters, performance benchmarks should be run on realistic datasets to ensure any changes are actually beneficial.

**_DFT_QUERYOPT_**



DB2 database configuration parameter _DFT_QUERYOPT_ uses the default value of 5 in conjunction with the testing and changes made to the JCR and JCR schema. 

This setting is NOT updated automatically within your JCR Database Domain configuration .

**How to Set**

This can be done manually by customers by executing the following DB2 command against the JCR domain database:

db2 update db cfg for &lt;JCRDBNAME&gt; using DFT_QUERYOPT 5

OR

It can also be done by running the following Config Engine Task:

&lt;wp_profile_root&gt;/ConfigEngine/ConfigEngine.sh configure-jcr-db2-dft-queryopt

**_MAX_JOINS_IN_UNION_**

The DB2 registry variable MAX_JOINS_IN_UNION limits the number of joins that the Query Rewrite component of DB2 is allowed to push down into a UNION operator. Some JCR queries result in a large number of unions with the default settings. Changing this setting limits the number of unions DB2 we use in a query, potentially reducing processing time. This setting should be changed when query preparation times are high on queries with multiple joins.

In general, the more complex the SQL statement and the more complex the database, the more possible ways there are for Query Rewrite to rewrite the query and the more possible query plans there are for DB2 to evaluate. Setting MAX_JOINS_IN_UNION in this case limits the number of possible query plans that DB2 considers, and hence the amount of processing that is done to prepare the query while still generating a good query plan.

Note that setting this value has no effect at query optimization level 1 (see previous section for query optimization).

Performance benchmarks show the best performance with the default setting. No change was observed using a setting of 30. However, data population with deep content hierarchies may benefit from changing this parameter to a higher value.

**How to Set**

Run **db2set DB2_UNION_OPTIMIZATION="MAX_JOINS_IN_UNION=30"**

To return to the default setting, run **db2set DB2_UNION_OPTIMIZATION=**

**_Collation_**

By default, collation is disabled for JCR queries. This means that results will not be sorted.

If collation is required, the **jcr.query.collation.db2.enabled** parameter can be enabled. However, note that there will be a performance impact with this setting due to higher database CPU utilization.

**How to Set**

In the WebSphere Integrated Solutions Console

Resources → Resource Environment → Resource Environment Providers → JCR ConfigService PortalContent

**Name:** jcr.textsearch.enabled

**Value**: false

**Value**: false

Set the property **ux** to **true**.

Restart the Portal server.

**DB2 Auto Maintenance**

For performance benchmarks in our WCM authoring enviornments, automatic maintenance was also turned off using the command db2 update db cfg for &lt;jcrdb&gt; using auto_maint off. Maintenance was disabled to ensure that no database statistics or table reorganizations were performed during the measurement. This setting is not recommended for production. When using automatic maintenance, consider configuring the database to only run during periods of low load.

**Oracle**

The same Oracle tunings used for base Portal were also used for WCM. See the Oracle Tuning for details.