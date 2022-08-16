---
id: h_web_mod_install
title: Installing a Web module
---
import useBaseUrl from '@docusaurus/useBaseUrl';



Install a Web module to add and activate new portlets for your portal.

You must be assigned a Manager or Administrator role to install a Web module.

Perform the following steps to install a Web module:

1.  Click the **Install** button.

2.  Enter the Web module location in the **Directory** field. You can also use the **Browse** button to navigate your file system.

3.  Select the portlet WAR file that you want to install.

4.  Click **Next** to begin the installation process.

    A confirmation appears that lists the portlets that are included in the WAR file.

5.  If required, you can manually overwrite the auto-generated display name and a context root for the Web module.

    This can be useful if the Web module contains other resources besides portlets, or if you want to manage the Web module using the Administrative Console.

6.  If you want to install the Web module without starting it immediately, select the **Do not start application** option.

    This can be useful in a cluster scenario where you want to defer starting the Web module until it has been synchronized to all nodes.

7.  Click **Finish** to begin the installation, or click **Cancel** to quit without implementing any changes.


After the installation completes, a message displays that confirms the success or failure of the installation.

To allow others to use this Web module and its portlets, you must set the access rights for them.

