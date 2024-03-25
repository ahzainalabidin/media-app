import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import Skeleton from "./Skeleton";

function AlbumsList({ user }) {

    const { data, error, isLoading } = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();

    const handleAddAlbum = () => {
        addAlbum(user);
    };

    let content;

    if (isLoading) {
        content = <Skeleton times={3} className="h-10 w-full" />;
    } else if (error) {
        content = <div>Error loading albums...</div>;
    } else {
        content = data.map((album) => {
            const header = <div>{album.title}</div>
            return (
                <ExpandablePanel key={album.id} header={header}>
                    List of photos in the album
                </ExpandablePanel>)
        });
    }

    return (
        <div>

            <div>
                Albums for {user.name}
                <Button onClick={handleAddAlbum}>
                    + Add Album
                </Button>
            </div>

            <div>
                {content}
            </div>

        </div>
    );

}

export default AlbumsList;
