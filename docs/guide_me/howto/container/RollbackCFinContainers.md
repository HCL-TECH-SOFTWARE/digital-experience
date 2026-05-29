# How to rollback to a previous CF version in Kubernetes/OpenShift

## Applies to

> HCL Digital Experience 9.5

## Introduction

This document helps to revert to the previous cumulative fix (CF) version in case the upgrade of the DX core pod fails and goes into a crashloop.  

## Instructions

If a previous version profile is present in the Persistence Volume (PV) then it is possible to follow the below steps to rollback to previous version:

Access core PV and check if the `prof_95/<oldCF>` directory exists. If it exist it is possible to follow the below steps to rollback the environment to oldCF from newCF.

1. Set replicas of the dx-core pod to 0 and perform a helm upgrade

2. Delete the NewCF directory from the Persistence volume

3. Set images and tags to OldCF and perform a helm upgrade

4. Set replicas of the dx-core to 1 and perform a helm upgrade

!!!note
    If the previous version profile does not exist, please open a support case with HCL Support to check the problem in detail.
