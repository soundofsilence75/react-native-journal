import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

class PostForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: ''
    };
  }
  
  submitForm = () => {
    this.props.onSubmit({
      title: this.state.title,
      body: this.state.body
    });
  };
  
  render() {
    return (
      <View>
        <TextInput 
          style={styles.title}
          onChangeText={title => this.setState({ title })}
          value={this.state.title}
        />
        <TextInput
          style={styles.body}
          onChangeText={body => this.setState({ body })}
          value={this.state.body}
        />
        <Button title="Save Post" onPress={this.submitForm} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    height: 40,
    borderColor: '#333',
    borderWidth: 1
  },
  body: {
    height: 400,
    borderColor: '#333',
    borderWidth: 1,
    textAlignVertical: 'top'
  }
});

export default PostForm;
