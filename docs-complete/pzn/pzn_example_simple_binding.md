# Example: Simple binding 

Because bindings couple the conditional processing of a profiler with the functional power of an action, the simplest form of a binding works like a conditional "if-then" clause.

Consider a simple binding example. If the current user is not a previous customer, then show a limited number of current offers. If the current user is a known customer, then show offers appropriate to their status level.

For example, the profiler `Customer Type` is used to check whether the current user is a known customer. If the customer is not a known customer, the action `Get Limited Number of Offers` is run. If the profiler indicates that the user is a known customer with a status of Gold or Platinum, then a different action is run and different offers are retrieved for display.

## Simple binding

```
When Customer Type is
  	     Not A Customer
  	        do Get Limited Number of Offers
  	     Gold or
  	     Platinum
  	         do Get Offers For User
  	     order as is
```

**Parent topic:**[Bindings ](../pzn/pzn_bindings.md)

**Parent topic:**[Bindings ](../pzn/pzn_bindings.md)

