# Social Rendering

Social rendering enables Portal page editors to feature social data that is hosted on a remote IBM Connections server in the context of Portal pages.

As social rendering is based on the WCM Rendering Portlet, the same performance tunings for WCM rendering should be applied.

On a pure rendering system we enabled the `ListRenderingCache` in order to reduce CPU consumption and improve performance. In addition to enabling the cache you need to change your presentation template and appearance components to reference this cache. For more details, see
https://help.hcltechsw.com/digital-experience/8.5/social/soc_rendr_adm_socl_list.html

The other caches used by social rendering include the `BeanListCache` and `DocumentCache` which are enabled by default. Additional tuning was not required.