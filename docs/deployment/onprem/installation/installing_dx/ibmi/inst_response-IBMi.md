# IBM i: Creating a response file

After IBM Installation Manager is installed, you can use it to record a response file that is based on your environment. Record a response file on the same operating system you plan for the installation. If you have multiple operating systems, you must record a response file for each operating system. Use a response file to automate your installation on multiple servers.

You can also use the console mode to generate a response file. Go to [Installing with the console for an IBM i environment](inst_response-IBMi.md) for more information. After you review the summary information, enter G to generate a response file instead of I to install.

1.  Start all servers and applications that require a port number to avoid port conflicts when you install HCL Portal. If you are installing multiple copies of HCL Digital Experience on your server, start the existing Configuration Wizard servers.

    **Note:** Currently, the cw\_profile starting point always defaults to 10200. If you install a second version of portal on the same server, you must customize the cw\_profile port value. Add the following line to the InstallationManager\_root/InstallationManager/eclipse/tools/imcl.ini file:

    ```
    -Dcwprofile_startingport=new\_starting\_port\_number
    ```

2.  Go to the InstallationManager\_root/eclipse/tools directory.

3.  Run the following task to start the recording:

    imcl -c

4.  Complete the following steps to add the repositories:

    1.  Enter P to go to the **Preferences** menu.

    2.  Enter 1 to go to the **Repositories** menu.

    3.  Enter D to add repositories.

    4.  Type the path for your HCL Portal repository file.

    5.  Enter A to apply your repositories and return to the **Preferences** menu.

    6.  Enter R to return to the **Main** menu.

5.  Enter 1 to install the software packages.

6.  Select **HCL Portal server**. To complete this installation option, your existing copy of WebSphere® Application Server must meet the following requirements:

    -   WebSphere Application Server Version 8.5.5.2 or later
    -   Java Version 7.0
    -   No existing Portal profile
    **Tip:** If you have a HCL Portal Enable license, you must select both the **HCL Portal server****HCL Portal Express** and **HCL Portal Enable** packages.

7.  Choose one of the following options:

    -   Enter 1 to choose version 8.5.0.0 for installation.
    -   Enter 2 to show all available versions of the package.
8.  Enter N.

9.  Enter A to accept the license agreement.

10. Enter N.

11. Choose one of the following options for translation packages:

    -   Enter N to select the default English package only.
    -   Enter the number for the translation package you want to install.
12. On the **Incompatible package group** menu, choose one of the following options:

    -   Enter M to change the installation directory. Then, enter the new installation directory. Read the **Tip** about installation path length to avoid issues that are caused by long paths.
    -   Enter N to keep the existing directory.
    **Tip:** Ensure that the installation paths for WebSphere Application Server and HCL Portal that are reasonably short. Long paths can cause installation problems. Use the following suggested paths or choose locations of this length or shorter to ensure success:

    -   WebSphere Application Server installation location: /QIBM/ProdData/WebSphere/AppServer/V85/ND
    -   WebSphere Application Server default profile location: /QIBM/UserData/WebSphere/AppServer/V85/ND
    -   HCL Portal installation location: /QIBM/ProdData/WebSphere/PortalServer/V85/Server
    -   Configuration Engine location: /QIBM/ProdData/WebSphere/PortalServer/V85/ConfigEngine
    -   HCL Portal profile path: /QIBM/UserData/WebSphere/AppServer/V85/ND/profiles/wp\_profile
13. Enter the number for the WebSphere Application Server root directory to use as the existing WebSphere Application Server.

14. Enter the configuration wizard administrator user ID and password.

15. If you selected the **Portal Server Profile** feature, enter the information for the following prompts:

    -   **Enter the host name**
    -   **Enter the node name**
    -   **Enter the cell name**
    -   **Enter an administrator user ID for the portal server**
    -   **Enter an administrator user password for the portal server**
    -   **Confirm administrator user password for the portal server**
16. Enter Y to enter advanced parameters such as customized Uniform Resource Identifier \(URI\) settings, profile name, and port numbers. Enter N to accept the default parameters.

    -   **Enter the context root**
    -   **Enter the default home**
    -   **Enter the personalized home**
    -   **Enter the profile name**
    -   **Enter the starting port number**
    -   **Enter the profile path**
17. Enter N.

18. Review the summary information.

19. Enter G to generate a response file.

20. If you plan to install on a different server, copy the response file to the response file directory on that server. Open the response file, make any necessary changes to the repository location. Search for value= and make any necessary changes for the new server.


**Parent topic:**[IBM i: Installing with the response file](../install/inst_silent-IBMi.md)

