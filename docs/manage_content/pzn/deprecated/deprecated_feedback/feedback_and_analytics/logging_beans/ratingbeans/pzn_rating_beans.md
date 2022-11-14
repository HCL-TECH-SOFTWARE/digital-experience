# Rating beans

The Rating bean is a specialized logging bean. You use Rating beans in applications that solicit user ratings for web content or other personalization resources.

The ratings logged through the Rating bean provide the user data necessary for the LikeMinds preference engine. This engine uses explicitly specified user ratings to predict user preferences. You can generate reports based on the ratings of your website content or resources.

**Note:** The concept of ratings logged through the Rating bean is different from the concept of ratings generated from tagging and rating. Tagging and rating allows users to assign ratings directly to an object to indicate likes and dislikes and is not used to collect data for future recommendations.

All rating data is logged to the Feedback schema and to the LikeMinds schema. Rating data are not logged to the user session.

-   **[Implementing rating logging](../pzn/pzn_implement_rating_logging.md)**  
To implement rating logging, insert a Rating bean into your JSP.
-   **[Rating beans reference](../pzn/pzn_rating_beans_reference.md)**  
Learn about the various method signatures of Rating beans.
-   **[Implementing rating logging](../pzn/pzn_implement_rating_logging.md)**  
To implement rating logging, insert a Rating bean into your JSP.
-   **[Rating beans reference](../pzn/pzn_rating_beans_reference.md)**  
Learn about the various method signatures of Rating beans.


