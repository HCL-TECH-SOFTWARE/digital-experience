# Specifying recommendation behavior

You can configure several parameters that affect the way the LikeMinds server generates recommendations.

You can set the following recommendation behavior:

-   Allowable rating values
-   Allowable confidence levels
-   Prediction quality
-   Best bets

The parameters in this section affect the way the LikeMinds server generates recommendations. If you change them, be sure that the results will still be appropriate for your application. Because the Movie Site application expects these parameters to be set to their default values, Movie Site application developers should use extreme caution when modifying them. Parameters that apply to the background applications can also affect the way recommendations are generated.

-   **[Allowable rating values](../pzn/pzn_allowable_rating_values.md)**  
Learn about the parameters that govern the allowable range of ratings.
-   **[Allowable confidence levels](../pzn/pzn_allowable_confidence_levels.md)**  
The LikeMinds server assigns a confidence level to each recommendation based on how many users have rated the recommended item and how similar the ratings are to each other. "Confidence" refers to the accuracy of the prediction. Learn how to set allowable confidence levels.
-   **[Prediction quality values](../pzn/pzn_prediction_quality_values.md)**  
The "quality" value refers to the degree a user will like an item. The LikeMinds server presents predictions in decreasing order of quality.
-   **[Best Bets values](../pzn/pzn_best_bets_values.md)**  
The LikeMinds server generates recommendation vectors that include all recommendations for a given user in order from best quality to the least. You can configure the number of items to be returned as Best Bets and the maximum percentage of the total recommendation vector to include in the Best Bets list.
-   **[Allowable rating values](../pzn/pzn_allowable_rating_values.md)**  
Learn about the parameters that govern the allowable range of ratings.
-   **[Allowable confidence levels](../pzn/pzn_allowable_confidence_levels.md)**  
The LikeMinds server assigns a confidence level to each recommendation based on how many users have rated the recommended item and how similar the ratings are to each other. "Confidence" refers to the accuracy of the prediction. Learn how to set allowable confidence levels.
-   **[Prediction quality values](../pzn/pzn_prediction_quality_values.md)**  
The "quality" value refers to the degree a user will like an item. The LikeMinds server presents predictions in decreasing order of quality.
-   **[Best Bets values](../pzn/pzn_best_bets_values.md)**  
The LikeMinds server generates recommendation vectors that include all recommendations for a given user in order from best quality to the least. You can configure the number of items to be returned as Best Bets and the maximum percentage of the total recommendation vector to include in the Best Bets list.

**Parent topic:**[Configuring LikeMinds](../pzn/pzn_configure_likemind_servers.md)

