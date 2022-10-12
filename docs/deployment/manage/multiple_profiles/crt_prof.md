# Creating a Portal application server profile

You can create Portal profiles on a single Portal installation with HCL Digital Experience. Additional profiles are created by using a profile template. Profile templates must be regenerated after you install a fix pack. Profile templates must be generated only on the original wp\_profile.

The additional profiles can be created by using the Config Wizard workflow accessible through the following URL:

```
`https://<HOSTNAME\>:10202/hcl/wizard/Wizard/default/ver=2.0/rparam=currentPage=com.ibm.wplc.config.wizard.panels.execute.SetCondition/rparam=workflow=Create%20Portal%20Profile%20Using%20Template/rparam=previousPage=com.ibm.wplc.config.wizard.panels.ActivityPanel`
```

Example:

```
`https://xyz.rtp.raleigh.ibm.com:10202/hcl/wizard/Wizard/default/ver=2.0/rparam=currentPage=com.ibm.wplc.config.wizard.panels.execute.SetCondition/rparam=workflow=Create%20Portal%20Profile%20Using%20Template/rparam=previousPage=com.ibm.wplc.config.wizard.panels.ActivityPanel`
```

!!!note
    Maintain a clean wp_profile profile to use when regenerating profile templates after you install a fix pack. Create additional profiles such as wp_profile_2 to use for more configuration and custom application deployment.

Complete the following steps to create your HCL Digital Experience multiple profile environment.

1.  Install HCL Digital Experience and the latest fix pack.

    The Portal profile wp_profile is created by default. Do not make any configuration changes or deploy any custom applications to wp_profile.

2.  Delete all search collections from HCL Digital Experience Manage Search portlet. To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration > Manage Search**. Click **Search Collection** and delete all search collections.

3.  Generate the profile templates based on wp_profile.

    -   AIX® and Linux™: Run the `./ConfigEngine.sh enable-profiles` command, from the wp_profile_root/ConfigEngine directory.
    -   Windows™: Run the `ConfigEngine.bat enable-profiles` command, from the wp_profile_root\ConfigEngine directory.

4.  Package the profile templates based on wp_profile.

    -   AIX® and Linux™: Run the `./ConfigEngine.sh package-profiles` command, from the wp_profile_root/ConfigEngine directory.
    -   Windows: Run the `ConfigEngine.bat package-profiles` command, from the wp_profile_root\ConfigEngine directory.]

5.  Run the Config Wizard from your browser and login.

    !!!note
        If working with HCL Digital Experience 8.5 or 9 software level prior to CF18, the wizard address will be: http://your_server:10200/ibm/wizard. After installing CF18, the configuration wizard will automatically be adjusted to http://your_server:10200/hcl/wizard.

6.  Access the workflow directly by using the following URL to create an extra profile.

    ```
    `https://<HOSTNAME\>:10202/hcl/wizard/Wizard/default/ver=2.0/rparam=currentPage=com.ibm.wplc.config.wizard.panels.execute.SetCondition/rparam=workflow=Create%20Portal%20Profile%20Using%20Template/rparam=previousPage=com.ibm.wplc.config.wizard.panels.ActivityPanel`
    ```

7.  Specify the values for the new profile (ex:wp_profile_2) and complete the workflow.

8.  Apply your custom configuration and deploy applications into the new profile.


## Running configuration tasks in a multiple profile environment

Each portal profile maintains its own independent configuration. Therefore, HCL Digital Experience configuration tasks are run against only one profile with separate property files maintained in each profile. As with a single-profile system, go to the ConfigEngine directory within the required profile to run the configuration task per that tasks instructions.

## Additional considerations regarding multiple profiles**

One possible use for multiple profiles would be creating profiles for Development and QA environments:

/wp_profile_DEV /wp_profile_INTEGRATION /wp_profile_QA

Or possibly separated by line of business within a single environment:

 /wp_profile_PROD_b2b /wp_profile_PROD_b2c /wp_profile_PROD_b2g etc

!!!note
    An important consideration in this scenario is that the application binaries are shared between environments. If you update either WebSphere Application Server or HCL Digital Experience code levels, you must do so across all profiles simultaneously. This should be taken into consideration depending on your business processing and deliverables schedules.


