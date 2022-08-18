# Example: Multiple profilers and optional actions

View an example that demonstrates the use of a conditional "if-then" with an additional clause as a profiler for your HCL Digital Experience ortal site.

Consider an example: If the current user does not have Confidential status, then the action `GetNonConfidentialNews` is executed. The same results could be achieved in this example by placing the `GetNonConfidentialNews` action under `Otherwise` because these are the only two profiles possible within this profiler.

The action field under `Otherwise` remains as is. Since the `UserClearance` profiler places every user into one of two categories \(`Regular` or `Confidential`\), any action placed here would never be executed.

The `GetSiteNews` rule will always be executed. Any content the rule retrieves from the data store is added to the total return set.

The `GetNewsAlreadyRead` action works like any other action because it retrieves content from the data store. However, when the action is placed under `Exclude`, any content retrieved by this action is removed from the total return set.

**Note:** It must be possible to indicate an article has been read by a given user. When you click the Select Action menu, you will only see rules that are assigned a Select Action type. Binding rules are also Select Action type rules. Once a resourceCollectiontype is set for the binding, all of the action rules will be locked and will use the same collection type.

The order of the total return set is randomized and the number truncated to no more than 10 items. This effect takes place each time the rule is executed, so the news articles displayed on the Web page will change from page view to page view.

## Conditional "if-then" with an additional clause

```
When UserClearance is
  	     Confidential
  	        do GetConfidentialNews
  	     Regular
  	        do GetNonConfidentialNews
  	    Always
  	         GetSiteNews
  	    Exclude
  	         GetNewsAlreadyRead
  	     order randomly
  	     show 10 items
```

**Parent topic:**[Bindings](../pzn/pzn_bindings.md)

**Parent topic:**[Bindings](../pzn/pzn_bindings.md)

