# Improving search quality in HCL Digital Experience

## Introduction

This topic provides information on how you can improve search quality in HCL Digital Experience and Web Content Manager Search.

The quality of search is based primarily on the relevance scoring methods within HCL Digital Experience and the Web Content Manager Search component. The search applies standard relevance calculation provided by the underlying open source [Lucene search engine](http://http//lucene.apache.org). 

In general, terms are based on standard scoring **“tf x idf”** (term frequency times inverted document frequency). The structure of information provided in a document is not considered. For example, whether a keyword is found in the 'title' or any other structural element of the document. When a keyword appears in the title, it is assumed that this keyword is significant for this document as opposed to that same keyword appearing only in the document's regular body text. This section describes what search quality tuning options are available to improve the search quality.
 
The following information outlines options when the search result does not meet the expectation of the user:

- The presented title and summary information of the top 'n' results do not look like what the user was searching for.

- Initial selections of the top hits in the search result were not what the user was looking for. However, further down the list the user did find relevant information.

The search quality might get affected for following reasons:

- The content is of poor quality. For example, the title of the document suggests a different type of information compared to what the main text of the document actually reveals. Similar scenario is when the one significant keyword of the title does not appear anywhere else in the text – or it maybe appears only once.

- The relevance score calculated is correct, based on the statistical information provided by the corpus and mapping to the candidates identified for the search result. However, some less important keywords tend to dominate over others. For example, a five-word query matches best to a document containing only three of those keywords, but these three have a high number of occurrences within that document.