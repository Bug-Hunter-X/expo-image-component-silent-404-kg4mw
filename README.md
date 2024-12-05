# Expo Image 404 Silent Failure

This repository demonstrates a bug in Expo's `Image` component where it fails silently when attempting to load an image from a URL that returns a 404 error.  The component renders nothing, making it difficult to debug. This example shows the problem and a potential solution using error handling and a placeholder image.

## Bug Description
The standard `Image` component from Expo doesn't provide any feedback when an image fails to load due to a 404. This silent failure makes it challenging to identify and fix issues related to incorrect image URLs or server-side problems.

## Solution
The provided solution uses an `onError` prop to detect when an image fails to load.  When an error occurs, it displays a placeholder image, giving visual feedback to the user and assisting with debugging.