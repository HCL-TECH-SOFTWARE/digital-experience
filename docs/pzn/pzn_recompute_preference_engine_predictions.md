# Recomputing Preference engine predictions

Learn how to configure your LikeMinds Preference engine to recompute user predictions.

The `<eng_instance_name>.engine.titan.recomputation_bound` configuration parameter specifies the percentage change allowed in a user's ratings before the LikeMinds server recomputes the user's predictions. For example:

```
music_pref.engine.titan.recomputation_bound = 10.0
```

Ordinarily, the LikeMinds server generates predictions based on a user's mentors, which the `sifter` computes and makes available to the database. When a user has no mentors, perhaps because he or she has just arrived at the site, or when the user's ratings or transactions have changed beyond the percentage specified here, the LikeMinds server selects mentors from a reduced set of candidates and recomputes the user's predictions.

Use this setting with caution, as selecting mentors is a relatively expensive operation: a low percentage setting can lead to excessive CPU load with little or no gain in prediction quality. A higher setting will improve performance, but predictions may be less accurate.

**Parent topic:**[User predictability \| LikeMinds engine](../pzn/pzn_user_predictablity_main.md)

**Parent topic:**[User predictability \| LikeMinds engine](../pzn/pzn_user_predictablity_main.md)

