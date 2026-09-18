# How to use REST API constraints for searches in content and authoring templates

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

Search constraints limit search results to items that match specific metadata values. Client-side applications use constraints as an alternative to filters and advanced search options. You can combine multiple constraints to optimize the search. For example:

- To find content located in particular `SiteArea` path:

    ```text
    constraint={"type":"field","id":"contentpath","values":["<SiteArea Path>"]} 
    ```

- To find content that uses a specific authoring template:

    ```text
    constraint={"type":"field","id":"authoringtemplate","values":["<Authoring template name>"]} 
    ```

For more information, refer to [Search constraints REST API specification](../../../build_sites/search/search-rest-api/constraints-spec.md){target="_blank"}.

Content links and the content itself are both included in the search collection. The Search Center Portlet queries all configured search scopes by default; as a result, search queries can return duplicate entries unless managed with a dedicated search scope.

This document explains how to use REST API constraints for searches in content and authoring templates.

## Instructions

To use REST API constraints for searches in content and authoring templates, perform the following steps:

1. Login to the HCL DX Portal as an administrator.
2. Navigate to **Administration > Search > Search Scopes**.
3. Select **New Scope** to create a custom search scope.
4. (Optional) Move the new search scope to the top of the list to set it as the default scope for the Search Center Portlet.

For more information, refer to [Creating a search scope](../../../build_sites/search/manage_search/searchscopes_customlinks/crt_nw_srch_scp.md){target="_blank"}.

???+ info "Related information"
    - [How Portal Search handles special characters when indexing](../../../build_sites/search/portal_search/hint_tips/srrhinttips_spechars.md){target="_blank"}  
    - [Search constraints REST API specification](../../../build_sites/search/search-rest-api/constraints-spec.md){target="_blank"}  
