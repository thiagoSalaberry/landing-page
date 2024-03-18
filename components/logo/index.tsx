export default function Logo({size}: {size:number}) {
    return (
        <svg width={size} height={size * 1.19} viewBox="0 0 42 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="19" width="4" height="50" rx="2" fill="white"/>
            <rect x="27" y="16" width="4" height="15" rx="2" transform="rotate(-90 27 16)" fill="white"/>
            <rect y="16" width="4" height="15" rx="2" transform="rotate(-90 0 16)" fill="white"/>
        </svg>
    )
}