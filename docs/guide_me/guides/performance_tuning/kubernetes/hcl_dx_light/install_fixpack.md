# Installing a Fixpack

The best practice is to create your own theme based on the one that HCL Portal ships.
Using the shipped themes directly is not recommended, as any tuning or customization may be overwritten when a cumulative fix is applied.

!!! Warning "Cumulative Fix Impact"
    After installing a cumulative fix:

     - Any tuning applied to `commonActions.jsp` will need to be **reapplied**.
     - The **default theme profile** and the **login portlet’s theme profile** will be **overwritten**.
     - If you are using **customized theme profiles**, those customizations must also be **reapplied**.
