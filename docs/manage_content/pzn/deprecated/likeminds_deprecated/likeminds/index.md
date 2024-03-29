# LikeMinds Recommendations

Personalization contains a dynamic recommendation system based on LikeMinds, which is software that is used with your e-commerce applications.

LikeMinds analyzes user interactions that occur on your Web site and generates real time predictions and recommendations to your Web site users.

Real time predictions are generated by three LikeMinds engines using recommendation rules within Personalization. These rules, called recommend content, base their predictions on transactions logged through Personalization rating and action beans.

When a user visits your Web site, rating and action beans log captured transactional data. If your e-commerce Web site is set up so that users can rate content (or products), you use Rating beans to capture rating data. Similarly, if you use shopping cart technology, you use action logging beans to capture content affinity behavior to capture shopping activity. Both rating and action data is stored in your database. For example, the following types of transactions may be recorded:

-   Products a user has purchased
-   Items added or removed from a shopping basket
-   A history of the user's navigation throughout the application
-   Products that go best with a product that the user has already selected
-   Any action or series of actions that are meaningful for a site

Using recommend content rules, LikeMinds surfaces results through a set of recommendation engines. These engines predict relevant content for users based on their past Web browsing habits.

Typically, after a user has rated a minimum number of items or completed a minimum number of transaction activities, that user is assigned a set of mentors. A mentor is a specially designated user who has visited the e-commerce application a number of times, and whose profile is similar to the user's. LikeMinds uses a technique called collaborative filtering to build a mentor's profile for each user to predict how much a user will like particular items and which items that user will enjoy, buy, or add to their shopping cart.

Predicting a matching product to go with a user's selected product, independent of actual user preferences, is accomplished by the discovery of probable pairs of product matches to be recommended. This concept is called item affinity and uses a family of algorithms different from collaborative filtering. While collaborative filtering uses its algorithms to discern the highly variable affinities between individual Web-surfers, the item affinity approach looks at relationships that can exist between items.

You can use LikeMinds in a variety of situations, including:

-   eRetailer promotion and personalization Web sites
-   Financial portal content recommendation and personalization Web sites
-   Help desk and/or on-line technical support content recommendation Web sites
-   Gift recommendations for eRetailer
-   Music, movie, book, or other product rating and recommendations
-   Travel bureau trip planners




