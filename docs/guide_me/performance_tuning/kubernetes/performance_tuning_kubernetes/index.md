# Performance Tuning Guide for HCL DX on Kubernetes

## About This Document

This white paper serves as a foundational guide for parameter and application tuning specific to HCL Digital Experience 9.5 and higher releases (formerly known as IBM WebSphere Portal and IBM Web Content Manager) when deployed on Kubernetes.

Tuning and capacity considerations are influenced by a variety of factors, including the workload scenario and the performance measurement environment. The aim of this guide is not to prescribe exact parameter values but to familiarize readers with the parameters that were utilized in the Portal performance benchmarks.

Performance tuning is an iterative process, often requiring multiple adjustments to achieve the desired system performance. It is crucial to start with a baseline and continuously monitor performance metrics to identify which parameters may need modification. After making any changes, it is essential to conduct another measurement to evaluate the impact of that change. Ideally, only one parameter should be adjusted between each measurement to accurately assess the specific benefit of each tuning adjustment.

## Performance Tuning Overview

Tuning an HCL Digital Experience (DX) environment involves tuning and configuring the various systems and components of the environment. This chapter discusses some general concepts and details the specifics of the configuration used in our measurement environments. These specifics entail:

- Configuring the application server and the resources defined for that application server
- Tuning the database(s) and database server
- Tuning the directory server and its database
- Tuning the HA proxy server
- Optimizing Pod CPU Limits and Requests in Kubernetes
- Horizontal Pod Autoscaling
- Tuning the operating system and network stack
- Tuning the HCL DX services to ensure sufficient bandwidth to support the required user load
- Performance is acceptable even on slower, long-distance networks

When tuning specific systems, it is important to begin with a baseline and monitor performance metrics to determine if any parameters should be changed. When a change is made, another measurement should be made determine the effectiveness of the change.

This Performance Tuning Guide has been specifically tailored for HCL Digital Experience (DX) deployments on Kubernetes. It builds upon the existing performance tuning guidelines, with modifications and additions to address the unique challenges and opportunities presented by Kubernetes environments. The adjustments and recommendations provided in this guide are designed to optimize the performance, scalability, and reliability of DX applications within Kubernetes.

## Using This Document

A ConfigEngine tuning task was added in Portal 8.0.0.1 CF 6 and ships out of the box with HCL Portal 8.5 and above. This task automatically applies some, but not all the tuning changes discussed in this document. This includes basic tuning of the JVM Max heap & nursery sizes, JDBC & WebContainer ThreadPools and CacheManagerService properties.

The tuning task also configures Portal as a rendering server by setting deployment.subscriberOnly=true and turning off the toolbar. This can be changed for Authoring environments by editing the task’s properties files.

In Kubernetes this task is run automatically when deploying. Depending on the authoring value of true or false the tuning for the authoring or rendering environment is applied.

See [Portal server performance tuning tool](../../../../deployment/manage/tune_servers/wp_tune_tool.md) for information on how to configure and run this task.

If additional tuning is necessary, start by applying the Base Portal Tuning then apply the tunings that are specific to the use case. For example, if you are using Web Content Management (WCM) also apply the WCM tunings.