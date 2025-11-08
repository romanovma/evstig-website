export const metadata = {
    title: 'About'
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-3xl mx-auto px-6 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-light tracking-wider mb-4">
                        About
                    </h1>
                </div>

                <div className="prose prose-lg max-w-none">
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                        <p className="text-base font-light">
                            Active in the arts since 2012 and working independently as a freelance artist since 2015, I am a self-taught painter with a background shaped through design and illustration. Based in Berlin, my practice has included participation in both local collective exhibitions and selected shows abroad.
                        </p>

                        <p className="text-base font-light">
                            My work focuses on figurative painting with elements of abstraction, primarily in oils using Liquin as a medium. Portraits of women and children recur throughout my practice, reflecting both a response to a turbulent childhood and a search for resonance in adulthood. These works are not intended as radical statements but rather as intimate narratives—mini-stories that gradually form a personal visual language.
                        </p>

                        <p className="text-base font-light">
                            While rooted in my own experiences, the paintings remain open to interpretation. I value the ways in which viewers bring their own meanings to the work and therefore choose to frame my art with subtle descriptions rather than impose the ideas that inspired them.
                        </p>

                        <p className="text-base font-light">
                            The most valuable figures in the art world that helped me think and work in a way I do, are Alex Kanevsky, Jenny Saville and Sally Gabori.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}