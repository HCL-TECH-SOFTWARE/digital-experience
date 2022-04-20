# Fresh Installations without Ambassador

In fresh deployments from CF203 onwards, HAProxy will be deployed by default in place of Ambassador.

Due to CF203 being the version to transition between Ambassador and HAProxy, it still includes the Ambassador [`CustomResourceDefinitions`](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/). For fresh deployments the installation of those should be skipped by adding the [`--skip-crds`](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/#method-1-let-helm-do-it-for-you) flag to the `helm install` command.

!!!example "Example:"
    ```
    helm install -n <namespace> -f <custom-values.yaml> <release-name> <path/to/hcl-dx-deployment-vX.X.X_XXXXXXXX-XXXX.tar.gz> --skip-crds
    ```
