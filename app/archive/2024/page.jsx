import ImageGallery from '../../../components/ImageGallery';
import { getImagesForCategory } from '../../../data/images';

export default function Archive2024Page() {
    const images = getImagesForCategory('archive-2024');

    return <ImageGallery images={images} title="Archive 2024" />;
}