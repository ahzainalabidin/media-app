import PhotosListItem from "./PhotosListItem";
import Button from "./Button";
import Skeleton from "./Skeleton";
import { useAddPhotoMutation, useFetchPhotosQuery } from "../store/apis/photosApi";

function PhotosList({ album }) {

    const { data, error, isFetching } = useFetchPhotosQuery(album);
    const [addPhoto, addPhotoResults] = useAddPhotoMutation();

    const handleAddPhoto = () => {
        addPhoto(album);
    };

    let content;

    if (isFetching) {
        content = <Skeleton times={4} className="h-8 w-8" />;
    } else if (error) {
        content = <div>Error fetching photos...</div>;
    } else {
        content = data.map((photo) => {
            return <PhotosListItem key={photo.id} photo={photo} />
        });
    }

    return (
        <div>

            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">Photos in {album.title}</h3>
                <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
                    + Add Photo
                </Button>
            </div>

            <div className="mx-8 flex flex-row flex-wrap justify-center">
                {content}
            </div>

        </div>
    );

}

export default PhotosList;
