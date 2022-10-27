# Woodburn Insurance sample site

!!!note "Download Sample"
     The WoodBurn Insurance sample site is available for download via this [link](https://github.com/HCL-TECH-SOFTWARE/DX-Modules-and-ScriptApps/tree/main/showcase-sites/WoodBurnInsurance)

To try out and load the site into your DX instance and share/collaborate updates amongst teams, you may follow this guide:
  
  - [Import and Export of DX Sites](../../site_integration/import_export_site)


The useful integration techniques used to build the showcase site are detailed in the following links:

  - [Code Splitting](../../site_integration/code_splitting.md):

    Code splitting is useful in controlling resource load sizes and encourage parallel downloads from the browser. 

  - [Use of Cookies](../../site_integration/use_of_cookies.md):
    
    Cookies are used to represent the  state of the current user.  

  - [Styling (CSS and SCSS)](../../site_integration/styling_css_and_scss.md):
    
    Shared and component-specific styling are used in the sample site and bundled for optimal loading.

Multiple ReactJS applications bundled as DX Script Apps are included in this sample site. They are organized and configured to share dependencies bundled separately as a DX Module.
  - Login Script Application: A Script Application for user authentication.

  - Enrollment Wizard Script Application: Enables users to enroll an insurance.

  - Report Claim Issue: For authenticated users to submit a report of claim issues.

  - Dashboard - User Insurance: List of user's enrolled insurance.

  - Dashboard - Header User Details: Dashboard that shows the authenticated user details.

  - Dashboard - Your Claims: Information on a user's insurance claims.

  - Dashboard - Your Issues: User's reported claim issues.
