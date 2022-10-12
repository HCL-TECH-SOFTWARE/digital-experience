# HCL Portal Express 9.5 - Server startup and installation

Learn how to resolve HCL Portal server startup/restart failure on HCL Portal Express 8.5 or 9.0 or new HCL Portal Express installation failures.

## Overview

Starting October 1st, 2018, attempts to start/restart the server on HCL Portal Express 8.5 or 9.0 will fail with the following error in SystemOut.log:

-   ```
CLFBD0026E: The product HCL Portal Express does not have a valid license key installed and the evaluation period has expired. 
Functions specific to this product are not enabled.
```

    or

-   ```
CLFBD0030E: Caught error, message: Past the expiration date on license.
```


Similarly, attempts to install the product will also fail. A review of the installation logs will show the same CLFBD0026E and CLFBD0030E errors. The cause of this issue is an invalid license duration in the license file (wpe85.lic). This issue impacts both trial (evaluation) and non-trial versions of HCL Portal Express 8.5, 9.0 and new installations.

## Recommended Solution

To apply iFix PH03610 solution, users need to visit the HCL Software License Portal page and [download the fix](https://hclsoftware.flexnetoperations.com/flexnet/operationsportal/entitledDownloadFile.action?downloadPkgId=HCL_Portal_Maintenance&orgId=HCL).

## Workaround

To address a server startup failure, remove the License Check application via the following steps:

1.  Replace the existing file of the same name with the following: lc_adv_cfg.xml. Where

    ```
    <PortalHome>/installer/wp.exp.wart/lcComponent/config/includes/lc_adv_cfg.xml
    ```

    where <PortalHome\> represents the installed location. By default, this is:

    -   Windows: C:\\IBM\WebSphere\PortalServer
    -   Linux: /opt/IBM/WebSphere/PortalServer

2.  In the `ConfigEngine` directory of your Portal profile, run the following `ConfigEngine` task:

    -   Windows: `ConfigEngine.bat action-remove-ear-wp.exp.wart/lcComponent -DWasPassword=<Was_admin-password>`
    -   Linux: `./ConfigEngine.sh action-remove-ear-wp.exp.wart/lcComponent -DWasPassword=<Was_admin-password>`

    The server should now start successfully.


To address a failed installation:

1.  Temporarily reset the system clock for the operating system to a date prior to Oct 1, 2018.
2.  Install the product.
3.  Run through the steps above to remove the License Check application and avoid any subsequent server startup failures.
4.  Reset system clock back to current date.


