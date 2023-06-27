# Configuration Wizard

Use the Configuration Wizard to set up stand-alone servers and new deployments, create clusters, migrate and update to new versions, and add new capabilities to existing deployments.

In the Configuration Wizard, you answer questions about the environment that you are configuring. Based on your answers, the wizard prompts you for custom values that are needed to configure your environment. Finally, the wizard generates custom steps and scripts to set up your environment.

!!!warning
    When using the Configuration Wizard in a container deployment, it always runs on the first Core Pod (`core-0`) only. All requests are routed to that Pod.

    When using the Configuration Wizard in a container deployment with multiple Core Pods, you must restart all Pods manually after the configuration with Configuration Wizard is successful. This is to ensure that all Pods reload the updated configurations.

    You can trigger the restart through any of the following:
    - [DXClient `restart-core-pods`command](../../../../extend_dx/development_tools/dxclient/dxclient_artifact_types/dxcoreserver.md#restart-dx-core-pods)
    - `kubectl` command: `kubectl -n <namespace> rollout restart statefulset <release-name>-core`.


**Video**: [HCL Portal - How to Access ConfigWizard](https://www.youtube.com/watch?v=YAEO78T7coM&feature=youtu.be)