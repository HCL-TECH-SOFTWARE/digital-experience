# Changing the Portal URI in Kubernetes Deployments

HCL Digital Experience 9.5 consists of multiple applications and services that can be deployed. Depending on your needs, you can change the default portal Uniform Resource Identifier (URI) any time after you install HCL Digital Experience to better suit the requirements of your organization.

To change the portal URI in Kubernetes deployments, adjust the `custom-values.yaml` file used for your Helm deployment. See [Custom value files](https://opensource.hcltechsw.com/digital-experience/latest/deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configuration/#custom-value-files) for more information.

In the `custom-values.yaml` file, configure the following section:

```yaml
core:
  contextRoot: wps
  home: portal
  personalizedHome: myportal
```

## Additional considerations

If you have deployed the People Service along with DX, after adjusting the context root of the Digital Experience URI, you must adjust the `portletPageContextRoot` in the People Service chart to align. The People Service Helm chart cannot automatically detect changes in the parent chart. Therefore, when you change the `values.yaml` for DX, you need to add the following (example):

```yaml
peopleservice:
    portletPageContextRoot: /newcontextroot/Practitioner/PeopleService
```

Now, perform a helm upgrade to apply these new values. See [Overview of Helm Configuration Updates](https://opensource.hcltechsw.com/digital-experience/latest/deployment/install/container/helm_deployment/update_helm_deployment/) for details.