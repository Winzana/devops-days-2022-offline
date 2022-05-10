import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from "react-native";
import { Avatar, Card, Paragraph } from "react-native-paper";
import { format } from "date-fns";
import { useContent } from "@store";
import { IContent } from "@entities";

const Item = ({ item: { title, createdAt, id, body, savedAt } }: { item: IContent }) => (
  <Card style={{ marginBottom: 25 }} key={id}>
    <Card.Title
      title={title}
      subtitle={format(new Date(createdAt), `yyyy-MM-dd HH:mm:ss`)}
      right={(props) => {
        if (savedAt) {
          return (<></>);
        }
        return (<Avatar.Icon {...props} icon="upload" />);
      }
      }
    />
    <Card.Content>
      <Paragraph>{body}</Paragraph>
    </Card.Content>
  </Card>
);

const ListContent = () => {
  const { contents, getAllContents } = useContent();
  const [contentTab, setContentTab] = useState<IContent[]>([]);

  useEffect(() => {
    getAllContents();
  }, []);
  useEffect(() => {
    setContentTab(Object.values(contents));
  }, [contents]);

  const renderItem = ({ item }: { item: IContent }) => <Item item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      {contentTab && (
        <FlatList
          data={contentTab}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  },
  body: {
    fontSize: 26
  }
});

export default ListContent;
