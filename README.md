# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The bug arises from improper usage of the dependency array, leading to an infinite loop of component re-renders.

## Problem

The `MyComponent` component uses `useEffect` to update a state variable (`count`). However, the dependency array is empty (`[]`), meaning the effect runs after every render.  Inside the effect, `setCount` is called, which triggers a re-render, leading to the effect running again, and so on. 

## Solution

The solution involves correctly specifying the dependency array. In this case, since we don't need the effect to run after every render, we should add `count` to the dependency array. This ensures that the effect only runs when the value of `count` changes.