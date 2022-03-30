# Configuring user session persistence 

With the persistent session state feature, portal users can resume and continue a previously interrupted working session at the same state where they ended the session. When the user logs out or the session times out, the portal stores the current navigational state into the database. As a portal administrator, you can give users the option to resume the navigational state of their last session when they log in again. When the user chooses to resume the last session, the navigational state that is stored previously is restored, and the user can continue working where the user stopped before.

Example: A user logs in and maximizes some portlets. Afterwards the user logs out. When the user logs in again, all of the previously maximized portlets are still maximized.

-   **[Session settings stored by the portal ](../admin-system/adcfgpss_set_str_ptl.md)**  
After a user logs out or the session times out, the portal stores the complete navigational state into the database.
-   **[User option during login ](../admin-system/adcfgpss_usr_opt.md)**  
Depending on the configuration defined by the administrator, the user can choose whether to resume the last session or not.
-   **[How administrators define persistent session options ](../admin-system/adcfgpss_adm_define.md)**  
As an administrator, you can configure the persistent session behavior.

**Parent topic:**[Configuring portal behavior ](../admin-system/adptlcfg.md)

**Related information**  


[Setting the portal entry page ](../admin-system/adloginview.md)

