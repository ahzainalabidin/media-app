import { GoTrash } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";

function AlbumsListItem({ album }) {

    const header = <div>
        <Button>
            <GoTrash />
        </Button>
        {album.title}
    </div>;

    return (
        <ExpandablePanel key={album.id} header={header}>
            List of photos in the album
        </ExpandablePanel>
    );

}

export default AlbumsListItem;
