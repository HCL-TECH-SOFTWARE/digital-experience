# What's new in CF213

The following features and updates are available to customers installing HCL Digital Experience Container Update and CF213 on supported platforms:

**Digital Experience 8.5 and 9.0 Versions**

- End of Support Announced for Digital Experience v8.5 and 9

**All  Digital Experience Versions (8.5, 9.0, 9.5)**

- Web Content Manager – Comments plugin
- Web Content Manager – Content reporting
- DxClient – LiveSync
- Notice of deprecation of Textbox.io Rich Text Editor

**Digital Experience 9.5 Container Version**

- Persisting CW Profile
- Content Composer – AI-assisted content analysis
- Container Deployment – PreReqs checker

## Digital Experience 8.5 and 9.0 Versions

=== "On-Premises"
    On June 30, 2023, HCL Software announced end of support for HCL Digital Experience versions 8.5 and 9, effective June 30, 2025. Customers are encouraged to upgrade to HCL Digital Experience version 9.5, released in a continuous delivery model. HCL Digital Experience 9.5 adds support for deployment to Kubernetes container environments, in addition to on-premises supported Operating system platforms, also Practitioner Studio centralized management user interfaces, enhanced content authoring interfaces, integrated Digital Asset Management to store and include rich media assets, new OpenAPI-compliant REST APIs and more, so that business users, developers, and administrators can manage DX tasks more quickly. For more information, refer to the [Deprecated Features](../deprecated_features.md) page for more information.

## All  Digital Experience Versions (8.5, 9.0, 9.5)

### Web Content Manager - Comments plugin

=== "Containers"
    WCM Comments is a feature that allows content authors and site designers to enhance their presentation template and result by configuring a new plugin that enables comments which can drive team-based improvements in site presentations to target audiences. The comments are also stored in WCM and can be managed as content. See the Help Center topic [Comments in WCM](../../build_sites/create_sites/developing_managing_content/comments_wcm.md) for more information. 

=== "On-Premises"
    WCM Comments is a feature that allows content authors and site designers to enhance their presentation template and result by configuring a new plugin that enables comments which can drive team-based improvements in site presentations to target audiences. The comments are also stored in WCM and can be managed as content. See the Help Center topic [Comments in WCM](../../build_sites/create_sites/developing_managing_content/comments_wcm.md) for more information.

### Web Content Manager – Content reporting

=== "Containers"
    Content reporting is a new capability that can be configured in Practitioner Studio to enable content authors to search content libraries according to criteria, optionally update specified metadata or terms, and export content results to .csv format for additional evaluations. See the Help Center – Content reporting for additional information.

=== "On-Premises"
    Content reporting is a new capability that can be configured in Practitioner Studio to enable content authors to search content libraries according to criteria, optionally update specified metadata or terms, and export content results to .csv format for additional evaluations. See the Help Center – Content reporting for additional information.

### DxClient - LiveSync

=== "Containers"
    A new DXClient artifact called LiveSync supports the ability to synchronize WebDAV-based theme files from local machine to server , and server-to-local in real time. This process watches the file system for changes in the background. See the Help Center topic [LiveSync](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/livesync.md) for additional information.

=== "On-Premises"
    A new DXClient artifact called LiveSync supports the ability to synchronize WebDAV-based theme files from local machine to server , and server-to-local in real time. This process watches the file system for changes in the background. See the Help Center topic [LiveSync](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/livesync.md) for additional information.

## Digital Experience 9.5 Container Version

### Persisting CW Profile

=== "Containers"
    Implemented Persistence of cw_profile which allows advanced configuration of the Config Wizard profile to be persisted through restarts. See [Persisting CW Profile](../../deployment/manage/portal_admin_tools/cfg_wizard/configuration/persist_cw_profile.md) for more information.

### Content Composer – AI-assisted content analysis

=== "Containers"
    AI assisted content analysis is a new optional feature that can accelerate content tagging and sentiment insights for content authors. A WCM API plugin to enable, and Content Composer integration is available, using [OpenAI ChatGPT](https://openai.com/blog/chatgpt) (subscribed to separately) as an example. See the Help Center topics WCM Content Analysis enablement for [Kubernetes](../../get_started/plan_deployment/container_deployment/wcm_content_ai_analysis.md) and [Traditional](../../get_started/plan_deployment/traditional_deployment/wcm_env/wcm_ai_analysis.md) platforms, and Content Composer – [Managing Content Items](../../manage_content/index.md) and [Authoring Content Items](../../manage_content/wcm_authoring/content_composer/usage/author_and_manage_content_items/author_content_items.md#creating-new-content-and-getting-ai-assisted-sentiment-analysis-of-text-elements) for more information.

### Container Deployment – PreReqs checker 

=== "Containers"
    The "Prereqs Checker" is a tool that can execute a number of checks on the target Deployment environment to ensure system and storage requirements are met for software deployment and upgrades to the latest Container Update release. Two new checks are added: Storage Space Check and Core Profile Check. For more information, see the help topic [Configure Prereqs Checker For DX Deployment](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-core-prereqs-checker.md#checks-implemented-in-prereqs-checker).

## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcltechsw.com/hcl-dx) section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=) section for more information.