// Minimal static file server for Azure App Service.
// A Vite build produces static files; App Service Linux needs something
// to "start". This serves the built files from /dist and handles SPA routing.
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const port = process.env.PORT || 8080

// Serve the built static files
app.use(express.static(path.join(__dirname, 'dist')))

// Send all other routes to index.html (so React routing works)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
