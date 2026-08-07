# How to manually renew the DX Core certificate and Kubernetes secret

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

The default certificate that ships with HCL Digital Experience (DX) expired on April 26, 2021. While access to DX is not adversely affected, scripts executed against your server (such as `stopServer` or certain `ConfigEngine` tasks) will fail. Updated certificates are included in DX v9.5 CF194 and subsequent releases. However, you may update your certificates and secrets manually if needed. This article describes how to manually renew the DX Core certificate and Kubernetes secret.

!!!note
    The following steps use the default deployment name, `dx-deployment`. If you customized your deployment name, adjust the sample commands accordingly.

## Instructions

To manually renew the DX Core certificate and Kubernetes secret, perform the following steps:

### Renewing the certificate

1. Log in to the IBM WebSphere Integrated Solutions Console (WAS admin console).

2. Navigate to **Security > SSL certificate and key management > Key store and certificates > NodeDefaultKeyStore > Personal certificates**.

3. Select the checkbox for the **default-dx-docker** certificate, and then select **Renew**.

4. Select **Save**.

### Updating the certificate and secrets

1. Access the `dx-deployment-core-0` pod in your namespace by using a bash shell, the OpenShift Container Platform console terminal, or the Kubernetes dashboard:

    ```bash
    kubectl exec -it dx-deployment-core-0 /bin/bash
    ```

    or

    ```bash
    kubectl exec -it dx-deployment-core-0 /bin/bash -n <namespace>
    ```

2. Copy the new key to the `/opt/HCL/wp_profile/etc` directory:

    ```bash
    cp /opt/HCL/wp_profile/config/cells/dockerCell/nodes/dockerNode/key.p12 /opt/HCL/wp_profile/etc/
    cp /opt/HCL/wp_profile/config/cells/dockerCell/nodes/dockerNode/trust.p12 /opt/HCL/wp_profile/etc/
    ```

3. Restart the DX server:

    ```bash
    /opt/HCL/wp_profile/bin/./stopServer.sh WebSphere_Portal -user <WAS_ADMIN> -password <WAS_PASSWORD>
    /opt/HCL/wp_profile/bin/./startServer.sh WebSphere_Portal
    ```

4. Extract the certificate and key information from the updated WAS certificate by using OpenSSL to update the certificate information in the Kubernetes secret. From a writable directory (for example, `/tmp` or `/home/dx_user`), run the following commands:

    ```bash
    openssl pkcs12 -in /opt/HCL/wp_profile/config/cells/dockerCell/nodes/dockerNode/key.p12 -nokeys -nodes -passin pass:WebAS | openssl x509 -out cert.pem
    cp ./cert.pem ./tls.cert
    openssl pkcs12 -in /opt/HCL/wp_profile/config/cells/dockerCell/nodes/dockerNode/key.p12 -passin pass:WebAS -nodes -nocerts -info -out newkey.pem
    sed -n '/^-----BEGIN PRIVATE KEY-----/,/^-----END PRIVATE KEY-----/p' newkey.pem > key.pem
    cp ./key.pem ./tls.key
    openssl pkcs12 -info -in /opt/HCL/wp_profile/config/cells/dockerCell/nodes/dockerNode/trust.p12 -nodes -passin pass:WebAS > trust.cert
    ```

5. Exit the `dx-deployment-core-0` container.

6. Use `oc` or `kubectl` commands to retrieve the `tls.cert`, `tls.key`, and `trust.cert` files from your Kubernetes environment:

    ```bash
    kubectl cp dx-deployment-core-0:/home/dx_user/tls.key ./tls.key
    kubectl cp dx-deployment-core-0:/home/dx_user/tls.cert ./tls.cert
    kubectl cp dx-deployment-core-0:/home/dx_user/trust.cert ./trust.cert
    ```

    or

    ```bash
    kubectl cp <namespace>/dx-deployment-core-0:/home/dx_user/tls.key ./tls.key
    kubectl cp <namespace>/dx-deployment-core-0:/home/dx_user/tls.cert ./tls.cert
    kubectl cp <namespace>/dx-deployment-core-0:/home/dx_user/trust.cert ./trust.cert
    ```

7. Extract the updated certificate information from the `trust.cert` file:

    ```bash
    awk '/-----BEGIN CERTIFICATE-----/{i++}i==2{print}' trust.cert > tls.dest.cert
    ```

8. Remove the line termination that OpenSSL adds to the end of the `trust.cert` output from the `tls.dest.cert` file:

    ```bash
    perl -i -pe 'chomp if eof' tls.dest.cert
    ```

9. Update the `dx-deployment-dxcerts` Kubernetes secret:

    ```bash
    kubectl create secret generic dx-deployment-dxcerts --from-file=./tls.cert --from-file=./tls.key --dry-run=client -o yaml | kubectl apply -f -
    ```

    or

    ```bash
    kubectl create secret generic dx-deployment-dxcerts --from-file=./tls.cert --from-file=./tls.key --dry-run=client -o yaml -n <namespace> | kubectl apply -f -
    ```

10. Create a new directory and copy the `tls.dest.cert` file to it:

    ```bash
    mkdir dest
    cp tls.dest.cert ./dest/tls.cert
    ```

11. Update the `dx-deployment-dxdest` Kubernetes secret:

    ```bash
    cd ./dest
    kubectl create secret generic dx-deployment-dxdest --from-file=./tls.cert --dry-run=client -o yaml | kubectl apply -f -
    ```

    or

    ```bash
    kubectl create secret generic dx-deployment-dxdest --from-file=./tls.cert --dry-run=client -o yaml -n <namespace> | kubectl apply -f -
    ```

12. If your deployment runs in an OpenShift environment, manually delete your `dx-deployment-service-dx-home-sec` route. The DX operator recreates the route using your updated secrets data. For existing custom routes that depend on these DX secrets, edit or recreate them to use the updated secrets data:

    ```bash
    kubectl delete route dx-deployment-service-dx-home-sec
    ```

13. Clean up the generated files from within the container:

    ```bash
    kubectl exec -it dx-deployment-core-0 -- rm -f /home/dx_user/cert.pem /home/dx_user/tls.cert /home/dx_user/newkey.pem /home/dx_user/key.pem /home/dx_user/tls.key /home/dx_user/trust.cert
    ```

    or

    ```bash
    kubectl exec -it dx-deployment-core-0 -n <namespace> -- rm -f /home/dx_user/cert.pem /home/dx_user/tls.cert /home/dx_user/newkey.pem /home/dx_user/key.pem /home/dx_user/tls.key /home/dx_user/trust.cert
    ```
