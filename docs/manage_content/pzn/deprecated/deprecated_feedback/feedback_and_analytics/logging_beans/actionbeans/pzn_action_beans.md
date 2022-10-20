# Action beans

You use Action beans to log specific actions of your Web site visitors.

As a Web site visitor navigates your Web pages, an Action bean logs the visitor's events within the session. Action beans maintain action information for the current session including the actions logged and their corresponding log counts. This session data can be used within rules of from your JSPs. Action information is also routed to all registered log listeners.

All actions are logged to the Feedback schema and to the user session. The actions logged include the predefined actions listed in **Table 1** and user defined actions. The actions that are logged to the Feedback schema and user session do not need to be predefined.

If you have LikeMinds installed, only the predefined actions listed in **Table 1** are logged to the LikeMinds schema. These actions must be defined to LikeMinds in the lps\_trx\_type table. \(You can also add to the list of predefined actions by adding items to the lps\_trx\_type table.\) The actions logged through an Action bean provide the transaction data necessary for the LikeMinds Clickstream Engine. This set of actions may be accessed after deployment and configuration of a Web application.

Actions can be logged with or without respect to a specific resource. For example, the "OrderCancel" predefined action does not apply to a specific resource whereas the "BrowseContent" predefined action applies to a specific content resource.

You can create rules based on the activity of the current session, for example:

```
WebSite Visitor is
    Undecided when
       current Action Count.ShoppingCartDelete > 0
     Otherwise Decided
```

|Action ID|Action Name|
|---------|-----------|
|1000|DetailedView|
|1001|Purchase|
|1002|Rated|
|1003|ShoppingCartInsert|
|1004|ShoppingCartDelete|
|1005|OrderCancel|
|1006|ItemView|
|1007|WishlistAdd|
|1008|WishlistDelete|
|1009|BrowseContent|
|1010|Search|
|1011|ShoppingCartUpdate|

-   **[Implementing action logging](pzn_implement_action_logging.md)**  
To implement action logging, insert an Action bean into your JSP. To log additional application data associated with the action, add key/value pair information to the log method call.
-   **[Action beans reference](pzn_action_beans_reference.md)**  
View some additional information related to Action beans and associated methods.



