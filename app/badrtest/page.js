export default function Home() {
    return (
        <div style={{
            width: "45rem",
            height: "35rem",
            backgroundColor: "green",
            display: "grid",
            gridTemplateColumns: "1fr 1 fr",
            objectFit: "cover",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",

        }}>
            <div>
                <div>
                    <img src="https://placecats.com/300/200" alt="cat photo"></ img>
                </div>
            </div>
            <div>
                <div>Title 2</div>
            </div>
            <div>
                <div>Title 3</div>
            </div>
            <div>
                <div>Title 4</div>
            </div>
        </div>
    )

}

