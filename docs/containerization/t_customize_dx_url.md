# Customizing the HCL DX URL when deployed to container platforms

This section describes the procedures to define custom context root URLs, or no context root URL definitions, when deploying your HCL DX 9.5 software to the supported container platforms.

**Note:** Defining the custom context root URL feature is available in HCL DX 9.5 Container Update CF193 and later.

**Prerequisites and Notes:**

-   The following configuration procedure is supported for DX container deployments to Kubernetes and OpenShift platforms. To change the HCL DX URL [hybrid container deployment](hybrid_deployment_operator.md) and on-premise deployment, refer to the following topic: [Customizing the HCL DX URL for hybrid deployment](t_customize_dx_url_hybrid_deployment.md).
-   The [dxctl tool](dxtools_dxctl.md) is used for this configuration process. Before running the dxctl tool, the administrator must log on to the targeted DX cluster using the cloud-specific CLI login commands for the supported Kubernetes and OpenShift platforms; such as Microsoft Azure Kubernetes Services \(AKS\), Google Kubernetes Engine \(GKE\), Amazon Elastic Kubernetes Service \(EKS\), or Red Hat OpenShift. For example, to log in to your DX container cluster on the Red Hat OpenShift platform, use the oc login command.
-   Ensure that you have updated the DxDeployment custom resource definition to the HCL DX 9.5 Container Update CF192 and later releases. For more information, see [Customizing the container deployment](customizing_container_deployment.md).
-   For more information on the custom URI management for HCL Digital Experience, refer to the following topic: [Changing the portal URI after an installation](../config/cfg_intr.md).
-   If you have already defined a custom Digital Experience URL in your existing container deployment, it is mandatory to configure the following properties with the existing values. Otherwise, the properties are updated with the default values.

1.  **Customize the context root in your Digital Experience container deployment:**
2.  The following are the default configuration property values for the context root changes.

    ```
    ## Path
                dx.path.contextroot: wps
                dx.path.home: portal
                dx.path.personalized: myportal
    ```

    To change the default values to your custom requirements, update the following properties. For example:

    ```
    ## Path
                  dx.path.contextroot: hcl
                  dx.path.home: dx
                  dx.path.personalized: mydx
                
    ```

    **Important:** Do not use the same value for the dx.path.home and dx.path.personalized properties.

3.  To apply the HCL Digital Experience custom URI during a new DX Container deployment, run the following command:

    ```
    $ dxctl --deploy -p properties/full-deployment.properties
    ```

4.  To change the custom URI of a previous DX 9.5 Container deployment, then update the properties as specified in [Step 1](#customizeURIproperties), and then run the following command:

    ```
    $ dxctl --update -p properties/full-deployment.properties
    ```


## Additional Considerations and Example:

Review the following manual, required and optional steps to complete the context root customization updates. Perform the steps that are related to your DX deployment details. \(Some optional steps may not apply to your deployment\).

1.  Optional step: If your DX deployment includes custom themes that use Dojo, update those themes to refer to the correct Dojo context root.

    The default Dojo context root in HCL Digital Experience is /wps/portal\_dojo. After you run the `modify-servlet-path` and `modify-servlet-path-portlets` tasks, the Dojo context root is changed to include the new value in the WpsContextRoot parameter as the prefix. For example, if the new WpsContextRoot value is myco, then the new Dojo context root becomes /myco/portal\_dojo.

    If your theme includes hard-coded references to /wps/portal\_dojo, update those references to the new context root. If you migrated a custom theme, you might find that it has references to /portal\_dojo without the /wps prefix. Look for these references in both the WAR file and in the WebDAV storage for your theme.

2.  Required step: Refresh your search collection and select `Regather` to update the documents.
    -   Log on to the Digital Experience platform as the administrator. Navigate to the Practitioner Studio menu. Select Search:

        ![Administrator interface of the Practitioner Studio](../images/ps_admin_interface.png "Practitioner Studio Administrator interface")

    -   Open the Manage Search portlet.
    -   Click Search Collections.
    -   Click the search collection that you want to update. For example: Default Search Collection.
    -   Start the Digital Experience search collection crawler service for each content collection source:

        **Notes:**

        -   If the documents are not stored in the search collection but a schedule is defined for the crawler, then the crawler automatically runs at the scheduled time. You can also start the crawler manually.
        -   If the documents are already collected, then select **Regather documents** to update the documents with the new context root information.
    -   Click **Collections from All Services** in the breadcrumb trail and select the next search collection to modify.
3.  Optional step: From the Web Content interface of Practitioner Studio, update the Web Content Manager syndicator and subscriber servers that reference your modified DX Container site URL. If you do not use syndication, skip this step.
    -   Log on to the site that syndicates to this instance.
    -   Open the Syndicators page.
    -   Click the edit icon by the syndicator that you want to edit.
    -   Update the URL with the new context root information.
    -   Log on to the site that subscribes to this instance.
    -   Open the Subscribers page.
    -   Click the edit icon of the subscriber that you want to edit. Update the URL with the new context root information.

Configure no context root in your Digital Experience container deployment

1.  To configure no context root, update the following property values. For example:

    ```
    ## Path
    dx.path.contextroot: " "
    dx.path.home: " "
    dx.path.personalized: mydx
    
    dx.ready.path: /
    
    dx.live.path: /
    ```

    **Note:** If the context root is removed, the home path must be removed as well. It may take more time than usual for the **DX-Core** pod to get to a running state during the update process.

    Before log in \(no context root\):

    ```
    https://dx-cr-demo-service-dx-cr-01-dx-cr-01.apps.sample.domain.net/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfljo8ziDVCAo4FTkJGTsYGBu7OJfjhYgbmHi7u7oYFhgL-bu4BoJmrt7e
    ```

    After log in \(personalized context root\):

    ```
    After log in (personalized context root): https://dx-cr-demo-service-dx-cr-01-dx-cr-01.apps.sample.domain.net/mydx/woodburnstudio/home/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfljo8ziDVCAo4FTkJGTsYGBu7OJfjhYgbmHi7u7oYFhgL-bu4BoJmrt7e
    ```

    **Important:** Do not use the same value for the `dx.path.home` and `dx.path.personalized` properties.

2.  To apply the HCL Digital Experience custom URI during a new DX container deployment, run the following command:

    ```
    $ dxctl --deploy -p properties/full-deployment.properties
    ```

3.  To change the custom URI of a previous HCL DX 9.5 container deployment, update the property values as specified in step 1, and run the following command:

    ```
    $ dxctl --update -p properties/full-deployment.properties
    ```


**Parent topic:**[Customizing your container deployment](../containerization/customization.md)

