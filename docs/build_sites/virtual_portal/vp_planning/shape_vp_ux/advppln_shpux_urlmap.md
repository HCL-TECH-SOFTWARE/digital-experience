# Human readable URL mappings for virtual portals

You can provide human readable URLs for your users to access their virtual portals. For example, you can give each virtual portal a human readable URL, such as http://www.yourname.com:10039/wps/portal/yourcompanyhere. You can pass the human readable URL of a virtual portal to its users. They can then use it to access their virtual portal.

When you create a virtual portal, you specify the human readable URL as required by your business environment. The URL mapping that you specify is assigned to the virtual portal during its initialization. The URL mapping points to the content root of the virtual portal.

!!! note
    URL mappings were deprecated with HCL Portal Version 8.5. Use friendly URLs instead. However, URL mappings are still used for internal purposes in the portal, for example, to map virtual portals.

Internally, this URL mapping corresponds to a unique name wps.vp.internal\_ID\_of\_the\_virtual\_portal. The portal installation uses this unique name to identify and access the virtual portal unambiguously. The XML configuration interface and the Portal Scripting Interface also use this URL mapping to identify the virtual portal.

You can also specify extra URL mappings for a virtual portal, both for the content root or for other content of the virtual portal, for example, a page in the navigation of the virtual portal.

All URL mappings use the same context root and servlet name in the URL. This setting applies to both the initial URL mapping of a virtual portal and any additional URL mappings that you might create for it.

For more information, see *URL mappings*.


1.  There is a 1:1 relation between a virtual portal and its initial URL Mapping. Each mapped URL points to the root content node of one virtual portal. You cannot use the same URL Mapping for two different virtual portals.
2.  You must not delete or modify the initial URL Mapping for a virtual portal or modify its unique name. Deleting this URL Mapping or modifying its unique name makes the virtual portal unusable. This setting is independent of whether you use the administration portlets URL Mapping or Custom Unique Names or the XML configuration interface to change the URL Mapping.
3.  If you use an external security manager, such as Tivoli® Access Manager, you can restrict the usage of virtual portals by using the URL Mappings. To restrict, you base the URL filtering rules of a security proxy on the URL Mappings that you defined. Block all URLs by default and explicitly enable the defined URL Mappings only.
4.  A URL mapping or friendly URL that is defined for a resource in a particular virtual portal must use the same URL context as the human readable URL context for that virtual portal itself. Example: In a virtual portal that uses the human readable URL mapping `wps/portal/vp_1`, all URL mappings or friendly URLs for portal resources must start with `wps/portal/vp_1`, for example `wps/portal/vp_1/url_1` and `wps/portal/vp_1/url_2`. Within this virtual portal, a URL mapping or friendly URL such as `wps/portal/url_1` is not valid, as the portion `vp_1` of the URL Context is missing.
5.  There are some strings that you cannot use as URL mappings for virtual portals, for example `vp`. These strings are reserved names and correspond with URL codec names. They are listed in the following:

    ```
    a0,    a0_1,   a0_2,   a0_3,  a1,    a2, a3,
    base64xml
    b0,    b0_1,   b0_2,   b0_3,  b1,    b2, b3, 
    c0,    c0_1,   c0_2,   c1,    c2,    c3, c4,  c4_1, c4_2, c4_3, c5, c6, c7, 
    cxml,  cxml_1, cxml_2, cxmld, kcxml,
    d0,    d1,     d2,     d3,    d4,    d5, dl2, dl3,  dl4,  delta
    kcxml, nm1,    nm2,    nm3,   nm4,   p0, pw, 
    resource,      sel,    s0,    t0,    vp, wml,
    z0,    z0_1,   z0_2,   z0_3,  z1,    z2, z3
    ```



???+ info "Related information"
    - [Using friendly URLs](../../../../deployment/manage/portal_admin_tools/portal_user_interface/managing_pages/manage_pages_portlets/mp_friendly_url.md)
    - [URL mapping](../../../../deployment/manage/config_portal_behavior/adurlmap.md)
    - [XML configuration interface and content associations](../../../../manage_content/wcm_delivery/deliver_webcontent_on_dx/advance_adm_sample/contentmap/mp_wcm_contentmap_xml.md)
    - [Automatically grant page access to community members](../../../../extend_dx/integration/connections/configuration/cfg_community_pages/commpages_delegate_access.md)
    - [REST API and content associations](../../../../manage_content/wcm_delivery/deliver_webcontent_on_dx/advance_adm_sample/contentmap/mp_wcm_contentmap_restapi.md)
    - [Access permissions](../../../../deployment/manage/security/people/authorization/controlling_access/resources_roles/sec_acc_rights.md)

