# How to manually renew the DX Core certificate and the Kubernetes secret

## Applies to

> HCL Digital Experience 9.5

## Introduction

The default certificate that ships with HCL Digital Experience will expire on April 26, 2021. Access to DX is not adversely affected. However scripts executed against the server will fail. For example stopServer or some ConfigEngine tasks. A new certificate will ship with HCL Digital Experience v9.5 CF194 or you can manually renew the certificate and the Kubernetes secret using the steps below.

!!!note
    The steps below use the out of box deployment name, dx-deployment. If you customized your deployment name please adjust the sample commands below accordingly.

## Instructions

### Renewing the Certificate

1. Log in into the IBM WebSphere Integrated Solutions Console (WAS admin console).

2. Navigate to **Security > SSL certificate and key management**.

3. Click on the **Key store and certificates** link on the right hand side of the page.

4. Click on **NodeDefaultKeyStore**.

5. Click on **Personal certificates**.

6. Select the check box for the **default** certificate.

7. Click on the **Renew** button.

8. Click **Save directly to the master configuration**.

### Updating the Certificate

1. Bash into the dx-deployment-core-0 pod in your namespace or access using the terminal in the OpenShift Container Platform console or Kubernetes dashboard.  

    ```bash
    kubectl exec -it dx-deployment-core-0 /bin/bash
    or
    kubectl exec -it dx-deployment-core-0 /bin/bash -n <namespace>
    ```

2. Copy the new key to the /opt/HCL/wp_profile/etc.

    ```bash
    cp /opt/HCL/wp_profile/config/cells/dockerCell/nodes/dockerNode/key.p12 /opt/HCL/wp_profile/etc/
    cp /opt/HCL/wp_profile/config/cells/dockerCell/nodes/dockerNode/trust.p12 /opt/HCL/wp_profile/etc/
    ```

3. Restart the DX Server.

    ```bash
    /opt/HCL/wp_profile/bin/./stopServer.sh WebSphere_Portal -user <WAS_ADMIN> -password <WAS_PASSWORD>
    /opt/HCL/wp_profile/bin/./startServer.sh WebSphere_Portal
    ```

4. Update the certificate information in the Kubernetes secret by extracting the certificate and key information from the updated WAS certificate using openssl. From a writable directory (i.e. /tmp or /home/dx_user) run the following commands:

    ```bash
    openssl pkcs12 -in /opt/HCL/wp_profile/config/cells/dockerCell/nodes/dockerNode/key.p12 -nokeys -nodes -passin pass:WebAS | openssl x509 -out cert.pem
    cp ./cert.pem ./tls.cert
    openssl pkcs12 -in /opt/HCL/wp_profile/config/cells/dockerCell/nodes/dockerNode/key.p12 -passin pass:WebAS -nodes -nocerts -info -out newkey.pem
    sed -n '/^-----BEGIN PRIVATE KEY-----/,/^-----END PRIVATE KEY-----/p' newkey.pem > key.pem
    cp ./key.pem ./tls.key
    openssl pkcs12 -info -in /opt/HCL/wp_profile/config/cells/dockerCell/nodes/dockerNode/trust.p12 -nodes -passin pass:WebAS > trust.cert
    ```

5. Exit the dx-deployment-core-0 container.

6. Using oc or kubectl commands, retrieve the tls.cert, tls.key and trust.cert files from your Kubernetes environment

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

7. Extract the updated certificate information from the trust.cert file

    ```bash
    awk '/-----BEGIN CERTIFICATE-----/{i++}i==2{print}' trust.cert > tls.dest.cert
    ```

8. OpenSSL adds a line terminator to the end of the trust.cert output. Remove this line termination from the tls.dest.cert file

    ```bash
    perl -i -pe 'chomp if eof' tls.dest.cert
    ```

9. Update the dx-deployment-dxcerts Kubernetes secret

    ```bash
    kubectl create secret generic dx-deployment-dxcerts --from-file=./tls.cert --from-file=./tls.key --dry-run=client -o yaml | kubectl apply -f -
    ```

    or

    ```bash
    kubectl create secret generic dx-deployment-dxcerts --from-file=./tls.cert --from-file=./tls.key --dry-run=client -o yaml -n <namespace> | kubectl apply -f -
    ```

10. Move or copy the tls.dest.cert file to a directory other than one where the tls.cert file is located mkdir dest

    ```bash
    mkdir dest
    cp tls.dest.cert ./dest/tls.cert
    ```

11. Update the dx-deployment-dxdest Kubernetes secret

    ```bash
    cd ./dest
    kubectl create secret generic dx-deployment-dxdest --from-file=./tls.cert --dry-run=client -o yaml | kubectl apply -f -

    or

    kubectl create secret generic dx-deployment-dxdest --from-file=./tls.cert --dry-run=client -o yaml -n <namespace> | kubectl apply -f -
    ```

12. If running in OpenShift, manually delete the **dx-deployment-service-dx-home-sec** route. The DX operator will recreate the route using the updated secrets data. If using additional custom routes that utilize the Digital Experience secrets, edit or delete/recreate them to use the updated secrets data.

    ```bash
    kubectl delete route dx-deployment-service-dx-home-sec
    ```

13. Clean up the generated files from within the container

    ```bash
    kubectl exec -it dx-deployment-core-0 -- rm -f /home/dx_user/cert.pem /home/dx_user/tls.cert /home/dx_user/newkey.pem /home/dx_user/key.pem /home/dx_user/tls.key /home/dx_user/trust.cert
    ```

    or

    ```bash
    kubectl exec -it dx-deployment-core-0 -n <namespace> -- rm -f /home/dx_user/cert.pem /home/dx_user/tls.cert /home/dx_user/newkey.pem /home/dx_user/key.pem /home/dx_user/tls.key /home/dx_user/trust.cert
    ```
