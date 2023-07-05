# What's new in CF213

The following features and updates are available to customers installing HCL Digital Experience Container Update and CF213 on supported platforms:

**All  Digital Experience Versions (8.5, 9.0, 9.5)**

- Web Content Manager – Comments plugin
- Web Content Manager – Content Reporting
- Web Content Manager REST API v2 - AI Analysis API
- Workflow date fields in REST API search query results
- Export of REST query results to CSV
- DXClient – LiveSync
- Notice of deprecation of Textbox.io Rich Text Editor

**Digital Experience 8.5 and 9.0 Versions**

- End of Support Announced for Digital Experience v8.5 and 9

**Digital Experience 9.5 Container Version**

- Persisting CW Profile
- Config Wizard credentials in helm chart
- Content Composer – AI-assisted content analysis
- Container Deployment – New checks in Prereqs checker

## All  Digital Experience Versions (8.5, 9.0, 9.5)

### Web Content Manager - Comments plugin

=== "Containers"
    WCM Comments is a feature that allows content authors and site designers to enhance their presentation template and result by configuring a new plugin that enables comments. WCM Comments can drive team-based improvements in site presentations to target audiences. The comments are also stored in WCM and can be managed as content. See the Help Center topic [Comments in WCM](../../build_sites/create_sites/developing_managing_content/comments_wcm.md) for more information. 

=== "On-Premises"
    WCM Comments is a feature that allows content authors and site designers to enhance their presentation template and result by configuring a new plugin that enables comments. WCM Comments can drive team-based improvements in site presentations to target audiences. The comments are also stored in WCM and can be managed as content. See the Help Center topic [Comments in WCM](../../build_sites/create_sites/developing_managing_content/comments_wcm.md) for more information.

### Web Content Manager – Content Reporting

=== "Containers"
    Content Reporting is a new capability that can be configured in Practitioner Studio. The Content Reporting feature enables content authors to search content libraries according to criteria, optionally update specified metadata or terms, and export content results to a CSV format for additional evaluations. See the Help Center topic [Content Reporting](../../manage_content/wcm_authoring/content_reporting/index.md) for additional information.

=== "On-Premises"
    Content Reporting is a new capability that can be configured in Practitioner Studio. The Content Reporting feature enables content authors to search content libraries according to criteria, optionally update specified metadata or terms, and export content results to a CSV format for additional evaluations. See the Help Center topic [Content Reporting](../../manage_content/wcm_authoring/content_reporting/index.md) for additional information.

### Web Content Manager REST API v2 - AI Analysis API

=== "Containers"
    The Web Content Manager REST V2 AI Analyzer APIs can be used to do sentimental analysis, keyword extraction, and auto summarization for a content element. See the Help Center topics WCM Content Analysis enablement for [Traditional](../../get_started/plan_deployment/traditional_deployment/wcm_env/wcm_ai_analysis.md) deployment and [AI analyzer API for content](../../manage_content/wcm_development/wcm_rest_v2_ai_analysis/index.md) for more information.

=== "On-Premises"
    The Web Content Manager REST V2 AI Analyzer APIs can be used to do sentimental analysis, keyword extraction, and auto summarization for a content element. See the Help Center topics WCM Content Analysis enablement for [Traditional](../../get_started/plan_deployment/traditional_deployment/wcm_env/wcm_ai_analysis.md) deployment and [AI analyzer API for content](../../manage_content/wcm_development/wcm_rest_v2_ai_analysis/index.md) for more information.

### Workflow date fields in REST API search query results

