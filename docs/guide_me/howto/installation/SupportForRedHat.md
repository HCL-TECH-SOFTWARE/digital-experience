# Does HCL DX v8.5 or v9.0 support RHEL v8 or v9?

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

Does HCL Digital Experience (DX) v8.5/v9.0 and IBM WebSphere Application Server (WASND) v8.5 / v9.0.5 supports Red Hat Linux (RHEL) v8 or v9?

Does HCL support the Red Hat LEAPP process for Digital Experience (in-situ upgrade of the RedHat OS from v7 to v Next)?

## Instructions

HCL Digital Experience v8.5 does not support Red Hat version 8 or 9.
You must be on HCL Digital Experience version 9.0 or later to use Red Hat 8.
You must be on HCL Digital Experience version 9.5 CF209 or later to use Red Hat 9.

See [Supported configurations](https://help.hcl-software.com/digital-experience/9.5/CF224/get_started/system_requirements/traditional/supported_config/) for details.

**The following steps can be used to upgrade the environment:**

**For HCL DX v8.5:**

1. Upgrade from Portal Server v8.5.0.0.16 / WAS v8.5.5.21 to DX v9.5 CF209(latest available CF) / WAS v9.0.5.latest

2. Then upgrade from RHEL v7.9 to RHEL 9.x.

Please check the below link and note that Red Hat 8 or 9 on DX 8.5 is not supported. It can covered under Other Configurations in our support statement.

[Other Configurations](https://help.hcl-software.com/digital-experience/9.5/latest/get_started/software_support/)

For more details -> [HCL Digital Experience 8.5 Detailed System Requirements](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0089871#OS)

**For HCL DX v9.0:**

Please check the below link and note that Red Hat Enterprise Linux (RHEL) 8 is listed as a Fully Supported operation system for HCL DX 9.0.

[HCL Digital Experience 9.0 Detailed System Requirements](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0090264)

RHEL 9 would fall into our Other Configurations category of our Support Statement as found here:

[Other Configurations](https://help.hcl-software.com/digital-experience/9.5/latest/get_started/software_support/)

If you want to upgrade to RHEL9 then you need to upgrade the HCL DX to min HCL DX9.5 CF209 or the latest available CF and the latest FP for WASND 9.0.5.x.
