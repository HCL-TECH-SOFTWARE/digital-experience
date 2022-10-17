# RuleEvent class

A RuleEvent class is constructed whenever a rule is executed. It contains information about the rule that was executed and the resulting resources. It is an implicitly constructed event; a logging bean is not necessary.

```
public class com.ibm.wcp.analysis.event.RuleEvent extends com.ibm.wcp.analysis.event.LogEvent
                                                  implements Serializable

```

Get an overview of the methods of the RuleEvent class.

|Method|Explanation|
|------|-----------|
|<br><pr>\``` <br>public RuleEvent( HttpServletRequest request,<br>                  RuleInfo           ruleInfo,<br>                  ResourceInfo[]     resourceInfo )<br>```|Constructor.|
|<br><pr>\``` <br>public RuleInfo getRuleInfo( )<br>```|Returns a rule information object containing the campaign and rule name for the rule that was executed in the content spot.|
|<br><pr>\``` <br>public void setRuleInfo( RuleInfo ruleInfo )<br>```|Sets the rule information for this event. Can be used by custom listeners in order to replace the rule execution data.|
|<br><pr>\``` <br>public ResourceInfo[] getResourceInfo( )<br>```|Returns a resource information array containing the results of the rule for this event. The resource information contains the collection name and resource ids of the results.|
|<br><pr>\``` <br>public void setResourceInfo( ResourceInfo[] resourceInfo )<br>```|Sets the resource information for this event. Can be used by custom listeners in order to replace the resource information.|
|<br><pr>\``` <br>public String getResourceClass( )<br>```|Returns the class name of the resources returned by the executed rule.|
|<br><pr>\``` <br>public void setResourceClass( String className )<br>```|Sets the class name of the resources returned by the executed rule. Can be used by custom listeners in order to replace the class name.|
|<br><pr>\``` <br>public String toString( )<br>```|Returns a String representation of this event.|


