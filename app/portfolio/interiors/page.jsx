import ImageGallery from '../../../components/ImageGallery';
import { getImagesForCategory } from '../../../data/images';

export default function InteriorsPage() {
    const images = getImagesForCategory('portfolio-interiors');

    return <ImageGallery images={images} title="Interiors" />;
}