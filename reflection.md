# Lab 2: State & Events — Character Counter

## 1. Project Overview

The Character Counter is a React application that allows users to enter text and view updated statistics as they type.

The application displays the character count, word count, and estimated reading time. It also provides feedback based on the word count and displays the minimum and maximum word limits.

This lab helped me understand React state, event handling, props, component communication, and TypeScript interfaces.

## 2. Features

* **Text Input:** Allows users to enter text in a text area.
* **Character Count:** Displays the total number of characters, including spaces.
* **Word Count:** Counts the words entered by the user.
* **Reading Time:** Estimates reading time based on a reading speed of 200 words per minute.
* **Word Limits:** Displays the minimum word goal and maximum word limit.
* **Dynamic Feedback:** Displays a message and emoji based on the user's progress.
* **Color-Coded Word Count:** Changes the word count color according to the feedback category.
* **Color Legend:** Explains the meaning of each feedback color.

## 3. Component Structure

The application uses three main components: `App.tsx`, `CharacterCounter.tsx`, and `StatsDisplay.tsx`. It also uses a separate `TextInput.tsx` component to handle user input.

### A. App.tsx

`App.tsx` is the main component of the application. It renders the `CharacterCounter` component and passes the minimum word goal, maximum word limit, and target reading time as props.

Example:

```tsx
<CharacterCounter
  minWords={10}
  maxWords={20}
  targetReadingTime={5}
/>
```

Here, `App.tsx` supplies the values that `CharacterCounter` receives and uses.

### B. CharacterCounter.tsx

`CharacterCounter` manages the text entered by the user using React's `useState` hook.

Its responsibilities include:

* Storing the current text.
* Calculating the character count and word count.
* Estimating reading time.
* Checking the word count against the minimum and maximum limits.
* Choosing the appropriate feedback message, emoji, and category.
* Passing the calculated statistics and relevant props to `StatsDisplay`.

It also renders the text input, statistics, and feedback sections.

### C. TextInput.tsx

`TextInput` provides the text area where users enter their text.

It receives an `onTextChange` callback from `CharacterCounter`. Whenever the user types, `TextInput` calls this callback with the updated text.

`TextInput` does not manage the main text state or calculate the statistics. Its responsibility is to collect the user's input and communicate the changes to `CharacterCounter`.

### D. StatsDisplay.tsx

`StatsDisplay` receives the calculated statistics and other display information through props.

It displays:

* Character count.
* Word count.
* Minimum and maximum word limits.
* Estimated reading time.

It also uses the feedback category to apply the appropriate CSS class to the word count.

## 4. How the Components Communicate

### Passing Settings from App.tsx

The data flow begins in `App.tsx`.

1. `App.tsx` passes `minWords`, `maxWords`, and `targetReadingTime` to `CharacterCounter`.
2. `CharacterCounter` receives these values through its `CharacterCounterProps` interface.
3. `CharacterCounter` uses the word limits in its calculations and feedback logic.

### Communication Between TextInput and CharacterCounter

`CharacterCounter` creates a state variable and an update function:

```tsx
const [text, setText] = useState("");
```

* `text` stores the current text.
* `setText` updates the stored text.

It then passes the update function to `TextInput`:

```tsx
<TextInput onTextChange={setText} />
```

When the user types, `TextInput` calls the callback with the new text. Because the callback is `setText`, React updates the text state in `CharacterCounter`.

For example, when the user types `Hello world`:

1. `TextInput` receives the user's input.
2. It sends `"Hello world"` through the `onTextChange` callback.
3. `setText` updates the state in `CharacterCounter`.
4. `CharacterCounter` recalculates the statistics and feedback.
5. `StatsDisplay` displays the updated statistics.

### Passing Statistics to StatsDisplay

After calculating the statistics, `CharacterCounter` passes them to `StatsDisplay` through props.

The component also passes `minWords`, `maxWords`, and `feedbackType`, allowing `StatsDisplay` to display the word limits and apply the appropriate word-count color.

### Overall Component Flow

**Settings and configuration:**

`App.tsx` → `CharacterCounter`

**User input:**

`TextInput` → `CharacterCounter`

**Statistics and display information:**

`CharacterCounter` → `StatsDisplay`

This structure allows each component to focus on a specific responsibility.

## 5. Why I Added a Feedback Box

I added a separate feedback box to make the application more interactive and informative.

Instead of displaying only numbers, the application provides messages and emojis that help users understand their progress.

The feedback categories include:

