#Assignment
 This is a assignment to code a module to format feed which is the output of twitter/facebook feed module according to format types extracted from the feed

 #Command to run the Assignment: 
 node server

 #Example 1
 #Feed used for format testing  - "Obama visited Facebook headquarters: http://bit.ly/xyz @elversatile"
 #Information extracted from feed - positions 14 through 22 → Entity
									positions 0 through 5 → Entity
									positions 55 through 67 → Twitter username
									positions 37 through 54 → Link
 
 #Example 2
 #Feed used for format testing  - "10 Ultimate Usability Guidelines for Web Designers - http://bit.ly/NgDS0g @dynamic"
 #Information extracted from feed - positions 37 through 50 → Entity
									positions 74 through 82 → Twitter username
									positions 53 through 73 → Link

 #Formatting a new type added for eg: "hashtags" decorated with another HTML tag, can be done as follows:

 1. Create a function which formats the substring with the HTML tag for hashtag type under htmlFormatters folder
 2. Import that function to Module3.js file.
 3. Add the newly imported function inside the switch loop in function formatString which checks the type and calls the corresponding function for formatting.