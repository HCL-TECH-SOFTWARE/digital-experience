# Restore Digital Asset Management image to previous version

This shows you how to restore the HCL Digital Experience 9.5 Digital Asset Management image to a previous version.

You can restore your DAM deployment to a previous version, in case the database migration fails repeatedly.

See [Updating a deployment](../containerization/dxtools_dxctl.md#updating_deployment) for more information on updating your deployment using dxctl. For the latest HCL DX 9.5 images, see [Docker image list](../containerization/docker.md).

-   To restore, get the properties file and modify the `dam.tag` property value under `## DAM configuration` and replace it with the previous image version tag.

    In this example, `dam.tag` is updated with the CF196 DAM image version tag:

    ```
    # Ensure to use the correct image version tags
    dam.tag: "95_CF196_20210625-2013"
    ```


**Parent topic:**[Backup and recovery procedures Containerization](../containerization/operator_backup_and_recovery_procedures.md)

