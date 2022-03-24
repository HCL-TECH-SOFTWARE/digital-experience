# Using ImagePullSecrets

To use a container image registry that has access restrictions and requires credentials, you need to leverage `ImagePullSecrets` in your deployment. Refer to the [Kubernetes Documentation](https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/) for additional information on this topic.

In addition, reference your Cloud Provider documentation on how to create `ImagePullSecrets`.

**Note:** Ensure that the `ImagePullSecret` has been created in the same namespace that your DX deployment is installed to.

## Configure deployment to use ImagePullSecrets

In order for the HCL Digital Experience 9.5 deployment to leverage `ImagePullSecrets` you need to adjust your `custom-values.yaml` file to include the following syntax:

```
images:
 imagePullSecrets:
 - name: regcred         
```

The name `regcred` can be different, depending on how you have created your `ImagePullSecret` and how it is named. Ensure that you reference the correct name in the configuration.

It is assume that you have moved the HCL Digital Experience 9.5 images to your registry; make sure it is also configured properly in your `custom-values.yaml`:

```
images:
  repository: "your-repo:port"                
```

All pods created now have that secret configured for pulling DX container images.

