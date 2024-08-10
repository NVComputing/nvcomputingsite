const fs = require('fs');
const path = require('path');

module.exports.set = (app) => {
    app.post('/stats', async (req, res) => {
        try {
            // Dynamically import node-fetch
            const { default: fetch } = await import('node-fetch');

            // Fetch data from the external API
            const externalResponse = await fetch('https://autojudgerserver.vercel.app/leaderboards');
            if (!externalResponse.ok) {
                throw new Error('Failed to fetch external data');
            }
            const externalData = await externalResponse.json();

            // Read local users data from users.json
            const filePath = path.join(__dirname, '../stats.json');
            const fileData = fs.readFileSync(filePath, 'utf8');
            const localData = JSON.parse(fileData);

            // Update local data with external data
            localData.users.forEach(user => {
                // Check if the user's school ID exists in the external data
                const schoolId = user.id; // Assuming `user.id` is the school ID in the local data
                if (externalData[schoolId] !== undefined) {
                    user.classQuestions = externalData[schoolId];
                }
            });

            // Respond with the updated local data
            res.json(localData);
        } catch (error) {
            console.error('Error handling the request:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
};
