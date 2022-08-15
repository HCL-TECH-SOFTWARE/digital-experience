# How Portal Search handles special characters when indexing

Portal Search indexes words that are composed of consecutive literals, that is letters, digits, and special characters. Learn how Portal Search handles special characters during indexing.

This includes the following characters:

-   The hash or pound sign \( `**\#**` \).
-   The percent sign \( `**%**` \).
-   The plus sign \( `**+**` \).
-   The asterisk \( `**\***` \).

During indexing special characters are handled as follows:

-   **Blank or white space; this includes the tab**

    Blanks separate words and are not indexed. Example: The string `key board` is indexed as two separate words `key` and `board`.

-   **Line break or new line**

    Line breaks separate words and are not indexed unless they are preceded by a dash \( `-` \). Examples:

    -   The string

        ```
        key 
        board
        ```

        is indexed as two separate words `key` and `board`.

    -   The string

        ```
        key-
        board
        ```

        is indexed as one word `keyboard`.

-   **Dot or sentence end period \( `.` \) and comma \( `,` \)**

    Dots and commas separate words and are not indexed, unless they are both preceded *and* followed by a letter or digit. Example: The string `www.ibm.com` is indexed as `www.ibm.com` and not as three separate words.

-   **Question mark \( `?` \) and exclamation mark \( `!` \)**

    Question marks and exclamation marks separate words and are not indexed unless they are followed by a letter.

-   **Other punctuation: `( ) { } [ ] &lt; &gt; ; : / \ | &quot; _ -`**

    These characters separate words and are not indexed.

-   **Other characters**

    All other characters are removed from the strings in which they appear but do not separate words.


**Notes:**

1.  All characters that split words are discarded during indexing and searching.
2.  The previous statements apply to **indexing**. However, in a **search query** all characters that can be part of the search syntax are treated in that capacity and not as part of the search query. These are the plus \( `+` \) and minus \( `-` \) signs, double quotation marks \( `&quot;` \), and the asterisk wild card character \( `*` \). If users want to include such characters in their search query, they must enclose them in double quotation marks. For example `"+hello"` searches for the string `+hello`; `"*Hello*"` searches for the string `*Hello*`.
3.  The less than \( < \) and greater than \( \> \) symbols are special HTML characters that Search cannot handle.

**Parent topic:**[Hints and tips for using Portal Search](../admin-system/srrhinttips.md)

