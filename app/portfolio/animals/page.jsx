import ImageGallery from '../../../components/ImageGallery';
import { getImagesForCategory } from '../../../data/images';

export default function AnimalsPage() {
    const images = getImagesForCategory('portfolio-animals');

    return <ImageGallery images={images} title="Animals" />;
}