import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native';
import { FindAllContentOutputDto } from '@shared';
import { Title, Card, Paragraph } from 'react-native-paper';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';

const DATA: FindAllContentOutputDto[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b3',
    title: 'First Item',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec risus et ex scelerisque sodales. Proin erat urna, vulputate in blandit semper, mollis id lorem. Donec sed aliquet dui, lobortis dapibus turpis. Nullam eu ligula ut turpis aliquam volutpat. Vestibulum id nisl interdum, tempor massa nec, vulputate enim. Proin blandit augue quis magna rhoncus, in sollicitudin quam aliquam. Donec nec pellentesque risus. ',
    createdAt: new Date('2022-05-05T05:55:18.685Z'),
    savedAt: new Date('2022-05-08T09:42:06.194Z'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',
    title: 'Second Item',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec risus et ex scelerisque sodales. Proin erat urna, vulputate in blandit semper, mollis id lorem. Donec sed aliquet dui, lobortis dapibus turpis. Nullam eu ligula ut turpis aliquam volutpat. Vestibulum id nisl interdum, tempor massa nec, vulputate enim. Proin blandit augue quis magna rhoncus, in sollicitudin quam aliquam. Donec nec pellentesque risus. ',
    createdAt: new Date('2022-05-05T05:55:18.685Z'),
    savedAt: new Date('2022-05-08T09:42:06.194Z'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d79',
    title: 'Third Item',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec risus et ex scelerisque sodales. Proin erat urna, vulputate in blandit semper, mollis id lorem. Donec sed aliquet dui, lobortis dapibus turpis. Nullam eu ligula ut turpis aliquam volutpat. Vestibulum id nisl interdum, tempor massa nec, vulputate enim. Proin blandit augue quis magna rhoncus, in sollicitudin quam aliquam. Donec nec pellentesque risus. ',
    createdAt: new Date('2022-05-05T05:55:18.685Z'),
    savedAt: new Date('2022-05-08T09:42:06.194Z'),
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b8',
    title: 'First Item',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec risus et ex scelerisque sodales. Proin erat urna, vulputate in blandit semper, mollis id lorem. Donec sed aliquet dui, lobortis dapibus turpis. Nullam eu ligula ut turpis aliquam volutpat. Vestibulum id nisl interdum, tempor massa nec, vulputate enim. Proin blandit augue quis magna rhoncus, in sollicitudin quam aliquam. Donec nec pellentesque risus. ',
    createdAt: new Date('2022-05-05T05:55:18.685Z'),
    savedAt: new Date('2022-05-08T09:42:06.194Z'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f73',
    title: 'Second Item',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec risus et ex scelerisque sodales. Proin erat urna, vulputate in blandit semper, mollis id lorem. Donec sed aliquet dui, lobortis dapibus turpis. Nullam eu ligula ut turpis aliquam volutpat. Vestibulum id nisl interdum, tempor massa nec, vulputate enim. Proin blandit augue quis magna rhoncus, in sollicitudin quam aliquam. Donec nec pellentesque risus. ',
    createdAt: new Date('2022-05-05T05:55:18.685Z'),
    savedAt: new Date('2022-05-08T09:42:06.194Z'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Third Item',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec risus et ex scelerisque sodales. Proin erat urna, vulputate in blandit semper, mollis id lorem. Donec sed aliquet dui, lobortis dapibus turpis. Nullam eu ligula ut turpis aliquam volutpat. Vestibulum id nisl interdum, tempor massa nec, vulputate enim. Proin blandit augue quis magna rhoncus, in sollicitudin quam aliquam. Donec nec pellentesque risus. ',
    createdAt: new Date('2022-05-05T05:55:18.685Z'),
    savedAt: new Date('2022-05-08T09:42:06.194Z'),
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b5',
    title: 'First Item',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec risus et ex scelerisque sodales. Proin erat urna, vulputate in blandit semper, mollis id lorem. Donec sed aliquet dui, lobortis dapibus turpis. Nullam eu ligula ut turpis aliquam volutpat. Vestibulum id nisl interdum, tempor massa nec, vulputate enim. Proin blandit augue quis magna rhoncus, in sollicitudin quam aliquam. Donec nec pellentesque risus. ',
    createdAt: new Date('2022-05-05T05:55:18.685Z'),
    savedAt: new Date('2022-05-08T09:42:06.194Z'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
    title: 'Second Item',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec risus et ex scelerisque sodales. Proin erat urna, vulputate in blandit semper, mollis id lorem. Donec sed aliquet dui, lobortis dapibus turpis. Nullam eu ligula ut turpis aliquam volutpat. Vestibulum id nisl interdum, tempor massa nec, vulputate enim. Proin blandit augue quis magna rhoncus, in sollicitudin quam aliquam. Donec nec pellentesque risus. ',
    createdAt: new Date('2022-05-05T05:55:18.685Z'),
    savedAt: new Date('2022-05-08T09:42:06.194Z'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Third Item',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec risus et ex scelerisque sodales. Proin erat urna, vulputate in blandit semper, mollis id lorem. Donec sed aliquet dui, lobortis dapibus turpis. Nullam eu ligula ut turpis aliquam volutpat. Vestibulum id nisl interdum, tempor massa nec, vulputate enim. Proin blandit augue quis magna rhoncus, in sollicitudin quam aliquam. Donec nec pellentesque risus. ',
    createdAt: new Date('2022-05-05T05:55:18.685Z'),
    savedAt: new Date('2022-05-08T09:42:06.194Z'),
  },
];

const Item = ({
  item: { title, createdAt, id, body },
}: {
  item: FindAllContentOutputDto;
}) => (
  <Card style={{ marginBottom: 25 }}>
    <Card.Title
      title={title}
      subtitle={format(createdAt, `yyyy-MM-dd HH:mm:ss`)}
    />
    <Card.Content>
      <Paragraph>{body}</Paragraph>
    </Card.Content>
  </Card>
);

const ListContent = () => {
  const renderItem = ({ item }: { item: FindAllContentOutputDto }) => (
    <Item item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  body: {
    fontSize: 26,
  },
});

export default ListContent;
