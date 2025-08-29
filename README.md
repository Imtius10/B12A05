1 ans
 getElementById(id) 
   Returns a single element with the given id

   getElementsByClassName(className)  
   Returns a live HTMLCollection of all elements with the given class  

   querySelector(selector) querySelectorAll(selector)  
  querySelector returns the first matching element  
  querySelectorAll returns  static NodeList of all matching elements.  
   Can use any CSS selector(id, class, tag, attribute, etc.) 

   2 ans
       let newElement = document.createElement('div');
              newElement.innerHTML = 'This is a new div!';

  3 ans
  <script>
document.getElementById("child").addEventListener("click", function() {
    console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent clicked");
});
</script>

4 ans
Event delegation is a JavaScript technique where a single event listener is placed on a parent element to manage events for all its child elements. It works by using event bubbling, where an event on a child propagates up the DOM tree and can be caught by the parent's listener

5 ans
preventDefault()

Prevents the default action of an element.


stopPropagation()

Stops the event from bubbling up (or capturing down) the DOM tree.