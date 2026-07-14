# How to clear stale favorites from the portal dashboard

## Applies to

> HCL Digital Experience 9.5 and higher

## Introduction

If you delete or move locations saved as favorites on the portal dashboard, the orphaned locations are retained. This article describes how to clear stale favorites from the portal dashboard.

## Instructions  

???+ info "Warning"
    Back up the DX databases before running the commands. These tasks clear your favorite items and locations.

To clear the orphaned favorites, run the following ConfigEngine tasks:

```bash
./ConfigEngine.sh remove-wcm-jpa-tables

./ConfigEngine.sh create-wcm-jpa-tables

./ConfigEngine.sh stop-server
    
./ConfigEngine.sh start-server
```  
