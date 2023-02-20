export function getFormatedTime( seconds ) {
    const formatedMinutes = Math.floor(seconds / 60);
    const formatedSeconds = seconds % 60 < 10 ? '0' + seconds % 60 : seconds % 60;
    return [formatedMinutes, formatedSeconds].join(':');
}