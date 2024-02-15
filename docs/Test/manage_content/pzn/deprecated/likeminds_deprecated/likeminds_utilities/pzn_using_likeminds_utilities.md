# Using the LikeMinds utilities

Learn about the four utilities LikeMinds uses to update the database, buildvisit (for the Preference Engine), sifter, buildstats, and lpsIAA (for the Item Affinity Engine's accumulator utility).

The LikeMinds utilities are run from the LikeMinds utility servlet.

You must configure these utilities to run at appropriate times. See [Scheduling LikeMinds events](../likeminds_cfg/pzn_schedule_likeminds_events.md) for more information.

-   **[Sifter | LikeMinds utilities](../likeminds_utilities/sifter/pzn_sifter.md)**  
The sifter, which is used for all the Recommendation engines except for Item Affinity, assigns mentors to users and updates its assignments as users rate items. When no users are rating items, the sifter updates the mentor assignments of all users based on changes to the pool of available mentors.
-   **[Buildstats | LikeMinds utilities](../likeminds_utilities/buildstats/pzn_buildstats_buildvisit.md)**  
The buildstats utility updates database statistics. You can use buildstats for all of the Recommendation engines except for the Item Affinity Engine.
-   **[Accumulator | LikeMinds utilities](../likeminds_utilities/accumulator/pzn_accumulator.md)**  
Use the accumulator utility if you are using the Item Affinity Engine. This utility accumulates the number of times every possible item-to-item combination occurs.



