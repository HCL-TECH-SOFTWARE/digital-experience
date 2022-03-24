# Category beans reference 

Learn about the various method signatures of Category beans.

The `com.ibm.wcp.analysis.beans.Category` bean method signatures are:

|CustomLog bean method signatures|Description|
|--------------------------------|-----------|
|```
public void log( HttpServletRequest request, 
                 String category ) 
```

|Logs a single category literal.|
|```
public void log( HttpServletRequest request, 
                 String[]  categories ) 
```

|Logs an array of category literals.|
|```
public void log( HttpServletRequest request, 
                 LoggableResource   resource ) 
```

|Logs categories of interest by querying the `LoggableResource` interface of the object.|

The `LoggableResource` interface can be implemented in addition to the Resource interface in order to facilitate logging. The categories of you resources can then be stored and retrieved from a database. By using this interface, you avoid the specification of category literals in your JSPs.

```
public interface LoggableResource
{
   String[] getTopics( );
}

```

Each of the topics returned by `getTopics` is logged as a category. If `getTopics` returns null, no category will be logged.

The log methods create a CategoryEvent with the request and category. The CategoryEvent is routed to all of the registered log listeners.

Category beans should be instantiated as session beans. They maintain category information for the current session including the categories logged and their corresponding log counts.

The following methods are accessible through rules. They can also be accessed directly through the category bean.

```
public String[] getCategoryNames( HttpServletRequest request)
public int      getCategoryCount( HttpServletRequest request,
                                  String category )

```

**Parent topic:**[Category beans ](../pzn/pzn_category_beans.md)

**Parent topic:**[Category beans ](../pzn/pzn_category_beans.md)

