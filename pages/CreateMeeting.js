import { useState } from 'react';
import { useRouter } from 'next/router';

const CreateMeeting = () => {
    const [roomId, setRoomId] = useState('');
    const [generatedLink, setGeneratedLink] = useState('');
    const router = useRouter();

    const generateRoomLink = () => {
        const uniqueRoomId = roomId.trim() || `meeting-${Math.floor(Math.random() * 100000)}`; // If no roomId provided, generate a random one
        const roomLink = `${window.location.origin}/meeting/${uniqueRoomId}`;
        setGeneratedLink(roomLink);
        setRoomId(uniqueRoomId);
    };

    const handleJoinRoom = () => {
        if (roomId) {
            router.push(`/meeting/${roomId}`);
        }
    };

    return (
        <div>
            <h1>Create or Join a Meeting</h1>

            {/* Input for a custom room ID */}
            <input
                type="text"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                placeholder="Enter a custom room ID (optional)"
            />
            <button onClick={generateRoomLink}>Create Meeting</button>

            {/* Show generated room link */}
            {generatedLink && (
                <div>
                    <p>Your meeting link:</p>
                    <a href={generatedLink} target="_blank" rel="noopener noreferrer">
                        {generatedLink}
                    </a>
                </div>
            )}

            {/* Join Room Button */}
            {generatedLink && (
                <button onClick={handleJoinRoom}>Join the Room</button>
            )}
        </div>
    );
};

export default CreateMeeting;
