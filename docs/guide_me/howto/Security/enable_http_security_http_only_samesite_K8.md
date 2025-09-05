# How to enable HTTP Security, HttpOnly, and SameSite DX cookies in HCL DX

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

This article provides the steps to enable different HTTP-related security flags and attributes in your HCL Digital Experience (DX) environment through the IBM WebSphere Application Server (WAS) and NGINX Ingress controller. The following security flags and attributes will be discussed:

1. Cookie with a Secure flag
2. Cookie With a HttpOnly flag
3. Cookie with a SameSite attribute

## Instructions

You can enable the security flags and attributes through the following:

- IBM WAS
- NGINX Ingress
- NGINX Ingress Enterprise

### Enabling through the WebSphere Application Server

1. In IBM WAS, navigate to **Security > Global Security > Web and SIP security > Single sign-on (SSO)**.
2. Tick the `Enabled` checkbox to enable SSL.
3. Tick the `Set security cookies to HTTPOnly to help prevent cross-site scripting attacks` checkbox
4. Click **Apply**.
5. Click **Save** at the top of the console messages.
6. Configure the `JSESSIONID` cookie:

    1. Navigate to **Server > Server Types > Web application servers > <\server_name> > Web Container Settings > Web container > Session management > Enable cookies**  
    2. Tick the `Restrict cookies to HTTPS sessions` checkbox.
    3. Tick the  `Set session cookies to HTTPOnly to help prevent cross-site scripting attacks` checkbox.
    4. Click **Apply**.
    5. Click **Save** at the top of the console messages.

### Enabling through NGINX Ingress

1. In your `custom-values.yaml` file, set the following parameters:

    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
    annotations:
        nginx.ingress.kubernetes.io/proxy-cookie-path: |
        / "/; HTTPOnly; Secure; SameSite=strict"
    ```

2. Perform a Helm upgrade to apply your changes.

### Enabling through NGINX Ingress Enterprise

1. In your `custom-values.yaml` file, set the following parameters:

    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
    name: cafe-ingress-with-annotations
    annotations:
        nginx.org/server-snippets: |
        proxy_cookie_path / "/; secure; HttpOnly; SameSite=strict";
    ```

2. Perform a Helm upgrade to apply your changes.
