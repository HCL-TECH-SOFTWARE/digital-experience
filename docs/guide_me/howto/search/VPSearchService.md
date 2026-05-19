# How to create a search service for a Virtual Portal

## Applies to

> HCL Digital Experience v9.5 and Higher

## Introduction

This document describes the detailed steps that need to be done to create a search service for a Virtual Portal.

## Instructions

1. First of all, please make sure that the remote search server is using the same LDAP for both the remote search server and local portal server's Virtual Portal.

2. Please follow the instructions mentioned in: [Configure remote search](../../../deployment/manage/container_configuration/kubernetes_remote_search.md){target="_blank"}

3. Set the PSE_TYPE=ejb.  The EJB and IIOP URL values are documented at [Search service configuration parameters](../../../build_sites/search/cfg_dx_search/search_service_params/index.md){target="_blank"}.

4. Please check the folder permission of DefaultCollectionsDirectory and CONFIG_FOLDER_PATH (example chmod -R 755).
