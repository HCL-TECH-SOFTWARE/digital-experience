# Base Portal Tuning

The cluster tunings start with the tuning mentioned in the Base Portal Tuning section. If a value is specified
here as well as in the base Portal tuning section, use the values specified in the cluster tuning section.

The following settings are the same as the base Portal and are listed in the base Portal tunings, but make
sure they are set for all cluster members. They are mentioned here as a reminder that they need to be set
on all cluster members.
    - See the VMM Tuning section for how to edit `wimconfig.xml`. This should be done on the Deployment manager and synchronized to all the nodes. On each cluster member this can be confirmed in `/usr/{portal_profile}/config/cells/{cellName}/wim/config`.
    - See the Reducing Redirects section on how to change the base Portal URL and how to edit `commonActions.jsp` on all cluster members. 
    - See the Shared Class Cache Size section for how to delete the shared class cache on all cluster members.

