# Number of mentors to use \| LikeMinds engine

Learn how to set numbers of mentors to a given user in your LikeMinds Preference Engine.

Set `<eng_instance_name>.db.engine.tune.num_mentors` to the maximum number of mentors to assign to a given user. The default is 50. For example:

```
movie_pref.db.engine.tune.num_mentors = 60
```

If you do not set this parameter, then the Preference Engine uses the value set for `<mentor_set>.max_mentors = <number>`.


