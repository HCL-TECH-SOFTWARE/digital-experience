# How to identify the JSP file that renders a specific theme segment

## Applies to

> HCL Digital Experience v9.5 and Later

## Introduction

Enable the inline debug utility in HCL Digital Experience (DX) to visually map page segments to the underlying JavaServer Pages (JSP) files when troubleshooting layout or display issues. This article describes how to identify the exact JSP that renders a specific theme segment.

## Instructions

To identify the JSP file, perform the following steps:

!!!tip
    Use a separate browser window or session to manage administrative settings to avoid navigation issues caused by visual debug highlights.

1. Log in to HCL DX as an administrator.
2. Navigate to **Applications menu > Themes > Analyzer > Utilities > Control Center**.
3. Locate the **Dynamic Content Spot (Inline) Debug is turned off** setting and select **Click to turn on**.
4. Open the HCL DX page to view the highlighted theme segments and the corresponding JSP paths.

!!!note

    - The path and file name of the JSP that renders a specific segment are displayed in the upper-left corner of the colored block.
    - The debug setting is temporary and resets automatically when HCL DX restarts.