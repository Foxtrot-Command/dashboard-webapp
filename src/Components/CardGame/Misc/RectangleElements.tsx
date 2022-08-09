export const TopRectangle = () =>
    <svg width="600" height="100" x="100" y="48">
        <rect width="600" height="90" style={{
            fill: "rgba(0,0,0, 0.5)"
        }} />
    </svg>;

export const BottomRectangle = () =>
    <svg width="581" height="327" x="99" y="725">

        {/* <defs>
            <clipPath id="corner-path">
                <path d="M -10 0 h560 a20,20 0 0 1 20,20 v400 a20,20 0 0 1 -20,20 h-530 a20,20 0 0 1 -20,-20 v-400 a20,20 0 0 1 20,-20 z" fill="none" stroke="#000000" stroke-width="10" />
            </clipPath>
        </defs> */}

        <rect width="581" height="327" clipPath={"url(#corner-path)"} style={{
            fill: "rgba(0,0,0, 0.5)"
        }} />
    </svg>;