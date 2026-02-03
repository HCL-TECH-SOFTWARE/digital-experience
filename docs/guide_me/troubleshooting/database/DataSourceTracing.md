# How to troubleshoot JDBC datasources

## Applies to

> HCL Digital Experience v8.5 and higher

## Introduction

Troubleshooting Java Database Connectivity (JDBC) database-related problems can be complicated and might lead to performance issues when enabling detailed JDBC driver traces. It is suggested to start the analysis by troubleshooting the SQL queries. This article describes how to troubleshoot or debug JDBC datasources in HCL Digital Experience (DX).

## Instructions

To troubleshoot JDBC datasources, you can [troubleshoot](#troubleshooting-sql-queries) or [debug](#debugging-sql-queries-and-their-result-sets) SQL queries.

### Troubleshooting SQL queries

To troubleshoot SQL queries, refer to the following steps:

1. Enable the trace string `com.ibm.wps.datastore.impl.*=all` by following the instructions in [Trace logging](../../../../deployment/manage/troubleshooting/logging_and_tracing/adsyslog.md#trace-logging).

2. Review the traces and check for query execution times by examining timestamps in the logs, correlating by thread ID.

    Check for trace-entries that contain `executeQuery Submitting` and `Call stmt.executeQuery() finished`.

    If you do not find trace-entries, try increasing the trace-string to:
    `com.ibm.ws.rsadapter.jdbc.*=all:com.ibm.websphere.query.*=all`  

For more information on troubleshooting the problem, refer to the following technotes:

- [Collecting Data: Tracing with the IBM Data Server Driver for JDBC and SQLJ](https://www.ibm.com/support/pages/collecting-data-tracing-ibm-data-server-driver-jdbc-and-sqlj){target="_blank"}
- [Collecting JDBC Driver Tracing in WebSphere Application Server](http://www-01.ibm.com/support/docview.wss?uid=swg21654565){target="_blank"}

### Debugging SQL queries and their result sets

To debug SQL queries, refer to the following steps:

!!!note
    JDBC driver traces might lead to performance problems. If you want to debug SQL queries that will be sent from HCL DX to the database along with their result sets, the following steps might help you obtain more details in the `trace.log` file of HCL DX.

1. Start HCL DX and log in to the WebSphere Integrated Solutions Console as administrator.
2. Navigate to **Resources > JDBC > Data sources > yourDatasourceName > Custom properties**.
3. For DB2 datasources, change the value of the `traceLevel` custom property to `16384`, `2`, or some other value based on the suggested list mentioned in [Provider-specific configuration](https://www.ibm.com/docs/en/was/9.0.5?topic=problems-jdbc-trace-configuration){target="_blank"}.

    !!! note
        Depending on the JDBC provider (for example, Microsoft or Oracle), the custom property for increasing the trace level might be different. Contact the JDBC driver vendor to determine the correct procedure to enable JDBC driver traces.

4. Click **Apply**.
5. Click **Save** at the top of the console messages.
6. Enable the trace string `WAS.database=all` by following the instructions in [Trace logging](../../../../deployment/manage/troubleshooting/logging_and_tracing/adsyslog.md#trace-logging).
7. Restart the HCL DX server.
8. Reproduce the problem. For example, execute the desired actions to generate the query to the database.
9. Review the SQL queries and result sets in the trace file. The default location is at `<wp_profile_root>/logs/WebSphere_Portal/trace.log`.
