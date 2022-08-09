# The LikeMinds utilities

Get an overview of the utilities that support running of background processes along with the LikeMinds server.

The following utilities support the background processes operating on the database when the LikeMinds server is running:

-   `sifter`: This utility runs continuously to identify mentors for new users and recomputes the best set of mentors for existing users. The mentor set for a user may change as the sifter gathers more information about the user or the mentors. The `sifter` identifies mentors for the Preference, and Clickstream engines.
-   `buildstats`: This utility runs once a day to update statistics for each item, such as the number of ratings or transactions, the average rating, the standard deviation in the average rating, and the default recommendation information. The Clickstream and Preference engines use `buildstat`. The Item Affinity engine does not.
-   `buildvisit`: This utility, which the Preference engine uses, runs daily to construct lists of items to be presented to users for rating. If your applications do not use the Preference engine, `buildvisit` is not necessary.
-   `accumulator`: For the Item Affinity engine, the `accumulator` \(listed as `lpsIAA` in the `util` directory\) accumulates the number of times every possible item-to-item combination occurs and writes its findings to an output table specified by the item affinity set. An item affinity set defines the type of data required to build an item-to-item combination.

**Parent topic:**[LikeMinds Recommendations](../pzn/pzn_intro_likeminds.md)

**Parent topic:**[LikeMinds Recommendations](../pzn/pzn_intro_likeminds.md)

