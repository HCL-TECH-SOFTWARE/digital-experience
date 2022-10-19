# CategoryEvent class

The CategoryEvent class is used to access the data logged with a Category bean.

```
public class com.ibm.wcp.analysis.event.CategoryEvent extends com.ibm.wcp.analysis.event.LogEvent
                                                      implements Serializable
```

Get an overview of the methods of the CategoryEvent class.

|Method|Explanation|
|------|-----------|
|<br><pr>\``` <br>public CategoryEvent( HttpServletRequest request, <br>                      String[]           topics )<br>```|Constructor.|
|<br><pr>\``` <br>public String[] getTopics( )<br>```|Returns the array of topics for this category event.|
|<br><pr>\``` <br>public void setTopics( String[] topics )<br>```|Sets the topics for this event. Can be used by custom listeners in order to replace the topics for this event.|
|<br><pr>\``` <br>String toString( )<br>```|Returns a String representation of this event.|


