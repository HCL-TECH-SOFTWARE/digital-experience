# Cumulative Fix Health Checker

These instructions are for the HCL Digital Experience Combined Cumulative Fix Health Checker.

To assist you with your upgrade, HCL is now providing a Health Checker tool that you can use to validate your Portal installation before applying a cumulative fix. Simply execute this tool on the target system and review the report that is generated to see if there are any issues you need to resolve before installing the update. The tool can't catch everything, but it scans for some of the most common pitfalls and will help to ensure a smoother upgrade experience.

We suggest running the tool a few days before you plan to apply the cumulative fix so that you have time to reconcile any problems it finds.

The tool will be installed with Cumulative Fix 03 or later and will be available for use with all future updates. To use it before applying CF03, simply unzip the archive from the maintenance package into your \(PortalServer\_root\) directory. By default, this is:

-   Windows: C:\\IBM\\WebSphere\\PortalServer
-   Linux: /opt/IBM/WebSphere/PortalServer

This will overwrite two or possibly three existing files:

-   installer/wp.config/bin/wp.config.jar
-   installer/wp.update/config/includes/upgrade\_health\_check.xml
-   installer/wp.update/config/was/wp\_TestPortalScripting.jacl

Once the tool is installed, execute the following ConfigEngine command from within the path of the profile to run it:

-   Linux:

    ```
    <profile_root>/ConfigEngine/ConfigEngine.sh health-check-update
    -DPortalAdminPwd=<password> -DWasPassword=<password>
    ```

-   Windows:

    ```
    <profile_root>\ConfigEngine\ConfigEngine.bat health-check-update
    -DPortalAdminPwd=<password> -DWasPassword=<password>
    ```


You can run this tool safely on any system that you plan to update. It is designed not to make any changes to your environment or to interfere with any running processes.

After the command completes, you will find an output report in the `ConfigEngine/log` directory named `HealthCheck-.log`. A new report with a new timestamp will be generated every time you run the tool. If the tool found any conditions that would interfere with a successful update, they will be described in the report. You should remediate these problems and re-run the tool until you get a clean report before applying the cumulative fix.


