# Copying portal binary files to the deployment manager 

Complete this task if the deployment manager is not sharing application binary files with a Portal install.

1.  Copy the required files \(including the migration plug-in\) from the HCL Digital Experience Version 8.5 binary installation to the target deployment manager system:

    1.  Copy the filesForDmgr.zip file to the remote deployment manager system.

    2.  Expand the filesForDmgr.zip file into the installation root directory of the deployment manager. 

        For example, in the C:\\IBM\\WebSphere\\AppServer directory.

    If the deployment manager profile was not created in the default AppServer/profiles/Dmgr01 directory, then the metadata\_wkplc.xml file in the AppServer/profiles/Dmgr01/config/.repository/metadata\_wkplc.xml directory in the compressed file, must be copied into the config/.repository sub-directory under the deployment manager profile directory.

    Failure to copy the migration plug-in files to the deployment manager can result in the following error when you try to upgrade the ConfigEngine tool:com.ibm.websphere.management.exception.InvalidConfigDataTypeException: ADMG0007E: The configuration data type CellCompRegistryCollection is not valid.


**Parent topic:**[Setting up the target environment ](../migrate/setting_up_the_target_environment.md)

