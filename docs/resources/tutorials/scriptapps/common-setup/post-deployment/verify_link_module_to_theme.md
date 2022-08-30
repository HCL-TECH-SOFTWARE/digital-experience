# Verify A Successful Deployment and Link a DX Module to a DX Theme

## Verify in WebSphere Application Server

To verify, login to the WebSphere console. Under the *Applications* tab, then the *Application Types* and then lastly in the *Business-level applications*, you can search for your application name in the table in the right-hand side.
   ![Upload to WAS](../../images/17WASUpload7.png)

## Verify In HCL DX and Link to Theme

To verify inside HCL Digital Experience:

   Click Theme button in Practitioner Studio Home Page
   ![Upload to WAS](../../images/18PSTheme.png)
   Click the Menu button at the upper left most part of the screen
   ![Upload to WAS](../../images/18PSThemeButton.png)
   Click the Manager Menu at the left side
   ![Upload to WAS](../../images/18PSManager.png)
   Click Pencil Button at the right side of the theme to be used (i.e. Portal 8.5)
   ![Upload to WAS](../../images/18EditPortalTheme.png)
   Go to profiles->profile_deferred_react.json then remove the 3 highlighted moduleIDs
   ![Upload to WAS](../../images/18removedefaultmodule.png)
   Add the new module (i.e. Reactv18r2). Click on the Save button (disc icon) in the upper right area.
   ![Upload to WAS](../../images/18addModuleReactv16r14.png)
   Click the Analyzer Menu then click the Examine modules by profile
   ![Upload to WAS](../../images/18PSAnalyzer.png)
   Navigate to Examine modules by profile and click the module used then click Next button
   ![Upload to WAS](../../images/18PSExamineModulesByProfile.png)
   Expand Modules and the module uploaded must be there (i.e. Reactv18r2). Note: there must be no warning icon in the uploaded module.
   ![Upload to WAS](../../images/18PSReactModule.png)
