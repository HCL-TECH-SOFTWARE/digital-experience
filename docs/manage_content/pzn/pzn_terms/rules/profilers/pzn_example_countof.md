# Example: "Count of"

View an example demonstrating the use of "Count of".

A quantifiable condition profiler is similar to implicit profiling because a profile is defined according to numbers of items. Quantifiable condition profilers do not require the use of logging beans, but require attributes of resources that will be quantified to be organized uniformly.

In the following profiler, counts are made for items in the session object `shoppingCart` used by the user resource Shopper. Here, `shoppingCart` is analogous to a table in a database and `color` would be a column of data. Each item within the table would be a row. For example:

|Item|quantity|size|color|price|
|----|--------|----|-----|-----|
|Gadget|1|L|red|$1.99|
|Gizmo|3|S|green|$0.95|

## Quantifiable condition profiler for the session object `shoppingCart`

```
ColorPreference is
Red when number of items matching (Shopper.shoppingCart.color is red) is greater than 5
Green when number of items matching (Shopper.shoppingCart.color is green) is greater than 5
```


