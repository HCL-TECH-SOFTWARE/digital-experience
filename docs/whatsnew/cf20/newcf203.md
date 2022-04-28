# What's new in CF203

HCL Digital Experience 9.5 Container Update and CF203 release includes new Design Studio (Beta) Content list and container reuse features, Helm configuration of metrics enablement, deploy to internal network, and Ambassador to HA Proxy migration support. The release also adds support for DAM metadata configurations using Extensibility functions, Content Composer in Virtual Portal configuration, Personalization Visibility rules in anonymous use case sample and updates, support for Dynamic Properties, Profiler Rule and update, options to customize the DX Site Manager interface, Notice of deprecation and replacement of Document Conversion services notice, new complementary DX training modules in the HCL Software Academy, and more.

The following features and updates are available to customers installing HCL Digital Experience CF203 on supported container platforms:
<!-- ## Personalization REST APIs 

Personalization Visibility Rules REST APIs adds an anonymous use case sample and updates, and the ability to apply Dynamic Properties. New Profile Create Rule APIs and update based on UUIDs are also added.
See the Help Center topic and [Personalization Rules APIs](https://help.hcltechsw.com/digital-experience/9.5/pzn/dev_pzn_rules_api.html){:target="_blank"}<!-- (../pzn/dev_pzn_rules_api.md) --> for more information. -->

## Deploy HCL DX 9.5 Container Update to container platforms using Helm 

Beginning with HCL Digital Experience 9.5 Container Update CF196, administrators can deploy HCL DX 9.5 CF196 and later images to the supported container platforms using Helm. Deployment using the Helm Chart can provide administrators more transparency and control in the deployment operations. 

Beginning with Container Update CF203, the Ambassador shipped as part of the DX Helm deployment is deprecated and will be removed in a subsequent HCL DX 9.5 Container Update release. HAProxy is taking its place and replaces functions performed by the Ambassador in the DX namespace.

In CF203, Helm configuration settings for metrics are enabled by default, new guidance is added to deploy to an internal network, and guidance is provided explaining the process to migrate from the Ambassador to new HAProxy service.
See the following Help Center topics from the new [HCL DX 9.5 Kubernetes](../../platform/kubernetes/overview.md), [Monitoring](../../platform/kubernetes/operations/monitoring/monitor_helm_deployment_metrics.md), [Deploying DX on internal network], Help Center documentation at https://opensource.hcltechsw.com/digital-experience HCL DX 9.5 Helm deployment

## Deploy HCL DX 9.5 Container Update to container platforms using Helm

Beginning with HCL Digital Experience 9.5 Container Update CF196, administrators can deploy HCL DX 9.5 CF196 and later images to supported container platforms using Helm. Using a Helm Chart deployment can provide administrators more transparency and control in deployment operations. 

!!!important
    In Container Update CF203, the migration from Ambassador to HAProxy must be completed as a required step, in preparation for the removal of Ambassador in the upcoming Container Update release. Refer to the following links for guidance on the migration.

See the following Help Center topics for more information:

- [HCL DX 9.5 Helm deployment](../../platform/kubernetes/architecture/helm_overview.md)
- [HAProxy overview](../../platform/kubernetes/haproxy-migration/haproxy-introduction.md)
- [Migrate from Ambassador to HAProxy](../../platform/kubernetes/haproxy-migration/haproxy-migration.md)
