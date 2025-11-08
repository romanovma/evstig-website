import ImageGallery from '../../../components/ImageGallery';
import { getImagesForCategory } from '../../../data/images';

export default function StillLivesPage() {
    const images = getImagesForCategory('portfolio-still-lives');

    return <ImageGallery images={images} title="Still Lives" />;
}