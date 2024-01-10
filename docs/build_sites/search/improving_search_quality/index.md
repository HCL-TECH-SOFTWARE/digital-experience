# Improving search quality in HCL Digital Experience

## Introduction

In this topic you will learn how to improve search quality in HCL Digital Experience and Web Content Manager Search.

The relevance scoring techniques used by the HCL Digital Experience and Web Content Manager Search component largely determine the overall quality of search. The underlying free source Lucene search engine, available at http://http//lucene.apache.org, provides the basic relevance computation used in the search.

In general, terms are based on standard scoring **“tf x idf”**(term frequency times inverted document frequency). The structure of information provided in a document is not considered. For example, whether a keyword is found in the 'title' or any other structural element of the document. Typically, one would assume that when a keyword appears in the title, that this keyword is significant for this document or in the same keyword appearing in other documents but, then only in its regular body text. This section describes what search quality tuning options are available to improve the search quality.

In general, terms are based on standard scoring **“tf x idf”**(term frequency times inverted document frequency) not the structure of information provided in a document. For example, whether a keyword is found in the 'title' or any other structural element of the document. When a keyword occurs in the title of a document, one would normally believe that it is important for this document, as opposed to other documents where the keyword may exist in the body content only. This section describes what search quality tuning options are available to improve the search quality.
 
 Generally speaking, terms are determined not by the information structure found in a document, but rather by standard scoring **“tf x idf”** (term frequency times inverted document frequency). For instance, if a keyword appears in the document's "title" or any other structural element. In contrast to other publications where the keyword may only appear in the body material, one would typically assume that a keyword that appears in the document's title is relevant. The search quality tuning options that can be used to enhance the search quality are described in this section.

The following information outlines options when the search result does not meet the expectation of the user:

- The presented title and summary information of the top 'n' results do not look like what the user was searching for.

- Initial selections of the top hits in the search result were not what the user was looking for. However, further down the list the user did find relevant information.

The search quality might get affected for following reasons:

- The content is of poor quality. For example, the title of the document suggests a different type of information compared to what the main text of the document actually reveals. Similar scenario is when the one significant keyword of the title does not appear anywhere else in the text – or it maybe appears only once.

- The relevance score calculated is correct, based on the statistical information provided by the corpus and mapping to the candidates identified for the search result. However, some less important keywords tend to dominate over others. 

Like a five-word query matches best to a document containing only three of those keywords, but these three have a high number of occurrences within that document.
