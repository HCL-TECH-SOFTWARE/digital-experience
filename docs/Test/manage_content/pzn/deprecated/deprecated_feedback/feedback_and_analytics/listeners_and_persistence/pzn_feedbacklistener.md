# FeedbackListener

The FeedbackListener class routes data to the Feedback schema.

The FeedbackListener processes all log event types. Each page request \(JSP invocation\) maps to one row in the Feedback schema HIT\_FACTS table. Data for each log event is stored in a separate entry in the Feedback schema HITPARMS table. This distinguishes the data related to each rule or log method call and enables the reporting of information specific to individual content spots or method call. This storage design correlates of all of the data logged by the rules or method calls in a JSP enabling page level reporting.

An instance of the FeedbackListener is active on all run-time servers whenever logging is enabled.


???+ info "Related information"
    - [Feedback database schema](../../feedback_db_schema/pzn_feedback_db_schema.md)

