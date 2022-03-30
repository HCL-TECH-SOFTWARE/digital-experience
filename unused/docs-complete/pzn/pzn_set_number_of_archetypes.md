# Setting the number of archetypes in cache

Learn how to set the number of archtypes in cache in your LikeMinds Preference engine.

The list of archetypes is kept in the cache for a specified number of uses before it is reloaded. To change the number of users, set `<eng_instance_name>.db.engine.tune.max_archetype_list_use`. The default is 100000.

For example:

```
movie_pref.db.engine.tune.max_archetype_list_use = 150000
```

**Parent topic:**[Configuring the Preference engine ](../pzn/pzn_configure_preference_engine.md)

**Parent topic:**[Configuring the Preference engine ](../pzn/pzn_configure_preference_engine.md)

