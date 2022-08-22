# Minimum number of Clickstream activities for a user

Learn how to set the minimum number of clickstream activities required for a user before he or she can receive recommendations.

Set `<eng_instance_name>.engine.saturn.tune.predictable.min_xactions_cutoff` to the minimum number of transactions a user must make before the Clickstream Engine will make recommendations for that user. The default is 10.

For example:

```
movie_click.engine.saturn.tune.predictable.min_xactions_cutoff = 2
```

**Parent topic:**[User predictability](../pzn/pzn_user_predictability.md)

