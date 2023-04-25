# Federated LDAP

## Disabling Nested Group Searches

For environments where federated LDAP is used, throughput can be improved by disabling nested group caches. Nested group caches are discussed under “Disabling nested group searches” in this document:

http://www-01.ibm.com/support/knowledgecenter/SSEQTP_8.5.5/com.ibm.websphere.wim.doc/disablingnestedgroupsearches.html.

### How to Set

Run the following commands in wsadmin:

<WASRoot>/bin/wsadmin.sh
wsadmin>$AdminTask configureAdminWIMUserRegistry {-customProperties
{"com.ibm.ws.wim.registry.grouplevel=1"} }
wsadmin>$AdminConfig save
wsadmin>exit

## Enabling WebSphere and VMM to share group info

In a federated ldap environment, WebSphere and VMM can share cached information about groups. Setting this up is described at https://help.hcltechsw.com/digital-experience/9.5/adminsystem/reuse_group_info.html.

### How to Set

In the WebSphere Integrated Solutions Console
Resources → Resource Environment → Resource Environment Providers → WP PumaStoreService →
Custom properties

Create a new custom property.

    Name: store.puma_default.filter.assertionFilter.classname
    Value: com.ibm.wps.um.AssertionFilter

## If not using UX Screen Flow Manager

If a deployment is not using screen flow manager, it can be removed. We saw about a 2% improvement
in throughput with it removed. The process for disabling it is described in the link below.
https://help.hcltechsw.com/digital-experience/8.5/screenflow/cfg_opt.html