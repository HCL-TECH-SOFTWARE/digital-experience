# CSV Export of REST query results

The results from a query can be exported to a CSV file. The query request requires two things to invoke the CSV export:

1. The request Accept header must be set to application/octet-stream
2. The request mime-type parameter must be set to text/csv

For example:

```
Request Header
    Accept: "application/octet-stream"

HTTP 1.1 GET /wps/mycontenthandler/wcmrest/query?name=SiteAreaName&mime-type=text/csv
```

<pre>
# ============================================================
# wcmrest:query?name=SiteAreaName&mime-type=text%2Fcsv
# ============================================================
ID,NAME,TITLE,TYPE,WORKFLOW_STATUS,AUTHORS,OWNERS,CREATION_DATE,CREATOR,LAST_MODIFIED_DATE,LAST_MODIFIER,LANGUAGE,PATH,PUBLISH_DATE,EXPIRATION_DATE,GENERAL_DATE_ONE,GENERAL_DATE_TWO
ea4dacb7-df97-467f-a9d8-b6fc15377d78,"SiteAreaName","SiteAreaTitle",Site Area,DRAFT,"uid=wpsadmin,o=defaultWIMFileBasedRealm;uid=admin2,o=defaultWIMFileBasedRealm",,"Tue, 23 May 2023 20:47:07.279Z","uid=wpsadmin,o=defaultWIMFileBasedRealm","Thu, 01 Jun 2023 14:11:10.689Z","uid=wpsadmin,o=defaultWIMFileBasedRealm","en","TestLibrary4831061","Mon, 22 May 2023 14:05:03.000Z","Wed, 09 Jun 2088 00:00:00.000Z","Thu, 04 Jul 1776 04:00:00.000Z","Wed, 31 May 2023 17:00:00.000Z"
</pre>


## CSV export file contents

The CSV file normally consists of three rows of comments, one row of headers, and then the results rows for all items found matching the query.

### Comment rows

The comment lines generated at the top of the file save the query that was used to produce these results. The export CSV file uses this format for the comments:

<pre>
# ============================================================
# wcmrest:query?mime-type=text%2Fcsv&options=details&options=item-path&options=workflow&owner=user1&sort=title_ascending%2Cmodified_descending
# ============================================================
</pre>

Most CSV tools recognize the syntax of a line starting with # as being a comment, but it is not part of the CSV standard. In the case where the CSV comment lines should not be automatically generated, a config setting can be used to disable this feature. You define and manage options in the **WCM WCMConfigService** service by using the WebSphere® Integrated Solutions Console.

-   `wcm.rest.disable.csv.export.comments=true`

### Header row

The CSV file uses the following column headers:

<pre>
ID,NAME,TITLE,TYPE,WORKFLOW_STATUS,AUTHORS,OWNERS,CREATION_DATE,CREATOR,LAST_MODIFIED_DATE,LAST_MODIFIER,LANGUAGE,PATH,PUBLISH_DATE,EXPIRATION_DATE,GENERAL_DATE_ONE,GENERAL_DATE_TWO
</pre>

For fields that can have multiple entries such as AUTHORS and OWNERS, the entries are delimited with a semi-colon.
The PATH entries are delimited with a /. 