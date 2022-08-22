# RuleInfo class

The RuleInfo class is a wrapper class for a rule name and campaign name tuple.

```
public class com.ibm.wcp.analysis.event.RuleInfo extends Object
                                                 implements Serializable

```

Get an overview of the methods of the RuleInfo class.

|Method|Explanation|
|------|-----------|
|```
public RuleInfo( String rule,
                 String collectionName )
```

|Constructor.|
|```
public RuleInfo( )
```

|Constructor.|
|```
public String getRule( )
```

|Returns the name of the rule.|
|```
public void setRule( String rule )
```

|Sets the name of the rule.|
|```
public String getCampaign( )
```

|Returns the name of the campaign containing this rule.|
|```
public void setCampaign( String campaign )
```

|Sets the name of the campaign containing this rule.|
|```
public String toString( )
```

|Returns a String representation of this rule tuple.|
|```
public boolean equals( RuleInfo ruleInfo )
```

|Returns true if and only if \(1\) the objects are the same or \(2\) if the rule names are equal and the campaign names are equal.|

**Parent topic:**[Classes and APIs for writing custom listeners](../pzn/pzn_classes_apis_custom_listeners.md)

