# Dialog Stack 

The Dialog Stack provides an overview of active and suspended dialogs. It allows for suspending, resuming, and canceling the dialogs.

The Dialog Stack displays the name of the current active dialog and the date and time when the dialog was started.

Consider for example, you are in a travel site and the screen flow is active. You are currently working on the Flight booking dialog. When you look at the Dialog Stack portlet, it would list the Flight booking dialog as active and the other dialogs in the travel site as suspended. For example, the Car booking and Hotel booking dialogs are listed as suspended.

The Dialog Stack also provides the option to return, suspend, or cancel the dialog. The functions of these options are as follows:

-   **Return**

    When the user clicks Return, they are redirected to the currently active step of the currently active dialog from the Dialog Stack display screen.

    For example, the user is redirected from the Dialog Stack portlet to the active Flight booking dialog.

-   **Suspend**

    When the user clicks Suspend, it causes the active dialog to be suspended. After the dialog is suspended, it is no longer displayed as active and appears under the list of suspended dialogs.

    **Note:** If the active dialog that is suspended is a dialog that is called by another dialog in a nested fashion, then the entire chain is suspended.

    For example, the Flight booking dialog is suspended and listed under the suspended dialogs. And if the Flight booking dialog is called by the Car booking dialog and is nested both the dialogs are suspended.

-   **Cancel**

    When the user clicks Cancel, the active dialog is canceled. The dialog is no longer available as active or suspended dialog and cannot be resumed.

    **Note:** If the active dialog that is canceled is a dialog that is called by another dialog in a nested fashion, the entire chain is canceled.

    For example, the Flight booking dialog is canceled and cannot be resumed. And if the Flight booking dialog is called by the Car booking dialog and is nested both the dialogs are canceled.

-   **Cancel Nested**

    This option is only available if enabled.

    When the user clicks Cancel Nested, the active dialog is canceled. But in contrast to the Cancel option, Cancel Nested option does not cause the entire chain of dependent dialogs to be canceled.

    For example, if the Flight booking dialog called the Car booking dialog and the Car booking dialog is active. When the user clicks Cancel both the Flight booking and Car booking dialogs are canceled. When the user clicks Cancel Nested only the Car booking dialog is canceled; then, a redirect to the Flight booking dialog would occur. As the Flight booking dialog is the step that was active, when it was exited to call the Car booking dialog.


After the section that displays the current active dialog, the Dialog Stack displays a list of previously suspended dialogs by their name and start date. Each of these suspended dialogs can be canceled or resumed. When the user clicks Resume for the suspended dialog becomes active again.

**Note:** If another dialog is already active when the suspended dialog is resumed, the already active dialog is implicitly suspended.

-   **[Configuration options for Dialog Stack](../screenflow/dlg_stck_cfg_opt.md)**  
Various configuration options are available for dialog stack. Two menus on the Dialog Stack provide the user with options to influence how dialogs are displayed.

**Parent topic:**[User interface components](../screenflow/ui_compnts.md)

