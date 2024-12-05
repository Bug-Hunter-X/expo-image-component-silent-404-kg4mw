This bug occurs when using Expo's `Image` component with a remote URL that returns a 404 error.  The `Image` component doesn't handle the error gracefully, and instead of displaying a placeholder or error indicator, it just renders nothing. This makes debugging difficult as there is no visual indication that the image failed to load.