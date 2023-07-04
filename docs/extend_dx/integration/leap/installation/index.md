# Installation with HCL Leap

!!! note
    This guide only applies for HCL Digital Experience 9.5 Container Deployments in combination with HCL Leap Helm installations.
    The currently supported version combination is:

      - HCL Digital Experience CF213
      - HCL Leap 9.3.2 

The following are high-level steps for Installing HCL Leap with an existing DX Deployment.
Please see [HCL Leap product documentation](https://help.hcltechsw.com/Leap/9.3.2/index.html) for detailed instructions. 

Before performing the steps, HCL Digital Experience must already be installed and properly setup in the same Kubernetes cluster as Leap. For more information see: [Deploying to a Container (Kubernetes) Platform - Open Liberty](https://help.hcltechsw.com/Leap/9.3.2/deploy_container_kubernetes_openliberty.html)

???+ info "Post deployment tasks"
    - You should now be able to access Leap through `https://<your-domain>/apps`. It's is recommended that you do the [post-deployment tasks](https://help.hcltechsw.com/Leap/9.3.2/in_setting_up_environment.html)
