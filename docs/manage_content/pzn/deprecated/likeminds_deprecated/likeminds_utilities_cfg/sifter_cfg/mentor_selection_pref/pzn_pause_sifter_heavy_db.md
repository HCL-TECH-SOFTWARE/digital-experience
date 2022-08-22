# Pausing the sifter during heavy database

Learn how to configure the sifter during heavy database.

You can pause the `sifter` during times of heavy database access. This frees up database resources for other activities during heavy database activity. For example, to put the `sifter` asleep at 11 a.m.:

```
<mentor_set_name>.pause_sifting_at= 0 11 * * *
```

If you set <`mentor_set_name>.pause_sifting_at`, use the following setting to wake up the `sifter` afterwards. For example, to wake the `sifter` up at 4 p.m.:

```
<mentor_set_name>.resume_sifting_at= 0 16 * * *  
```

**Parent topic:**[How the mentor selection process works](../pzn/pzn_mentor_selection_process.md)

