# Sharing the DAM repository between environments

Use the following steps to share the DAM repository between multiple HCL Digital Experience 9.5 Kubernetes deployments.

Prerequisites:

- Configure single sign-on \(SSO\) between the HCL Digital Experience 9.5 deployments that shares the Digital Asset Management media assets. See [Configure SSO for Digital Asset Management](../configure_dam_sso.md) topic.
- Ensure the [Cross Origin Resource Sharing \(CORS\)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS){:target="_blank"} property is configured in the deployment config map. Add the following values to your helm chart on the DX installation to deploy DAM. Then run helm upgrade.

    ```
    addon:
      digitalAssetManagement:
        corsOrigin: ["<target-loadbalancer-url>"]
      ringApi:
        corsOrigin: ["<target-loadbalancer-url>"]
    ```
<!---
    1. Add the target host name in `networking` in values.yaml for Core:

        ```yaml
            networking:
            core:
                host: "<loadbalancer Target url>"
        ```

    2. Add the target host name in `networking` in values.yaml for Digital Asset Management:

        ```yaml
            networking:
                addon:
                    host: "<loadbalancer Target url>"
        ```

    These [settings](../../../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configure_networking.md) allow Digital Asset Management to communicate with other HCL DX 9.5 deployment servers.
-->
## Publish Digital Asset Management assets from staging to production

1. Use the shared Digital Asset Management deployment to publish from the Digital Experience 9.5 source staging server to the Digital Experience 9.5 production server. See the example diagram topology Figure 1 in step 4-G.
2. The source server is a Digital Experience 9.5 container staging server.
3. The target server is a Digital Experience 9.5 container production server including the Digital Asset Management deployment.
4. On the source Digital Experience 9.5 container server, configure the Digital Asset Management DAM React Integration portlet:

    1. Go to **Administration** \> **Site Management** \> **Pages** \> **Content Root** \> **Practitioner Studio**.
    2. Find the Digital Asset page and select the Edit \(pencil\) icon to edit the page.
    3. Select the dropdown on the DAM ReactIntegration portlet and configure this portlet.
        ![DAM ReactIntegration Portlet](../../../../images/dam_reactintegration_portlet.png)
    4. Add the Static UI URL: `https://TARGET_Hostname/dx/ui/dam/static` to the DAM ReactIntegration portlet properties.
    5. Save this configuration.
    6. Follow the same configuration steps in the target Digital Experience 9.5 container server and place the URL in the target server \(see next step\). Configure the DAM ReactIntegration portlet on the target server using the same steps as outlined.
    7. Ensure you apply the same static UI URL \(`https://TARGET_Hostname/dx/ui/dam/static`\) when defining the portlet properties.
      ![Share Digital Asset Management across multiple HCL DX environments](../../../../images/share_dam_multiple.png)

## Limitations

- Establish single sign-on \(SSO\) across HCL Digital Experience 9.5 container deployments that share Digital Asset Management services. Each deployment is required to share the same user and group definitions across all participating environments.
- Assign the required access control to Digital Asset Management collections to prevent images used during development and authoring from showing up in production rendering for end users.