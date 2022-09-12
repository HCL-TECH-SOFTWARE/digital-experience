# Scope of virtual portals

HCL has tested an installation with 300 virtual portals and a total of more than 200,000 pages successfully. More detailed results of these tests are listed here.

-   An IBM® WebSphere® Application Server 64-bit environment is suited best for a large number of virtual portals.
-   For good results, you need to tune the portal caches and JVM.
-   The limiting factor is not the absolute number of virtual portals, but the overall number of pages and URL mappings.
-   In a limit and boundary test, the processor of the portal database machine was found to be the bottleneck.
-   A large number of virtual portals can have an overall performance impact on administrative activities.
-   Setting up and administering a large number of virtual portals by using the portal administration user interface can be time consuming.


???+ info "Related information:"
    - [Planning for virtual portals](../../vp_planning/index.md)

