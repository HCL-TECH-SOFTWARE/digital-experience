# Installing HCL Volt MX Foundry to Kubernetes with Helm

This topic explains how to deploy HCL Volt MX Foundry to an existing Kubernetes cluster using Helm. This is the recommended method for production-grade, containerized installations on-premise or in the cloud.

## Prerequisites

Before you begin, ensure you have:

- An existing Kubernetes cluster running version 1.27.6 or higher. This solution *does not* create a Kubernetes cluster for you
- Helm version 3 installed. You can download Helm binaries from the [Helm Releases page on GitHub](https://helm.sh/){target="_blank"}
- Administrative access to your Kubernetes cluster through `kubectl`
- Downloaded the Foundry Helm chart
- Deployed HCL Digital Experience (DX). For more information, refer to [Deploy Container Platforms Using Helm](../../../deployment/install/container/helm_deployment/overview.md)

## Deploying and configuring Volt MX Foundry with Helm

Refer to the following steps to deploy and configure Volt MX Foundry to an existing Kubernetes cluster using Helm.

1. Prepare the Helm chart.

    1. Create a directory for your Foundry deployment and navigate into it using the following commands:

        ```bash
        $ mkdir ~/Foundry-9.5.n.n_GA
        $ cd ~/Foundry-9.5.n.n_GA
        ```

        !!!note
            Replace `9.5.n.n` with your specific Foundry version (for example, `9.5.15.0`).

    2. Unzip the downloaded Helm chart into this new directory using the following command:

        ```bash
        $ unzip ~/Downloads/HelmChart-9.5.n.n_GA.zip
        ```

        You should now see the `values.yaml` file and the `apps` and `dbupdate` subdirectories.

2. Generate unique IDs for your Foundry installation to initialize account details.

    1. For a new deployment:

        Run the `init-guids.sh` script with the `--new` option. This will create an `upgrade.properties` file. Save it for future upgrades.

        ```bash
        $ ./init-guids.sh --new
        # Expected output will show generated keys and update values.yaml
        ```

    2. For an upgrade from a prior Foundry version:

        1. Obtain the `upgrade.properties` file from your prior deployment and copy it into the same directory as `values.yaml`.
        2. Invoke the `init-guids.sh` script specifying the file path of the prior deployment's `upgrade.properties`.

            ```bash
            $ ./init-guids.sh --upgrade .
            # Expected output will show keys updated from your prior deployment
            ```

            Both steps will update `values.yaml` with the necessary configuration changes.

3. Customize your `values.yaml` file to configure your specific deployment details. Run the following command to open the `values.yaml` file:

    ```bash
    $ vi values.yaml
    ```

    This file contains parameters for:

    - `installEnvName`: A lowercase string for your environment (for example, `dev`, `qa`, `prod`). The values for this parameter must not contain numbers.
    - `hclImagePullSecret`: The Kubernetes secret configured with your HCL Harbor login details.
        - If you have not created this secret, run the following command to create it:

            ```bash
            kubectl create secret docker-registry foundry-image-pull --docker-server=hclcr.io --docker-username=<your-name> --docker-password=<your-pword> --docker-email=<your-email>
            ```

        - Set `hclImagePullSecret` to `foundry-image-pull`.

    - `foundryInstallType`: Must be `"PRODUCTION"` or `"NON-PRODUCTION"`.
    - Install Components: Set `true` or `false` for `identityEnabled`, `consoleEnabled`, `apiPortalEnabled`, `integrationEnabled`, `engagementEnabled`, `dbUpdateEnabled`.
    - Application Server Details:
        - `enableCaCertsOverride`: Set to `true` if you are using self-signed or non-JRE-trusted CA certificates. Add your certificate to `apps/certs/cacerts`.
        - `serverDomainName`: The hostname of your LoadBalancer (for example, `foundry.example.com`). This hostname cannot be set to an IP address or `localhost`.

    - Ingress Details:
        - `ingress.enabled`: Set to `true`. This parameter is required for proper function (unless temporarily disabled for specific conditions).
        - `ingress.protocol`: `http` or `https`. Must be `https` if `ingress.tls` is enabled.
        - `ingress.port`: Typically `80` or `443`. Must be `443` if `ingress.tls` is enabled.
        - `ingress.class`: Set if your cluster does not have a default Ingress controller or you want to override it (for example, `nginx`, `traefik`, `openshift-default`, `azure-application-gateway`).
        - `ingress.annotations`: Add additional annotations (for example, `nginx.ingress.kubernetes.io/proxy-body-size: "100m"`). Indent 2 spaces per annotation.
        - `ingress.tls.enabled`: Set to `true` to use Cluster SSL Certificate or a custom one.
        - `ingress.tls.customCertSecretName`: Provide the name of the secret containing `tls.crt` and `tls.key` for a custom certificate.
        - `ingress.sslTermination`: Set to `true` for OpenShift to terminate SSL at the route.

    - Database Details:
        - `dbType`: `mysql`, `sqlserver`, or `oracle`.
        - `dbHost`: Database server hostname. Use a static IP if the value is set to an IP address.
        - `dbPort`: Port number. This parameter can be empty for cloud-managed services.
        - `dbUser`, `dbPass`: Database username and password.
        - `dbPrefix`, `dbSuffix`: Optional database prefix and suffix. For upgrades, use the same values as the initial installation.
        - `useExistingDb`: Set to `true` if you are using existing databases.
        - For `oracle` `dbType`, also specify `dbDataTS`, `dbIndexTS`, `dbLobTS`, `dbService`.
        - `timeZone`: Optional database time zone (for example, `Etc/UTC`).

    - Readiness and Liveness Probes Details: Default values are provided for `readinessInitDelay`, `livenessInitDelay`, `readinessPeriodSeconds`, `readinessTimeoutSeconds`, `livenessPeriodSeconds`, `livenessTimeoutSeconds`. Customize these as necessary.
    - Minimum and Maximum RAM percentage Details: `minRamPercentage` (default `50`), `maxRamPercentage` (default `80`).
    - Container resource limits for memory and CPU: `resourceRequestsCpu`, `resourceRequestsMemory`, `resourceMemoryLimit` for each application (Identity, Console, API Portal, Integration, Engagement). Refer to Kubernetes documentation for details.
    - Custom JAVA_OPTS Details: Customize JVM options for each application using `customJavaOpts`.
    - Number of instances for each component: Set `replicas` under each application for the desired number of container instances (default is 1).

4. Ensure `kubectl` is connected to your target Kubernetes cluster by running the following command.

    ```bash
    $ kubectl get nodes
    # You should see your cluster nodes listed with STATUS "Ready".
    ```

5. (Optional) Create a dedicated Foundry namespace to help organize your deployment using the following command:

    ```bash
    $ kubectl create namespace <namespace>
    namespace/foundry created
    ```

6. Install Foundry applications with Helm using the following command:

    ```bash
    $ helm install foundry apps -f values.yaml -n <namespace> --timeout 10m
    # You'll see output indicating the deployment status.
    ```

    The deployment will take time as container images are downloaded and applications initialize.

You have now successfully installed HCL Volt MX Foundry.

!!!tip
    - Some values are empty by default in the MX `values.yaml` file. If you do not set these values, you may encounter the following error: `Error: INSTALLATION FAILED: values don't meet the specifications of the schema(s) in the following chart(s)...` followed by a list of unset (or incorrectly set) parameters. For guidance on setting the values according to your specific case, refer to the [Steps to Install Volt MX Foundry Container Cluster Solution](https://help.hcl-software.com/voltmx/v9.5/Foundry/voltmxfoundry_containers_helm/Content/Installing_Containers_With_Helm.html#installation){target="_blank"}.
    - If you get the following error: `Error: INSTALLATION FAILED: failed pre-install: 1 error occurred: * timed out waiting for the condition`, you may need to investigate further, such as running `kubectl describe` on a failing pod or `kubectl logs` on related pods, to determine the actual cause.
    - Ensure you create the `hclImagePullSecret` before running `helm install`, otherwise the image pull will fail.

???+ info "Related information"
    - [Installation Guide for Volt MX Foundry Containers Helm Installation](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmxfoundry_containers_helm/Content/Introduction.html).
