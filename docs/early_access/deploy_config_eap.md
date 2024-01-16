# Deploying and configuring Open Liberty Portlet Container

This topic provides instructions on how to deploy, configure, install, uninstall, and troubleshoot issues in Open Liberty Portlet Container. 

## Prerequisites

- Deploy the [HCL Digital Experience (DX) 9.5 Container Update CF205 or higher](../deployment/index.md) to a supported Kubernetes platform for non-production use.
- Download the component image for the [HCL DX Early Access Program](download_eap_components.md).

## Deploying using Helm

To deploy the Open Liberty Portlet Container using Helm, refer to the following steps:

1. Load the Open Liberty Portlet Container image into your repository. 

2. Extract the Helm charts `.tgz` file for the same version as the image.

3. Change to the `hcl-lpc-deployment` directory created.

4. From the `value-samples` folder, copy the `sample-values.yaml` file to `custom-values.yaml` in the current directory.

5. Edit `custom-values.yaml` to specify your image repository and the name and tag of the Open Liberty Portlet Container image you want to deploy. You can also use this file to override a few of the other values documented in `values.yaml` and `values.schema.json`. For more information, see [](#configuring-using-helm-values).

6. Run `helm install lpc-deployment -n <your-dx-namespace> . -f ./custom-values.yaml` where `<your-dx-namespace>` is replaced by the namespace of your current DX installation.

### Configuring using Helm values

When deploying the Open Liberty Portlet Container; you can modify the following sections in your `custom-values.yaml`:

- images
- resources
- annotations
- labels
- nodeSelector

Refer to the supplied `values.yaml` file for details on the format.

### Installing Portlet Applications

To install your own standard portlet applications into the Open Liberty Portlet Container for evaluation, there are two main options:

- **Option 1 - Creation of an Enhanced Container Image**

    1. You can deploy one or more additional portlet applications by creating a simple `Dockerfile` similar to the following:

        FROM `<repo-URL>/<container-image-name>:<tag>`

        COPY `--chown=dx_user:dx_users <path-to-your-WAR-file> /config/dropins/`

        where the `FROM` value points to wherever you loaded the HCL-supplied Open Liberty Portlet Container. If you have more than one application to install, you can add multiple `COPY` statements or use a suitable wildcard expression in the source path.

    2. When your `Dockerfile` is ready and you have Docker installed, create the image with the following command: `docker build -f Dockerfile -t <tag-for-new-image>`.

    3. Deploy the enhanced image during the initial installation of the Open Liberty Portlet Container deployment by specifying your new tag in the `custom-values.yaml` file before running the `helm install` command. To update an existing deployment with a new image, update the `custom-values.yaml` file but run the following command:

        `helm upgrade lpc-deployment -n your-dx-namespace . -f ./custom-values.yaml`

    In addition to deploying portlet applications, you can change the configuration of the Open Liberty server when creating a new image. You can make changes to the `server.xml` file (found in the `/config/` directory) to add extra Open Liberty features that your portlets might require or to configure applications that do not reside in the `/config/dropins/` directory. You can also create or change other Open Liberty configuration files in the `/config/` directory (for example, using the `jvm.options` file) to specify a different heap size. Further information can be found in the [Open Liberty documentation](https://openliberty.io/docs/22.0.0.6/reference/config/server-configuration-overview.html).

    !!!warning
        Some configuration changes may break the Open Liberty Portlet Container and it is not possible to enumerate here all the ways this can occur. Proceed with caution and be prepared to revert any changes that you have made. Some changes that *should not* be made are:

            - Adding the `webCache` feature (the already installed `portletCache` feature is a customized version of this)
            - Changing the version of the `javaee` feature
            - Altering the configuration of the `enterpriseApplication` element with an ID of `wsrpproducer`
            - Removing the `portletContainer` feature or element

- **Option 2 - Deployment into a Running Container**

    Alternatively, you can deploy portlet applications directly into a running container where they are automatically detected and installed by Open Liberty. Note that such deployments do not persist if the Open Liberty Portlet Container pod is restarted.

    To deploy an application with this option, copy the application to the `/config/dropins/` directory of the running container. For example, you can use:
    
    `kubectl cp -n <your-dx-namespace> <path-to-your-WAR-file> lpc-deployment-lpc-0:/config/dropins/`
    
### Consuming Portlets in DX Core

To test portlets that you have deployed into the Open Liberty Portlet Container, you must consume them in the co-located instance of DX Core (in the Kubernetes deployment set up for non-production use) over WSRP. 

There are three main steps:

1. [Configure a WSRP Producer](#configuring-a-wsrp-producer).
2. [Consume Portlets](#consuming-portlets).
3. [Add consumed portlets to DX pages](#adding-consumed-portlets-to-dx-pages).

More information can be found in [Using your portal as a WSRP Consumer](../extend_dx/development_tools/wsrp/portal_wsrp_consumer/index.md).

#### Configuring a WSRP Producer

Do this step only once, regardless of how many applications are deployed to the Open Liberty Portlet Container. 

1. Go to the `Web Services` page on your DX Core installation, typically found at `https://<your-dx-host>/wps/myportal/Practitioner/Administration/Applications/Web%20Services`. 

2. Click the `New Producer` button and enter a name for the new producer in the `Title:` field.

3. Enter the URL `http://lpc-deployment-lpc:9080/producer/wsdl/wsrp_service.wsdl` in the `URL to WSDL service definitions:` field. 

4. Click **OK**.

#### Consuming Portlets.

After a producer is created, you can then import the individual standards-based portlets from the applications deployed to your Open Liberty Portlet Container. You must repeat this step whenever you deploy additional applications.

1. Go to the `Web Modules` page on your DX Core installation, typically found at `https://<your-dx-host>/wps/myportal/Practitioner/Administration/Applications/Web%20Modules`. 

2. Click the `Consume` button and then click the link on the name of your WSRP Producer. 

3. Check the boxes of the additional portlets you want to use.

4. Click **OK**.

#### Adding Consumed Portlets to DX Pages

The portlets that are consumed should be accessible for addition to both new and existing pages (for example, through the `Applications` tab in the `Site Manager` while editing a page). 

For information on how to add applications, refer to [Adding applications to your page](../build_sites/create_sites/adding_pages_content_more/toolbar_add_app.md).

### Uninstalling the Open Liberty Portlet Container

When you are done evaluating the Early Access version of the Liberty Portlet Container, you may want to remove it from your DX namespace. You can uninstall the Open Liberty Portlet Container with the following Helm command:

``helm uninstall lpc-deployment -n <your-dx-namespace>``

After executing this command, the message `release "lpc-deployment" uninstalled` is displayed.

### Troubleshooting

If you encounter difficulties with running your applications on the Open Liberty Portlet Container, you can access the logs by either:

- connecting to the running container and viewing them, or
- copying the logs off the container and examining them locally

The logs can be found in the `/config/logs/` directory. The `messages.log` file in that directory shows any exceptions or status messages.  The `trace.log` file gives more information because a high level of tracing is currently enabled for the Open Liberty Portlet Container.

The following is a sample command to copy the `messages.log` locally for examination:

`kubectl cp -n <your-dx-namespace> lpc-deployment-lpc-0:/config/logs/messages.log <local-path-for-log>`

To connect directly to the running container, you can use the following sample command:

`kubectl exec -it -n <your-dx-namespace> lpc-deployment-lpc-0 -- /bin/bash`

If you have configured your Kubernetes environment and Open Liberty Portlet Container deployment to allow external HTTP(S) access to the Open Liberty Portlet Container service, you can use the Open Liberty Admin Center web application to check whether your portlet applications have started.

When consuming your portlets through WSRP from DX Core, you can get potentially valuable information from the **DX Core SystemOut** log with the following command:

`kubectl logs -n <your-dx-namespace> dx-deployment-core-0 -c system-out-log`
