# Running the Solution Installer without an internet connection

You can run the Solution Installer from a server that does not have an internet connection.

1.  Open the wkplc\_comp.properties file, which is in the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\ConfigEngine\\properties directory.

2.  Locate the wp.si.offlineMode parameter.

3.  Change the value of the wp.si.offlineMode parameter to true.

    Setting this value to true means that no attempts are made to retrieve external DTD by the XML parser when reading XML content.

4.  Save your changes.



