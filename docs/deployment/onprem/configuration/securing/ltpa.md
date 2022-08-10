# Securing LTPA keys on a production environment

The Lightweight Third Party Authentication \(LTPA\) key holds cryptographic keys that secure the user authentication session and cookies. To secure the production server environment, regenerate the LTPA key using the WebSphere Integrated Solutions Console. If you plan to enable single sign-on at a later time, you must first disable the automatic key generation.

Complete the following steps to secure LTPA keys on a production environment:

1.  Complete the following steps to regenerate the LTPA keys:

    **Note:** These steps only need to be completed once in a clustered environment.

    1.  Log on to the WebSphere® Integrated Solutions Console.

    2.  Navigate to **Security** \> **Secure administration, applications, and infrastructure**.

    3.  Click **Authentication mechanisms and expiration**.

    4.  Click **NodeLTPAKeySetGroup** under Key Generation and then click **Generate Keys**.

    5.  Click **Save** to save the changes to the master configuration.

    **Restriction:** By default, WebSphere Application Server is configured to automatically regenerate the LTPA keys every 90 days. If you setup single sign-on to export the LTPA key and then import it on another server, disable the automatic key generation; otherwise, single sign-on fails after 90 or 180 days because of regenerated keys.

2.  Complete the following steps to disable automatic LTPA key generation on all servers of the single sign-on domain:

    1.  Log on to the WebSphere Integrated Solutions Console.

    2.  Navigate to **Security** \> **Secure administration, applications, and infrastructure**.

    3.  Click **Authentication mechanisms and expiration**.

    4.  Click **Key generation - Key set groups**.

    5.  Click **NodeLTPAKeySetGroup**.

    6.  Disable the **Key generation - Automatically generate keys** checkbox.

    7.  Click **OK**.

    8.  Click **Save** to save the changes to the master configuration.


**Parent topic:**[Securing](../security/securing_wp.md)

