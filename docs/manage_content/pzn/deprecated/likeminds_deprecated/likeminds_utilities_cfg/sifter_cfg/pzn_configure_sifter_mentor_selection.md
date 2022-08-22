# Configuring the sifter for mentor selection

Learn how to configure the sifter to find mentors for your LikeMinds server engines.

The sifter finds mentors for users, using the information from the rating or transaction data for the LikeMinds server engines. The sifter is used by all of the LikeMinds server engines except for the Item Affinity Engine, which uses the `accumulator` utility [Figure 1](#rfa00004) illustrates how the sifter works:

![How the Sifter Works](../images/sifter.jpg "How the Sifter Works")

-   **[Sifter-specific mentor set configuration](../pzn/pzn_sifter_mentor_config.md)**  
You can specify the following categories of sifter-specific configuration parameters for mentor sets below.
-   **[How the mentor selection process works](../pzn/pzn_mentor_selection_process.md)**  
In order to fully understand the sifter, it is important to have a clear idea of how the mentor selection process works, and how to set configuration parameters that increase the accuracy of your recommendations.
-   **[Sifter performance considerations](../pzn/pzn_sifter_performance_considerations.md)**  
The sifter places high processing demands on the system running it. For this reason it is important to tune it with consideration of its usage and environment.
-   **[Recomputing \(rebuilding\) the mentor pool](../pzn/pzn_rebuild_mentor_pool.md)**  
For better recommendations, you must recompute, or rebuild, the mentor pool at least once a day, ideally at a time when the database has little usage. This allows new users to become mentors and removes current mentors who are no longer good mentors.
-   **[Running multiple sifters](../pzn/pzn_run_multiple_sifters.md)**  
Use the following settings to run multiple instances of the sifter and have all the sifters share some configuration parameters and override others.
-   **[Preventing multiple sifters from sifting the same user](../pzn/pzn_prevent_sifting_same_user.md)**  
 When you run multiple sifters simultaneously to distribute load, use the following setting to prevent multiple sifters from sifting the same user in the Lps\_User\_Data table. This setting limits the sifter to look at only a certain group of users, or eliminates a group of users from being sifted.
-   **[Number of threads to sift users](../pzn/pzn_set_threads_to_sift_users.md)**  
Learn how to set the number of threads to sift users.
-   **[Sifter sleep time when the Lps\_User\_Data sift\_pri field Is 0](../pzn/pzn_sifter_sleep_time.md)**  
The Lps\_User\_Data sift\_pri field values must be greater than 0 in order for the sifter to get useful data \(that is, updated mentors\) for users.
-   **[Time interval for checking sift priority](../pzn/pzn_time_check_sift_priority.md)**  
Learn how to specify time interval for checking sift priority.
-   **[Sifter-specific mentor set configuration](../pzn/pzn_sifter_mentor_config.md)**  
You can specify the following categories of sifter-specific configuration parameters for mentor sets below.
-   **[How the mentor selection process works](../pzn/pzn_mentor_selection_process.md)**  
In order to fully understand the sifter, it is important to have a clear idea of how the mentor selection process works, and how to set configuration parameters that increase the accuracy of your recommendations.
-   **[Sifter performance considerations](../pzn/pzn_sifter_performance_considerations.md)**  
The sifter places high processing demands on the system running it. For this reason it is important to tune it with consideration of its usage and environment.
-   **[Recomputing \(rebuilding\) the mentor pool](../pzn/pzn_rebuild_mentor_pool.md)**  
For better recommendations, you must recompute, or rebuild, the mentor pool at least once a day, ideally at a time when the database has little usage. This allows new users to become mentors and removes current mentors who are no longer good mentors.
-   **[Running multiple sifters](../pzn/pzn_run_multiple_sifters.md)**  
Use the following settings to run multiple instances of the sifter and have all the sifters share some configuration parameters and override others.
-   **[Preventing multiple sifters from sifting the same user](../pzn/pzn_prevent_sifting_same_user.md)**  
 When you run multiple sifters simultaneously to distribute load, use the following setting to prevent multiple sifters from sifting the same user in the Lps\_User\_Data table. This setting limits the sifter to look at only a certain group of users, or eliminates a group of users from being sifted.
-   **[Number of threads to sift users](../pzn/pzn_set_threads_to_sift_users.md)**  
Learn how to set the number of threads to sift users.
-   **[Sifter sleep time when the Lps\_User\_Data sift\_pri field Is 0](../pzn/pzn_sifter_sleep_time.md)**  
The Lps\_User\_Data sift\_pri field values must be greater than 0 in order for the sifter to get useful data \(that is, updated mentors\) for users.
-   **[Time interval for checking sift priority](../pzn/pzn_time_check_sift_priority.md)**  
Learn how to specify time interval for checking sift priority.

**Parent topic:**[Configuring LikeMinds utilities](../pzn/pzn_config_background_utilities.md)

