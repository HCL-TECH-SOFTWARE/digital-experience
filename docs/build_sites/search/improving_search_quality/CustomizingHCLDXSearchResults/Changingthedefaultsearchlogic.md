# Changing the default search logic

In the HCL DX search center, the default search logic for the entry is the “OR” logic. To change the search logic to the “AND” relationship, you must modify the properties in the search collection configuration. After the search crawler finishes running for the first time, do the following steps:

1. Log in to the Remote Search Server.

2. Search for the search collection configuration file. There is one configuration file for each collection. 
    
    The file name format is `collection_config_***.xml` where *** is a sequence of generated alphanumeric numbers. The files are in directory /apps/search/config/.

3. Add the following property to the list of properties:

    <property name="DEFAULT_SEARCH_OPERATOR" value="and"/>

    The property should be in the `collectionInfo` tag.

4. Save the changes to all configuration files.

5. Restart the remote search servers only.
