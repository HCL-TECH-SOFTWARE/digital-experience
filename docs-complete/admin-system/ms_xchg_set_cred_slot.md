# Setting the credential slot for the Microsoft Exchange 2010 portlet application 

For users to be able to use the portlet application for Microsoft Exchange 2010 in HCL Portal, administrators must set up a vault slot for the portlets to use.

1.  Go to the Credential Vault administration portlet.

2.  Create a slot for use by the HCL portlet application for Microsoft Exchange 2010. This slot might not be a shared system credential.

3.  Configure each portlet in the web module by placing the portlets on a page and click the configure icon.

    The configuration window shows a list of possible credential vault slots that you can use.

    **Note:** The **Configure** icon is only available to users who have Manage permission for the portlet.

4.  Select the vault slot that you created for the Microsoft Exchange 2010 portlet application.

5.  Click **OK**.

6.  Repeat these steps for each portlet.

    If you select the same slot for each portlet, the users have the same credentials for each portlet.


**Parent topic:**[Emailing with the Microsoft Exchange 2010 portlet application ](../admin-system/ms_xchg_2010_p_app.md)

