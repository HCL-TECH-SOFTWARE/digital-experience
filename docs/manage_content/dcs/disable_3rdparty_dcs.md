# Disable Oracle DCS

Oracle DCS is disabled in the Digital Experience 95 Cumulative Fix and Container CF205 release.

Beginning with Digital Experience 95 CF205 release, Oracle DCS service for Digital Experience [Document Conversion Service](/index.md) is removed and will be replaced with an HCL supported DCS services. Because of this change, when you upgrade to CF205, you must take a note of the DCS files backup scenarios:

-   If you are upgrading from CF202 or later, Oracle DCS files will be automatically backed up to your Digital Experience profile location and you can continue to utilize Oracle DCS.
-   If you are upgrading from CF201 or earlier, you must [manually back up](dcs_backup.md) your existing Oracle DCS files.

**Don't have the backup of the DCS files:** Do not set the `disableStellentDCS` flag to false or run the manual tasks if you do not have the backup of the Oracle DCS files in your DX environment.

If you want to continue using the Oracle DCS with Digital Experience CF205 or later upgrade, ensure that `disableStellentDCS=false` is configured in `wkplc.properties` before running the `applyCF.sh|bat` command or pass `-DdisableStellentDCS=false` on the command line when running the `applyCF.sh|bat` command.

If you are upgrading to a Kubernetes deployment, add/set the `disableStellentDCS` to false in your custom-values.yaml file before running the Helm upgrade command.

## Enabling DCS manually

You can enable DCS manually anytime. For example, when you ran `applyCF` without setting the `disableStellentDCS` flag to false or if you decide to set and use Oracle DCS again as your DX DCS, you can manually re-enable by running the following `ConfigEngine` task.

```
ConfigEngine.sh|bat action-re-enable-stellent-dcs
```

If you are running in a Kubernetes environment, you can re-enable Oracle DCS for DX DCS by running the `ConfigEngine` task in the DX core container.

1.  Obtain a shell within your DX Core container:

    ```
    kubectl/oc exec -it <DX CORE POD CONTAINER NAME> bash -n namespace/project -c core
    ```

2.  Run the following `ConfigEngine` task:

    ```
    /opt/HCL/wp_profile/ConfigEngine/ConfigEngine.sh action-re-enable-stellent-dcs
    ```


## Disabling DCS manually

If after enabling Oracle DCS as DX DCS, you prefer not to use it, you can manually disable Oracle DCS by running the following `ConfigEngine` task:

```
ConfigEngine.sh|bat action-disable-stellent-dcs
```

If you are running in a Kubernetes environment, you can disable Oracle DCS by running the `ConfigEngine` task in the DX core container.

1.  Obtain a shell within your DX Core container:

    ```
    kubectl/oc exec -it <DX CORE POD CONTAINER NAME> bash -n namespace/project -c core
    ```

2.  Run the following `ConfigEngine` task:

    ```
    /opt/HCL/wp_profile/ConfigEngine/ConfigEngine.sh action-disable-stellent-dcs
    ```

