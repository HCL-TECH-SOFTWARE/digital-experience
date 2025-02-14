# How to deploy a robots.txt in DX containers environments

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

How to deploy a robots.txt in DX containers environments

## Instructions

Steps to deploy robots.txt file in DX containers environment.

1) Deploy DX in any supported cloud providers (EKS, AKS, GKE and OpenShift).  
2) Build web application (.war) included robots.txt and set context root to / for the application.  
3) Deploy application in WAS.  
4) Try to access robots.txt using LB IP.  

 `https://<loadbalancer hostname or IP>/robots.txt`
