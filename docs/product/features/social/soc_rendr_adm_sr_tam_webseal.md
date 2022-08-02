# Using Social Rendering with Tivoli Access Manager and WebSEAL

After you enable social rendering, your HCL Digital Experience acts as a client that sends HTTP requests to the HCL Connections server. If you use IBM Security Access Manager and WebSEAL to manage the access to your portal and HCL Connections server, configure the portal so that it does not encode the WebSEAL session cookies.

If you do not configure your portal as described here, the social rendering portlets do not show any results. Examples of such portlets are List of Blog Posts, List of Files, List of Forum Topics.

1.  On a stand-alone portal, log in to the WebSphere® Integrated Solutions Console. On a portal cluster, log in to the WebSphere Integrated Solutions Console on the Deployment Manager.

2.  Go to **Resources** \> **Resource Environment** \> **Resource Environment Providers.**.

3.  Select **WP ConfigService**.

4.  Under the Additional Properties heading, select **Custom Properties**.

5.  Create or edit the property `cookie.escaping.ignore` and specify the value according to your WebSEAL configuration.

    The value of this property is a regular expression. It must match the name of the cookie that you do NOT want to be escaped.

    For example, if the WebSEAL session cookies have the names `PD-H-SESSION-ID` and `PD-S-SESSION-ID`, specify the value `PD-H-SESSION-ID|PD-S-SESSION-ID`.

6.  For the changes to take effect, restart the portal server.


You can now use the social rendering portlets.

**Parent topic:**[Administering social lists](../social/soc_rendr_adm_socl_list.md)

**Related information**  


[Security Access Manager](../security/conf_tam.md)

