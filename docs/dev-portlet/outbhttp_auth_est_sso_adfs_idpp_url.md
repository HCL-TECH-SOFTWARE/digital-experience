# Finding the Identity Provider login URL and the Partner URL \(ADFS\) 

To establish a single sign-on \(SSO\) connection through Active Directory Federation Services \(ADFS\), you must specify the Identity Provider login URL and the Partner URL. Learn how to find these values from the ADFS configuration if you do not already know them. If you know these values already, skip this step.

The following steps describe how to obtain the Identity Provider target URL to directly initiate an IDP login flow on ADFS to a specific partner.

1.  Open the ADFS Management on the ADFS server.

2.  Go to **Relying Party Trusts** and select the target partner.

3.  Click **Properties...**

4.  Click the **Identifiers** tab and copy the **Relying party identifier**.

5.  Using a browser, log in to the web interface of the ADFS server that is provided by Internet Information Services \(IIS\).

    For example, go to the following URL: https://<host\>:<port\>/adfs/ls/IdpInitiatedSignOn.aspx?loginToRp=<partnerUrl\>, where <partnerUrl\> is the value of the **Relying party identifier** that you copied in the previous step.


The federation flow starts automatically after you log in to the IIS-provided web interface of the ADFS server.

**Parent topic:**[Configuration settings for Active Directory Federation Services \(ADFS\) ](../dev-portlet/outbhttp_auth_est_sso_adfs.md)

