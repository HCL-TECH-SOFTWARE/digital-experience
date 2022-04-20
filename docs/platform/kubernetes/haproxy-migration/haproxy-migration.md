# Migrate from Ambassador to HAProxy

This documentation explains the method to test HAProxy side by side with Ambassador to confirm the setup is working before switching completely. In this case Ambassador keeps running uninterrupted, and HAProxy is running on its own port (configurable, `31001` by default).

!!!important
    The preferred migration route is a [`blue green deployment`](https://www.redhat.com/en/topics/devops/what-is-blue-green-deployment) where one instance can directly be deployed with Ambassador disabled and HAProxy enabled and tested.

    The following instructions are meant to offer an alternative way to test Ambassador and HAProxy side-by-side if a `blue green deployment` is not available.

## Ambassador and HAProxy side-by-side deployment

In the Helm chart custom values file, you can see an option for HAProxy similar to the other applications to enable/disable it.

```yaml
# Controls which application is deployed and configured
applications:
  # Deploys the Ambassador Ingress and Redis
  ambassador: true
  # Deploy HAProxy
  haproxy: true
```

For the side-by-side mode of Ambassador and HAProxy change the value of both to `true` and upgrade the Helm deployment. 

```shell
helm upgrade -n <namespace> -f <custom-values.yaml> <release-name> <path/to/hcl-dx-deployment-vX.X.X_XXXXXXXX-XXXX.tar.gz>
```

After deploying, the services and pods of both applications (Ambassador and HAProxy) should be up and running in the namespace. Make sure that Ambassador is now working as an active request handler so its service type would be a default `LoadBalancer` and HAProxy is running as a passive instance so that its service would be a `ClusterIP` service.

The deployment should look similar to the following:

![HAProxy Enabled](../_img/haproxy-migration/haproxy-enable-1.png)

## HAProxy Testing (deployment verification)

!!! note "Notes:"
    This does not work for hybrid deployments. For testing in hybrid environments please skip directly to [Test Applications on HAProxy Port](#test-applications-on-haproxy-port).

To test and verify that HAProxy is deployed without any issue into the cluster, follow the below steps.

HAProxy will communicate via a dedicated port, so whenever a request is made through that dedicated, that request first goes to the Ambassador and is then forwarded to HAProxy.

This dedicated port can be configured from the values of the Helm chart.

```yaml
incubator:
  networking:
    haproxy:
      # The port on which Ambassador redirects traffic to HAProxy to test it in a side-by-side mode before switching to HAProxy
      ambassadorPassthroughPort: 31001
```

### WebSphere Configuration Setting (for HAProxy dedicated configurable port)

The virtual host needs to be configured for the HAProxy port, into the WebSphere server for side-by-side mode. This is used to identify the request made from the external host with that dedicated port for HAProxy.

Here, for the example, the default port `31001` is configured as a dedicated port for the HAPRoxy.

Refer to the screenshots below to configure the dedicated port in the virtual host of the `WebSphere` server.

| ![WebSphere Config 1](../_img/haproxy-migration/websphere-config-1.png) |
|:--:|
| Open WebSphere console and navigate to Virtual Hosts, then click on `default_host` (or your preferred host) |

| ![WebSphere Config 2](../_img/haproxy-migration/websphere-config-2.png) |
|:--:|
| Click on `Host Aliases` to open list of ports|

| ![WebSphere Config 3](../_img/haproxy-migration/websphere-config-3.png) |
|:--:|
|  Click on `New` button to add new port|

| ![WebSphere Config 4](../_img/haproxy-migration/websphere-config-4.png) |
|:--:|
|  Enter the port in the text field, then click `Apply` to apply the changes|

| ![WebSphere Config 5](../_img/haproxy-migration/websphere-config-5.png) |
|:--:|
| Click on `Save`|

| ![WebSphere Config 6](../_img/haproxy-migration/websphere-config-6.png) |
|:--:|
| After adding port to the virtual host, it can be viewed in the list|

For the changes to take effect, the `WebSphere_Portal` server must be restarted. To do so run the appropriate commands in the `Core` Pod.

Stop the server:

```shell
kubectl exec --stdin --tty <DX_POD_NAME> -n <NAMESPACE> -- /bin/bash

cd /opt/HCL/wp_profile/bin/

./stopServer.sh WebSphere_Portal -username <USERNAME> -password <PASSWORD>
```

And start it again;

```shell
kubectl exec --stdin --tty <DX_POD_NAME> -n <NAMESPACE> -- /bin/bash

cd /opt/HCL/wp_profile/bin/

./startServer.sh WebSphere_Portal
```

After the above changes are made, you can append the defined dedicated port into the request URL to test DX using HAProxy.

The request URL should look like below (here, `31001` is used for an example).

The normal request to access the portal:  `https://<host-name>/wps/myportal`

Custom request with port `31001` : `https://<host-name>:31001/wps/myportal`  

If DX is rendering as expected using the dedicated port, HAProxy does serve the requests as expected.

### Test Applications on HAProxy Port

Navigate to the Application menu. The Pages present in the menu are using Ambassador by default. The goal is to create a new, temporary page which points to HAProxy port for testing.

To do so navigate to `Administration`

| ![Administration Menu](../_img/haproxy-migration/administration_menu_haproxy.png) |
|:--:|
| Open Administration within the Application Menu|

Within that, navigate to `Pages`.
Traverse through `Content Root` and `Practitioner Studio` to view the Application menu contents.

| ![Pages](../_img/haproxy-migration/administration_page.png) |
|:--:|
| Open Pages within the Administration Page|

| ![Content Root](../_img/haproxy-migration/content_root.png) |
|:--:|
| Open Content Root|

| ![Practitioner Studio](../_img/haproxy-migration/practitioner_studio.png) |
|:--:|
| Open Practitioner Studio within Content root|

Here you need to find and copy the page which you want to test with HAProxy. Using the `New Page` option a new page within the Application Menu can be created. The properties set for the page which needs to be recreated with HAProxy can be copied from the existing one and entered within the new page.

| ![Application_menu_pages](../_img/haproxy-migration/Application_menu_pages.png) |
|:--:|
| Duplicate the page which needs to be tested with HAProxy|

The properties are defined here and can be modified to specify the HAProxy changes. If any Page properties or other options are specified, you can copy those as well to the new HAProxy specific page.

| ![Edit_page_settings](../_img/haproxy-migration/Edit_page_settings.png) |
|:--:|
| Properties of the page which needs to be tested with HAProxy|

| ![digital_assets_manage_pages](../_img/haproxy-migration/digital_assets_manage_pages.png) |
|:--:|
| Newly created HAProxy Page|

Once the details are copied, the new page can be seen within the pages section. Next the contents to be displayed within the page needs to be defined. For this a Portlet is added and used to display the contents of the page and then save it.

| ![content_potlet_dam_select](../_img/haproxy-migration/content_potlet_dam_select.png) |
|:--:|
| Search for the Portlet to be added|

Once the Portlet is added, the shared property values need to be updated with the HAProxy port number.

| ![edit_shared_settings](../_img/haproxy-migration/edit_shared_settings.png) |
|:--:|
| Open Edit Shared Setting of the new Portlet added|

The application ID remains the same (`medialibrary` in this example) while the URL is updated such that it calls the HAProxy port

| ![media_library_Digital_asstes_haproxy](../_img/haproxy-migration/media_library_Digital_asstes_haproxy.png) |
|:--:|
| Adding HAProxy port to the URL|

After adding the content, both the original Ambassador page is running on its default URL, while the new page is also available in its respective port URL using HAProxy.

**Ambassador Page:**
![Digital Assets](../_img/haproxy-migration/Digital_assets_network.png)

**Newly created HAProxy Page:**
![Digital Assets HAProxy](../_img/haproxy-migration/Digital_assets_haproxy_network.png)

### Enabling HAProxy port in Web Content (Image)

Another functionality to test if Ambassador as well as HAProxy are running is to use the `Image Picker`.

Traverse through the Web Content to open and edit or create a page.

| ![library_explorer_sample](../_img/haproxy-migration/library_explorer_sample.png) |
|:--:|
| Sample Articles within Web Content|

View the source code and add an image tag.

| ![source_insert_image](../_img/haproxy-migration/source_insert_image.png) |
|:--:|
| Edit the source code and add Image Tags|

In the pop up opened, we can decide which source we want to include the image from, in this scenario it would be selected withing the DAM source.

| ![source_popup](../_img/haproxy-migration/source_popup.png) |
|:--:|
| Select the source as DAM and Insert Image|

On clicking Select Image another pop up is displayed. This will always point to the default application (without port specified) and cannot be configured. The image is selected and added to the source code

| ![insert_image_popup](../_img/haproxy-migration/insert_image_popup.png) |
|:--:|
| Insert Image from DAM|

In the source code the image is added via the img tag, since this was selected from the DAM pointing to Ambassador the port specified is the default port.
For testing we can add another image tag an update the port value to the new HAProxy port.

| ![both_image_tags](../_img/haproxy-migration/both_image_tags.png) |
|:--:|
| Image fetched from default DAM and DAM of HAProxy port|

After saving the changes, both Ambassador as well the HAProxy fetched images should be visible.

### Disable Ambassador

After HAProxy is verified and deployed into the cluster, Ambassador can be disabled such that only HAProxy is running and it handles the requests directly.
After disabling Ambassador, `31001` port won't be available anymore. That port was solely used within the Ambassador configuration to test HAProxy. Now all the requests will be handled by HAProxy directly.

To do so update the value file with Ambassador application flag to `false` and upgrade the helm chart.

```yaml
applications:
  # Setting ambassador flag to false
  ambassador: false
  # Setting HAProxy flag to true
  haproxy: true
```

After disabling Ambassador, the Ambassador pods and services are removed and only HAProxy is up and running. The DX namespace should look similar to the following:

![Ambassador Disabled](../_img/haproxy-migration/ambassador-disable-1.png)
