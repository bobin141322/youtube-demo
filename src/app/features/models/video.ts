export interface Video {

    id: {
        videoId: string;
    };
    snippet: {
        title: string;
        thumbnails: {
            high: {
                url: string,
                width: number,
                height: number
            };
        };
    };
}
