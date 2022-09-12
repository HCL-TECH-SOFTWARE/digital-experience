
# Configure to Deploy on the Internal Network

This section contains the procedure to deploy DX on the internal network.

## How to deploy DX on the internal network

To deploy DX on the internal network (with no public access), we need to add the platform-specific annotations for the HAProxy service. Update your custom `values.yaml` file with the annotation specific to your cloud provider. Refer to the list of [annotations](https://kubernetes.io/docs/concepts/services-networking/service/#internal-load-balancer).

```yaml
annotations:
  service: 
    # Annotations for haproxy service.
    haproxy: []
```

??? example "Example for GKE:"

    ```yaml
    annotations:
      service: 
        # Annotations for haproxy service.
        haproxy:
        - key: cloud.google.com/load-balancer-type
          value : "Internal"
    ```
## How to update the existing deployment

Follow the steps to update an existing deployment from an external network to an internal network or vice-versa:

!!! note

    Update to the network type results change in IP address and requires updates to your DNS services.

1.  Disable HAProxy in your custom `values.yaml` file and then do helm update.

    ??? example "Example:"

        ```yaml
          # Controls which application is deployed and configured
        applications:
          # Deploys haproxy
          haproxy: false
        ```

2.  After updating your custom `values.yaml` file, run helm update command.

    ```
    helm upgrade dx-deployment -n <your namespace> . -f ./<your customized `values.yaml` file>
    ```

    ??? example "Example:"
        ```
        helm upgrade dx-deployment -n dxns . -f ./cloud-deploy-values.yaml
        ```

3.  After the update is completed, enable HAProxy and add annotations specific to your cloud provider in custom `values.yaml` file.

    ```yaml
    # Controls which application is deployed and configured
    applications:
      # Deploys haproxy
      haproxy: true
    # Annotations for different DX Resources.
    # Type: Array of objects
    # Sample values for core:
    # core:
    # - key: KEY1
    # value: VALUE1
    # - key: KEY2
    # value: VALUE2
    annotations:
      service: 
        # Annotations for haproxy service.
        haproxy:
         - key: cloud.google.com/load-balancer-type
           value : "Internal"
    ```

    !!! note

            To switch your existing deployment from an internal network to a public network, remove the annotation from the ***haproxy service.***

4.  After updating `values.yaml` with annotations, run helm update command.

    ```
    helm upgrade dx-deployment -n <your namespace> . -f ./<your custom values file>
    ```

    ??? example "Example:"
    
        ```
        helm upgrade dx-deployment -n dxns . -f ./cloud-deploy-values.yaml
        ```

5.  Do a helm update with your existing custom `values.yaml` file to make sure all the updates are present in the deployment.

    Run the helm update command with the updated `values.yaml` file.

    ```
    helm upgrade dx-deployment -n <your namespace> . -f ./your custom values file>>
    ```

    ??? example "Example:" 
          ```
          helm upgrade dx-deployment -n external-lb . -f ./cloud-deploy-values.yaml
          ```

