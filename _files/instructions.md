What do I need to do?
This challenge will focus on the similarity between two texts. Your objective is to write a program that takes as inputs two texts and uses a metric to determine how similar they are. Documents that are exactly the same should get a score of 1, and documents that don’t have any words in common should get a score of 0. Please use the samples below to develop your application.

You will have to make a number of decisions as you develop this solution:

Do you count punctuation or only words?
Which words should matter in the similarity comparison?
Do you care about the ordering of words?
What metric do you use to assign a numerical value to the similarity?
What type of data structures should be used? (Hint: Dictionaries and lists are particularly helpful data structures that can be leveraged to calculate the similarity of two pieces of text.)
What are the requirements?
The document similarity algorithm does not need to perform well, and you don’t need to account for all edge cases. Focus on having some fun with it and producing code that we can discuss together.
Use the 3 sample texts provided below to develop your app. Samples 1 and 2 should be more similar than samples 1 and 3.
You may choose any language you like, but only standard libraries may be used (i.e., no scikit-learn, NLTK, spaCy, etc. – that’s cheating!).
The code, at a minimum, must run. Please provide clear instructions on how to run it.
When complete, please upload your codebase to a public Git repo (GitHub, Bitbucket, etc.) and email us the link. Please double-check this is publicly accessible.
Please assume the evaluator does not have prior experience executing programs in your chosen language. Therefore, please include any documentation necessary to accomplish the above requirements.

The Samples
Sample 1
The easiest way to earn points with Fetch Rewards is to just shop for the products you already love. If you have any participating brands on your receipt, you'll get points based on the cost of the products. You don't need to clip any coupons or scan individual barcodes. Just scan each grocery receipt after you shop and we'll find the savings for you.

Sample 2
The easiest way to earn points with Fetch Rewards is to just shop for the items you already buy. If you have any eligible brands on your receipt, you will get points based on the total cost of the products. You do not need to cut out any coupons or scan individual UPCs. Just scan your receipt after you check out and we will find the savings for you.

Sample 3
We are always looking for opportunities for you to earn more points, which is why we also give you a selection of Special Offers. These Special Offers are opportunities to earn bonus points on top of the regular points you earn every time you purchase a participating brand. No need to pre-select these offers, we'll give you the points whether or not you knew about the offer. We just think it is easier that way.

Bonus Points
Package this application as a web service that performs the comparison in response to a POST request containing the two texts in the body of the payload. You may use external libraries (i.e., Flask).

Take it a step further and package the web service in a Docker container that can be built and run locally or pulled down and run via Docker Hub.