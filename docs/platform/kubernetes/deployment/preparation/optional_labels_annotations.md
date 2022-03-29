# Configure Labels and Annotations

This section documents the configuration of labels and annotations for different DX resources.

-   **Annotations**

    **Services and Pods**

    To configure annotations for kubernetes services and pods, update your custom-values.yaml file as follows:

    !!!note "Notes:"

     -   Additional annotations are not mandatory for a deployment.
     -   Ensure you do not overwrite existing DX annotations such as the following:

        ```
        meta.helm.sh/release-name
        ```

        ```
        meta.helm.sh/release-namespace
        ```

     -   **Sample annotations for core service**

        To set annotation `KEY1` with value VALUE1 and annotation `KEY2` with value VALUE2 on the core service, add the following to your custom-values.yaml file:

        ```
        annotations:
          service: 
            core: 
              - key: KEY1
                value: VALUE1
              - key: KEY2
                value: VALUE2
        ```

     -   **Sample annotations for core pods**

        To set annotation `KEY1` with value VALUE1 and annotation `KEY2` with value VALUE2 on core pods, add the following to your custom-values.yaml file:

        ```
        annotations:
          pod: 
            core: 
              - key: KEY1
                value: VALUE1
              - key: KEY2
                value: VALUE2
        ```

-   **Labels**

    **Services and Pods**

    To configure labels for kubernetes services and pods, update your custom-values.yaml file as follows:

    !!!note "Notes:"

     -   Additional labels are not mandatory for a deployment.
     -   Ensure that you do not overwrite existing DX Labels such as the following:

        ```
        release
        
        ```

        ```
        helm.sh/chart
        
        ```

        ```
        app.kubernetes.io/version
        
        ```

        ```
        app.kubernetes.io/managed-by
        
        ```

        ```
        app.kubernetes.io/name
        
        ```

        ```
        app.kubernetes.io/instance
        ```

     -   **Sample labels for core services**

        To set label `KEY1` with value VALUE1 and label `KEY2` with value VALUE2 on the core services, add the following to your custom-values.yaml file:

        ```
        label:
          service: 
            core: 
              - key: KEY1
                value: VALUE1
              - key: KEY2
                value: VALUE2
        ```

     -   **Sample labels for core pods**

        To set label `KEY1` with value VALUE1 and label `KEY2` with value VALUE2 on core pods, add the following to your custom-values.yaml file:

        ```
        label:
          pod: 
            core: 
              - key: KEY1
                value: VALUE1
              - key: KEY2
                value: VALUE2
        ```

