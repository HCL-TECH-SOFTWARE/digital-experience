# Upgrade options for containerized deployments

HCL Digital Experience on containerized platforms is constantly evolving and incorporating customer feedback. Some of these improvements need extra manual steps to get to the latest version. To make this journey manageable and transparent, this topic shows all possible starting scenarios and their upgrade path.

## Fresh install

For fresh installations on any containerized platform, see [Deploying container platforms using Helm](helm_deployment.md).

## Upgrade from any Operator-based deployment

Beginning with HCL Digital Experience 9.5 Container Update CF200, HCL has discontinued releasing DX [Operator-based deployments](deploy_container_platforms.md) and provides support only for [Helm-based deployments](helm.md).

HCL no longer provides further updates or code fixes for Operator-based deployments.

HCL requires all customers to migrate to Helm-based deployments for their DX installations. HCL will work with customers as they transition from Operator-based to Helm-based deployments.

For more information on the migration process, see

[Migrating from Operator to Helm deployments](helm_operator_migration.md).

## Upgrade your Helm-based deployment

For initial Helm-based deployment from CF196 or CF197, you must [Migrate to new DAM DB in Helm-based deployments](helm_dam_migration_newDB.md). If you are not sure if your deployment is based on the first version of the Digital Asset Management \(DAM\) persistence solution, run the following commands to check:

```
  kubectl get -n <namespace> pod/<deployment-name>-persistence-rw-0
  kubectl get -n <namespace> pod/<deployment-name>-persistence-node-0
```

Example:

```
  kubectl get -n dxns pod/dx-deployment-persistence-rw-0
  kubectl get -n dxns pod/dx-deployment-persistence-node-0
```

One of commands will return an error message similar to the following:

```
Error from server (NotFound): pods "dx-deployment-persistence-rw-0" not found
```

If the first command returned an error, while the second command was successful, you are already on the new database model and can follow the normal upgrade path. For more information, see [Update deployment to a later version](helm_update_deployment.md).

Otherwise, you must upgrade to the new HCL DX persistence solution. For more information, see [Migrate to new DAM DB in Helm-based deployments](helm_dam_migration_newDB.md).

**Parent topic:**[Digital Experience on containerized platforms](../containerization/deployment.md)

