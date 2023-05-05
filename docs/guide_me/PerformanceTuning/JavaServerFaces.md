# Java Server Faces (JSF)

Apache JSF document http://myfaces.apache.org/docindex.html mentions 3 items that led to a minor
improvement:
PROJECT_STAGE=production
COMPRESS_STATE_IN_SESSION=false
SERIALIZE_STATE_IN_SESSION=false
Those are set in the web.xml for the JSF portlet.

## Best Practices

A JSF portlet should follow some best practices. This is not a complete list of best practices. Rather it is a list
of practices that allowed our evaluation to get improved throughput.

- If you're displaying large JSF dataTables, they should be paginated. Displaying a thousand rows at
once via a JSF dataTable is expensive
- Do not fetch data base records via a bean, which you are not going to use. Populating the beans is
expensive. Avoid that overhead by fetching only records your application is going to use.
- Data access beans should not perform a 'context lookup' for every database access like this:

javax.naming.InitialContext ctx = new javax.naming.InitialContext(); datasource = (DataSource)
ctx.lookup(properties.getProperty("DATASOURCE"));

This is an expensive call. It should be done once and the result should be stored and reused for all
later invocations.

- Memory can be freed faster if the managed bean data are stored in the request scope instead of in
the user session scope.