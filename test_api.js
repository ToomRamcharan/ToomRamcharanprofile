
async function testGeminiAPI() {
    const apiKey = 'AIzaSyCEB-_sDYOvL7MK7jUCKnra0iq5jVd44MA';
    const model = 'gemini-2.0-flash';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const payload = {
        contents: [{
            parts: [{
                text: "Hello, are you working?"
            }]
        }]
    };

    try {
        console.log(`Testing model: ${model}`);
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            console.error(`API request failed with status ${response.status}`);
            const errorData = await response.text();
            console.error("Error details:", errorData);
        } else {
            const data = await response.json();
            console.log("Success! Response:", data.candidates[0].content.parts[0].text);
        }
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

testGeminiAPI();
