import React, { useEffect, useState } from "react";
import { Text, View, TextInput, Button } from "react-native";

import { getListChapter, getListUnit, getListWord } from "./leaning.service";

function Learning(props) {
  const [chapters, setChapters] = useState("");

  const loadChapters = async () => {
    const tempChapters = await getListChapter();
    setChapters(tempChapters);
  };
  let list;
  if (chapters) {
    list = chapters.map((chapter, index) => {
      console.log(chapter);
      return <Text key={index}>{chapter.name}</Text>;
    });
  }
  return (
    <View>
      <Button onPress={loadChapters} title="Show chapter"></Button>
      <Text>Chapter:</Text>
      {list}
    </View>
  );
}

export default Learning;
