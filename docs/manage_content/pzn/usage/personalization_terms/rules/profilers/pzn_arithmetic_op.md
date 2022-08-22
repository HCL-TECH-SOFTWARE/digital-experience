# Example: Arithmetic operation

View an example of a profiler that uses arithmetic operations.

To build an operation, select a combination of **Resource.Attribute** and other operands. You can do this on either side of the evaluation.

## Order of operations is in effect but parentheses cannot be used

```
	AgeProfiler is
  	    Youth when
  	        current Date.Year - current User.BirthDate.Year is less than or equal to 25
  	    Adult when
  	        current Date.Year - current User.BirthDate.Year is between 25 and 65
  	    Senior when
  	        current Date.Year - current User.BirthDate.Year is greater than or equal to 65
```

**Parent topic:**[Profilers](../pzn/pzn_profilers.md)

