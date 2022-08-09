# Maximum open file descriptors for Unix-based platforms

For Unix-based platforms, the default open file descriptor must be set to 200000 to allow the Configuration Wizard commands to run properly during migration.

The default open file descriptor limit for the Unix user profile that is used to install and run the HCL Portal and configuration wizard servers should be set to 200000. Update this value in the user profile for any migrations that use the Configuration Wizard. The typical syntax is `ulimit -n 200000`. However, you can refer to the documentation specific to your platform to confirm.

If you run the migration commands manually, set the open file descriptor to 200000 prior to running the WASPreUpgrade.sh and WASPostUpgrade.sh commands.

**Parent topic:**[Preparing your source environment](../migrate/mig_t_premig_tasks.md)

**Parent topic:**[Setting up the target environment](../migrate/setting_up_the_target_environment.md)

