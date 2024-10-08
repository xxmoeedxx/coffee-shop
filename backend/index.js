import express from 'express';
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.post('/profile', (req, res) => {
    const { 
        name: Name, 
        title: Title, 
        keywords: TargetedKeywords, 
        education: Education, 
        certifications: Certification, 
        contact: Contact 
      } = req.body;
    
      // Check for missing fields
      if (!Name || !Title || !TargetedKeywords || !Education || !Certification || !Contact) {
        return res.status(400).send({ error: 'Missing required fields' });
      }

  // Load profiles from file    
  const profilesPath = path.join(__dirname, 'profiles.json');
  let profiles = [];
  if (fs.existsSync(profilesPath)) {
    const fileContent = fs.readFileSync(profilesPath, 'utf8');
    profiles = fileContent ? JSON.parse(fileContent) : [];  // Handle empty file
  }

  profiles.push(req.body);

  // Save updated profiles back to the file
  fs.writeFileSync(profilesPath, JSON.stringify(profiles, null, 2));

  res.status(201).send({ message: 'Profile saved successfully' });
});

// Route to return profiles from a CSV file
app.get('/profiles-from-csv', (req, res) => {
    const profilesPath = path.join(__dirname, 'profiles.csv');
    const profiles = [];
  
    // Check if the CSV file exists
    if (!fs.existsSync(profilesPath)) {
      return res.status(404).send({ error: 'CSV file not found' });
    }
  
    // Read and parse the CSV file
    fs.createReadStream(profilesPath)
      .pipe(csv())
      .on('data', (row) => {
        profiles.push(row); // Add each row (profile) to the profiles array
      })
      .on('end', () => {
        res.status(200).json(profiles); // Send the profiles as JSON once reading is complete
      })
      .on('error', (error) => {
        res.status(500).send({ error: 'Error reading CSV file' });
      });
  });
  
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
