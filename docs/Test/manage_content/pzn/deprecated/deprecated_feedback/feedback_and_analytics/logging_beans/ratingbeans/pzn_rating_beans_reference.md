# Rating beans reference

Learn about the various method signatures of Rating beans.

The `com.ibm.wcp.analysis.beans.Rating` bean method signatures are:

|Rating bean method signatures|Description|
|-----------------------------|-----------|
|<br><pre>\```<br>public void log( HttpServletRequest request, <br>                 Resource           resource, <br>                 int                prefRating ); <br>```|Logs a rating for a Resource object. A ResourceCollection with the same resource type will be determined and used for logging the collection name. If you have multiple ResourceCollections containing objects of the same class, you should use the log method that accepts the resourceId and collectionName.|
|<br><pre>\```<br>public void log( HttpServletRequest request, <br>                 String             resourceId, <br>                 String             collectionName, <br>                 int                prefRating );<br>```|Logs a rating using a resource id and collection name.|
|<br><pre>\```<br>public void log( HttpServletRequest request, <br>                 String             resourceId, <br>                 String             collectionName, <br>                 int                prefRating,<br>                 Hashtable          ratingData )<br>```|Logs a resource-specific rating with multiple key/value rating data. Each key can have a single value specified by a string object, or multiple values specified by a string array.|

The log methods generate a RatingEvent object with the request and rating data. These events are routed to all of the registered log listeners.

Rating beans should be instantiated as session beans; however, they do not maintain rating information for the current session.


