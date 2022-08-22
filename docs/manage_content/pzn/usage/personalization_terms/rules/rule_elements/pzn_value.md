# value rule element

Value is the placeholder for the result of an evaluation. This value can be one you enter, the value of another resource attribute, or an arithmetic expression.

The value must be compatible with the data type of the other side of the expression or evaluation. For example, if you are evaluating an attribute that has the type Number, you can only compare it to resource attributes of the type Number or Decimal Number. The rule editor prevents you from choosing other resource attributes with incompatible types.

**Note:** Making comparisons against resources in a database respects the column type and size. Therefore, to compare a value to a column typed as CHAR\(10\), you must include all 10 characters. For example, assume you have a table with a column named DAY that is typed as CHAR\(10\). A row in the table has the value of 'Monday&nbsp;&nbsp;&nbsp;&nbsp;' rather than 'Monday' in the DAY column because DAY is compared against a profiler condition, and must have all 10 characters defined. However, if the column is typed as VARCHAR, the value in the profiler condition can be 'Monday' \(without the four additional blanks\).

## Mapped values

Resources may be created using mapped values instead of actual values specified in the data store. This facilitates the creation of rules that are easier to understand. For example, if a column in the database held the integer values of 1, 2, or 3 indicating Yes, No, or Maybe, the resource can be configured to map integer values to words. If mapped values have been created for a resource, the mapped values will be used in the rule editor instead of the actual values. For more information on creating value mappings, refer to the documentation in Rational Application Developer for creating resources using the Personalization resource wizard.

## Dynamic properties

In addition to predefined resource properties, you can enter properties of a resource that are not in the list. If you know the resource to handle dynamically, specify the name of the property. If the resource manages properties dynamically, the values are retrieved when the rule is evaluated.

**Parent topic:**[Rule elements](../pzn/pzn_rule_elements.md)

