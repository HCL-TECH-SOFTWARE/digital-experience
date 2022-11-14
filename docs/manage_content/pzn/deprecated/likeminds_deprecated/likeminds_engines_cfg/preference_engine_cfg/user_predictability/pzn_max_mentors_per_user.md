# Maximum number of mentors assigned to each user

Learn how to specify the number of mentors to be assigned to each user in your LikeMinds engine.

Use the following setting to specify the number of mentors to be assigned to each user. The number of actual mentors can be less than the maximum setting but never greater than the value specified. For example:

```
<mentor_set_name>.max_mentors = 50
```

**Note:** Use a value between 50-100. See [Maximum ratings a user needs before becoming a mentor](pzn_max_ratings_become_mentor.md) for guidelines on setting `<mentor_set_name>.max_mentors`


