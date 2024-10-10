# Customizing the HCL DX URL when deployed to container platforms

This page describes the procedures to define custom context root URLs or no context root URL definitions when deploying your HCL DX 9.5 software to the supported container platforms.

## Customize the context root in your Digital Experience container deployment

1. The following property values are the default configuration for the context root changes.

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

    !!!important
        Do not use the same value for the `dx.path.home` and `dx.path.personalized` properties.

2. To apply the HCL Digital Experience custom URI during a new DX Container deployment, run the following command:

    ```
    $ dxctl --deploy -p properties/full-deployment.properties
    ```

3. To change the custom URI of a previous DX 9.5 Container deployment, update the properties as specified in Step 1, then run the following command:

    ```
    $ dxctl --deploy -p properties/full-deployment.properties
    ```

## Additional considerations when customizing the context root

Review the following manual, required, and optional steps to complete the context root customization updates. Perform the steps that are related to your DX deployment details. Some optional steps may not apply to your deployment.

1. (Optional) If your DX deployment includes custom themes that use Dojo, update those themes to refer to the correct Dojo context root.

    The default Dojo context root in HCL Digital Experience is `/wps/portal_dojo`. After you run the `modify-servlet-path` and `modify-servlet-path-portlets` tasks, the Dojo context root is changed to include the new value in the **WpsContextRoot** parameter as the prefix. For example, if the new **WpsContextRoot** value is `myco`, then the new Dojo context root becomes `/myco/portal_dojo`.

    If your theme includes hard-coded references to `/wps/portal_dojo`, update those references to the new context root. If you migrated a custom theme, you might find that it has references to `/portal_dojo` without the `/wps` prefix. Look for these references in the WAR file and WebDAV storage for your theme.

2. Refresh your search collection and select `Regather` to update the documents.

    1. Log on to the Digital Experience platform as the administrator.

    2. In Practitioner Studio, go to **Applications Menu** > **Administration** > **Search**.

    3. Click **Search Collections**.

    4. Click the search collection that you want to update. For example: Default Search Collection.

    5. Start the Digital Experience search collection crawler service for each content collection source.

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

## Configure no context root in your Digital Experience container deployment

1. To configure no context root, update the following property values. For example:

    ```
    ## Path
    dx.path.contextroot: " "
    dx.path.home: " "
    dx.path.personalized: mydx

    dx.ready.path: /

    dx.live.path: /
    ```

    !!!note
        If the context root is removed, the home path must be removed as well. It may take more time than usual for the **DX-Core** pod to get to a running state during the update process.

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

2. To apply the HCL Digital Experience custom URI during a new DX container deployment, run the following command:

    ```
    $ dxctl --deploy -p properties/full-deployment.properties
    ```

3. To change the custom URI of a previous HCL DX 9.5 container deployment, update the property values as specified in step 1, and run the following command:

     ```
    $ dxctl --deploy -p properties/full-deployment.properties
    ```
