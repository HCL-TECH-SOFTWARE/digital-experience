# CustomLogEvent class

Get an overview of the CustomLogEvent class and its methods.

The CustomLogEvent class is used to access the data logged with a CustomLog bean.

```
public class com.ibm.wcp.analysis.event.CustomLogEvent extends com.ibm.wcp.analysis.event.LogEvent
                                                       implements Serializable

```

|Method|Explanation|
|------|-----------|
|<br><pr>\``` <br>public CustomLogEvent( HttpServletRequest request,<br>                       Hashtable          customData )<br>```|Constructor.|
|<br><pr>\``` <br>public Hashtable getCustomData( )<br>```|Returns the custom data as key value information. Since a single custom data key can have multiple values, the custom data values are stored in the hashtable as String arrays.|
|<br><pr>\``` <br>public void setCustomData( Hashtable customData )<br>```|Sets the custom data for this event. Can be used by custom listeners to replace the data in this custom data event.|
|<br><pr>\``` <br>public String toString( )<br>```|Returns a String representation of this event.|


