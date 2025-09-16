---
title: Change the Domain/Schema For Dynacache Invalidation Table in the Database
---
# Introduction
HCL DX Portal relies heavily on a type of hashmap known as a "dynacache". A dynacache is an instance of the Java object "DistributedMap" or "com.ibm.websphere.cache.DistributedMap" if one prefers the fully qualified class name. A dynacache is merely a cluster aware HashMap. That means that if a particular instance of a dynacache changes (say on one cluster member in a WebSphere Application Server cluster), all other cluster members are made aware of that change.

However, in Kubernetes, there are no WebSphere Application Server clusters. All DX Portal instances are running as non-clustered WebSphere Application Server instances. But the dynacaches in these instances need to know if a dynacache in a particular DX Portal instances changes a dynacache value. In Kubernetes, this is achieved thru the use a database table named "INVALIDATION_TABLE". 

By default, the database INVALIDATION_TABLE resides in the the "RELEASE" domain/schema. However, there may be use cases whereby this table would be better stored in one of the other 3 domain/schemas (e.g. "JCR", "COMMUNITY" or "CUSTOMIZATION"). Changing the location of this table can (only) be achieved in the kubernetes helm chart of the HCL DX Portal.

# How DX Portal Determines the Location of Invalidation Table
HCL DX Portal will examine the WebSphere Application Server REP (Resource Environment Provider) called "WP_ConfigService". It will retrieve the value for the custom property "db.cache.invalidation.domain". It will use that value as the domain/schema for the invalidation table in all DX Portal code using a dynacache.

As mentioned in the introduction, the default domain/schema for this table is "RELEASE". This default value is also found in the helm chart "values.yaml" as "invalidationDomain: RELEASE".

# Changing the Domain/Schema of the Invalidation Table"
Changing the Domain/Schema of the invalidation table from the default of "RELEASE" involves two steps:

1. Update the value of "invalidationDomain" in "values.yaml".
2. Run "helm upgrade" after changing the value. Assuming you have your specific helm values in a file called "install-deploy-values.yaml", the helm upgrade command might be this:

```
helm upgrade -n dxns -f install-deploy-values.yaml dx-deployment  ./install-hcl-dx-deployment
```
where "dxns" is the name space for this deployment, "install-deploy-values.yaml" is the yaml file with the change, "dx-deployment" is the DX deployment value and "install-hcl-dx-deployment" is the directory containing the helm chart.

Running the "helm upgrade" command will delete the pod(s) and restart the portal pod with the updated domain/schema.

Consult the page "[Upgrading Helm Deployment](../../install/container/helm_deployment/update_helm_deployment.md)" for more details on doing a "helm upgrade".

