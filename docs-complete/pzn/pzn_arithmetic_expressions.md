# Arithmetic expressions rule 

Arithmetic expressions allow you to perform mathematical operations on resource attributes as part of your rule.

\\When you choose arithmetic expression as a rule element option, you can select multiple resource attributes, values, and operators \(addition, subtraction, multiplication, or division\) to use between them.

An example use of an arithmetic expression is a profiler that profiles Web site visitors according to age. In the data you record for each visitor, it is more practical to store date of birth \(which does not change\), than to store age. In the evaluation in the profiler, you can use an arithmetic expression to calculate the visitor's age by subtracting the current user's year of birth from the current year \(`current Date.year`\).

Arithmetic expressions are calculated according to traditional order of operations \(multiplication and division are calculated before addition and subtraction. For example, 3+2\*2–1/2 evaluates to 6.5\). It is not possible to group expressions using parentheses.

**Parent topic:**[Rule elements ](../pzn/pzn_rule_elements.md)

**Parent topic:**[Rule elements ](../pzn/pzn_rule_elements.md)

