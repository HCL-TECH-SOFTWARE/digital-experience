# User synchronization monitoring and reporting

The user synchronization process ensures that your organization's user records remain consistent across multiple systems. This process fetches and consolidates data from various directories and uses it to update and maintain the internal repository.

Monitoring and reporting are critical to understanding how the synchronization job performs. You can use the logs generated from this process to identify potential issues, ensuring user data is synchronized correctly across all systems. This document outlines key steps in monitoring and interpreting the logs generated during the synchronization process.

### Monitoring Summary

You can use the logs generated from the synchronization process to fetch and consolidate user data.

- **Fetch user data**: Logs are generated to track the start and completion of the user data retrieval process from various directories as well as any errors encountered.
- **Consolidate user data**: Logs are used to monitor the process of merging and consolidating user data. These logs capture the entire consolidation process, including any errors that occur.

## Important Log Messages

Monitoring log messages during the synchronization process is crucial for identifying issues and ensuring successful synchronization. Here are some key log messages to pay attention to:

1. **Start and Completion Logs:**
    - **Starting synchronization:** Indicates the start of the process.
    - **Synchronization completed successfully:** Confirms that the process finished without any major issues.

2. **Error Logs:**
    - **Pipeline failed:** Indicates a critical failure in the streaming pipeline.
    - **Error fetching users from database:** Flags issues with retrieving data from the local repository.
    - **Error processing user with id [GUID]:** Indicates problems that occur during individual user processing.

3. **Data Integrity Logs:**
    - **Deleted profile image for user with id [GUID]:** Confirms that associated assets are being correctly managed.
    - **Deleted user with id [GUID]:** Ensures that stale user data is correctly removed.

4. **Performance and Metrics Logs:**
    - **Time lapsed for synchronization:** Provides insight into the duration of the process, which can be useful for performance tuning.

???+ info "Related information"
    - [Logstash documentation](./guide_me/performance_tuning/kubernetes/logstash_opensearch.html)
