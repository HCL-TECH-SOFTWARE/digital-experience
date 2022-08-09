# LikeMinds Recommendation Engine architecture

To build your own recommendation application, customize the LikeMinds Recommendation Engine settings to work with your database and Web applications.

The LikeMinds Recommendation Engine captures data based on user actions. From this set of actions, LikeMinds bases its construction of mentor sets and subsequent predictions. User actions can include:

-   A history of the user's navigation throughout the application
-   Products that go best with a product that the user has already selected
-   Products purchased
-   Items added to or removed from a shopping basket

The current user preferences are collected by the engine in the so-called rating vector and used to identify those people most like the current user.

People with a behavior similar to the current user become mentors for that user. The LikeMinds Recommendation Engine assigns a numeric weight to each mentor based on the level of similarity of the rating vector to yours. The more the mentor's rating values resemble a user and the more products the mentor has rated, the greater the weight.

The LikeMinds Recommendation Engine assembles a set of recommendations by finding the products each mentor recommends and creating a prediction vector containing the predicted rating of each product. With each predicted rating, it also stores a numeric value representing the confidence for the rating.

The confidence values determine the quality of predictions. The LikeMinds Recommendation Engine assigns a confidence level to each recommendation based on how many users have rated the recommended item and how similar the ratings are to each other.

A user is assigned a set of mentors only after he has rated a minimum number of items or completed a minimum number of transaction activities.

If you want your application to predict a matching product to go with a user's selected product, you can configure probable pairs of product matches to be recommended. This concept is called item affinity.

Depending on the type of recommendation you want to extract, the specific engines must be configured, such as the Preference Engine or Item Affinity Engine. The following image shows the details of the overall LikeMinds Recommendation Engine architecture.

![LikeMinds Recommendation Engine architecture](../images/lpsparts.jpg)

**Parent topic:**[LikeMinds Recommendations](../pzn/pzn_intro_likeminds.md)

**Parent topic:**[LikeMinds Recommendations](../pzn/pzn_intro_likeminds.md)

