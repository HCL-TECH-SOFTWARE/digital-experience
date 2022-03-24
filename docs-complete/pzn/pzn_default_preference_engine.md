# Default Preference Engine recommendations

The Preference Engine reads the value from the score field in the Lps\_Item\_Data table to determine which items are popular. Hence, a higher score means that the item is more popular.

When `buildstats` runs, it updates the score field to the average rating for that item; it generates this value based on the rating set defined in the `db.applic.rating.source` parameter. To get reliable default recommendations, run the `buildstats` utility on a regular basis. By default, the installer sets `buildstats` to run once a day. Some applications use their own business logic to assign the score to items. If you want to override the score field value to use your application's scoring instead, run `buildstats` using the `-noscore` argument.

**Parent topic:**[User predictability \| LikeMinds engine](../pzn/pzn_user_predictablity_main.md)

**Parent topic:**[User predictability \| LikeMinds engine](../pzn/pzn_user_predictablity_main.md)

