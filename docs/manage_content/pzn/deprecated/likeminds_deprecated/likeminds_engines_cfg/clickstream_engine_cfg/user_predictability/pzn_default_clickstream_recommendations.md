# Default Clickstream Engine recommendations

Review default recommendations for user predictability.

The Clickstream Engine uses transaction data stored with a special user to generate default predictions. The `buildstats` utility generates clickstream transaction data, based on the transaction set named in the `db.applic.transaction.source` parameter. This transaction data is a summary of all clickstream transaction data for users, based on transaction data from all configured transaction sets. `buildstats`, the LikeMinds server, and other utilities identify the special user as one whose Lps\_User\_Data `mentor_type` field is set to "z". There should be exactly one user with this setting, not more. `buildstats` will automatically generate this user if custom IDs are not configured; otherwise, you need to create the user by hand, since `buildstats` cannot know what restrictions apply to the custom IDs.

Run the `buildstats` utility on a regular basis. By default, the installer sets `buildstats` to run once a day. Some applications use their own business logic to assign the score to items. If you want to override the score field value to use your application's scoring instead, run `buildstats` using the `-noscore` argument.

**Parent topic:**[User predictability](../pzn/pzn_user_predictability.md)

