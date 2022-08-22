# RuleEvent class

A RuleEvent class is constructed whenever a rule is executed. It contains information about the rule that was executed and the resulting resources. It is an implicitly constructed event; a logging bean is not necessary.

```
public class com.ibm.wcp.analysis.event.RuleEvent extends com.ibm.wcp.analysis.event.LogEvent
                                                  implements Serializable

```

Get an overview of the methods of the RuleEvent class.

|Method|Explanation|
|------|-----------|
|```
public RuleEvent( HttpServletRequest request,
                  RuleInfo           ruleInfo,
                  ResourceInfo[]     resourceInfo )
```

|Constructor.|
|```
public RuleInfo getRuleInfo( )
```

|Returns a rule information object containing the campaign and rule name for the rule that was executed in the content spot.|
|```
public void setRuleInfo( RuleInfo ruleInfo )
```

|Sets the rule information for this event. Can be used by custom listeners in order to replace the rule execution data.|
|```
public ResourceInfo[] getResourceInfo( )
```

|Returns a resource information array containing the results of the rule for this event. The resource information contains the collection name and resource ids of the results.|
|```
public void setResourceInfo( ResourceInfo[] resourceInfo )
```

|Sets the resource information for this event. Can be used by custom listeners in order to replace the resource information.|
|```
public String getResourceClass( )
```

|Returns the class name of the resources returned by the executed rule.|
|```
public void setResourceClass( String className )
```

|Sets the class name of the resources returned by the executed rule. Can be used by custom listeners in order to replace the class name.|
|```
public String toString( )
```

|Returns a String representation of this event.|

**Parent topic:**[LogEvent class](../pzn/pzn_logevent_class.md)

