# Configuring user session persistence

With the persistent session state feature, portal users can resume and continue a previously interrupted working session at the same state where they ended the session. When the user logs out or the session times out, the portal stores the current navigational state into the database. As a portal administrator, you can give users the option to resume the navigational state of their last session when they log in again. When the user chooses to resume the last session, the navigational state that is stored previously is restored, and the user can continue working where the user stopped before.

Example: A user logs in and maximizes some portlets. Afterwards the user logs out. When the user logs in again, all of the previously maximized portlets are still maximized.


???+ info "Related information" 
    -   [Setting the portal entry page](../../config_portal_behavior/adloginview.md)

