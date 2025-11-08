import ImageGallery from '../../../components/ImageGallery';
import { getImagesForCategory } from '../../../data/images';

export default function PeoplePage() {
    const images = getImagesForCategory('portfolio-people');

    return <ImageGallery images={images} title="People" />;
}