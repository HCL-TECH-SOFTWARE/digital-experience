# How to analyze JCR and XPath query performance

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

This how to will help you analyze JCR and XPath query performance. 

## Instructions

The following steps show how to search through a JCR trace for data showing the query performance. Note that this assumes a trace was collected using this tracestring:

>com.ibm.icm.jcr.query.QueryImpl=finest:com.ibm.icm.ci.query.impl.ResultSetProcessor=finest:com.ibm.icm.da.portable.query.*=finest:com.ibm.icm.da.portable.common.sql.DefaultPConnection=finest:com.ibm.icm.da.portable.common.sql.PPreparedStatement=finest:com.ibm.icm.da.portable.common.sql.PStatement=finest:com.ibm.icm.jcr.query.QueryResultIteratorImpl=finest

The following lines in the trace will show the XPath query being sent to JCR, the generated SQL being sent to the database, and the performance for each:

- The entry to JCR query: Search string: QueryImpl execute includeLocks

>Example: [datetime] 0000006c QueryImpl 2 com.ibm.icm.jcr.query.QueryImpl execute includeLocks=false includeReferences=false includePaths=false statement=//element(, icm:documentLibrary)[@jcr:uuid = '5375be0046c9f315bf53bf996f9fe841']//(element(, ibmcontentwcm:webContent) | element(*, ibmcontentwcm:draftSummary))[@ibmcontentwcm:workflowStage = '3d115a0046c9fef2bf88bf996f9fe841' and (not(@ibmcontentwcm:isPrototype) or @ibmcontentwcm:isPrototype = fn:false()) and (@ibmcontentwcm:classification = 'Content' or @ibmcontentwcm:draftClassification = 'Content')] propertiesToRetrieve=null

- The SQL sent to the database: Search string: Generated SQL with param markers

>Example: [datetime] 0000006c ResultSetProc 3 Generated SQL with param markers included: WITH NONLEAFS AS (SELECT Links_18.SIID , Links_18.SVID , Links_19.TIID , Links_19.TVID , Links_19.TIX , Links_19.TCTID , <200 more lines....> NodesTab_17.IID)

- The actual query: Search string: executeQuery

>Example [datetime] 0000006c PPreparedStat 3 com.ibm.icm.da.portable.common.sql.PPreparedStatement executeQuery() ==> [...]

- The return from the query: Search string: openQueryCursor

>Example: [datetime] 0000006c Query 2 com.ibm.icm.da.portable.query.Query openQueryCursor()

NOTE: The difference between the executeQuery() and the openQueryCursor() is the time spent by the database server executing the SQL (about 15 seconds here).

- The result size of the query: Search string: query result size

>Example: [datetime] 0000006c QueryResultIt 2 com.ibm.icm.jcr.query.QueryResultIteratorImpl QueryResultIteratorImpl query result size=34

- The query execute time: Search string: Time to execute

>Example: PPreparedStat 3 executeQuery: Time to execute(msec): 54773

- Before that, Query Prepare time will come out on a line like this:
>DefaultPConne 3 prepareStatement: Time to prepare(msec): 0

**Xpath query issues**

The JCR spec declares that nodes within the repository must be retrievable by way of a query language. The query language supported by our repository implementation is XPath. Technically, a subset of the full XPath specification is supported by the repository for retrieving nodes from the repository.

To use this function, an application will construct a "query" object and execute that query against the repository returning an "iterator" of results. The results are the nodes that met the XPath query criteria.

The execution of an XPath query against the repository includes two primary steps: validation and execution. The validation step ensures that the XPath query string specified by the application is of a syntactically valid form and can be processed by the repository. If the XPath query is of an invalid form, then the query will throw an InvalidQueryException which indicates to the application that the XPath was not syntactically valid. If the XPath is syntactically valid, then the query is accepted and processed by the repository and a "result set" is returned.

In order to debug any issues with XPath queries that are valid but not returning results as expected, there are the following steps:

1. Recreate the failing query with both the application trace (WCM trace) and JCR trace (com.ibm.icm.*=finest). The application trace will identify the XPath query being issued as well as the context of that query. The JCR trace will identify the generated SQL that has been generated from the XPath.

2. Once you gather the traces, obtain the entry and exit points from the query, as well as the generated SQL.