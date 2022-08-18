# CategoryEvent class

The CategoryEvent class is used to access the data logged with a Category bean.

```
public class com.ibm.wcp.analysis.event.CategoryEvent extends com.ibm.wcp.analysis.event.LogEvent
                                                      implements Serializable
```

Get an overview of the methods of the CategoryEvent class.

|Method|Explanation|
|------|-----------|
|```
public CategoryEvent( HttpServletRequest request,
                      String[]           topics )
```

|Constructor.|
|```
public String[] getTopics( )
```

|Returns the array of topics for this category event.|
|```
public void setTopics( String[] topics )
```

|Sets the topics for this event. Can be used by custom listeners in order to replace the topics for this event.|
|```
String toString( )
```

|Returns a String representation of this event.|

**Parent topic:**[LogEvent class](../pzn/pzn_logevent_class.md)

**Parent topic:**[LogEvent class](../pzn/pzn_logevent_class.md)

