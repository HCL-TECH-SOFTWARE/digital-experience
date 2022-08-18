# Use of "average user" to improve LikeMinds recommendation confidence

Learn how to configure "average user" to improve your LikeMinds Preference engine.

The Preference Engine can use an "average user," whose ratings are the average of all users' ratings. The `buildstats` utility computes the average ratings. Configuring an average user improves the confidence level of recommendations for that user. To do so, set `eng\_instance\_name.db.engine.tune.disable.avg_user` to `false`.

However, remember that this feature can be costly in system resources. To disable it, set it to `true`. \(The default setting is `true`.\)

**Parent topic:**[Configuring the Preference engine](../pzn/pzn_configure_preference_engine.md)

**Parent topic:**[Configuring the Preference engine](../pzn/pzn_configure_preference_engine.md)

