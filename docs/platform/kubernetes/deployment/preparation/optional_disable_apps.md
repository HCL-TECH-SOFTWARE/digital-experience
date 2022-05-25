# Select DX applications to deploy

HCL Digital Experience 9.5 consists of multiple applications and services that can be deployed. Depending on your needs, it might not be necessary to have all applications deployed.

## Disabling or enabling specific applications

You can easily enable or disable specific applications by adding the following parts to your custom-values.yaml file:

```
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
  # Deploys the Runtime Controller
  runtimeController: true
  # Deploy HAProxy
  haproxy: true

```

You can set applications that you do not want to be deployed to `false`. As noted in the [Applications overview - Deploy DX 9.5 to container platforms using Helm](../../architecture/application_architecture.md) Help Center topic, some DX applications are pre-requisites for others to be deployed. It can appear that you have disabled an application, but it still gets deployed. This is due to other applications requiring that one.
