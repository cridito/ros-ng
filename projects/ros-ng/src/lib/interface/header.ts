export interface Header {
    seq: number;
    stamp: {
      secs: number;
      nsecs: number;
    };
    frame_id: string;
}
