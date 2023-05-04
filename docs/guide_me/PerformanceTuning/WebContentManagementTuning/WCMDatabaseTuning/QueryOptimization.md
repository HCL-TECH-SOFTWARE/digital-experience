# Query Optimization

Several DB2 parameters related to how queries are parsed and executed may be beneficial for WCM
performance. Improvement from the following sections may be highly dependent on data population.
When making changes to these parameters, performance benchmarks should be run on realistic datasets
to ensure any changes are actually beneficial.

## DFT_QUERYOPT

Prior to CF07, we recommended setting the DB2 database configuration parameter
"dft_queryopt" to a value of 2 as this provided the best balance of query optimization time and
query execution time for the SQL produced by the JCR.

For CF07 or later, we have changed this recommendation to use the default value of 5 in
conjunction with the testing and changes made to the JCR and JCR schema.
This setting is NOT updated automatically within your JCR Database Domain configuration as
part of the CF07 (or later) upgrade.

## How to Set
This can be done manually by customers by executing the following DB2 command against the
JCR domain database:
db2 update db cfg for <JCRDBNAME> using DFT_QUERYOPT 5

OR

It can also be done by running the following Config Engine Task:
`<wp_profile_root>/ConfigEngine/ConfigEngine.sh configure-jcr-db2-dft-queryopt`

## MAX_JOINS_IN_UNION

The DB2 registry variable MAX_JOINS_IN_UNION limits the number of joins that the Query Rewrite
component of DB2 is allowed to push down into a UNION operator. Some JCR queries result in a large
number of unions with the default settings. Changing this setting limits the number of unions DB2 we use in a query, potentially reducing processing time. This setting should be changed when query preparation
times are high on queries with multiple joins.

In general, the more complex the SQL statement and the more complex the database, the more possible
ways there are for Query Rewrite to rewrite the query and the more possible query plans there are for DB2
to evaluate. Setting MAX_JOINS_IN_UNION in this case limits the number of possible query plans that DB2
considers, and hence the amount of processing that is done to prepare the query while still generating a
good query plan.

Note that setting this value has no effect at query optimization level 1 (see previous section for query
optimization).

Performance benchmarks show the best performance with the default setting. No change was observed
using a setting of 30. However, data population with deep content hierarchies may benefit from changing
this parameter to a higher value.

### How to Set

Run `db2set DB2_UNION_OPTIMIZATION="MAX_JOINS_IN_UNION=30"`

To return to the default setting, run `db2set DB2_UNION_OPTIMIZATION=`

## Collation

By default, collation is disabled for JCR queries. This means that results will not be sorted.
If collation is required, the jcr.query.collation.db2.enabled parameter can be enabled. However, note that
there will be a performance impact with this setting due to higher database CPU utilization.

### How to Set

In the WebSphere Integrated Solutions Console
Resources → Resource Environment → Resource Environment Providers → JCR ConfigService
PortalContent
Name: In the WebSphere Integrated Solutions Console
Resources → Resource Environment → Resource Environment Providers → JCR ConfigService
PortalContent

Name: jcr.textsearch.enabled
Value: false
Value: false
    Set the property ux to true.
    Restart the Portal server.




