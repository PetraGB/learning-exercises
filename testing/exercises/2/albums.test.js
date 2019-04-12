const { getAlbumNames } = require("./albums");
const spotify = require("./spotify");

jest.mock("./spotify");

test("album names are in alphabetical order", () => {
    spotify.search.mockResolvedValue({
        albums: {
            href:
                "https://api.spotify.com/v1/search?query=meat+loaf&type=album&offset=0&limit=20",
            items: [
                {
                    album_type: "album",
                    artists: [],
                    available_markets: [],
                    external_urls: {
                        spotify:
                            "https://open.spotify.com/album/6mvI80w5r78niBmwtu7RF9"
                    },
                    href:
                        "https://api.spotify.com/v1/albums/6mvI80w5r78niBmwtu7RF9",
                    id: "6mvI80w5r78niBmwtu7RF9",
                    images: [],
                    name: "Bat Out Of Hell",
                    release_date: "1977",
                    release_date_precision: "year",
                    total_tracks: 7,
                    type: "album",
                    uri: "spotify:album:6mvI80w5r78niBmwtu7RF9"
                },
                {
                    album_type: "album",
                    artists: [],
                    available_markets: [],
                    external_urls: {
                        spotify: ""
                    },
                    href: "",
                    id: "",
                    images: [],
                    name: "Bat Out Of Hell II: Back Into Hell",
                    release_date: "1977",
                    release_date_precision: "year",
                    total_tracks: 7,
                    type: "album",
                    uri: ""
                },
                {
                    album_type: "album",
                    artists: [],
                    available_markets: [],
                    external_urls: {
                        spotify: ""
                    },
                    href: "",
                    id: "",
                    images: [],
                    name: "Dead Ringer",
                    release_date: "1977",
                    release_date_precision: "year",
                    total_tracks: 7,
                    type: "album",
                    uri: ""
                }
            ]
        }
    });
    return getAlbumNames("meat loaf").then(albumNames => {
        expect(albumNames).toEqual(albumNames.sort());
    });
});
