# How to create a search service for a Virtual Portal

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

A search service enables users to query pages and web content, and configuring a dedicated service for a Virtual Portal ensures that search scopes and indices are isolated specifically to that environment. This article outlines the steps required to configure a search service for an HCL Digital Experience (DX) Virtual Portal environment.

## Instructions

1. Verify that the remote search server and the Virtual Portal on the local portal server use the same LDAP directory.

2. Complete the initial remote search setup by following the procedures in [Configure Remote Search](../../../deployment/manage/container_configuration/kubernetes_remote_search.md).

3. Set the `PSE_TYPE` parameter to `ejb`. The required EJB and IIOP URL values are detailed in [Search service configuration parameters](../../../build_sites/search/cfg_dx_search/search_service_params/index.md).

4. Verify the file system permissions for the `DefaultCollectionsDirectory` and `CONFIG_FOLDER_PATH` directories to ensure they are accessible (for example, using `chmod -R 755`).
