# Performance Tuning Guide for HCL DX on Kubernetes

This Performance Tuning Guide provides essential best practices for tuning parameters and applications in HCL Digital Experience (DX) 9.5 and later (formerly IBM WebSphere Portal and IBM Web Content Manager) deployed on Kubernetes.

Tuning and capacity considerations are influenced by a variety of factors, including the workload scenario and the performance measurement environment. The purpose of this guide is not to prescribe specific parameter values, but to familiarize readers with the parameters used in Portal performance benchmarks.

Performance tuning is an iterative process that typically requires multiple adjustments to achieve optimal system performance. It is important to start with a baseline and continuously monitor performance metrics to identify which parameters may need modification. After making any changes, it is essential  to re-measure system performance to assess their impact. Ideally, only one parameter should be adjusted between measurements to accurately isolate and assess the impact of each tuning change.
## Performance Tuning Overview

Tuning an HCL DX environment involves tuning and configuring the various systems and components of the environment. This chapter discusses some general concepts and details the specifics of the configuration used in the measurement environments. These specifics require:

- Configuring the application server and its associated resources
- Tuning the database(s) and database server
- Tuning the directory server and its database
- Tuning the HAProxy server
- Optimizing Pod CPU Limits and Requests in Kubernetes
- Horizontal Pod Autoscaling
- Tuning the operating system and network stack
- Tuning the HCL DX services to ensure sufficient bandwidth to support the required user load
- Performance is acceptable even on slower, long-distance networks

 When tuning specific systems, it is important to start with a performance baseline and monitor key metrics to identify which parameters may need adjustment. After making any changes, re-measure performance to evaluate the effectiveness of the modification.

This Performance Tuning Guide has been specifically customized for HCL DX deployments on Kubernetes. It builds on existing performance tuning guidelines, incorporating modifications and additions to address the unique challenges and opportunities of Kubernetes environments. The adjustments and recommendations provided in this guide are designed to optimize the performance, scalability, and reliability of DX applications within Kubernetes.

## ConfigEngine Tuning task

A `ConfigEngine` tuning task was added in Portal 8.0.0.1 CF 6 and ships out of the box with HCL Portal 8.5 and above. This task automatically applies some, but not all the tuning changes discussed in this document. This effort focuses on fundamental performance tuning, encompassing JVM maximum heap and nursery sizes, JDBC (Java Database Connectivity) and WebContainer thread pools, and `CacheManagerService` properties.

The tuning task also configures Portal as a rendering server by setting `deployment.subscriberOnly=true` and turning off the toolbar. This can be changed for Authoring environments by editis ng the task’s properties files.

In Kubernetes, this task is  automatically runwhen deploying. Depending on the authoring value of `true` or `false`, the tuning for the authoring or rendering environment is applied.

 Refer to the [Portal server performance tuning tool](../../../../deployment/manage/tune_servers/wp_tune_tool.md) for information on how to configure and run this task.

For further optimization, first apply the Base Portal Tuning, followed by adjustments specific to the use case. For example, if you are using Web Content Management (WCM), apply the WCM tunings.
