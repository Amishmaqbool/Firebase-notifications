import React from 'react';

interface NotificationProps {
    message: string;
    read: boolean;
    onMarkAsRead: () => void;
    onDelete: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, read, onMarkAsRead, onDelete }) => {
    return (
        <div className={`flex justify-between items-center p-4 mb-2 rounded shadow ${read ? 'bg-gray-300' : 'bg-gray-100'}`}>
            <p className={`text-gray-800 ${read ? 'line-through' : ''}`}>{message}</p>
            <div className="flex space-x-2">
                <button
                    onClick={onMarkAsRead}
                    className={`px-3 py-1 text-white rounded transition-colors duration-300 ${read ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-500 hover:bg-green-700'}`}
                    disabled={read}
                >
                    {read ? 'Read' : 'Mark as Read'}
                </button>
                <button
                    onClick={onDelete}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700 transition-colors duration-300"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Notification;
