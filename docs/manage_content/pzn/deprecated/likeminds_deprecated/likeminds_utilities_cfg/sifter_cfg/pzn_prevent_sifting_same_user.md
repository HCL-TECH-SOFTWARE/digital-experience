# Preventing multiple sifters from sifting the same user

When you run multiple sifters simultaneously to distribute load, use the following setting to prevent multiple sifters from sifting the same user in the Lps\_User\_Data table. This setting limits the sifter to look at only a certain group of users, or eliminates a group of users from being sifted.

For example, to allow the `sifter` to sift only users whose IDs are greater than 100000, and to ignore users whose IDs are less than 100000:

```
<mentor_set_name>.constraint = user_id > 100000
```

You can specify any field in the Lps\_User\_Data table for this parameter. For example, assuming there is an age column in the Lps\_User\_Data table, you could use the following setting to constraint the `sifter` to look at all users whose IDs are greater than 10000 and who are over 25 years of age:

```
<mentor_set_name>.constraint = user_id > 100000 and age > 25
```

**Parent topic:**[Configuring the sifter for mentor selection](../pzn/pzn_configure_sifter_mentor_selection.md)

