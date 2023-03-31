# Performance Tuning Guide

This topic provides a basis for parameter and application tuning for HCL Digital Experience 8.5 and higher releases (formerly IBM WebSphere Portal and IBM Web Content Manager).

Both tuning and capacity are affected by many factors including the workload scenario and the performance measurement environment. For tuning, the objective of this paper is not necessarily to recommend specific values, but to make readers aware of the parameters used in the Portal performance
benchmarks.

Performance tuning is an iterative process. More than one change may be required to reach the desired performance of the system(s) under test. When tuning, it is important to begin with a baseline and monitor performance metrics to determine if any parameters should be changed. When a change is made, another measurement should be made to determine the effectiveness of the change. Ideally, only one change should be made between each measurement so the specific benefit of each tuning parameter can be
determined.