# Converting HCL Digital Experience portlets \(z/OS\)

You can convert your basic HCL Digital Experience portlets to the standard portlet API.

Follow these steps:

1.  Select the customization panel for **Portal Migration**.
2.  Select option 3:

    ```
    Select this option to convert the portlet settings and portlet data 
    of an HCL API portlet to portlet preferences of a standard portlet. 
    ```

    The **Portlet Conversion** panel is displayed. It provides the following description and options:

    ```
    Portlet conversion                                                       
                                                                             
      Use this dialog to convert the portlet settings and portlet data of an 
      HCL API portlet to the portlet preferences of a standard portlet.      
      Specify an option and press ENTER.                                     
                                                                             
      1  Convert the HCL API Web Content Viewer portlet.  Select this option 
         to convert portlet settings and portlet data of instances of the    
         HCL API Web Content Viewer portlet to the JSR 286 Web Content Viewer
         portlet.                                                            
                                                                             
      2  Convert any HCL API portlet.  Select this option to convert portlet 
         settings and portlet data of instances of any HCL API portlet to    
         portlet preferences of a standard portlet.  
    ```

3.  Select option 1: Convert portlet settings and data for Web Content Viewer portlet from HCL to standard format. The examples in the following use the Web Content Viewer portlet.
4.  Specify the following information for the provided variables.

    ```
    Convert portlet settings and data for Web Content Viewer portlet from HCL to
    standard format                                                             
                                                                                
      Specify the following portlet information to convert an HCL portlet       
      settings and data to a standard portlet. Then press ENTER to continue.    
                                                                                
      HCL portlet name.....:  Web Content Viewer                                
                                                                                
      Standard portlet name:  Web Content Viewer (JSR 286)                      
                                                                                
      Pages to convert (leave blank to convert all pages)..:                    
         ConversionTest                                                         
                                                                                
      URL to the Portal XML Access servlet.................:   xyz 
    ```

5.  Return to the **Portlet Conversion** configuration panel.
6.  Select option 2.
7.  Specify the following information for the provided variables:

    ```
    Convert portlet settings and data from HCL to standard format                 
                                                                                    
        Specify the following portlet information to convert an HCL portlet         
        settings and data to a standard portlet. Then press ENTER to continue.      
                                                                                    
        HCL portlet information:                                                    
          Web application UID:  wcm.contentviewer.1001                              
          Portlet name.......:  Web Content Viewer                                  
                                                                                    
        Standard portlet information:                                               
          Web application UID:  ilwwcm-localrenderingportlet-jsr.war.webmod         
          Portlet name.......:  Web Content Viewer (JSR 286)                        
                                                                                    
        Pages to convert (leave blank to convert all pages)..:                      
           ConversionTest                                                           
                                                                                    
                                                                                    
        Converter class to use...............................:                      
           com.ibm.workplace.wcm.app.ui.portlet.standard.conversion.Legacy2StandardL
    RPConverter                                                                     
        Converter classpath..................................:                      
           ${Prereq.wcmHome}/wcm/shared/app/ilwwcm-localrendering-jsr-common.jar    
                                                                                    
        URL to the Portal XML Access servlet.................:          
    ```

8.  Save your conversion updates.


