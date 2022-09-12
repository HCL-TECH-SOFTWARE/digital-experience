# Supporting multiple profiles

When you install HCL Digital Experience, a default configuration profile \(wp\_profile\) is created . You can now create and maintain multiple profiles to create multiple independent portal instances; to create new profiles, and delete the old to recover from configuration problems; to create custom profiles to easily expand your cluster's capacity; or to update a Deployment Manager profile to handle portal servers without manual preparation steps. To support multiple profiles you must first prepare your system, create profiles, run configuration tasks on the profiles, and then maintain the profiles if you install maintenance packages. You might also need to update the configuration archive or delete a profile that is no longer required.

Before you create new profiles, you must delete any existing search collections.

With the multiple profile feature, you can install HCL Digital Experience once and then create multiple profile instances based on the original installation. You can create additional profiles immediately after installation if you want each profile instance to use the unmodified version of the HCL Portal configuration. If you want to create a customized environment that you want to use as the basis for the additional profiles, you can create the additional profiles after you install and configure HCL Portal.

**Tip:** Release data cannot be shared between multiple profiles. Each profile must have its own database for release.

-   **[Preparing the system for multiple profile support](../install/prep_sys_mlt_prof.md)**  
HCL Digital Experience provides several profile templates that you can use to create a new HCL Portal profile. To use these profile templates, you must first run the enable-profiles task to configure the profile templates, register these templates with IBM WebSphere Application Server, and save the current HCL Portal baseline configuration. The baseline configuration is provided in the form of a configuration archive \(CAR\) that is created by exporting the contents of an existing profile. You can create the CAR any time, such as immediately after the initial installation or after the original portal is fully configured with security, database, basic application deployment, and server tuning.
-   **[Creating a Portal application server profile](../install/crt_prof.md)**  
You can create Portal profiles on a single Portal installation with HCL Digital Experience. Additional profiles are created by using a profile template. Profile templates must be regenerated after you install a fix pack. Profile templates must be generated only on the original wp\_profile.
-   **[Maintaining multiple profiles](../install/maint_prof.md)**  
If you created additional HCL Digital Experience profiles with HCL Portal, the profiles now share the product installed files \(binary files\). Therefore, any updates must be coordinated with the users of the various profiles because these updates can affect the runtime behavior of each profile. You must stop all servers across all profiles that share the set of binary files while the updates are occurring. Similarly, if the product binary files are shared across several systems that support their own portal profiles, all HCL Digital Experience instances across these servers must be stopped during the update process. It is also probable that update to each profile is needed, especially in the case of product maintenance application. Updates to the profiles might require that application server instance is restarted in those profiles. In this case, user traffic can be prevented to these instances during the maintenance window by temporarily removing the target servers from any web servers or load balancer.
-   **[Deleting a profile](../install/del_prof.md)**  
If your business needs change, you can delete a profile from the profiles that you created.


