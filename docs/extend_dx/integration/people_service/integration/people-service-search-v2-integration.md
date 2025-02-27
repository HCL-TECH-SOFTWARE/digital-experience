# People Service and Search V2 Integration

## Overview

The People Service now integrates with **Search V2** to enhance user discoverability and search performance. This integration enables efficient access to user profile data with real-time synchronization of updates.

## Key Features

- **User Discovery**: Enables searching profiles using attributes such as name, email, role, and organization.
- **Real-time Synchronization**: Updates in People Service are reflected immediately.

## Indexing Capabilities

People Service provides indexing capabilities to ensure search results are up-to-date. Administrators can initiate a full index or retry indexing operations if needed. API details for these operations can be found in the [API Explorer](../api/index.md).

## Configuration

People Service now supports [Search V2](https://help.hcl-software.com/digital-experience/9.5/latest/build_sites/search_v2/). You can enable the Search V2 integration through the parameter `configuration.search.middleware.enabled` in the People Service helm chart.
For more configuration details, refer to the [configuration parameters page](../deployment/configuration/index.md#search-configuration).

## Indexing Process

People Service automatically indexes data when changes occur. However, it does not initialize index data at startup.

### Regular Indexing Behavior

When creating and mutating users via the API or provisioning users via the [User synchronization](https://help.hcl-software.com/digital-experience/9.5/latest/extend_dx/integration/people_service/administration/user_provisioning/user_synchronization/), the user data will be indexed ad-hoc as part of the creation or mutation process.

### On-demand indexing

If immediate processing is required, the people service provides an indexing API that fully resynchronizes the index with the people service user data.

### Upgrading to CF226 or Later

If the people service already persisted user data, a manual triggering of the indexing API is required.

## Searching for a User via DX

To search for a user via HCL Digital Experience (DX):

1. Click on the search box located at the top of the DX interface.
2. Enter the user's name, role, email, or other relevant attributes.
3. Ensure that the content source for people is the relevant one.
4. Review the search results and click on the desired user to open their profile.
    ![Search V2 - Search center](./img/dx-search-center.png)

For more detailed instructions, refer to the [Search V2 End User Guide](https://help.hcl-software.com/digital-experience/9.5/latest/build_sites/search_v2/usage/).


## Summary

The integration with **Search V2** enhances user discovery, ensures real-time synchronization, and improves the accessibility of user profile data within HCL Digital Experience.