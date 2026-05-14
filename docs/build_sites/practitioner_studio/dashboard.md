# Dashboard

The Practitioner Dashboard provides a modern interface with widgets, action buttons, and quick links that help you complete common tasks and access information efficiently.

The dashboard includes the following widgets:

- **Status monitoring** – Shows items that require approval or attention, including expiring content.
- **Recent content items** – Provides quick access to your latest work.
- **Personalization rules (PZN)** – Helps you manage user experiences.

The dashboard also includes an interactive banner that displays dynamic announcements, tips, and tutorials. These can include notifications about new CF releases and links to helpful tutorials.

![Practitioner Dashboard](../../assets/HCL_Practitioner_dashboard.png)

## Explore Digital Experience info hub

The dashboard includes an Explore Digital Experience info hub that provides quick access to tutorials and documentation.

This section features interactive cards with resources for common tasks, such as:

- **Create your first site** – Set up content, add assets, and customize pages to meet your needs.
- **Upload media and files** – Upload images, videos, and files in Digital Assets Manager.
- **Manage themes** – Create, customize, and manage themes to control the visual appearance and user experience of your DX sites, including layout, styling, and branding.
- **Use search to get started** – Use the search bar to quickly find pages, documents, assets, or settings.

Each card includes the following options:

- **Watch HCLSoftware U tutorial** – View video demonstrations.
- **Read documentation** – Access detailed written guidance.

You can collapse or expand the info hub by using the **Collapse info hub** toggle to maximize your workspace.

## Welcome header

The Practitioner Dashboard includes a personalized welcome header that greets you with "Welcome to your experience," followed by your username.

Below the greeting, the header displays "Logged in as" with your username and profile icon to indicate the active session.

## Quick links

The dashboard provides quick access to common tasks through the following shortcuts:

- Manage assets – Upload, organize, and manage digital files in the Digital Assets interface.  
- Create report – Create and customize reports to filter and analyze content based on your needs.  
- Manage themes – Create, customize, and update themes to maintain consistent branding and design.  
- Create site templates – Create templates for a full site or a site section to streamline development.  

![Quick links](../../assets/HCL_Practitioner_dashboard_quick_Links.png)

## Monitor

The Monitor section provides real-time visibility into content status and activity across three key metrics. Each metric includes a customizable time filter.

- Expiring – Shows the number of content items that will expire within a selected timeframe. Use the dropdown to filter by Today, Tomorrow, Within 7 days, Within 30 days, Within 90 days, or Within 365 days. This helps you proactively manage content that requires renewal or updates.
- Published – Shows the number of content items published within a selected timeframe. Use the dropdown to filter by Today, Yesterday, Within 7 days, Within 30 days, Within 90 days, or Within 365 days to track publishing activity.
- Drafts – Shows recently saved draft content within a selected timeframe. Use the dropdown to filter by Today, Yesterday, Within 7 days, Within 30 days, Within 90 days, or Within 365 days. This helps you quickly find and resume in-progress work.

!!! note
    For Expiring, "Within 7 days" includes today and the next 6 days (future dates).
    For Published and Drafts, "Within 7 days" includes today and the previous 6 days (past dates).

![Monitor section](../../assets/HCL_Practitioner_dashboard_monitor_section.png)

## Recent content and project

The **Recent Content and Project** widget shows your most recently modified content items and projects.

- Click the **eye icon** on a content item to view it directly.  
- Use the **Go to Authoring** link in the top-right corner for quick access to the full Web Content management interface.

![Recent content](../../assets/HCL_Practitioner_dashboard_Recent_Content.png)

!!! note
    - This widget shows only the most recent 100 content items.
    - A content item appears in Recent Content only when you, the logged-in user, modified it. Changes made by other users do not appear.


## Personalization rules

The **Personalization Rules** widget lets you monitor personalization (PZN) rules that customize user experiences on your website.

The widget shows each rule with relevant details, including:

- **Rule name**  
- **Type**  
- **Author**  
- **Modified date**

Click the **Go to Personalization** link to open the full Personalization page for complete management and configuration of your rules.

![Personalization Rules](../../assets/HCL_Practitioner_dashboard_Personalization_Rules.png)

!!! note
    This widget shows only four rule types:

    - Visibility Rule  
    - Profiler  
    - Select Action  
    - Binding Rules

## Widget configuration parameters

The Practitioner Dashboard lets you customize which widgets appear on your dashboard.

To change these settings:

1. Navigate to **Admin** > **Site Management** > **Pages** > **Content Root** > **Practitioner Studio** > **Dashboard**.  
2. Click the **pencil icon** on the dashboard page.  
3. Click **Edit Shared Settings** to enable or disable widgets using the configuration parameters.

### Configuration parameters

| Parameter name | Type | Default value | Description |
|----------------|------|---------------|------------|
| **RECENT_CONTENT_WIDGET** | Boolean (checkbox) | true | Shows or hides the Recent Content widget, which displays recently accessed or modified content items. |
| **RECENT_STATUS_WIDGET** | Boolean (checkbox) | true | Shows or hides the Status Monitor widget, which displays system health and alerts. |
| **RECENT_PZN_WIDGET** | Boolean (checkbox) | true | Shows or hides the **Personalization** widget, which displays recent PZN activities and campaigns. |

## Main Portal Configuration

### Toggle Practitioner Dashboard with ConfigEngine

Use the **`enable-practitioner-dashboard`** and **`disable-practitioner-dashboard`** ConfigEngine targets to switch between the new React-based dashboard and the classic JSP home page.

#### Enable Practitioner Dashboard – Modern React Dashboard

```bash
ConfigEngine/ConfigEngine.sh enable-practitioner-dashboard -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin
```

#### Disable Practitioner Dashboard – Classic JSP Home Page

```bash
ConfigEngine/ConfigEngine.sh disable-practitioner-dashboard -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin
```

!!! note
    - The Practitioner Dashboard is enabled by default and shows the React-based modern dashboard.  
    - You can disable it during deployment if preferred. When disabled, the classic JSP home page is displayed instead.
    - You cannot disable the dashboard in DX Compose.

## Virtual portal configuration

To support the modern (React-based) Practitioner Studio in new virtual portals, the existing **VirtualPortal.zip** asset includes XML files for both modern and classic dashboard configurations.

You can select the XML file that matches your dashboard preference. This ensures existing virtual portals remain unchanged.

### XML File Selection (Default: Modern)

**Asset name:** VirtualPortal.zip

The VirtualPortal.zip asset contains XML files for both modern and classic dashboard configurations. By default, the shared setting uses the modern Practitioner Studio configuration. To use the classic (JSP-based) home page, add the `-preCF235` suffix to the XML file name.

**Default (Modern PS)**

Example:

```bash
# XML script to create virtual portal content tree
WebSphere:assetname=VirtualPortal.zip:InitVirtualContentPortalV9.5NoWoodburn.xml
```

**To use Classic (pre-CF235)**

Example:

```bash
# XML script to create virtual portal content tree
WebSphere:assetname=VirtualPortal.zip:InitVirtualContentPortalV9.5NoWoodburn-preCF235.xml
```
**Key points**

- The **VirtualPortal.zip** file contains all XML configurations.  
- The `-preCF235` suffix in the XML filename indicates the classic dashboard version.  
- Switch between dashboard versions by modifying the XML file reference in the shared setting.  
- Existing virtual portals remain unchanged.





