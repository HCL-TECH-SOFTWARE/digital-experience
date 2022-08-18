# Running multiple sifters

Use the following settings to run multiple instances of the sifter and have all the sifters share some configuration parameters and override others.

Running multiple `sifters` simultaneously allows you to distribute load on very large systems.

To override a particular default parameter, add a prefix to the parameter. For example, to reload the mentor pool for the MovieSift `sifter` instance at 4 a.m.:

```
MovieSift.<mentor_set_name>.reload_mentor_pool_at = 0 4 * * *
```

If you run a `sifter` with the following setting,

```
sifter -config MovieSift -conf <lps config file>
```

that `sifter` will use the`MovieSift.<mentor_set_name>. reload_mentor_pool_at = 0 3 * * * setting`.

**Parent topic:**[Configuring the sifter for mentor selection](../pzn/pzn_configure_sifter_mentor_selection.md)

**Parent topic:**[Configuring the sifter for mentor selection](../pzn/pzn_configure_sifter_mentor_selection.md)

