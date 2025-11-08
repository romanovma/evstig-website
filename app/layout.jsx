import '../styles/globals.css';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Elina Evstig',
        default: 'Elina Evstig'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-gray-900 bg-white">
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-1">{children}</main>
                </div>
            </body>
        </html>
    );
}
