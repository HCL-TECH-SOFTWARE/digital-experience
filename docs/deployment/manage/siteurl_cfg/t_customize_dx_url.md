# Customizing the HCL Digital Experience (DX) URL when deployed to container platforms

This page describes the procedures to define custom context root URLs or no context root URLs when deploying your HCL DX 9.5 software to the supported container platforms.

## Prerequisites and Notes

- The following configuration procedure is supported for DX container deployments to Kubernetes and OpenShift platforms. To change the HCL DX URL [hybrid container deployment](https://help.hcl-software.com/digital-experience/9.5/containerization/hybrid_deployment_operator.html){target="_blank"} and on-premise deployment, refer to the following topic: [Customizing the HCL DX URL for hybrid deployment](https://help.hcl-software.com/digital-experience/9.5/containerization/t_customize_dx_url_hybrid_deployment.html){target="_blank"}.
- The [dxctl](https://help.hcl-software.com/digital-experience/9.5/containerization/dxtools_dxctl.html){target="_blank"} tool is used for this configuration process. Before running the dxctl tool, the administrator must log on to the targeted DX cluster using the cloud-specific CLI login commands for the supported Kubernetes and OpenShift platforms such as Microsoft Azure Kubernetes Services (AKS), Google Kubernetes Engine (GKE), Amazon Elastic Kubernetes Service (EKS), or Red Hat OpenShift. For example, to log in to your DX container cluster on the Red Hat OpenShift platform, use the oc login command.
- Ensure that you have updated the DxDeployment custom resource definition to the HCL DX 9.5 Container Update CF192 and later releases. For more information, see [Customizing the container deployment](https://help.hcl-software.com/digital-experience/9.5/containerization/customizing_container_deployment.html){target="_blank"}.
- If you have already defined a custom Digital Experience URL in your existing container deployment, you need to configure the following properties with the existing values. Otherwise, the properties are updated with the default values.

## Customizing the context root in your DX container deployment

Follow these steps to change the default values of your custom requirements, apply custom URIs during a new container deployment, and change custom URIs for previous deployments.

1. Change the default values to your custom requirements by updating the following properties. For example:

    ```
    ## Path
              dx.path.contextroot: hcl
              dx.path.home: dx
              dx.path.personalized: mydx
    ```

    The default configuration for the context root changes are as follows:

    - `dx.path.contextroot`: wps
    - `dx.path.home`: portal
    - `dx.path.personalized`: myportal

    !!!important
        Do not use the same value for the `dx.path.home` and `dx.path.personalized` properties.

2. Apply the HCL DX custom URI during a new DX Container deployment using the following command:

    ```
    $ dxctl --deploy -p properties/full-deployment.properties
    ```

3. Change the custom URI of a previous HCL DX 9.5 Container deployment by updating the property values as specified in Step 1 and running the following command:

    ```
    $ dxctl --update -p properties/full-deployment.properties
    ```

### Additional considerations when customizing the context root

Review the following manual, required, and optional steps to complete the context root customization updates. Perform the steps that are related to your DX deployment details. Some optional steps may not apply to your deployment.

1. (Optional) If your DX deployment includes custom themes that use Dojo, update those themes to refer to the correct Dojo context root.

    The default Dojo context root in HCL DX is `/wps/portal_dojo`. After you run the `modify-servlet-path` and `modify-servlet-path-portlets` tasks, the Dojo context root is changed to include the new value in the **WpsContextRoot** parameter as the prefix. For example, if the new **WpsContextRoot** value is `myco`, then the new Dojo context root becomes `/myco/portal_dojo`.

    If your theme includes hard-coded references to `/wps/portal_dojo`, update those references to the new context root. If you migrated a custom theme, you might find that it has references to `/portal_dojo` without the `/wps` prefix. Look for these references in the WAR file and WebDAV storage for your theme.

2. Refresh your search collection and select `Regather` to update the documents.

    1. Log on to the DX platform as the administrator.

    2. In Practitioner Studio, go to **Applications Menu** > **Administration** > **Search**.

    3. Click **Search Collections**.

    4. Click the search collection that you want to update. For example: Default Search Collection.

    5. Start the DX search collection crawler service for each content collection source.

        - If the documents are not stored in the search collection but a schedule is defined for the crawler, the crawler automatically runs at the scheduled time. You can also start the crawler manually.
        - If the documents are already collected, select **Regather documents** to update the documents with the new context root information.

    6. Click **Collections from All Services** in the breadcrumb trail and select the next search collection to modify.

3. (Optional) From the Web Content interface of Practitioner Studio, update the Web Content Manager syndicator and subscriber servers that reference your modified DX Container site URL. Skip this step if you do not use syndication.

    1. Log on to the site that syndicates to this instance.
    2. Open the **Syndicators** page.
    3. Click the edit icon next to the syndicator that you want to edit.
    4. Update the URL with the new context root information.
    5. Log on to the site that subscribes to this instance.
    6. Open the **Subscribers** page.
    7. Click the edit icon next to the subscriber that you want to edit and update the URL with the new context root information.

## Configuring no context root in your DX container deployment

Follow these steps to configure no context root, apply custom URIs during a new container deployment, and change custom URIs for previous deployments.

1. Update the following property values. For example:

    ```
    ## Path
    dx.path.contextroot: " "
    dx.path.home: " "
    dx.path.personalized: mydx

    dx.ready.path: /

    dx.live.path: /
    ```

    !!!note
        If the context root is removed, you must remove the home path as well. It may take more time than usual for the **DX-Core** pod to get to a running state during the update process.

    Before login (no context root):

    ```
    https://dx-cr-demo-service-dx-cr-01-dx-cr-01.apps.sample.domain.net/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfljo8ziDVCAo4FTkJGTsYGBu7OJfjhYgbmHi7u7oYFhgL-bu4BoJmrt7e
    ```

    After login (personalized context root):

    ```
    https://dx-cr-demo-service-dx-cr-01-dx-cr-01.apps.sample.domain.net/mydx/woodburnstudio/home/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfljo8ziDVCAo4FTkJGTsYGBu7OJfjhYgbmHi7u7oYFhgL-bu4BoJmrt7e
    ```

    !!!important
        Do not use the same value for the `dx.path.home` and `dx.path.personalized` properties.

2. Apply the HCL DX custom URI during a new DX Container deployment using the following command:

    ```
    $ dxctl --deploy -p properties/full-deployment.properties
    ```

3. Change the custom URI of a previous HCL DX 9.5 Container deployment by updating the property values as specified in Step 1 and running the following command:

     ```
    $ dxctl --update -p properties/full-deployment.properties
    ```
