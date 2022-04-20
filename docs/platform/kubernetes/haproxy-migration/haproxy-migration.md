# Haproxy Migration

This documentation explains the method to test HAProxy side by side with ambassador. Here ambassador is running in the default port, and HAProxy is running in its own port (i.e `31001`).

## HAProxy deployment
In the helm chart value file, you can see an option for HAProxy (same as other applications) to enable/disable the application. If there is a derived value file from the main values file, there would be an option for that as well to enable/disable HAProxy.

```yaml
# Controls which application is deployed and configured
applications:
  # Deploys Content Composer
  contentComposer: true
  # Deploys Core
  core: true
  # Deploys Design Studio
  designStudio: false
  # Deploys Digital Asset Management
  digitalAssetManagement: true
  # Deploys the Image Processor
  # Enabling digitalAssetManagement will override this setting with: true
  imageProcessor: true
  # Deploy Open LDAP
  # Setting the ldap type in the core application configuration to dx will override this setting with: true
  openLdap: true
  # Deploys the Persistence Layer
  # Enabling digitalAssetManagement will override this setting with: true
  persistence: true   
  # Deploys the Remote Search
  remoteSearch: true
  # Deploys the Ring API
  # Enabling either digitalAssetManagement or contentComposer will override this setting with: true
  ringApi: true
  # Deploys the Ambassador Ingress and Redis
  ambassador: true
  # Deploys the Runtime Controller
  runtimeController: true
  # Deploy HAProxy
  haproxy: true
```

Now, you need to modify the value of HAProxy (to `true`) and upgrade the helm chart.   
`$ helm upgrade -n <namespace> -f <value-file.yaml> <deployment-name> <value-file-path>`

For Example,  
`$ helm upgrade -n dxns -f deploy-values.yaml dx-deployment native-kube/helm/hcl-dx-deployment`  

After HAProxy deployment, the cluster should look like the following:

![HAProxy Enabled](../_img/haproxy-migration/haproxy-enable-1.png)

## HAProxy Testing (deployment verification)
To test and verify that HAProxy is deployed without any issue into the cluster, follow the below steps.

HAproxy will communicate via port `31001`, so whenever a request is made through the port `31001`, that request first goes to the Ambassador and is then forwarded to HAproxy.

#### WebSphere Configuration Setting

Virtual host needs to be added for `31001` port into the WebSphere server for side-by-side mode. This is used to identify in the request is ,ade rom the external host with its specific port. See the screenshots below show the steps to be followed

**Step 1:**
![WebSphere Config 1](../_img/haproxy-migration/websphere-config-1.png)

**Step 2:**
![WebSphere Config 2](../_img/haproxy-migration/websphere-config-2.png)

**Step 3:**
![WebSphere Config 3](../_img/haproxy-migration/websphere-config-3.png)

**Step 4:**
![WebSphere Config 4](../_img/haproxy-migration/websphere-config-4.png)

**Step 5:**
![WebSphere Config 5](../_img/haproxy-migration/websphere-config-5.png)

**Step 6:**
![WebSphere Config 6](../_img/haproxy-migration/websphere-config-6.png)

After the above changes are made, you can append the port `31001` into the request URL. The request URL should look like below.

The normal request to access the dam UI :  `https://<host-name>/dx/ui/dam/`

Custom request with port `31001` : `https://<host-name>:31001/dx/ui/dam/`  

In the above mentioned scenario, if the request passed through HAProxy faces an issue, the request wont be fulfilled, else if it works as expected then its is proof that HAProxy is up and running in the cluster

### Disable Ambassador 

After HAProxy is verified and deployed into the cluster, Ambassador can be disabled such that only HAProxy is running and it handles the requests directly.
After disabling Ambassador, `31001` port won't be available anymore. That port was solely used within the Ambassador configuration to test HAProxy. Now all the requests will be handled by HAProxy directly

Update the value file with Ambassador application flag (to `false`) and upgrade the helm chart.

