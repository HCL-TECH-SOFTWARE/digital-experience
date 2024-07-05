# Using ImagePullSecrets

To use a container image registry that has access restrictions and requires credentials, you need to leverage `ImagePullSecrets` in your deployment. Refer to the [Kubernetes Documentation](https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/) for additional information on this topic.

In addition, reference your Cloud Provider documentation on how to create `ImagePullSecrets`.

!!! note
    Ensure that the `ImagePullSecret` has been created in the same namespace that your DX deployment is installed to.

## Configure deployment to use ImagePullSecrets

In order for the HCL Digital Experience 9.5 deployment to leverage `ImagePullSecrets` you need to adjust your `custom-values.yaml` file to include the following syntax:

```yaml
images:
 imagePullSecrets:
 - name: regcred         
```

The name `regcred` can be different, depending on how you have created your `ImagePullSecret` and how it is named. Ensure that you reference the correct name in the configuration.

It is assume that you have moved the HCL Digital Experience 9.5 images to your registry; make sure it is also configured properly in your `custom-values.yaml`:

```yaml
images:
  repository: "your-repo:port"                
```

All pods created now have that secret configured for pulling DX container images.

## Configure deployment to use the HCL Harbor container registry

From CF205 onwards, it is possible to pull images directly from the HCL Harbor container registry. This requires every cluster node to be able to access the HCL Harbor container registry.

If you want to leverage this feature, you will have to configure an ImagePullSecret with your HCL Harbor credentials.

To do so, use the following command targeting your the Kubernetes namespace for your deployment:

```sh
# E-Mail and username are your harbor login, the password is your harbor CLI secret
kubectl create secret -n <YOUR-NAMESPACE> docker-registry dx-harbor --docker-server="hclcr.io" \
--docker-email='<YOUR_HARBOR_USERNAME>' \
--docker-username='<YOUR_HARBOR_USERNAME>' \
--docker-password='<YOUR_HARBOR_CLI_SECRET>'
```

You can obtain the CLI secret from harbor by navigating to your `User Profile` in [HCL Harbor](https://hclcr.io). You can copy it from the field called `CLI secret`.

After executing this command you should receive the following message:

```text
secret/dx-harbor created
```

Inside your `custom-values.yaml` you can now adjust the ImagePullSecret to the secret that was just created and point to the HCL Harbor container registry.

```yaml
# Image related configuration
images:
  # Image pull secrets used for accessing the repository
  imagePullSecrets:
    - name: "dx-harbor"
```

You deployment can now directly pull the container images from the HCL Harbor container registry.
