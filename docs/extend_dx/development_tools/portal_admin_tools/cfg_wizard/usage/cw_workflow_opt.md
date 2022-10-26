---
title: Running the configuration
---

# Configuration Wizard: Running the configuration

You are ready to configure the target system. There are several options available to you when you create your customized instructions.

## Start configuration

Click **Start Configuration** to start your configuration. The steps automatically start running on the system that you are currently connected to until a manual step is encountered. When the configuration encounters a manual step, it pauses and you can select **Instructions for Step** to view the details that are required.

While you run the configuration, you can open and view the running log for the current step.

## Reset steps

Resetting the steps is helpful when you encounter a failed step. However, if you reset the status of your steps, you do not roll back any configuration that has already occurred.

For information on troubleshooting your configuration, see *Troubleshooting the Configuration Wizard* in the product documentation.

## Cancel

You cannot cancel a running configuration. Before you start the configuration, you can click **Cancel** to start the process over. However, if you decide to cancel, you lose all of your wizard selections, and you return to the home page of the wizard.

## Change values

You can change values before you start a configuration:

-   Click **Cancel**. By clicking **Cancel**, you lose your wizard selections and return to the home page of the wizard to start over.
-   Click **Back** to return to the Answer Questions and Customize Values screens, where you can change customized values or parameters to create new instructions.

Click **Back** and **Next** to move back or forward in the configuration wizard.

## Next steps

Next steps instructions are available when you complete your configuration. If you download the scripts, the next steps instructions are available as the last step in the HTML instruction file. If you run the steps by using the Configuration Wizard, the next steps instructions display as a message when all steps are marked as complete and you click **Finished**.

???+ info "Related information"  
    -   [Configuring a remote server to receive workflows](../../../portal_admin_tools/cfg_wizard/usage/cw_cfg_remote.md)
    -   [Configuration Wizard: Reusable wizard selections](../../../portal_admin_tools/cfg_wizard/usage/cw_save_settings.md)
    -   [Configuration Wizard log files](../../../../../deployment/manage/troubleshooting/logging_and_tracing/cfg_wizd_logs.md)
