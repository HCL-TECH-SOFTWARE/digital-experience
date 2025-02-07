# Sample steps to implement Datasource JDBC tracing for DB2

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

## Instructions

Try enabling with this trace first:

`com.ibm.wps.datastore.impl.*=all`

Then check if query execute times by looking for timestamps of these entries in the logs on the same thread:

`executeQuery Submitting
Call stmt.executeQuery() finished`

If it's not working and no where to be found in logs, then try with this JDBC trace string:

`com.ibm.ws.rsadapter.jdbc.*=all:com.ibm.websphere.query.*=all`

See if using this [DB2 Database article](https://www.ibm.com/support/pages/collecting-data-tracing-ibm-data-server-driver-jdbc-and-sqlj) helps expose more details

And this article as well [Collecting JDBC Driver Tracing in WebSphere Application Server](http://www-01.ibm.com/support/docview.wss?uid=swg21654565)

Most of the time, you are only interested in the queries going to the database and the query results. To see these in the Portal trace.log:

* Start Portal and login to the WAS Admin Console as administrator

* `Resources > JDBC > Data sources > yourDatasourceName > Custom properties > traceLevel` > set to 16384 or 2 or some other value based on the suggested list > `Apply > Save` > No server restart is required

* Enter this tracestring in the WAS Admin Console Logs and Trace Runtime Tab or by logging into `Portal > Administration > Enable Tracing:`

        WAS.database=all

* Execute the desired actions to generate the query to the database

* Review query and results in `<wp_profile_root>/logs/WebSphere_Portal/trace.log`
