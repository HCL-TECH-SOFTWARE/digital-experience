# Rule logging

If logging is enabled, rule information is automatically logged whenever a rule is executed.

When a content spot's rule retrieves content, a RuleEvent object is constructed from the request, campaign name, rule name, resource collection name, and items. This event object is routed to all registered log listeners and the logged data are stored in the Feedback schema.

**Parent topic:**[Feedback and analytics](../pzn/pzn_feedbackanalytics.md)

