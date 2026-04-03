# Practitioner Dashboard

## Overview

The Practitioner Dashboard provides a modernized interface with widgets, action buttons, and quick links to help you access common tasks and information efficiently. The dashboard includes several key widgets: Status monitoring for items that need approval or addressing, including expiring content; Recent Content Items for quick access to your latest work; and Personalization Rules (PZN) for managing user experiences. 

Additionally, the dashboard features an Interactive Banner that displays dynamic announcements, tips, and tutorials, such as notifications about new CF releases and helpful tutorials.

![Practitioner dashboard](../../assets/HCL_Practitioner_dashboard.png)

## Explore Digital Experience Info Hub

The dashboard includes an "Explore Digital Experience" info hub section that provides quick access to helpful tutorials and documentation. This section features interactive cards with video tutorials and documentation links for common tasks such as:

- **Create your first site** - Set up content, add assets, and customize your pages to fit your needs
- **Upload media & files** - Get started by uploading images, videos, and files in Digital Assets Manager
- **Manage theme** - Create, customize, and manage themes to control the visual appearance and user experience of your DX sites, including layout, styling, and branding elements
- **Open search to Get Started** - Use the search bar to quickly find pages, documents, assets, or settings

Each card offers two options: "Watch HCLSoftware U tutorial" for video demonstrations and "Read Documentation" for detailed written guides.

The info hub section can be collapsed or expanded using the "Collapse info hub" toggle button to maximize your workspace.

## Welcome Header

The Practitioner Dashboard features a personalized welcome header that greets users with "Welcome to your experience," followed by their username. Below the greeting, it displays "Logged in as" with the current user's username and profile icon, providing immediate confirmation of the active user session.

## Quick Links

The dashboard provides quick access to frequently used functions through convenient shortcuts:

- **Manage assets** - Upload, organize, and manage all digital files in one place through the Digital Assets interface.
- **Create report** - Create and customize reporting criteria, allowing users to filter and analyze content based on specific needs.
- **Manage themes** - Easily create, customize, and update themes for projects to maintain consistent branding and design.
- **Create site templates** - Create site builder templates for either a full website or a section of a website to streamline site development.

![Quick Links](../../assets/HCL_Practitioner_dashboard_quick_Links.png)

## Monitor

The Monitor section provides real-time visibility into content status and activity tracking across three key metrics, each with customizable timeframe filters:

- **Expiring** - Displays the count of content items that will expire within a selected timeframe. Use the dropdown to filter by Today, Tomorrow, Within 7 days, Within 30 days, Within 90 days, or Within 365 days, helping you proactively address content that requires renewal or updates.
- **Published** - Shows the number of content items published within a customizable timeframe. Use the dropdown to filter by Today, Yesterday, Within 7 days, Within 30 days, Within 90 days, or Within 365 days to track publishing activity and productivity.
- **Drafts** - Indicates recently saved draft content items within a selected timeframe. Use the dropdown to filter by Today, yesterday, Within 7 days, Within 30 days, Within 90 days, or Within 365 days, making it easy to locate and resume work on in-progress content.

!!! note 
    - For **Expiring**: "Within 7 days" means from today to the next 6 days (future dates).
    - For **Published** and **Drafts**: "Within 7 days" means from today to the previous 6 days (past dates).

![Monitor Section](../../assets/HCL_Practitioner_dashboard_monitor_section.png)

## Recent Content and Project

The Recent Content and Project widget provides a comprehensive view of your most recently modified content items and projects. You can click on the eye icon of the content items to view the content directly. A quick link to "Go to Authoring" is available in the top-right corner for quick access to the full Web Content management interface.

![Recent Content](../../assets/HCL_Practitioner_dashboard_Recent_Content.png)

!!! note 
    - This widget displays only the most recent 100 content items.
    - Content items will appear in recent content only when the logged-in user has modified them, not when modified by other users.


## Personalization Rules

The Personalization Rules widget provides quick access to monitor personalization (PZN) rules that customize user experiences on your website. The widget displays personalization rules with relevant information including the rule name, type, author and modified date. Click on the "Go to Personalization" link to navigate to the full personalization page for comprehensive management and configuration of your personalization rules.

![Personalization Rules](../../assets/HCL_Practitioner_dashboard_Personalization_Rules.png)

!!! note 
    This widget displays only four rule types: Visibility Rule, Profiler, Select Action, and Binding Rules.

## Widget Configuration Parameters

The Practitioner Dashboard provides configurable widget preferences that allow you to customize which widgets appear on your dashboard. To access these preferences, navigate to **Admin** > **Site Management** > **Pages** > **Content Root** > **Practitioner Studio** > **Dashboard**, click on the pencil icon of the dashboard page, and then click on **Edit Shared Settings** to enable or disable widgets through the configuration parameters.

### Configuration Parameters

| Parameter Name | Type | Default Value | Description |
|---|---|---|---|
| RECENT_CONTENT_WIDGET | Boolean (checkbox) | true | Controls visibility of the Recent Content widget displaying recently accessed/modified content items |
| RECENT_STATUS_WIDGET | Boolean (checkbox) | true | Controls visibility of the Status Monitor widget showing system health and alerts |
| RECENT_PZN_WIDGET | Boolean (checkbox) | true | Controls visibility of the Personalization widget displaying recent PZN activities and campaigns |

## Main Portal Configuration

### Toggle Practitioner Dashboard by ConfigEngine

Use the `enable-practitioner-dashboard` and `disable-practitioner-dashboard` ConfigEngine targets to toggle between the new React-based dashboard and the old JSP-based home page.

**Enable Practitioner Dashboard - Modern React Dashboard**

```
ConfigEngine/ConfigEngine.sh enable-practitioner-dashboard -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin
```

**Disable Practitioner Dashboard - Classic JSP Home Page**

```
ConfigEngine/ConfigEngine.sh disable-practitioner-dashboard -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin
```

!!! note 
    Practitioner Dashboard is enabled by default and renders the React-based modern dashboard for users. If preferred, you can disable this feature during deployment so it remains unavailable. When disabled, the JSP-based existing home page is rendered instead.

## Virtual Portal Configuration

To support the Modern (React-based) Practitioner Studio in newly created Virtual Portals, the existing VirtualPortal.zip asset is updated to include XML files for both Modern and Classic dashboard configurations. Users can select the appropriate XML file based on their dashboard preference. This approach ensures existing VPs and their current behavior remain untouched.

### XML File Selection (Default: Modern)

**Asset Name:** VirtualPortal.zip

The VirtualPortal.zip asset contains all XML files for both Modern and Classic dashboard configurations. The default shared setting uses the Modern PS configuration. To use the Classic (JSP-based) home page, users need to specify the `-preCF235` suffix for the XML file.

**Default (Modern PS):**

Example:

```
Xml script to create virtual portal content tree:
WebSphere:assetname=VirtualPortal.zip:InitVirtualContentPortalV9.5NoWoodburn.xml
```

**To use Classic (pre-CF235):**

Example:

```
Xml script to create virtual portal content tree:
WebSphere:assetname=VirtualPortal.zip:InitVirtualContentPortalV9.5NoWoodburn-preCF235.xml
```

**Key Points:**

- The VirtualPortal.zip file is maintained containing all XML configurations
- The `-preCF235` suffix in the XML filename indicates the classic dashboard version
- Users can switch between dashboard versions by modifying the XML file reference in the shared setting
- Existing VPs remain unchanged





