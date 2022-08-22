# ActionEvent class

The ActionEvent class is used to access the data logged with an Action bean.

```
public class com.ibm.wcp.analysis.event.ActionEvent extends com.ibm.wcp.analysis.event.LogEvent
                                                    implements Serializable

```

Get an overview of the methods of the ActionEvent class.

|Method|Explanation|
|------|-----------|
|```
public ActionEvent( HttpServletRequest request,
                    ResourceInfo       resourceInfo,
                    String             actionName,
                    Hashtable          actionData )

```

|Constructor.|
|```
public ResourceInfo getResourceInfo( )
```

|Returns the resource upon which the action in this event was taken.|
|```
public void setResourceInfo( ResourceInfo resourceInfo )
```

|Sets the resource info for this action event. Can be used by custom listeners to replace the resource information in this event.|
|```
public Hashtable getActionData( )
```

|Returns the supplemental data associated with this action. The action data is in key value format. Since a single key can have multiple values, the action data values are stored in the hashtable as String arrays.|
|```
public void setActionData( Hashtable actionData )
```

|Sets the action data for this action event. Can be used by custom listeners to replace the action data in this event.|
|```
public String getActionName( )
```

|Returns the name given to the current action.|
|```
public void setActionName( String actionName )
```

|Sets the action name for this event. Can be used by custom listeners to replace the action name in this event.|
|```
public RuleInfo getRuleInfo( )
```

|Returns the rule associated with this action. The subject rules for this action are determined by all rules in the current session that returned the target resource.|
|```
public void setRuleInfo( RuleInfo ruleInfo )
```

|Sets the rule information for this action event. Can be used by custom listeners to replace the rule information in this event.|
|```
public String toString( )
```

|Returns a String representation of this event.|


