# User synchronization monitoring and reporting

The user synchronization process ensures that your organization's user records remain consistent across multiple systems. This process fetches and consolidates data from various directories and uses it to update and maintain the internal repository.

Monitoring and reporting are critical to understanding how the synchronization job performs. You can use the logs generated from this process to identify potential issues, ensuring user data is synchronized correctly across all of your systems.


### Important log messages

Monitoring log messages during the synchronization process is crucial for identifying issues and ensuring successful synchronization. Here are some key log messages to monitor:

- **Start and Completion Logs:**
    - **Starting synchronization:** Indicates the start of the process.
    - **Synchronization completed successfully:** Confirms that the process finished without any major issues.

- **Error Logs:**
    - **Pipeline failed:** Indicates a critical failure in the streaming pipeline.
    - **Error fetching users from database:** Flags issues with retrieving data from the local repository.
    - **Error processing user with id [GUID]:** Indicates problems that occur during individual user processing.

- **Data Integrity Logs:**
    - **Deleted profile image for user with id [GUID]:** Confirms that associated assets are being correctly managed.
    - **Deleted user with id [GUID]:** Ensures that stale user data is correctly removed.

- **Performance and Metrics Logs:**
    - **Time lapsed for synchronization:** Provides insight into the duration of the process, which can be useful for performance tuning.

???+ info "Related information"
    - [Logstash documentation](../../../../../guide_me/performance_tuning/kubernetes/logstash_opensearch.md)
