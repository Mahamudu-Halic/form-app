import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const Quiz = () => {
const [generatedText, setGeneratedText] = useState('');

// useEffect(() => {
    // Define your API endpoint and parameters
//     const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';
//     const prompt = 'Translate the following English text to French: "{text}"';
//     const apiKey = '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';

//     // Make an API request
//     axios.post(apiUrl, {
//     prompt: prompt,
//     max_tokens: 50,
//     }, {
//     headers: {
//         'Authorization': `Bearer ${apiKey}`,
//         'Content-Type': 'application/json',
//     },
//     })
//     .then(response => {
//     setGeneratedText(response.data.choices[0].text);
//     })
//     .catch(error => {
//     console.error('Error:', error);
//     });
// }, []);

// console.log(generatedText)

return (
    <div>
        <Helmet>
            <title>Quiz</title>
        </Helmet>
    <h1>coming soon</h1>
    {/* <p>{generatedText}</p> */}
    </div>
);
}

export default Quiz;
