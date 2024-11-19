1. What is the primary reason to use a nested Route?
Whenever we want to use some share interface amongst multiple different route in our app.

2. What is a layout Route?
It is a parent Route of some nested Route that conatins just a portin of UI that will be shared. The important aspect of layout Route is that it will use and outlet Component.

3. What does the Outlet Component do. WHen do you use it?
We use it any time , we have a parent Route. Wrapping children Routes, its renders the matching child Routes Element prop given in its Route definition. 

4. What is an Index Route?
You might have a Layout Route as a parent. Which is containing any shared user interface you have amongst all the children Route, but you might also want another element beyond just the layout component to be render when the path of the parent Route is matching.
OR
Index Route is like a default element that should render in the parents outlet when the path matches the parent. 


Step-2
************************ACTIVE LINK STYLING WITH NAV LINK*********************************



QS
1. What is a Route / url parameter?
A portion of a Route path that is a place folder for what will eventually be the actual segment in the url of the page. 

2. Nested Routes in Row?
