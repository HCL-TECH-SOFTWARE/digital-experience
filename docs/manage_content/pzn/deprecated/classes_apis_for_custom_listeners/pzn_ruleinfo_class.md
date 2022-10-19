# RuleInfo class

The RuleInfo class is a wrapper class for a rule name and campaign name tuple.

```
public class com.ibm.wcp.analysis.event.RuleInfo extends Object
                                                 implements Serializable

```

Get an overview of the methods of the RuleInfo class.

|Method|Explanation|
|------|-----------|
|<br><pr>\``` <br>public RuleInfo( String rule,<br>                 String collectionName )<br>```|Constructor.|
|<br><pr>\``` <br>public RuleInfo( )<br>```|Constructor.|
|<br><pr>\``` <br>public String getRule( )<br>```|Returns the name of the rule.|
|<br><pr>\``` <br>public void setRule( String rule )<br>```|Sets the name of the rule.|
|<br><pr>\``` <br>public String getCampaign( )<br>```|Returns the name of the campaign containing this rule.|
|<br><pr>\``` <br>public void setCampaign( String campaign )<br>```|Sets the name of the campaign containing this rule.|
|<br><pr>\``` <br>public String toString( )<br>```|Returns a String representation of this rule tuple.|
|<br><pr>\``` <br>public boolean equals( RuleInfo ruleInfo )<br>```|Returns true if and only if \(1\) the objects are the same or \(2\) if the rule names are equal and the campaign names are equal.|


