# Troubleshooting HCL DX Express 9.5 server startup and installation

Starting October 1, 2018, attempts to start or restart the server on HCL DX Express 8.5 or 9.0 fail with the following error in `SystemOut.log`:

```text
CLFBD0026E: The product HCL Digital Experience Express does not have a valid license key installed and the evaluation period has expired. 
Functions specific to this product are not enabled.
```

or

```text
CLFBD0030E: Caught error, message: Past the expiration date on license.
```

Product installation attempts also fail. Installation logs show the same CLFBD0026E and CLFBD0030E errors. An invalid license duration in the `wpe85.lic` license file causes this issue. This issue affects trial (evaluation) and non-trial versions of HCL DX Express 8.5 and 9.0, as well as new installations.

## Recommended solution

To resolve this issue, download and apply iFix PH03610 from the [My HCLSoftware (MHS) portal](https://my.hcltechsw.com/){target="blank"}.

## Workaround

To resolve server startup failures, remove the License Check application:

1. Replace `lc_adv_cfg.xml` at the following path with the updated file:

    ```xml
    <PortalHome>/installer/wp.exp.wart/lcComponent/config/includes/lc_adv_cfg.xml
    ```

    Default `<PortalHome>` directory:

    - Windows: `C:\\IBM\WebSphere\PortalServer`
    - Linux: `/opt/IBM/WebSphere/PortalServer`

2. From the `ConfigEngine` directory of your profile, run the `ConfigEngine` task for your operating system:

    - Windows:

        ```bash
        ConfigEngine.bat action-remove-ear-wp.exp.wart/lcComponent -DWasPassword=<Was_admin-password>
        ```

    - Linux:

        ```bash
        ./ConfigEngine.sh action-remove-ear-wp.exp.wart/lcComponent -DWasPassword=<Was_admin-password>
        ```

    The server should now start successfully.

## Resolving installation issues

To resolve installation failures:

1. Temporarily set the system clock to a date before October 1, 2018.
2. Install the product.
3. Remove the License Check application using the steps in the **[Workaround](#workaround)** section.
4. Reset the system clock to the current date.
