# Co-Deployment Configuration Sharing

!!!attention
    This configuration sharing capability is currently in *incubator* status and is **not ready for production use**. Features in the incubator phase are experimental, subject to change, and intended for evaluation and feedback only. For more information, see [Incubator Features Definition](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_experimental_features.md).

This guide explains how you can use the standardized configuration sharing feature between HCL products (such as DX, LEAP, and MX) deployed in the same Kubernetes namespace. The goal is to simplify integration, reduce manual configuration, and create a single source of truth for common settings.

## Overview

Configuration sharing allows one product (the "producer") to share its configuration securely with other products (the "consumers") using Kubernetes Secrets. This is an opt-in feature where you control which products share and consume configuration.

**Key Benefits:**
- Seamless integration between HCL products without manual configuration.
- Independent deployment lifecycles for each product.
- Reduced configuration effort and operational overhead.
- Each product only consumes relevant configuration data.
- No single point of failure; products operate independently if shared config is missing.

## How It Works

The system uses native Kubernetes features, so no extra components are required.

### Producer & Consumer Flow

1. **Enable Sharing**  
    In the Helm values.yaml file for your product, set:
    ```yaml
    enableConfigurationSharing: true
    ```
    This enables your product to use shared configurations in the namespace.

2. **Producer Creates Secret**  
   The producer product (for example, DX) will automatically create a Kubernetes Secret named `<product-name>-shared-config-v<major>` (e.g., `dx-shared-config-v1`). This Secret contains the shared configuration. The major version is only incremented for breaking changes to the configuration schema.

3. **Consumer Mounts Secret**  
   Any consumer product can be configured to look for this Secret and mount it as a volume. This is optional—if the producer is not deployed, the consumer will still start normally.

4. **Runtime Consumption**  
   The consumer product reads the configuration files from the mounted volume and applies the settings, enabling seamless integration.

---

## Implementation Details

The shared configuration is stored in a single, unified Kubernetes Secret. This avoids naming collisions and makes management easier.

### What Is Shared

As of now, the following DX configuration is shared:

- **Helm Values:**  
  Enable or disable sharing in your values.yaml:
    ```yaml
    # Enable or disable configuration sharing between DX applications
    enableConfigurationSharing: false
    ```

- **DX Core:**  
  Shares LTPA and SSL configuration:
    ```yaml
    {{- if and .Values.incubator.enableConfigurationSharing (eq (include "hcl-dx-deployment.coreEnabled" .) "true") }}
    apiVersion: v1
    kind: Secret
    metadata:
        name: dx-shared-config-v1
        labels:
            app: dx
            component: core
    type: Opaque
    stringData:
        # LTPA configuration for Core
        ltpa: |-
            enabled: {{ .Values.configuration.core.ltpa.enabled | quote }}
            privateKey: {{ .Values.configuration.core.ltpa.privateKey | quote }}
            publicKey: {{ .Values.configuration.core.ltpa.publicKey | quote }}
            customLtpaSecret: {{ .Values.configuration.core.ltpa.customLtpaSecret | quote }}
        # SSL configuration for Core
        ssl: {{ .Values.configuration.core.ssl | quote }}
    {{- end }}
    ```

- **DX WebEngine:**  
  Shares its own LTPA configuration and any custom secrets:
    ```yaml
    {{- if and .Values.incubator.enableConfigurationSharing (eq (include "hcl-dx-deployment.webEngineEnabled" .) "true") }}
    apiVersion: v1
    kind: Secret
    metadata:
        name: dx-shared-config-v1
        labels:
            app: dx
            component: webengine
    type: Opaque
    stringData:
        # LTPA configuration for WebEngine
        ltpa: |-
            customLtpaSecret: {{ .Values.configuration.webEngine.ltpa.customLtpaSecret | quote }}
        # Custom secrets for WebEngine
        customSecrets: |-
            {{- toYaml .Values.configuration.webEngine.customSecrets | nindent 4 }}
    {{- end }}
    ```

Each key is prefixed with the component name to avoid conflicts (e.g., `core.ltpa`, `webengine.ltpa`).

---

## How to Use Configuration Sharing

### As a Producer (Share Your Product’s Configuration)

The below steps can be followed for your application (e.g., "Leap", "MX") to share its own configuration with other HCL products

In your product’s Helm chart, add two new template files: `templates/dx-shared-config-core.yaml` and `templates/dx-shared-config-webengine.yaml`.  
These files will store the shared configuration values for the DX Core and DX WebEngine components, respectively.

2. **Use the Producer Template**  
   Example:
    ```yaml
    # This single, unified Secret contains shared configuration for the application.
    # It is only created if enableConfigurationSharing is true in the values.yaml.
    {{- if .Values.enableConfigurationSharing }}
    apiVersion: v1
    kind: Secret
    metadata:
        # The name is dynamically generated from the chart name, e.g., "leap-shared-config-v1"
        name: <application>-shared-config-v1
        labels:
            app: <application>
            component: shared-config
    type: Opaque
    stringData:
        # Add your application's shared keys here
        # Example:
        # my-component.some-key: {{ .Values.path.to.value | quote }}
    {{- end }}
    ```

