# MovieSite Sample 

The MovieSite documentation focuses on six aspects of LikeMinds capabilities.

-   **Best Bets**

    The Best Bets task provides a list of recommended movies for each user. These recommendations are calculated based on a user's previous ratings, as well as the ratings of other similar users, using collaborative filtering. The system determines users' similarities by comparing their ratings history among all users. For example, if both user A and user B have many similar ratings, but user B has rated many more different movies; user B might make a great mentor for user A. It is from the set of mentors \(user B and other similar users\) that LikeMinds makes recommendations, in this case a movie recommendation for user A.

-   **Get Items to Rate**

    The Get-Movies-to-Rate task retrieves movies, which the user has not yet rated, from the database. These movies are selected based on the impact that a rating from the user would have on LikeMinds' ability to recommend movies \(Best Bets\). \(See the task example.\)

-   **View the User's Previous Ratings**

    This task retrieves ratings that a user previously entered from the LikeMinds database. An item that has previously been rated can always be given a different rating. \(See the task example.\)

-   **Log Item Ratings**

    The Personalization rating bean logs each user rating to the LikeMinds database. There are a few requirements to remember when using the rating bean:

    -   The session attribute "pzn.userName" must be set with the user resource ID. This is how LikeMinds pairs the user with an item rating.
    -   If you log an item that previously did not exist in the LikeMinds database table, an entry will automatically be created for that item.
    -   In the same way, if an item is logged for a user who does not exist in the LikeMinds database table, LikeMinds creates an entry for that user. This is how a "new user" is to be entered into the LikeMinds system.
    -   The resource collection that is sent as a parameter to the logging bean is case sensitive.
-   **Database Access**

    Developers are responsible for maintaining their own database tables. In MovieSite's case, this includes MovieSite's user table, item table, and also genre tables. All MovieSite tables begin with **MS\*** and LikeMinds tables begin with **Lps\***. To implement filtering, the filter ID columns must be added to the LPS\_ITEM\_DATA table. These filter IDs are populated when a movie is logged for the first time, or the IDs are set directly. For more information on filtering, see the section about filtering recommendations that follows.

-   **Filtering Recommendations based on filter IDs**

    LikeMinds implements a filtering system for each of the Personalization rules that query LikeMinds. This system filters items at the LikeMinds level according to any number of filter ID's associated with each item. Only the items which satisfy the filter are surfaced to the content spot in the JSP.


-   **[Exploring Movie Site ](../pzn/pzn_explore_moviesite.md)**  
Movie Site demonstrates the LikeMinds Recommendation Engine, guiding you through a Personalization scenario that is based on factual data from a site on the internet. The website uses a personalization solution to analyze visitor behavior and to recommend individualized content information and services while the visitor is actively engaged on the site.
-   **[Exploring Movie Site ](../pzn/pzn_explore_moviesite.md)**  
Movie Site demonstrates the LikeMinds Recommendation Engine, guiding you through a Personalization scenario that is based on factual data from a site on the internet. The website uses a personalization solution to analyze visitor behavior and to recommend individualized content information and services while the visitor is actively engaged on the site.

**Parent topic:**[LikeMinds Recommendations ](../pzn/pzn_intro_likeminds.md)

**Parent topic:**[LikeMinds Recommendations ](../pzn/pzn_intro_likeminds.md)

