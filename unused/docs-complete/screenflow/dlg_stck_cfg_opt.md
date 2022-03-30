# Configuration options for Dialog Stack

Various configuration options are available for dialog stack. Two menus on the Dialog Stack provide the user with options to influence how dialogs are displayed.

Consider the following example to better understand the configuration options available to you.

Assume a travel site with the following dialogs,

-   Flight booking \(dialog D1\) consists of the following steps Passenger information\(p1\), Calendar\(p2\), and Destination\(p3\).
-   Car booking\(dialog D2\) consists of the following steps Renters information \(p4\), Calendar \(p5\), and Vehicle type \(p6\).

The following are the available configuration options:

-   **Display Initiating Screen Flow**

    When the user deals with only a single dialog and there is no nesting, the name of the dialog is displayed. For example, when the user works with the Flight booking dialog and the other dialogs are not nested, the name of the Flight booking dialog is displayed.

    To understand how things work in a scenario where dialogs call other dialogs, consider the following example:

    Assume that The Flight booking dialog D1 usually calls the Car booking dialog D2 from within the Calendar \(p2\) step and when the user returns from the Car booking dialog D2 to the Flight booking dialog D1 they usually end up in the Destination \(p3\) step. With the Display Initiating Screen Flow option, the Dialog Stack displays the dialogs as follows:

      
     When in steps Passenger information\(p1\), Calendar\(p2\), Renters information \(p4\), Calendar \(p5\), and Vehicle type \(p6\), and Destination\(p3\), the Flight booking dialog D1 is displayed.  
    

-   **Display Current Screen Flow**

    When the user deals with only a single dialog and there is no nesting, the name of the dialog is displayed. For example, when the user works with the Flight booking dialog and the other dialogs are not nested, the name of the Flight booking dialog is displayed.

    In the example scenario where dialogs call other dialogs, with the Display Current Screen Flow option the dialog stack portlet displays the dialogs as follows:

      
     When in steps Passenger information\(p1\), Calendar\(p2\), Renters information \(p4\), Calendar \(p5\), and Vehicle type \(p6\), and Destination\(p3\), the Flight booking dialog D1 is displayed.  
    

-   **Display All Steps in Breadcrumb**

    When the user deals with only a single dialog and there is no nesting, the name of the dialog is displayed. For example, when the user works with the Flight booking dialog and the other dialogs are not nested, the name of the Flight booking dialog is displayed.

    In the example scenario where dialogs call other dialogs, with the Display All Steps in Breadcrumb option the Dialog Stack displays the dialogs as follows:

      
     When in steps Passenger information\(p1\), and Calendar\(p2\), the Flight booking dialog  D1 is displayed.  
     When in step Renters information \(p4\), Flight booking D1 → Car booking D2 is displayed.  
     When in steps Calendar \(p5\),and Vehicle type \(p6\), Flight booking D1 → Car booking D2 is displayed.  
     When in step Destination\(p3\), the Flight booking dialog  D1 is displayed.  
    


**Parent topic:**[Dialog Stack ](../screenflow/dlg_stck.md)

