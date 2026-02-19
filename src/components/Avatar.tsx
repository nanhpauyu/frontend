import type { AvatarProps } from "../types";


const Avatar = ({name, isOnline, imageUrl, size}: AvatarProps) => {
    return (
        <>
            <div className={`avatar ${isOnline ? 'avatar-online':''}`}>
                <div className={`w-${size} rounded-full`}>
                    <img src={imageUrl} alt={name}/>
                </div>
            </div>
        </>
    )
}
export default Avatar;