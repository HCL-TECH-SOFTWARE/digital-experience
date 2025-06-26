# Troubleshooting JDBC Datasources

## Applies to

> HCL Digital Experience v8.5 and higher

## Introduction

TThis article describes how to troubleshoot/debug problems with JDBC datasources in HCL Digital Experience.
## Instructions

Troubleshooting `JDBC` database-related problems can be complicated and might lead to performance issues when enabling detailed `JDBC` driver traces. It is suggested to start the analysis by troubleshooting `SQL` queries.

### Troubleshooting SQL Queries

1. Enable the trace string `com.ibm.wps.datastore.impl.*=all` by following the instructions in [`Trace logging`](https://help.hcl-software.com/digital-experience/9.5/latest/deployment/manage/troubleshooting/logging_and_tracing/adsyslog/#tra_log).  

2.  Review the traces and check for query execution times by examining timestamps in the logs, correlating by `thread ID`.
    Check for `trace-entries` that contain: `executeQuery Submitting` and `Call stmt.executeQuery() finished`.  

    If you will not find any of such trace-entries try to increase the trace-string to:  

    `com.ibm.ws.rsadapter.jdbc.*=all:com.ibm.websphere.query.*=all`  

3. Review IBM's technote [Collecting Data: Tracing with the IBM Data Server Driver for JDBC and SQLJ](https://www.ibm.com/support/pages/collecting-data-tracing-ibm-data-server-driver-jdbc-and-sqlj) for more details in troubleshooting the problem.  

4. Review IBM's technote [Collecting JDBC Driver Tracing in WebSphere Application Server](http://www-01.ibm.com/support/docview.wss?uid=swg21654565).

### Debugging SQL Queries and Their Result Sets

Note that enabling `JDBC` driver traces might lead to performance problems. If you are interested in debugging `SQL` queries that will be sent from HCL Digital Experience to the database along with their result sets, the following steps might help you obtain more details in the `trace.log` of HCL Digital Experience.

1.  Start HCL Digital Experience and log in to the **IBM Integrated Solutions Console** as administrator.

2.  Navigate to `Resources > JDBC > Data sources > <yourDatasourceName> > Custom properties`.

3. For DB2 datasources increase the value of custom property `traceLevel`to `16384` or `2` or some other value based on the suggested list mentioned in [Provider-specific configuration](https://www.ibm.com/docs/en/was/9.0.5?topic=problems-jdbc-trace-configuration).  

    !!! note
        Depending on the `JDBC` provider (e.g., Microsoft, Oracle), the custom property for increasing the trace level might be different. Contact the `JDBC` driver vendor to determine the correct procedure to enable `JDBC` driver traces.

4. Save the changes (Click to `Apply > Save`).

5. Enable the trace-string `WAS.database=all` by following the instructions of [Trace logging](https://help.hcl-software.com/digital-experience/9.5/latest/deployment/manage/troubleshooting/logging_and_tracing/adsyslog/#tra_log).

6. Restart the HCL Digital Experience server for the changes to take effect.

7.  Reproduce the problem. (For example, execute the desired actions to generate the query to the database.)

8. Review the `SQL` queries and `result sets` in the `trace file` (default location: `<wp_profile_root>/logs/WebSphere_Portal/trace.log`).
