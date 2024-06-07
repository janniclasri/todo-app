import express, { Request, Response } from 'express';
import todoRoutes from './routes/todoRoutes';
import path from 'path';

// Erstellen einer Express-Anwendung
const app = express();
const port = 3000;

// Middleware zum Parsen von JSON-Anfragen
app.use(express.json());
app.use('/api', todoRoutes)

// Statische Dateien aus dem Ordner 'public' bereitstellen
app.use(express.static(path.join(__dirname, '../public')));

// Starten des Servers
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

