---
id: utl_cfg_sso_ltpa
title: Configuring SSO and LTPA keys
---
import useBaseUrl from '@docusaurus/useBaseUrl';



Configure the single sign-on \(SSO\) and LTPA keys between the HCL Digital Experience and Forms Experience Builder servers. When the user is authenticated in portal, it is not necessary to log in again to access the backend servers. For example, when a Form is retrieved from the Forms Experience Builder server and rendered on a portal page.

Complete the following steps on both the HCL Portal and Forms Experience Builder servers.

1.  Log in to the WebSphere® Integrated Solutions Console.

2.  Go to **Security** \> **Global security** \> **Authentication** \> **LTPA**.

3.  Configure the **Cross-Cell single sign-on** from or to the HCL Portal and Forms Experience Builder servers. Then, click either **Imports keys** or **Export keys**.

4.  Go to **Security** \> **Global security** \> **Authentication** \> **Web and SIP security** \> **Single sign-on \(SSO\)**.

5.  Enable SSO and configure the **Domain** name.

6.  Apply and save the configuration.

7.  Restart the HCL Portal and Forms Experience Builder servers.


