# Combined Cumulative Fix \(CF\) Installation

The Combined Cumulative Fix is a package of HCL Digital Experience fixes. Read the instructions to learn how to apply or roll back a combined cumulative fix.

## About Version 9.5 Cumulative Fixes

The following instruction links are for HCL Digital Experience 9.5 CF17 and higher.

These instructions can be applied on an HCL Digital Experience system running either 8.5 or 9.0. CF17 is used as a prerequisite fix in order for users to move up to 9.5 level.

**Video**: [HCL Digital Experience - Installing HCL Portal 9.5 CF18](https://youtu.be/RUjDkVAR_zM)

**Note:** Each release of a maintenance package is included in your HCL Digital Experience offering.

## Overview

Applying the cumulative fix is a multi-step process. You must first update the product files using IBM Installation Manager, and then you must use the Portal ConfigEngine tool to apply the changes to each profile in your system. The update is not complete until you have performed both steps!

Likewise, to roll back a fix, you must first use IBM Installation Manager to restore the older product files and then use ConfigEngine to apply the rollback to each profile.

The procedures below describe these steps in detail.

Go to Installing the HCL Digital Experience software documentation to install according to your operating system.

## What's new

1.  For a list of the Fixes which have gone into each CF, go to the [List of software fixes](../../9.5/overview/soft_fixes95.html) section.
2.  Effective in 8.5 CF08, the update and rollback processes have been streamlined for easier customer application. The previous CF instructions detailing "PRE-APPLY-FIX" and "APPLY-FIX" upgrade commands have now been integrated into the single `applyCF` command. Correspondingly, the rollback instructions for "PRE-ROLLBACK-FIX" and "ROLLBACK-FIX" have been integrated into the single "rollbackCF" command.
3.  To assist you with your upgrade, HCL is now providing a Health Checker tool that you can use to validate your Portal installation before applying a cumulative fix. Simply execute this tool on the target system and review the report that is generated to see if there are any issues you need to resolve before installing the update. See the *Health Checker* in this topic directory or the README text in the Combined Cumulative Fix ZIP file.
4.  The HCL Script Application was made available as V1.3 and earlier by the catalog. It was developed further and included with Portal Version 8.5 CF09 and later, then also renamed to "Script Application" for Portal 8.5 CF11. When customers have the old HCL Script Application catalog version 1.3 AND then install CF09 or later, the security settings need to be obtained BEFORE installing the CF. The detailed information can be found under the first optional step of the procedure in [The Script Application security overview](../script-portlet/sp_security_upgrade.html) section in the 8.5 documentation.
5.  The Ephox EditLive! Java based Rich Text Editor has been deprecated as of CF11 and replaced by Textbox.io. More details about CF11 can found in [CF11](../overview/new_cf11.html) topic page in the Version 8.5 documentation.
6.  Due to security vulnerabilities in the Apache Axis library \(JAR file\), the "axis.jar" will be removed from the HCL Portal class path effective in CF12. For inquiries, go to [HCL Software Support](https://support.hcltechsw.com/csm) page.
7.  Portal Version 8.5 CF12 introduces support for JDK8 in conjunction with WAS 8.5.5.10. This will also require WAS iFix PI67166 on top of WAS 8.5.5.10 \(scheduled for inclusion in WAS 8.5.5.11.\)
8.  Support for IBM Rich Media Edition \(RME\) has been removed effective with HCL Portal and Web Content Manager Version 8.5 CF14, and will not be supported in future releases. For more information about this IBM Rich Media Edition support lifecycle announcement, go to [HCL Software Support](https://support.hcltechsw.com/csm) page.
9.  Ephox EditLive! has been removed effective in Version 8.5 CF14 and is no longer supported. This change follows the steps taken above in Version 8.5 CF11 to deprecate Ephox EditLive! and replace it with Textbox.io as the new advanced rich text editor for HCL Web Content Manager. Customers that have manually installed and configured EditLive! as a Third Party editor option can continue to use EditLive! but will no longer be able to receive support and updates via HCL. Also effective with Version 8.5 CF14, the Textbox.io will support the following [web browsers/levels](https://docs.ephox.com/display/tbio/System+Requirements?_ga=2.91924954.1507673092.1497929717-1652925937.1497929717#SystemRequirements-browsers).
10. CF16 for Portal Versions 8.5 and 9.0 contain security fix PH01459 for CVE-2018-1736. It introduces a configurable white list for external hosts, which are allowed as redirects via the CategoryProfileUpdater Module. Server relative redirects are continuously working. Redirects to external hosts not specified in the white list are blocked. The white list is enabled per default, and needs to be filled in with appropriate values, if this functionality is used in your installation. For inquiries, go to [HCL Software Support](https://support.hcltechsw.com/csm) page.
11. CF16 for Portal Versions 8.5 and 9.0 changes the behavior of Cumulative Fix installation related to out of the box resources to address CVE-2018-1420. Prior to CF16, access control settings of out of the box resources were reset to their out of the box access control settings, overriding potential customizations. This has been changed such that the Cumulative Fix installation leaves the access control settings at their current values. A side effect of this change is, that out of the box resources introduced in a Cumulative Fix after the initial version of Portal Version 8.5 or Version 9.0 will not receive any access control settings, if CF16 or later is installed on top of a CF level prior to introduction of an out of the box resource. In such a case the resource will not have any access control configured, and will have to be set manually to your security requirements. See the HCL Digital Experience 8.5 documentation on [how to manage the access control](../admin-system/sec_ac_adm.html) and get an overview of [initial access control settings](../admin-system/init_acc_cntl_set.html).

