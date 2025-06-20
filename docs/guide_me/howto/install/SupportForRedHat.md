# How to run HCL Digital Experience 8.5 or 9.0 on Red Hat Linux 8.x or 9.x

## Applies to

> HCL Digital Experience v8.5 and v9.0

## Introduction

HCL Digital Experience (DX) 8.5 does not support Red Hat Linux (RHEL) versions 8.x or 9.x.
You must be on HCL DX 9.0 or later to use RHEL 8.x.  
You must be on HCL DX 9.5 Cumulative Fix (CF) 209 or later to use Red Hat 9.x.  

For more information, refer to [Supported configurations](../../../get_started/system_requirements/traditional/supported_config.md){target="_blank"}.

This article provides instructions on how to run HCL DX 8.5 and 9.0 on RHEL 8.x or 9.x.  

## Instructions

Refer to the following steps to run HCL DX 8.5 and 9.0 on RHEL 8.x or 9.x.

### Upgrade HCL Digital Experience v8.5 to support RHEL v8.x or v9.x

1. Upgrade from Portal Server v8.5.0.x / IBM WebSphere Application Server v8.5.5.x to DX v9.5 (latest available CF) / IBM Application Server v9.0.5.x (latest). For details, please check [A Step-by-Step Guide to Upgrading Portal from v8.5 to v9.5](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0079619){target="_blank"}.

2. Then [upgrade RHEL to v8.x or v9.x](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/upgrading_from_rhel_8_to_rhel_9/index){target="_blank"}.  

Please check the below link and note that Red Hat 8 or 9 on DX 8.5 is not supported. It is covered under [Other Configurations](../../../get_started/system_requirements/traditional/other_config.md){target="_blank"} in our support statement.  

For more details please review [HCL Digital Experience 8.5 Detailed System Requirements](../../../get_started/system_requirements/index.md){target="_blank"}  

### Upgrade HCL Digital Experience v9.0 to support RHEL v8.x or v9.x

Please check the below link and note that Red Hat Enterprise Linux (RHEL) 8 is listed as a Fully Supported operation system for HCL Digital Experience v9.0.  

[HCL Digital Experience 9.0 Detailed System Requirements](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0090264){target="_blank"}  

RHEL v9 falls into the [Other Configurations](../../../get_started/system_requirements/traditional/other_config.md){target="_blank"} category of the support statement.  

If you want to upgrade to RHEL v9.x then you need to upgrade HCL Digital Experience at minimum to version 9.5 CF209 or the latest available CF and the latest FixPack for IBM Application Server v9.0.5.x.  
