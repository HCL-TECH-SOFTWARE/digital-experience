# DX License Manager

This section documents on notification to customers regarding what settings to use for the Cumulative Fixes related to the DX License Manager, in what releases you should not deploy it, from when you should deploy this container and also settings that you need to use for non-production and production environment.

From DX 9.5 Container Update 204 through 206 releases, new configurations are introduced for later deployment and should not be enabled with these releases. Instructions to do so will be provided at a future date. 

## Helm chart configurations from CF204 to CF206 for License Manager application

In custom-values.yaml, we have configuration for License Manager application in many sections. For CF204 until CF206, you should not deploy this application and so, only configuration which you need to verify is related to application deployment flag which is mentioned below.

To verify if the License Manager application is NOT enabled:

```
applications:
  # Deploys License Manager
  licenseManager: false
```

## Helm Chart Configurations from CF207 for License Manager application

The Helm chart provides License Manager configurations in `applications` section and image `tags` and `names` sections. It also provides `licenseManager` section under the `configuration`, `security`, `volumes` and `resources` section.

### Example for currently available configuration

You can use the following syntax in your `custom-values.yaml` file to adjust the License Manager settings:

**Enable License Manager Deployment**

```
applications:
  # Deploys License Manager
  licenseManager: true
```

!!! note
    Starting from HCL Digital Experience 9.5 CF207, it is mandatory to enable deployment of License Manager application with `licenseManager: true`.

## Helm Chart Configurations from CF208 for License Manager application

Starting HCL Digital Experience 9.5 CF208, additional configuration to support local license manager is defined in helm chart.

***Secure License Server Configuration***

Secure communication between HCL DX and the HCL License Server (cloud or local) involves signed content using a public/private keypair. You will need to generate and distribute this keypair. HCL DX will sign licensing requests with the private key and the License Server will verify signatures with the corresponding public key.

!!! note
     Just to clarify, it is important to note that we expect customer to upload the corresponding public key to Flexnet beforehand. However, in case the customer doesn't provide a private key, our system is designed to generate these keys automatically and upload the public key without any action required from the customer.

### Generate Public/Private Keypair

You will need to generate a public/private keypair to be used for secure communication. The keypair should be in “RSA 2048-bit” format. The private key must be “pksc8” format. The public key must be in “DER” format.
Various third-party tools are available for generating this keypair. Refer to the documentation supplied with the third-party tool for instructions.
The following is an example of keypair generation using OpenSSL:

```
# Generate private key 
openssl genrsa -out portal_private_key.pem 2048

#Get the public key. 

openssl rsa -in portal_private_key.pem -pubout -outform DER -out portal_public_key.der

#Convert private key to pkcs8 format to use it with HCL Portal

openssl pkcs8 -topk8 -inform PEM -outform PEM -in portal_private_key.pem -out portal_private_key_pkcs8.pem -nocrypt

```
### Upload Public Key

The public key must be uploaded to your License Server using the provided “flexnetlsadmin” command line tool. This tool requires Java 1.8 to run and requires that the License Server’s Admin password is set. Follow the instructions in the “Introduction to the HCL License Server” document to set the Admin password. Run the “flexnetlsadmin” tool as follows:

```
flexnetlsadmin.bat -server https://[license server host]/api/1.0/instances/[license server ID] -authorize admin [license sever admin password] -uploadPublicKey [local path to public key (in DER format)]
```

For example:

```
flexnetlsadmin.bat -server https:// hclsoftware.compliance.flexnetoperations.com/api/1.0/instances/ADR234XYHK - authorize admin adminpwd -uploadPublicKey C:\temp\portal_public_key.der

```

If you experience SSL issues when using the “flexnetlsadmin” tool, try one of the following:

i. Upgrade the JVM which is being used to run the “flexnetlsadmin” tool
ii. Import the certificate of https://hclsoftware.compliance.flexnetoperations.com into
the JVM’s trust store
iii. Run the “flexnetlsadmin” tool with the -noCertCheck flag (not recommended)

### Confirm Entitlement Mapping

Invoke the following command to confirm that you have mapped entitlements to your license server instance:

instance:
```
flexnetlsadmin.bat -server https://[license server host]/api/1.0/instances/[license server ID] -authorize admin [license sever admin password] -licenses -verbose
```
For example:
```
flexnetlsadmin.bat -server https://hclsoftware.compliance.flexnetoperations.com/api/1.0/instances/ADR234XYHK - authorize admin adminpwd -licenses -verbose
```

 **Helm Chart Configuration to enable private key in License Manager Deployment**

 ```
 security:
   licenseManager:
     privateKeySecret: LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JSUV2Z0lCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktnd2dnU2tBZ0VBQW9JQkFRRGd2akRBaUxLSj
 ```

**Revoke of public key from Flexnet**

If you need to revoke the public key from Flexnet for any reason, you can follow the steps outlined in their documentation.In order to revoke the public, you will need to provide the JWT token that was used to authenticate the request. Without the token, the revocation process cannot be completed.
(Note that the https://jwt.io website also provides a graphical tool that can be used to achieve the same result as a programmatic method.)  

```
curl --location --request DELETE 'https://hclsoftware.compliance.flexnetoperations.com/api/1.0/instances/ADR234XYHK/rest_licensing_keys' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlzcyI6IlE4QTVZQ1ozQTRHSCIsImlhdCI6MTcwMTk0NTY5NCwiZXhwIjoxNzAyMDMyMDk0LCJyb2xlcyI6IlJPTEVfQURNSU4sUk9MRV9EUk9QQ0xJRU5ULFJPTEVfUkVBRCxST0xFX1JFU0VSVkFUSU9OUyIsInhzcmZUb2tlbiI6IjI0MjRiOTgwLWY2ZDEtNGViYi04NWQ5LTI3YmQzMTJmYzIwZiJ9.JR0fnMZyyMY4wwPtE9kMWD2kvbxLgBplq2X-wgmYpe7COFW-6cuybnmkplkssdspooweds'

```