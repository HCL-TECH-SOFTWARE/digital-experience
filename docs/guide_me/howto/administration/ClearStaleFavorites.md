# How to clear stale Favorites from the Portal Dashboard

## Applies to

> HCL Digital Experience 9.5 and higher

## Introduction

You have Favorite locations on the Portal Dashboard that were saved but the locations have been deleted or moved. Because the favorites are no longer available, you can't remove the star as there is no star to uncheck. This article describes how to resolve this situation.

## Instructions  

???+ info "Warning"
    Backup the DX database(s) before running the commands! It will clear out your Favorite items and locations!

To clear out the orphaned favorites, run the following ConfigEngine tasks:

```bash
./ConfigEngine.sh remove-wcm-jpa-tables

./ConfigEngine.sh create-wcm-jpa-tables

./ConfigEngine.sh stop-server
    
./ConfigEngine.sh start-server
```  
