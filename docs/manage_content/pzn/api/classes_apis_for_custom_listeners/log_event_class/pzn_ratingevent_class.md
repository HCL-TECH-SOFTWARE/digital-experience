# RatingEvent class

The RatingEvent class is used to access the data logged with a Rating bean.

```
public class com.ibm.wcp.analysis.event.RatingEvent extends com.ibm.wcp.analysis.event.LogEvent
                                                    implements Serializable
```

Get an overview of the methods of the RatingEvent class.

|Method|Explanation|
|------|-----------|
|```
public RatingEvent( HttpServletRequest request,
                    ResourceInfo       resourceInfo,
                    int                rating )

```

|Constructor.|
|```
public ResourceInfo getResourceInfo( )

```

|Returns the resource that is the target of the current rating. The resource object returned contains the collection name and resource id.|
|```
public void setResourceInfo( ResourceInfo resourceInfo )

```

|Sets the resource information for this rating event. Can be used by custom listeners to replace the resource information for this rating.|
|```
public int getRating( )

```

|Returns the rating as an integer value. The value can be any valid integer as defined by the Web application implementor.|
|```
public void setRating( int rating )

```

|Sets the rating for this event. Can be used by custom listeners to replace the rating in this event.|
|```
public String toString( )

```

|Returns a String representation of this event.|


