# Sifter sleep time when the Lps\_User\_Data sift\_pri field Is 0

The Lps\_User\_Data sift\_pri field values must be greater than 0 in order for the sifter to get useful data \(that is, updated mentors\) for users.

If set to `true`, the following setting causes the `sifter` to sleep for the specified number of seconds by `<mentor_set_name>.pri_check_interval` if the sift\_pri field values in the Lps\_User\_Data table are 0. If you set the parameter to `false`, the `sifter` sifts random users when there are no users with sift\_pri greater than 0.

```
<mentor_set_name>.sleep_on_no_sift_pri = true
```

**Parent topic:**[Configuring the sifter for mentor selection](../pzn/pzn_configure_sifter_mentor_selection.md)

**Parent topic:**[Configuring the sifter for mentor selection](../pzn/pzn_configure_sifter_mentor_selection.md)

