# Creating and deploying the initial release

Build the initial Portal Application Archive \(PAA\) file, prepare the servers for the deployment, and then deploy the initial release to your production servers.

1.  [Creating the initial release](../deploy/dep_cir.md)  
When you want to stage your initial release to another server, you must build the initial release Portal Application Archive \(PAA\) file from your source server.
2.  [Preparing the servers for initial staging](../deploy/dep_prep.md)  
You must set up your production servers before you move content from the staging server to the production server. The steps remove any release content from these servers to prepare them for the following import of the release data. It is assumed that these servers are fresh installed servers. The servers must not contain any customization data. Complete all database and security configurations.
3.  [Deploying the initial release](../deploy/dep_deploy.md)  
After you create and prepare your initial staging and production servers, you must install and deploy the contents of the staging server to the production server. If you have a cluster, install and deploy on the primary and secondary nodes of the cluster. After you stage the initial release to production servers, you can install and deploy your differential release to the production servers.
4.  [Deploying the initial release in a multiple cluster](../deploy/dep_deploy_clus.md)  
If you are using a multiple cluster in single cell topology, you must run the empty-portal task before you deploy the initial release and before you deploy the PAA file. Use the -DemptyPortalDuringDeployPAA=false parameter during the deployment.

**Parent topic:**[Staging to production](../deploy/dep_intr.md)

