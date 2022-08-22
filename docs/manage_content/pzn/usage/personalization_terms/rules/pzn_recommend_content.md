# Recommend Content

You use Recommend Content rules \(also referred to as recommendation rules\) to recommend content to your Web site visitors. Recommendation rules, powered by LikeMinds, recommend content based on users' past interactions with your Web site.

When creating a Recommend Content rule, you specify one of three recommendation methods. The recommendation methods are:

-   **how the current user navigated the site**

    This method is associated with the LikeMinds Clickstream Engine.

-   ****preferences explicitly expressed by the user****

    Use this recommendation method to generate recommendations based on users' ratings of items. This method is associated with the LikeMinds Preference engine.

    Items map to a piece of content and are represented by resources and resource collections. Your Web site captures ratings using the Rating bean. The Rating bean collects the rating, the item resource, and resource collection, and then logs the data for LikeMinds to use later.

-   **association with content returned from a rule**

    Use this recommendation method to generate recommendations based on market-basket analysis. This method associates items that a current Web site user has interest in \(such as an item in their shopping cart\) with items that others users have had interest in or have purchased. This method is associated with the LikeMinds Item Affinity engine.

    Item affinity rules make use of the LikeMinds transaction data being collected. They offer a method for generating recommendations from a known set of resources \(actually the results of another rule returning the same resource type\).


**Notes:**

-   Before using Recommend Content rules, check with your system administrator to see which LikeMinds engines are configured and running on the production run-time server.
-   To preview results, the production LikeMinds database must contain data, including items, users, and transactions \(ratings or actions\). The problem of initial data priming is commonly called coldstart.

**Parent topic:**[Rules](../pzn/pzn_rules.md)

