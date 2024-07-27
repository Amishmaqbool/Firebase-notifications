import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../utils/firebase';

export interface Notification {
  id: string;
  message: string;
  read: boolean;
}

export const fetchNotifications = async (): Promise<Notification[]> => {
  const querySnapshot = await getDocs(collection(db, 'notifications'));
  const notificationsList: Notification[] = [];
  querySnapshot.forEach((doc) => {
    notificationsList.push({ id: doc.id, ...doc.data() } as Notification);
  });
  return notificationsList;
};

export const addNotification = async (message: string): Promise<void> => {
  await addDoc(collection(db, 'notifications'), {
    message,
    read: false,
  });
};

export const markAsRead = async (id: string): Promise<void> => {
  const notificationDoc = doc(db, 'notifications', id);
  await updateDoc(notificationDoc, { read: true });
};

export const deleteNotification = async (id: string): Promise<void> => {
  const notificationDoc = doc(db, 'notifications', id);
  await deleteDoc(notificationDoc);
};
