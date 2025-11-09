import ImageGallery from '../../../components/ImageGallery';
import { getImagesForCategory } from '../../../data/images';

export default function Archive20162018Page() {
    const images = getImagesForCategory('archive-2016-2018');

    return <ImageGallery images={images} title="Archive 2016-2018" />;
}