# Action beans reference

View some additional information related to Action beans and associated methods.

The `com.ibm.wcp.analysis.beans.Action` bean method signatures are:

|Action bean method signatures|Description|
|-----------------------------|-----------|
|public void log( HttpServletRequest request, <br>                    String actionName )|Logs a non-resource specific action|
|<br><pre>\```public void log( HttpServletRequest request, <br>                    String resourceId,                    String collectionName, <br>                    String actionName )<br>```|Logs a resource specific action|
|<br><pre>\```public void log( HttpServletRequest request, <br>                    String resourceId,<br>                    String collectionName,<br>                     String actionName,<br>                    String key, <br>                    String value )<br>```|Logs a resource specific action with key/value action datum|
|<br><pre>\```public void log( HttpServletRequest request, <br>                    String resourceId,<br>                    String collectionName, <br>                    String actionName,<br>                    Hashtable keyValueData )<br>```|Logs a resource specific action with multiple key/value action data. Each key can have a single value specified by a string object or multiple values specified by a string array|

Action beans should be instantiated as session beans. They maintain user action information for the current session including the actions logged by resource and their corresponding log counts.

The following methods are accessible from rules. These methods are provided through a custom application object.

```
public String[] getActionNames(HttpServletRequest request);
public int      getActionCount(HttpServletRequest request, String actionName );
```

Actions can be logged with or without respect to a specific resource. For example, the "OrderCancel" action does not apply to a specific resource whereas the "BrowseContent" action applies to a specific content resource.

If the call to the action log method specifies a `resourceId` and the `collectionName` is `null`, the name of a `ResourceCollection` is inferred. The `ResourceCollection` used will be any one containing a `resource` with the specified `resourceId`. The determination of the `ResourceCollection` used in this scenario is non-deterministic. Note that these variants are suitable for user implementations supporting one and only one `ResourceCollection` per `resource` class. If an implementation utilizes multiple `ResourceCollections` for the same `resource` class, the `collectionName` should be specified.


