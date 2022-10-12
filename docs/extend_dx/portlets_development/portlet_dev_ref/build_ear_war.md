# Building .ear and .war files

You can run a configengine task to build an .ear file or a .war file from an expanded directory.

Run the following tasks to build .ear and .war files:

1.  Run the following task to build a .war file:

    -   AIX® amd Linux™: `./ConfigEngine.sh build-war-file -Dsource.war.directory=directory_path.war -Doutput.war=directory_path.war`
    -   Windows™: `ConfigEngine.bat build-war-file -Dsource.war.directory=directory_path.war -Doutput.war=directory_path.war`

    where the following parameters are defined as:

    -   source.war.directory: The location of the expanded or customized war file.
    -   output.war: The location of the generated war file.
    The following information is an example of the build-war-file task:

    ```
    Extract the bannerad.war file to a directory
    	cd /tmp/files
    	jar -xvf /opt/IBM/WebSphere/PortalServer/bp/wp.bp.bannerad/installableApps/bannerad.war
    
    Make an update to a file inside /tmp/files/WEB-INF
    
    Build a new war from the expanded directory
    	./ConfigEngine.sh build-war-file -Dsource.war.directory=/tmp/files/ -Doutput.war=/tmp/wars/bannerad.war
    
    You can now install the updated portlet into HCL Digital Experience
    	/tmp/wars/bannerad.war
    ```

2.  Run the following task to build an .ear file:

    -   AIX and Linux: `./ConfigEngine.sh build-ear-file -Dsource.war.directory=directory_path.war -Doutput.ear=directory_path.ear -Dapp.name=app_name -Dwar.name=war_name.war -Ddisp.name="display_name"`
    -   Windows: `ConfigEngine.bat build-ear-file -Dsource.war.directory=directory_path.war -Doutput.ear=directory_path.ear -Dapp.name=app_name -Dwar.name=war_name.war -Ddisp.name="display_name"`

    Where the following parameters are defined as:

    -   source.war.directory: The location of the expanded or customized war file.
    -   output.ear: The location of the generated ear file.
    -   app.name: The application name substituted in the application.xml template.
    -   war.name: The war name substituted in the application.xml and ibm-application-runtime.props files.
    -   disp.name: The display name substituted in the application.xml template.
    
    The following information is an example of the build-ear-file task:

    ```
    Make a local copy of the expanded PA_ThemesAndSkinsMgr.ear file (which contains an expanded 
    ThemesAndSkinsMgr.war file inside of it)
    	cd /tmp/files
    	cp -R /opt/IBM/WebSphere/wp_profile/installedApps/Cell_name/PA_ThemesAndSkinsMgr.ear/* /tmp/files
    
    Validate the parameters to use by looking at the application.xml file
    	/tmp/files/META-INF/application.xml
    
    Build a new ear from the expanded directory
    	./ConfigEngine.sh build-ear-file -Dsource.war.directory="/tmp/files/ThemesAndSkinsMgr.war" 
      -Doutput.ear="/tmp/ears/PA_ThemesAndSkinsMgr.ear" -Dapp.name="PA_ThemesAndSkinsMgr" 
      -Dwar.name="ThemesAndSkinsManager.war" -Ddisp.name="ThemesAndSkinsMgr_war"
    
    You can now install an enterprise application into the WebSphere Integrated Solutions Console.
    	/tmp/ears/PA_ThemesAndSkinsMgr.ear
    ```



