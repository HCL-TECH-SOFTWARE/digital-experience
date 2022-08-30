# Sifter performance considerations

The sifter places high processing demands on the system running it. For this reason it is important to tune it with consideration of its usage and environment.

Use the following simple guidelines when tuning the sifter:

-   Schedule the sifter to build the mentor pools during hours of the day when there is low traffic volume, for example, at 3 a.m.
-   Tune the number of processing threads used by the process. You can configure this setting for each mentor set.

    To optimize the resource utilization of the sifter, set the number of threads to spawn to twice the number of CPUs in the machine that the accumulator is running on. The LikeMinds Recommendation Engine configuration value that controls this is item\_affinity\_set.item\_affinity.num\_threads.

-   Distribute the sifter onto a separate server from the LikeMinds Recommendation Engine.
-   Run multiple sifter processes distributed across multiple machines for greater scalability.


