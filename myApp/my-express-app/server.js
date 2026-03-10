const express = require('express');
const app = express();
// Αρχική σελίδα
app.get('/', (req, res) => {
    res.send('Καλώς ήρθατε στον Express Server!');});
// Εκκίνηση του server στη θύρα 3000
app.listen(3000, () => {
    console.log('Ο server τρέχει στη θύρα 3000');});


app.get('/about', (req, res) => {
    res.send('Σχετικά με εμάς');
});
app.get('/contact', (req, res) => {
    res.send('Επικοινωνία: email@example.com');
});


app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, name: 'Γιώργος' },
        { id: 2, name: 'Μαρία' }    ]);});


app.use((req, res, next) => {
    console.log(`Αίτημα στη διαδρομή: ${req.url}`);
    next();
});

app.get('/hello', (req, res) => {
    res.send('Γεια σου, κόσμε!');
});

app.get('/users', (req, res) => {
    res.send('Λίστα χρηστών');
});
app.post('/users', (req, res) => {
    res.send('Ο χρήστης δημιουργήθηκε');
});
app.put('/users/:id', (req, res) => {
    res.send(`Ο χρήστης με ID ${req.params.id} ενημερώθηκε`);
});
app.delete('/users/:id', (req, res) => {
    res.send(`Ο χρήστης με ID ${req.params.id} διαγράφηκε`);
});

app.get('/search', (req, res) => {
    const query = req.query.q; // Παίρνει το q από το URL
    res.send(`Αναζητάτε για: ${query}`);
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Προβολή στοιχείων χρήστη με ID: ${userId}`);
});

app.use(express.json());

app.post('/users', (req, res) => {
    const { name, email } = req.body;
    res.send(`Ο χρήστης ${name} με email ${email} προστέθηκε!`);
});

app.get('/api/products', (req, res) => {
    res.json([
        { id: 1, name: 'Laptop', price: 1200 },
        { id: 2, name: 'Smartphone', price: 800 }
    ]);});


    app.get('/old-page', (req, res) => {
    res.redirect('/new-page');
});


app.use((req, res) => {
    res.status(404).send('Η σελίδα δεν βρέθηκε');
});

app.use((req, res, next) => {
    console.log(`Αίτημα στη διαδρομή: ${req.url}`);
    next(); // Προχωρά στο επόμενο middleware ή route handler
});
