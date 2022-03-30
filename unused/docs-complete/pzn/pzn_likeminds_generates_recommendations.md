# How LikeMinds generates recommendations

Learn how LikeMinds generates recommendations when a user logs on and navigates through your HCL Digital Experience web site.

When a user logs on and navigates through your Web site, LikeMinds follows these steps to generate recommendations for that user:

1.  Personalization Rating beans and action logging beans create a record for new users in the Lps\_User\_Data table. The Lps\_User\_Data table stores the following types of information about the user: the user's resource ID, a user ID, the number of items the user has rated or selected, and so on.
2.  The Personalization Rating beans and action logging beans log data for that user as that user navigates your Web site.

    The profile data is first stored in the server's cache, then the server writes all the new data to the database. The Lps\_User\_Rating table stores the user's explicit preferences; the Lps\_User\_Trx table stores the user's clickstream and purchase behavior. The Lps\_User\_Trx table also stores item affinity input data.

3.  The application can then query LikeMinds for recommendations. Recommendation queries are transaction data-specific.

    -   Preference recommendations are surfaced by the recommend content rule. To receive Preference recommendations, your application must record users' explicit preferences \(ratings\) using the Rating bean.
    -   Clickstream recommendations are surfaced by the recommend content rule. To receive Clickstream recommendations, your application must record users' clickstream behaviors \(that is, product detail views, shopping basket inserts, and so on\) using the Action bean.
    -   Item Affinity recommendations are in the form: “`this mouth guard is a likely product to go along with the hockey puck the user has just added to his or her shopping cart`”. To receive Item Affinity recommendations, your application must record users' likely product pair matches. In other words, your application must capture the current "content/product" context using the Action bean, in order to return those items most associated with that "content/product".
4.  Depending on the engine you are using, the following step occurs next:
    -   **Preference and Clickstream engines**: For a new user, if your application queries LikeMinds for recommendations before mentors have been assigned for that type of data \(that is, Preference, Clickstream, or Item Affinity\), the server will assign mentors from a cached pool of mentors.

        If the server is unable to, for lack of profile data, match cached mentors to this user, the server will provide an empty set of recommendations. An important distinction, profile data means the transaction data for the current user and not the attributes of that user.

    -   **Item Affinity engine**: If your application is predicting item affinity product pair matches, it will collect data based on a set of definitions that you create, called an item affinity set. For input data, the item affinity set uses transactions from a specified input table.
5.  Depending on the engine, the following step occurs next:
    -   **Preference and Clickstream, engines**: Once a user's profile is stored in the database, the `sifter` utility can calculate mentors for that user. The `sifter` is a background utility which assigns a set of mentors to each user.
        -   Mentor assignments are specific to each type of data.
        -   Mentor assignments are stored in the mentor table associated with this type of data.
    -   **Item Affinity engine**: The `accumulator` generates item affinity product pair matches by analyzing data in the item affinity set \(same as transaction table\) and recording its findings to an output table.
6.  Depending on the engine, the next step is as follows:
    -   **Preference and Clickstream engines**: As new transaction data is recorded for a user, the user is prioritized for reprocessing by the `sifter` to calculate new mentor assignments. Users are prioritized by a calculated 'sift priority', reflecting the percentage of new or changed profile data for that visitor.
    -   **Item Affinity engine**: As new product selection behaviors are recorded in the transaction input table specified in the item affinity set definition, the `accumulator` uses this data to calculate new item affinity recommendations.
7.  When your application runs LikeMinds rules, the following occurs, depending on the engine:
    -   **Preference and Clickstream engines**: LikeMinds looks up that user's mentors, and calculates recommendations.
    -   **Item Affinity engine**: LikeMinds calculates the most likely item-content pairs based on accumulated item transaction history.

**Parent topic:**[LikeMinds Recommendations ](../pzn/pzn_intro_likeminds.md)

**Parent topic:**[LikeMinds Recommendations ](../pzn/pzn_intro_likeminds.md)

