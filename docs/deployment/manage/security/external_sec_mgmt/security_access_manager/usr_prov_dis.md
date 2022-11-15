# Disabling user provisioning

After you enable and use the user provisioning feature within IBM Security Access Manager, you can disable the feature.

Perform the following steps to disable user provisioning within Security Access Manager:

**Important:** Perform these steps on one portal node in a clustered environment.

1.  Run the following task to disable user provisioning:

    -   AIX® and Linux™: `./ConfigEngine.sh disable-tam-userprov -DWasPassword=password -Dwp.ac.impl.PDAdminPwd=password from the wp_profile_root/ConfigEngine directory.`
    -   Windows™: `ConfigEngine.bat disable-tam-userprov -DWasPassword=password -Dwp.ac.impl.PDAdminPwd=password from the wp_profile_root\ConfigEngine directory.`

    !!!note
        In a clustered environment WasPassword is the Deployment Manager administrative password.

2.  Stop and restart the appropriate servers to propagate the changes. For specific instructions, see [Starting and stopping servers, deployment managers, and node agents](../../../../../deployment/manage/stopstart.md).



