import ImageGallery from '../../../components/ImageGallery';
import { getImagesForCategory } from '../../../data/images';

export default function DrawingsPage() {
    const images = getImagesForCategory('portfolio-drawings');

    return <ImageGallery images={images} title="Drawings" />;
}