import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const ButtonExample = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Button
        title="Click me"
        onPress={() => setCount(count + 1)}
      />
      <Text style={styles.displayText}>
        Button clicked: {count} times
      </Text>
    </View>
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

export default ButtonExample;