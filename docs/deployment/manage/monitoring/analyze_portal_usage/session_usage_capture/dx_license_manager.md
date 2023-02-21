# DX License Manager

 This section documents on notification to customers regarding what settings to use for the Cumulative Fixes related to the DX License Manager, in what releases you should not deploy it, from when you should deploy this container and also settings that you need to use for non-production and production environment.

 From DX 9.5 Container Update 204 through 206 releases, new configurations are introduced for later deployment and should not be enabled with these releases. Instructions to do so will be provided at a future date. 

 ## Helm chart configurations from CF204 to CF206 for License Manager application
 
 In custom-values.yaml, we have configuration for License Manager application in many sections. For CF204 until CF206, you should not deploy this application and so, only configuration which you need to verify is related to application deployment flag which is mentioned below.

 To verify if the License Manager application is NOT enabled:

 ```
 applications:
   # Deploys License Manager
   licenseManager: false
 ```

 ## Helm Chart Configurations from CF207 for License Manager application

 The Helm chart provides License Manager configurations in `applications` section and image `tags` and `names` sections. It also provides `licenseManager` section under the `configuration`, `security`, `volumes` and `resources` section.

 ### Example for currently available configuration

 You can use the following syntax in your `custom-values.yaml` file to adjust the License Manager settings:

 **Enable License Manager Deployment**

 ```
 applications:
   # Deploys License Manager
   licenseManager: true
 ```

 !!! note
     Starting from HCL Digital Experience 9.5 CF207, it is mandatory to enable deployment of License Manager application with `licenseManager: true`.

 ## Helm Chart Configurations from CF208 for License Manager application

 Starting HCL Digital Experience 9.5 CF208, additional configuration to support local license manager is defined in helm chart.

