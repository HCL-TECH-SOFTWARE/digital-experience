# is rule element

Select IS to evaluate the relationship between two sides of a conditional statement.

When using **is**, either side of the conditional statement can typically be the content returned by a resource attribute, value, or arithmetic expression. If the resource attribute is of the data type List \(array, vector, or enumeration\), the available evaluations become `includes` and `includes any of`. Otherwise, the choices are:

-   includes
-   includes any of
-   is between
-   is between but not equal to
-   is empty
-   is
-   is greater than
-   is greater than or equal to
-   is included in
-   is less than or equal to
-   is less than
-   is not empty
-   is not

## Is Empty/Is Not Empty

The evaluations `is empty` and `is not empty` allow a rule to check for the existence of a null value or an empty list. When using either of these evaluations, one side of the evaluation is unnecessary and is removed.

|One side of Evaluation|Evaluation|Result|
|----------------------|----------|------|
|Resource Attribute \(non-list type\)|is empty|true if attribute is null, otherwise false|
|Resource Attribute \(non-list type\)|is not empty|false if attribute is null, otherwise true|
|Resource Attribute \(list type\)|is empty|true if list is empty, otherwise false|
|Resource Attribute \(list type\)|is not empty|false if list is empty, otherwise true|
|Request Attributes or Session Attributes \(non-list type\)|is empty|false if attribute/parameter exists and value is not null; true if attribute/parameter does not exist or value is null|
|Request Attributes or Session Attributes \(non-list type\)|is not empty|true if attribute/parameter exists and value is not null; false if attribute/parameter does not exist or value is null|
|Request Attributes or Session Attributes \(list type\)|is empty|true if attribute/parameter does not exist or list is empty; false if attribute/parameter exists and list has data|
|Request Attributes or Session Attributes \(list type\)|is not empty|false if attribute/parameter does not exist or list is empty; true if attribute/parameter exists and list has data|

## Profiler evaluations

If you choose to evaluate a profiler instead of a resource attribute in the Specify a Resource Attribute window, the available evaluations are:

-   is
-   is all of
-   is any of
-   is not
-   is not any of

On one side of the evaluation, the possible choices are the profiles that are defined within that profiler. You may select one or more profiles for the result of the evaluation.

**Parent topic:**[Rule elements](../pzn/pzn_rule_elements.md)

