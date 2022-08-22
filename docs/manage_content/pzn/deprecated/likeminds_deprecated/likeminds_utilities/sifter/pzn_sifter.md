# Sifter \| LikeMinds utilities

The sifter, which is used for all the Recommendation engines except for Item Affinity, assigns mentors to users and updates its assignments as users rate items. When no users are rating items, the sifter updates the mentor assignments of all users based on changes to the pool of available mentors.

The `sifter` must be running whenever the LikeMinds server is running. However, you can install the `sifter` across multiple machines to distribute load.

**Parent topic:**[Using the LikeMinds utilities](../pzn/pzn_using_likeminds_utilities.md)

