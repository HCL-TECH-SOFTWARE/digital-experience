# Dialog State Display

The Dialog State Display \(DSD\) displays a dialogs current state. You can move forward and backward or to jump to a dedicated step that was processed before. It is a generic navigation component that can be easily added to any page that participates in a dialog.

Dialog State Display functions

The Dialog State Display Portlet displays the particular dialogs breadcrumb trail. For example, in a travel booking screen flow the dialog routes a user from a step to the other steps. For example, from a step that is called Flight Booking to steps called Hotel Booking, Car Booking, Insurance Booking, and Travel Summary. The currently active step is displayed in bold.

The Backward and Forward buttons trigger the following actions:

-   **Backward**

    Clicking Backward redirects the user to the step that was active before the currently active one. To be more precise, it redirects to the step from which the currently active one was initially called. For example, if the Car booking dialog is currently active and was called from the Flight booking dialog, clicking Backward takes the user to Flight booking dialog which was previously active and called the Car booking dialog.

-   **Forward**

    Clicking Forward redirects the user to the step that was active after the currently active one. To be more precise, it redirects to the step to which the currently active one redirected to last time. For example, the user goes from Car booking dialog to the Hotel booking dialog and returns to the Car booking dialog, which is currently active. Clicking Forward takes the user to the Hotel booking dialog.


Already processed steps can also be clicked to directly jump to them.

-   **[Configuration options for Dialog State Display](../screenflow/dlg_st_dsply_cfg_opt.md)**  
Various configuration options are available for Dialog State Display.

**Parent topic:**[User interface components](../screenflow/ui_compnts.md)

