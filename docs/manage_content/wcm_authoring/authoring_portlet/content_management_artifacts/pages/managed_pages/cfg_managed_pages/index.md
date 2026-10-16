# Configuring Managed Pages

When you create a new installation of HCL Digital Experience (DX) 8.5, Managed Pages are enabled by default. However, you can also manually disable and enable the feature as needed.

!!!note "Migration note"
    If you migrate from a previous version, Managed Pages are disabled by default, but you can enable the feature after migration.

- **[Enabling Managed Pages](wcm_config_mngpages_enable.md)**  
By default, support for managed pages is enabled for the default virtual portal. However, you can also manually enable this support if Managed Pages are disabled.
- **[Disabling Managed Pages](wcm_config_mngpages_disable.md)**  
Disable support for managed pages by running the disable-managed-pages configuration task.
- **[Transferring content associations to the Portal Site library](wcm_config_mngpages_transfer.md)**  
When you enable manage pages, any web content pages that you have are converted to Managed Pages and added to the Portal Site library. However, the content that is associated with the web content pages remains in the original libraries. You can transfer this associated content to the Portal Site library with the internalize-content-mappings task.

???+ info "Related information"
    [Vanity URLs](../../../../../../wcm_delivery/vanity_url/index.md)
