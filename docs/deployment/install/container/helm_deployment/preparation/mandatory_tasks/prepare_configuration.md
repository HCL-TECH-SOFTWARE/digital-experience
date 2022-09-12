# Prepare Configuration

Create a configuration file that fits the needs of your target HCL DX 9.5 Container deployment. The configuration file is the heart of your deployment using Helm. It defines how HCL Digital Experience 9.5 is deployed to supported platforms, and how it behaves during runtime operations. This section explains how to create your own configuration file and how to leverage the existing `values.yaml` inside the Helm Chart. It also explains how to optionally overwrite settings in case the default set may not be sufficient.

!!!warning
    Modification to any files (chart.yaml, templates, crds) in hcl-dx-deployment-vX.X.X\_XXXXXXXX-XXXX.tar.gz, except custom-values.yaml or values.yaml, is not supported.

!!!note
    From CF205 on you can directly retrieve the Helm Chart via the HCL Harbor Helm repository. If you wish to do so, please follow the instructions in [Configure Harbor Helm Repository](../optional_tasks/optional_configure_harbor_helm_repo.md) to pull the Helm Chart before you continue.

## The configuration flow

Helm provides multiple ways to define values that can be processed to run an installation. Processing involves a three-step approach, that is ordered sequentially within a hierarchy.

## Helm Chart `values.yaml`

Every Helm Chart contains a `values.yaml` file. It defines all configurable parameters that a Helm Chart accepts and the default values that are used during an installation. If you do not provide any other configuration during an installation, Helm extracts all deployment information from the `values.yaml` file inside the Helm Chart.

All parameters that were not overwritten using any other configuration methods return to their default values from the `values.yaml` file inside the Helm Chart.

## Custom value files

Helm provides you with a way to maintain your own custom values files. You can specify a custom values file you want to use when running an installation.

This custom values file only needs to contain the parameters that you want to overwrite with your preferred settings.

!!! note
    There is no need to have the same complete set of parameters inside your custom values file, as there are available by default in the Helm Chart `values.yaml`. As outlined previously in this section, everything that is not defined in your custom values file are applied using the defaults from `values.yaml` inside the Helm Charts.

Please be aware that the parameters you can configure using your custom values file need to exactly align with those provided by the Helm Charts own values.yaml. You cannot configure anything that is not exposed in the values.yaml definition.

## Override parameters

It is possible to define values using a --set parameter in the Helm CLI during the installation of a Helm Chart.

Since there are many values that can be configured in the HCL Digital Experience deployment, we do not recommend this technique, since it makes installation commands very large and confusing.

## The default HCL DX 9.5 Container `values.yaml` file

HCL DX 9.5 Helm Chart provides a default values.yaml, which contains all possible configuration parameters.

To access this file, you may use the following command when you have the HCL DX 9.5 CF196 or later [Helm Chart tar.gz](../../../../../../get_started/plan_deployment/container_deployment/index.md#helm-chart-contents) file on hand:

```
# Command to extract values.ymal from Helm Chart
helm show values hcl-dx-deployment.tar.gz > values.yaml
```

The file contains all configurable parameters and their default values. You may use this file as a blueprint to create your own `custom-values.yaml`. You may also just rename the extracted `values.yaml` to `custom-values.yaml`.

!!! note
    Having a complete copy of the default `values.yaml` is not necessary and may bloat your configuration file with values that are already present in the DX Helm Chart.

## A custom configuration file

Helm allows you to provide a custom configuration file during the installation or upgrade process.

That file only overwrites settings that are defined within it. For parts of the configuration that are not defined in your custom configuration file, Helm returns to the default values in the `values.yaml` file inside the DX Helm Chart.

This allows you to create a file that only overwrites settings that are required, keeping the overall size of your configuration file small and the maintainability high.

This Help Center documentation refers to the custom configuration file as `custom-values.yaml`. You may name your custom configuration file as preferred.