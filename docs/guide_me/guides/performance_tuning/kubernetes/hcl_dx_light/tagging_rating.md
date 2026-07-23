# Tagging & Rating

## Database Fetch Size

For sites with a large number of tags, the `Tag Cloud Portlet`'s performance may degrade significantly. To address this, adjust the number of database rows fetched per call to the database. The optimal value is contingent on the total number of tags and the system's usage patterns. For instance, with 50,000 tags, the fetch size was increased to `500`.

### How to Set

1.  Log in to the **WebSphere Integrated Solutions Console**.
2.  Navigate to: **Resources > Resource Environment > Resource Environment Providers > WP DataStoreService**.
3.  Add or update the following custom property:
    * **Name**: `<domain>.datasource.fetchsize`
    * **Value**: `500`
4.  Click **Apply**.
5.  Click **Save** to persist your changes.
6.  Restart the Portal server for the changes to take effect.

!!! note "Domain Information"
    - `<domain>` represents one of the Portal database domains.
    - Public tags are stored in the `comm` domain.
    - Private tags are stored in the `cust` domain.