# System requirements

HCL People Service has the following system requirements and prerequisites for clients to use it and to deploy the service on servers. The requirements fall into four categories:

- [Kubernetes](#kubernetes)
- [Resource requirements](#people-service-resource-requirements)
- [Database](#database)
- [Web browsers](#web-browsers)

## Kubernetes

HCL People Service is desinged to run on any Certified Kubernetes platform with some conditions. These are similar requirements defined for HCL Digital Experience v9.5 deployment. See the [system requirements](../../../../get_started/system_requirements/kubernetes/kubernetes-runtime.md) for Kubernetes platforms for more information.

## People Service resource requirements

!!!tbd
    Do we need to specify additional resource requirements for multi-pod deployment?

The minimum requirements to install and run people are as follows:

- At least 512M of RAM
- At least 1G of diskspace

## Database

!!!tbd
    Do we need to specifically mention what is the minimum and maximum database version we support?

People Service is designed to work with existing HCL DX PostgreSQL database. Optionally you can connect to any existing PostgreSQL database by providing appropriate configuration before deploying the Helm chart.

## Web browsers

People Service is typically supported on all modern browsers. The following browsers are tested:

| | |
|---|---|
| Browsers | Minimum supported version |
| Apple Safari | 16.5.1 |
| Google Chrome | 115.0.5790.170 |
| Microsoft Edge | 115.0.1901.203 |
| Mozilla Firefox | 116.0.2 |
