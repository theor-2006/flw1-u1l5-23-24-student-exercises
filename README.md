# Lesson 1.5: Events, DOM Intro, & Project Work Time

## 🎯 Objectives

## Table of Contents
1. [Event Handlers](#event-handlers)
2. [Debugging & Clean Code](#debugging--clean-code)

## Event Handlers

- *Common Events*:
        1. Click Events (e.g., clicking a button)
        2. Key Press Events (e.g., typing on a keyboard)
        3. Mouse Over Events (e.g., hovering over an element)
        4. Form Submission Events (e.g., submitting a form)

- *How to handle events*:
        - Using `onclick` in HTML.
        - Using `addEventListener` in JS (preferred way).

    ```javascript
    <button onclick="printHello()">Click Me!</button>

    <script>
    function printHello() { 
        alert('Hello, World!'); 
    }
    </script>
    ```

---

## Debugging & Clean Code

- *Debugging Strategies*:
  1. Use the console.
  2. Use comments.
  3. Go through code line by line.
  4. Test code in chunks.

- *Clean Code Practices*:
  - Code should be self-explanatory.
  - Store values in descriptive variable names.
  - Maintain strong naming conventions.
