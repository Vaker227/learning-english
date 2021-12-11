import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";
import * as SQLite from "expo-sqlite";

// ket noi den file
async function connectDatabase() {
  if (
    !(await FileSystem.getInfoAsync(FileSystem.documentDirectory + "SQLite"))
      .exists
  ) {
    await FileSystem.makeDirectoryAsync(
      FileSystem.documentDirectory + "SQLite"
    );
  }
  await FileSystem.downloadAsync(
    Asset.fromModule(require("../../../assets/SQLite/data.db")).uri,
    FileSystem.documentDirectory + "SQLite/data.db"
  );
  return SQLite.openDatabase("data.db");
}

// tham khao https://docs.expo.dev/versions/latest/sdk/sqlite/

// chapter type: (id int, name: string)

// return array chapter
export async function getListChapter() {
  // db type Database
  const db = await connectDatabase();
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql("select * from chapter", "", (trans, result) => {
          //tra ve array ket qua ( type: SQLResultSet )
          resolve(result.rows._array);
        });
      },
      (error) => {
        // neu co tra ve loi
        reject(error);
      }
    );
  });
}

// return array unit
export async function getListUnit(chapterId) {
  // db type Database
  const db = await connectDatabase();
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "select * from unit where chapter_id = ? ",
          [chapterId],
          (trans, result) => {
            //tra ve array ket qua ( type: SQLResultSet )
            resolve(result.rows._array);
          }
        );
      },
      (error) => {
        // neu co tra ve loi
        reject(error);
      }
    );
  });
}

// return array word
export async function getListWord(unitId) {
  console.log("unit-id" + unitId);
  // db type Database
  const db = await connectDatabase();
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        return tx.executeSql(
          "select * from word where unit_id = ? ",
          [unitId],
          (trans, result) => {
            //tra ve array ket qua ( type: SQLResultSet )
            console.log(result.rows);
            resolve(result.rows._array);
          }
        );
      },
      (error) => {
        // neu co tra ve loi
        reject(error);
      },
      () => {
        console.log("finish");
      }
    );
  });
}
