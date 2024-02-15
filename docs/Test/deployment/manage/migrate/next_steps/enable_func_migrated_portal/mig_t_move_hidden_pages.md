# Moving hidden pages

Portal scripts create hidden pages that can clutter the page topology, making it difficult for users to find the page they want, and also slow down portal performance. To clean up the page topology and ensure faster runtime performance, administrators can move these hidden pages to a different location after you complete the migration to HCL Digital Experience 8.5.

1.  Go to wp_profile_root/ConfigEngine.

2.  Run the following command:

    -   AIX® and Linux™: `./ConfigEngine.sh move-portal-hidden-pages -DWasPassword=was_password -DPortalAdminPwd=portal_password`

    -   Windows™: `ConfigEngine.bat move-portal-hidden-pages -DWasPassword=was_password -DPortalAdminPwd=portal_password`



