# Configuring the IBM License Metric Tool

IBM License Metric Tool monitors license compliance. It recognizes and monitors what product offerings and their versions, releases, and fix packs are installed and used on the system. It measures the processor value units (PVU) available to and used by these assets. The tool ensures compliance with IBM® sub-capacity licensing requirements and to demonstrate good IT governance. Information about installed software is collected from monitored computers by an agent that can be deployed on a range of operating systems. It is stored on a central server in a DB2® database and can be accessed through pre-configured reports that are available from a web user interface.

Install and configure HCL Digital Experience before you configure the IBM License Metric Tool.

1.  Download the IBM License Metric Tool agent and install it on each server that has HCL Digital Experience installed.

2.  Complete the following steps to provide credentials to IBM License Metric Tool:

    1.  Open a shell window.

    2.  Change to the IBM License Metric Tool installation directory: agent\_home/wasagent.

    3.  Run the following task to start the WebSphere® agent:

        -   AIX® HP-UX Linux™ Solaris: ./WASAgentClient.sh
        -   IBM i: WASAgentClient.sh
        -   Windows™: WASAgentClient.bat
    4.  Enter servers to list the WebSphere server IDs and locations.

    5.  Enter credentials id userid password to provide credentials for the servers. Where id is the server ID and userid and password correspond to the WebSphere Application Server administrator user ID and password.

        **Note:** Whenever the IBM Tivoli® License Compliance Manager agent is stopped, rerun the WASAgentClient task and then reissue the credentials.

    6.  Complete any additional configuration tasks after installation. Read the following topic for instructions: [Configuring IBM License Metric Tool](http://publib.boulder.ibm.com/infocenter/tivihelp/v31r1/topic/com.ibm.license.mgmt.planinconf.doc/t_configure_main.html).

3.  Follow the IBM License Metric Tool instructions that are provided with your customer agreement to complete the IBM License Metric Tool licensing configuration for HCL Portal and HCL Web Content Manager.

4.  Ensure that the appropriate inventory signature file exists in the PortalServer_root/properties/version directory path. The file that is present depends on your license agreement and has a general format of IBM_offering_nameversion_number.swtag.
    !!!note "Tip"
        Only one filename.swtag signature file can exist per product offering. Refer to the following table to determine the correct signature file. If you installed HCL Portal Server as a prerequisite for Enable, Extend, HCL Web Content Manager, or HCL Web Content Manager Standard Edition, only the .swtag for the advanced offering exists.

    !!!note
        If the wrong file is found, the wrong offering might be installed. You must uninstall that offering and install the correct offering. If necessary, contact IBM Support for assistance with this process.

    |Product offering / Component name|IBM Tivoli License Manager signature file|Signature file's directory path|
    |---------------------------------|-----------------------------------------|-------------------------------|
    |HCL Portal Extend Version 9.0|ibm.com\_IBM\_HCL Portal and HCL Web Content Manager\_Extend-9.0.0.swidtag|the UserData path of the PortalServer_root/swidtag directory|
    |HCL Portal Enable Version 9.0|ibm.com\_IBM\_HCL Portal and HCL Web Content Manager\_Enable-9.0.0.swidtag|the UserData path of the PortalServer_root/swidtag directory|
    |HCL Portal Server Version 9.0|ibm.com\_IBM\_HCL Portal and HCL Web Content Manager\_Server-9.0.0.swidtag|the UserData path of the PortalServer_root/swidtag directory|
    |HCL Web Content Manager Version 9.0|ibm.com\_IBM\_Web\_Content\_Manager-9.0.0.swidtag|the UserData path of the PortalServer_root/swidtag directory|
    |HCL Web Content Manager Standard Edition Version 9.0|ibm.com\_IBM\_Web\_Content\_Manager-9.0.0.swidtag|the UserData path of the PortalServer_root/swidtag directory|
    |HCL PortalVersion 9.0|ibm.com\_IBM\_HCL Portal and HCL Web Content Manager\_Express-9.0.0.swidtag|the UserData path of the PortalServer_root/swidtag directory|

    |Product offering / Component name|IBM Tivoli License Manager signature file|Signature file's directory path|
    |---------------------------------|-----------------------------------------|-------------------------------|
    |HCL Portal Extend Version 8.5|IBM\_HCL Portal and HCL Web Content Manager\_Extend.8.5.0.swtag|the UserData path of the PortalServer_root/properties/version directory|
    |HCL Portal Enable Version 8.5|IBM\_HCL Portal and HCL Web Content Manager\_Enable.8.5.0.swtag|the UserData path of the PortalServer_root/properties/version directory|
    |HCL Portal Server Version 8.5|IBM\_HCL Portal and HCL Web Content Manager\_Server.8.5.0.swtag|the UserData path of the PortalServer_root/properties/version directory|
    |HCL Web Content Manager Version 8.5|IBM\_Web\_Content\_Manager.8.5.0.swtag|the UserData path of the PortalServer_root/properties/version directory|
    |HCL Web Content Manager Standard Edition Version 8.5|IBM\_Web\_Content\_Manager.8.5.0.swtag|the UserData path of the PortalServer_root/properties/version directory|
    |HCL Portal Version 8.5|IBM\_HCL Portal and HCL Web Content Manager\_Express.8.5.0.swtag|the UserData path of the PortalServer_root/properties/version directory|

5.  Verify that the `itlm.product` file exists in the PortalServer_root/version directory.



