# What's new in CF222

The following features and updates are available to customers installing HCL Digital Experience (DX) Container Update CF222 on supported platforms:

**All Digital Experience Versions (8.5, 9.0, 9.5)**

- Notice of deprecation of Textbox.io Rich Text Editor

**Digital Experience 8.5 and 9.0 Versions**

- End of Support announced for Digital Experience v8.5 and 9
- Automatically apply 9.5 from CF222 installation

## Digital Experience 9.5 Container Version

- Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository
- Notice of deprecation of customized OpenLDAP container starting CF223
- Removal of automated Pod restart on ConfigMap updates

### New values moved out of incubator to main section

=== "Containers" 
    Few values have been moved from incubator to main section. If those values are changed in [Custom values.yaml or values.yaml](https://opensource.hcltechsw.com/digital-experience/CF220/deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configuration/?h=values.yaml#helm-chart-valuesyaml), adjust them accordingly. For more information, see [Cleanup and Rendition Version Regeneration](../../manage_content/digital_assets/configuration/rendition_version_regeneration_and_cleanup.md)

Go to the [HCL Software Support Site/HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959) for the list of software fixes, including Container Update releases.