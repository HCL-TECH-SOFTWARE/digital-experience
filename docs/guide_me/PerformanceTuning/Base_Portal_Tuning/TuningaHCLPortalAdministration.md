# Tuning via HCL Portal Administration

## Disable Search

Search can be disabled to improve performance if the search feature is not needed.

### How to Set

In the HCL Portal Administration Page
Search Administration/Manage Search → Search Collections → Delete all collections.

WP 8.0.0.1 CF09 introduced (from PI05486) the new ConfigEngine Task 'Delete Search Service and Collections'. In Portal 8.5 it is included as well. To run this task:
ConfigEngine.sh action-delete-search-services-and-collections-wp.search.service

See http://www-01.ibm.com/support/docview.wss?uid=swg1PI05486 for more information.