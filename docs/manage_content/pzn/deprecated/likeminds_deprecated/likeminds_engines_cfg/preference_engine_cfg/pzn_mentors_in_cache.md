# Mentors to look for in cache \| LikeMinds engine

Learn how to set numbers of mentors to look for a given user in your LikeMinds Preference Engine.

If a user requests recommendations before the sifter has found mentors for that user, the Preference Engine checks the cache for mentors for the user. Set `<eng_instance_name>.db.engine.tune.max_cached_mentors` to the number of potential mentors which it should consider for a given user. The default is 500. For example:

```
movie_pref.db.engine.tune.max_cached_mentors = 600
```

**Parent topic:**[Configuring the Preference engine](../pzn/pzn_configure_preference_engine.md)

