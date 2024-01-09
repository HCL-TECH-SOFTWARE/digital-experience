# HCL Digital Experience Early Access Program Milestone 1

The goal of the HCL Digital Experience Access Program is for the community of participants to conduct an honest, constructive and thoughtful review and testing of new components introduced for use with the HCL Digital Experience 9.5 software. 

## Open Liberty Portlet Container 

The Open Liberty Portlet Container is a standalone implementation of a JSR 168 and 286 portlet runtime along with a Web Services for Remote Portlets (WSRP) Producer. It is available as an Early Access Program component as a separate Docker image from the HCL Digital Experience 9.5 core container images. Reference the topic How to download HCL DX Early Access Program components below for instructions. The Open Liberty Portlet Container is intended to run Java portlet workloads in Kubernetes, with those portlets being consumed on DX Core pages over WSRP. This component includes a set of Helm charts and has been architected to run in a Kubernetes environment, inside the same namespace as an existing DX Kubernetes deployment.
Over time it is expected this approach will offer a modernized architecture and allow distributed portlet and web apps to be deployed and managed separately while aggregated and rendered through DX. Additional benefits include use of later JDK and J2EE levels, faster start and performance, also easier to write applications that can leverage open software and that work well for cloud native deployments.


The Open Liberty Portlet Container image is based on the Open Liberty server runtime rather than IBM WebSphere Application Server (currently used to run HCL DX components and services). 

In the Early Access Program Milestone 1 version, the underlying technologies and version levels used in the Open Liberty Portlet container are:

- Open Liberty 22.0.0.6 with JavaEE 8
- Java 11.0.0.21
- Red Hat Universal Base Image Minimal 8.8-1072

It is anticipated that these version levels will be increased before general release.
