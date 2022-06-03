import { FriendProfile } from "../Card/friendProfile";

export const FriendListProfile = ({ data }) => {
  return (
    <div className="w-full h-full">
      {/* <div className="grid grid-cols-2 gap-8"> */}
      {data &&
        data.map((item) => (
          <FriendProfile
            key={item.createdAt}
            userId={item.id}
            name={item.name}
            username={item.username}
            profileImageId={item.cloudinaryId}
          />
        ))}
      {/* </div> */}
    </div>
  );
};
