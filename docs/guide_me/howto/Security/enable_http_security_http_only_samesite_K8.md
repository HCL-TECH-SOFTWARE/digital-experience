# How to enable HTTP Security, HttpOnly and SameSite DX Cookies in kubernetes?

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

This document provide information to enable different http related security flags / attributes in the HCL Digital Experience environment (In the IBM Application Server and Nginx/Ingress controller). The following security flags and attribues will be discussed:

1. Cookie with Secure Flag
2. Cookie With HttpOnly flag
3. Cookie with SameSite Attribute

## Instructions

There are different places in the HCL Digital Experience Environment to enable these security flags / attributes.

### Enable Secure, HTTPOnly and the SameSite attribute in WebSphere Application Server

1. Open the IBM Integrated Solutions Console (WAS admin console) in your web-browser.

2. Navigate to **Security > Global Security > Web and SIP security > Single sign-on (SSO)**.

    a) Select `Enabled` (Enable SSL)

    b) Select `Set security cookies to HTTPOnly to help prevent cross-site scripting attacks`

    c) Save the changes

3. For JSESSIONID:

    a) Navigate to **Application servers > <server_name> > Web container > Session management > Cookies**  

    b) Select `Restrict cookies to HTTPS sessions`

    c) Select `Set session cookies to HTTPOnly to help prevent cross-site scripting attacks`

### Setting the HTTPOnly and Secure Flags in ingress

In the custom-values.yaml file set:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/proxy-cookie-path: |
      / "/; HTTPOnly; Secure; SameSite=strict"
```

### Setting the HTTPOnly and Secure Flags in ingress for Enterprise Niginx org

In the custom-values.yaml file set:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: cafe-ingress-with-annotations
  annotations:
    nginx.org/server-snippets: |
      proxy_cookie_path / "/; secure; HttpOnly; SameSite=strict";
```