=== "Containers"
    You can include the date fields associated with the workflow of a requested item by specifying the `options=workflow` URL parameter. See the Help Center topic [Query parameters](../../manage_content/wcm_development/wcm_rest/wcm_rest_query/wcm_rest_adhoc.md#adding-workflow-date-fields-and-link-to-the-rest-api-search-query-results) for more information.

=== "On-Premises"
    You can include the date fields associated with the workflow of a requested item by specifying the `options=workflow` URL parameter. See the Help Center topic [Query parameters](../../manage_content/wcm_development/wcm_rest/wcm_rest_query/wcm_rest_adhoc.md#adding-workflow-date-fields-and-link-to-the-rest-api-search-query-results) for more information.

### Export of REST query results to CSV

=== "Containers"
    You can export REST query results into a CSV file. See the Help Center topic [CSV Export of REST query results](../../manage_content/wcm_development/wcm_rest/wcm_rest_query/wcm_rest_csv_export.md) for more information.

=== "On-Premises"
    You can export REST query results into a CSV file. See the Help Center topic [CSV Export of REST query results](../../manage_content/wcm_development/wcm_rest/wcm_rest_query/wcm_rest_csv_export.md) for more information.

### DXClient - LiveSync

=== "Containers"
    You can include the date fields associated with the workflow of a requested item. See the Help Center topic [LiveSync](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/livesync.md) for additional information.

=== "On-Premises"
    A new DXClient artifact called LiveSync supports the ability to synchronize WebDAV-based theme files from local machine to server, and server-to-local in real time. This process watches the file system for changes in the background. See the Help Center topic [LiveSync](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/livesync.md) for additional information.

### Notice of deprecation of Textbox.io Rich Text Editor

=== "Containers"
    The Textbox.io Rich Text Editor component in the HCL Digital Experience software is deprecated effective January 31, 2023 and will End of Support (EOS) on January 31, 2024. See the Help Center topic [Deprecated features](../deprecated_features.md) for more information.

=== "On-Premises"
    The Textbox.io Rich Text Editor component in the HCL Digital Experience software is deprecated effective January 31, 2023 and will End of Support (EOS) on January 31, 2024. See the Help Center topic [Deprecated features](../deprecated_features.md) for more information.

## Digital Experience 8.5 and 9.0 Versions

### End of Support Announced for Digital Experience v8.5 and 9

=== "On-Premises"
    On June 30, 2023, HCL Software announced end of support for HCL Digital Experience versions 8.5 and 9, effective June 30, 2025. Customers are encouraged to upgrade to HCL Digital Experience version 9.5, released in a continuous delivery model. HCL Digital Experience 9.5 adds support for deployment to Kubernetes container environments, in addition to on-premises supported Operating system platforms, Practitioner Studio centralized management user interfaces, enhanced content authoring interfaces, integrated Digital Asset Management to store and include rich media assets, new OpenAPI-compliant REST APIs and more, so that business users, developers, and administrators can manage DX tasks better. For more information, refer to the [Deprecated features](../deprecated_features.md) page for more information.

## Digital Experience 9.5 Container Version

### Persisting CW Profile

=== "Containers"
    Implemented Persistence of cw_profile which allows advanced configuration of the Config Wizard profile to be persisted through restarts. See [Persisting CW Profile](../../deployment/manage/portal_admin_tools/cfg_wizard/configuration/persist_cw_profile.md) for more information.


### Config Wizard credentials in helm chart

=== "Containers"
    Added information about configuring Config Wizard admin credentials from the helm chart. See [Config Wizard security credentials](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_configure_credentials.md#config-wizard-security-credentials) for more information.

### Content Composer – AI-assisted content analysis

=== "Containers"
    AI-assisted content analysis is a new optional feature that can accelerate content tagging and sentiment insights for content authors. A WCM API plugin is available to enable this feature, using [OpenAI ChatGPT](https://openai.com/blog/chatgpt) (subscribed to separately) as an example. See the topic WCM Content Analysis enablement for [Kubernetes](../../get_started/plan_deployment/container_deployment/wcm_content_ai_analysis.md) deployment, and Content Composer topics [Managing Content Items](../../manage_content/index.md) and [Authoring Content Items](../../manage_content/wcm_authoring/content_composer/usage/author_and_manage_content_items/author_content_items.md#creating-new-content-and-getting-ai-assisted-sentiment-analysis-of-text-elements) for more information.

### Container Deployment – New checks in Prereqs Checker 

=== "Containers"
    The Prereqs Checker is a tool that executes a number of checks on the target deployment environment to ensure system and storage requirements are met. Two new checks are added: Storage Space Check and Core Profile Check. For more information, see the help topic [Configure Prereqs Checker For DX Deployment](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-core-prereqs-checker.md#checks-implemented-in-prereqs-checker).

## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcltechsw.com/hcl-dx) section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=) section for more information.
