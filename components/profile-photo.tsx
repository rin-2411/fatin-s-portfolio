import Image from "next/image";

export default function ProfilePhoto() {
  return (
    <div className="profile-photo-control">
      <div className="portrait-frame">
        <span className="portrait-inner">
          <Image
            className="profile-photo"
            src="/profile.jpg"
            alt="Fatin's profile picture"
            fill
            sizes="272px"
          />
        </span>
        <span className="profile-photo-label font-hand text-2xl text-rose">
          that&apos;s me!
        </span>
      </div>
    </div>
  );
}
