# Manually exporting your Theme via Practitioner Studio

   1. Go to Theme manager in Practitioner Studio.
   2. Find your theme in the list of themes.
   3. The export theme will be located in the rightmost tab in line with your theme.
       ![Export Theme](../../images/19export_theme.png)
   4. This will start downloading your theme into a {theme name}.paa. You can find it in the default download location of your browser. 
   5. To use this exported theme. Extract or uncompress the PAA then inside find inside webdav folder the zip file of your theme and then the xmls needed to deploy and undeploy the theme are inside xmlaccess folder.
  
## Sample file directory inside PAA

   ```
   📦Woodburn Insurance
    ┣ 📂components
    ┃ ┗ 📂Woodburn Insurance
    ┃ ┃ ┣ 📂config
    ┃ ┃ ┃ ┗ 📂includes
    ┃ ┃ ┃ ┃ ┗ 📜Woodburn Insurance_cfg.xml
    ┃ ┃ ┣ 📂content
    ┃ ┃ ┃ ┣ 📂webdav
    ┃ ┃ ┃ ┃ ┗ 📂themes
    ┃ ┃ ┃ ┃ ┃ ┗ 📜Woodburn Insurance.zip
    ┃ ┃ ┃ ┗ 📂xmlaccess
    ┃ ┃ ┃ ┃ ┣ 📂install
    ┃ ┃ ┃ ┃ ┃ ┗ 📜installTheme.xml
    ┃ ┃ ┃ ┃ ┗ 📂uninstall
    ┃ ┃ ┃ ┃ ┃ ┗ 📜uninstallTheme.xml
    ┃ ┃ ┗ 📂version
    ┃ ┃ ┃ ┣ 📜Woodburn Insurance.component
    ┃ ┃ ┃ ┗ 📜readme.txt
    ┗ 📜sdd.xml
   ```

### Main area of focus

   The main area of focus when using this kind of exported theme is inside the content folder.

   ```
   ┃ ┃ ┣ 📂content
   ┃ ┃ ┃ ┣ 📂webdav
   ┃ ┃ ┃ ┃ ┗ 📂themes
   ┃ ┃ ┃ ┃ ┃ ┗ 📜Woodburn Insurance.zip
   ┃ ┃ ┃ ┗ 📂xmlaccess
   ┃ ┃ ┃ ┃ ┣ 📂install
   ┃ ┃ ┃ ┃ ┃ ┗ 📜installTheme.xml
   ┃ ┃ ┃ ┃ ┗ 📂uninstall
   ┃ ┃ ┃ ┃ ┃ ┗ 📜uninstallTheme.xml
   ```

   1. The zip file inside the themes folder is the source code of your theme.
      - You can extract the zip file to edit your theme.
   2. The xmlaccess folder contains the xml payload for deploying and undeploying your theme.
      - installTheme.xml is the xml used when deploying your theme through dxclient.
      - uninstallTheme.xml is the xml used when undeploying your theme through dxclient.

???+ info "Related information"
      - [Exporting your theme from your system](export_theme.md)
      - [How to deploy Theme](import_theme.md)
