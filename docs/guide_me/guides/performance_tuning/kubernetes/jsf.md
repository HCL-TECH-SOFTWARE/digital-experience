# Java Server Faces (JSF)

The [Apache JSF documentation](https://www.oracle.com/java/technologies/javaserverfaces.html){target="_blank"} highlights three configuration settings that can lead to minor performance improvements:

- `PROJECT_STAGE=production`  
- `COMPRESS_STATE_IN_SESSION=false`  
- `SERIALIZE_STATE_IN_SESSION=false`

These parameters should be set in the `web.xml` file for the JSF portlet.

## Best Practices

A JSF portlet should follow some best practices. This is not a complete list of best practices. Rather, it is a list of practices that allowed our evaluation to get improved throughput.

- When displaying large `dataTable` components in JSF, always implement pagination. Rendering thousands of rows at once is resource-intensive and can significantly degrade performance.

- void fetching database records through a bean unless they are explicitly needed. Populating beans incurs processing overhead, so only retrieve and populate data that your application will actually use.

- Avoid repeated JNDI lookups in data access beans.
Performing a context lookup for every database operation, such as:

```
javax.naming.InitialContext ctx = new javax.naming.InitialContext(); datasource = (DataSource) ctx.lookup(properties.getProperty("DATASOURCE"));
```
This is an expensive call. It should be done once and the result should be stored and reused for all later invocations.

- Memory can be freed faster if the managed bean data are stored in the request scope instead of in the user session scope.