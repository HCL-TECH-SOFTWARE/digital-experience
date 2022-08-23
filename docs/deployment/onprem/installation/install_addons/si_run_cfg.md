# Solution Installer run time configuration

The Solution Installer run time configuration properties allows you to control how the Solution Installer installs a Portal Application Archive \(PAA\) formatting application to HCL Digital Experience.

The Solution Installer run time configuration properties are located in the wkplc\_comp.properties file. This file is located in the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\ConfigEngine\\properties directory. Generally the Solution Installer run time configuration properties require no edits; the following exception applies:

-   To include custom code extension points with suffixes other than -applySIFeaturePack and -removeSIFeaturePack. If you want to include additional extension points to -applySIFeaturePack and -removeSIFeaturePack, add them to the existing items using a comma separated list.

The properties for adding different extension suffixes are the wp.si.configInstallExtensionList and wp.si.configRemoveExtensionList. For example:

-   wp.si.configInstallExtensionList=-applySIFeaturePack
-   wp.si.configRemoveExtensionList=-removeSIFeaturePack

-   **[Running the Solution Installer without an internet connection](../config/run_si_noconnect.md)**  
You can run the Solution Installer from a server that does not have an internet connection.


