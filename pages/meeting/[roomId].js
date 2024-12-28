import { useEffect, useRef, useState } from 'react';

const MeetingRoom = () => {
    const [roomId, setRoomId] = useState('');
    const [ws, setWs] = useState(null);
    const [localStream, setLocalStream] = useState(null);
    const [remoteStream, setRemoteStream] = useState(null);
    const [peerConnection, setPeerConnection] = useState(null);
    const [screenStream, setScreenStream] = useState(null);
    const [isScreenSharing, setIsScreenSharing] = useState(false);

    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const chatBoxRef = useRef(null);
    const messageInputRef = useRef(null);

    useEffect(() => {
        // Extract roomId from URL
        const room = window.location.pathname.split('/').pop();
        setRoomId(room);

        const wsConnection = new WebSocket(`ws://${window.location.hostname}:3000/api/socket`);
        setWs(wsConnection);

        wsConnection.onopen = () => {
            console.log('WebSocket connection established');
            wsConnection.send(JSON.stringify({ roomId, type: 'join' }));
        };

        wsConnection.onmessage = async (message) => {
            const data = JSON.parse(message.data);
            if (data.type === 'offer') {
                await peerConnection.setRemoteDescription(new RTCSessionDescription(data.payload));
                const answer = await peerConnection.createAnswer();
                await peerConnection.setLocalDescription(answer);
                wsConnection.send(JSON.stringify({ roomId, type: 'answer', payload: answer }));
            } else if (data.type === 'answer') {
                await peerConnection.setRemoteDescription(new RTCSessionDescription(data.payload));
            } else if (data.type === 'candidate') {
                await peerConnection.addIceCandidate(new RTCIceCandidate(data.payload));
            } else if (data.type === 'chat') {
                chatBoxRef.current.innerHTML += `<div><strong>User:</strong> ${data.payload.message}</div>`;
            } else if (data.type === 'user-left') {
                chatBoxRef.current.innerHTML += `<div><em>A user has left the room.</em></div>`;
            }
        };

        // Cleanup WebSocket connection when the component unmounts
        return () => {
            if (wsConnection) {
                wsConnection.close();
            }
        };
    }, [roomId]);

    useEffect(() => {
        const startMedia = async () => {
            try {
                // Get local media stream
                const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
                setLocalStream(stream);
                if (localVideoRef.current) {
                    localVideoRef.current.srcObject = stream;
                }

                // Initialize peer connection
                const pc = new RTCPeerConnection({ iceServers: [{ urls: "stun:stun.l.google.com:19302" }] });
                setPeerConnection(pc);

                // Add local stream to peer connection
                stream.getTracks().forEach((track) => {
                    pc.addTrack(track, stream);
                });

                // Handle remote stream
                pc.ontrack = (event) => {
                    if (!remoteStream) {
                        setRemoteStream(new MediaStream());
                    }
                    remoteStream.addTrack(event.track);
                    if (remoteVideoRef.current) {
                        remoteVideoRef.current.srcObject = remoteStream;
                    }
                };

                // Send ICE candidates to the server
                pc.onicecandidate = (event) => {
                    if (event.candidate) {
                        ws.send(JSON.stringify({
                            roomId,
                            type: 'candidate',
                            payload: event.candidate,
                        }));
                    }
                };

                // Create and send offer if stream is available
                if (stream) {
                    const offer = await pc.createOffer();
                    await pc.setLocalDescription(offer);
                    ws.send(JSON.stringify({ roomId, type: 'offer', payload: offer }));
                }
            } catch (error) {
                console.error('Error accessing media devices.', error);
            }
        };

        startMedia();
    }, [ws, roomId]);

    const handleToggleVideo = () => {
        const videoTrack = localStream.getVideoTracks()[0];
        videoTrack.enabled = !videoTrack.enabled;
    };

    const handleToggleMic = () => {
        const audioTrack = localStream.getAudioTracks()[0];
        audioTrack.enabled = !audioTrack.enabled;
    };

    const handleScreenSharing = async () => {
        if (isScreenSharing) {
            const screenTrack = screenStream.getTracks()[0];
            screenTrack.stop();
            localStream.getTracks().forEach((track) => {
                peerConnection.addTrack(track, localStream);
            });
            setIsScreenSharing(false);
        } else {
            try {
                const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
                screenStream.getTracks().forEach((track) => {
                    peerConnection.addTrack(track, screenStream);
                });
                setScreenStream(screenStream);
                setIsScreenSharing(true);
            } catch (error) {
                console.error('Error accessing screen media:', error);
            }
        }
    };

    const handleLeaveRoom = () => {
        if (ws) {
            ws.send(JSON.stringify({ roomId, type: 'leave' }));
            ws.close();
        }
        if (localStream) {
            localStream.getTracks().forEach(track => track.stop());
        }
        if (peerConnection) {
            peerConnection.close();
        }
        window.location.href = '/';  // Redirect to homepage or meeting creation page
    };

    const handleSendMessage = () => {
        const message = messageInputRef.current.value.trim();
        if (message && ws) {
            ws.send(JSON.stringify({ roomId, type: 'chat', payload: { message } }));
            chatBoxRef.current.innerHTML += `<div><strong>You:</strong> ${message}</div>`;
            messageInputRef.current.value = ''; // Clear the input field
        }
    };

    return (
        <div>
            <h1>Video Chat Room</h1>
            {/* Local video */}
            <video ref={localVideoRef} autoPlay playsInline muted></video>

            {/* Remote video */}
            <video ref={remoteVideoRef} autoPlay playsInline></video>

            {/* Control Buttons */}
            <div>
                <button onClick={handleToggleVideo}>Turn Video Off</button>
                <button onClick={handleToggleMic}>Mute Mic</button>
                <button onClick={handleScreenSharing}>
                    {isScreenSharing ? 'Stop Sharing Screen' : 'Share Screen'}
                </button>
                <button onClick={handleLeaveRoom}>Leave Room</button>
            </div>

            {/* Chat Section */}
            <div>
                <div id="chatBox" ref={chatBoxRef}></div>
                <input
                    type="text"
                    ref={messageInputRef}
                    placeholder="Type a message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default MeetingRoom;
