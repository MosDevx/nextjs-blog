import Image from "next/image";

export function ProfilePic() {
	return(
	<Image src="/images/profile.jpg"
		height={144}
		width={144}
		alt="Moses Wamae"
	/>
	)
}

