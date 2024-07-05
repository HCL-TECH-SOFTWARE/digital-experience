# Configuring web server security

For security reasons, the portal search seedlist by default redirects to HTTPs. Therefore, you need to configure your web server for HTTPs.

For information about how to do this, go to the *Installing* section of the HCL Portal documentation. Select the appropriate operating system for your installation, and then the subsection for a stand-alone or clustered environment. Then, select the topic about *Preparing a remote Web server*.

If you do not want to provide HTTPs security for your portal search seedlist, you can configure portal search to use HTTP only. To do this, run the configuration task `action-modify-servlet-transport-guarantee-none-wp.search.servlets/seedlist/servletEAR`. Use the following syntax, depending on your environment:

-   **AIX**

    ./ConfigEngine.sh action-modify-servlet-transport-guarantee-none-wp.search.servlets/seedlist/servletEAR -DPortalAdminPwd=password -DWasPassword=password

-   **Linux**

    ./ConfigEngine.sh action-modify-servlet-transport-guarantee-none-wp.search.servlets/seedlist/servletEAR -DPortalAdminPwd=password -DWasPassword=password

-   **Windows**

    ConfigEngine.bat action-modify-servlet-transport-guarantee-none-wp.search.servlets/seedlist/servletEAR -DPortalAdminPwd=password -DWasPassword=password

For your updates to take effect, restart your portal server.

