# Fresh Installations using HAProxy

In fresh DX deployments from CF203 and later, HAProxy is deployed by default, in place of Ambassador.

Although HAProxy is introduced in CF203, you will still have Ambassador [`CustomResourceDefinitions`](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) shipped with it to enable you to smoothly transition from Ambassador to HAProxy. However, for fresh deployments, the installation of Ambassador should be skipped by adding the [`--skip-crds`](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/#method-1-let-helm-do-it-for-you) flag to the `helm install` command.

!!!example "Example:"
    ```
    helm install -n <namespace> -f <custom-values.yaml> <release-name> <path/to/hcl-dx-deployment-vX.X.X_XXXXXXXX-XXXX.tar.gz> --skip-crds
    ```
