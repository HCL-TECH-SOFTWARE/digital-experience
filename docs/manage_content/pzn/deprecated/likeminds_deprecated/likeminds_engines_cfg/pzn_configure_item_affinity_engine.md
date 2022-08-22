# Configuring the Item Affinity Engine

For every cross-selling transaction in the user's shopping history, the Item Affinity Engine derives its calculations from the following statistics.

-   **Support**: This is the number of times an item pair is involved in the item affinity set you defined, divided by the total number of paired item affinity events. Item affinity events can be critical page views, purchases, shopping cart adds or drops, or combinations of these events. In other words, the support is the percentage of the time that the item pair occurred together, relative to all transactions.
-   **Prediction**: Using the support statistic as a basis, the prediction is the number of times an item-to-item pair occurs together, divided by the singular support of the first item of that item pair. In other words, the prediction is the probability of the item pair, given the first item in the pair.
-   **Confidence**: Using the prediction statistic as a basis, confidence is the prediction divided by the singular support of the second item of the pair for which the prediction is computed. That is, the confidence is the probability of the item pair given the first and second item in the item pair.

In general terms, you use the Item Affinity Engine as follows:

1.  Define the shopping cart analysis requirements.

    This refers to the scope and filters for predictions you plan to use for the shopping cart analysis. This definition is very flexible. For example, the shopping cart can be based on the user's entire shopping history, on seasonal product sales, on the user's current session, user page views critical to an item's purchase, and so on.

    The type of purchases you expect from your users will determine the type of shopping basket you define. For example, a session-based shopping cart would be suitable for a grocery store site, where users tend to purchase a variety of items at once. A lifetime shopping cart is suitable for a site where users tend to purchase one large item occasionally, such as expensive electronic equipment.

2.  Configure an item affinity set for the shopping cart analysis.

    The item affinity set defines your shopping cart analysis requirements. Similar to mentor sets or transaction sets, the item affinity set defines the type of data you want to collect. The item affinity set starts by collecting transactions from a transactions input table similar to Lps\_User\_Trx. You can include filters to query fields in the input table, specify the types of transactions to query, the number of highly associated items to consider, and so on, for the shopping cart definition. Finally, you specify an output table to which the results of the analysis are written. The output table must have the same fields and datatypes as the Lps\_MBA\_Scored table.

3.  Run the `accumulator` utility to collect the item affinity set data and populate it into the output table specified in the item affinity set.

    Similar to the `sifter`, which is used for the other LikeMinds server engines, the `accumulator` uses the item affinity set data to make the support, prediction, and confidence calculations \(described earlier\). It writes its findings to the output table specified in the item affinity set.

    You should configure the `accumulator` to run at times of low database usage, since it can make heavy use of system resources.


**Parent topic:**[Configuring the LikeMinds engines](../pzn/pzn_configure_likeminds_engines.md)

