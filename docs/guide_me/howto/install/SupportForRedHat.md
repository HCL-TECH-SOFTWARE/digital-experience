# How to run HCL DX 8.5 or 9.0 on Red Hat Linux 8.x or 9.x

## Applies to

> HCL Digital Experience v8.5 and v9.0

## Introduction

HCL Digital Experience (DX) 8.5 does not support Red Hat Linux (RHEL) versions 8.x or 9.x:

- You must be on HCL DX 9.0 or later to use RHEL 8.x.  
- You must be on HCL DX 9.5 Cumulative Fix (CF) 209 or later to use Red Hat 9.x.  

For more information, refer to [Supported configurations](../../../get_started/system_requirements/traditional/supported_config.md){target="_blank"}.

This article provides instructions on how to run HCL DX 8.5 and 9.0 on RHEL 8.x or 9.x.  

## Instructions

Refer to the following steps to run HCL DX 8.5 and 9.0 on RHEL 8.x or 9.x.

### Upgrading HCL DX 8.5 to support RHEL 8.x or 9.x

1. Upgrade from Portal Server 8.5.0.x or IBM WebSphere Application Server 8.5.5.x to the latest version of DX 9.5 or IBM Application Server 9.0.5.x. For more information, refer to [A Step-by-Step Guide to Upgrading Portal from 8.5 to 9.5](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0079619){target="_blank"}.

2. Upgrade [RHEL to 8.x or 9.x](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/upgrading_from_rhel_8_to_rhel_9/index){target="_blank"}.  

    !!!note
        RHEL 8.x or 9.x on DX 8.5 is not supported. For more information, refer to [Other Configurations](../../../get_started/system_requirements/traditional/other_config.md){target="_blank"} and the [HCL Digital Experience 8.5 Detailed System Requirements](../../../get_started/system_requirements/index.md){target="_blank"}.  

### Upgrading HCL DX 9.0 to support RHEL 8.x or 9.x

- RHEL 8.x is a fully supported operation system for HCL DX 9.0. For more information, refer to [HCL Digital Experience 9.0 Detailed System Requirements](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0090264){target="_blank"}.

- RHEL 9.x falls into the [Other Configurations](../../../get_started/system_requirements/traditional/other_config.md){target="_blank"} category of the support statement. If you want to upgrade to RHEL 9.x, upgrade HCL DX to at least 9.5 CF209 or the latest available CF and the latest FixPack for IBM Application Server 9.0.5.x.  
