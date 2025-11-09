'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ImageGallery({ images, title }) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (selectedImageIndex === null) return;

            switch (e.key) {
                case 'Escape':
                    if (isFullscreen) {
                        setIsFullscreen(false);
                    } else {
                        setSelectedImageIndex(null);
                    }
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    navigateImage('prev');
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    navigateImage('next');
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [selectedImageIndex, isFullscreen]);

    const openGallery = (index) => {
        setSelectedImageIndex(index);
    };

    const closeGallery = async () => {
        // Exit fullscreen if currently in fullscreen
        if (document.fullscreenElement) {
            try {
                await document.exitFullscreen();
            } catch (error) {
                console.error('Error exiting fullscreen:', error);
            }
        }
        setSelectedImageIndex(null);
        setIsFullscreen(false);
    };

    const navigateImage = (direction) => {
        if (selectedImageIndex === null) return;

        let newIndex;
        if (direction === 'next') {
            newIndex = selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1;
        } else {
            newIndex = selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1;
        }
        setSelectedImageIndex(newIndex);
    };

    const toggleFullscreen = async () => {
        try {
            if (!document.fullscreenElement) {
                // Enter fullscreen
                await document.documentElement.requestFullscreen();
                setIsFullscreen(true);
            } else {
                // Exit fullscreen
                await document.exitFullscreen();
                setIsFullscreen(false);
            }
        } catch (error) {
            console.error('Error toggling fullscreen:', error);
        }
    };

    // Listen for fullscreen changes
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    // Prevent scrolling when gallery is open
    useEffect(() => {
        if (selectedImageIndex !== null) {
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = 'unset';
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.documentElement.style.overflow = 'unset';
            document.body.style.overflow = 'unset';
        };
    }, [selectedImageIndex]);

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-light tracking-wider mb-4">
                        {title}
                    </h1>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 md:gap-x-6 gap-y-4 md:gap-y-6 items-start">
                    {images.map((image, index) => (
                        <div
                            key={image.id || index}
                            className="aspect-square hover:opacity-90 transition-opacity cursor-pointer bg-white border-0 flex items-center justify-center"
                            onClick={() => openGallery(index)}
                        >
                            <Image
                                src={`/images/${image.filename}`}
                                alt={image.title}
                                width={300}
                                height={400}
                                className="object-contain w-full h-full object-top"
                                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                            />
                        </div>
                    ))}
                </div>

                {/* Gallery Modal */}
                {selectedImageIndex !== null && (
                    <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden ${isFullscreen ? 'bg-white' : 'bg-white bg-opacity-95'}`}>
                        {/* Gallery Container */}
                        <div className={`relative overflow-hidden ${isFullscreen ? 'w-full h-full' : 'w-full h-full max-w-5xl max-h-[100vh]'}`}>
                            {/* Top Controls - positioned at viewport edges */}
                            <button
                                onClick={toggleFullscreen}
                                className="fixed top-6 left-6 text-gray-700 hover:text-gray-900 transition-colors p-2 z-20 cursor-pointer"
                                title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                            >
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {isFullscreen ? (
                                        // Compress/Exit fullscreen icon - 2 diagonal arrows pointing toward each other
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.7} d="M20 4l-5 5M15 9h5M15 9v-5M4 20l5-5M9 15h-5M9 15v5" />
                                    ) : (
                                        // Expand/Enter fullscreen icon - 2 diagonal arrows pointing outward (rotated 90°, much bigger, thinner)
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.7} d="M15 9l5-5M20 4h-5M20 4v5M9 15l-5 5M4 20h5M4 20v-5" />
                                    )}
                                </svg>
                            </button>

                            <button
                                onClick={closeGallery}
                                className="fixed top-6 right-6 text-gray-700 hover:text-gray-900 transition-colors p-2 z-20 cursor-pointer"
                                title="Close gallery"
                            >
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Main Image Container */}
                            <div
                                className={`relative w-full flex items-center justify-center overflow-hidden ${
                                    isFullscreen ? 'p-0' : 'px-20 py-20'
                                }`}
                                style={{
                                    height: isFullscreen ? '100vh' : 'calc(100vh - 200px)'
                                }}
                            >
                                <Image
                                    src={`/images/${images[selectedImageIndex].filename}`}
                                    alt={images[selectedImageIndex].title}
                                    width={1200}
                                    height={1200}
                                    className="object-contain max-w-full max-h-full"
                                    priority
                                />
                            </div>

                            {/* Navigation Arrows - positioned at viewport edges */}
                            <button
                                onClick={() => navigateImage('prev')}
                                className="fixed left-6 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-gray-900 transition-colors p-2 z-20 cursor-pointer"
                                title="Previous image"
                            >
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button
                                onClick={() => navigateImage('next')}
                                className="fixed right-6 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-gray-900 transition-colors p-2 z-20 cursor-pointer"
                                title="Next image"
                            >
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* Image Info - Fixed at bottom with proper spacing - Hidden in fullscreen */}
                            {!isFullscreen && (
                                <div className="fixed bottom-0 left-0 right-0 bg-white py-6 px-8 text-center z-20">
                                    <h3 className="text-base font-normal mb-2 text-gray-900">{images[selectedImageIndex].title}</h3>
                                    <p className="text-sm text-gray-600 font-light mb-2">
                                        {images[selectedImageIndex].size} • {images[selectedImageIndex].medium} • {images[selectedImageIndex].year}
                                    </p>
                                    <p className={`text-sm font-light ${images[selectedImageIndex].status === 'available' ? 'text-green-600' : 'text-red-600'}`}>
                                        {images[selectedImageIndex].status}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}