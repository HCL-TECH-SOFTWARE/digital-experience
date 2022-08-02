# Minimum mentors the engine examines for predictability

Learn how to set the number of mentors the Clickstream Engine will examine before it checks to see whether the user is predictable.

When it determines whether it can make recommendations for a given user, the Clickstream Engine must examine the user's mentors. `<eng_instance_name>.engine.titan.predictable.loop_check_cutoff` specifies the number of mentors the Clickstream Engine will examine before it checks to see whether the user is predictable. The default is 10.

For example:

```
movie_pref.engine.titan.predictable.loop_check_cutoff = 12
```

If the user is not predictable, the engine will examine another group of `<eng_instance_name>.engine.titan.predictable.loop_check_cutoff` mentors, and then check to see whether the user is predictable. It will continue until it finds that the user is predictable or it runs out of mentors.

**Parent topic:**[User predictability](../pzn/pzn_user_predictability.md)

**Parent topic:**[User predictability](../pzn/pzn_user_predictability.md)

