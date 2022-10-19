# ResourceInfo class

The ResourceInfo class is a wrapper class for a resource id and collection name tuple.

```
public class com.ibm.wcp.analysis.event.ResourceInfo extends Object
                                                     implements Serializable
```

Get an overview of the methods of the ResourceInfo class.

|Method|Explanation|
|------|-----------|
|<br><pr>\``` <br>public ResourceInfo( String resourceId,<br>                     String collectionName )<br>```|Constructor.|
|<br><pr>\``` <br>public ResourceInfo( )<br>```|Constructor.|
|<br><pr>\``` <br>public String getResourceId( )<br>```|Returns the id of the resource.|
|<br><pr>\``` <br>public void setResourceId( String resourceId )<br>```|Sets the id of the resource.|
|<br><pr>\``` <br>public String getCollectionName( )<br>```|Returns the name of the collection that contains this resource.|
|<br><pr>\``` <br>public void setCollectionName( String collectionName )<br>```|Sets the name of the collection that contains this resource.|
|<br><pr>\``` <br>public String toString( )<br>```|Returns a String representation of this resource tuple.|
|<br><pr>\``` <br>public boolean equals( ResourceInfo resourceInfo )<br>```|Returns true if and only if \(1\) the objects are the same or \(2\) the resource id and collection name information is equal.|
|<br><pr>\``` <br>public int hashCode( )<br>```|Returns a hash code enabling objects of this type to be used as hash keys.|


