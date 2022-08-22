# Minimum number of ratings for user recommendations

Learn how to set the minimum number of ratings for your LikeMinds engine to make recommendations for a user.

Set `<eng_instance_name>.engine.titan.predictable.min_ratings_cutoff` to the minimum number of ratings a user must make before the Preference Engine will make recommendations for that user. The default is 2. For example:

```
movie_pref.engine.titan.predictable.min_ratings_cutoff = 3
```

**Parent topic:**[User predictability \| LikeMinds engine](../pzn/pzn_user_predictablity_main.md)

