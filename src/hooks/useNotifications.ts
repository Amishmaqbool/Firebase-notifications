import { useState, useEffect } from "react";
import {
  Notification,
  fetchNotifications,
  addNotification,
  markAsRead,
  deleteNotification,
} from "../services/firebaseService";

/**
 * Custom hook to manage notifications.
 * It fetches notifications from Firestore, and provides functions to add, mark as read, and delete notifications.
 */
const useNotifications = () => {
  // State to hold the list of notifications
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Effect to load notifications when the component mounts
  useEffect(() => {
    const loadNotifications = async () => {
      const fetchedNotifications = await fetchNotifications();
      setNotifications(fetchedNotifications);
    };
    loadNotifications();
  }, []);

  // Function to add a new notification
  const addNewNotification = async (message: string) => {
    await addNotification(message);
    setNotifications(await fetchNotifications());
  };

  // Function to mark a notification as read
  const markNotificationAsRead = async (id: string) => {
    await markAsRead(id);
    setNotifications(await fetchNotifications());
  };

  // Function to delete a notification
  const removeNotification = async (id: string) => {
    await deleteNotification(id);
    setNotifications(await fetchNotifications());
  };

  // Return the notifications and functions to manipulate them
  return {
    notifications,
    addNewNotification,
    markNotificationAsRead,
    removeNotification,
  };
};

export default useNotifications;
