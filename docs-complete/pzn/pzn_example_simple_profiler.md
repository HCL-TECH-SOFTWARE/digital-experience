# Example: Simple profiler 

View an example of a simple profiler that determines whether confidential company news articles will be shown to the current Web site visitor.

The profiler `User Clearance` is based on a user resource called `Personnel`. When the profiler was created, the name `User Clearance` and the settings, `Confidential` and `Regular`, were arbitrarily defined for later reference within bindings. One side of the comparison line \(`current Personnel.Role`\) refers to a user resource named `Personnel` created from a Personnel table in a database.`Role` is a mapped value, defined when the resource was created, that points to the Personnel.Role column in the Personnel table. The values in the Role column in the database are either Employee, Executive, or Manager.

This completed profiler is used within a binding as a means of determining whether confidential company news articles will be shown to the current Web site visitor.

## Simple profiler

```
	User Clearance is
  	     Confidential when
  	         current Personnel.Role is Executive or
  	         current Personnel.Role is Manager
  	    Otherwise Regular
```

**Parent topic:**[Profilers ](../pzn/pzn_profilers.md)

**Parent topic:**[Profilers ](../pzn/pzn_profilers.md)

