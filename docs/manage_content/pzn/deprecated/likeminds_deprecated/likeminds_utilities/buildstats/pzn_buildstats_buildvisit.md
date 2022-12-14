# Buildstats | LikeMinds utilities

The buildstats utility updates database statistics. You can use buildstats for all of the Recommendation engines except for the Item Affinity Engine.

When you install the LikeMinds utilities, the installer sets `buildstats` to run daily at 3:30 a.m. This run time is because the best time to run `buildstats` is daily, at a time when the LikeMinds server receives relatively little use. The `buildstats` utility connects directly to the LikeMinds database and processes the transactional or ratings data that is constantly being written to the LikeMinds database. Because this utility does not use many resources, it is typically installed on the same server as the LikeMinds server. `buildstats` runs a number of data analysis functions on the information in the LikeMinds database and persistently writes out the results into the LikeMinds schema. However, the function and the number of functions to test differ depending on the type of LikeMinds engines in use. If both a Preference and ClickStream are in use, `buildstats`, by default, analyze both the ratings and the transactional data.

For ratings data, `buildstats` writes to the following fields in the Lps\_Item\_Data table:

-   num_rtg: Total number of ratings for the item.
-   total_rtg: Sum of all ratings for the item.
-   total_square_rtg: Sum of the squares of all ratings for the item.
-   ratability: Priority for an item's presentation to users for rating. ratability is non-negative value. Higher numbers indicate a higher priority for rating.
-   score: Popularity or unpopularity of an item. If you prefer to have your own applications update this field, you can disable `buildstats` from writing to score.

For transactional data, `buildstats` writes to these fields in Lps_User\_Trx:

-   value: Data value that is associated with the transaction.
-   adj_count: Adjusted count of transactions. If a new activity is recorded in the transaction table, this value increases. It might diminish over time.


