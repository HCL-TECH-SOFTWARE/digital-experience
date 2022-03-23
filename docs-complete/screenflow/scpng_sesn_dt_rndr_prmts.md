# Scoping session data and render parameters

The appearance of portlets heavily relies on the portlet session data and the render parameters. To better support the semi-parallel processing of dialogs, the portlet session data and the render parameters are stored in a scoped fashion.

Storing the portlet session data and the render parameters in a scoped fashion avoids the active dialog from influencing the other dialogs. It also ensures that when the dialogs are resumed they appear exactly the way they appeared when they were suspended.

The data from an active dialog is stored in a different partition than the data that is stored when another dialog is active. Thus the data that is stored by one dialog cannot influence another dialog.

For example, in a travel site, when you start a Flight booking dialog D1, a partition p1 is created. When the Flight booking dialog D1 remains active, all portlet session data and render parameters of the dialog D1 are stored in partition p1. The partition p1 is not accessible or visible to any other partition. When the Flight booking dialog D1 is suspended, the partition P1 and all the data that is stored is also suspended.

When another dialog, a Car booking dialog D2 starts, another partition P2 is created. And when the Car booking dialog D2 remains active all data from dialog D2 is stored in partition P2. When the suspended Flight booking dialog D1 resumes, P1 resumes as well. This action ensures that when the Flight booking dialog D1 is active data is read from and written to P1 and when the Car booking dialog D2 remains active all data is read and written to P2. The partitions are deleted as soon as the dialog they belong to is canceled or ends.

**Note:** In the context of dialog nesting, a separate partition is created for any nested dialog. In other words, dialogs that call other dialogs read data from and write data to different partitions. This action ensures that the same portlets can be used as part of dialogs that call each other in a nested fashion without causing undesired interferences.

**Parent topic:**[Advanced concepts](../screenflow/adv_cncpts.md)

