# Improving search quality in HCL Digital Experience

## Introduction

In this topic you will learn how to apply HCL Improving search quality in HCL Digital Experience (DX) and Web Content Manager Search to improve the quality of search to end users.

Quality of search today and in general is based primarily on the relevance scoring methods within the HCL Digital Experience (Portal and Web Content Manager) Search component. It applies standard relevance calculation provided by the underlying open source Lucene search engine http://http//lucene.apache.org 

In general, terms based on standard scoring **“tf x idf”**(term frequency times inverted document frequency). What is not taken into respect is the structure of information provided in a 'document', for example whether a keyword is also found in the 'title' or any other structural element of the document. Typically, one would assume that when a keyword appears in the title, that this keyword is significant for this document or in the same keyword appearing in other documents. This section describes what search quality tuning options are available. 

The following information outlines options when the search result does not meet the expectation of the user:

- The presented title and summary information of the top 'n' results does not look like what the user was searching for

- Initial selections of the top hits in the search result revealed that the top hits were not what the user was looking for. However further down the list the user did find relevant information.

The search quality might get affected for following reasons:

- The content is of poor quality, for example the title of the document suggests different type of information compared to what the main text of the document actually reveals. Example: the one significant keyword of the title does not appear anywhere else in the text – or maybe appears only once

- The relevance score calculated is correct, based on the statistical information provided by the corpus and mapping that to candidates identified for the search result, however some (less important) keywords tend to dominate over others. Like a five-word query matches best to a document containing only three of those keywords, but these three have a high number of occurrences within that document.