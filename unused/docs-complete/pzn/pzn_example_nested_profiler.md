# Example: Nested profiler 

View an example of a nested profiler.

A nested profiler is true if any, all, or none of the profilers within the profiler are true. You can categorize a condition as a combination of other conditions. For example, a Web site visitor can be profiled as a young male if a preexisting gender profiler classifies the visitor as male, and a preexisting age profiler classifies as the visitor as being in his teens or twenties.

## Nested profiler

```
AgeGenderProfiler is
  	     YoungMale when
  	         GenderProfiler is Male and
  	         AgeProfiler is any of Teenager or Twenties
  	    Otherwise NotInTargetAudience
```

**Parent topic:**[Profilers ](../pzn/pzn_profilers.md)

**Parent topic:**[Profilers ](../pzn/pzn_profilers.md)

