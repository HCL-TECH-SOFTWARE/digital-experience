# Configuration Wizard

Use the Configuration Wizard to set up stand-alone servers and new deployments, create clusters, migrate and update to new versions, and add new capabilities to existing deployments.

In the Configuration Wizard, you answer questions about the environment that you are configuring. Based on your answers, the wizard prompts you for custom values that are needed to configure your environment. Finally, the wizard generates custom steps and scripts to set up your environment.

!!!warning
    When using the Configuration Wizard in a container deployment with multiple Core Pods a manual restart of all Pods is necessary after the configuration with Configuration Wizard was successful. This will make sure that all Pods reload the updated configurations.

    The restart can be triggered using the [DXClient `restart-core-pods`command](../../../../extend_dx/development_tools/dxclient/dxclient_artifact_types/dxcoreserver.md#restart-dx-core-pods) or using the `kubectl` command: `kubectl -n <namespace> rollout restart statefulset <release-name>-core`.


**Video**: [HCL Portal - How to Access ConfigWizard](https://www.youtube.com/watch?v=YAEO78T7coM&feature=youtu.be)