import { View, Text, FlatList } from "react-native";
import NoteItem from "./NoteItem";

export default function NoteList({ notes }: any) {
  return (
    <FlatList
      data={notes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <NoteItem text={item.text} />}
    />
  );
}
