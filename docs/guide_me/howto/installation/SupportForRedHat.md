# How to run HCL Digital Experience v8.5 or v9.0 on Red Hat Linux (RHEL) v8 or v9?

## Applies to

> HCL Digital Experience v8.5 and v9.0

## Introduction

This article describe instructions to run HCL Digital Experience on Red Hat Linux (RHEL) v8 or v9.  

## Instructions

HCL Digital Experience v8.5 does not support Red Hat version 8.x or 9.x.  
You must be on HCL Digital Experience version 9.0 or later to use Red Hat v8.  
You must be on HCL Digital Experience version 9.5 Cumulative Fix (CF) 209 or later to use Red Hat 9.  

See [Supported configurations](https://help.hcl-software.com/digital-experience/9.5/latest/get_started/system_requirements/traditional/supported_config/) for details.  

### Upgrade HCL Digital Experience v8.5 to support RHEL v8.x or v9.x

1. Upgrade from Portal Server v8.5.0.x / WAS v8.5.5.x to DX v9.5 (latest available CF) / IBM Application Server v9.0.5.latest  

2. Then upgrade RHEL to v8.x or v9.x.  

Please check the below link and note that Red Hat 8 or 9 on DX 8.5 is not supported. It is covered under [Other Configurations](https://help.hcl-software.com/digital-experience/9.5/latest/get_started/software_support/) in our support statement.  

For more details please review [HCL Digital Experience 8.5 Detailed System Requirements](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0089871#OS)  

### Upgrade HCL Digital Experience v9.0 to support RHEL v8.x or v9.x

Please check the below link and note that Red Hat Enterprise Linux (RHEL) 8 is listed as a Fully Supported operation system for HCL Digital Experience v9.0.  

[HCL Digital Experience 9.0 Detailed System Requirements](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0090264)  

RHEL v9 falls into the [Other Configurations](https://help.hcl-software.com/digital-experience/9.5/latest/get_started/software_support/) category of the support statement.  

If you want to upgrade to RHEL v9.x then you need to upgrade HCL Digital Experience at minimum to version 9.5 CF209 or the latest available CF and the latest FixPack for IBM Application Server v9.0.5.x.  
