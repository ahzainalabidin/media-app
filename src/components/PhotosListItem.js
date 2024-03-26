import { useRemovePhotoMutation } from "../store/apis/photosApi";

function PhotosListItem({ photo }) {

    const [removePhoto, results] = useRemovePhotoMutation();

    return (
        <div className="relative m-2">
            <img className="h-20 w-20" src={photo.url} alt="random pic" />
        </div>
    );

}

export default PhotosListItem;
