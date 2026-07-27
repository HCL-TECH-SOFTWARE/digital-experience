# How to analyze JCR and XPath query performance

## Applies to

> HCL Digital Experience 9.5 and higher

## Introduction

Tracing repository queries helps identify performance bottlenecks between the application layer, Java Content Repository (JCR), and the database. This article describes how to analyze JCR and XPath query performance.

## Instructions

To analyze JCR and XPath query performance using trace log data, perform the following steps:

1. Enable the following trace string to collect query performance data:

    ```text
    *=info:com.ibm.icm.jcr.query.QueryImpl=finest:com.ibm.icm.ci.query.impl.ResultSetProcessor=finest:com.ibm.icm.da.portable.query.*=finest:com.ibm.icm.da.portable.common.sql.DefaultPConnection=finest:com.ibm.icm.da.portable.common.sql.PPreparedStatement=finest:com.ibm.icm.da.portable.common.sql.PStatement=finest:com.ibm.icm.jcr.query.QueryResultIteratorImpl=finest
    ```

2. Search the generated JCR trace logs using the criteria in the following table to locate the XPath query sent to JCR, the generated SQL sent to the database, and the performance for each stage:

    | Query stage | Search string | Trace log example |
    | :--- | :--- | :--- |
    | Entry to JCR query | `QueryImpl execute includeLocks` | `[Timestamp] 0000006c QueryImpl 2 com.ibm.icm.jcr.query.QueryImpl execute includeLocks=false includeReferences=false includePaths=false statement=//element(*, icm:documentLibrary)[@jcr:uuid = '5375be0046c9f315bf53bf996f9fe841']//(element(*, ibmcontentwcm:webContent) \| element(*, ibmcontentwcm:draftSummary))[@ibmcontentwcm:workflowStage = '3d115a0046c9fef2bf88bf996f9fe841' and (not(@ibmcontentwcm:isPrototype) or @ibmcontentwcm:isPrototype = fn:false()) and (@ibmcontentwcm:classification = 'Content' or @ibmcontentwcm:draftClassification = 'Content')] propertiesToRetrieve=null` |
    | SQL sent to database | `Generated SQL with param markers` | `[Timestamp] 0000006c ResultSetProc 3 Generated SQL with param markers included: WITH NONLEAFS AS (SELECT Links_18.SIID , Links_18.SVID , Links_19.TIID , Links_19.TVID , Links_19.TIX , Links_19.TCTID , <200 more lines....> NodesTab_17.IID)` |
    | Actual query execution | `executeQuery` | `[Timestamp] 0000006c PPreparedStat 3 com.ibm.icm.da.portable.common.sql.PPreparedStatement executeQuery() ==> [...]` |
    | Query cursor return | `openQueryCursor` | `[Timestamp] 0000006c Query 2 com.ibm.icm.da.portable.query.Query openQueryCursor()` <br><br>     **Note:** The difference between the `executeQuery()` and the `openQueryCursor()` is the time spent by the database server executing the SQL (about 15 seconds here)|
    | Result size | `query result size` | `[Timestamp] 0000006c QueryResultIt 2 com.ibm.icm.jcr.query.QueryResultIteratorImpl QueryResultIteratorImpl query result size=34` |
    | Query preparation time | `prepareStatement`| `DefaultPConne 3 prepareStatement: Time to prepare(msec): 0` |
    | Query execution time | `Time to execute` | `PPreparedStat 3 executeQuery: Time to execute(msec): 54773`|

### Debugging XPath query issues

The JCR specification requires nodes in the repository to be retrievable through a query language. The repository supports a subset of the full XPath specification.

To query the repository, an application constructs a query object and executes it to return an iterator of matching nodes. When executing an XPath query, the repository verifies that the query syntax is valid before processing it and returning a result set. If the syntax is invalid, the repository throws an `InvalidQueryException`.

To debug valid XPath queries that do not return expected results, perform the following steps:

1. Recreate the issue while running both the application trace (WCM trace) and JCR trace (`com.ibm.icm.*=finest`). The application trace identifies the issued XPath query and its context, while the JCR trace identifies the generated SQL.

2. Extract the query entry point, exit point, and generated SQL from the gathered trace logs.
