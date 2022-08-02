# Key value pairs

The additional information passed by rule logging events and certain bean logging events is logged to the Feedback database in the form of key value pairs.

Rule logging events and certain bean logging events pass additional information such as rule names, action names, resource collection names, resource identifiers, etc. when they are fired \(refer to the individual rule logging and logging bean sections for more information on what information may be passed\). This data is logged to the Feedback database in the form of key value pairs. Key strings representing each type of data are stored in the key table of the Feedback schema, while the values that each key references are recorded in the value table of the Feedback schema. Refer to the Feedback schema diagram for more information on how to join these tables to retrieve a mapping of values onto keys.

The following tables describe what each key represents:

## Rule related keys:

|Key|Description|
|---|-----------|
|wcpRule|The name of the rule that was fired|
|wcpCampaign|The campaign associated with the rule|
|wcpCollection|The name of the resource collection associated with the rule|
|wcpResourceId|An identifier for each individual resource the associated resource collection|

## Action bean related keys:

|Key|Description|
|---|-----------|
|wcpAction|The name of the action being logged|
|wcpActionResId|The resource \(if any\) that has been acted upon|
|wcpActionCollection|The name of the resource collection associated with the resource|
|wcpActionRule|The name of the rule \(if any\) that surfaced the resource being acted upon|
|wcpActionCampaign|The campaign \(if any\) associated with the rule|

## Category bean related keys:

|Key|Description|
|---|-----------|
|wcpCategory|A category string being logged|

## Rating bean related keys:

|Key|Description|
|---|-----------|
|wcpRating|The rating value being logged|
|wcpRatingResId|The resource \(if any\) that is associated with the rating|
|wcpRatingCollection|The name of the resource collection associated with the resource|

**Parent topic:**[Feedback database schema](../pzn/pzn_feedback_db_schema.md)

**Parent topic:**[Feedback database schema](../pzn/pzn_feedback_db_schema.md)

