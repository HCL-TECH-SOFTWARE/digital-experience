# Example: Nested bindings \(simple\)

When creating a binding, it is possible to use a binding in any of the `do action` areas. This is known as a nested binding.

In this example, the `Always` action \(`Get Top Products`\) in `Get Products By Location` is actually another binding. When the nested binding is placed with `Always`, it has the effect of the boolean operator or.

For example: The total rule returns content that meets the conditions in the earlier part of the binding or that meets the conditions in the later part.

!!! note
	It is possible for a nested binding to contain nested bindings.

`Get Products By Location`:

## Nested binding

```
When User Location is
  	     Lab
  	        do Get Test Products
  	     Factory
  	        do Get Available Products
  	     Field
  	        do Get All Products
  	    Otherwise
  	         do Get Future Products
  	    Always
  	         Get Top Products
  	     order as is

Get Top Products:
  	When User Role is
  	     Manager
  	        do Get Top Selling Products
  	     Exec
  	        do Get Top Selling Products
  	     Employee
  	        do Get Top Overstocked Products
  	     order as is
```


