import './globals.css'
import Navbar from './components/navbar'

export const metadata = {
  title: 'Task It',
  description: 'Organize your everyday tasks',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