3. **Add Your Configuration Data**  
   Example for DX configuration data:
   ```yaml
    stringData:
        # example LTPA configuration for DX
        ltpa: |-
            enabled: {{ .Values.configuration.core.ltpa.enabled | quote }}
            privateKey: {{ .Values.configuration.core.ltpa.privateKey | quote }}
            publicKey: {{ .Values.configuration.core.ltpa.publicKey | quote }}
            customLtpaSecret: {{ .Values.configuration.core.ltpa.customLtpaSecret | quote }}
        # example SSL configuration for DX
        ssl: {{ .Values.configuration.core.ssl | quote }}

4. **Enable the Feature in values.yaml**  
   Ensure the master feature flag exists in your chart's values.yaml file and is set to false by default. This makes the feature safely opt-in.

    ```yaml
    # values.yaml
    # enableConfigurationSharing: Enables the creation of the <chart-name>-shared-config-v1 secret
    # to share configuration with other HCL products in the same namespace.
    enableConfigurationSharing: false
    ```

---

### Add New Keys to an Existing Producer

Use this guide to add more configuration keys to an already-existing producer, like DX.

**Locate the Existing Shared Secret Template and add the keys:**

Find the Helm template file that defines the shared secret for the producer application (e.g., for DX, this might be `templates/dx-shared-config-core.yaml` and `templates/dx-shared-config-webengine.yaml`) and follow the Steps to Add Your Keys

    ```yaml
    stringData:
        # example LTPA configuration for DX
        ltpa: |-
            enabled: {{ .Values.configuration.core.ltpa.enabled | quote }}
            privateKey: {{ .Values.configuration.core.ltpa.privateKey | quote }}
            publicKey: {{ .Values.configuration.core.ltpa.publicKey | quote }}
            customLtpaSecret: {{ .Values.configuration.core.ltpa.customLtpaSecret | quote }}
        # example SSL configuration for DX
        ssl: {{ .Values.configuration.core.ssl | quote }}
        # add more keys here for additional configuration to be shared
        #
        #
    ```
---

### As a Consumer (Use Shared Configuration)

To enable your product to use shared configuration, update your application to consume the shared Secret created by a producer.

1. **Specify Which Shared Config to Use**  
   
   For more explicit control, a consuming product should specify which version of shared configurations to mount. For example:
    ```yaml
    consumeSharedConfigs:
        - name: <application>-shared-config
        version: v1
    ```

   This can prevent unintended interruptions if new products are deployed later that also share configurations. The consumer can explicitly define which shared ConfigMap/Secret to mount, ensuring it only consumes the intended configuration.
   We can also allow for a version range to be specified, such as:
    ```yaml
    consumeSharedConfigs:
        - name: dx-shared-config
        version: 
            min: v1
            max: v2
    ```

2. **Define the Volume to Mount the Secret**  
    
    - name: A local name for the volume (e.g., <application>-config-volume).
    - secretName: The exact name of the producer's secret (e.g., <application>>-shared-config-v1).
    - optional: true: This is critical. It tells Kubernetes to proceed without error if the secret doesn't exist, ensuring your application can start even if the producer is not deployed.

    ```yaml
    # ... inside your deployment.yaml ...
    spec:
    template:
        spec:
        volumes:
            # ---- START: ADD THE SHARED SECRET VOLUME ----
            - name: <application>>-shared-config-volume # Or any name you choose
            secret:
                secretName: <application>-shared-config-v1 # The producer's secret name
                optional: true # IMPORTANT: This makes the dependency optional
            # ---- END: SHARED SECRET VOLUME ----
            # ... other existing volumes ...
    ```

3. **Mount the Volume in Your Container**  
   
    - name: Must match the volume name from Step 2.
    - mountPath: The directory path inside the container where the secret's data will appear as files (e.g., /etc/config/shared/<application>).
    - readOnly: true: A security best practice, as your application should not write to the shared config.

    ```yaml
    # ... inside your deployment.yaml ...
    spec:
    template:
        spec:
        containers:
            - name: <application>
            # ... other container properties ...
            volumeMounts:
                # ---- START: MOUNT THE SHARED VOLUME ----
                - name: <application>-shared-config-volume # Must match the volume name
                mountPath: /etc/config/shared/<application> # The path inside your container
                readOnly: true
                # ---- END: MOUNT THE SHARED VOLUME ----
                # ... other existing volume mounts ...
    ```

4. **Access the Shared Data**  
   Once the volume is mounted, each key from the producer's stringData becomes a file inside your specified mountPath.
   For example, if the dx-shared-config-v1 secret contains the key core.ltpa, your application can access its contents by reading the file at: /etc/config/shared/dx/core.ltpa.
