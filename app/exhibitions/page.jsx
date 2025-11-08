export const metadata = {
    title: 'Exhibitions'
};

const exhibitions = [
    {
        year: '2025',
        entries: [
            { title: 'BAAM 9', location: 'Berlin, Germany' },
            { title: 'Bushy Pony, vol.1', location: 'Berlin, Germany' }
        ]
    },
    {
        year: '2024',
        entries: [
            { title: 'Salon de Refusees', location: 'Art-space Krautart, Berlin, Germany' },
            { title: 'BAAM 8', location: 'Berlin, Germany' }
        ]
    },
    {
        year: '2023',
        entries: [
            { title: 'Exactly Lab: Artists Embracing New AI', location: 'Guelman und Unbekannt Gallery, Berlin, Germany' },
            { title: 'Goddesart Magazine, issue11 October-November', location: '' }
        ]
    },
    {
        year: '2020',
        entries: [
            { title: 'Exhibition Feministische Solidarität :: Red Square Festival', location: 'Berlin, Germany' }
        ]
    },
    {
        year: '2017',
        entries: [
            { title: 'Gallery Elephants', location: 'Chiangmai, Thailand' }
        ]
    }
];

export default function ExhibitionsPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-light tracking-wider mb-4">
                        Exhibitions
                    </h1>
                </div>

                <div className="space-y-10">
                    {exhibitions.map((yearGroup, index) => (
                        <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0">
                            <h2 className="text-lg font-light text-gray-900 mb-4">
                                {yearGroup.year}
                            </h2>

                            <div className="space-y-3">
                                {yearGroup.entries.map((exhibition, entryIndex) => (
                                    <div key={entryIndex} className="flex flex-col md:flex-row md:items-start gap-1">
                                        <div className="md:flex-1">
                                            <h3 className="text-sm font-normal text-gray-900">
                                                {exhibition.title}
                                            </h3>
                                        </div>
                                        {exhibition.location && (
                                            <div className="md:flex-1 md:text-right">
                                                <p className="text-xs text-gray-600 font-light">
                                                    {exhibition.location}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}