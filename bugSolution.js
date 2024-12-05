// bug.js
import * as React from 'react';
import { Image } from 'expo-image';

export default function App() {
  return (
    <Image
      source={{ uri: 'https://example.com/nonexistent-image.jpg' }}
      style={{ width: 200, height: 200 }}
    />
  );
}

// bugSolution.js
import * as React from 'react';
import { Image } from 'expo-image';

export default function App() {
  const [error, setError] = React.useState(false);
  return (
    <Image
      source={{ uri: 'https://example.com/nonexistent-image.jpg' }}
      style={{ width: 200, height: 200 }}
      onError={() => setError(true)}
    />
  );
}
