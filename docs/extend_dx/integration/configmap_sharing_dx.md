# Co-Deployment Configuration Sharing

This guide explains how you can use the standardized configuration sharing feature between HCL products (such as DX, LEAP, and MX) deployed in the same Kubernetes namespace. The goal is to simplify integration, reduce manual configuration, and create a single source of truth for common settings.

## Overview

Configuration sharing allows one product (the "producer") to share its configuration securely with other products (the "consumers") using Kubernetes Secrets. This is an opt-in feature: you control which products share and consume configuration.

**Key Benefits:**
- Seamless integration between HCL products without manual configuration.
- Independent deployment lifecycles for each product.
- Reduced configuration effort and operational overhead.
- Each product only consumes relevant configuration data.
- No single point of failure; products operate independently if shared config is missing.

For more technical details, see [Design: ConfigMap/Secret Sharing for Co-Deployment](./design-sharing-config-secret-co-deployment.md).

---

## How It Works

The system uses native Kubernetes features, so no extra components are required.

### Producer & Consumer Flow

1. **Enable Sharing**  
   In the Helm values.yaml file for your product, set:
   ```yaml
   enableConfigurationSharing: true
   ```
   This tells the product to participate in configuration sharing.

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
  enableConfigurationSharing: false
  ```

- **DX Core:**  
  Shares LTPA and SSL configuration:
  ```yaml
  apiVersion: v1
  kind: Secret
  metadata:
    name: dx-shared-config-v1
    labels:
      app: dx
      component: core
  type: Opaque
  stringData:
    ltpa: |-
      enabled: <value>
      privateKey: <value>
      publicKey: <value>
      customLtpaSecret: <value>
    ssl: <value>
  ```

- **DX WebEngine:**  
  Shares its own LTPA configuration and any custom secrets:
  ```yaml
  apiVersion: v1
  kind: Secret
  metadata:
    name: dx-shared-config-v1
    labels:
      app: dx
      component: webengine
  type: Opaque
  stringData:
    ltpa: |-
      customLtpaSecret: <value>
    customSecrets: |-
      <custom secrets>
  ```

Each key is prefixed with the component name to avoid conflicts (e.g., `core.ltpa`, `webengine.ltpa`).

---

## How to Use Configuration Sharing

### As a Producer (Share Your Product’s Configuration)

If you want your product to share its configuration:

1. **Create the Helm Template File**  
   In your product’s Helm chart, add a new template file (e.g., `templates/<product>-shared-secret.yaml`).

2. **Use the Producer Template**  
   Example:
   ```yaml
   {{- if .Values.enableConfigurationSharing }}
   apiVersion: v1
   kind: Secret
   metadata:
     name: <product>-shared-config-v1
     labels:
       app: <product>
       component: shared-config
   type: Opaque
   stringData:
     # Add your shared keys here
   {{- end }}
   ```

3. **Add Your Configuration Data**  
   Example for DX:
   ```yaml
   stringData:
     ltpa: |-
       enabled: <value>
       privateKey: <value>
       publicKey: <value>
       customLtpaSecret: <value>
     ssl: <value>
   ```

4. **Enable the Feature in values.yaml**  
   ```yaml
   enableConfigurationSharing: true
   ```

---

### As a Consumer (Use Shared Configuration)

If you want your product to consume shared configuration:

1. **Specify Which Shared Config to Use**  
   In your values.yaml:
   ```yaml
   consumeSharedConfigs:
     - name: dx-shared-config
       version: v1
   ```
   You can also specify a version range:
   ```yaml
   consumeSharedConfigs:
     - name: dx-shared-config
       version:
         min: v1
         max: v2
   ```

2. **Define the Volume to Mount the Secret**  
   In your deployment YAML:
   ```yaml
   spec:
     template:
       spec:
         volumes:
           - name: dx-shared-config-volume
             secret:
               secretName: dx-shared-config-v1
               optional: true
   ```

3. **Mount the Volume in Your Container**  
   ```yaml
   spec:
     template:
       spec:
         containers:
           - name: <your-product>
             volumeMounts:
               - name: dx-shared-config-volume
                 mountPath: /etc/config/shared/dx
                 readOnly: true
   ```

4. **Access the Shared Data**  
   Each key in the Secret becomes a file in the mount path. For example, if the Secret contains `core.ltpa`, you can read it from `/etc/config/shared/dx/core.ltpa`.