import ImageGallery from '../../../components/ImageGallery';
import { getImagesForCategory } from '../../../data/images';

export default function Archive2025Page() {
    const images = getImagesForCategory('archive-2025');

    return <ImageGallery images={images} title="Archive 2025" />;
}