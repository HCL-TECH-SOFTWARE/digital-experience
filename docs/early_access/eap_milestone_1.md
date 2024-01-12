# HCL DX Early Access Program Milestone 1

The goal of the HCL Digital Experience (DX) Access Program is for the community of participants to conduct an honest, constructive and thoughtful review and testing of new components introduced for use with the HCL Digital Experience 9.5 software. 

## Open Liberty Portlet Container 

The Open Liberty Portlet Container is a standalone implementation of a JSR 168 and 286 portlet runtime along with a Web Services for Remote Portlets (WSRP) Producer. The Open Liberty Portlet Container is available as an Early Access Program component as a separate Docker image from the HCL DX 9.5 core container images. 

Reference the topic [How to download HCL DX Early Access Program] components below for instructions. 

The Open Liberty Portlet Container is intended to run Java portlet workloads in Kubernetes, with those portlets being consumed on DX Core pages over WSRP. This component includes a set of Helm charts and has been architected to run in a Kubernetes environment, inside the same namespace as an existing DX Kubernetes deployment.

This approach aims to offer a modernized architecture and allow distributed portlet and web apps to be deployed and managed separately while aggregated and rendered through DX. Additional benefits include use of later JDK and J2EE levels, faster start and performance, and easier-to-write applications that can leverage open software and that work well for cloud native deployments.

The Open Liberty Portlet Container image is based on the Open Liberty server runtime rather than IBM WebSphere Application Server which is currently used to run HCL DX components and services. 

In the Early Access Program Milestone 1 version, the underlying technologies and version levels used in the Open Liberty Portlet container are:

- Open Liberty 22.0.0.6 with JavaEE 8
- Java 11.0.0.21
- Red Hat Universal Base Image Minimal 8.8-1072

It is anticipated that these version levels will be increased before general release.

## Differences for Portlets running in Open Liberty compared to running in DX Core

Portlets running in the Open Liberty Portlet Container will experience a number of major differences in their runtime environment compared to those running in the current DX Core:

- They will be running on a different (Open Liberty) JavaEE application server, so if they use any APIs specific to IBM WebSphere Application Server, they may find those are no longer available.
- They will be running on a newer version of Java.
- They will not be running on the same JVM as DX Core and therefore will not have local access to any DX Java APIs such as the Model API or WCM API.

There are also additional differences specific to the Early Access version that are set out in the next section.

## Prerequisites

Kubernetes platform for non-production use 


How to download HCL DX Early Access Program components
You can obtain the HCL DX Early Access Program components from your HCL Digital Experience entitlements in the HCL Software License Download Portal, in the HCL Digital Experience Early Access download package entry.

The file description and file name for the HCL DX Early Access Program Milestone 1 Open Liberty Portlet container is HCL DX EAP M1 LPC image and dx-lpc-kubernetes-CF217.zip