* **Welcome:** Encourages users to start typing.
* **Progress:** Encourages users who are getting started.
* **Success:** Congratulates users when they reach the minimum word goal.
* **Caution:** Indicates that the user is making progress.
* **Warning:** Indicates that the user is approaching the maximum word limit.
* **Limit:** Alerts users when they exceed the maximum word limit.

I also added a color legend to explain the meaning of the different word-count colors.

This feature helped me practice conditional logic and understand how application data can control the message and styling displayed to the user.

## 6. Challenges Faced

### A. Understanding Props and Component Communication

Initially, I found it confusing to understand how props move between components.

I learned that `App.tsx` supplies the settings to `CharacterCounter`, while `CharacterCounter` passes the required statistics and display information to `StatsDisplay`.

I also learned how `TextInput` communicates with `CharacterCounter` through a callback function.

### B. Understanding React State

I learned that `useState` allows `CharacterCounter` to store the current text.

When the user types, `TextInput` calls the callback provided by `CharacterCounter`. This updates the state and allows React to render the updated statistics and feedback.

### C. Calculating the Word Count

I needed to handle empty text and multiple spaces between words correctly.

I used the following expression:

```tsx
const wordCount = text.trim()
  ? text.trim().split(/\s+/).length
  : 0;
```

The `trim()` method removes whitespace from the beginning and end of the text. The `split(/\s+/)` expression separates words using one or more whitespace characters.

The conditional expression returns zero when the text is empty or contains only whitespace.

### D. Providing Dynamic Feedback

I used `if`, `else if`, and `else` statements to select the appropriate feedback based on the word count.

I learned that the order of the conditions matters because some conditions must be checked before others.

### E. Understanding TypeScript Interfaces

I learned that each component's props interface describes the properties that component can receive.

For example, `CharacterCounterProps` defines the settings that `CharacterCounter` can receive, while `StatsDisplayProps` defines the properties that `StatsDisplay` can receive.

When I passed the word limits to `StatsDisplay`, I also needed to declare those properties in `StatsDisplayProps`.

## 7. New Concepts I Learned

### A. React State with useState

The `useState` hook allows a component to store and update information.

```tsx
const [text, setText] = useState("");
```

Here, `text` holds the current value, and `setText` updates it.

When the state changes, React renders the component again so the displayed information can reflect the updated value.

### B. Props and Callback Functions

Props allow a parent component to pass data or functions to a child component.

In this lab, `CharacterCounter` passes `setText` to `TextInput` through the `onTextChange` prop.

This allows `TextInput` to notify `CharacterCounter` when the user enters or changes text.

### C. The Nullish Coalescing Operator (??)

The `??` operator is called the **nullish coalescing operator**.

It checks whether the value on its left is `null` or `undefined`.

* If the left value is neither `null` nor `undefined`, JavaScript uses that value.
* If the left value is `null` or `undefined`, JavaScript uses the value on the right.

Example:

```tsx
props.minWords ?? 0
```

If `props.minWords` is `10`, the result is `10`. If it is `undefined` or `null`, the result is `0`.

This is useful when a prop is optional and I want to provide a fallback value.

Unlike the logical OR operator (`||`), `??` preserves other falsy values, such as `0` and an empty string.

### D. String Methods and Regular Expressions

I learned to use `trim()` and `split()` to process the user's text.

The regular expression `/\s+/` matches one or more whitespace characters, helping the application separate words when there are multiple spaces or line breaks between them.

### E. Conditional Logic

I used `if`, `else if`, and `else` statements to determine which feedback message and category to display.

This helped me understand how an application's behavior can change based on its data.

### F. Template Literals and Dynamic CSS Classes

I used a template literal to construct a CSS class dynamically:

```tsx
className={`word-count ${props.feedbackType ?? "welcome"}`}
```

This combines the base class `word-count` with the current feedback category.

CSS then applies the appropriate color to the word count.

### G. TypeScript Interfaces and Optional Properties

Interfaces define the expected structure of props.

The `?` symbol indicates that a property is optional.

For example:

```tsx
minWords?: number;
```

This means that `minWords` may be provided as a number or omitted. It does not automatically provide a default value, so I can use `??` to specify a fallback when needed.

### H. CSS Layout and Styling

I practiced using borders, padding, margins, border radius, Flexbox, and CSS classes to organize the application.

I also used color indicators and a legend to explain the different feedback categories.

## 8. Conclusion

This lab helped me understand how to divide a React application into smaller components with separate responsibilities.

I practiced managing state with `useState`, handling events, passing props, using callback functions, calculating statistics, applying conditional logic, and defining TypeScript interfaces.

I also learned how React state updates can keep the displayed statistics and feedback in sync with the user's input.

Overall, this project improved my understanding of component communication and building interactive applications with React and TypeScript.
