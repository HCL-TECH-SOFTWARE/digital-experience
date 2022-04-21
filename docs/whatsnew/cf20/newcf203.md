# What's new in CF203


## Deploy HCL DX 9.5 Container Update to container platforms using Helm

Beginning with HCL Digital Experience 9.5 Container Update CF196, administrators can deploy HCL DX 9.5 CF196 and later images to supported container platforms using Helm. Using a Helm Chart deployment can provide administrators more transparency and control in deployment operations. Beginning with Container Update CF203, the Ambassador shipped as part of DX is deprecated and will be removed in the subsequent update. HAProxy is taking its place in the DX namespace.

!!!important
    In CF203 the migration from Ambassador to HAProxy must be completed as a preparation for the removal of Ambassador in the upcoming release. Please follow the links below for guidance on the migration.

See the following Help Center topics for more information:

- [HCL DX 9.5 Helm deployment](../../platform/kubernetes/architecture/helm_overview.md)
- [HAProxy overview](../../platform/kubernetes/haproxy-migration/haproxy-introduction.md)
- [Migrate from Ambassador to HAProxy](../../platform/kubernetes/haproxy-migration/haproxy-migration.md)
