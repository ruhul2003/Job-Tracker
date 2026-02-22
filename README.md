
### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer : 

getElementById() – This grabs a single element using its unique ID.Since IDs should be unique, it only returns one element.

getElementsByClassName() – This grabs all elements that have a certain class. It gives us an HTMLCollection, which is like an array, so we can use a loop or an index to work with each element.

querySelector() – This is more flexible because we can use any CSS selector. It returns only the first matching element. 

querySelectorAll() – Similar to querySelector(), but it returns all elements that match the selector as a NodeList. We can loop through them easily.


### 2. How do you create and insert a new element into the DOM?

Answer :

1. Create the paragraph
const p = document.createElement("p");

This makes a new <p> element.

2. Add text to it
p.textContent = "This is a new paragraph!";

Sets the content that will appear inside the paragraph.

3. Insert it into the page
parentElement.appendChild(p);


### 3. What is Event Bubbling? And how does it work?

Answer :

Event Bubbling is a way that events in the browser travel from child elements up to parent elements.

When we click on an element (like a button inside a div), the event doesn’t just happen on the button—it “bubbles up” to all its parent elements, one by one, until it reaches the <html> or document.

How it works :
1. We click on a child element (e.g., a button inside a <div>).
2. The click event happens on the button first.
3. Then the event automatically moves up to the button’s parent element (<div>), then to its parent’s parent, and so on, until the top.

So all ancestors of the clicked element get the event, unless we stop it.


### 4. What is Event Delegation in JavaScript? Why is it useful?

Answer :

Event Delegation is a technique in JavaScript where instead of attaching event listeners to many individual child elements, we attach a single event listener to a parent element. Then, inside that listener, we check which child element triggered the event.

Why it’s useful: Efficiency , Dynamic elements , Cleaner code.



### 5. What is the difference between preventDefault() and stopPropagation() methods?

Answer :

1. preventDefault()

=> Stops the default browser behavior for an event.

Example:

=> Clicking on a link normally opens a new page.

=> Using preventDefault() prevents that page from opening.

=> Submitting a form normally refreshes the page; preventDefault() stops that.


2. stopPropagation()

=> Stops the event from bubbling up (or capturing down) the DOM tree.

Example:

=> You have a button inside a <div>.

=> Both the button and the div have click handlers.

=> Clicking the button normally triggers both handlers because of event bubbling.

=> Using stopPropagation() on the button’s event prevents the div’s handler from running.

---


