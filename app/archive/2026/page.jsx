import ImageGallery from '../../../components/ImageGallery';
import { getImagesForCategory } from '../../../data/images';

export default function Archive2026Page() {
    const images = getImagesForCategory('archive-2026');

    return <ImageGallery images={images} title="Archive 2026" />;
}
