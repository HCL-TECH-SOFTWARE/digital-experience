# Recomputing \(rebuilding\) the mentor pool

For better recommendations, you must recompute, or rebuild, the mentor pool at least once a day, ideally at a time when the database has little usage. This allows new users to become mentors and removes current mentors who are no longer good mentors.

If you are running multiple instances of the `sifter`, use the following procedure to recompute the mentor pool:

1.  Disable all instances of the `sifter` except for one, which you will use as the master `sifter` instance. Rebuilding the mentor pool uses a large amount of database resources, so it is better to use only one `sifter` to rebuild the mentor pool.

    For the `sifter` instance to be used as the master, type the following:

    ```
    <mentor_set_name>.disable_build_mentor_pool = false
    ```

    For each `sifter` instance to be disabled, type the following:

    ```
    <mentor_set_name>.disable_build_mentor_pool = true
    ```

2.  Rebuild the mentor pool on the master `sifter` instance by specifying a time for the recomputation to take place.

    Because rebuilding the mentor pool requires heavy database access, schedule it for a time when the database has little usage. For example, the following setting is for 2 a.m.:

    ```
    <mentor_set_name>.build_mentor_pool_at = 0 2 * * *
    ```

    The times are interpreted as follows:

    ![Times](../images/time2.jpg)

3.  For each `sifter` instance you disabled, set a time to reload the mentor pool after it has been rebuilt.

    The `sifter` will destroy the current mentor pool and reload the pool from the mentor pool table specified in the `<mentor_set_name>.mentor_pool.table` setting. Usually, you should set it for about an hour after the `sifter` instance has been reloaded.

    For example, to reload the mentor pool at 3 a.m.:

    ```
    <mentor_set_name>.reload_mentor_pool_at= 0 3 * * *
    ```


**Parent topic:**[Configuring the sifter for mentor selection](../pzn/pzn_configure_sifter_mentor_selection.md)

