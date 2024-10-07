import React, { useMemo } from 'react';
import ChatBot from 'react-simple-chatbot';

const Chatbots = () => {
    // Memoize the steps to prevent re-rendering unless the steps change
    const steps = useMemo(() => [
        {
            id: 'Great',
            message: "Hello, welcome to our Mangomart",
            trigger: 'Ask Name'
        },
        {
            id: 'Ask Name',
            message: 'Please enter your name',
            trigger: 'waiting'
        },
        {
            id: 'waiting',
            user: true,  // This captures the user's name input
            trigger: "Name"
        },
        {
            id: "Name",
            message: ({ previousValue }) => `Hi ${previousValue}, please select your issue`,  // Greets the user with their name
            trigger: 'issue'
        },
        {
            id: 'issue',
            options: [
                { value: 'payment', label: "payment", trigger: "payment" },
                { value: 'order', label: "order", trigger: "order" }
            ]
        },
        {
            id: 'payment',
            message: 'You must go to dashboard into Mango order then fill up the form its automatic go to you into payment option',
            trigger:'issue'
        },
        {
            id: "order",
            message: 'You can order mango from Order mango page or go to dashboard and fill up the form',
            trigger:'issue'
        }
    ], []); // Empty dependency array ensures the steps don't change unless needed

    return (

        <ChatBot
            headerTitle="Speech Recognition"
            recognitionEnable={false}  // Speech recognition disabled
            steps={steps}
            floating={true}
        />

    );
};

export default Chatbots;