```yaml
applications:
  designStudio: true
  # Deploys Content Composer
  contentComposer: true
  # Deploys Core
  core: true
  # Deploys Digital Asset Management
  digitalAssetManagement: true
  # Deploy Open LDAP
  # Setting the ldap type in the core application configuration to dx will override this setting with: true
  openLdap: true
  # Deploys the Persistence Layer
  # Enabling digitalAssetManagement will override this setting with: true
  persistence: true
  # Deploys the Remote Search
  remoteSearch: true
  # Deploys the Image Processor
  # Enabling digitalAssetManagement will override this setting with: true
  imageProcessor: true
  # Deploys the Ring API
  # Enabling either digitalAssetManagement or contentComposer will override this setting with: true
  ringApi: true
  # Deploys the Ambassador Ingress and Redis
  ambassador: false
  runtimeController: true
  # Deploys HAProxy application, load balancer service, and configMap to provide the configuration to HAProxy
  haproxy: true
```

After disabling Ambassador, the DX namespace looks like the following:

![Ambassador Disabled](../_img/haproxy-migration/ambassador-disable-1.png)


## Creating Application to HAProxy Port:

Navigate to the Application Menu. The Pages presesnt in the menu are currently pointing to them using Ambassador by default. The goal is to create a new, temporary page which points to HAProxy port for testing.
To do so we need to go to "Administration"


| ![Administration Menu](../_img/haproxy-migration/administration_menu_haproxy.png) |
|:--:|
| Open Administration within the Application Menu|

Within that, navigate to Pages. All elements in DX are in the form of pages. 
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

Here you need to find and copy the page which you want to test with HAProxy. Using the "New Page" option you can create a new page within the Application Menu. The properties set for the page which needs to be recreated with HAProxy can be copied from the existing one and entered within the new page.

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

Once the details are copied, the new page can be viewed within the pages section. But on visiting the page no data is displayed. This is because we have currently set only the outer section, the contents to be displayed within the page needs to be defined.

Next you need to add the portlet used to display the contents of the page and then Save it.

| ![content_potlet_dam_select](../_img/haproxy-migration/content_potlet_dam_select.png) |
|:--:|
| Search for the portlet to be added|

Once the portlet is added, The shared property values need to be updated with the HAProxy port number.

| ![edit_shared_settings](../_img/haproxy-migration/edit_shared_settings.png) |
|:--:|
| Open Edit Shared Setting of the new portlet added|

The application ID remains the same (`media library`) while the URL is updated such that it calls the HAProxy port

| ![media_library_Digital_asstes_haproxy](../_img/haproxy-migration/media_library_Digital_asstes_haproxy.png) |
|:--:|
| Adding HAProxy port to the URL|

After you have added the Content, you can view and test the new HAProxy page.Both the original ambassador page is running successfully in its default URL, while the new HAProxy page is also running successfully in its respective port URL.

**Ambassador Page:**
![Digital Assets](../_img/haproxy-migration/Digital_assets_network.png)


**Newly created HAProxy Page:**
![Digital Assets HAProxy](../_img/haproxy-migration/Digital_assets_haproxy_network.png)

Hence you can now test both Ambassador and HAProxy side by side

### Enabling HAProxy port in Web Content (Image)

There is another functionality using which you can test if ambassador as well as HAProxy are running. This is in relation with Web Content, to insert an image from the new Digital Asset Management Page which was created using the HAProxy port.
Traverse through the web content to Open and edit the Sample Article.

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

On clicking Select Image another pop up is displayed. This will always point to the defult application (without port specified) and cannot be configured. The image is selected and added to the source code

| ![insert_image_popup](../_img/haproxy-migration/insert_image_popup.png) |
|:--:|
| Insert Image from DAM|

In the source code the image is added via the img tag, since this was selected from the DAM pointing to ambassador the port specified is the default port. 
For testing we can add anopther image tag an update the port value to the new HAProxy port. 

| ![both_image_tags](../_img/haproxy-migration/both_image_tags.png) |
|:--:|
| Image fetched from default DAM and DAM of HAProxy port|

After saving the changes, both ambassador as well the HAProxy fetched images can be viewed. Hence is is another method of testing side by side working of ambassador as well as HAProxy.