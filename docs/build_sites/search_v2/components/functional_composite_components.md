# Functional Composite Components

Functional Composite Components (FCC) combine ACs to deliver higher-level functionality, such as displaying search results or managing pagination. Refer to the table below each component for the list of compatible properties associated with them.

- **dx-search-input-query:** This component allows you to customize a set of properties related to search input such as disabling the input and defining placeholder and label text. It also checks the URL for existing query parameters on load, making it ideal for dynamic search-driven applications.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **field** | String | The field name for the search input. | '' |
    | **queryString** | String | The query string value for the search input. | '' |
    | **disabled** | Boolean | Indicates whether the input field is disabled. | `false` |
    | **label** | String | The label for the input field. | '' |
    | **placeholder** | String | The placeholder text for the input field. | '' |

- **dx-search-output-item-attribute:** This component is a flexible and reusable element that you can use to display specific attributes of search results. By consuming the `outputContext`, it dynamically renders different types of information, such as links, document types, and descriptions based on the attribute specified. This allows the component to be integrated into larger search result display systems with different content sources and attributes.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **attribute** | String | The attribute to fetch from the search result item. | '' |
    | **index** | String |The index of the search item in the result list. | '' |
    | **outputContext** | OutputContextType | Consumed from context and contains the search result data. This property is internally managed by the component and should not be used. | undefined |

- **dx-fcc-base-element:** This is a base class in the FCC framework that integrates the Broadcast Channel API for component communication and ensures no shadow DOM is used. It also cleans up resources when components are disconnected.

- **dx-search-input-scope:** This LitElement-based component allows you to manage and display a list of content sources for a search input. It fetches data from an external service, allows you to select a content source, and updates the search scope dynamically. You can use it as part of a larger search interface to provide filtering options based on available content sources.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **field** | String | The field associated with the input. | '' |
    | **contentSources** | DxSearchGetContentSource\[] | List of content sources fetched from the service. This property is internally managed by the component and should not be used. To be converted to internal state in the next release. | [] |
    | **scope** | String\[] | The current selected scope or content source. This property is internally managed by the component and should not be used. To be converted to internal state in the next release. | \['All Sources'] |
    | **disabled** | Boolean | Indicates whether the input is disabled. | `false` |
    | **label** | String | The label for the input field. | '' |
    | **placeholder** | String | The placeholder text for the input field. | '' |

- **dx-search-output-pagination:** This flexible pagination component supports multiple pagination types, including infinite scroll and numbered pagination, and can handle different languages and locales. It also allows debouncing scroll events and a clean separation of concerns, making it efficient and maintainable.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **outputConfig** | Object | Contains the search configuration, including the current page, page size, total number of items, and a function to load a new page (`loadPage`). It is injected from the `outputContext`. This property is internally managed by the component and should not be used. | {} |
    | **type** | SEARCH_PAGINATION_TYPE_ENUM | Defines the type of pagination. Sample values include `numbered-pagination`, `show-more-button`, or `infinite-scroll`. |''|

- **dx-search-input-button:** This customizable search button component uses the Broadcast Channel to trigger search actions on click. It supports properties to disable the button and change its text. Debouncing is also used to optimize search requests, making it a reusable UI element for web applications.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **disabled** | Boolean | Indicates whether the button is disabled. | `false` |
    | **buttontext** | String | Custom text to display on the button. Reverts to default localized text if not provided. |	'' |

- **dx-search-input-type:** This dynamic dropdown component allows you to select document types in a search interface. Built with LitElement for efficient rendering and reactivity, it fetches searchable fields from a backend service, updates the selected document type, and communicates changes using `searchChannel` to update search parameters.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **field** | String | The field name for the search input. | '' |
    | **documentObjectType** | String | The selected document object type. | '' |
    | **disabled** | Boolean | Indicates whether the search input is disabled. | `false` |
    | **label** | String | The label text for the search input. | '' |
    | **placeholder** | String | The placeholder text for the search input. | '' |
    | **options** | OptionData\[] | The list of options for the input select dropdown. This property is internally managed by the component and should not be used. |	[] |

- **dx-search-output:** This search result display component integrates with backend search services. It manages various search states such as loading, results, no results, or error, and updates the UI dynamically based on search parameters. It is designed for applications that require real-time search with pagination, filtering, and error handling.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **templateItemId** | String | The ID of the template element used to render individual search results. | '' |
    | **templatePaginationId** | String | The ID of the pagination template element used for paginated search results. | '' |
    | **searchValue** |String | The current search query or keyword entered by the user. | '' |
    | **documentObjectType** | String | The attribute in the document object being searched. | '' |
    | **scope** | String\[] | A list of content source IDs that limit the search query. | [] |
    | **searchResults** | DxSearchResults | Contains the search results, including hit count, individual hits, and scores. | { hits: { total: { value: NaN, relation: 'eq' }, max_score: 0, hits: [] } } |
    | **isLoading** | Boolean | A flag that indicates whether search results are being loaded. | `false` |