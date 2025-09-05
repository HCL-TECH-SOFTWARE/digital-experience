# How to enable HTTP Security, HttpOnly, and SameSite DX cookies in HCL DX

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

This article provides the steps to enable different HTTP-related security flags and attributes in your HCL Digital Experience (DX) environment through the IBM WebSphere Application Server (WAS) and NGINX Ingress controller. The following security flags and attributes will be discussed:  

**1. Cookie with a Secure flag**  
    "A secure cookie can only be transmitted over an encrypted connection (i.e. HTTPS). They cannot be transmitted over unencrypted connections (i.e. HTTP).   This makes the cookie less likely to be exposed to cookie theft via eavesdropping. A cookie is made secure by adding the Secure flag to the cookie." ***(source: [HTTP cookie](https://en.wikipedia.org/wiki/HTTP_cookie){target="_blank"})***  

**2. Cookie With a HttpOnly flag**  
    "An http-only cookie cannot be accessed by client-side APIs, such as JavaScript. This restriction eliminates the threat of cookie theft via cross-site scripting (XSS). However, the cookie remains vulnerable to cross-site tracing (XST) and cross-site request forgery (CSRF) attacks. A cookie is given this characteristic by adding the HttpOnly flag to the cookie." ***(source: [Http-only cookie](https://en.wikipedia.org/wiki/HTTP_cookie){target="_blank"})***  

**3. Cookie with a SameSite attribute**  
    "In 2016 Google Chrome version 51 introduced a new kind of cookie with attribute SameSite with possible values of Strict, Lax or None. With attribute SameSite=Strict, the browsers would only send cookies to a target domain that is the same as the origin domain. This would effectively mitigate cross-site request forgery (CSRF) attacks. With SameSite=Lax, browsers would send cookies with requests to a target domain even it is different from the origin domain, but only for safe requests such as GET (POST is unsafe) and not third-party cookies (inside iframe). Attribute SameSite=None would allow third-party (cross-site) cookies, however, most browsers require secure attribute on SameSite=None cookies." ***(source: [Same-site cookie](https://en.wikipedia.org/wiki/HTTP_cookie){target="_blank"})***  

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
