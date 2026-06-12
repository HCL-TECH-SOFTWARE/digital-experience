# How to use REST API constraints for searches in contents and authoring templates

## Applies to

> HCL Digital Experience v9.5 and Higher

## Introduction

Constraint limits search results to the ones that match specific metadata values. It is an alternative for client-side applications, which include filters and advanced search options. It is possible to include multiple constraint to optimize the search. For example:

```text
constraint={"type":"field","id":"contentpath","values":["<SiteArea Path>"]} 
```

to find contents located in particular SiteArea Path.

```text
constraint={"type":"field","id":"authoringtemplate","values":["<Authoring template name>"]} 
```

to find contents with authoring template name.

For details, please check: [Search constraints REST API specification](../../../build_sites/search/search-rest-api/constraints-spec.md){target="_blank"}

## Instructions

To use REST API constraints for searches in contents and authoring templates, you need to create a new search scope in the portal administration page when navigating to **Administration > Manage Search > Search Scopes > New Scope**. For details, please check
[Creating a search scope](../../../build_sites/search/manage_search/searchscopes_customlinks/crt_nw_srch_scp.md){target="_blank"}

???+ info "More relevant information"
    - Creating a new search scope will also avoid creating duplicate entries.
    - If you move the new search scope to the top of the list, it will be used by default for Search Center Portlet.
    - Content links are included in the search collection as well as the content itself.
    - Search Center Portlet is configured for all search scopes. Results are returned from all scopes resulting in duplicate entries.

???+ info "Related information"
    [How Portal Search handles special characters when indexing](../../../build_sites/search/portal_search/hint_tips/srrhinttips_spechars.md){target="_blank"}  
    [Search constraints REST API specification](../../../build_sites/search/search-rest-api/constraints-spec.md){target="_blank"}
