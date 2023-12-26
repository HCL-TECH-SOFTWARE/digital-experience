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

## Secure License Server Configuration from CF217 for License Manager application

Secure communication between HCL DX and the HCL License Server (cloud or local) involves signed content using a public/private keypair. You will need to generate and distribute this keypair. HCL DX will sign licensing requests with the private key and the License Server will verify signatures with the corresponding public key.

!!! note
     The License Manager expect the public key to be uploaded to Flexnet beforehand and the private key to be passed as a secret in the Helm values. However, in case the private key is not provided, our system is designed to generate these keys automatically and upload the public key without any action required.

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

The public key must be uploaded to your License Server using the provided command line tool. Follow the instructions in the “Introduction as follows:

Get the Bearer Authentication from Flextnet using authorize endpoint:

```CURL
curl --location 'https:// hclsoftware.compliance.flexnetoperations.com/api/1.0/instances/ADR234XYHK/authorize' \
--header 'Content-Type: application/json' \
--data-raw '{"password":"XXXXXXX","user":"XXXXXXX"}'

```
Response from authorize endpoint:

```JSON
{
    "expires": "2023-12-19T05:39:28.850Z",
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlzcyI6IlE4QTVZQ1ozQTRHSCIsImlhdCI6MTcwMjg3Nzk2OCwiZXhwIjoxNzAyOTY0MzY4LCJyb2xlcyI6IlJPTEVfQURNSU4sUk9MRV9EUk9QQ0xJRU5ULFJPTEVfUkVBRCxST0xFX1JFU0VSVkFUSU9OUyIsInhzcmZUb2tlbiI6IjRmOWRjMGFkLWQ1MGMtNGZhZi05YmE0LTc0N2ZmMjJjODQ0MiJ9.mvuXXJNfew-WzJ7CX8Y8yH339zX3SNpaX79jMTu-shanE8nHPfZRA240EAsVO64nMxFAPyr_8gP7JOLRQ2XOeA"
}
```

Upload the public key to the Flexnet server:

```CURL
curl --location 'https:// hclsoftware.compliance.flexnetoperations.com/api/1.0/instances/ADR234XYHK/rest_licensing_keys' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlzcyI6IlE4QTVZQ1ozQTRHSCIsImlhdCI6MTcwMTk0NTY5NCwiZXhwIjoxNzAyMDMyMDk0LCJyb2xlcyI6IlJPTEVfQURNSU4sUk9MRV9EUk9QQ0xJRU5ULFJPTEIOPKLVBRCxST0xFX1JFU0VSVkFUSU9OUyIsInhzcmZUb2tlbiI6IjI0MjRiOTgwLWY2ZDEtNGViYi04NWQ5LTI3YmQzMTJmYzIwZiJ9.JR0fnMZyyMY4wwPtE9kMWD2kvbxLgBplq2X-wgmYpe7COFW-5IVvdLmdaRvb0AydSKHf3DKPDGVrd2dubr9Lbw' \
--header 'Content-Type: application/octet-stream' \
--data '@/Flexnet-release/portal_public_key.der'
```
Response from Flexnet server:

```JSON
{
    "publicKey": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAUUUIPHJnjgPOMnbqsjqsL29p313tvMpV0QjIDT03traV3v4UnUuIrIYmYPerzQJsVzoKZHU0IYA9FZTLXP4uJMPTwNJhDVtbki5Fbx4h9U2c7h78QCFne07kdtAeBh0keReFklpj7CJbOi4RhqSX6uaZ/gBOg+RMT6/q9Oxkry31WvqISNWlAXmyfNQTo/GMUe4dKpbEBGPOLKRESHlBXnqrqPw+EqlrJDiJSr/TIfLokm8qFLSzBwYahhi6L0gnLmnuEPPfkxFwhjaSjdb336dVGzkRc1AsS9L0TDTtQBzUxkL6cIW+EzxXOyWnT2ekcFMripuyXBG80UkhXKTVpRwj/nXeXQIDAQAB"
}

```

 ### Helm Chart Configuration to enable private key in License Manager Deployment
 
Create your secret using a private Key:

 ```kubectl
 kubectl create secret generic <secret name> --from-file=privateKey=myKey.pem -n <namespace>
 ```
Reference the secret in helm values yaml:

 ```
 security:
   licenseManager:
     customFlexnetLicenseManagerPrivateKeySecret: <secret name>
 ```

!!! note
     Multiple instances running with the same entitlement and license server all instances need to either:
     1. All instances use the same private key
     2. All instances not have configured a private key

**Revoke of public key from Flexnet**

If you ever need to revoke the public key from Flexnet, the steps to do so are outlined in their documentation. To complete the revocation process, you will need to provide the Bearer Authentication token to authenticate the request. It's important to note that without the token, the revocation process cannot be completed.

Get the Bearer Authentication from Flextnet using authorize endpoint:

```CURL
curl --location 'https:// hclsoftware.compliance.flexnetoperations.com/api/1.0/instances/ADR234XYHK/authorize' \
--header 'Content-Type: application/json' \
--data-raw '{"password":"XXXXXXX","user":"XXXXXXX"}'

```
Response from authorize endpoint:

```JSON
{
    "expires": "2023-12-19T05:39:28.850Z",
    "token": "eyJ0eXAiOiJKV1QiLCJhbXXXYYYUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlzcyI6IlE4QTVZQ1ozQYUPLFWNUISQACIsImlhdCI6MTcwMjg3Nzk2OCwiZXhwIjoxNzAyOTY0MzY4LCJyb2xlcyI6IlJPTEVfQURNSU4sUk9MRV9EUk9QQ0xJRU5ULFJPTEVfUkVBRCxST0xFX1JFU0VSVkFUSU9OUyIsInhzcmZUb2tlbiI6IjRmOWRjMGFkLWQ1MGMtNGZhZi05YmE0LTc0N2ZmMjJjODQ0MiJ9.mvuXXJNfew-WzJ7CX8Y8yH339zX3SNpaX79jMTu-shanE8nHPfZRA240EAsVO64nMxFAPyr_8gP7JOLRQ2XOeA"
}
```
Use DELETE endpoint to revoke the public key:

```CRUL
curl --location --request DELETE 'https:// hclsoftware.compliance.flexnetoperations.com/api/1.0/instances/ADR234XYHK/rest_licensing_keys' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlzcyI6IlE4QTVZQ1ozQTRHSCIsImlhdCI6MTcwMzQ5ODg0MywiZXhwIjoxNzAzNTg1MjQzLCJyb2xlcyI6IlJPTEVfQURNSU4sUk9MRV9EUk9QQ0xJRU5ULFJPTEVfUkVBRCxST0xFX1JFU0VSVkFUSU9OUyIsInhzcmZUb2tlbiI6IjJlYTNjM2U3LWQ3MDEtNDFjMS05NWQ2LWEyOTMzZjBlNTQwNyJ9.u8ZAF4SpBoLucxPA0WaEtcDkuQVT3ZCGx-qAtHYbcZDD%YYBBzqvYWkxN3fTRHjNRKE0idV8bh5Zs75KSvU9A''
```
Expected status 410 Gone