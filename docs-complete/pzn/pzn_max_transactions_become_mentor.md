# Maximum transactions a user needs before becoming a mentor

Learn how to set the maximum number of transactions for a user to become a mentor in your LikeMinds engine.

The following setting specifies the maximum number of transactions a user can have before becoming a mentor. The `sifter` uses this setting if the Purchase or Clickstream Engine is using that mentor set. You can specify the value as one of the following:

-   A percentage of the total number of items in the database. For example:

    ```
    <mentor_set_name>.max_mentor_xactions = 75%
    ```

-   The maximum number of transactions \(that is, without a percentage\). For example:

    ```
    <mentor_set_name>.max_mentor_xactions = 18
    ```


Use the following guidelines for setting `<mentor_set_name>.max_mentor_transactions`

|Total Number of Items in Database|Suggested Setting|
|---------------------------------|-----------------|
|< 1000|<= 100|
|1000–5000|<=500|
|5000–10,000|<= 1500|
|10,000+|<= 1500|

**Parent topic:**[User predictability \| LikeMinds engine](../pzn/pzn_user_predictablity_main.md)

**Parent topic:**[User predictability \| LikeMinds engine](../pzn/pzn_user_predictablity_main.md)

