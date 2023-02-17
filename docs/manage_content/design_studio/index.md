# Disabling HCL Design Studio

When you update to CF210 and later releases, the Design Studio feature has been removed. If you enabled this on a prior release, you will need to take the following steps.

1. Connect to the dx-deployment-core pod.
2. Run the following command.
        -   `/opt/HCL/wp_profile/ConfigEngine/ConfigEngine.sh disable-content-sites -DPortalAdminPwd=``password -DWasPassword=password`



