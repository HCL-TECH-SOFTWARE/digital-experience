# Domino server installation and server setup reference 

View a roadmap to instructions for installation and first set up of an IBM Domino server, including installation of the Domino Administrator client software that you can use to administer the server.

## About Domino® servers

A Domino server has several purposes in an HCL Digital Experience site. It can be a Domino Directory \(LDAP\) user registry server, a messaging/application server housing source data for Domino-based portlets. Or it can be a prerequisite server on an HCL Sametime server.

Because HCL Portal is compatible with many releases of Domino server software, this topic contains no step-by-step procedures for installation. Instead, you can access the following links to locate the correct procedure for your platform and for the release of Domino you intend to install. Documentation for specific releases and platforms is available over the Internet on the HCL Software website, for download and browsing.For information about the releases of Domino supported for use with HCL Portal, see the detailed system requirements.For information about the releases of Domino supported for use with HCL Portal, see the detailed system requirements.

The installation documentation covers the following basic tasks to complete a Domino server installation:

-   Install the Domino server software.
-   Run the Domino Server Set up program \(with a wizard\).
-   Install the Domino Administrator client software. You can use this software for important tasks on the server.

    **Tip:** You can also want to install the Notes Client and Notes Designer clients for email and application development tasks.

-   Set up the Domino Administrator client software \(with a wizard\).
-   If this server is the first Domino server in your portal site, register ids for subsequent servers.

**Usage restrictions**: You are authorized to install and use Domino Directory solely and exclusively in connection with your use of HCL Sametime. Consult the product license for details.

## Where to find installation procedures

The IBM Lotus Documentation website lists all documentation for all releases of Domino.

The following table lists installation documentation pieces for the Domino 8.5.2 release. The documentation website is subject to change, so if any of these pieces are unavailable, check the Domino product pages for updates for your platform.

|Platform|Documentation|Important topics|Comments|
|--------|-------------|----------------|--------|
|Windows™|[Lotus Domino 8 Administrator Help](https://help.hcltechsw.com/caa/1.0.1/topics/appacc_dom_reqs_r.html)

|Under *Installation*, *Server installation*, *Installing Domino on Windows systems*, and *The Domino Server Set up program*.|You can either view this documentation online or download a file.|
|AIX®SolarisLinux™|[Lotus Domino 8 Administrator Help](https://help.hcltechsw.com/caa/1.0.1/topics/appacc_dom_reqs_r.html)

|Under *Installation*, *Server installation*, *Installing Domino on UNIX systems*, *Installing Domino on Linux on zSeries systems*, and *The Domino Server Set up program*.|You can either view this documentation online or download a file.|
|IBM® i|[Installing and Managing Domino 8 for System i](https://help.hcltechsw.com/caa/1.0.1/topics/appacc_dom_reqs_r.html)|*Chapter 3 - Installing Domino on your system*, *Chapter 6 - Setting Up a First Domino Server*, and *Chapter 8 - Setting Up an Additional Domino Server*.|You can either view this documentation online or download a file.|
|z/OS®|[IBM Lotus Domino 8 for z/OS Installation Guide](https://help.hcltechsw.com/caa/1.0.1/topics/appacc_dom_reqs_r.html)|In Chapter 2 - *Running the Install program*, and in Chapter 3 - *Running the Domino Server Set up program*.|You can either view this documentation online or download a file.|

## Critical choices for Domino in a portal site

The following table lists choices common to Domino installation on most or all platforms, with recommendations for use of Domino with the portal. Because specific installation steps differ between platforms, the descriptions of the choices are general. Do not expect to see the exact wording of the choice when installing for your platform and release. The options highlighted in this table are a subset of all choices you make during installation; in general, if not specified, accept default options.

Before installation, see the topic on planning for collaborative servers and portlets, which describes common types of collaborative portal sites, and includes considerations for platform, user directories, security, and performance.

**Tip:** Be sure to keep a record of all names and passwords you specify, and all directories where the installation programs installation software.

|Procedure|Decision point|Recommendations|
|---------|--------------|---------------|
|Domino Server Set up program|First server versus additional server|Your Domino LDAP server must be a first server, and messaging/application servers or underlying Domino servers for Sametime are additional.|
|Domino Server Set up program|Organization name and certifier|See [Planning names for servers and users in a Domino site](i_domi_c_identities.md). Use the certifier id you create on the first Domino server to register subsequent Domino servers in the portal site.|
|Domino Server Set up program|Administrator name|See [Planning names for servers and users in a Domino site](i_domi_c_identities.md).|
|Domino Server Set up program|Services \(servers\)|Enable HTTP \(or web browsers\) and DIIOP on all Domino servers in your site, and LDAP on the Domino LDAP server. The DIIOP service can be with a Customize option in the server setup program.|
|Domino Administrator client software setup \(wizard\)|Administrator name|Use the same name you did for Domino server setup. See [Planning names for servers and users in a Domino site](i_domi_c_identities.md).|

After you install and set up the first Domino server in your site, you must create certifier IDs to register subsequent Domino servers. For information, see the Lotus Domino 8 Administrator Help topic on server registration.

**Related information**  


[IBM Publication Center - IBM Lotus Domino 7.0.2 Release Notes](https://www-01.ibm.com/common/ssi/rep_ca/3/897/ENUS206-233/index.html)

[Lotus Domino Administrator Help, Server registration](https://help.hcltechsw.com/domino/10.0.1/admin/inst_dominoserverregistration_c.html)

