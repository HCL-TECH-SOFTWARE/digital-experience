---
id: Using-Logstash-to-Push-Pod-Logs-to-OpenSearch
title: Using Logstash to Push Pod Logs to OpenSearch
---

## Introduction

In today's cloud-native environments, Kubernetes is a widely adopted platform for container orchestration. As applications scale, managing the logs they generate becomes crucial for monitoring, debugging, and compliance. Logstash, an open-source data processing pipeline, can effectively collect, process, and forward logs from Kubernetes pods to OpenSearch, an open-source search and analytics engine. This white paper outlines the steps and best practices for configuring Logstash to push pod logs to OpenSearch.

## Overview of Logstash, FileBeat and OpenSearch

### Logstash

Logstash is an open-source tool for managing events and logs. It enables the collection, parsing, and transformation of logs before forwarding them to a specified destination, such as OpenSearch. Logstash supports various input, filter, and output plugins, making it highly extensible and flexible.

### FileBeat

Filebeat is a lightweight, open-source log shipper developed by Elastic. It is part of the Beats family of data shippers, which are designed to collect and send data to Elasticsearch or Logstash for indexing and analysis. Filebeat specifically focuses on reading log files and forwarding their contents to a specified destination.

### OpenSearch

OpenSearch is a community-driven, open-source search and analytics suite derived from Elasticsearch. It provides powerful indexing, search, and visualization capabilities. OpenSearch is ideal for storing, searching, and analyzing large volumes of log data in near real-time.

## System Architecture

- Key Components
    1. Kubernetes Pods: Generate log data.
    2. Logstash: Collects and processes log data.
    3. FileBeat: Reading log files and forwarding it to Logstash.
    4. OpenSearch: Stores and indexes log data.

- Data Flow Overview
    1. Kubernetes pods generate logs.
    2. Logstash collects logs from Kubernetes using FileBeat input plugin.
    3. Logs are processed and filtered by Logstash.
    4. Processed logs are forwarded to OpenSearch for indexing and storage.

          ![](../../../images/Logstash-OpenSearch-Data-Flow-Diagram.png){ width="600" }

## Installation and Configuration

### Prerequisites

1. A running Kubernetes cluster.
2. Logstash and FileBeat installed and configured.
3. An OpenSearch cluster set up and accessible.

### Installing Logstash
  
Install Logstash on a node within the Kubernetes cluster or on a dedicated log processing server. Follow the official installation guide for detailed steps given in below [References](#references) section.

### Installing Filebeat
  
Install FileBeat on a node within the Kubernetes cluster or on a dedicated log processing server. Follow the official installation guide for detailed steps given in below [References](#references) section.

#### Create Filebeat Configuration File

Create the filebeat-conf.yml file according to your requirements. This file specify the log files to read and the output destination.

```
filebeat.autodiscover:
    providers:
    - type: kubernetes
        hints.enabled: true
        kube_config: /home/centos/.kube/config
        templates:
        - condition:
            equals:
                kubernetes.namespace: "dxns"
            config:
            - type: container
                paths:
                - /var/log/containers/*\${data.kubernetes.container.id}.log
                fields:
                pod_name: \${data.kubernetes.pod.name}

output.logstash:
    hosts: ["${KUBE_HOSTNAME}:5044"]
```

This configuration tells Filebeat to read all .log files in the /var/log/ directory and send the log data to a Logstash instance running on ${KUBE_HOSTNAME}:5044.

#### Configuring Logstash for Kubernetes Logs

Modify the provided pipeline.conf file according to your requirements. This file defines the input sources, filters, and output destinations for Logstash.

```
input {
    beats {
    port => 5044
    }
}


filter {

    mutate {
    update => { "[host][name]" => "${KUBE_HOSTNAME}" }
    }
}


output {
    opensearch {
        hosts => ["${OS_PROTOCOL}://${OS_HOSTNAME}:443"]
        index => "${OS_INDEX_NAME}"
        auth_type => {
            type => "basic"
            user => "${OS_USERNAME}"
            password => "${OPENSEARCH_PASSWORD}"
        }
        ssl => true
        ssl_certificate_verification => false
    }
}
```

`Input Configuration`: Defines the source of the data. Here, it's configured to receive data from Filebeat on TCP port 5044.

`Filter`: Processes the incoming data. The mutate filter is used here to modify events.

`Update`: Specifically, it updates the [host][name] field of the event to the value of the KUBE_HOSTNAME environment variable. This is useful for dynamically setting the hostname based on the environment where Logstash is running.

`Output Configuration`: The `opensearch` output plugin is configured to send logs to an OpenSearch server. The hosts parameter specifies the `server's protocol, hostname, and port. Additionally, the logs index, user, and password` parameters are provided for authentication. SSL encryption is enabled (ssl => true), with certificate verification disabled (ssl_certificate_verification => false).

### Setting Up OpenSearch

Deploy an OpenSearch cluster using the official Helm chart or operator. Ensure the cluster is accessible from the Logstash instance.

## Integration Steps

### Configuring Logstash Output for OpenSearch

In the Logstash configuration file, specify the OpenSearch output plugin, as shown in the example above. This configuration ensures logs are sent to the correct OpenSearch endpoint.

### Managing Indexes in OpenSearch

Modify indexes to handle the creation, rollover, and deletion of indices. This helps manage storage efficiently and maintain optimal performance. For more detailed information, can refer to the official OpenSearch documentation:

- [Managing Indexes in OpenSearch](https://opensearch.org/docs/latest/im-plugin/)
- [OpenSearch Index Templates](https://opensearch.org/docs/latest/im-plugin/index-templates/)
- [OpenSearch Index Lifecycle Management (ILM)](https://opensearch.org/docs/latest/dashboards/im-dashboards/index/)

## Best Practices

### Performance Optimization

1. Scale the OpenSearch cluster based on log ingestion rates. For this have to monitor Performance Metrics like CPU, Memory, disk I/O to understand current usage.Tools like OpenSearch Dashboards and Prometheus can help with this.
2. Increase the number of data, master, and coordinating nodes to distribute the load. This enhances the cluster's ability to handle higher ingestion rates and search queries.

### Monitoring and Alerting

1. Use OpenSearch Dashboards to visualize log data.We can use available Filters to check specific deployment host names and pod in the log data.
        
        
    ![](../../../images/OpenSearch-Dashboard-Filters.png){ width="600" }

2. Set up alerts for specific log patterns or anomalies.
3. Monitor Logstash performance using metrics and logs.

## Case Study

### Real-world Example

A DX deployment was enhanced with Logstash, Filebeat and OpenSearch to manage logs from their Kubernetes-based microservices. By implementing the described architecture, we achieved improved log visibility, faster incident response times, and better overall system reliability.

### Outcomes and Insights

1. Improved DX Endgame Results Analysis in OpenSearch by 50%.
2. Reduced the efforts drasticly in debugging the logs for root cause analysis. 

## Conclusion

Using Logstash to push Kubernetes pod logs to OpenSearch provides a robust and scalable solution for log management. By following the setup and best practices outlined in this white paper, organizations can enhance their observability and improve operational efficiency  of their log data.

## References

- [Logstash Documentation](https://www.elastic.co/guide/en/logstash/current/index.html)
- [Filebeat Documentation](https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-overview.html)
- [OpenSearch Documentation](https://opensearch.org/docs/latest/)
- [Kubernetes Documentation](https://kubernetes.io/docs/home/)