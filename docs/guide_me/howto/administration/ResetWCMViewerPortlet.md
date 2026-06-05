# How to reset Web Content Viewer portlet to default state

## Applies to

> HCL Digital Experience 9.5

## Introduction

This document describes detailed steps to reset the WCM Web Content Viewer Portlet to the default state.

## Instructions

Please try the following steps first: 

1. Updating the portlet from the copy in installableApps

2. Running update-wcm task

3. Creating a copy/clone of the portlet and placed the copy on a page

If the above steps do not help. Collect a full XMLAccess export and database backup, then do the following steps:

1. Navigate to **Administration > Portlet Management > Portlets**

2. Search for 'Web Content Viewer'

3. Click on the configure portlet icon

4. Delete these preferences (if present)
   - SECTION_STATES
   - WCM_COMPONENT_IDR
   - WCM_CONTENT_CONTEXT_BEHAVIOUR
   - WCM_CONTENT_CONTEXT_IDR
   - LOCKED_WCM_CONFIG_KEY

5. Click OK
