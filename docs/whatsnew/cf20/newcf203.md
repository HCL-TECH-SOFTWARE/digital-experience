# What's new in CF203


## Deploy HCL DX 9.5 Container Update to container platforms using Helm

Beginning with HCL Digital Experience 9.5 Container Update CF196, administrators can deploy HCL DX 9.5 CF196 and later images to supported container platforms using Helm. Using a Helm Chart deployment can provide administrators more transparency and control in deployment operations. Beginning with Container Update CF203, the Ambassador shipped as part of the DX Helm deployment is deprecated and will be removed in a subsequent HCL DX 9.5 Container Update release. HAProxy is taking its place and replaces functions performed by the Ambassador in the DX namespace.

!!!important
    In Container Update CF203 the migration from Ambassador to HAProxy must be completed as a required step, in preparation for the removal of Ambassador in the upcoming Container Update release. Refer to the following links for guidance on the migration.

See the following Help Center topics for more information:

- [HCL DX 9.5 Helm deployment](../../platform/kubernetes/architecture/helm_overview.md)
- [HAProxy overview](../../platform/kubernetes/haproxy-migration/haproxy-introduction.md)
- [Migrate from Ambassador to HAProxy](../../platform/kubernetes/haproxy-migration/haproxy-migration.md)
