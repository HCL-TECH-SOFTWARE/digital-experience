# CustomLog beans reference

View the CustomLog bean method signatures.

The `com.ibm.wcp.analysis.beans.CustomLog` bean method signatures are:

|CustomLog bean method signatures|Description|
|--------------------------------|-----------|
|```
public void log( HttpServletRequest request,
                 String             key,
                 String             value );
```

|Logs a single pair of custom key/value data.|
|```
public void log( HttpServletRequest request,
                 Hashtable          keyValueData );
```

|Logs multiple pairs of custom key/value data.|

The log methods generate a CustomLogEvent with the request and custom data. The CustomLogEvent is routed to all of the registered log listeners.

CustomLog beans should be instantiated as session beans; however, they do not maintain any session data.


