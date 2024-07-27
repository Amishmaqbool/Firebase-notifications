import React from 'react';
import Button from './Button';
import Notification from './Notification';
import useNotifications from '../hooks/useNotifications';

const NotificationSystem: React.FC = () => {
    const { notifications, addNewNotification, markNotificationAsRead, removeNotification } = useNotifications();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Notifications</h1>
            <div className="mb-4 flex space-x-2">
                {/* Buttons to add notifications */}
                <Button label="Notification 1" onClick={() => addNewNotification('Hey this is 1st notification')} />
                <Button label="Notification 2" onClick={() => addNewNotification('Hey this is 2nd notification')} />
                <Button label="Notification 3" onClick={() => addNewNotification('Hey this is 3rd notification')} />
            </div>
            <div>
                {/* Render a message if there are no notifications */}
                {notifications.length === 0 ? (
                    <p>No notifications. Please add notifications by clicking on the buttons above.</p>
                ) : (
                    /* Render the list of notifications */
                    notifications.map((notification) => (
                        <Notification
                            key={notification.id}
                            message={notification.message}
                            read={notification.read}
                            onMarkAsRead={() => markNotificationAsRead(notification.id)}
                            onDelete={() => removeNotification(notification.id)}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default NotificationSystem;
