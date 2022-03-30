# HCL Sametime server installation reference 

View a roadmap to instructions for installing an HCL Sametime server.

## About the Sametime server

A Sametime server is an IBM® Domino® server that has the Sametime server software installed and set up on it.

HCL Digital Experience is compatible with several releases of Sametime server software. Use the following links to locate the correct procedure for your platform and for the release of Sametime you intend to install. Documentation for specific releases and platforms is available on the HCL Software website for download and browsing. For information about the releases of Sametime supported for use with Digital Experience, see the *HCL Digital Experience detailed system requirements.*

The installation documentation covers the following basic tasks that you perform to complete a Sametime server before you begin to integrate it with your site:

-   Install and set up the prerequisite underlying Domino server and its Domino Administrator client software.
-   Install the Sametime server software.
-   Set up the Sametime server software using a browser on the server home page.

**Usage restrictions:** You are authorized to install and use Domino Directory solely and exclusively with your use of Sametime. Consult the product license for details.

## Where to find installation procedures

The IBM Lotus Documentation website lists all documentation for all releases of Sametime.

**z/OS only:** There is no release of Sametime that runs on a z/OS machine. You can use a Sametime server on another platform as part of your z/OS site. Check the [HCL Sametime documentation](https://help.hcltechsw.com/sametime/welcome/index.html) page on the Lotus developerWorks site for the appropriate installation documentation for whatever platform you decide to use for your Sametime server.

|Platform|V8|V8.5|V9|
|--------|--|----|--|
|Windows™ AIX® HP-UX Linux™ Solaris|In the *HCL Sametime 8 documentation,* see [Installing a Sametime server on Windows, AIX, Linux, or Solaris.](https://www.hcltechsw.com/products/sametime)|In the *HCL Sametime 8.5 documentation,* see [Installing on AIX, Linux, Solaris, and Windows.](https://www.hcltechsw.com/products/sametime)|In the *HCL Sametime 9 documentation*, see the [Deploying](https://www.hcltechsw.com/products/sametime) section.**Note:** Refer to the topics available in *Deploying instant messaging*. Details for each specific platform are available for each server installation option.

|
|IBM i|In the *HCL Sametime 8 documentation,* see [Installing Sametime server on i5/OS.](https://www.hcltechsw.com/products/sametime)|In the *HCL Sametime 8.5 documentation,* see [Installing on IBM i.](https://www.hcltechsw.com/products/sametime)|In the *HCL Sametime 9 documentation*, see the [Deploying](https://www.hcltechsw.com/products/sametime) section.**Note:** Refer to the topics available in *Deploying instant messaging*. Details for each specific platform are available for each server installation option.

|

To install a Sametime proxy server, see *Installing a Sametime Proxy Server* in the Sametime documentation.

## Critical choices for Sametime V8 in a HCL Portal site

The following table lists choices common to Sametime installation on most or all platforms, with recommendations for use of Sametime with HCL Portal. Because specific installation steps differ between platforms, the descriptions of the choices are general. Do not expect to see the exact wording of the choice when installing for your platform and release. The options that are highlighted in this table are a subset of all choices you make during installation; in general, if not specified, accept default options.

In addition, before installation, see the topic on planning for collaborative servers and portlets, which describes several common types of collaborative sites, and includes considerations that are related to platform, user directories, security, and performance.

**Tip:** Be sure to keep a record of all names and passwords you specify, and all directories where the installation programs installation software.

|Procedure|Decision point|Recommendations|
|---------|--------------|---------------|
|Sametime server software installation|**Setting up the Directory Type** dialog box

 You can choose Domino Directory \(this selection is known as native\) or an LDAP server \(which can be either a separate Domino LDAP server or other non-Domino LDAP server\) as the repository for user authentication and management.

|The people awareness features and the authentication features behave differently, depending on the directory you choose.

 -   If you select Domino Directory, people awareness can display names in both the common name format and hierarchical name format. Configuring Sametime to use the native Domino Directory allows the most flexibility for people awareness. By default, Sametime searches the native Domino Directory first for user names.
-   If you choose an LDAP server, Sametime installs a Directory Assistance database \(`da.nsf`\). If directory assistance is used, multiple LDAP directories can be searched after Sametime queries the native Domino Directory. In addition, because Sametime searches the native Domino Directory first and external LDAP servers second, the Domino Directory on the Sametime server should contain only users that are for administering Sametime, not HCL Portal users.

The Directory Assistance feature is useful in environments where the same users are not listed in both the LDAP directory and Domino Directory.


|
| |**Sametime 7.0 Server Connectivity** dialog box

 - **Allow HTTP Tunneling on a Sametime server with a single IP address**|If your site uses IBM Directory Server, another reverse proxy, or a load balancer, you might need to enable this option for Sametime.For more information, see [Security and authentication considerations.](plan_authsec.md)|
| |Multi-server single sign-on authentication|The Sametime installation program automatically enables this setting.|

HCL Sametime 8.5 requires the use of an LDAP directory for user authentication.

**Parent topic:**[Integrating with HCL Sametime ](../collab/i_domi_t_sv_st_cfg_intro.md)

**Next topic:**[Configuring HCL Sametime Proxy ](../collab/cfg_st_single_ldap.md)

**Related information**  


[HCL Sametime Product Page](https://www.hcltechsw.com/products/sametime)

[Installing a Sametime Proxy Server](https://help.hcltechsw.com/sametime/10.0/install/inst_prox.html)

