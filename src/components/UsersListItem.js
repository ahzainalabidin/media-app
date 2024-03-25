import { GoTrash } from "react-icons/go";
import { useThunk } from "../hooks/use-thunk";
import { removeUser } from "../store";
import Button from "./Button";

function UsersListItem({ user }) {

    const [doRemoveUser, isLoading, error] = useThunk(removeUser);

    const handleClick = () => {
        doRemoveUser(user);
    };

    return (
        <div className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center cursor-pointer">

                <Button loading={isLoading} onClick={handleClick}>
                    <GoTrash />
                </Button>

                {error && <div>Error deleting user.</div>}
                {user.name}

            </div>
        </div>
    );

}

export default UsersListItem;
