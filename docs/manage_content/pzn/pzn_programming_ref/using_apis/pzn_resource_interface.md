# Resource interface

The interface com.ibm.websphere.personalization.resources.Resource enables mapping your user model, content model, or other resource model to data in your customer data store. Get an overview of the methods defined by this interface that you must implement.

|Method|Explanation|
|------|-----------|
|getId\(\)|Returns the primary key or identifier for this resource. The primary key must be a string and unique within the resource collection. This method behaves in coordination with the findById method of the associated resource manager class such that the following method returns true:`manager.findById(resource.getId(), context).getId().equals(resource.getId())`|
|get\(String name\)|Returns the value of the specified dynamic property for this resource|
|keys\(\)|Returns all \(an Enumeration\) of the dynamic property keys associated with this resource|
|put\(String name, Object value\)|Sets the specified dynamic property for this resource|
|remove\(String name\)|Removes the specified dynamic property|

In addition to the methods listed in this table, your implementation must contain methods for setting and getting each fixed property in the data model. For example, if your user model includes a fixed property userName, you would define the methods getUserName\(\) and setUserName\(\).

Given an implementation of fixed properties, dynamic properties are optional. The get, keys, put, and remove methods may be implemented to perform no operation. If the content schema or resource attributes are known when the Java classes are developed, fixed properties are preferred. If the attributes of a resource are not determined until the resource is instantiated in the application server, dynamic properties are preferred. Dynamic and fixed properties may be used together in a single resource.

Rules support nested method calls. For example, a resource interface implementation could define a `user` object with a fixed property `employer` for which there is a fixed property `name`.


