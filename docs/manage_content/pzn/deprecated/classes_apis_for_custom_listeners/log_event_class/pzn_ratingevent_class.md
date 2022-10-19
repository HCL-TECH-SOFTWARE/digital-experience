# RatingEvent class

The RatingEvent class is used to access the data logged with a Rating bean.

```
public class com.ibm.wcp.analysis.event.RatingEvent extends com.ibm.wcp.analysis.event.LogEvent
                                                    implements Serializable
```

Get an overview of the methods of the RatingEvent class.

|Method|Explanation|
|------|-----------|
|<br><pr>\``` <br>public RatingEvent( HttpServletRequest request,<br>                    ResourceInfo       resourceInfo,<br>                    int                rating )<br>```|Constructor.|
|<br><pr>\``` <br>public ResourceInfo getResourceInfo( )<br>```|Returns the resource that is the target of the current rating. The resource object returned contains the collection name and resource id.|
|<br><pr>\``` <br>public void setResourceInfo( ResourceInfo resourceInfo )<br>```|Sets the resource information for this rating event. Can be used by custom listeners to replace the resource information for this rating.|
|<br><pr>\``` <br>public int getRating( )<br>```|Returns the rating as an integer value. The value can be any valid integer as defined by the Web application implementor.|
|<br><pr>\``` <br>public void setRating( int rating )<br>```|Sets the rating for this event. Can be used by custom listeners to replace the rating in this event.|
|<br><pr>\``` <br>public String toString( )<br>```|Returns a String representation of this event.|


