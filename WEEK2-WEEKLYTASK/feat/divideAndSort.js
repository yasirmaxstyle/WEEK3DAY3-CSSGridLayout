export function divideAndSort(int) {
    let arr = int.toString().split('0').map(e => e.split('').sort().join('')).join('');
    return parseInt(arr)
}