# What's new in CF226

The following features and updates are available to customers installing HCL Digital Experience (DX) Container Update CF226 on supported platforms:

**All Digital Experience Versions (8.5, 9.0, 9.5)**

**Digital Experience 8.5 and 9.0 Versions**

- Extended Support option now available for DX versions 8.5 and 9.0
- Automatically apply 9.5 from a later CF installation

**Digital Experience 9.5 Container Version**

- Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository
- Removal of automated Pod restart on ConfigMap updates

**All Digital Experience Versions (8.5, 9.0, 9.5)**

### RingAPI Security Upgrade: TLS Enforcement and CA Certificate Support

=== "Hybrid Deployments"
    With this update, we have enforced TLS validation for hybrid deployments, ensuring secure communication between services by preventing unauthorized TLS connections.
    - If you are running a **hybrid deployment**, no action is required—secure TLS enforcement is enabled automatically.  
    - If you are using a **non-hybrid deployment**, TLS validation remains disabled to maintain compatibility with existing configurations.  
    - Ensure that any external services you connect to support **valid TLS certificates** to avoid unexpected connection issues.

=== "Mitigation for Existing Deployments"
    Your DX Core deployment must have a valid and officially trusted SSL certificate to ensure proper TLS enforcement.
    To override the default behavior, use the **environment variable override functionality** in the **Helm chart**:  

    ```yaml
    environment:
    pod:
        ringApi:
        - name: NODE_TLS_REJECT_UNAUTHORIZED
        value: '"1"'
    ```  

    For more details on configuring environment variables, refer to the [Helm Deployment Guide](https://help.hcl-software.com/digital-experience/9.5/CF224/deployment/install/container/helm_deployment/preparation/optional_tasks/optional_labels_annotations/#environment-variables){target="_blank"}.  
  
=== "Extra-Cert Capability in RingAPI"
    A CA certificate is now added to RingAPI for secure TLS authentication. Previously, TLS validation was bypassed using NODE_TLS_REJECT_UNAUTHORIZED=0, but with this update, all external communications are properly verified against a trusted CA.
    - The required **CA certificate** is now included in **RingAPI**.  
    - If you have **custom certificates**, ensure they are properly added to your environment.  
    - This improves security by enforcing **valid certificate verification** in all RingAPI communications.
