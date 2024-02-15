# Exporting from source

Export the portal artifacts on the source environment, with XMLAccess and sample scripts.

1.  Log in to the RH Linux Server, where the source HCL Portal is located.

2.  Open **RH Command Line Terminal**. Right-click the desktop and select **Open Terminal**.

3.  Enter the following command: ulimit -n 24000.

4.  Start HCL Portal on the source environment. For the stand-alone portal configuration, use the command /opt/IBM/WebSphere/wp\_profile/bin/startServer.sh HCL Portal and HCL Web Content Manager.

5.  Go to the source portal profile bin directory: cd /opt/IBM/WebSphere/wp\_profile/PortalServer/bin.

6.  Use XMLAccess on the source portal base virtual portal, where baseExport.xml is used as the result file: `./xmlaccess.sh -user wpsadmin -password wpsadmin -in /opt/IBM/WebSphere/PortalServer/doc/xml-samples/ExportRelease.xml `-out /tmp/baseExport.xml -url htttp://s2p-dev.rtp.raleigh.ibm.com:10039/wps/config``

7.  Copy over the /tmp/baseExport.xml from the source to the target.



