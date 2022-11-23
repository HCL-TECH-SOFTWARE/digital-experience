# Preparing your Windows OS

Prepare the operating system to ensure a successful HCL Digital Experience installation.

## Procedure

1.  Check that the system login user ID you plan to use during installation has the following permissions and rights:

    -   The user ID must exist before the installation.
    -   The user ID must belong to the Windows™ local Administrators group.

2.  Determine whether a user account is a member of the Administrators group:

    1.  Click **Start > Programs* > Administrative Tools > Computer Management**.

    2.  Expand **Local Users and Groups** and select **Groups**.

    3.  Open the **Administrators** group to see what members belong to it.

    4.  Add the user to the Administrators group if necessary.

3.  Consider the following recommendations when you install to avoid excessively long path names:

    !!!note
        If you exceed the 259 maximum character length, you might receive one of the following error messages during configuration or in the IBM® Installation Manager log files:
        -   The input line is too long.
        -   The syntax of the command is incorrect.
        -   The file name is too long.

    1.  Use a short installation path.

        For example, use C:\\WebSphere instead of C:\\Program Files\IBM\WebSphere

    2.  Specify node names; do not use names longer than 5 characters.

        For example, you might use `node1` instead of `longnodename01`.

    3.  Name WAR files with fewer than 21 characters. If necessary, modify the file name before you install.

4.  Configure the Windows operating system to generate full core dumps.

    1.  Backup the Windows registry by following the steps in [How to back up and restore the registry in Windows](http://support.microsoft.com/kb/322756/).
    2.  Edit the Windows registry and create the following key: `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\Windows Error Reporting\LocalDumps`.
    3.  Create a new `DWORD` and name it DumpType. Set the value to 2 (Decimal) then exit.


