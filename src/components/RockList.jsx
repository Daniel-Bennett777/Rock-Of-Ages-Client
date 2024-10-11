import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const InputExample = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        onChangeText={(value) => setText(value)}
        value={text}
      />
      <Text style={styles.displayText}>You typed: {text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    padding: 10,
    marginBottom: 20,
  },
  displayText: {
    fontSize: 18,
  },
});

export default InputExample;