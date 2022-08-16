---
id: wcm_dev_search_form_query_using
title: How to use a search query form
---
import useBaseUrl from '@docusaurus/useBaseUrl';



The following search syntaxes can be used when you search for text by using the "search\_query" parameter.

-   **Plus \( + \) and minus \( - \) signs**

    The plus and minus signs do not join terms, but operate only on the term that follows them.

-   **Quotation marks \( " \)**

    Use quotation marks to combine words into search phrases, for example "HCL Software".

    **Note:** When you search for strings with special query characters, such as a blank or a colon \( : \), you must enclose your search string in quotation marks.

-   **Trailing wildcards**

    Use an asterisk \( \* \) as a trailing wildcard in your search string, for example `softw*` .


## Using the plus and minus signs

For your query, type any words that describe what you are looking for. Use the plus and minus signs as follows:

-   Put a plus sign \( + \) in front of the words that you want to be present in the returned documents.
-   Put a minus sign \( - \) in front of the words that must not be present in the returned documents.
-   When you use signs, do not leave any space between the sign and the following word qualified by the sign. 

## Plus sign examples

-   **+thinkpad**

    All documents that are retrieved must contain the word thinkpad. A single unsigned word, thinkpad, is also read this way, and is treated by the search engine as +thinkpad.

-   **+thinkpad +drivers**

    All documents that are retrieved must contain the word thinkpad *and* the word drivers.

-   **+thinkpad drivers**

    All documents that are retrieved must contain the word thinkpad, but only optionally the word drivers. 


## Minus sign examples

-   **+thinkpad -drivers**

    All documents that are retrieved must contain the word thinkpad but must not contain the word drivers. 


**Note:**

1.  Do not use only minus signed terms for your search because they do not produce a result list. The reason is that in this case the search terms are too vague to allow for a meaningful scoring of the found documents.
2.  Use spaces between signed terms in order to distinguish them from terms that contain a minus sign, such as e-mail. Note that e-mail is treated as "e-mail" whereas e -mail is treated as optionally e, and the word mail should not be contained in the resulting documents.

