import ImageGallery from '../../../components/ImageGallery';
import { getImagesForCategory } from '../../../data/images';

export default function Archive2019Page() {
    const images = getImagesForCategory('archive-2019');

    return <ImageGallery images={images} title="Archive 2019" />;
}