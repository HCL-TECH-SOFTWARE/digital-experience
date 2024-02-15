# Disabling farm mode

After setting up your farm using a shared configuration, you may need to disable the farm mode, which will allow you to return the original HCL Digital Experience instance that manages the shared file system to a regular, stand-alone server instance. You can then make system updates, for example change the systemTemp value, and then run the enable-farm-mode task to re-enable the farm or you can use the instance for a different purpose.

Perform the following steps to disable the farm mode:

1.  Deactivate all farm instances sharing the required server's file system.

2.  Stop sharing the required server's file system.

3.  Run the following task to disable the farm mode:

    -   Windows™: `ConfigEngine.bat disable-farm-mode -DWasPassword=password`, from the wp_profile_root\ConfigEngine directory
    -   UNIX™ and Linux™: `./ConfigEngine.sh disable-farm-mode -DWasPassword=password`, from the wp_profile_root/ConfigEngine directory



