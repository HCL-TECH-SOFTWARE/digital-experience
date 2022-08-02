# Migrating from a 32-bit source environment to 64-bit target environment

The 32-bit Portal installation is no longer supported in HCL Digital Experience 8.5. If you are migrating from a 32-bit source environment to a 64-bit Version 8.5 environment, you need to take extra steps to ensure that the WASPreMigration task completes successfully.

The binary files that are used to run the WASPreUpgrade task on the source server are typically created on the target environment. However, the remote migration package includes a Java™ JRE that matches the 64-bit architecture of the target environment, and it cannot be run on the source environment. If you attempt to use the 64-bit remote migration package on the 32-bit source environment, you are prompted with an error message that states that the 64-bit JVM cannot run on 32-bit hardware.

Choose one of the following methods to resolve this issue:

1.  Change the JAVA\_HOME path that is used by the remote migration package to use the Java installed with source Portal server:
    1.  Create the remote migration package as directed by the migration instructions in the Configuration Wizard.
    2.  Copy the remote migration package to the source environment, and extract.
    3.  Edit the extracted remote migration package root/bin/sdk/\_setupsdk1.6\_64.sh file, and update the JAVE\_HOME property to be in the Source AppServer root/java path of the source environment.
    4.  Continue with the rest of the migration process in the Configuration Wizard.
2.  Copy the JRE from the source environment to the remote migration package:
    1.  Create the remote migration package as directed by the migration instructions in the Configuration Wizard.
    2.  Copy the remote migration package to the source environment, and extract.
    3.  Move the Java folder from the remote migration package that is in extracted remote migration package root/java to another location.
    4.  Copy the Java folder from your source that is in Source AppServer root/java to the Java folder in the remote migration package.
    5.  Continue with the rest of the migration process in the Configuration Wizard.

**Parent topic:**[Preparing your source environment](../migrate/mig_t_premig_tasks.md)

