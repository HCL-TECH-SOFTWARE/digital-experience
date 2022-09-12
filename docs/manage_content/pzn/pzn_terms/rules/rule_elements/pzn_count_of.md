# Count of rule element

Create an evaluation based on a count or tally of attributes that meet your criteria.

In the Specify a Resource Attribute drop down, you have the option to select **Use Number of Items in List**. Selecting this option allows you to create an evaluation based on a count or tally of attributes that meet your criteria. When you select this option, you must select a resource and the attribute of that resource that are to be tallied when the rule executes.

**Note:** This option can only be used in profiler and visibility rules.

Because the tally is made at the time the rule is triggered, it could produce different results at different times during the session if used on an application object or a current resource. For example, you might profile a visitor's color preference as red by creating an evaluation that checks to see if the number of red items in the user's shopping cart is greater than 5. The rule syntax for this evaluation could be:

```
Count of (shoppingCart.item.color is red) is greater than 5
```

Although you can make counts of any data type, the tally must be compared against a value or resource attribute that has a data type of number, decimal number, or integer.


