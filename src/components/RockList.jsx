javascript
import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const ButtonExample = () => {
  const [count, setCount] = useState(0);

  return (
    
      

 setCount(count + 1)} />
      Button clicked: {count} times
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayText: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default InputExample;