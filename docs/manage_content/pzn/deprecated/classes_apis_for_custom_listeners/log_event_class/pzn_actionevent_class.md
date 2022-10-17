# ActionEvent class

The ActionEvent class is used to access the data logged with an Action bean.

```
public class com.ibm.wcp.analysis.event.ActionEvent extends com.ibm.wcp.analysis.event.LogEvent
                                                    implements Serializable

```

Get an overview of the methods of the ActionEvent class.

|Method|Explanation|
|------|-----------|
|<br><pr>\``` <br> public ActionEvent( HttpServletRequest request, <br>                    ResourceInfo       resourceInfo, <br>                    String             actionName, <br>                    Hashtable          actionData ) <br>```|Constructor.|
|<br><pr>\``` <br>public ResourceInfo getResourceInfo( ) <br> ```|Returns the resource upon which the action in this event was taken.|
|<br><pr>\``` <br>public void setResourceInfo( ResourceInfo resourceInfo ) <br>```|Sets the resource info for this action event. Can be used by custom listeners to replace the resource information in this event.|
|<br><pr>\``` <br>public Hashtable getActionData( ) <br>```|Returns the supplemental data associated with this action. The action data is in key value format. Since a single key can have multiple values, the action data values are stored in the hashtable as String arrays.|
|<br><pr>\``` <br>public void setActionData( Hashtable actionData )<br>```|Sets the action data for this action event. Can be used by custom listeners to replace the action data in this event.|
|<br><pr>\``` <br>public String getActionName( )<br>```|Returns the name given to the current action.|
|<br><pr>\``` <br>public void setActionName( String actionName )<br>```|Sets the action name for this event. Can be used by custom listeners to replace the action name in this event.|
|<br><pr>\``` <br>public RuleInfo getRuleInfo( )<br>```|Returns the rule associated with this action. The subject rules for this action are determined by all rules in the current session that returned the target resource.|
|<br><pr>\``` <br>public void setRuleInfo( RuleInfo ruleInfo )<br>```|Sets the rule information for this action event. Can be used by custom listeners to replace the rule information in this event.|
|<br><pr>\``` <br>public String toString( )<br>```|Returns a String representation of this event.|


