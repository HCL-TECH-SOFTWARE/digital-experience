# Tuning via the Integrated Solutions Console

To get to WebSphere Integrated Solutions Console, start WebSphere Portal and then login to the WebSphere Integrated Solutions Console via `https://{yourserver}:10041/ibm/console` with the administrator user ID created during Portal installation.

The port number, 10041, is the port number in our lab deployments, but other deployments may use different ports. To find out the ports in use for your installation, look for ‘adminhost’ in <wp_profile root>/config/cells/<cell_name>/ nodes/<node_name>/serverindex.xml.

For more details on configuring a WebSphere Application Server, see the Tuning Section of the Information
Center located at [WebSphere Application Server](https://www.ibm.com/support/knowledgecenter/en/SSEQTP_9.0.5/as_ditamaps/was9_welcome_base.html)