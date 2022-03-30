# Configuration options for Dialog State Display

Various configuration options are available for Dialog State Display.

Consider the following example to better understand the configuration options available to you.

Assume a travel site with the following dialogs,

-   Flight booking \(dialog D1\) consists of the following steps Passenger information\(p1\), Calendar\(p2\), Destination\(p3\), Route \(p4\) and Airlines \(p5\).
-   Car booking\(dialog D2\) consists of the following steps Renters information \(p10\), Calendar \(p11\), and Vehicle type \(p12\).
-   Hotel booking \(dialog D3\) consists of the following steps Customer information \(p20\), Calendar \(p21\), and Room type \(p22\).
-   Billing \(dialog D4\) consists of the following steps Account information \(p30\), Shopping cart \(p31\), and Check out \(p32\).

## Previous Steps display preferences

You can influence how previous steps processed before the currently active step are displayed from the uppermost menu. The following are the available configuration options:

-   **Display All Steps**

    All steps that are processed before the currently active step, are displayed without omitting one or more of them.

    From the example, assume that the Destination \(p3\) step from the Flight booking dialog D1 is the active step. With this option selected the following steps are displayed.

    ```
    Passenger infromation → Calendar → **Destination**
    ```

-   **Display Custom Number of Steps**

    Displays the exact number of n steps that was processed most recently before the currently active step.

    From the example, assume that the Destination \(p3\) step from the Flight booking dialog D1 is the active step . With this option selected and with n set to 1, the following steps are displayed.

    ```
    Calendar → **Destination**
    ```


## Next Steps display preferences

You can also influence how the steps that are to be processed after the currently active step are displayed from the second menu. The following are the available configuration options:

-   **Display All Steps**

    All steps even those steps that are found on branches that can potentially be processed after the currently active step are being displayed without omitting one or more of them.

    From the example,   
     Assume that the Car booking dialog D2 is called from the Flight booking dialog D1's Calendar \(p2\) step.  
     Assume that the Hotel booking dialog D3 and the Billing dialog D4 are called from the Flight booking dialog D1's Destination \(p3\) step.  
     Assume that when you return from the Car booking D2, Hotel booking D3,and the Billing D4 dialogs you usually end up in the Flight booking dialog Destination \(p3\) step.  
       
     Furthermore assume that you are currently in the active Passenger information\(p1\) and neglect what is set for controlling how to display the previous steps.  
     Then, with this option selected the following steps are displayed.  
       
    

    ```
    
    **Passenger information** → Calendar → Destination → Route → Airlines
                                                          Renters information → Calendar→Vehicle type
                                                               Customer information → Calendar → Room type
                                                               Account information → Shopping cart → Check out
    
    ```

-   **Display Custom Number of Steps**

    A definable number of steps even those steps that are on branches that can potentially be processed after the currently active step are being displayed.

    **Note:** The number of steps is counted independently for each single branch.

    With this option selected, two more configuration settings can be made:

    -   **Maximum Number of Steps per Branch. \(s\)**

        This setting limits the total number of steps to be determined and thus displayed as the potential next steps. For example, if set to 5, the dialog state display shows no more than 5 steps per branch that are determined and displayed as the potential next steps.

    -   **Maximum Number of Branches per Step. \(b\)**

        This setting limits the total number of branches to be displayed.

    For example, the behavior can be described as follows:

    -   With b set to unlimited and with s set to 1 the following steps would be displayed:

```
**Passenger information** → Calendar
```

        Reason: Passenger information \(p1\) is the active step. Potential next steps are Calendar \(p2\), Destination \(p3\), and so on. Following the path to Calendar \(p2\) costs one step \(Calendar \(p2\) itself\). Thus the Destination \(p3\) step that is also found on this branch cannot be displayed anymore as the value set for Maximum Number of Steps per Branch would be exceeded.

    -   With b set to unlimited and with s set to 2, the following steps are displayed

