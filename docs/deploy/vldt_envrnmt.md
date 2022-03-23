# Validating the environment 

Validate the portal artifacts on the target \(production\) environment and set up the syndication relationship. This process is a manual validation of the environment. An automated multiple user test on both environments helps find any incomplete configuration steps.

1.  Start portal, if not started. `/opt/IBM/WebSphere/wp_profile/bin/startServer.sh HCL Portal and HCL Web Content Manager`.

2.  While you start the HCL Portal server, check the log file /opt/IBM/WebSphere/wp\_profile/PortalServer/log/SystemOut.log for error or missing artifacts.

3.  Access the target portal URL http://cntserv\_exmp.com:10039/wps/portal in the browser.

4.  Log in with wpsadmin/wpsadmin.

5.  After you log in, go through portal, click the **Home Pages, Administration, and Custom Pages.**

6.  While you are logged in, setup syndication for the appropriate libraries between the source and the target system.

7.  Close the browser.


Now that the production environment is staged, portal syndication feature must be used to update content in web content libraries. If managed pages is enabled, syndication also ensures that all required page artifacts are transferred along with the content.

**Parent topic:**[Manual staging to production process ](../deploy/mans2p_intro.md)

