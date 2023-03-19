
export default function binarySearch<T>(needle: T, arr: Array<T>) {
    let start = 0,
        end = arr.length - 1;

    while (true) {
        let center = Math.floor((start + end) / 2);
        if (arr[center] === needle) {
            return center;
        }
        if (start > end) {
            return -1;
        }
        if (needle > arr[center]) {
            start = center + 1;
        } else {
            end = center - 1;
        }
    }
}