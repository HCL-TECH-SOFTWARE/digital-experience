# Preparing a Domino Directory server

If you plan to use a Domino Directory as an LDAP user registry, you must install and set up the server so that it communicates with HCL Digital Experience.

1.  Complete the following steps to install the Domino® Directory:

    1.  Go to [Domino documentation](https://help.hcltechsw.com/domino/welcome/index.html) for instructions on installing Domino Directory.

    2.  Select the appropriate version tab for your product.

    3.  Click the **Download/View online** link for the HCL Domino Information Center.

    4.  Click **Domino Administrator Help** \> **Installation** \> **Installing and setting up Domino servers** \> **Server installation** \> **Installing Domino** and complete this task.

    5.  Click **Domino Administrator Help** \> **Installation** \> **Installing and setting up Domino servers** \> **The Domino server setup program** and complete this task.

2.  Complete the following steps to install the Domino Directory:

    1.  Go to [Domino documentation](https://help.hcltechsw.com/domino/welcome/index.html).

    2.  Select the appropriate version tab for your product.

    3.  Click the **Download/View online** link for Installing and Managing Domino for System i.

    4.  Complete the tasks under **Chapter 3 Installing Domino on your system**.

    5.  Complete the tasks under **Chapter 6 Setting up a First Domino server**.

    6.  Complete the tasks under **Chapter 8 Setting up an Additional Domino server**.

3.  Complete the following steps as a guide to create the HCL administrative user:

    1.  Go to the **People** view of the Domino Directory and then click **Add Person**.

    2.  Enter the following values in the **New Person** form to create the LDAP bind user. The following example uses wpsbind to represent the LDAP bind user:

        -   ****Last Name****

            wpsbind

        -   ****User name****

            wpsbind/DominoDomain, where DominoDomain is your Domino® Internet domain.

            wpsbind

            **Note:** Make sure that you enter two values in the **User Name** field, where the first value includes the Domino® domain.

        -   ****Short name/UserID****

            wpsbind

        -   ****Internet password****

            wpsbind

    3.  Click **Save and Close** to save the new person record for wpsbind and return to the **People** view.

    4.  Click **Add Person** and enter the following values in the **New Person** form to create the Portal administration user. The following example uses wpsadmin to represent the Portal administration user:

        -   ****Last Name****

            wpsadmin, where wpsadmin is the user ID for the HCL Administrator.

        -   ****User name****

            wpsadmin/DominoDomain, where DominoDomain is your Domino® Internet domain.

            wpsadmin

            **Note:** Make sure that you enter two values in the **User Name** field, where the first value includes the Domino® domain.

        -   ****Short name/UserID****

            wpsadmin

        -   ****Internet password****

            wpsadmin

    5.  Click **Save and Close** to save the new person record for wpsadmin and return to the **People** view.

    6.  Go to the **Groups** view and click **Add Group**.

    7.  Enter the following values in the **New Group** form on the Basic tab:

        -   ****Group name****

            wpsadmins

            **Note:** If your Domino® LDAP shares a realm with another user registry, you must use the hierarchical naming convention for the group names. Enter wpsadmins/DominoDomain to avoid unexpected results during HCL Portal run time.

        -   ****Group type****

            Multi-purpose

        -   ****Members****

            wpsbind/DominoDomain

            wpsadmin/DominoDomain

            **Note:** You can add more administrator users.

    8.  Click **Save and Close** to save the wpsadmins group with the wpsbind and wpsadmin users as members.

4.  Complete the following steps to update the access control list for the Domino Directory:

    1.  Open the names.nsf file in the Domino Administrator or HCL Notes client.

    2.  Click **File** \> **Application** \> **Access Control** from the main menu to open the access control list for the file.

    3.  In the **Access Control List** \> **Basics** panel, ensure that the wpsadmins group has either Author or Editor access.

    4.  Add the following **Role Types** to the wpsadmins group:

        -   **GroupCreator**
        -   **GroupModifier**
        -   **UserCreator**
        -   **UserModifier**
    5.  Click **OK**.



**Related information**  


[Planning names for servers and users in a Domino site](../collab/i_domi_c_identities.md)

