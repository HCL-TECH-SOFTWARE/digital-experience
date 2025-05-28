# How to deploy a `robots.txt` in DX containers environments

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

This document describes how to deploy a `robots.txt` file in HCL Digital Experience (DX) container environments.

## Instructions

Refer to the following steps to deploy a `robots.txt` file in DX container environments:

1. Deploy DX in any supported cloud providers, such as Amazon Elastic Kubernetes Service (EKS), Azure Kubernetes Service (AKS), Google Kubernetes Engine (GKE), and Red Hat OpenShift.  
2. Build your web application (`.war` file) with the `robots.txt` file included within the root of the application's web content.
3. Configure the application's context root to `/`.
4. Deploy the application in the Websphere Application Server (WAS).
5. Access your `robots.txt` using the load balancer host name or IP. For example: `https://<loadbalancer hostname or IP>/robots.txt`.
