# APIs for multivalue properties 

Use the com.ibm.websphere.personalization.resources.IMVResource interface to enable mapping multivalue properties. Use the com.ibm.websphere.personalization.resources.IMultiValueUtils interface for retrieving multivalue properties when those resources are in a database.

The com.ibm.websphere.personalization.resources.IMVResource interface extends the Resource interface and enables mapping multivalue properties. Implementing this interface is only required when an `IMultiValueUtils` implementation is used by the `ResourceManager3`. This is the default case for resources generated with the Portal tools, but may not be necessary for custom resources.

|Method|Explanation|
|------|-----------|
|setMultiValueUtils\(IMultiValueUtils instance\)|Saves the reference to the instance of MultiValueUtils. That reference is used when invoking the fillinMultiValueProperties method of the MultiValueUtils class. This method does not return output.|
|addMultiValuePropertyValue\(String propertyname, Object propertyvalue\)|Enables the `IMVResource` instance to add values for multivalue properties. This method does not return output.|

The interface com.ibm.websphere.personalization.resources.IMultiValueUtils is a set of utilities for retrieving multivalue properties when those resources are in a database. This class supports mapping multivalue properties to the corresponding database tables.

|Method|Explanation|
|------|-----------|
|convertSQLtoMultiValue\(String query\)|Converts the SQL query string for `ResourceManager3` classes that need to search on single value and multivalue properties. Returns an enumeration that contains the converted where clause followed by one or more elements that contain the table names that are involved in the query.|
|populateJoinedProperties\(`IMVResource` theResource, RequestContext context\)|Retrieves the value for all multivalue properties and calls the addMultiValuePropertyValue method of `IMVResource`. This method does not return output.|
|populateJoinedProperty\(IMVResource theResource, String propertyName, RequestContext context\)|Retrieves the value for all single value properties and calls the addMultiValuePropertyValue method of `IMVResource`. This method does not return output.|
|syncJoinedProperty\(IMVResource theResource, String propertyName, List values, RequestContext context\)|Populates the multivalue property into the resource repository.|

**Parent topic:**[Using the Personalization APIs ](../pzn/pzn_using_apis.md)

**Parent topic:**[Using the Personalization APIs ](../pzn/pzn_using_apis.md)

