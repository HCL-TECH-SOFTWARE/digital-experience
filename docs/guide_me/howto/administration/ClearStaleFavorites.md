# How to clear stale favorites from the Portal Dashboard

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

You have Favorite Locations that were saved but the locations have been deleted or moved. Because the favorites are no longer available, you can't remove the star as there is no star to uncheck. This article describes how to resolve this situation.

## Instructions  

The "Remove from Favorites" functionality is not working because the dashboard is cluttered with old favorites and even some orphan favorites.

WARNING: BACKUP PORTAL DATABASE BEFORE RUNNING THIS! IT WILL CLEAR OUT YOUR FAVORITE ITEMS AND LOCATIONS

To clear out the orphaned favorites, run the following ConfigEngine tasks:

    ./ConfigEngine.sh remove-wcm-jpa-tables

    ./ConfigEngine.sh create-wcm-jpa-tables

    ./ConfigEngine.sh stop-server
    
    ./ConfigEngine.sh start-server
