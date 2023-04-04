# Base Portal Tuning

There are many aspects to configuring and tuning an application server in WebSphere Application Server.
The aspects presented here are critical to an optimally performing WebSphere Portal in our benchmark
environment.

The base Portal Scenario covers user login, page navigation and interaction with simple portlets. Users can
see a set of pages which are visible to all authenticated users. Another set of pages, based on LDAP group
membership, is also configured.

We have also benchmarked a number of other scenarios, which focus on different functions or use cases
for WebSphere Portal. There are scenarios which make use of Web Content Management (WCM) and page
management. In previous versions of Portal a scenario where users have access to thousands of pages was
also measured. While we have used different values to optimize performance for some of those scenarios,
the tuning is all based on the tuning detailed in this section.

The “Portal 8.5 Theme” is the theme that ships with version 8.5. That is the only theme discussed in this
tuning document. Tuning for themes from previous releases are discussed in the Tuning Guides specific to
that release.

In our measurement environments, we typically use a separate database server and directory server, in
addition to the HCL Portal server. We run these servers on separate systems to avoid resource contention
on the system running the HCL Portal server. This helps improve the total capacity of the Portal server. The
measured topology corresponds to the configuration shown in Figure 1 Portal Single Server Topology.