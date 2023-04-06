# Containers

HCL Digital Experience 9.5 and future releases ship [docker images](https://opensource.hcltechsw.com/digital-experience/cf205/platform/kubernetes/docker/), all of which are based upon the secure Red Hat UBI image and were built as non-root user.

Container deployments may provide improved security, especially relating to physical security, availability, key management services, and [CI/CD](https://help.hcltechsw.com/digital-experience/9.5/containerization/ci_cd.html).

If you [plan to deploy](https://help.hcltechsw.com/digital-experience/9.5/install/rm_container_deployment.html) one or more of these, then consider the following –

## Recommended actions and considerations
• Trust boundaries & responsibilities:
    o When moving from a traditional on-premise deployment to a hybrid or fully containerized deployment, you must clearly delineate responsibilities.
    o All cloud service provider responsibilities should be verified by the provider – do not only assume the scope of their role in security.
    o Establish responsiveness criteria from the service provider.

• Establish a procedure for asset management. In cloud environments, the simplicity of provisioning comes at a cost – provisioned resources may be forgotten, creating a larger attack surface. Ensure that assets are decommissioned when they are no longer needed.
• These images use the default administrator ID and password in the file based repository. [Update the Portal and WebSphere Application Server administrative IDs and passwords](https://help.hcltechsw.com/digital-experience/8.5/security/sec_pswds.html) so that they are not the defaults. Refer to the Odds and Ends section regarding recommendations against using the file repository in production.
• Consider routing external requests for sensitive URLs, like the IBM WebSphere Application Server Integrated Solutions Console, Configuration Wizard, and [API explorer](https://opensource.hcltechsw.com/digital-experience/CF210/extend_dx/apis/hcl_experience_api/api_explorers/), to an error message, to guard against platform profiling, probing, brute force password attacks, etc. One option would be to add an ingress rule - refer to instructions on [configuring ingress](https://opensource.hcltechsw.com/digital-experience/CF210/deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-ingress/?h=haproxy) and external documentation on ingress rules.
• The HCL Digital Experience Operator container is only leveraged with version 9.5 for Red Hat OpenShift deployments and the best practices for Red Hat OpenShift security should be followed to ensure a secure deployment.
    o [Basics](https://www.redhat.com/en/topics/security/container-security)
    o As with other fundamental technologies, the recommendations in this guide are not comprehensive. Independently research security hardening guidelines for Red Hat OpenShift.
• Set [cspFrameAncestorAllowedSourceURLs](https://opensource.hcltechsw.com/digital-experience/CF210/deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configure_networking/) to guard against clickjacking attacks.
• Set [SameSite Cookie Attribute](https://opensource.hcltechsw.com/digital-experience/CF210/deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configure_networking/#configuring-samesite-cookie-attribute) for added protection of DX Core cookies.
• Configure HCL Digital Experience API to [connect to HCL Portal via HTTPS](https://opensource.hcltechsw.com/digital-experience/CF210/extend_dx/apis/hcl_experience_api/getting_started_ringapi_docker_/).
• For more information on container security, start [here](https://docs.docker.com/engine/security/) and continue researching independently.