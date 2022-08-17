import React, { useState } from 'react';
import { View } from 'react-native';
import { Banner, Button, TextInput } from 'react-native-paper';
import { useNavigate } from '@navigate';
import { useContent } from '@store';
import uuid from 'react-uuid';

const FormContent = () => {
  const { navigate } = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [visible, setVisible] = useState(false);
  const { createContent, getAllContents } = useContent();

  const submitForm = async () => {
    await createContent({
      id: uuid(),
      title,
      body,
      createdAt: new Date().toUTCString(),
    });
    await getAllContents();
    setVisible(true);
    setTitle('');
    setBody('');
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const renderTitle = () => (
    <TextInput
      label="Title"
      value={title}
      key="title"
      onChangeText={(text) => setTitle(text)}
    />
  );

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const renderBody = () => (
    <TextInput
      label="Body"
      value={body}
      key="body"
      multiline={true}
      numberOfLines={6}
      onChangeText={(text) => setBody(text)}
    />
  );

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
                navigate('Home', `/`);
              },
            },
          ]}
        >
          Your content is correctly submitted.
        </Banner>
      </View>
      <View style={{ paddingBottom: 15 }}>{renderTitle()}</View>
      <View style={{ paddingBottom: 15 }}>{renderBody()}</View>
      <Button
        icon="content-save"
        mode="contained"
        onPress={async () => {
          await submitForm();
        }}
      >
        Save
      </Button>
    </>
  );
};

export default FormContent;
