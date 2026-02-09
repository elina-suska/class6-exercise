export default function Home() {
    const items = [
        { title: "Title 1", img: "https://via.placeholder.com/150" },
        { title: "Title 2", img: "https://via.placeholder.com/150" },
        { title: "Title 3", img: "https://via.placeholder.com/150" },
        { title: "Title 4", img: "https://via.placeholder.com/150" },
    ];

    return (
        <div style={{
            background: "#f4f4f4",
            padding: "40px",
            fontFamily: "Arial, sans-serif"
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "20px"
            }}>
                {items.map((item, idx) => (
                    <div key={idx} style={{
                        background: "#e6e6e6",
                        width: "calc(25% - 15px)",
                        borderRadius: "6px",
                        padding: "10px",
                        textAlign: "center",
                        boxSizing: "border-box"
                    }}>
                        <img
                            src={item.img}
                            alt={item.title}
                            style={{
                                width: "100%",
                                height: "150px",
                                objectFit: "cover",
                                borderRadius: "6px"
                            }}
                        />
                        <div style={{
                            marginTop: "10px",
                            fontWeight: "bold",
                            color: "#333"
                        }}>
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
