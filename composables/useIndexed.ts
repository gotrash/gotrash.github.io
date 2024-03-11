import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";

export const INDEXED_DB_NAME = "GoTrash";
export const INDEXED_DB_VERSION = 1;

export const INDEXED_JOB_DETAILS_STORE = "job_details";
export const INDEXED_JOB_ITEMS_STORE = "job_items";

export interface IUseIndexed<T> {
  addJobItem: Function;
  deleteJobItem: Function;
  getJobItems: Function;
  openDb: Function;
}

export async function useIndexed<T>(): Promise<IDBDatabase | null> {
  let DB: IDBDatabase | null = null;

  // const addJobItem = () => {};

  // const deleteJobItem = () => {};

  // const getJobItems = () => {};

  // const openDb = () => {
  //   if (DB) return DB;

  //   DB = null;

  //   return DB;
  // };

  // return { addJobItem, deleteJobItem, getJobItems, openDb };

  return new Promise((resolve, reject) => {
    if (DB) resolve(DB);

    const request: IDBOpenDBRequest = window.indexedDB.open(INDEXED_DB_NAME, INDEXED_DB_VERSION);

    request.onerror = e => {
      reject(new Error("Error Accessing Database"));
    };

    request.onsuccess = e => {
      /* @ts-ignore */
      DB = e.target?.result;

      const testData = { id: 1 };

      /* @ts-ignore */
      const transaction: IDBTransaction = DB.transaction([INDEXED_JOB_DETAILS_STORE], "readwrite");

      transaction.oncomplete = () => {
        /* @ts-ignore */
        const transactionItems: IDBTransaction = DB.transaction([INDEXED_JOB_ITEMS_STORE], "readwrite");
        transactionItems.oncomplete = () => {
          resolve(DB);
        };
        const dataStoreItems: IDBObjectStore = transactionItems.objectStore(INDEXED_JOB_ITEMS_STORE);
        dataStoreItems.put(testData);
      };

      const dataStore: IDBObjectStore = transaction.objectStore(INDEXED_JOB_DETAILS_STORE);

      dataStore.put(testData);
    };

    request.onupgradeneeded = (e: IDBVersionChangeEvent) => {
      /* @ts-ignore */
      const database = e.target?.result;
      const databaseVersion = e.oldVersion;

      console.log("IndexedDB: Upgrade Needed");

      if (databaseVersion < 1) {
        database.createObjectStore(INDEXED_JOB_DETAILS_STORE, { keyPath: "id" });
        database.createObjectStore(INDEXED_JOB_ITEMS_STORE, { keyPath: "id" });
      }
    };
  });
}
