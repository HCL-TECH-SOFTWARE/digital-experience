# Content spot exits

Content spot exits provide the ability to alter the default flow of processing of content spots, making it possible in the runtime environment to override the rule to process, the current user, and the results of rule processing.

Instances of the same exit class are instantiated for all content spots. The exit class interface name is public interface RuleExit.

The content spot exit class can provide the following actions:

1.  Access request and session information
2.  Set information in the personalization context, including changing the user
3.  Get the campaign name
4.  Get the rule name to be executed for campaign
5.  Override and specify the rule to be executed
6.  Bypass rule processing; no rule is processed.

After rule processing, the content spot exit class can provide the following actions:

1.  Add result items
2.  Remove result items
3.  Completely replace result items

**RuleExit methods:**

-   **void aboutToExecuteRule\(RuleTrigger contentSpot, RequestContext requestContext\)**

    Get the results of the rule execution.

-   **Object\[\] getFilteredResults\(RuleTrigger contentSpot, RequestContext requestContext, Object\[\] originalResults\)**

    Exit to allow for changing the results of the rule execution. originalResults: the original result array is supplied to the exit. filteredResults: the exit should return the original array if no changes are needed


**RuleTrigger methods:**

-   **String getCampaignName\(\)**

    Get the campaign name for the content spot.

-   **String getRuleName\(\)**

    Get the name of the rule to be executed in this spot. Can return null if the name is not yet established.

-   **void setRuleName\(String ruleName\)**

    Set the name of the rule to be executed in this spot. If the name is set to null, no rule will be executed.

-   **void setRuleExit\(RuleExit ruleExit instance\)**

    Set the rule exit for this particular content spot instance.


The `RuleTrigger` also supports a static method that contains an instance of `RuleExit` that is set up at initialization time. You can implement `setRuleExit(RuleExit)` on a per-content spot basis to override only the content spots that you specify.

The class name of the default `RuleExit` implementor is read from the PersonalizationService.properties file.

Example Usage Scenario

1.  Specify a `RuleExit` class in PersonalizationService.properties, as shown:

    ```
    rulesEngine.defaultRuleExit=com.ibm.websphere.personalization.RuleExitSample
    	...
    ```

2.  At startup time, the Personalization run-time environment creates an instance of that class \(`aRuleExit` in this scenario\) and caches it in a private `RuleTrigger` static method
3.  As each content spot is triggered, the Personalization rule engine determines the rule name to be used
4.  `aRuleExit.aboutToExecuteRule()` is invoked, passing the spot and the request context
5.  `aRuleExit` has several options:
    -   Access request context information \(includes HTTP request and session\)
    -   Get the campaign and rule names
    -   Specify a request user ID
    -   Change the rule name to be executed
    -   Bypass the rule by setting the rule name to null
6.  The rule is executed
7.  `aRuleExit.getFilteredResults()` is invoked; the rule exit modifies results as required, then returns the updated set
8.  The updated results are stored

**Parent topic:**[Personalization programming reference](../pzn/pzn_programming_reference.md)

**Parent topic:**[Personalization programming reference](../pzn/pzn_programming_reference.md)

