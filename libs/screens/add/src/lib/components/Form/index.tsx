import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import { Banner, Button, TextInput } from 'react-native-paper';
import { useNavigate } from 'react-router-dom';

const FormContent = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [visible, setVisible] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    setVisible(true);
    setTitle('');
    setBody('');
    event.preventDefault();
  };
  const submitForm = () => {
    formRef.current.dispatchEvent(
      new Event('submit', { bubbles: true, cancelable: true })
    );
  };
  return (
    <>
      <View style={{ paddingBottom: 15, height: '400', flex: 1 }}>
        <Banner
          visible={visible}
          actions={[
            {
              label: 'Ok',
              onPress: () => {
                setVisible(false);
                navigate(`/`);
              },
            },
          ]}
        >
          Your content is correctly submitted.
        </Banner>
      </View>
      <form onSubmit={handleSubmit} ref={formRef}>
        <View style={{ paddingBottom: 15 }}>
          <TextInput
            label="Title"
            value={title}
            key="title"
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View style={{ paddingBottom: 15 }}>
          <TextInput
            label="Body"
            value={body}
            key="body"
            multiline={true}
            numberOfLines={6}
            onChangeText={(text) => setBody(text)}
          />
        </View>
        <Button
          icon="content-save"
          mode="contained"
          onPress={() => submitForm()}
        >
          Save
        </Button>
      </form>
    </>
  );
};

export default FormContent;
