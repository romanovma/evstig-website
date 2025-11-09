import ImageGallery from '../../../components/ImageGallery';
import { getImagesForCategory } from '../../../data/images';

export default function Archive2020Page() {
    const images = getImagesForCategory('archive-2020');

    return <ImageGallery images={images} title="Archive 2020" />;
}