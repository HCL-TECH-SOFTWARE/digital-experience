# Preparing an Active Directory-Lightweight-Directory-Services on Windows

To use Active Directory-Lightweight-Directory-Services as an LDAP user registry, install and set up the server to communicate with your HCL Portal system.

1.  Download and install Active Directory Application Mode. Visit the product documentation for more information.

    -   Documentation resource: [Active Directory Application Mode Overview](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/hh831593(v=ws.11))
    -   Documentation resource: [Active Directory Lightweight Directory Services \(ADLDS\) Management Pack](https://www.microsoft.com/en-us/download/details.aspx?id=1451)
2.  Complete the following steps as a guide to create the HCL Portal administrative user.

    1.  Create a user with the Windows administrative tools.

        **Note:** There is a 20 character limitation for the user account name.

    2.  Set the password for the new user.

    3.  Activate the new user with the Windows administrative tools. Set the msDS-UserAccountDisabled attribute to false.


**Parent topic:**[Preparing the user registry software](../config/prereq_user_reg.md)

