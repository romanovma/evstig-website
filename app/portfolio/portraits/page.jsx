import ImageGallery from '../../../components/ImageGallery';
import { getImagesForCategory } from '../../../data/images';

export default function PortraitsPage() {
    const images = getImagesForCategory('portfolio-people'); // Using same images as People page

    return <ImageGallery images={images} title="Portraits" />;
}