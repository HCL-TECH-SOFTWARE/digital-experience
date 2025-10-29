# # Appendix

## Appendix A: Where Cache-Control Headers Are Configured

The following table summarizes where to configure **cache-control headers** for various portal resource types:


| Resource Type | Configuration Location |
|---------------|-------------------------|
| **Theme resources**<br>(served via Resource Aggregator) | [Deploying themes with cacheable resources](../../../../build_sites/themes_skins/manage_theme_capabilities/themeopt_mod_adminmod.md) |
| **Adaptive page caching**<br>(adds cache headers to the primary HTML response) | [Adaptive Page Caching](hcl_dx_light/adaptive_page_cache.md) |
| **WCM servlet content**<br>(e.g., images or files via `/wps/wcm/connect` or `/wps/wcm/myconnect`) | [WCM `browserCacheMaxAge`](wcm_tuning.md#wcm-browsercachemaxage) <br> [Web content cache types](../../../../manage_content/wcm_configuration/cfg_webcontent_delivery_env/caching_options/wcm_config_delivery_caching_types.md) |



---

## Appendix B: References & Additional Reading

- [HCL Digital Experience Help Center](https://opensource.hcltechsw.com/digital-experience/latest/index.html)
- [IBM DB2 11.5 Information Center](https://www.ibm.com/docs/en/db2/11.5)