```

**Passenger information** → Calendar → Destination → Route → Airlines
                                                   Renters information → Calendar
                                                               Customer information → Calendar
                                                               Account information → Shopping cart
                                
```

        Reason: Passenger information \(p1\) is the active step. Potential next steps are Calendar \(p2\), Destination \(p3\), and so on. Following the path to Destination \(p3\) costs two steps Calendar\(p2\) and Destination \(p3\). The Destination \(p3\) step is a step that branches. Starting at Destination \(p3\) one can either be redirected to Route \(p4\) or to Renters information \(p10\). Following the path from Route \(p4\) to Airlines \(p5\) costs two steps Route \(p4\) and Airlines \(p5\). Thus these two steps can be displayed as it would not cause the value set for Maximum Number of Steps per Branch to be exceeded.

        Following the path from Renters information \(p10\) to Calendar \(p11\) costs two steps \(Renters information \(p10\) and Calendar \(p11\). Thus step Vehicle type \(p12\) also on this branch cannot be displayed anymore as it causes the value set for Maximum Number of Steps per Branch to be exceeded.

        Route \(p4\) is a step that branches. Starting at Route \(p4\) one can either be redirected to Customer information \(p20\) or to Account information \(p30\). Following the path from Customer information \(p20\) to Calendar \(p21\) costs two steps \(Customer information \(p20\) and Calendar \(p21\). Thus step Room type \(p22\) also on this branch cannot be displayed as it causes the value set for Maximum Number of Steps per Branch to be exceeded.

        Following the path from Account information \(p30\) to Shopping cart \(p31\) costs 2 steps \(Account information \(p30\) and Shopping cart \(p31\). Thus step Check out \(p32\) also on this branch cannot be displayed anymore as it causes the value set for Maximum Number of Steps per Branch to be exceeded.

    -   With b being set to 1 and with s being set to unlimited, the following steps are displayed.

        ```
        **Passenger information** → Calendar → Destination 
        ```

        Reason: Passenger information \(p1\) is the active step. Potential next steps are Calendar \(p2\), Destination \(p3\) and so on. Destination \(p3\) is a step that branches. Starting at Destination \(p3\) one can either be redirected to Route \(p4\) or to Renters information \(p10\).Thus the number of branches that start from here is two, which does cause the value set for Maximum Number of Branches per Step to be exceeded. Thus the branches that start from Destination \(p3\) cannot be displayed anymore.

    -   With b being set to 2 and with s being set to unlimited, the following steps are displayed.

        ```
        
        **Passenger information** → Calendar → Destination → Route
                                                              Renters information → Calendar → Vehicle type
                                                                       
                                        
        ```

        Reason: Passenger information \(p1\) is the active step. Potential next steps are Calendar \(p2\), Destination \(p3\) , and so on. The step Destination \(p3\) is a step that branches. Starting at Destination \(p3\) one can either be redirected to Route \(p4\) or to Renters information \(p10\). Thus the number of branches that start from here is two, which does not cause the value set for Maximum Number of Branches per Step to be exceeded. Thus the branches that start from Destination \(p3\) can be displayed.

        Route \(p4\) is a step that branches, too. Starting at Route \(p4\) one can either be redirected to Airlines \(p5\), Customer information \(p20\), or Account information \(p30\). Thus the number of branches that start from here is 3, which does cause the value set for Maximum Number of Branches per Step to be exceeded. Thus the branches that start from Route \(p4\) cannot be displayed anymore.

    -   With b being set to 3 and with s being set to unlimited, the following steps are displayed.

```

**Passenger information** → Calendar → Destination → Route → Airlines
                                                      Renters information → Calendar → Vehicle type
                                                               Customer information → Calendar → Room type
                                                               Account information → Shopping cart → Check out

```

        Reason: Passenger information \(p1\) is the active step. Potential next steps are Calendar \(p2\), Destination \(p3\) and so on. The step Destination \(p3\) is a step that branches. Starting at Destination \(p3\) one can either be redirected to Route \(p4\) or to Renters information \(p10\).Thus the number of branches that start from here is two, which does not cause the value set for Maximum Number of Branches per Step to be exceeded. Thus the branches that start from Destination \(p3\) can be displayed.

        Route \(p4\) is a step that branches, too. Starting at Route \(p4\) one can either be redirected to Airlines \(p5\), Customer information \(p20\), or Account information \(p30\). Thus the number of branches that start from here is 3, which does not cause the value set for Maximum Number of Branches per Step to be exceeded. Thus the branches that start from Route \(p4\) can be displayed.


## Nested Dialog Display Preference

With the Nested Dialog Display Preference option, you can control how a nested non-active dialog is displayed. The following options are provided:

-   **Display Nested Dialog Steps in Breadcrumb**

    With this option selected the single steps part of a nested dialog are represented as they are. They are not replaced by a single node that represents an entire nested dialog and all of its steps. For example, the following steps are displayed.

    ```
    
    **Passenger information** → Calendar → Destination → Route → Airlines
                                                          Renters information → Calendar → Vehicle type
                                                                   Customer information → Calendar → Room type
                                                                   Account information → Shopping cart → Check out
    
    ```

-   **Display Nested Dialog as Single Step**

    With this option selected the single steps part of a nested dialog are represented by a single placeholder node. This single node is supposed to represent an entire nested dialog and all of its steps. For example, the following steps are displayed.

    ```
    
    **Passenger information** → Calendar → Destination → Route → Airlines
                                                          Car booking 
                                                                   Hotel booking
                                                                   Billing
    
    ```


## Buttons to Display preference

With the check box underneath the label Buttons to Display, you can control whether extra Suspend and or Cancel buttons are to be displayed. These buttons provide the option to cancel and suspend the current dialog the same way as in Dialog Stack.

**Note:** Though Dialog State Display can be used in a production scenario, it has more or less the character of a sample implementation. Depending on various factors such as the complexity of your dialogs, page design and layout, different visualizations or implementations might better satisfy your needs. Therefore, you can create your own custom, DSD implementation based on the APIs tailored to your requirements.

**Parent topic:**[Dialog State Display](../screenflow/dlg_st_dsply.md)

