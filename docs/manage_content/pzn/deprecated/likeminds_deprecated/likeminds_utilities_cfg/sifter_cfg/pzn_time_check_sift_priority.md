# Time interval for checking sift priority

Learn how to specify time interval for checking sift priority.

To specify the interval in seconds for the `sifter` to check the sift priority value for a user, use the following setting. The default is 20 seconds.

```
<mentor_set_name>.pri_check_interval = 40
```

**Note:** You can also use this setting when you are setting the time for the `sifter` to sleep during busy periods of database access. See [Sifter performance considerations](pzn_sifter_performance_considerations.md).

**Parent topic:**[Configuring the sifter for mentor selection](../pzn/pzn_configure_sifter_mentor_selection.md)

