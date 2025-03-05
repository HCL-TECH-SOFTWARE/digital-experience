# People Service and Search V2 integration

## Overview

The People Service now integrates with [Search V2](../../../../build_sites/search_v2/index.md) to enhance user discoverability and search performance. This integration provides efficient access to user profile data with real-time update synchronization.

## Key features

- **User discovery**: Enables searching profiles using attributes such as name, email, role, and organization.
- **Real-time synchronization**: Updates in People Service are reflected immediately.

## Indexing capabilities

People Service provides indexing capabilities to ensure search results are up-to-date. Administrators can initiate a full index or retry indexing operations if needed. You can find API details for these operations in [API Explorer](../api/index.md).

## Configuration

People Service now supports [Search V2](../../../../build_sites/search_v2/index.md). You can enable the Search V2 integration through the parameter `configuration.search.middleware.enabled` in the People Service Helm chart.
For configuration details, see [Search configuration](../deployment/configuration/index.md#search-configuration).

## Indexing process

People Service automatically indexes data when changes occur. However, it does not initialize index data at system startup.

### Regular indexing behavior

When creating and mutating users using the API or provisioning users through [User synchronization](../administration/user_provisioning/user_synchronization/), the user data is indexed as needed as part of the creation or mutation process.

### On-demand indexing

If immediate processing is required, the People Service provides an indexing API that fully resynchronizes the index with the People Service user data.

### Upgrading to CF226 or later

If the People Service already persisted user data, a manual triggering of the indexing API is required.

## Searching for a user in HCL DX

To search for a user via HCL Digital Experience (DX):

1. Click the search box located at the top of the DX interface.
2. Enter the user's name, role, email address, or other relevant attributes.
3. Ensure that the content source for people is the relevant one.
4. Review the search results and click the desired user to open their profile.
    ![Search V2 - Search center](./img/dx-search-center.png)

For more detailed instructions, refer to the [Search V2 End User Guide](../../../../build_sites/search_v2/usage.md).


## Summary

The integration with **Search V2** enhances user discovery, ensures real-time synchronization, and improves the accessibility of user profile data within HCL Digital Experience.