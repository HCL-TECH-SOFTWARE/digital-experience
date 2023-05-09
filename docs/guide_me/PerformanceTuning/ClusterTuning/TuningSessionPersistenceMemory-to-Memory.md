# Tuning Session Persistence – Memory-to-Memory

We configure memory-to-memory session replication to use the default “BOTH” (Client and Server) mode in our environment. This means that sessions are sent from the Portal cluster members to other cluster members. Separate application servers are not defined to store the session data.

This mode of session persistence will cause each cluster member to hold more session data than if no replication is used. Therefore we recommend using 64-bit environments for this type of session replication, as well as regular monitoring of heap usage.

In addition to the settings discussed in the previous section for cluster tuning, additional recommendations
are made below.

## Tuning via the Integrated Solutions Console

The values set via the Integrated Solutions Console can be set on the DM node and then propagated via a full resync. Alternatively, if the primary node is setup with these values, they will be sent to each node when the node is federated into the cluster.

### Session Configuration

#### Session Storage**

The default of sessions kept in memory is 1000. For loaded systems, this number should be large enough to cover the expected working set of active sessions. Use PMI to monitor your session count and adjust accordingly.

**How to Set**

In the WebSphere Integrated Solutions Console
Servers -> Server Types -> WebSphere application servers -> WebSphere_Portal -> Container Settings -> Session management

Set Maximum in-memory session count to the desired value. For performance benchmarks, `40000` sessions were kept in memory.

#### Write Frequency

The frequency at which sessions are replicated to other cluster nodes can be customized. For performance benchmarks, the default of every 10 seconds was used. When setting this for production scenarios, consider the tradeoff between losing data and performance. Higher write frequencies may cause worse performance but will ensure less session data is lost when a node fails.

**How to Set**

In the WebSphere Integrated Solutions Console
Servers-> Server Types -> WebSphere application servers -> WebSphere_Portal -> Container Settings:
Session Management -> Distributed environment settings -> Custom tuning parameters
Change the Write frequency to the desired value.

#### Write Contents

The session data that is replicated can be configured to either write the entire session on each update or just the content that has changed. For performance benchmarks, the default Only updated attributes value was used.

**How to Set**
In the WebSphere Integrated Solutions Console
Servers -> Server Types -> WebSphere application servers -> WebSphere_Portal -> Container Settings:
Session Management -> Distributed environment settings -> Custom tuning parameters

Change `Write contents` to the desired value.

#### Session Cleanup
Sessions can also be cleaned up (deleted) on a fixed schedule. For performance benchmarks, the default,
which is to not cleanup sessions was used.

**How to Set**
In the WebSphere Integrated Solutions Console
Servers -> Server Types -> WebSphere application servers -> WebSphere_Portal -> Container Settings:
- Session Management -> Distributed environment settings -> Custom tuning parameters

Enable Schedule session cleanup and set the time of day to the desired value.

### WAS Plugin Configuration

Memory-to-memory replication uses partition IDs rather than clone IDs. This can lead to broken session affinity if changes are not made in the plugin. To avoid this, the `GetDWLMTable` setting in the plugin config file must be changed to `true`. See http://www-01.ibm.com/support/docview.wss?uid=swg21318463 for more information

#### How to Set
Edit `plugin-cfg.xml` file on the IHS server.
In the <ServerCluster> element set the value of the `GetDWLMTable` to `true`.