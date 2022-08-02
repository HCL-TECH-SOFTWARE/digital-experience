# Example: Nested bindings \(advanced\)

View an example that demonstrates advanced nested bindings.

This example is similar to the Nested bindings \(simple\) example, except for the addition of the binding `Get Top Products` to the actions done when the `User Location` profiler is `Lab`. Multiple actions can be grouped by selecting multiple actions or bindings simultaneously within the rule editor. Selecting multiple actions or bindings here has the effect of the boolean operator "and", which returns the intersection of the data sets.

For example: the current user location must be in the lab and an executive. Therefore, in addition to test products, executives and managers in the lab receives information about the best selling products, and employees at the lab gets the most popular overstocked items. Factory or field workers will not see either best selling or most popular overstocked products.

Modified `Get Products By Location`:

## Advanced nested bindings

```
When User Location is
  	     Lab
  	        do Get Top Products and
  	        do Get Test Products
  	     Factory
  	        do Get Available Products
  	     Field
  	        do Get All Products
  	    Otherwise
  	         do Get Future Products
  	     order as is
```

**Parent topic:**[Bindings](../pzn/pzn_bindings.md)

**Parent topic:**[Bindings](../pzn/pzn_bindings.md)

